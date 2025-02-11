import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.Bfzm2VQf.js";const o=JSON.parse('{"title":"Neural Networks Inside GPU Kernels","description":"","frontmatter":{},"headers":[],"relativePath":"manual/nn_inside_gpu_kernels.md","filePath":"manual/nn_inside_gpu_kernels.md","lastUpdated":null}'),p={name:"manual/nn_inside_gpu_kernels.md"},l=n(`<h1 id="Neural-Networks-Inside-GPU-Kernels" tabindex="-1">Neural Networks Inside GPU Kernels <a class="header-anchor" href="#Neural-Networks-Inside-GPU-Kernels" aria-label="Permalink to &quot;Neural Networks Inside GPU Kernels {#Neural-Networks-Inside-GPU-Kernels}&quot;">​</a></h1><p>In this page, we will describe how to embed neural networks inside GPU kernels. We will use <a href="https://github.com/JuliaGPU/KernelAbstractions.jl" target="_blank" rel="noreferrer">KernelAbstractions.jl</a> to do this, making it compatible with multiple GPU backends.</p><div class="warning custom-block"><p class="custom-block-title">Experimental Feature</p><p>This is a relatively new and experimental feature. Expect edge cases and open issues on GitHub if you find any.</p></div><div class="tip custom-block"><p class="custom-block-title">Inference Only</p><p>Currently this works only for inference. We will eventually test automatic differentiation using Enzyme.jl</p></div><div class="danger custom-block"><p class="custom-block-title">Batching</p><p>In most usecases, this form of batching via embedding the neural network inside a GPU kernel is not recommended and will lead to suboptimal performance. Instead, batch the input data and let Lux handle the batching internally.</p></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux, LuxCUDA, Random</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KernelAbstractions, StaticArrays</span></span></code></pre></div><p>First thing to remember is that we can&#39;t use regular high-level operations inside the kernels, instead we will use Static Arrays. Leveraging Julia&#39;s multiple dispatch Lux will use specialized operations that are compatible with GPU kernels.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@kernel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nn_eval_single_batch!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output, model, input, ps, st)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Global, Linear)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y, st_ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model, input[i], ps, st)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nn_eval_single_batch! (generic function with 4 methods)</span></span></code></pre></div><p>We define and initialize the neural network as usual, but we need to additionally convert the Arrays into SArrays.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Chain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, relu), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ps, st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Xoshiro</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), nn)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to_sarray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SArray{Tuple{size(x)...}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ps_static </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">recursive_map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(to_sarray, ps)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st_static </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">recursive_map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(to_sarray, st)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(layer_1 = NamedTuple(), layer_2 = NamedTuple())</span></span></code></pre></div><p>First we will run it on CPU.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Currently due to a minor bug, we cannot call the Lux models with vector input. As a workaround we make them into Matrix with batch size 1.</p></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@SArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float64, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@SArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">zeros</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float64, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Allocate the output</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1024-element Vector{StaticArraysCore.SMatrix{4, 1, Float64, 4}}:</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> ⋮</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span></code></pre></div><p>Now run the model using KernelAbstractions.jl</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">backend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KernelAbstractions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_backend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cpu_kernel! </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nn_eval_single_batch!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cpu_kernel!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output, nn, input, ps_static, st_static; ndrange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">KernelAbstractions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">synchronize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1024-element Vector{StaticArraysCore.SMatrix{4, 1, Float64, 4}}:</span></span>
<span class="line"><span> [0.018030919882320598; 0.3999239925997308; 0.039652926676741154; 0.30458860691376793;;]</span></span>
<span class="line"><span> [0.025019039956268203; 0.5549197941993866; 0.05502093977363282; 0.42263592630521196;;]</span></span>
<span class="line"><span> [0.15709448460238637; 0.9291019375146765; -0.032783972026517005; 0.561498831276786;;]</span></span>
<span class="line"><span> [0.020608025196847245; 0.4935183722619363; -0.09431668145404912; 0.4119639149106146;;]</span></span>
<span class="line"><span> [0.16725644240642884; 0.9932865899522266; -0.5177604846128403; 0.7145329786836386;;]</span></span>
<span class="line"><span> [0.2468406885450458; 1.1651714391299843; -0.2953923336801893; 0.6879210522899724;;]</span></span>
<span class="line"><span> [0.03512731609549131; 0.9222380176492891; -0.47125597472403113; 0.8441651916293019;;]</span></span>
<span class="line"><span> [0.3454063483296543; 0.8524058343241563; -0.40054588566893623; 0.2955543236037069;;]</span></span>
<span class="line"><span> [0.2446241222221169; 1.2313311356440306; -0.1795717203200351; 0.7206049308517898;;]</span></span>
<span class="line"><span> [0.0508776487350092; 1.3190699571768865; -0.618630948521385; 1.1934440229628804;;]</span></span>
<span class="line"><span> ⋮</span></span>
<span class="line"><span> [0.2789948635221661; 1.1899503469180006; -0.3444669280888526; 0.6716203435461122;;]</span></span>
<span class="line"><span> [0.021392331722666847; 0.47447976971686956; 0.04704521825728722; 0.3613714974371957;;]</span></span>
<span class="line"><span> [0.33844355377342017; 1.3948099209087526; -0.712049405696745; 0.8421508941474267;;]</span></span>
<span class="line"><span> [0.060299224420073676; 0.790819416794872; -0.42863675738082907; 0.6836772107447862;;]</span></span>
<span class="line"><span> [0.10988744575088971; 0.4588065506056181; -0.051221431051528814; 0.23629556686242364;;]</span></span>
<span class="line"><span> [0.018199622437277952; 0.4036657983301458; 0.04002393104510186; 0.3074384269192152;;]</span></span>
<span class="line"><span> [0.31034225439839397; 1.2020625630833945; -0.5456167803368296; 0.6813975900055891;;]</span></span>
<span class="line"><span> [0.08326718094463317; 1.1246598175322235; -0.6486971117588411; 0.9852467232515344;;]</span></span>
<span class="line"><span> [0.04719683065452306; 1.2125289924996303; -0.5312919694470769; 1.0876337333050257;;]</span></span></code></pre></div><p>Now we will run the same model on GPU.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gdev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gpu_device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gdev</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@SArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">zeros</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float64, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gdev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1024-element CuArray{StaticArraysCore.SMatrix{4, 1, Float64, 4}, 1, CUDA.DeviceMemory}:</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> ⋮</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span>
<span class="line"><span> [0.0; 0.0; 0.0; 0.0;;]</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">backend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KernelAbstractions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_backend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output_gpu)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpu_kernel! </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nn_eval_single_batch!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gpu_kernel!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output_gpu, nn, input_gpu, ps_static, st_static; ndrange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output_gpu))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">KernelAbstractions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">synchronize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output_gpu</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1024-element CuArray{StaticArraysCore.SMatrix{4, 1, Float64, 4}, 1, CUDA.DeviceMemory}:</span></span>
<span class="line"><span> [0.018030919882320598; 0.3999239925997308; 0.039652926676741154; 0.30458860691376793;;]</span></span>
<span class="line"><span> [0.025019039956268203; 0.5549197941993866; 0.05502093977363282; 0.42263592630521196;;]</span></span>
<span class="line"><span> [0.15709448460238637; 0.9291019375146763; -0.03278397202651702; 0.5614988312767859;;]</span></span>
<span class="line"><span> [0.020608025196847245; 0.4935183722619363; -0.09431668145404912; 0.4119639149106146;;]</span></span>
<span class="line"><span> [0.16725644240642884; 0.9932865899522266; -0.5177604846128403; 0.7145329786836386;;]</span></span>
<span class="line"><span> [0.2468406885450458; 1.1651714391299843; -0.2953923336801893; 0.6879210522899724;;]</span></span>
<span class="line"><span> [0.03512731609549131; 0.9222380176492891; -0.47125597472403113; 0.8441651916293019;;]</span></span>
<span class="line"><span> [0.3454063483296543; 0.8524058343241563; -0.40054588566893623; 0.2955543236037069;;]</span></span>
<span class="line"><span> [0.2446241222221169; 1.2313311356440306; -0.1795717203200351; 0.7206049308517898;;]</span></span>
<span class="line"><span> [0.0508776487350092; 1.3190699571768865; -0.618630948521385; 1.1934440229628804;;]</span></span>
<span class="line"><span> ⋮</span></span>
<span class="line"><span> [0.2789948635221661; 1.1899503469180006; -0.3444669280888527; 0.6716203435461123;;]</span></span>
<span class="line"><span> [0.021392331722666847; 0.47447976971686956; 0.04704521825728722; 0.3613714974371957;;]</span></span>
<span class="line"><span> [0.33844355377342017; 1.3948099209087526; -0.712049405696745; 0.8421508941474267;;]</span></span>
<span class="line"><span> [0.060299224420073676; 0.790819416794872; -0.42863675738082907; 0.6836772107447862;;]</span></span>
<span class="line"><span> [0.10988744575088971; 0.4588065506056181; -0.051221431051528814; 0.23629556686242364;;]</span></span>
<span class="line"><span> [0.018199622437277952; 0.4036657983301458; 0.04002393104510186; 0.3074384269192152;;]</span></span>
<span class="line"><span> [0.31034225439839397; 1.2020625630833945; -0.5456167803368296; 0.6813975900055891;;]</span></span>
<span class="line"><span> [0.08326718094463319; 1.1246598175322235; -0.6486971117588411; 0.9852467232515344;;]</span></span>
<span class="line"><span> [0.04719683065452306; 1.2125289924996303; -0.5312919694470769; 1.0876337333050257;;]</span></span></code></pre></div>`,24),e=[l];function t(h,k,r,d,c,E){return i(),a("div",null,e)}const y=s(p,[["render",t]]);export{o as __pageData,y as default};
