@concrete struct KAN{usebias, return_intermediates, T <: NamedTuple} <:
                 AbstractExplicitLayer
    layers::T
    width
    init_bias
end

function KAN(width, activation::A=silu; use_bias::Union{Bool, Val}=Val(true),
        return_intermediates::Union{Bool, Val}=Val(false),
        init_bias::F=kaiming_normal, scale_noise_base=nothing,
        init_scale_base=__scale_base_init, kwargs...) where {A, F}
    activation_functions = Vector{KANLayer}(undef, length(width) - 1)
    init_scale_base = if init_scale_base === __scale_base_init
        scale_noise_base === nothing && (scale_noise_base = 0.1f0)
        __scale_base_init(; scale_noise_base)
    else
        @assert scale_noise_base===nothing "`scale_noise_base` can be supplied only if \
                                            `init_scale_base` is `__scale_base_init`"
        init_scale_base
    end
    for i in 1:(length(width) - 1)
        activation_functions[i] = KANLayer(
            width[i] => width[i + 1], activation; init_scale_base, kwargs...)
    end
    names = ntuple(i -> Symbol("layer_$i"), length(activation_functions))
    layers = NamedTuple{names}(activation_functions)
    return KAN{__unwrap_val(use_bias), __unwrap_val(return_intermediates)}(
        layers, width, init_bias)
end

function initialparameters(rng::AbstractRNG,
        kan::KAN{usebias, return_intermediates, <:NamedTuple{names}}) where {
        usebias, return_intermediates, names}
    if usebias
        biases = NamedTuple{names}(map(Base.Fix1(kan.init_bias, rng), kan.width[2:end]))
        return (; layers=initialparameters(rng, kan.layers), biases)
    end
    return (; layers=initialparameters(rng, kan.layers))
end

initialstates(rng::AbstractRNG, kan::KAN) = initialstates(rng, kan.layers)

function (kan::KAN{usebias})(x::AbstractMatrix, ps, st::NamedTuple) where {usebias}
    return applykanlayers(kan, kan.layers, x, ps.layers, _getproperty(ps, Val(:biases)), st)
end

@generated function applykanlayers(
        ::KAN{usebias, return_intermediates}, layers::NamedTuple{fields}, x, ps, biases::B,
        st::NamedTuple{fields}) where {usebias, return_intermediates, B, fields}
    N = length(fields)
    x_symbols = [gensym("x") for _ in 1:N]
    y_symbols = vcat([:x], [gensym("y") for _ in 1:N])
    preact_symbols = [gensym("preact") for _ in 1:N]
    postact_symbols = [gensym("postact") for _ in 1:N]
    postspline_symbols = [gensym("postspline") for _ in 1:N]
    st_symbols = [gensym("st") for _ in 1:N]
    calls = Expr[]
    for i in 1:N
        push!(calls,
            :((($(x_symbols[i]), $(preact_symbols[i]), $(postact_symbols[i]), $(postspline_symbols[i])), $(st_symbols[i])) = Lux.apply(
                layers.$(fields[i]), $(y_symbols[i]), ps.$(fields[i]), st.$(fields[i]))))
        if usebias
            push!(calls, :($(y_symbols[i + 1]) = $(x_symbols[i]) .+ biases.$(fields[i])))
        end
    end
    ret_expr = if return_intermediates
        :(($(y_symbols[N + 1]),
            (($(Tuple(x_symbols)...),), ($(Tuple(preact_symbols)...),),
                ($(Tuple(postact_symbols)...),), ($(Tuple(postspline_symbols)...),))))
    else
        :($(y_symbols[N + 1]))
    end
    push!(calls, :(return $ret_expr, NamedTuple{$fields}((($(Tuple(st_symbols)...),)))))
    return Expr(:block, calls...)
end

