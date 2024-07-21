@testitem "Layer Normalization" tags=[:normalization] setup=[SharedTestSetup] begin
    using Statistics

    function _setup_layernorm(aType, T, x_size, affine_shape)
        x = __generate_fixed_array(T, x_size) |> aType
        if affine_shape !== nothing
            scale = __generate_fixed_array(T, (affine_shape..., 1)) |> aType
            bias = __generate_fixed_array(T, (affine_shape..., 1)) |> aType
            return x, scale, bias
        else
            return x, nothing, nothing
        end
    end

    anonact = x -> x^3

    @testset "$mode" for (mode, aType, on_gpu) in MODES
        @testset "eltype $T, size $x_shape, $act" for T in (Float16, Float32, Float64),
            x_shape in ((3, 3, 2, 1), (2, 2, 2, 1), (2, 3, 2, 2)),
            affine_shape in (nothing, x_shape[1:3], (1, 1, 1), (1, 1, x_shape[3])),
            act in (identity, relu, tanh_fast, sigmoid_fast, anonact)

            dims = Colon()
            epsilon = LuxLib.__default_epsilon(T)
            _f = (args...) -> layernorm(args..., act, dims, epsilon)

            x, scale, bias = _setup_layernorm(aType, T, x_shape, affine_shape)

            @test @inferred(layernorm(x, scale, bias, act, dims, epsilon)) isa Any
            @jet layernorm(x, scale, bias, act, dims, epsilon)

            y = _f(x, scale, bias)

            @test y isa aType{T, length(x_shape)}
            @test size(y) == x_shape

            if affine_shape === nothing && act === identity
                @test check_approx(mean(y; dims), 0; atol=1e-3, rtol=1e-3)
                @test check_approx(std(y; dims), 1; atol=1e-1, rtol=1e-1)
            end

            fp16 = T == Float16
            atol = fp16 ? 1.0f-2 : 1.0f-3
            rtol = fp16 ? 1.0f-2 : 1.0f-3

            if affine_shape !== nothing
                fp16 = T == Float16
                __f = (args...) -> sum(_f(x, args...))
                skip_fd = act === relu
                allow_unstable() do
                    @eval @test_gradients $__f $scale $bias soft_fail=$fp16 atol=$atol rtol=$rtol gpu_testing=$on_gpu skip_finite_differences=$(skip_fd)
                end
            end

            if anonact !== act
                lfn = (x, sc, b, act, dim, ϵ) -> sum(layernorm(x, sc, b, act, dim, ϵ))
                @test @inferred(Zygote.gradient(
                    lfn, x, scale, bias, act, dims, epsilon)) isa Any
            end

            if !on_gpu && !fp16
                __f = (args...) -> sum(first(layernorm(args..., act, dims, epsilon)))
                ∂x, ∂scale, ∂bias = Zygote.gradient(__f, x, scale, bias)

                ∂x_enz = Enzyme.make_zero(x)
                (∂b, ∂sc) = if bias === nothing
                    Const(nothing), Const(nothing)
                else
                    (Duplicated(bias, Enzyme.make_zero(bias)),
                        Duplicated(scale, Enzyme.make_zero(scale)))
                end
                Enzyme.autodiff(Reverse, __f, Active, Duplicated(x, ∂x_enz), ∂sc, ∂b)

                @test ∂x≈∂x_enz rtol=rtol atol=atol
                if bias !== nothing
                    @test ∂sc.dval≈∂scale rtol=rtol atol=atol
                    @test ∂b.dval≈∂bias rtol=rtol atol=atol
                end
            end
        end
    end
end
