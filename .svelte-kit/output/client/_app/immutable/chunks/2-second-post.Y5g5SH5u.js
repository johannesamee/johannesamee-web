import{s as q,j as L,n as $,a as M,e as P}from"./scheduler.DWE2ryb4.js";import{S as z,i as E,e as p,c as g,a as d,b as f,d as u,p as F,q as G,r as J,u as N,F as O,v as U,f as S,h as k,m as y,t as H,j as T,k as j,s as C,g as w,n as b}from"./index.DiUfanPG.js";import{g as W,a as A}from"./spread.CgU5AtxT.js";import{M as D}from"./mdsvex.jeVyY8mv.js";function K(i){let t,a;return{c(){t=p("img"),this.h()},l(n){t=g(n,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){L(t.src,a=i[0])||d(t,"src",a),d(t,"alt",i[1]),d(t,"loading","lazy")},m(n,r){f(n,t,r)},p(n,[r]){r&1&&!L(t.src,a=n[0])&&d(t,"src",a),r&2&&d(t,"alt",n[1])},i:$,o:$,d(n){n&&u(t)}}}function Q(i,t,a){let{src:n}=t,{alt:r}=t;return i.$$set=e=>{"src"in e&&a(0,n=e.src),"alt"in e&&a(1,r=e.alt)},[n,r]}class R extends z{constructor(t){super(),E(this,t,Q,K,q,{src:0,alt:1})}}function V(i){let t,a,n,r;return{c(){t=p("button"),a=F(i[0])},l(e){t=g(e,"BUTTON",{});var l=G(t);a=J(l,i[0]),l.forEach(u)},m(e,l){f(e,t,l),N(t,a),n||(r=O(t,"click",i[1]),n=!0)},p(e,[l]){l&1&&U(a,e[0])},i:$,o:$,d(e){e&&u(t),n=!1,r()}}}function X(i,t,a){let n=0;return[n,()=>a(0,n+=1)]}class Y extends z{constructor(t){super(),E(this,t,X,V,q,{})}}function Z(i){let t,a="Svelte",n,r,e="Media inside the <strong>static</strong> folder is served from <code>/</code>.",l,o,v,m,I="Counter",h,_,x;return o=new R({props:{src:"favicon.png",alt:"Svelte"}}),_=new Y({}),{c(){t=p("h2"),t.textContent=a,n=C(),r=p("p"),r.innerHTML=e,l=C(),S(o.$$.fragment),v=C(),m=p("h2"),m.textContent=I,h=C(),S(_.$$.fragment),this.h()},l(s){t=g(s,"H2",{id:!0,"data-svelte-h":!0}),w(t)!=="svelte-em4gby"&&(t.textContent=a),n=b(s),r=g(s,"P",{"data-svelte-h":!0}),w(r)!=="svelte-zwt2wz"&&(r.innerHTML=e),l=b(s),k(o.$$.fragment,s),v=b(s),m=g(s,"H2",{id:!0,"data-svelte-h":!0}),w(m)!=="svelte-7fd3by"&&(m.textContent=I),h=b(s),k(_.$$.fragment,s),this.h()},h(){d(t,"id","svelte"),d(m,"id","counter")},m(s,c){f(s,t,c),f(s,n,c),f(s,r,c),f(s,l,c),y(o,s,c),f(s,v,c),f(s,m,c),f(s,h,c),y(_,s,c),x=!0},p:$,i(s){x||(H(o.$$.fragment,s),H(_.$$.fragment,s),x=!0)},o(s){T(o.$$.fragment,s),T(_.$$.fragment,s),x=!1},d(s){s&&(u(t),u(n),u(r),u(l),u(v),u(m),u(h)),j(o,s),j(_,s)}}}function tt(i){let t,a;const n=[i[0],B];let r={$$slots:{default:[Z]},$$scope:{ctx:i}};for(let e=0;e<n.length;e+=1)r=M(r,n[e]);return t=new D({props:r}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,l){y(t,e,l),a=!0},p(e,[l]){const o=l&1?W(n,[l&1&&A(e[0]),l&0&&A(B)]):{};l&2&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){a||(H(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}const B={title:"Second Markdown Page",description:"Second post on Johannes Amée Web. Example image with markdown format + some formatting.",date:"2024-6-24",categories:["sveltekit","svelte"],published:!0};function et(i,t,a){return i.$$set=n=>{a(0,t=M(M({},t),P(n)))},t=P(t),[t]}class lt extends z{constructor(t){super(),E(this,t,et,tt,q,{})}}export{lt as default,B as metadata};