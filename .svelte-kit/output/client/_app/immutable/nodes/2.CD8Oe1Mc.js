import{s as V,a as j,e as N,c as Y,u as Z,g as ee,b as te,d as ae}from"../chunks/scheduler.uuNsLXlX.js";import{S as W,i as J,f as U,h as G,m as K,t as y,j as x,k as Q,s as I,e as E,A as se,d as v,n as T,c as w,q as $,g as X,a as b,b as D,u as m,w as le,B as ne,p as A,r as O,v as F,y as oe}from"../chunks/index.BKg8bbRF.js";import{I as re,t as ie,e as P}from"../chunks/Icon.DTWVIL2k.js";import{p as ce}from"../chunks/stores.xsfXyQ-s.js";import{g as fe,a as de}from"../chunks/spread.CgU5AtxT.js";function ue(o){let e;const t=o[2].default,a=Y(t,o,o[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,l){a&&a.m(s,l),e=!0},p(s,l){a&&a.p&&(!e||l&8)&&Z(a,t,s,s[3],e?te(t,s[3],l,null):ee(s[3]),null)},i(s){e||(y(a,s),e=!0)},o(s){x(a,s),e=!1},d(s){a&&a.d(s)}}}function he(o){let e,t;const a=[{name:"calendar-days"},o[1],{iconNode:o[0]}];let s={$$slots:{default:[ue]},$$scope:{ctx:o}};for(let l=0;l<a.length;l+=1)s=j(s,a[l]);return e=new re({props:s}),{c(){U(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,c){K(e,l,c),t=!0},p(l,[c]){const h=c&3?fe(a,[a[0],c&2&&de(l[1]),c&1&&{iconNode:l[0]}]):{};c&8&&(h.$$scope={dirty:c,ctx:l}),e.$set(h)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function pe(o,e,t){let{$$slots:a={},$$scope:s}=e;const l=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];return o.$$set=c=>{t(1,e=j(j({},e),N(c))),"$$scope"in c&&t(3,s=c.$$scope)},e=N(e),[l,e,a,s]}class _e extends W{constructor(e){super(),J(this,e,pe,he,V,{})}}async function me({fetch:o}){return{posts:await(await o("api/posts")).json()}}const ke=Object.freeze(Object.defineProperty({__proto__:null,load:me},Symbol.toStringTag,{value:"Module"}));function q(o,e="medium",t="en"){return new Intl.DateTimeFormat(t,{dateStyle:e}).format(new Date(o))}function z(o,e,t){const a=o.slice();return a[3]=e[t],a}function B(o){let e,t,a,s=o[3].title+"",l,c,h,g,_=q(o[3].date)+"",i,k,f,n,d,r,p;return n=new _e({props:{class:"hidden md:block"}}),{c(){e=E("article"),t=E("a"),a=E("header"),l=A(s),c=I(),h=E("div"),g=E("time"),i=A(_),f=I(),U(n.$$.fragment),r=I(),this.h()},l(u){e=w(u,"ARTICLE",{class:!0});var M=$(e);t=w(M,"A",{class:!0,href:!0});var C=$(t);a=w(C,"HEADER",{});var H=$(a);l=O(H,s),H.forEach(v),c=T(C),h=w(C,"DIV",{class:!0});var S=$(h);g=w(S,"TIME",{datetime:!0});var L=$(g);i=O(L,_),L.forEach(v),f=T(S),G(n.$$.fragment,S),S.forEach(v),C.forEach(v),r=T(M),M.forEach(v),this.h()},h(){b(g,"datetime",k=o[3].date),b(h,"class","flex gap-1 md:ml-auto text-secondary-content pl-1 min-w-fit"),b(t,"class","flex flex-col md:flex-row text-accent-content hover:text-accent-content-hover font-bold"),b(t,"href",d="posts/"+o[3].slug),b(e,"class","my-2")},m(u,M){D(u,e,M),m(e,t),m(t,a),m(a,l),m(t,c),m(t,h),m(h,g),m(g,i),m(h,f),K(n,h,null),m(e,r),p=!0},p(u,M){(!p||M&1)&&s!==(s=u[3].title+"")&&F(l,s),(!p||M&1)&&_!==(_=q(u[3].date)+"")&&F(i,_),(!p||M&1&&k!==(k=u[3].date))&&b(g,"datetime",k),(!p||M&1&&d!==(d="posts/"+u[3].slug))&&b(t,"href",d)},i(u){p||(y(n.$$.fragment,u),p=!0)},o(u){x(n.$$.fragment,u),p=!1},d(u){u&&v(e),Q(n)}}}function R(o){let e,t='<div class="glass rounded-box p-3 flex flex-col"><h2>Collected Webs</h2> <span><a href="https://www.wakingup.com/" target="_blank">Waking Up</a>, by Sam Harris</span> <span><a href="https://fortelabs.com/" target="_blank">Forte Labs</a>, by Tiago Forte</span></div>';return{c(){e=E("aside"),e.innerHTML=t,this.h()},l(a){e=w(a,"ASIDE",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-129htde"&&(e.innerHTML=t),this.h()},h(){b(e,"class","prose prose-headings:my-2 prose-a:underline col-span-1")},m(a,s){D(a,e,s)},d(a){a&&v(e)}}}function ge(o){let e,t,a,s="<h1>Notebook</h1> <p>Ideas, notes and whatever else Johannes publish.</p>",l,c,h,g;document.title=ie;let _=P(o[0].posts),i=[];for(let n=0;n<_.length;n+=1)i[n]=B(z(o,_,n));const k=n=>x(i[n],1,1,()=>{i[n]=null});let f=o[1]&&R();return{c(){e=I(),t=E("section"),a=E("div"),a.innerHTML=s,l=I(),c=E("section");for(let n=0;n<i.length;n+=1)i[n].c();h=I(),f&&f.c(),this.h()},l(n){se("svelte-fbczdu",document.head).forEach(v),e=T(n),t=w(n,"SECTION",{class:!0});var r=$(t);a=w(r,"DIV",{class:!0,"data-svelte-h":!0}),X(a)!=="svelte-18ltxwj"&&(a.innerHTML=s),l=T(r),c=w(r,"SECTION",{class:!0});var p=$(c);for(let u=0;u<i.length;u+=1)i[u].l(p);p.forEach(v),h=T(r),f&&f.l(r),r.forEach(v),this.h()},h(){b(a,"class","prose lg:prose-xl prose-headings:mb-1 prose-p:mt-1 col-span-full"),b(c,"class","col-span-1"),b(t,"class","grid grid-cols-1 md:grid-cols-[1fr_256px] gap-16")},m(n,d){D(n,e,d),D(n,t,d),m(t,a),m(t,l),m(t,c);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(c,null);m(t,h),f&&f.m(t,null),g=!0},p(n,[d]){if(d&1){_=P(n[0].posts);let r;for(r=0;r<_.length;r+=1){const p=z(n,_,r);i[r]?(i[r].p(p,d),y(i[r],1)):(i[r]=B(p),i[r].c(),y(i[r],1),i[r].m(c,null))}for(oe(),r=_.length;r<i.length;r+=1)k(r);le()}n[1]?f||(f=R(),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i(n){if(!g){for(let d=0;d<_.length;d+=1)y(i[d]);g=!0}},o(n){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)x(i[d]);g=!1},d(n){n&&(v(e),v(t)),ne(i,n),f&&f.d()}}}function ve(o,e,t){let a,s;ae(o,ce,c=>t(2,s=c));let{data:l}=e;return o.$$set=c=>{"data"in c&&t(0,l=c.data)},o.$$.update=()=>{o.$$.dirty&4&&t(1,a=s.url.pathname==="/")},[l,a,s]}class ye extends W{constructor(e){super(),J(this,e,ve,ge,V,{data:0})}}export{ye as component,ke as universal};