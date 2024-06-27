import{s as W,a as q,e as O,c as X,u as Y,g as Z,b as x,d as ee}from"../chunks/scheduler.DWE2ryb4.js";import{S as R,i as V,f as G,h as J,m as K,t as y,j as S,k as Q,s as E,e as M,A as te,d as m,n as C,c as k,q as w,a as b,b as T,u as p,w as ae,B as se,p as L,r as P,v as N,g as le,y as ne}from"../chunks/index.DiUfanPG.js";import{e as z}from"../chunks/each.D6YF6ztN.js";import{f as B}from"../chunks/utils.3InfNRpA.js";import{I as oe,t as re}from"../chunks/Icon._WXXitNL.js";import{p as ce}from"../chunks/stores.BYp0Bmeb.js";import{g as ie,a as fe}from"../chunks/spread.CgU5AtxT.js";function ue(c){let e;const a=c[2].default,t=X(a,c,c[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&8)&&Y(t,a,l,l[3],e?x(a,l[3],s,null):Z(l[3]),null)},i(l){e||(y(t,l),e=!0)},o(l){S(t,l),e=!1},d(l){t&&t.d(l)}}}function de(c){let e,a;const t=[{name:"calendar-days"},c[1],{iconNode:c[0]}];let l={$$slots:{default:[ue]},$$scope:{ctx:c}};for(let s=0;s<t.length;s+=1)l=q(l,t[s]);return e=new oe({props:l}),{c(){G(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,i){K(e,s,i),a=!0},p(s,[i]){const n=i&3?ie(t,[t[0],i&2&&fe(s[1]),i&1&&{iconNode:s[0]}]):{};i&8&&(n.$$scope={dirty:i,ctx:s}),e.$set(n)},i(s){a||(y(e.$$.fragment,s),a=!0)},o(s){S(e.$$.fragment,s),a=!1},d(s){Q(e,s)}}}function he(c,e,a){let{$$slots:t={},$$scope:l}=e;const s=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];return c.$$set=i=>{a(1,e=q(q({},e),O(i))),"$$scope"in i&&a(3,l=i.$$scope)},e=O(e),[s,e,t,l]}class _e extends R{constructor(e){super(),V(this,e,he,de,W,{})}}async function pe({fetch:c}){return{posts:await(await c("api/posts")).json()}}const Ee=Object.freeze(Object.defineProperty({__proto__:null,load:pe},Symbol.toStringTag,{value:"Module"}));function D(c,e,a){const t=c.slice();return t[3]=e[a],t}function F(c){let e,a,t=c[3].title+"",l,s,i,n,g,f=B(c[3].date)+"",r,u,o,_=c[3].description+"",v,j,$;return g=new _e({}),{c(){e=M("article"),a=M("a"),l=L(t),i=E(),n=M("p"),G(g.$$.fragment),r=L(f),u=E(),o=M("p"),v=L(_),j=E(),this.h()},l(d){e=k(d,"ARTICLE",{class:!0});var h=w(e);a=k(h,"A",{href:!0,class:!0});var A=w(a);l=P(A,t),A.forEach(m),i=C(h),n=k(h,"P",{class:!0});var I=w(n);J(g.$$.fragment,I),r=P(I,f),I.forEach(m),u=C(h),o=k(h,"P",{class:!0});var H=w(o);v=P(H,_),H.forEach(m),j=C(h),h.forEach(m),this.h()},h(){b(a,"href",s=c[3].slug),b(a,"class","title"),b(n,"class","date"),b(o,"class","description"),b(e,"class","post")},m(d,h){T(d,e,h),p(e,a),p(a,l),p(e,i),p(e,n),K(g,n,null),p(n,r),p(e,u),p(e,o),p(o,v),p(e,j),$=!0},p(d,h){(!$||h&1)&&t!==(t=d[3].title+"")&&N(l,t),(!$||h&1&&s!==(s=d[3].slug))&&b(a,"href",s),(!$||h&1)&&f!==(f=B(d[3].date)+"")&&N(r,f),(!$||h&1)&&_!==(_=d[3].description+"")&&N(v,_)},i(d){$||(y(g.$$.fragment,d),$=!0)},o(d){S(g.$$.fragment,d),$=!1},d(d){d&&m(e),Q(g)}}}function U(c){let e,a='<div class="card-body"><h2 class="card-title">Collected Webs</h2> <span><a href="https://www.wakingup.com/" target="_blank">Waking Up</a>, by Sam Harris</span> <span><a href="https://fortelabs.com/" target="_blank">Forte Labs</a>, by Tiago Forte</span></div>';return{c(){e=M("div"),e.innerHTML=a,this.h()},l(t){e=k(t,"DIV",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-5l2cq"&&(e.innerHTML=a),this.h()},h(){b(e,"class","card bg-base-100 w-fit h-fit glass prose prose-a:underline")},m(t,l){T(t,e,l)},d(t){t&&m(e)}}}function me(c){let e,a,t,l,s;document.title=re;let i=z(c[0].posts),n=[];for(let r=0;r<i.length;r+=1)n[r]=F(D(c,i,r));const g=r=>S(n[r],1,1,()=>{n[r]=null});let f=c[1]&&U();return{c(){e=E(),a=M("section"),t=M("ul");for(let r=0;r<n.length;r+=1)n[r].c();l=E(),f&&f.c(),this.h()},l(r){te("svelte-fbczdu",document.head).forEach(m),e=C(r),a=k(r,"SECTION",{class:!0});var o=w(a);t=k(o,"UL",{class:!0});var _=w(t);for(let v=0;v<n.length;v+=1)n[v].l(_);_.forEach(m),l=C(o),f&&f.l(o),o.forEach(m),this.h()},h(){b(t,"class","posts col-span-3 mr-16"),b(a,"class","grid grid-cols-4")},m(r,u){T(r,e,u),T(r,a,u),p(a,t);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(t,null);p(a,l),f&&f.m(a,null),s=!0},p(r,[u]){if(u&1){i=z(r[0].posts);let o;for(o=0;o<i.length;o+=1){const _=D(r,i,o);n[o]?(n[o].p(_,u),y(n[o],1)):(n[o]=F(_),n[o].c(),y(n[o],1),n[o].m(t,null))}for(ne(),o=i.length;o<n.length;o+=1)g(o);ae()}r[1]?f||(f=U(),f.c(),f.m(a,null)):f&&(f.d(1),f=null)},i(r){if(!s){for(let u=0;u<i.length;u+=1)y(n[u]);s=!0}},o(r){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)S(n[u]);s=!1},d(r){r&&(m(e),m(a)),se(n,r),f&&f.d()}}}function ge(c,e,a){let t,l;ee(c,ce,i=>a(2,l=i));let{data:s}=e;return c.$$set=i=>{"data"in i&&a(0,s=i.data)},c.$$.update=()=>{c.$$.dirty&4&&a(1,t=l.url.pathname==="/")},[s,t,l]}class Ce extends R{constructor(e){super(),V(this,e,ge,me,W,{data:0})}}export{Ce as component,Ee as universal};
