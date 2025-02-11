import{_ as o,c as n,a2 as t,j as s,a,G as l,B as r,o as p}from"./chunks/framework.DPiAi8YZ.js";const R=JSON.parse('{"title":"LuxCore","description":"","frontmatter":{},"headers":[],"relativePath":"api/Building_Blocks/LuxCore.md","filePath":"api/Building_Blocks/LuxCore.md","lastUpdated":null}'),d={name:"api/Building_Blocks/LuxCore.md"},c={class:"jldocstring custom-block"},u={class:"jldocstring custom-block"},h={class:"jldocstring custom-block"},k={class:"jldocstring custom-block"},b={class:"jldocstring custom-block"},g={class:"jldocstring custom-block"},y={class:"jldocstring custom-block"},m={class:"jldocstring custom-block"},L={class:"jldocstring custom-block"},x={class:"jldocstring custom-block"},f={class:"jldocstring custom-block"},C={class:"jldocstring custom-block"},j={class:"jldocstring custom-block"},v={class:"jldocstring custom-block"},E={class:"jldocstring custom-block"},F={class:"jldocstring custom-block"},A={class:"jldocstring custom-block"},B={class:"jldocstring custom-block"};function T(D,e,w,N,O,S){const i=r("Badge");return p(),n("div",null,[e[54]||(e[54]=t('<h1 id="luxcore" tabindex="-1">LuxCore <a class="header-anchor" href="#luxcore" aria-label="Permalink to &quot;LuxCore&quot;">​</a></h1><p><code>LuxCore.jl</code> defines the abstract layers for Lux. Allows users to be compatible with the entirely of <code>Lux.jl</code> without having such a heavy dependency. If you are depending on <code>Lux.jl</code> directly, you do not need to depend on <code>LuxCore.jl</code> (all the functionality is exported via <code>Lux.jl</code>).</p><h2 id="Abstract-Types" tabindex="-1">Abstract Types <a class="header-anchor" href="#Abstract-Types" aria-label="Permalink to &quot;Abstract Types {#Abstract-Types}&quot;">​</a></h2>',3)),s("details",c,[s("summary",null,[e[0]||(e[0]=s("a",{id:"LuxCore.AbstractLuxLayer",href:"#LuxCore.AbstractLuxLayer"},[s("span",{class:"jlbinding"},"LuxCore.AbstractLuxLayer")],-1)),e[1]||(e[1]=a()),l(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[2]||(e[2]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AbstractLuxLayer</span></span></code></pre></div><p>Abstract Type for all Lux Layers</p><p>Users implementing their custom layer, <strong>must</strong> implement</p><ul><li><p><code>initialparameters(rng::AbstractRNG, layer::CustomAbstractLuxLayer)</code> – This returns a <code>NamedTuple</code> containing the trainable parameters for the layer.</p></li><li><p><code>initialstates(rng::AbstractRNG, layer::CustomAbstractLuxLayer)</code> – This returns a NamedTuple containing the current state for the layer. For most layers this is typically empty. Layers that would potentially contain this include <code>BatchNorm</code>, <code>LSTM</code>, <code>GRU</code>, etc.</p></li></ul><p>Optionally:</p><ul><li><p><code>parameterlength(layer::CustomAbstractLuxLayer)</code> – These can be automatically calculated, but it is recommended that the user defines these.</p></li><li><p><code>statelength(layer::CustomAbstractLuxLayer)</code> – These can be automatically calculated, but it is recommended that the user defines these.</p></li></ul><p>See also <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.AbstractLuxContainerLayer"><code>AbstractLuxContainerLayer</code></a></p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L23-L45" target="_blank" rel="noreferrer">source</a></p>',8))]),s("details",u,[s("summary",null,[e[3]||(e[3]=s("a",{id:"LuxCore.AbstractLuxWrapperLayer",href:"#LuxCore.AbstractLuxWrapperLayer"},[s("span",{class:"jlbinding"},"LuxCore.AbstractLuxWrapperLayer")],-1)),e[4]||(e[4]=a()),l(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[5]||(e[5]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AbstractLuxWrapperLayer{layer} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractLuxLayer</span></span></code></pre></div><p>See <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.AbstractLuxContainerLayer"><code>AbstractLuxContainerLayer</code></a> for detailed documentation. This abstract type is very similar to <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.AbstractLuxContainerLayer"><code>AbstractLuxContainerLayer</code></a> except that it allows for a single layer to be wrapped in a container.</p><p>Additionally, on calling <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.initialparameters"><code>initialparameters</code></a> and <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.initialstates"><code>initialstates</code></a>, the parameters and states are <strong>not</strong> wrapped in a <code>NamedTuple</code> with the same name as the field.</p><p>As a convenience, we define the fallback call <code>(::AbstractLuxWrapperLayer)(x, ps, st)</code>, which calls <code>getfield(x, layer)(x, ps, st)</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L232-L245" target="_blank" rel="noreferrer">source</a></p>',5))]),s("details",h,[s("summary",null,[e[6]||(e[6]=s("a",{id:"LuxCore.AbstractLuxContainerLayer",href:"#LuxCore.AbstractLuxContainerLayer"},[s("span",{class:"jlbinding"},"LuxCore.AbstractLuxContainerLayer")],-1)),e[7]||(e[7]=a()),l(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[8]||(e[8]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AbstractLuxContainerLayer{layers} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractLuxLayer</span></span></code></pre></div><p>Abstract Container Type for certain Lux Layers. <code>layers</code> is a tuple containing fieldnames for the layer, and constructs the parameters and states using those.</p><p>Users implementing their custom layer can extend the same functions as in <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.AbstractLuxLayer"><code>AbstractLuxLayer</code></a>.</p><div class="tip custom-block"><p class="custom-block-title">Advanced Structure Manipulation</p><p>Advanced structure manipulation of these layers post construction is possible via <code>Functors.fmap</code>. For a more flexible interface, we recommend using <code>Lux.Experimental.@layer_map</code>.</p></div><div class="tip custom-block"><p class="custom-block-title"><code>fmap</code> Support</p><p><code>fmap</code> support needs to be explicitly enabled by loading <code>Functors.jl</code> and <code>Setfield.jl</code>.</p></div><div class="warning custom-block"><p class="custom-block-title">Changes from Pre-1.0 Behavior</p><p>Previously if <code>layers</code> was a singleton tuple, <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.initialparameters"><code>initialparameters</code></a> and <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.initialstates"><code>initialstates</code></a> would return the parameters and states for the single field <code>layers</code>. From <code>v1.0.0</code> onwards, even for singleton tuples, the parameters/states are wrapped in a <code>NamedTuple</code> with the same name as the field. See <a href="/v1.4.1/api/Building_Blocks/LuxCore#LuxCore.AbstractLuxWrapperLayer"><code>AbstractLuxWrapperLayer</code></a> to replicate the previous behavior of singleton tuples.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L183-L211" target="_blank" rel="noreferrer">source</a></p>',7))]),e[55]||(e[55]=s("h2",{id:"general",tabindex:"-1"},[a("General "),s("a",{class:"header-anchor",href:"#general","aria-label":'Permalink to "General"'},"​")],-1)),s("details",k,[s("summary",null,[e[9]||(e[9]=s("a",{id:"LuxCore.apply",href:"#LuxCore.apply"},[s("span",{class:"jlbinding"},"LuxCore.apply")],-1)),e[10]||(e[10]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[11]||(e[11]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model, x, ps, st)</span></span></code></pre></div><p>In most cases this function simply calls <code>model(x, ps, st)</code>. However, it is still recommended to call <code>apply</code> instead of <code>model(x, ps, st)</code> directly. Some of the reasons for this include:</p><ol><li><p>For certain types of inputs <code>x</code>, we might want to perform preprocessing before calling <code>model</code>. For eg, if <code>x</code> is an Array of <code>ReverseDiff.TrackedReal</code>s this can cause significant regressions in <code>model(x, ps, st)</code> (since it won&#39;t hit any of the BLAS dispatches). In those cases, we would automatically convert <code>x</code> to a <code>ReverseDiff.TrackedArray</code>.</p></li><li><p>Certain user defined inputs need to be applied to specific layers but we want the datatype of propagate through all the layers (even unsupported ones). In these cases, we can unpack the input in <code>apply</code> and pass it to the appropriate layer and then repack it before returning. See the Lux manual on Custom Input Types for a motivating example.</p></li></ol><div class="tip custom-block"><p class="custom-block-title">Tip</p><p><code>apply</code> is integrated with <code>DispatchDoctor.jl</code> that allows automatic verification of type stability. By default this is &quot;disable&quot;d. For more information, see the <a href="https://github.com/MilesCranmer/DispatchDoctor.jl" target="_blank" rel="noreferrer">documentation</a>.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L130-L153" target="_blank" rel="noreferrer">source</a></p>',5))]),s("details",b,[s("summary",null,[e[12]||(e[12]=s("a",{id:"LuxCore.stateless_apply",href:"#LuxCore.stateless_apply"},[s("span",{class:"jlbinding"},"LuxCore.stateless_apply")],-1)),e[13]||(e[13]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[14]||(e[14]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stateless_apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model, x, ps)</span></span></code></pre></div><p>Calls <code>apply</code> and only returns the first argument. This function requires that <code>model</code> has an empty state of <code>NamedTuple()</code>. Behavior of other kinds of models are undefined and it is the responsibility of the user to ensure that the model has an empty state.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L158-L164" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",g,[s("summary",null,[e[15]||(e[15]=s("a",{id:"LuxCore.check_fmap_condition",href:"#LuxCore.check_fmap_condition"},[s("span",{class:"jlbinding"},"LuxCore.check_fmap_condition")],-1)),e[16]||(e[16]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[17]||(e[17]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">check_fmap_condition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cond, tmatch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Type, Nothing}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bool</span></span></code></pre></div><p><code>fmap</code>s into the structure <code>x</code> and see if <code>cond</code> is satisfied for any of the leaf elements.</p><p><strong>Arguments</strong></p><ul><li><p><code>cond</code> - A function that takes a single argument and returns a <code>Bool</code>.</p></li><li><p><code>tmatch</code> - A shortcut to check if <code>x</code> is of type <code>tmatch</code>. Can be disabled by passing <code>nothing</code>.</p></li><li><p><code>x</code> - The structure to check.</p></li></ul><p><strong>Returns</strong></p><p>A Boolean Value</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L313-L328" target="_blank" rel="noreferrer">source</a></p>',7))]),s("details",y,[s("summary",null,[e[18]||(e[18]=s("a",{id:"LuxCore.contains_lux_layer",href:"#LuxCore.contains_lux_layer"},[s("span",{class:"jlbinding"},"LuxCore.contains_lux_layer")],-1)),e[19]||(e[19]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[20]||(e[20]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contains_lux_layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bool</span></span></code></pre></div><p>Check if the structure <code>l</code> is a Lux AbstractLuxLayer or a container of such a layer.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L304-L308" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",m,[s("summary",null,[e[21]||(e[21]=s("a",{id:"LuxCore.display_name",href:"#LuxCore.display_name"},[s("span",{class:"jlbinding"},"LuxCore.display_name")],-1)),e[22]||(e[22]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[23]||(e[23]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">display_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractLuxLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Printed Name of the <code>layer</code>. If the <code>layer</code> has a field <code>name</code> that is used, else the type name is used.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L169-L174" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",L,[s("summary",null,[e[24]||(e[24]=s("a",{id:"LuxCore.replicate",href:"#LuxCore.replicate"},[s("span",{class:"jlbinding"},"LuxCore.replicate")],-1)),e[25]||(e[25]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[26]||(e[26]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">replicate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rng</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractRNG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Creates a copy of the <code>rng</code> state depending on its type.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L8-L12" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",x,[s("summary",null,[e[27]||(e[27]=s("a",{id:"LuxCore.setup",href:"#LuxCore.setup"},[s("span",{class:"jlbinding"},"LuxCore.setup")],-1)),e[28]||(e[28]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[29]||(e[29]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rng</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractRNG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, layer)</span></span></code></pre></div><p>Shorthand for getting the parameters and states of the layer <code>l</code>. Is equivalent to <code>(initialparameters(rng, l), initialstates(rng, l))</code>.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>This function is not pure, it mutates <code>rng</code>.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L118-L127" target="_blank" rel="noreferrer">source</a></p>',4))]),e[56]||(e[56]=s("h2",{id:"parameters",tabindex:"-1"},[a("Parameters "),s("a",{class:"header-anchor",href:"#parameters","aria-label":'Permalink to "Parameters"'},"​")],-1)),s("details",f,[s("summary",null,[e[30]||(e[30]=s("a",{id:"LuxCore.initialparameters",href:"#LuxCore.initialparameters"},[s("span",{class:"jlbinding"},"LuxCore.initialparameters")],-1)),e[31]||(e[31]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[32]||(e[32]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">initialparameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rng</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractRNG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, layer)</span></span></code></pre></div><p>Generate the initial parameters of the layer <code>l</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L48-L52" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",C,[s("summary",null,[e[33]||(e[33]=s("a",{id:"LuxCore.parameterlength",href:"#LuxCore.parameterlength"},[s("span",{class:"jlbinding"},"LuxCore.parameterlength")],-1)),e[34]||(e[34]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[35]||(e[35]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">parameterlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer)</span></span></code></pre></div><p>Return the total number of parameters of the layer <code>l</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L73-L77" target="_blank" rel="noreferrer">source</a></p>',3))]),e[57]||(e[57]=s("h2",{id:"states",tabindex:"-1"},[a("States "),s("a",{class:"header-anchor",href:"#states","aria-label":'Permalink to "States"'},"​")],-1)),s("details",j,[s("summary",null,[e[36]||(e[36]=s("a",{id:"LuxCore.initialstates",href:"#LuxCore.initialstates"},[s("span",{class:"jlbinding"},"LuxCore.initialstates")],-1)),e[37]||(e[37]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[38]||(e[38]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">initialstates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rng</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractRNG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, layer)</span></span></code></pre></div><p>Generate the initial states of the layer <code>l</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L55-L59" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",v,[s("summary",null,[e[39]||(e[39]=s("a",{id:"LuxCore.statelength",href:"#LuxCore.statelength"},[s("span",{class:"jlbinding"},"LuxCore.statelength")],-1)),e[40]||(e[40]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[41]||(e[41]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">statelength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer)</span></span></code></pre></div><p>Return the total number of states of the layer <code>l</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L86-L90" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",E,[s("summary",null,[e[42]||(e[42]=s("a",{id:"LuxCore.testmode",href:"#LuxCore.testmode"},[s("span",{class:"jlbinding"},"LuxCore.testmode")],-1)),e[43]||(e[43]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[44]||(e[44]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">testmode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(st</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NamedTuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Make all occurrences of <code>training</code> in state <code>st</code> – <code>Val(false)</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L270-L274" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",F,[s("summary",null,[e[45]||(e[45]=s("a",{id:"LuxCore.trainmode",href:"#LuxCore.trainmode"},[s("span",{class:"jlbinding"},"LuxCore.trainmode")],-1)),e[46]||(e[46]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[47]||(e[47]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">trainmode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(st</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NamedTuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Make all occurrences of <code>training</code> in state <code>st</code> – <code>Val(true)</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L277-L281" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",A,[s("summary",null,[e[48]||(e[48]=s("a",{id:"LuxCore.update_state",href:"#LuxCore.update_state"},[s("span",{class:"jlbinding"},"LuxCore.update_state")],-1)),e[49]||(e[49]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[50]||(e[50]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(st</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NamedTuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value; exclude</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Internal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isleaf)</span></span></code></pre></div><p>Recursively update all occurrences of the <code>key</code> in the state <code>st</code> with the <code>value</code>. <code>exclude</code> is a function that is passed to <code>Functors.fmap_with_path</code>&#39;s <code>exclude</code> keyword.</p><div class="warning custom-block"><p class="custom-block-title">Needs Functors.jl</p><p>This function requires <code>Functors.jl</code> to be loaded.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L284-L293" target="_blank" rel="noreferrer">source</a></p>',4))]),e[58]||(e[58]=s("h2",{id:"Layer-size",tabindex:"-1"},[a("Layer size "),s("a",{class:"header-anchor",href:"#Layer-size","aria-label":'Permalink to "Layer size {#Layer-size}"'},"​")],-1)),s("details",B,[s("summary",null,[e[51]||(e[51]=s("a",{id:"LuxCore.outputsize",href:"#LuxCore.outputsize"},[s("span",{class:"jlbinding"},"LuxCore.outputsize")],-1)),e[52]||(e[52]=a()),l(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[53]||(e[53]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">outputsize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer, x, rng)</span></span></code></pre></div><p>Return the output size of the layer.</p><p>The fallback implementation of this function assumes the inputs were batched, i.e., if any of the outputs are Arrays, with <code>ndims(A) &gt; 1</code>, it will return <code>size(A)[1:(end - 1)]</code>. If this behavior is undesirable, provide a custom <code>outputsize(layer, x, rng)</code> implementation).</p><div class="warning custom-block"><p class="custom-block-title">Fallback Implementation</p><p>The fallback implementation of this function is defined once <code>Lux.jl</code> is loaded.</p></div><div class="warning custom-block"><p class="custom-block-title">Changes from Pre-1.0 Behavior</p><p>Previously it was possible to override this function by defining <code>outputsize(layer)</code>. However, this can potentially introduce a bug that is hard to bypass. See <a href="https://github.com/LuxDL/LuxCore.jl/pull/43" target="_blank" rel="noreferrer">this PR</a> for more information.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/1ea272a135ad1ab2f3acc2d570c462434da5c02e/lib/LuxCore/src/LuxCore.jl#L96-L115" target="_blank" rel="noreferrer">source</a></p>',6))])])}const z=o(d,[["render",T]]);export{R as __pageData,z as default};
