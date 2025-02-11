import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.D0y0TA6e.js";
const __pageData = JSON.parse('{"title":"GPU Management","description":"","frontmatter":{},"headers":[],"relativePath":"manual/gpu_management.md","filePath":"manual/gpu_management.md","lastUpdated":null}');
const _sfc_main = { name: "manual/gpu_management.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="GPU-Management" tabindex="-1">GPU Management <a class="header-anchor" href="#GPU-Management" aria-label="Permalink to &quot;GPU Management {#GPU-Management}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Info</p><p>Starting from <code>v0.5</code>, Lux has transitioned to a new GPU management system. The old system using <code>cpu</code> and <code>gpu</code> functions is still in place but will be removed in <code>v0.6</code>. Using the old functions might lead to performance regressions if used inside performance critical code.</p></div><p><code>Lux.jl</code> can handle multiple GPU backends. Currently, the following backends are supported:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lux, LuxCUDA, LuxAMDGPU  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Important to load trigger packages</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">supported_gpu_backends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(&quot;CUDA&quot;, &quot;AMDGPU&quot;, &quot;Metal&quot;)</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">Metal Support</p><p>Support for Metal GPUs should be considered extremely experimental at this point.</p></div><h2 id="Automatic-Backend-Management-(Recommended-Approach)" tabindex="-1">Automatic Backend Management (Recommended Approach) <a class="header-anchor" href="#Automatic-Backend-Management-(Recommended-Approach)" aria-label="Permalink to &quot;Automatic Backend Management (Recommended Approach) {#Automatic-Backend-Management-(Recommended-Approach)}&quot;">​</a></h2><p>Automatic Backend Management is done by two simple functions: <code>cpu_device</code> and <code>gpu_device</code>.</p><ul><li><a href="/v0.5.36/api/Accelerator_Support/LuxDeviceUtils#LuxDeviceUtils.cpu_device"><code>cpu_device</code></a>: This is a simple function and just returns a <code>LuxCPUDevice</code> object.</li></ul><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cdev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cpu_device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(::LuxCPUDevice) (generic function with 5 methods)</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x_cpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float32, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>3×2 Matrix{Float32}:</span></span>\n<span class="line"><span> -1.95972    0.139253</span></span>\n<span class="line"><span> -1.40102   -1.1463</span></span>\n<span class="line"><span>  0.430263   1.349</span></span></code></pre></div><ul><li><a href="/v0.5.36/api/Accelerator_Support/LuxDeviceUtils#LuxDeviceUtils.gpu_device"><code>gpu_device</code></a>: This function performs automatic GPU device selection and returns an object. <ol><li><p>If no GPU is available, it returns a <code>LuxCPUDevice</code> object.</p></li><li><p>If a LocalPreferences file is present, then the backend specified in the file is used. To set a backend, use <code>Lux.gpu_backend!(&lt;backend_name&gt;)</code>. (a) If the trigger package corresponding to the device is not loaded, then a warning is displayed. (b) If no LocalPreferences file is present, then the first working GPU with loaded trigger package is used.</p></li></ol></li></ul><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gdev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gpu_device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_cpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gdev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>3×2 CuArray{Float32, 2, CUDA.Mem.DeviceBuffer}:</span></span>\n<span class="line"><span> -1.95972    0.139253</span></span>\n<span class="line"><span> -1.40102   -1.1463</span></span>\n<span class="line"><span>  0.430263   1.349</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cdev) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">≈</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_cpu</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>true</span></span></code></pre></div><h2 id="Manual-Backend-Management" tabindex="-1">Manual Backend Management <a class="header-anchor" href="#Manual-Backend-Management" aria-label="Permalink to &quot;Manual Backend Management {#Manual-Backend-Management}&quot;">​</a></h2><p>Automatic Device Selection can be circumvented by directly using <code>LuxCPUDevice</code> and <code>AbstractLuxGPUDevice</code> objects.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cdev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LuxCPUDevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x_cpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float32, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LuxCUDA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">functional</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gdev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LuxCUDADevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_cpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gdev</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">elseif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LuxAMDGPU</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">functional</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gdev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LuxAMDGPUDevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_cpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gdev</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;No GPU is available. Using CPU.&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_cpu</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x_gpu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cdev) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">≈</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x_cpu</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>true</span></span></code></pre></div>', 22);
const _hoisted_23 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_23);
}
const gpu_management = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gpu_management as default
};