@concrete struct KANGrid{T, mode}
    grid_eps
    grid_range

    function KANGrid{T}(grid_eps, grid_range) where {T <: Real}
        return KANGrid{T, :uniform}(grid_eps, grid_range)
    end
    function KANGrid{T, mode}(grid_eps, grid_range) where {T <: Real, mode}
        grid_eps = T(grid_eps)
        grid_range = T.(grid_range)
        return new{T, mode, typeof(grid_eps), typeof(grid_range)}(grid_eps, grid_range)
    end
end

function (grid::KANGrid{T, :uniform})(
        nsplines::Integer, num_grid_intervals::Integer) where {T <: Real}
    return ones(T, nsplines) .*
           LinRange(grid.grid_range[1], grid.grid_range[2], num_grid_intervals + 1)'
end

@concrete struct KANLayer{spline_trainable, base_trainable, order} <: AbstractExplicitLayer
    in_dims::Int
    out_dims::Int
    num_grid_intervals::Int
    activation

    scale_noise
    init_noise
    init_scale_base
    init_scale_spline

    grid
end

function KANLayer(mapping::Pair{<:Int, <:Int}, activation=silu; num_grid_intervals::Int=5,
        spline_order::Union{Int, Val}=Val(3), scale_noise=0.1f0, init_noise=randn32,
        init_scale_base=__scale_base_init, init_scale_spline=ones32,
        grid=KANGrid{Float32, :uniform}(1.0f-2, (-1.0f0, 1.0f0)),
        spline_trainable::Union{Bool, Val}=Val(true),
        base_trainable::Union{Bool, Val}=Val(true), allow_fast_activation::Bool=true)
    activation = allow_fast_activation ? NNlib.fast_act(activation) : activation
    in_dims, out_dims = mapping
    return KANLayer{__unwrap_val(spline_trainable),
        __unwrap_val(base_trainable), __unwrap_val(spline_order)}(
        in_dims, out_dims, num_grid_intervals, activation, scale_noise,
        init_noise, init_scale_base, init_scale_spline, grid)
end

