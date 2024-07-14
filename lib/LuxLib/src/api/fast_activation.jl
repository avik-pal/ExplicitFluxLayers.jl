"""
    fast_activation!!(σ::F, x::AbstractArray) where {F}

Compute `σ.(x)` with the best possible implementation available. If it is possible to
rewrite `x` in-place, it does so. If `x` is an immutable array, it falls back to the
generic implementation.

!!! note

    This function doesn't replace `σ` with `NNlib.fast_act(σ, ...)`, that needs to be
    done by the user if needed.

## Arguments

  - `σ`: Activation function
  - `x`: Input array

## Returns

  - Output Array with the same size as `x`
"""
fast_activation!!(::typeof(identity), x::AbstractArray) = x

function fast_activation!!(σ::F, x::AbstractArray) where {F}
    return fast_activation!!(Val(ArrayInterface.can_setindex(typeof(x))), σ, x)
end

function fast_activation!!(::Val{true}, σ::F, x::AbstractArray) where {F}
    return __fast_activation_impl!!(σ, x)
end
fast_activation!!(::Val{false}, σ::F, x::AbstractArray) where {F} = σ.(x)
