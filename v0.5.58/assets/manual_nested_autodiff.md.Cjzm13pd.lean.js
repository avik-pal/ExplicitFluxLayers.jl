import{_ as e,c as t,j as s,a as i,a3 as a,o as n}from"./chunks/framework.BrB0cdsk.js";const ds=JSON.parse('{"title":"Nested Automatic Differentiation","description":"","frontmatter":{},"headers":[],"relativePath":"manual/nested_autodiff.md","filePath":"manual/nested_autodiff.md","lastUpdated":null}'),l={name:"manual/nested_autodiff.md"},h=a("",43),p=s("a",{href:"https://www.researchgate.net/publication/243668757_A_Stochastic_Estimator_of_the_Trace_of_the_Influence_Matrix_for_Laplacian_Smoothing_Splines",target:"_blank",rel:"noreferrer"},"Hutchinson 1990",-1),k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.09ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.178ex",height:"2.004ex",role:"img",focusable:"false",viewBox:"0 -846 4498.7 886","aria-hidden":"true"},r=a("",1),o=[r],Q=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"A"),s("mo",null,"∈"),s("msup",null,[s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"double-struck"},"R")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"D"),s("mo",null,"×"),s("mi",null,"D")])])])],-1),g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.09ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.009ex",height:"2.004ex",role:"img",focusable:"false",viewBox:"0 -846 3098 886","aria-hidden":"true"},E=a("",1),c=[E],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"v"),s("mo",null,"∈"),s("msup",null,[s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"double-struck"},"R")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"D")])])])],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.791ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.439ex",height:"2.713ex",role:"img",focusable:"false",viewBox:"0 -849.5 5056 1199","aria-hidden":"true"},F=a("",1),C=[F],f=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"double-struck"},"E")]),s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"["),s("mi",null,"v"),s("msup",null,[s("mi",null,"v"),s("mi",null,"T")]),s("mo",{"data-mjx-texclass":"CLOSE"},"]")]),s("mo",null,"="),s("mi",null,"I")])],-1),x={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.692ex",height:"6.74ex",role:"img",focusable:"false",viewBox:"0 -1733 14891.7 2978.9","aria-hidden":"true"},b=a("",1),v=[b],w=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mtext",null,"Tr"),s("mo",{stretchy:"false"},"("),s("mi",null,"A"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"double-struck"},"E")]),s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"["),s("msup",null,[s("mi",null,"v"),s("mi",null,"T")]),s("mi",null,"A"),s("mi",null,"v"),s("mo",{"data-mjx-texclass":"CLOSE"},"]")]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"V")]),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"V")]),s("msubsup",null,[s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"T")]),s("mi",null,"A"),s("msub",null,[s("mi",null,"v"),s("mi",null,"i")])])],-1),H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.09ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.913ex",height:"2.004ex",role:"img",focusable:"false",viewBox:"0 -846 4381.7 886","aria-hidden":"true"},L=a("",1),B=[L],A=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"J"),s("mo",null,"∈"),s("msup",null,[s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"double-struck"},"R")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"D"),s("mo",null,"×"),s("mi",null,"D")])])])],-1),j={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"21.167ex",height:"6.74ex",role:"img",focusable:"false",viewBox:"0 -1733 9355.6 2978.9","aria-hidden":"true"},V=a("",1),Z=[V],S=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mtext",null,"Tr"),s("mo",{stretchy:"false"},"("),s("mi",null,"J"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"V")]),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"V")]),s("msubsup",null,[s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"T")]),s("mi",null,"J"),s("msub",null,[s("mi",null,"v"),s("mi",null,"i")])])],-1),J=s("p",null,"Note that we can compute this using two methods:",-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.661ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.843ex",height:"2.565ex",role:"img",focusable:"false",viewBox:"0 -841.7 1698.8 1133.9","aria-hidden":"true"},I=a("",1),R=[I],N=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msubsup",null,[s("mi",null,"v"),s("mi",null,"i"),s("mi",null,"T")]),s("mi",null,"J")])],-1),O={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.269ex",height:"1.902ex",role:"img",focusable:"false",viewBox:"0 -683 1445 840.8","aria-hidden":"true"},z=a("",1),G=[z],W=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"J"),s("msub",null,[s("mi",null,"v"),s("mi",null,"i")])])],-1),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.837ex",height:"1.359ex",role:"img",focusable:"false",viewBox:"0 -443 812 600.8","aria-hidden":"true"},Y=a("",1),K=[Y],ss=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msub",null,[s("mi",null,"v"),s("mi",null,"i")])])],-1),is=a("",20);function as(ts,ns,es,ls,hs,ps){return n(),t("div",null,[h,s("p",null,[i("Hutchinson Trace Estimation often shows up in machine learning literature to provide a fast estimate of the trace of a Jacobian Matrix. This is based off of "),p,i(" which computes the estimated trace of a matrix "),s("mjx-container",k,[(n(),t("svg",d,o)),Q]),i(" using random vectors "),s("mjx-container",g,[(n(),t("svg",T,c)),m]),i(" s.t. "),s("mjx-container",y,[(n(),t("svg",u,C)),f]),i(".")]),s("mjx-container",x,[(n(),t("svg",_,v)),w]),s("p",null,[i("We can use this to compute the trace of a Jacobian Matrix "),s("mjx-container",H,[(n(),t("svg",D,B)),A]),i(" using the following algorithm:")]),s("mjx-container",j,[(n(),t("svg",M,Z)),S]),J,s("ol",null,[s("li",null,[s("p",null,[i("Compute "),s("mjx-container",P,[(n(),t("svg",q,R)),N]),i(" using a Vector-Jacobian product and then do a matrix-vector product to get the trace.")])]),s("li",null,[s("p",null,[i("Compute "),s("mjx-container",O,[(n(),t("svg",X,G)),W]),i(" using a Jacobian-Vector product and then do a matrix-vector product to get the trace.")])])]),s("p",null,[i("For simplicity, we will use a single sample of "),s("mjx-container",$,[(n(),t("svg",U,K)),ss]),i(" to compute the trace. Additionally, we will fix the sample to ensure that our tests against the finite difference implementation are not affected by the randomness in the sample.")]),is])}const rs=e(l,[["render",as]]);export{ds as __pageData,rs as default};
