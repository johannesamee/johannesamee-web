import{_ as f}from"../chunks/preload-helper.BQ24v_F8.js";import{H as R}from"../chunks/control.CYgJF_JY.js";import{s as L}from"../chunks/scheduler.D4_qaxln.js";import{S as V,i as j,z as w,e as h,s as k,f as T,B as M,c as g,d as m,n as q,q as P,h as S,a as u,u as E,b,m as A,j as I,w as C,t as O,k as D,y as H}from"../chunks/index.BLeMwuBr.js";const z=(n,e)=>{const r=n[e];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((a,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function x(n,e){throw new R(n,e)}new TextEncoder;async function B({params:n}){try{const e=await z(Object.assign({"../../posts/1-first-post.md":()=>f(()=>import("../chunks/1-first-post.hBdbsgsr.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"../../posts/2-second-post.md":()=>f(()=>import("../chunks/2-second-post.D9D6TWg6.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url),"../../posts/3-svelte-vercel-project.md":()=>f(()=>import("../chunks/3-svelte-vercel-project.DvbQRd46.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),"../../posts/4-new-domain.md":()=>f(()=>import("../chunks/4-new-domain.BC-OCfDa.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url),"../../posts/5-color-gradients.md":()=>f(()=>import("../chunks/5-color-gradients.BFmQG-97.js"),__vite__mapDeps([8,1,2,3,4,9]),import.meta.url)}),`../../posts/${n.slug}.md`);return{content:e.default,meta:e.metadata}}catch{x(404,`Could not find ${n.slug}`)}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:B},Symbol.toStringTag,{value:"Module"}));function U(n){let e,r,a,i,v,c,l,t,_;document.title=e=n[0].meta.title;var p=n[0].content;function y(o,s){return{}}return p&&(t=w(p,y())),{c(){r=h("meta"),a=h("meta"),v=k(),c=h("article"),l=h("div"),t&&T(t.$$.fragment),this.h()},l(o){const s=M("svelte-ylbs26",document.head);r=g(s,"META",{property:!0,content:!0}),a=g(s,"META",{property:!0,content:!0}),s.forEach(m),v=q(o),c=g(o,"ARTICLE",{class:!0});var d=P(c);l=g(d,"DIV",{class:!0});var $=P(l);t&&S(t.$$.fragment,$),$.forEach(m),d.forEach(m),this.h()},h(){u(r,"property","og:type"),u(r,"content","article"),u(a,"property","og:title"),u(a,"content",i=n[0].meta.title),u(l,"class","prose lg:prose-lg"),u(c,"class","col-span-full max-w-screen-sm")},m(o,s){E(document.head,r),E(document.head,a),b(o,v,s),b(o,c,s),E(c,l),t&&A(t,l,null),_=!0},p(o,[s]){if((!_||s&1)&&e!==(e=o[0].meta.title)&&(document.title=e),(!_||s&1&&i!==(i=o[0].meta.title))&&u(a,"content",i),s&1&&p!==(p=o[0].content)){if(t){H();const d=t;I(d.$$.fragment,1,0,()=>{D(d,1)}),C()}p?(t=w(p,y()),T(t.$$.fragment),O(t.$$.fragment,1),A(t,l,null)):t=null}},i(o){_||(t&&O(t.$$.fragment,o),_=!0)},o(o){t&&I(t.$$.fragment,o),_=!1},d(o){o&&(m(v),m(c)),m(r),m(a),t&&D(t)}}}function F(n,e,r){let{data:a}=e;return n.$$set=i=>{"data"in i&&r(0,a=i.data)},[a]}class W extends V{constructor(e){super(),j(this,e,F,U,L,{data:0})}}export{W as component,Q as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/1-first-post.hBdbsgsr.js","../chunks/scheduler.D4_qaxln.js","../chunks/index.BLeMwuBr.js","../chunks/spread.CgU5AtxT.js","../chunks/mdsvex.B0LWrMXX.js","../chunks/2-second-post.D9D6TWg6.js","../chunks/3-svelte-vercel-project.DvbQRd46.js","../chunks/4-new-domain.BC-OCfDa.js","../chunks/5-color-gradients.BFmQG-97.js","../assets/5-color-gradients.6tL7uSJv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}