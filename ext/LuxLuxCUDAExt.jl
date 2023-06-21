module LuxLuxCUDAExt

isdefined(Base, :get_extension) ? (using LuxCUDA) : (using ..LuxCUDA)
using ChainRulesCore, Lux, LuxLib, Random
import Adapt: adapt_storage, adapt
import ChainRulesCore as CRC

function __init__()
    Lux.ACCELERATOR_STATE_CHANGED[] = true
    return
end

# utils.jl
Lux.replicate(rng::CUDA.RNG) = deepcopy(rng)

@inline function Lux._init_hidden_state(rng::AbstractRNG,
    rnn,
    x::Union{CUDA.StridedSubCuArray, CuArray})
    return CuArray(rnn.init_state(rng, rnn.out_dims, size(x, 2)))
end

@inline function Lux._conv(x::SubArray{T, N, <:CuArray}, weight, cdims) where {T, N}
    return conv(copy(x), weight, cdims)
end

@inline function Lux._conv_transpose(x::SubArray{T, N, <:CuArray},
    weight,
    cdims) where {T, N}
    return ∇conv_data(copy(x), weight, cdims)
end

# Device Transfer
## To GPU
adapt_storage(::Lux.LuxCUDAAdaptor, x) = cu(x)
adapt_storage(::Lux.LuxCUDAAdaptor, rng::AbstractRNG) = rng

## To CPU
adapt_storage(::Lux.LuxCPUAdaptor, x::CUSPARSE.AbstractCuSparseMatrix) = adapt(Array, x)

## Chain Rules
CRC.rrule(::Type{Array}, x::CuArray) = Array(x), Δ -> (NoTangent(), cu(Δ))

function CRC.rrule(::typeof(adapt_storage), to::Lux.LuxCPUAdaptor, x::CUDA.AbstractGPUArray)
    function ∇adapt_storage(Δ)
        return (NoTangent(), NoTangent(), adapt_storage(Lux.LuxCUDAAdaptor(), Δ))
    end
    return adapt_storage(to, x), ∇adapt_storage
end

function CRC.rrule(::typeof(adapt_storage), to::Lux.LuxCUDAAdaptor, x::Array)
    function ∇adapt_storage(Δ)
        return (NoTangent(), NoTangent(), adapt_storage(Lux.LuxCPUAdaptor(), Δ))
    end
    return adapt_storage(to, x), ∇adapt_storage
end

end
