import{s as $,n as f,d as q}from"../chunks/scheduler.CVTL0etF.js";import{S as x,i as S,e as v,p as h,c as g,q as b,r as d,d as u,o as y,b as C,u as p,v as E}from"../chunks/index.cpxQQXN5.js";import{p as D}from"../chunks/stores.BqDdS1kG.js";function H(i){var _;let e,t,s=i[0].status+"",n,m,l=((_=i[0].error)==null?void 0:_.message)+"",c;return{c(){e=v("div"),t=v("h1"),n=h(s),m=h(": "),c=h(l),this.h()},l(a){e=g(a,"DIV",{class:!0});var r=b(e);t=g(r,"H1",{});var o=b(t);n=d(o,s),m=d(o,": "),c=d(o,l),o.forEach(u),r.forEach(u),this.h()},h(){y(e,"class","error svelte-2l8l59")},m(a,r){C(a,e,r),p(e,t),p(t,n),p(t,m),p(t,c)},p(a,[r]){var o;r&1&&s!==(s=a[0].status+"")&&E(n,s),r&1&&l!==(l=((o=a[0].error)==null?void 0:o.message)+"")&&E(c,l)},i:f,o:f,d(a){a&&u(e)}}}function I(i,e,t){let s;return q(i,D,n=>t(0,s=n)),[s]}class w extends x{constructor(e){super(),S(this,e,I,H,$,{})}}export{w as component};
