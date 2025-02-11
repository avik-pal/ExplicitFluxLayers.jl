import{d as c,o as i,c as o,l as e,m,g,t as u,_ as h,F as _,E as f,b,M as v,I as s,a}from"./chunks/framework.M--zSXWd.js";const y={class:"img-box"},w=["href"],N=["src"],k={class:"transparent-box1"},T={class:"caption"},P={class:"transparent-box2"},x={class:"subcaption"},D={class:"opacity-low"},E=c({__name:"GalleryImage",props:{href:{},src:{},caption:{},desc:{}},setup(d){return(t,n)=>(i(),o("div",y,[e("a",{href:t.href},[e("img",{src:m(g)(t.src),height:"150px",alt:""},null,8,N),e("div",k,[e("div",T,[e("h2",null,u(t.caption),1)])]),e("div",P,[e("div",x,[e("p",D,u(t.desc),1)])])],8,w)]))}}),S=h(E,[["__scopeId","data-v-06a0366f"]]),L={class:"gallery-image"},I=c({__name:"Gallery",props:{images:{}},setup(d){return(t,n)=>(i(),o("div",L,[(i(!0),o(_,null,f(t.images,l=>(i(),b(S,v({ref_for:!0},l),null,16))),256))]))}}),r=h(I,[["__scopeId","data-v-578d61bc"]]),B=e("h1",{id:"tutorials",tabindex:"-1"},[a("Tutorials "),e("a",{class:"header-anchor",href:"#tutorials","aria-label":'Permalink to "Tutorials"'},"​")],-1),C=e("h2",{id:"beginner-tutorials",tabindex:"-1"},[a("Beginner Tutorials "),e("a",{class:"header-anchor",href:"#beginner-tutorials","aria-label":'Permalink to "Beginner Tutorials"'},"​")],-1),O=e("h2",{id:"intermediate-tutorials",tabindex:"-1"},[a("Intermediate Tutorials "),e("a",{class:"header-anchor",href:"#intermediate-tutorials","aria-label":'Permalink to "Intermediate Tutorials"'},"​")],-1),j=e("h2",{id:"advanced-tutorials",tabindex:"-1"},[a("Advanced Tutorials "),e("a",{class:"header-anchor",href:"#advanced-tutorials","aria-label":'Permalink to "Advanced Tutorials"'},"​")],-1),F=e("h2",{id:"selected-3rd-party-tutorials",tabindex:"-1"},[a("Selected 3rd Party Tutorials "),e("a",{class:"header-anchor",href:"#selected-3rd-party-tutorials","aria-label":'Permalink to "Selected 3rd Party Tutorials"'},"​")],-1),M=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"WARNING"),e("p",null,[a("These tutorials are developed by the community and may not be up-to-date with the latest version of "),e("code",null,"Lux.jl"),a(". Please refer to the official documentation for the most up-to-date information.")]),e("p",null,[a("Please open an issue (ideally both at "),e("code",null,"Lux.jl"),a(" and at the downstream linked package) if any of them are non-functional and we will try to get them updated.")])],-1),$=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[a("If you found an amazing tutorial showcasing "),e("code",null,"Lux.jl"),a(" online, or wrote one yourself, please open an issue or PR to add it to the list!")])],-1),R=JSON.parse('{"title":"Tutorials","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/index.md","filePath":"tutorials/index.md","lastUpdated":null}'),G={name:"tutorials/index.md"},V=c({...G,setup(d){const t=[{href:"beginner/1_Basics",src:"https://picsum.photos/350/250?image=444",caption:"Julia & Lux for the Uninitiated",desc:"How to get started with Julia and Lux for those who have never used Julia before."},{href:"beginner/2_PolynomialFitting",src:"../mlp.webp",caption:"Fitting a Polynomial using MLP",desc:"Learn the Basics of Lux by fitting a Multi-Layer Perceptron to a Polynomial."},{href:"beginner/3_SimpleRNN",src:"../lstm-illustrative.webp",caption:"Training a Simple LSTM",desc:"Learn how to define custom layers and train an RNN on time-series data."},{href:"beginner/4_SimpleChains",src:"../blas_optimizations.jpg",caption:"Use SimpleChains.jl as a Backend",desc:"Learn how to train small neural networks really fast on CPU."}],n=[{href:"intermediate/1_NeuralODE",src:"../mnist.jpg",caption:"MNIST Classification using Neural ODE",desc:"Train a Neural Ordinary Differential Equations to classify MNIST Images."},{href:"intermediate/2_BayesianNN",src:"https://github.com/TuringLang.png",caption:"Bayesian Neural Networks",desc:"Figure out how to use Probabilistic Programming Frameworks like Turing with Lux."},{href:"intermediate/3_HyperNet",src:"../hypernet.jpg",caption:"Training a HyperNetwork",desc:"Train a hypernetwork to work on multiple datasets by predicting neural network parameters."}],l=[{href:"advanced/1_GravitationalWaveForm",src:"../gravitational_waveform.png",caption:"Neural ODE to Model Gravitational Waveforms",desc:"Training a Neural ODE to fit simulated data of gravitational waveforms."},{href:"advanced/2_SymbolicOptimalControl",src:"../symbolic_optimal_control.png",caption:"Optimal Control with Symbolic UDE",desc:"Train a UDE and replace a part of it with Symbolic Regression."}],p=[{href:"https://docs.sciml.ai/Overview/stable/showcase/pinngpu/",src:"../pinn.gif",caption:"GPU-Accelerated Physics-Informed Neural Networks",desc:"Use Machine Learning (PINNs) to solve the Heat Equation PDE on a GPU."},{href:"https://docs.sciml.ai/DiffEqFlux/stable/examples/neural_ode_weather_forecast/",src:"../weather-neural-ode.gif",caption:"Weather Forecasting with Neural ODEs",desc:"Train a neural ODEs to a multidimensional weather dataset and use it for weather forecasting."},{href:"https://docs.sciml.ai/SciMLSensitivity/stable/examples/sde/SDE_control/",src:"../neural-sde.png",caption:"Controlling Stochastic Differential Equations",desc:"Control the time evolution of a continuously monitored qubit described by an SDE with multiplicative scalar noise."},{href:"https://github.com/Dale-Black/ComputerVisionTutorials.jl/",src:"https://raw.githubusercontent.com/Dale-Black/ComputerVisionTutorials.jl/main/assets/image-seg-green.jpeg",caption:"Medical Image Segmentation",desc:"Explore various aspects of deep learning for medical imaging and a comprehensive overview of Julia packages."},{href:"https://github.com/agdestein/NeuralClosureTutorials",src:"https://raw.githubusercontent.com/agdestein/NeuralClosureTutorials/main/assets/navier_stokes.gif",caption:"Neural PDE closures",desc:"Learn an unknown term in a PDE using convolutional neural networks and Fourier neural operators."}];return(U,q)=>(i(),o("div",null,[B,C,s(r,{images:t}),O,s(r,{images:n}),j,s(r,{images:l}),F,M,s(r,{images:p}),$]))}});export{R as __pageData,V as default};
