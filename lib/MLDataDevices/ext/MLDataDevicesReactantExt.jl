module MLDataDevicesReactantExt

using Adapt: Adapt
using MLDataDevices: MLDataDevices, Internal, XLADevice, CPUDevice, get_device_type
using Reactant: Reactant, XLA, RArray, ConcreteRArray, TracedRArray, TracedRNumber

@static if isdefined(Reactant, :ConcreteRNumber)
    const ConcreteRType = Union{ConcreteRArray, Reactant.ConcreteRNumber}
    const ReactantType = Union{
        RArray, TracedRArray, TracedRNumber, Reactant.ConcreteRNumber
    }
else
    const ConcreteRType = ConcreteRArray
    const ReactantType = Union{RArray, TracedRArray, TracedRNumber}
end

MLDataDevices.loaded(::Union{XLADevice, Type{<:XLADevice}}) = true
MLDataDevices.functional(::Union{XLADevice, Type{<:XLADevice}}) = true

# Default RNG: Forward to CPU, we will compile it
function MLDataDevices.default_device_rng(::XLADevice)
    return MLDataDevices.default_device_rng(CPUDevice())
end

# Query Device from Array
function Internal.get_device(x::ConcreteRType)
    client = XLA.client(x.data)
    device = XLA.device(x.data)
    return XLADevice(client, device)
end

function Internal.get_device(::Union{TracedRArray, TracedRNumber})
    error("`get_device` isn't meant to be called inside `Reactant.@compile` context.")
end

Internal.get_device_type(::ReactantType) = XLADevice

# unsafe_free!
Internal.unsafe_free_internal!(::Type{XLADevice}, x::AbstractArray) = nothing

# Device Transfer
function Adapt.adapt_storage(dev::XLADevice, x::AbstractArray{<:Reactant.ReactantPrimitive})
    @warn "XLADevice got an array on device: $(get_device_type(x)). We will have to \
           transfer this via CPU." maxlog=1
    return Adapt.adapt_storage(dev, Adapt.adapt_storage(CPUDevice(), x))
end

function Adapt.adapt_storage(dev::XLADevice, x::Array{<:Reactant.ReactantPrimitive})
    client = dev.client === missing ? XLA.default_backend[] : dev.client
    device = dev.device === missing ?
             XLA.ClientGetDevice(client, XLA.default_device_idx[]) : dev.device
    return ConcreteRArray{eltype(x), ndims(x)}(
        XLA.AsyncBuffer(XLA.ArrayFromHostBuffer(client, x, device), nothing), size(x))
end

end
