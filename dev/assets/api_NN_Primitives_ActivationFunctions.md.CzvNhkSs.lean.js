import{_ as p,C as k,c as t,o as e,j as i,a,a2 as l,G as h}from"./chunks/framework.BljAXrmu.js";const G=JSON.parse('{"title":"Activation Functions","description":"","frontmatter":{},"headers":[],"relativePath":"api/NN_Primitives/ActivationFunctions.md","filePath":"api/NN_Primitives/ActivationFunctions.md","lastUpdated":null}'),E={name:"api/NN_Primitives/ActivationFunctions.md"},r={class:"jldocstring custom-block"},d={class:"jldocstring custom-block"},g={class:"jldocstring custom-block"},y={class:"jldocstring custom-block"},F={class:"jldocstring custom-block"},o={class:"jldocstring custom-block"},c={class:"jldocstring custom-block"},C={class:"jldocstring custom-block"},u={class:"jldocstring custom-block"},b={class:"jldocstring custom-block"},B={class:"jldocstring custom-block"},A={class:"jldocstring custom-block"},v={class:"jldocstring custom-block"},f={class:"jldocstring custom-block"},j={class:"jldocstring custom-block"},m={class:"jldocstring custom-block"},x={class:"jldocstring custom-block"},D={class:"jldocstring custom-block"},_={class:"jldocstring custom-block"},N={class:"jldocstring custom-block"},T={class:"jldocstring custom-block"},S={class:"jldocstring custom-block"},L={class:"jldocstring custom-block"},P={class:"jldocstring custom-block"},w={class:"jldocstring custom-block"},V={class:"jldocstring custom-block"},I={class:"jldocstring custom-block"};function R(q,s,M,O,U,z){const n=k("Badge");return e(),t("div",null,[s[81]||(s[81]=i("h1",{id:"NNlib-ActivationFunctions-API",tabindex:"-1"},[a("Activation Functions "),i("a",{class:"header-anchor",href:"#NNlib-ActivationFunctions-API","aria-label":'Permalink to "Activation Functions {#NNlib-ActivationFunctions-API}"'},"​")],-1)),s[82]||(s[82]=i("p",null,[a("Non-linearities that go between layers of your model. Note that, unless otherwise stated, activation functions operate on scalars. To apply them to an array you can call "),i("code",null,"σ.(xs)"),a(", "),i("code",null,"relu.(xs)"),a(" and so on.")],-1)),i("details",r,[i("summary",null,[s[0]||(s[0]=i("a",{id:"NNlib.celu",href:"#NNlib.celu"},[i("span",{class:"jlbinding"},"NNlib.celu")],-1)),s[1]||(s[1]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[2]||(s[2]=l("",4))]),i("details",d,[i("summary",null,[s[3]||(s[3]=i("a",{id:"NNlib.elu",href:"#NNlib.elu"},[i("span",{class:"jlbinding"},"NNlib.elu")],-1)),s[4]||(s[4]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[5]||(s[5]=l("",4))]),i("details",g,[i("summary",null,[s[6]||(s[6]=i("a",{id:"NNlib.gelu",href:"#NNlib.gelu"},[i("span",{class:"jlbinding"},"NNlib.gelu")],-1)),s[7]||(s[7]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[8]||(s[8]=l("",4))]),i("details",y,[i("summary",null,[s[9]||(s[9]=i("a",{id:"NNlib.hardsigmoid",href:"#NNlib.hardsigmoid"},[i("span",{class:"jlbinding"},"NNlib.hardsigmoid")],-1)),s[10]||(s[10]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[11]||(s[11]=l("",4))]),i("details",F,[i("summary",null,[s[12]||(s[12]=i("a",{id:"NNlib.hardσ",href:"#NNlib.hardσ"},[i("span",{class:"jlbinding"},"NNlib.hardσ")],-1)),s[13]||(s[13]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[14]||(s[14]=l("",4))]),i("details",o,[i("summary",null,[s[15]||(s[15]=i("a",{id:"NNlib.sigmoid_fast",href:"#NNlib.sigmoid_fast"},[i("span",{class:"jlbinding"},"NNlib.sigmoid_fast")],-1)),s[16]||(s[16]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[17]||(s[17]=l("",5))]),i("details",c,[i("summary",null,[s[18]||(s[18]=i("a",{id:"NNlib.hardtanh",href:"#NNlib.hardtanh"},[i("span",{class:"jlbinding"},"NNlib.hardtanh")],-1)),s[19]||(s[19]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[20]||(s[20]=l("",5))]),i("details",C,[i("summary",null,[s[21]||(s[21]=i("a",{id:"NNlib.tanh_fast",href:"#NNlib.tanh_fast"},[i("span",{class:"jlbinding"},"NNlib.tanh_fast")],-1)),s[22]||(s[22]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[23]||(s[23]=l("",7))]),i("details",u,[i("summary",null,[s[24]||(s[24]=i("a",{id:"NNlib.leakyrelu",href:"#NNlib.leakyrelu"},[i("span",{class:"jlbinding"},"NNlib.leakyrelu")],-1)),s[25]||(s[25]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[26]||(s[26]=l("",4))]),i("details",b,[i("summary",null,[s[27]||(s[27]=i("a",{id:"NNlib.lisht",href:"#NNlib.lisht"},[i("span",{class:"jlbinding"},"NNlib.lisht")],-1)),s[28]||(s[28]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[29]||(s[29]=l("",4))]),i("details",B,[i("summary",null,[s[30]||(s[30]=i("a",{id:"NNlib.logcosh",href:"#NNlib.logcosh"},[i("span",{class:"jlbinding"},"NNlib.logcosh")],-1)),s[31]||(s[31]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[32]||(s[32]=l("",4))]),i("details",A,[i("summary",null,[s[33]||(s[33]=i("a",{id:"NNlib.logsigmoid",href:"#NNlib.logsigmoid"},[i("span",{class:"jlbinding"},"NNlib.logsigmoid")],-1)),s[34]||(s[34]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[35]||(s[35]=l("",4))]),i("details",v,[i("summary",null,[s[36]||(s[36]=i("a",{id:"NNlib.logσ",href:"#NNlib.logσ"},[i("span",{class:"jlbinding"},"NNlib.logσ")],-1)),s[37]||(s[37]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[38]||(s[38]=l("",4))]),i("details",f,[i("summary",null,[s[39]||(s[39]=i("a",{id:"NNlib.mish",href:"#NNlib.mish"},[i("span",{class:"jlbinding"},"NNlib.mish")],-1)),s[40]||(s[40]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[41]||(s[41]=l("",4))]),i("details",j,[i("summary",null,[s[42]||(s[42]=i("a",{id:"NNlib.relu",href:"#NNlib.relu"},[i("span",{class:"jlbinding"},"NNlib.relu")],-1)),s[43]||(s[43]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[44]||(s[44]=l("",4))]),i("details",m,[i("summary",null,[s[45]||(s[45]=i("a",{id:"NNlib.relu6",href:"#NNlib.relu6"},[i("span",{class:"jlbinding"},"NNlib.relu6")],-1)),s[46]||(s[46]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[47]||(s[47]=l("",4))]),i("details",x,[i("summary",null,[s[48]||(s[48]=i("a",{id:"NNlib.rrelu",href:"#NNlib.rrelu"},[i("span",{class:"jlbinding"},"NNlib.rrelu")],-1)),s[49]||(s[49]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[50]||(s[50]=l("",4))]),i("details",D,[i("summary",null,[s[51]||(s[51]=i("a",{id:"NNlib.selu",href:"#NNlib.selu"},[i("span",{class:"jlbinding"},"NNlib.selu")],-1)),s[52]||(s[52]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[53]||(s[53]=l("",4))]),i("details",_,[i("summary",null,[s[54]||(s[54]=i("a",{id:"NNlib.sigmoid",href:"#NNlib.sigmoid"},[i("span",{class:"jlbinding"},"NNlib.sigmoid")],-1)),s[55]||(s[55]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[56]||(s[56]=l("",5))]),i("details",N,[i("summary",null,[s[57]||(s[57]=i("a",{id:"NNlib.σ",href:"#NNlib.σ"},[i("span",{class:"jlbinding"},"NNlib.σ")],-1)),s[58]||(s[58]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[59]||(s[59]=l("",5))]),i("details",T,[i("summary",null,[s[60]||(s[60]=i("a",{id:"NNlib.softplus",href:"#NNlib.softplus"},[i("span",{class:"jlbinding"},"NNlib.softplus")],-1)),s[61]||(s[61]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[62]||(s[62]=l("",4))]),i("details",S,[i("summary",null,[s[63]||(s[63]=i("a",{id:"NNlib.softshrink",href:"#NNlib.softshrink"},[i("span",{class:"jlbinding"},"NNlib.softshrink")],-1)),s[64]||(s[64]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[65]||(s[65]=l("",4))]),i("details",L,[i("summary",null,[s[66]||(s[66]=i("a",{id:"NNlib.softsign",href:"#NNlib.softsign"},[i("span",{class:"jlbinding"},"NNlib.softsign")],-1)),s[67]||(s[67]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[68]||(s[68]=l("",4))]),i("details",P,[i("summary",null,[s[69]||(s[69]=i("a",{id:"NNlib.swish",href:"#NNlib.swish"},[i("span",{class:"jlbinding"},"NNlib.swish")],-1)),s[70]||(s[70]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[71]||(s[71]=l("",4))]),i("details",w,[i("summary",null,[s[72]||(s[72]=i("a",{id:"NNlib.hardswish",href:"#NNlib.hardswish"},[i("span",{class:"jlbinding"},"NNlib.hardswish")],-1)),s[73]||(s[73]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[74]||(s[74]=l("",4))]),i("details",V,[i("summary",null,[s[75]||(s[75]=i("a",{id:"NNlib.tanhshrink",href:"#NNlib.tanhshrink"},[i("span",{class:"jlbinding"},"NNlib.tanhshrink")],-1)),s[76]||(s[76]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[77]||(s[77]=l("",4))]),i("details",I,[i("summary",null,[s[78]||(s[78]=i("a",{id:"NNlib.trelu",href:"#NNlib.trelu"},[i("span",{class:"jlbinding"},"NNlib.trelu")],-1)),s[79]||(s[79]=a()),h(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[80]||(s[80]=l("",4))])])}const H=p(E,[["render",R]]);export{G as __pageData,H as default};
