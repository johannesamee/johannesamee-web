import{s as B,c as P,a as g,u as w,g as F,b as G,i as S,e as z}from"./scheduler.HexUyfy1.js";import{S as H,i as K,A as E,l as k,B as I,q as D,d as c,C as v,b as N,u as L,t as M,j as O,D as Q}from"./index.CAYvhHec.js";import{e as A}from"./each.D6YF6ztN.js";import{g as J}from"./spread.CgU5AtxT.js";const y="Johannes Amée";/**
 * @license lucide-svelte v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},C=R;function j(n,e,i){const s=n.slice();return s[10]=e[i][0],s[11]=e[i][1],s}function b(n){let e,i=[n[11]],s={};for(let l=0;l<i.length;l+=1)s=g(s,i[l]);return{c(){e=E(n[10]),this.h()},l(l){e=I(l,n[10],{}),D(e).forEach(c),this.h()},h(){v(e,s)},m(l,a){N(l,e,a)},p(l,a){v(e,s=J(i,[a&32&&l[11]]))},d(l){l&&c(e)}}}function q(n){let e=n[10],i,s=n[10]&&b(n);return{c(){s&&s.c(),i=k()},l(l){s&&s.l(l),i=k()},m(l,a){s&&s.m(l,a),N(l,i,a)},p(l,a){l[10]?e?B(e,l[10])?(s.d(1),s=b(l),e=l[10],s.c(),s.m(i.parentNode,i)):s.p(l,a):(s=b(l),e=l[10],s.c(),s.m(i.parentNode,i)):e&&(s.d(1),s=null,e=l[10])},d(l){l&&c(i),s&&s.d(l)}}}function T(n){let e,i,s,l,a,f=A(n[5]),u=[];for(let t=0;t<f.length;t+=1)u[t]=q(j(n,f,t));const d=n[9].default,h=P(d,n,n[8],null);let m=[C,n[6],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":s=n[4]?Number(n[3])*24/Number(n[2]):n[3]},{class:l=`lucide-icon lucide lucide-${n[0]} ${n[7].class??""}`}],_={};for(let t=0;t<m.length;t+=1)_=g(_,m[t]);return{c(){e=E("svg");for(let t=0;t<u.length;t+=1)u[t].c();i=k(),h&&h.c(),this.h()},l(t){e=I(t,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var o=D(e);for(let r=0;r<u.length;r+=1)u[r].l(o);i=k(),h&&h.l(o),o.forEach(c),this.h()},h(){v(e,_)},m(t,o){N(t,e,o);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(e,null);L(e,i),h&&h.m(e,null),a=!0},p(t,[o]){if(o&32){f=A(t[5]);let r;for(r=0;r<f.length;r+=1){const W=j(t,f,r);u[r]?u[r].p(W,o):(u[r]=q(W),u[r].c(),u[r].m(e,i))}for(;r<u.length;r+=1)u[r].d(1);u.length=f.length}h&&h.p&&(!a||o&256)&&w(h,d,t,t[8],a?G(d,t[8],o,null):F(t[8]),null),v(e,_=J(m,[C,o&64&&t[6],(!a||o&4)&&{width:t[2]},(!a||o&4)&&{height:t[2]},(!a||o&2)&&{stroke:t[1]},(!a||o&28&&s!==(s=t[4]?Number(t[3])*24/Number(t[2]):t[3]))&&{"stroke-width":s},(!a||o&129&&l!==(l=`lucide-icon lucide lucide-${t[0]} ${t[7].class??""}`))&&{class:l}]))},i(t){a||(M(h,t),a=!0)},o(t){O(h,t),a=!1},d(t){t&&c(e),Q(u,t),h&&h.d(t)}}}function U(n,e,i){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=S(e,s),{$$slots:a={},$$scope:f}=e,{name:u}=e,{color:d="currentColor"}=e,{size:h=24}=e,{strokeWidth:m=2}=e,{absoluteStrokeWidth:_=!1}=e,{iconNode:t}=e;return n.$$set=o=>{i(7,e=g(g({},e),z(o))),i(6,l=S(e,s)),"name"in o&&i(0,u=o.name),"color"in o&&i(1,d=o.color),"size"in o&&i(2,h=o.size),"strokeWidth"in o&&i(3,m=o.strokeWidth),"absoluteStrokeWidth"in o&&i(4,_=o.absoluteStrokeWidth),"iconNode"in o&&i(5,t=o.iconNode),"$$scope"in o&&i(8,f=o.$$scope)},e=z(e),[u,d,h,m,_,t,l,e,f,a]}class p extends H{constructor(e){super(),K(this,e,U,T,B,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}export{p as I,y as t};