function initialparameters(
        rng::AbstractRNG, kan::KANLayer{spT, bT, order}) where {spT, bT, order}
    grid = kan.grid(kan.in_dims * kan.out_dims, kan.num_grid_intervals)
    noises = (kan.init_noise(rng, kan.in_dims * kan.out_dims, size(grid, 2)) .- (1 // 2)) .*
             kan.scale_noise ./ kan.num_grid_intervals
    coefficients = __curve_to_coefficient(grid, noises, grid, Val(order))
    ps = (; coefficients)
    spT && (ps = merge(
        ps, (; scale_spline=kan.init_scale_spline(rng, kan.in_dims, kan.out_dims))))
    bT &&
        (ps = merge(ps, (; scale_base=kan.init_scale_base(rng, kan.in_dims, kan.out_dims))))
    return ps
end

function initialstates(::AbstractRNG, kan::KANLayer{spT, bT, order}) where {spT, bT, order}
    grid = kan.grid(kan.in_dims * kan.out_dims, kan.num_grid_intervals)
    mask = ones(eltype(grid), (kan.in_dims, kan.out_dims))
    st = (; grid, mask, weight_sharing=Colon(), lock_counter=0,
        lock_id=zeros(Int, kan.in_dims, kan.out_dims))
    !spT && (st = merge(
        st, (; scale_spline=kan.init_scale_spline(rng, kan.in_dims, kan.out_dims))))
    !bT &&
        (st = merge(st, (; scale_base=kan.init_scale_base(rng, kan.in_dims, kan.out_dims))))
    return st
end

# @generated needed else Zygote is type unstable
@views @generated function (kan::KANLayer{spT, bT, order})(
        x::AbstractMatrix, ps, st::NamedTuple) where {spT, bT, order}
    scale_expr = spT ? :(ps.scale_spline) : :(st.scale_spline)
    base_expr = bT ? :(ps.scale_base) : :(st.scale_base)
    return quote
        B = size(x, 2)
        scale_spline = $(scale_expr)
        scale_base = $(base_expr)
        x_ = reshape(x, :, 1, B)
        preacts = x_ .* __ones_like(x, (1, kan.out_dims, 1))                  # I x O x B
        y = __coefficient_to_curve(reshape(preacts, :, B), st.grid[st.weight_sharing, :],
            ps.coefficients[st.weight_sharing, :], $(Val(order)))             # (I x O) x B
        postspline = reshape(y, kan.in_dims, kan.out_dims, B)
        mask = CRC.ignore_derivatives(st.mask)
        postacts = @. (scale_base * kan.activation(x_) + scale_spline * postspline) * mask
        res = dropdims(sum(postacts; dims=1); dims=1)                         # O x B
        return (res, preacts, postacts, postspline), st
    end
end

# Exported KANUtils
module KANUtils

using ..Lux: Lux

function update_grid_from_samples end
function initialize_grid_from_parent end
function get_subset end
function lock_activations end
function unlock_activations end

end

# utilities for splines
## TODO: Upstream to NNlib
@inline silu(x) = x * sigmoid(x)  # Not present in NNlib
@inline silu_fast(x) = x * sigmoid_fast(x)

@inline NNlib.fast_act(::typeof(silu), ::AbstractArray=1:0) = silu_fast

@views @generated function __extend_grid(grid::AbstractMatrix, ::Val{k}=Val(3)) where {k}
    k == 0 && return :(grid)
    calls = [:(grid = hcat(grid[:, 1:1] .- h, grid, grid[:, end:end] .+ h)) for _ in 1:k]
    return quote
        h = (grid[:, end:end] .- grid[:, 1:1]) ./ $(k)
        $(calls...)
        return grid
    end
end

# x       --> N splines x B
# grid    --> N splines x Grid size
# Outputs --> N splines x N coeffs x B
@views @generated function __bspline_evaluate(
        x::AbstractMatrix, grid::AbstractMatrix, ::Val{order}=Val(3),
        ::Val{extend}=Val(true)) where {order, extend}
    grid_expr = extend ? :(grid = __extend_grid(grid, $(Val(order)))) : :()
    return quote
        $(grid_expr)
        return __bspline_evaluate(reshape(x, size(x, 1), 1, size(x, 2)),
            reshape(grid, size(grid, 1), size(grid, 2), 1), $(Val(order)))
    end
end

@views function __bspline_evaluate(
        x::AbstractArray{T1, 3}, grid::AbstractArray{T2, 3}, ::Val{0}) where {T1, T2}
    return (x .≥ grid[:, 1:(end - 1), :]) .* (x .< grid[:, 2:end, :])
end

CRC.@non_differentiable __bspline_evaluate(
    ::AbstractArray{<:Any, 3}, ::AbstractArray{<:Any, 3}, ::Val{0})

@views function __bspline_evaluate(x::AbstractArray{T1, 3}, grid::AbstractArray{T2, 3},
        ::Val{order}) where {T1, T2, order}
    y = __bspline_evaluate(x, grid, Val(order - 1))

    return @. (x - grid[:, 1:(end - order - 1), :]) /
              (grid[:, (order + 1):(end - 1), :] - grid[:, 1:(end - order - 1), :]) *
              y[:, 1:(end - 1), :] +
              (grid[:, (order + 2):end, :] - x) /
              (grid[:, (order + 2):end, :] - grid[:, 2:(end - order), :]) * y[:, 2:end, :]
end

# grid should be fixed, so we don't compute the gradient wrt the grid
@views function CRC.rrule(::typeof(__bspline_evaluate), x::AbstractArray{T1, 3},
        grid::AbstractArray{T2, 3}, ::Val{order}) where {T1, T2, order}
    y = __bspline_evaluate(x, grid, Val(order - 1))

    y₁ = y[:, 1:(end - 1), :]
    y₂ = y[:, 2:end, :]

    m₁ = @. y₁ / (grid[:, (order + 1):(end - 1), :] - grid[:, 1:(end - order - 1), :])
    m₂ = @. y₂ / (grid[:, (order + 2):end, :] - grid[:, 2:(end - order), :])

    res = @. (x - grid[:, 1:(end - order - 1), :]) * m₁ +
             (grid[:, (order + 2):end, :] - x) * m₂

    ∇bspline_evaluate = let m₁ = m₁, m₂ = m₂, x = x
        Δ -> begin
            (Δ isa CRC.NoTangent || Δ isa CRC.ZeroTangent) &&
                return ntuple(Returns(NoTangent()), 4)
            Δ_ = CRC.unthunk(Δ)
            if ArrayInterface.fast_scalar_indexing(x)  # Proxy check for GPUs
                ∂x = @. order * (m₁[:, 1, :] - m₂[:, 1, :]) * Δ_[:, 1, :]
                @inbounds for i in eachindex(axes(m₁, 2))[2:end]
                    @. ∂x += order * (m₁[:, i, :] - m₂[:, i, :]) * Δ_[:, i, :]
                end
            else
                ∂B = @. order * (m₁ - m₂) * Δ_
                ∂x = similar(x)
                sum!(∂x, ∂B)
            end
            return NoTangent(), ∂x, NoTangent(), NoTangent()
        end
    end

    return res, ∇bspline_evaluate
end

# x       --> N splines x B
# grid    --> N splines x Grid size
# coef    --> N splines x N coeffs
# Outputs --> N splines x B
function __coefficient_to_curve(x::AbstractMatrix, grid::AbstractMatrix,
        coef::AbstractMatrix, O::Val{order}) where {order}
    return dropdims(
        sum(
            __bspline_evaluate(x, grid, O) .*
            reshape(coef, size(coef, 1), size(coef, 2), 1);
            dims=2);
        dims=2)
end

# x       --> N splines x B
# y       --> N splines x B
# grid    --> N splines x Grid size
# Outputs --> N splines x N coeffs
function __curve_to_coefficient(x::AbstractMatrix, y::AbstractMatrix,
        grid::AbstractMatrix, O::Val{order}) where {order}
    # For GPU Arrays avoid using lazy wrappers, we use specialized LAPACK routines there
    A = __maybe_lazy_permutedims(__bspline_evaluate(x, grid, O), Val((1, 3, 2)))
    return __batched_least_squares(A, y)
end

# TODO: GPUs typically ship faster routines for batched least squares.
# NOTE: The batching here is over the first dimension of A and b
function __batched_least_squares(A::AbstractArray{T, 3}, b::AbstractMatrix) where {T}
    return mapreduce(__expanddims1 ∘ \, vcat, eachslice(A; dims=1), eachslice(b; dims=1))
end

# TODO: Maybe upstream to WeightInitializers.jl
function __scale_base_init(rng::AbstractRNG, ::Type{T}, dims::Integer...;
        scale_noise_base=0.1) where {T <: Real}
    @assert length(dims)==2 "Expected 2 dimensions for scale_base initialization"
    in_dims, out_dims = dims
    return T(inv(sqrt(in_dims))) .+
           (randn(rng, T, in_dims, out_dims) .* T(2) .- T(1)) .* T(scale_noise_base)
end

@inline function __scale_base_init(dims::Integer...; kwargs...)
    return __scale_base_init(WeightInitializers._default_rng(), Float32, dims...; kwargs...)
end

@inline function __scale_base_init(rng::AbstractRNG; kwargs...)
    return WeightInitializers.__partial_apply(__scale_base_init, (rng, (; kwargs...)))
end

@inline function __scale_base_init(rng::AbstractRNG, ::Type{T}; kwargs...) where {T <: Real}
    return WeightInitializers.__partial_apply(__scale_base_init, ((rng, T), (; kwargs...)))
end

@inline function __scale_base_init(rng::AbstractRNG, dims::Integer...; kwargs...)
    return __scale_base_init(rng, Float32, dims...; kwargs...)
end

@inline function __scale_base_init(; kwargs...)
    return WeightInitializers.__partial_apply(__scale_base_init, (; kwargs...))
end
