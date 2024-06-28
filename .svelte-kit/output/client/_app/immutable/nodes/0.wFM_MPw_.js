import{C as be,s as H,a as q,e as F,c as Q,u as G,g as W,b as Y,n as ee,m as we,l as ke}from"../chunks/scheduler.D4_qaxln.js";import{p as ue}from"../chunks/stores.-dgZt3FI.js";import{S as B,i as O,f as V,h as T,m as N,t as p,j as b,k as L,e as v,D as fe,s as D,p as J,c as g,q as $,E as de,d,n as P,r as K,a as o,b as X,u as c,g as te,l as me,y as Se,w as ye,G as Ee}from"../chunks/index.BLeMwuBr.js";import{I as ae,t as ve}from"../chunks/Icon.CVfreB3I.js";import{g as se,a as re}from"../chunks/spread.CgU5AtxT.js";import"../chunks/entry.9yiwfX1h.js";var Ie="@vercel/speed-insights",Re="1.0.12",Ce=()=>{window.si||(window.si=function(...e){(window.siq=window.siq||[]).push(e)})};function je(){return typeof window<"u"}function Me(){try{const s="production"}catch{}return"production"}function he(){return Me()==="development"}var ge="https://va.vercel-scripts.com/v1/speed-insights",Ae=`${ge}/script.js`,De=`${ge}/script.debug.js`,Pe="/_vercel/speed-insights/script.js";function Ve(s={}){var e;if(!je()||s.route===null)return null;Ce();const n=!!s.dsn?Ae:Pe,a=s.scriptSrc||(he()?De:n);if(document.head.querySelector(`script[src*="${a}"]`))return null;s.beforeSend&&((e=window.si)==null||e.call(window,"beforeSend",s.beforeSend));const t=document.createElement("script");return t.src=a,t.defer=!0,t.dataset.sdkn=Ie+(s.framework?`/${s.framework}`:""),t.dataset.sdkv=Re,s.sampleRate&&(t.dataset.sampleRate=s.sampleRate.toString()),s.route&&(t.dataset.route=s.route),s.endpoint&&(t.dataset.endpoint=s.endpoint),s.dsn&&(t.dataset.dsn=s.dsn),he()&&s.debug===!1&&(t.dataset.debug="false"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${a}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:l=>{t.dataset.route=l??void 0}}}function Te(s={}){var e;{const r=Ve({route:(e=be(ue).route)==null?void 0:e.id,...s,framework:"sveltekit"});r&&ue.subscribe(n=>{var a;(a=n.route)!=null&&a.id&&r.setRoute(n.route.id)})}}var Ne="@vercel/analytics",Le="1.3.1",qe=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function $e(){return typeof window<"u"}function pe(){try{const s="production"}catch{}return"production"}function He(s="auto"){if(s==="auto"){window.vam=pe();return}window.vam=s}function Be(){return($e()?window.vam:pe())||"production"}function ne(){return Be()==="development"}var Oe="https://va.vercel-scripts.com/v1/script.debug.js",Ue="/_vercel/insights/script.js";function ze(s={debug:!0}){var e;if(!$e())return;He(s.mode),qe(),s.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",s.beforeSend));const r=s.scriptSrc||(ne()?Oe:Ue);if(document.head.querySelector(`script[src*="${r}"]`))return;const n=document.createElement("script");n.src=r,n.defer=!0,n.dataset.sdkn=Ne+(s.framework?`/${s.framework}`:""),n.dataset.sdkv=Le,s.disableAutoTrack&&(n.dataset.disableAutoTrack="1"),s.endpoint&&(n.dataset.endpoint=s.endpoint),s.dsn&&(n.dataset.dsn=s.dsn),n.onerror=()=>{const a=ne()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${a}`)},ne()&&s.debug===!1&&(n.dataset.debug="false"),document.head.appendChild(n)}ze({mode:"production"});Te();const Fe=!0;async function Qe({url:s}){return{url:s.pathname}}const kt=Object.freeze(Object.defineProperty({__proto__:null,load:Qe,prerender:Fe},Symbol.toStringTag,{value:"Module"}));function Ge(s){let e;const r=s[2].default,n=Q(r,s,s[3],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,t){n&&n.m(a,t),e=!0},p(a,t){n&&n.p&&(!e||t&8)&&G(n,r,a,a[3],e?Y(r,a[3],t,null):W(a[3]),null)},i(a){e||(p(n,a),e=!0)},o(a){b(n,a),e=!1},d(a){n&&n.d(a)}}}function We(s){let e,r;const n=[{name:"github"},s[1],{iconNode:s[0]}];let a={$$slots:{default:[Ge]},$$scope:{ctx:s}};for(let t=0;t<n.length;t+=1)a=q(a,n[t]);return e=new ae({props:a}),{c(){V(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const i=l&3?se(n,[n[0],l&2&&re(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function Ye(s,e,r){let{$$slots:n={},$$scope:a}=e;const t=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];return s.$$set=l=>{r(1,e=q(q({},e),F(l))),"$$scope"in l&&r(3,a=l.$$scope)},e=F(e),[t,e,n,a]}class Xe extends B{constructor(e){super(),O(this,e,Ye,We,H,{})}}function Ze(s){let e;const r=s[2].default,n=Q(r,s,s[3],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,t){n&&n.m(a,t),e=!0},p(a,t){n&&n.p&&(!e||t&8)&&G(n,r,a,a[3],e?Y(r,a[3],t,null):W(a[3]),null)},i(a){e||(p(n,a),e=!0)},o(a){b(n,a),e=!1},d(a){n&&n.d(a)}}}function xe(s){let e,r;const n=[{name:"linkedin"},s[1],{iconNode:s[0]}];let a={$$slots:{default:[Ze]},$$scope:{ctx:s}};for(let t=0;t<n.length;t+=1)a=q(a,n[t]);return e=new ae({props:a}),{c(){V(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const i=l&3?se(n,[n[0],l&2&&re(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function Je(s,e,r){let{$$slots:n={},$$scope:a}=e;const t=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];return s.$$set=l=>{r(1,e=q(q({},e),F(l))),"$$scope"in l&&r(3,a=l.$$scope)},e=F(e),[t,e,n,a]}class Ke extends B{constructor(e){super(),O(this,e,Je,xe,H,{})}}function et(s){let e;const r=s[2].default,n=Q(r,s,s[3],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,t){n&&n.m(a,t),e=!0},p(a,t){n&&n.p&&(!e||t&8)&&G(n,r,a,a[3],e?Y(r,a[3],t,null):W(a[3]),null)},i(a){e||(p(n,a),e=!0)},o(a){b(n,a),e=!1},d(a){n&&n.d(a)}}}function tt(s){let e,r;const n=[{name:"rss"},s[1],{iconNode:s[0]}];let a={$$slots:{default:[et]},$$scope:{ctx:s}};for(let t=0;t<n.length;t+=1)a=q(a,n[t]);return e=new ae({props:a}),{c(){V(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const i=l&3?se(n,[n[0],l&2&&re(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function nt(s,e,r){let{$$slots:n={},$$scope:a}=e;const t=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];return s.$$set=l=>{r(1,e=q(q({},e),F(l))),"$$scope"in l&&r(3,a=l.$$scope)},e=F(e),[t,e,n,a]}class at extends B{constructor(e){super(),O(this,e,nt,tt,H,{})}}function st(s){let e,r,n,a,t,l,i=ve+"",I,w,u=new Date().getFullYear()+"",f,m,h,S,R,C,M,_,j,y,E,A;return R=new Ke({}),_=new Xe({}),E=new at({}),{c(){e=v("footer"),r=v("aside"),n=fe("svg"),a=fe("path"),t=D(),l=v("p"),I=J(i),w=J(" © "),f=J(u),m=D(),h=v("nav"),S=v("a"),V(R.$$.fragment),C=D(),M=v("a"),V(_.$$.fragment),j=D(),y=v("a"),V(E.$$.fragment),this.h()},l(k){e=g(k,"FOOTER",{class:!0});var U=$(e);r=g(U,"ASIDE",{class:!0});var Z=$(r);n=de(Z,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,class:!0});var le=$(n);a=de(le,"path",{d:!0}),$(a).forEach(d),le.forEach(d),t=P(Z),l=g(Z,"P",{});var x=$(l);I=K(x,i),w=K(x," © "),f=K(x,u),x.forEach(d),Z.forEach(d),m=P(U),h=g(U,"NAV",{class:!0});var z=$(h);S=g(z,"A",{href:!0,target:!0});var ie=$(S);T(R.$$.fragment,ie),ie.forEach(d),C=P(z),M=g(z,"A",{href:!0,target:!0});var oe=$(M);T(_.$$.fragment,oe),oe.forEach(d),j=P(z),y=g(z,"A",{href:!0,target:!0});var ce=$(y);T(E.$$.fragment,ce),ce.forEach(d),z.forEach(d),U.forEach(d),this.h()},h(){o(a,"d","M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"),o(n,"width","36"),o(n,"height","36"),o(n,"viewBox","0 0 24 24"),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill-rule","evenodd"),o(n,"clip-rule","evenodd"),o(n,"class","fill-current"),o(r,"class","grid-flow-col items-center"),o(S,"href","https://www.linkedin.com/in/johannes-am%C3%A9e-bj%C3%B6rkdahl-ab7495a9"),o(S,"target","_blank"),o(M,"href","https://github.com/johannesamee"),o(M,"target","_blank"),o(y,"href","/rss.xml"),o(y,"target","_blank"),o(h,"class","grid-flow-col gap-4 md:place-self-center md:justify-self-end"),o(e,"class","footer text-base-content items-center py-8 relative")},m(k,U){X(k,e,U),c(e,r),c(r,n),c(n,a),c(r,t),c(r,l),c(l,I),c(l,w),c(l,f),c(e,m),c(e,h),c(h,S),N(R,S,null),c(h,C),c(h,M),N(_,M,null),c(h,j),c(h,y),N(E,y,null),A=!0},p:ee,i(k){A||(p(R.$$.fragment,k),p(_.$$.fragment,k),p(E.$$.fragment,k),A=!0)},o(k){b(R.$$.fragment,k),b(_.$$.fragment,k),b(E.$$.fragment,k),A=!1},d(k){k&&d(e),L(R),L(_),L(E)}}}class rt extends B{constructor(e){super(),O(this,e,null,st,H,{})}}function lt(s,{delay:e=0,duration:r=400,easing:n=we}={}){const a=+getComputedStyle(s).opacity;return{delay:e,duration:r,easing:n,css:t=>`opacity: ${t*a}`}}localStorage.getItem("color-scheme");function it(s){let e,r,n,a,t,l='<div class="w-12 max-w-12 rounded-full"><img src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_800_800/0/1710513333483?e=1724889600&amp;v=beta&amp;t=Da52QVeoZ8fdB5Ch-5WrqVHyAyMmG5S2VfdOVFNIxds" alt="Linkedin Profile Picture"/></div>',i,I=ve+"",w,u,f,m,h="Under Construction",S,R,C,M='<ul class="hidden md:inline-flex menu menu-horizontal"><li><a href="/contact">Contact</a></li> <li><a href="/about">About</a></li> <li><a href="/rss.xml" target="_blank">RSS</a></li></ul> <ul class="inline-flex md:hidden menu menu-horizontal px-1"><li><details><summary>Menu</summary> <ul class="bg-base-100 rounded-t-none p-2"><li><a href="/contact">Contact</a></li> <li><a href="/about">About</a></li> <li><a href="/rss.xml" target="_blank">RSS</a></li></ul></details></li></ul>';return{c(){e=v("nav"),r=v("div"),n=v("div"),a=v("a"),t=v("div"),t.innerHTML=l,i=D(),w=J(I),f=D(),m=v("div"),m.textContent=h,R=D(),C=v("div"),C.innerHTML=M,this.h()},l(_){e=g(_,"NAV",{});var j=$(e);r=g(j,"DIV",{class:!0});var y=$(r);n=g(y,"DIV",{class:!0});var E=$(n);a=g(E,"A",{href:!0,class:!0});var A=$(a);t=g(A,"DIV",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1b27681"&&(t.innerHTML=l),i=P(A),w=K(A,I),A.forEach(d),f=P(E),m=g(E,"DIV",{class:!0,"data-svelte-h":!0}),te(m)!=="svelte-1iv5sb3"&&(m.textContent=h),E.forEach(d),R=P(y),C=g(y,"DIV",{class:!0,"data-svelte-h":!0}),te(C)!=="svelte-mdfbha"&&(C.innerHTML=M),y.forEach(d),j.forEach(d),this.h()},h(){o(t,"class","avatar"),o(a,"href","/"),o(a,"class",u="btn btn-ghost text-xl pl-0 "+(s[0]?"h-12":"h-fit")+" "+(s[0]?"min-h-12":"min-h-fit")),o(m,"class","badge badge-info"),o(n,"class",S=(s[0]?"flex-col md:flex-row md:items-center":"flex-col")+" gap-1 items-start"),o(C,"class","flex-none ml-auto"),o(r,"class","navbar px-0 bg-base-100 mb-8 z-10 gap-1")},m(_,j){X(_,e,j),c(e,r),c(r,n),c(n,a),c(a,t),c(a,i),c(a,w),c(n,f),c(n,m),c(r,R),c(r,C)},p(_,[j]){j&1&&u!==(u="btn btn-ghost text-xl pl-0 "+(_[0]?"h-12":"h-fit")+" "+(_[0]?"min-h-12":"min-h-fit"))&&o(a,"class",u),j&1&&S!==(S=(_[0]?"flex-col md:flex-row md:items-center":"flex-col")+" gap-1 items-start")&&o(n,"class",S)},i:ee,o:ee,d(_){_&&d(e)}}}function ot(s,e,r){let n,{url:a}=e;return s.$$set=t=>{"url"in t&&r(1,a=t.url)},s.$$.update=()=>{s.$$.dirty&2&&r(0,n=a==="/")},[n,a]}class ct extends B{constructor(e){super(),O(this,e,ot,it,H,{url:1})}}function _e(s){let e,r,n;const a=s[2].default,t=Q(a,s,s[1],null);return{c(){e=v("div"),t&&t.c(),this.h()},l(l){e=g(l,"DIV",{class:!0});var i=$(e);t&&t.l(i),i.forEach(d),this.h()},h(){o(e,"class","transition")},m(l,i){X(l,e,i),t&&t.m(e,null),n=!0},p(l,i){t&&t.p&&(!n||i&2)&&G(t,a,l,l[1],n?Y(a,l[1],i,null):W(l[1]),null)},i(l){n||(p(t,l),l&&(r||ke(()=>{r=Ee(e,lt,{}),r.start()})),n=!0)},o(l){b(t,l),n=!1},d(l){l&&d(e),t&&t.d(l)}}}function ut(s){let e=s[0],r,n,a=_e(s);return{c(){a.c(),r=me()},l(t){a.l(t),r=me()},m(t,l){a.m(t,l),X(t,r,l),n=!0},p(t,[l]){l&1&&H(e,e=t[0])?(Se(),b(a,1,1,ee),ye(),a=_e(t),a.c(),p(a,1),a.m(r.parentNode,r)):a.p(t,l)},i(t){n||(p(a),n=!0)},o(t){b(a),n=!1},d(t){t&&d(r),a.d(t)}}}function ft(s,e,r){let{$$slots:n={},$$scope:a}=e,{url:t}=e;return s.$$set=l=>{"url"in l&&r(0,t=l.url),"$$scope"in l&&r(1,a=l.$$scope)},[t,a,n]}class dt extends B{constructor(e){super(),O(this,e,ft,ut,H,{url:0})}}function mt(s){let e;const r=s[2].default,n=Q(r,s,s[3],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,t){n&&n.m(a,t),e=!0},p(a,t){n&&n.p&&(!e||t&8)&&G(n,r,a,a[3],e?Y(r,a[3],t,null):W(a[3]),null)},i(a){e||(p(n,a),e=!0)},o(a){b(n,a),e=!1},d(a){n&&n.d(a)}}}function ht(s){let e,r,n,a,t,l,i,I,w;return r=new ct({props:{url:s[0].url}}),t=new dt({props:{url:"posts/"+s[0].url,$$slots:{default:[mt]},$$scope:{ctx:s}}}),i=new rt({}),{c(){e=v("div"),V(r.$$.fragment),n=D(),a=v("main"),V(t.$$.fragment),l=D(),V(i.$$.fragment),this.h()},l(u){e=g(u,"DIV",{class:!0});var f=$(e);T(r.$$.fragment,f),n=P(f),a=g(f,"MAIN",{class:!0});var m=$(a);T(t.$$.fragment,m),m.forEach(d),l=P(f),T(i.$$.fragment,f),f.forEach(d),this.h()},h(){o(a,"class","max-w-screen-l"),o(e,"class",I="max-w-screen-"+(s[1]?"lg":"sm")+" layout mx-auto p-4 svelte-17gjji2")},m(u,f){X(u,e,f),N(r,e,null),c(e,n),c(e,a),N(t,a,null),c(e,l),N(i,e,null),w=!0},p(u,[f]){const m={};f&1&&(m.url=u[0].url),r.$set(m);const h={};f&1&&(h.url="posts/"+u[0].url),f&8&&(h.$$scope={dirty:f,ctx:u}),t.$set(h),(!w||f&2&&I!==(I="max-w-screen-"+(u[1]?"lg":"sm")+" layout mx-auto p-4 svelte-17gjji2"))&&o(e,"class",I)},i(u){w||(p(r.$$.fragment,u),p(t.$$.fragment,u),p(i.$$.fragment,u),w=!0)},o(u){b(r.$$.fragment,u),b(t.$$.fragment,u),b(i.$$.fragment,u),w=!1},d(u){u&&d(e),L(r),L(t),L(i)}}}function _t(s,e,r){let n,{$$slots:a={},$$scope:t}=e,{data:l}=e;return s.$$set=i=>{"data"in i&&r(0,l=i.data),"$$scope"in i&&r(3,t=i.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&r(1,n=l.url==="/")},[l,n,a,t]}class St extends B{constructor(e){super(),O(this,e,_t,ht,H,{data:0})}}export{St as component,kt as universal};
