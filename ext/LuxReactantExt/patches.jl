Utils.vec(x::AnyTracedRArray) = Reactant.TracedUtils.materialize_traced_array(vec(x))

# XXX: Use PoolDims once EnzymeJAX supports stablehlo.reduce_window adjoint
Lux.calculate_pool_dims(g::Lux.GlobalPoolMode, ::TracedRArray) = g

# Embedding
function (e::Lux.Embedding)(x::TracedRNumber{<:Reactant.ReactantInt}, ps, st::NamedTuple)
    return ps.weight[:, x], st
end

# Tracing Patches
function Reactant.make_tracer(
        seen, @nospecialize(model::StatefulLuxLayer), @nospecialize(path), mode; kwargs...
)
    return StatefulLuxLayer(
        model.model,
        Reactant.make_tracer(seen, model.ps, path, mode; kwargs...),
        Reactant.make_tracer(seen, model.st, path, mode; kwargs...),
        Reactant.make_tracer(seen, model.st_any, path, mode; kwargs...),
        model.fixed_state_type
    )
end
