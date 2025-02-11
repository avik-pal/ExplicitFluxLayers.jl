import{_ as n,c as p,a2 as a,j as i,a as t,G as l,B as h,o as k}from"./chunks/framework.Dbzdmz0a.js";const f=JSON.parse('{"title":"Interoperability between Lux and other packages","description":"","frontmatter":{},"headers":[],"relativePath":"api/Lux/interop.md","filePath":"api/Lux/interop.md","lastUpdated":null}'),r={name:"api/Lux/interop.md"},d={class:"jldocstring custom-block"},o={class:"jldocstring custom-block"},E={class:"jldocstring custom-block"},g={class:"jldocstring custom-block"},y={class:"jldocstring custom-block"},c={class:"jldocstring custom-block"};function u(F,s,C,m,b,x){const e=h("Badge");return k(),p("div",null,[s[18]||(s[18]=a('<h1 id="Interoperability-between-Lux-and-other-packages" tabindex="-1">Interoperability between Lux and other packages <a class="header-anchor" href="#Interoperability-between-Lux-and-other-packages" aria-label="Permalink to &quot;Interoperability between Lux and other packages {#Interoperability-between-Lux-and-other-packages}&quot;">​</a></h1><h2 id="Switching-from-older-frameworks" tabindex="-1">Switching from older frameworks <a class="header-anchor" href="#Switching-from-older-frameworks" aria-label="Permalink to &quot;Switching from older frameworks {#Switching-from-older-frameworks}&quot;">​</a></h2><h3 id="flux-to-lux-migrate-api" tabindex="-1">Flux Models to Lux Models <a class="header-anchor" href="#flux-to-lux-migrate-api" aria-label="Permalink to &quot;Flux Models to Lux Models {#flux-to-lux-migrate-api}&quot;">​</a></h3><p><code>Flux.jl</code> has been around in the Julia ecosystem for a long time and has a large userbase, hence we provide a way to convert <code>Flux</code> models to <code>Lux</code> models.</p><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Accessing these functions require manually loading <code>Flux</code>, i.e., <code>using Flux</code> must be present somewhere in the code for these to be used.</p></div>',5)),i("details",d,[i("summary",null,[s[0]||(s[0]=i("a",{id:"Adapt.adapt-Tuple{FromFluxAdaptor, Any}",href:"#Adapt.adapt-Tuple{FromFluxAdaptor, Any}"},[i("span",{class:"jlbinding"},"Adapt.adapt")],-1)),s[1]||(s[1]=t()),l(e,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),s[2]||(s[2]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Adapt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(from</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FromFluxAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, L)</span></span></code></pre></div><p>Adapt a Flux model <code>L</code> to Lux model. See <a href="/v1.6.0/api/Lux/interop#Lux.FromFluxAdaptor"><code>FromFluxAdaptor</code></a> for more details.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/8a1cb65caa52dd70b95645780749072e6a3d28c7/src/transform/flux.jl#L46-L50" target="_blank" rel="noreferrer">source</a></p>',3))]),i("details",o,[i("summary",null,[s[3]||(s[3]=i("a",{id:"Lux.FromFluxAdaptor",href:"#Lux.FromFluxAdaptor"},[i("span",{class:"jlbinding"},"Lux.FromFluxAdaptor")],-1)),s[4]||(s[4]=t()),l(e,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[5]||(s[5]=a(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FromFluxAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(preserve_ps_st</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, force_preserve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Convert a Flux Model to Lux Model.</p><div class="warning custom-block"><p class="custom-block-title"><code>active</code> field</p><p>This always ignores the <code>active</code> field of some of the Flux layers. This is almost never going to be supported.</p></div><p><strong>Keyword Arguments</strong></p><ul><li><p><code>preserve_ps_st</code>: Set to <code>true</code> to preserve the states and parameters of the layer. This attempts the best possible way to preserve the original model. But it might fail. If you need to override possible failures, set <code>force_preserve</code> to <code>true</code>.</p></li><li><p><code>force_preserve</code>: Some of the transformations with state and parameters preservation haven&#39;t been implemented yet, in these cases, if <code>force_transform</code> is <code>false</code> a warning will be printed and a core Lux layer will be returned. Else, it will create a <a href="/v1.6.0/api/Lux/interop#Lux.FluxLayer"><code>FluxLayer</code></a>.</p></li></ul><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Adapt, Lux, Random</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Chain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Flux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, relu), Flux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FromFluxAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), m); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or FromFluxAdaptor()(m.layers)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float32, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ps, st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Random</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">default_rng</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), m2);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">m2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, ps, st)))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/8a1cb65caa52dd70b95645780749072e6a3d28c7/src/transform/flux.jl#L1-L40" target="_blank" rel="noreferrer">source</a></p>`,8))]),i("details",E,[i("summary",null,[s[6]||(s[6]=i("a",{id:"Lux.FluxLayer",href:"#Lux.FluxLayer"},[i("span",{class:"jlbinding"},"Lux.FluxLayer")],-1)),s[7]||(s[7]=t()),l(e,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[8]||(s[8]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FluxLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer)</span></span></code></pre></div><p>Serves as a compatibility layer between Flux and Lux. This uses <code>Optimisers.destructure</code> API internally.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Lux was written to overcome the limitations of <code>destructure</code> + <code>Flux</code>. It is recommended to rewrite your layer in Lux instead of using this layer.</p></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Introducing this Layer in your model will lead to type instabilities, given the way <code>Optimisers.destructure</code> works.</p></div><p><strong>Arguments</strong></p><ul><li><code>layer</code>: Flux layer</li></ul><p><strong>Parameters</strong></p><ul><li><code>p</code>: Flattened parameters of the <code>layer</code></li></ul><p><a href="https://github.com/LuxDL/Lux.jl/blob/8a1cb65caa52dd70b95645780749072e6a3d28c7/src/layers/extension.jl#L4-L27" target="_blank" rel="noreferrer">source</a></p>',9))]),s[19]||(s[19]=a('<h2 id="Using-a-different-backend-for-Lux" tabindex="-1">Using a different backend for Lux <a class="header-anchor" href="#Using-a-different-backend-for-Lux" aria-label="Permalink to &quot;Using a different backend for Lux {#Using-a-different-backend-for-Lux}&quot;">​</a></h2><h3 id="Lux-Models-to-Simple-Chains" tabindex="-1">Lux Models to Simple Chains <a class="header-anchor" href="#Lux-Models-to-Simple-Chains" aria-label="Permalink to &quot;Lux Models to Simple Chains {#Lux-Models-to-Simple-Chains}&quot;">​</a></h3><p><code>SimpleChains.jl</code> provides a way to train Small Neural Networks really fast on CPUs. See <a href="https://julialang.org/blog/2022/04/simple-chains/" target="_blank" rel="noreferrer">this blog post</a> for more details. This section describes how to convert <code>Lux</code> models to <code>SimpleChains</code> models while preserving the <a href="/v1.6.0/manual/interface#lux-interface">layer interface</a>.</p><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Accessing these functions require manually loading <code>SimpleChains</code>, i.e., <code>using SimpleChains</code> must be present somewhere in the code for these to be used.</p></div>',4)),i("details",g,[i("summary",null,[s[9]||(s[9]=i("a",{id:"Adapt.adapt-Tuple{ToSimpleChainsAdaptor, AbstractLuxLayer}",href:"#Adapt.adapt-Tuple{ToSimpleChainsAdaptor, AbstractLuxLayer}"},[i("span",{class:"jlbinding"},"Adapt.adapt")],-1)),s[10]||(s[10]=t()),l(e,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),s[11]||(s[11]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Adapt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(from</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ToSimpleChainsAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, L</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractLuxLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Adapt a Simple Chains model to Lux model. See <a href="/v1.6.0/api/Lux/interop#Lux.ToSimpleChainsAdaptor"><code>ToSimpleChainsAdaptor</code></a> for more details.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/8a1cb65caa52dd70b95645780749072e6a3d28c7/src/transform/simplechains.jl#L61-L66" target="_blank" rel="noreferrer">source</a></p>',3))]),i("details",y,[i("summary",null,[s[12]||(s[12]=i("a",{id:"Lux.ToSimpleChainsAdaptor",href:"#Lux.ToSimpleChainsAdaptor"},[i("span",{class:"jlbinding"},"Lux.ToSimpleChainsAdaptor")],-1)),s[13]||(s[13]=t()),l(e,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[14]||(s[14]=a(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ToSimpleChainsAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input_dims, convert_to_array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Adaptor for converting a Lux Model to SimpleChains. The returned model is still a Lux model, and satisfies the <code>AbstractLuxLayer</code> interfacem but all internal calculations are performed using SimpleChains.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>There is no way to preserve trained parameters and states when converting to <code>SimpleChains.jl</code>.</p></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Any kind of initialization function is not preserved when converting to <code>SimpleChains.jl</code>.</p></div><p><strong>Arguments</strong></p><ul><li><p><code>input_dims</code>: Tuple of input dimensions excluding the batch dimension. These must be of <code>static</code> type as <code>SimpleChains</code> expects.</p></li><li><p><code>convert_to_array</code>: SimpleChains.jl by default outputs <code>StrideArraysCore.StrideArray</code>, but this might not compose well with other packages. If <code>convert_to_array</code> is set to <code>true</code>, the output will be converted to a regular <code>Array</code>.</p></li></ul><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SimpleChains</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Adapt, Lux, Random</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lux_model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Chain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Conv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, relu), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MaxPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           Conv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, relu), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MaxPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FlattenLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           Chain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, relu), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 84</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, relu), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">84</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> adaptor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ToSimpleChainsAdaptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> simple_chains_model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(adaptor, lux_model); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or adaptor(lux_model)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ps, st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Random</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">default_rng</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), simple_chains_model);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float32, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">simple_chains_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, ps, st)))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/8a1cb65caa52dd70b95645780749072e6a3d28c7/src/transform/simplechains.jl#L1-L48" target="_blank" rel="noreferrer">source</a></p>`,9))]),i("details",c,[i("summary",null,[s[15]||(s[15]=i("a",{id:"Lux.SimpleChainsLayer",href:"#Lux.SimpleChainsLayer"},[i("span",{class:"jlbinding"},"Lux.SimpleChainsLayer")],-1)),s[16]||(s[16]=t()),l(e,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[17]||(s[17]=a(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SimpleChainsLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer, to_array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Bool, Val}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SimpleChainsLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(layer, lux_layer, to_array)</span></span></code></pre></div><p>Wraps a <code>SimpleChains</code> layer into a <code>Lux</code> layer. All operations are performed using <code>SimpleChains</code> but the layer satisfies the <code>AbstractLuxLayer</code> interface.</p><p><code>ToArray</code> is a boolean flag that determines whether the output should be converted to a regular <code>Array</code> or not. Default is <code>false</code>.</p><p><strong>Arguments</strong></p><ul><li><p><code>layer</code>: SimpleChains layer</p></li><li><p><code>lux_layer</code>: Potentially equivalent Lux layer that is used for printing</p></li></ul><p><a href="https://github.com/LuxDL/Lux.jl/blob/8a1cb65caa52dd70b95645780749072e6a3d28c7/src/layers/extension.jl#L50-L64" target="_blank" rel="noreferrer">source</a></p>`,6))])])}const _=n(r,[["render",u]]);export{f as __pageData,_ as default};
