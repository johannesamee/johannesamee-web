import{C as qe,s as T,n as K,m as Ue,D as Se,a as S,e as L,c as H,u as W,g as Y,b as Q,d as Re,l as _e,E as Ce}from"../chunks/scheduler.HexUyfy1.js";import{p as me}from"../chunks/stores.BPRxXCYA.js";import{S as j,i as D,e as g,p as le,c as v,q as w,r as oe,d as _,o as p,b as V,u as f,f as y,h as E,m as N,t as $,j as h,k as I,E as Oe,y as Pe,w as Me,s as R,a as P,g as Z,G as $e,l as ye}from"../chunks/index.CAYvhHec.js";import{t as Te,I as x}from"../chunks/Icon.COf1E0w8.js";import{w as Be}from"../chunks/entry.Bw2VjtTJ.js";import{g as ee,a as te}from"../chunks/spread.CgU5AtxT.js";var Fe="@vercel/speed-insights",He="1.0.12",We=()=>{window.si||(window.si=function(...e){(window.siq=window.siq||[]).push(e)})};function Ye(){return typeof window<"u"}function Qe(){try{const a="production"}catch{}return"production"}function Ee(){return Qe()==="development"}var Ae="https://va.vercel-scripts.com/v1/speed-insights",ze=`${Ae}/script.js`,Ge=`${Ae}/script.debug.js`,Xe="/_vercel/speed-insights/script.js";function Ze(a={}){var e;if(!Ye()||a.route===null)return null;We();const s=!!a.dsn?ze:Xe,n=a.scriptSrc||(Ee()?Ge:s);if(document.head.querySelector(`script[src*="${n}"]`))return null;a.beforeSend&&((e=window.si)==null||e.call(window,"beforeSend",a.beforeSend));const t=document.createElement("script");return t.src=n,t.defer=!0,t.dataset.sdkn=Fe+(a.framework?`/${a.framework}`:""),t.dataset.sdkv=He,a.sampleRate&&(t.dataset.sampleRate=a.sampleRate.toString()),a.route&&(t.dataset.route=a.route),a.endpoint&&(t.dataset.endpoint=a.endpoint),a.dsn&&(t.dataset.dsn=a.dsn),Ee()&&a.debug===!1&&(t.dataset.debug="false"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:l=>{t.dataset.route=l??void 0}}}function Je(a={}){var e;{const r=Ze({route:(e=qe(me).route)==null?void 0:e.id,...a,framework:"sveltekit"});r&&me.subscribe(s=>{var n;(n=s.route)!=null&&n.id&&r.setRoute(s.route.id)})}}var Ke="@vercel/analytics",xe="1.3.1",et=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function Le(){return typeof window<"u"}function je(){try{const a="production"}catch{}return"production"}function tt(a="auto"){if(a==="auto"){window.vam=je();return}window.vam=a}function nt(){return(Le()?window.vam:je())||"production"}function de(){return nt()==="development"}var st="https://va.vercel-scripts.com/v1/script.debug.js",rt="/_vercel/insights/script.js";function at(a={debug:!0}){var e;if(!Le())return;tt(a.mode),et(),a.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",a.beforeSend));const r=a.scriptSrc||(de()?st:rt);if(document.head.querySelector(`script[src*="${r}"]`))return;const s=document.createElement("script");s.src=r,s.defer=!0,s.dataset.sdkn=Ke+(a.framework?`/${a.framework}`:""),s.dataset.sdkv=xe,a.disableAutoTrack&&(s.dataset.disableAutoTrack="1"),a.endpoint&&(s.dataset.endpoint=a.endpoint),a.dsn&&(s.dataset.dsn=a.dsn),s.onerror=()=>{const n=de()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${n}`)},de()&&a.debug===!1&&(s.dataset.debug="false"),document.head.appendChild(s)}at({mode:"production"});Je();const lt=!0;async function ot({url:a}){return{url:a.pathname}}const xt=Object.freeze(Object.defineProperty({__proto__:null,load:ot,prerender:lt},Symbol.toStringTag,{value:"Module"}));function it(a){let e,r,s=Te+"",n,t,l=new Date().getFullYear()+"",o;return{c(){e=g("footer"),r=g("p"),n=le(s),t=le(" © "),o=le(l),this.h()},l(i){e=v(i,"FOOTER",{class:!0});var c=w(e);r=v(c,"P",{class:!0});var u=w(r);n=oe(u,s),t=oe(u," © "),o=oe(u,l),u.forEach(_),c.forEach(_),this.h()},h(){p(r,"class","svelte-k2ae0s"),p(e,"class","svelte-k2ae0s")},m(i,c){V(i,e,c),f(e,r),f(r,n),f(r,t),f(r,o)},p:K,i:K,o:K,d(i){i&&_(e)}}}class ct extends j{constructor(e){super(),D(this,e,null,it,T,{})}}function ut(a){const e=a-1;return e*e*e+1}function ft(a,{delay:e=0,duration:r=400,easing:s=Ue}={}){const n=+getComputedStyle(a).opacity;return{delay:e,duration:r,easing:s,css:t=>`opacity: ${t*n}`}}function De(a,{delay:e=0,duration:r=400,easing:s=ut,x:n=0,y:t=0,opacity:l=0}={}){const o=getComputedStyle(a),i=+o.opacity,c=o.transform==="none"?"":o.transform,u=i*(1-l),[m,d]=Se(n),[b,C]=Se(t);return{delay:e,duration:r,easing:s,css:(q,M)=>`
			transform: ${c} translate(${(1-q)*m}${d}, ${(1-q)*b}${C});
			opacity: ${i-u*M}`}}function dt(a){let e;const r=a[2].default,s=H(r,a,a[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,t){s&&s.m(n,t),e=!0},p(n,t){s&&s.p&&(!e||t&8)&&W(s,r,n,n[3],e?Q(r,n[3],t,null):Y(n[3]),null)},i(n){e||($(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){s&&s.d(n)}}}function mt(a){let e,r;const s=[{name:"circle-user"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[dt]},$$scope:{ctx:a}};for(let t=0;t<s.length;t+=1)n=S(n,s[t]);return e=new x({props:n}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const o=l&3?ee(s,[s[0],l&2&&te(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||($(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function _t(a,e,r){let{$$slots:s={},$$scope:n}=e;const t=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];return a.$$set=l=>{r(1,e=S(S({},e),L(l))),"$$scope"in l&&r(3,n=l.$$scope)},e=L(e),[t,e,s,n]}class $t extends j{constructor(e){super(),D(this,e,_t,mt,T,{})}}function ht(a){let e;const r=a[2].default,s=H(r,a,a[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,t){s&&s.m(n,t),e=!0},p(n,t){s&&s.p&&(!e||t&8)&&W(s,r,n,n[3],e?Q(r,n[3],t,null):Y(n[3]),null)},i(n){e||($(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){s&&s.d(n)}}}function gt(a){let e,r;const s=[{name:"info"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[ht]},$$scope:{ctx:a}};for(let t=0;t<s.length;t+=1)n=S(n,s[t]);return e=new x({props:n}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const o=l&3?ee(s,[s[0],l&2&&te(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||($(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function vt(a,e,r){let{$$slots:s={},$$scope:n}=e;const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];return a.$$set=l=>{r(1,e=S(S({},e),L(l))),"$$scope"in l&&r(3,n=l.$$scope)},e=L(e),[t,e,s,n]}class pt extends j{constructor(e){super(),D(this,e,vt,gt,T,{})}}function bt(a){let e;const r=a[2].default,s=H(r,a,a[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,t){s&&s.m(n,t),e=!0},p(n,t){s&&s.p&&(!e||t&8)&&W(s,r,n,n[3],e?Q(r,n[3],t,null):Y(n[3]),null)},i(n){e||($(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){s&&s.d(n)}}}function wt(a){let e,r;const s=[{name:"moon"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[bt]},$$scope:{ctx:a}};for(let t=0;t<s.length;t+=1)n=S(n,s[t]);return e=new x({props:n}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const o=l&3?ee(s,[s[0],l&2&&te(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||($(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function kt(a,e,r){let{$$slots:s={},$$scope:n}=e;const t=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return a.$$set=l=>{r(1,e=S(S({},e),L(l))),"$$scope"in l&&r(3,n=l.$$scope)},e=L(e),[t,e,s,n]}class St extends j{constructor(e){super(),D(this,e,kt,wt,T,{})}}function Ct(a){let e;const r=a[2].default,s=H(r,a,a[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,t){s&&s.m(n,t),e=!0},p(n,t){s&&s.p&&(!e||t&8)&&W(s,r,n,n[3],e?Q(r,n[3],t,null):Y(n[3]),null)},i(n){e||($(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){s&&s.d(n)}}}function yt(a){let e,r;const s=[{name:"rss"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[Ct]},$$scope:{ctx:a}};for(let t=0;t<s.length;t+=1)n=S(n,s[t]);return e=new x({props:n}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const o=l&3?ee(s,[s[0],l&2&&te(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||($(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function Et(a,e,r){let{$$slots:s={},$$scope:n}=e;const t=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];return a.$$set=l=>{r(1,e=S(S({},e),L(l))),"$$scope"in l&&r(3,n=l.$$scope)},e=L(e),[t,e,s,n]}class Nt extends j{constructor(e){super(),D(this,e,Et,yt,T,{})}}function It(a){let e;const r=a[2].default,s=H(r,a,a[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,t){s&&s.m(n,t),e=!0},p(n,t){s&&s.p&&(!e||t&8)&&W(s,r,n,n[3],e?Q(r,n[3],t,null):Y(n[3]),null)},i(n){e||($(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){s&&s.d(n)}}}function Rt(a){let e,r;const s=[{name:"sun"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[It]},$$scope:{ctx:a}};for(let t=0;t<s.length;t+=1)n=S(n,s[t]);return e=new x({props:n}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,[l]){const o=l&3?ee(s,[s[0],l&2&&te(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||($(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function Pt(a,e,r){let{$$slots:s={},$$scope:n}=e;const t=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return a.$$set=l=>{r(1,e=S(S({},e),L(l))),"$$scope"in l&&r(3,n=l.$$scope)},e=L(e),[t,e,s,n]}class Mt extends j{constructor(e){super(),D(this,e,Pt,Rt,T,{})}}const Tt=localStorage.getItem("color-scheme"),Ve=Be(Tt??"dark");function At(){Ve.update(a=>{const e=a==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function Lt(a){let e,r,s,n,t="Dark",l,o;return r=new St({}),{c(){e=g("div"),y(r.$$.fragment),s=R(),n=g("span"),n.textContent=t,this.h()},l(i){e=v(i,"DIV",{class:!0});var c=w(e);E(r.$$.fragment,c),s=P(c),n=v(c,"SPAN",{"data-svelte-h":!0}),Z(n)!=="svelte-397x2m"&&(n.textContent=t),c.forEach(_),this.h()},h(){p(e,"class","svelte-114mtci")},m(i,c){V(i,e,c),N(r,e,null),f(e,s),f(e,n),o=!0},i(i){o||($(r.$$.fragment,i),i&&(l||_e(()=>{l=$e(e,De,{y:-10}),l.start()})),o=!0)},o(i){h(r.$$.fragment,i),o=!1},d(i){i&&_(e),I(r)}}}function jt(a){let e,r,s,n,t="Light",l,o;return r=new Mt({}),{c(){e=g("div"),y(r.$$.fragment),s=R(),n=g("span"),n.textContent=t,this.h()},l(i){e=v(i,"DIV",{class:!0});var c=w(e);E(r.$$.fragment,c),s=P(c),n=v(c,"SPAN",{"data-svelte-h":!0}),Z(n)!=="svelte-30gjga"&&(n.textContent=t),c.forEach(_),this.h()},h(){p(e,"class","svelte-114mtci")},m(i,c){V(i,e,c),N(r,e,null),f(e,s),f(e,n),o=!0},i(i){o||($(r.$$.fragment,i),i&&(l||_e(()=>{l=$e(e,De,{y:10}),l.start()})),o=!0)},o(i){h(r.$$.fragment,i),o=!1},d(i){i&&_(e),I(r)}}}function Dt(a){let e,r,s,n,t,l;const o=[jt,Lt],i=[];function c(u,m){return u[0]==="dark"?0:1}return r=c(a),s=i[r]=o[r](a),{c(){e=g("button"),s.c(),this.h()},l(u){e=v(u,"BUTTON",{"aria-label":!0,class:!0});var m=w(e);s.l(m),m.forEach(_),this.h()},h(){p(e,"aria-label","Toggle theme"),p(e,"class","svelte-114mtci")},m(u,m){V(u,e,m),i[r].m(e,null),n=!0,t||(l=Oe(e,"click",At),t=!0)},p(u,[m]){let d=r;r=c(u),r!==d&&(Pe(),h(i[d],1,1,()=>{i[d]=null}),Me(),s=i[r],s||(s=i[r]=o[r](u),s.c()),$(s,1),s.m(e,null))},i(u){n||($(s),n=!0)},o(u){h(s),n=!1},d(u){u&&_(e),i[r].d(),t=!1,l()}}}function Vt(a,e,r){let s;return Re(a,Ve,n=>r(0,s=n)),[s]}class qt extends j{constructor(e){super(),D(this,e,Vt,Dt,T,{})}}function Ut(a){let e,r,s,n=Te+"",t,l,o,i,c,u,m,d,b="About",C,q,M,O,ie,z,he="Contact",ce,J,A,B,ue,G,ge="RSS",fe,F,ne;return u=new pt({}),O=new $t({}),B=new Nt({}),F=new qt({}),{c(){e=g("nav"),r=g("a"),s=g("b"),t=le(n),l=R(),o=g("ul"),i=g("li"),c=g("a"),y(u.$$.fragment),m=R(),d=g("span"),d.textContent=b,C=R(),q=g("li"),M=g("a"),y(O.$$.fragment),ie=R(),z=g("span"),z.textContent=he,ce=R(),J=g("li"),A=g("a"),y(B.$$.fragment),ue=R(),G=g("span"),G.textContent=ge,fe=R(),y(F.$$.fragment),this.h()},l(k){e=v(k,"NAV",{class:!0});var U=w(e);r=v(U,"A",{href:!0,class:!0});var ve=w(r);s=v(ve,"B",{});var pe=w(s);t=oe(pe,n),pe.forEach(_),ve.forEach(_),l=P(U),o=v(U,"UL",{class:!0});var X=w(o);i=v(X,"LI",{});var be=w(i);c=v(be,"A",{href:!0,class:!0});var se=w(c);E(u.$$.fragment,se),m=P(se),d=v(se,"SPAN",{"data-svelte-h":!0}),Z(d)!=="svelte-1poeibp"&&(d.textContent=b),se.forEach(_),be.forEach(_),C=P(X),q=v(X,"LI",{});var we=w(q);M=v(we,"A",{href:!0,class:!0});var re=w(M);E(O.$$.fragment,re),ie=P(re),z=v(re,"SPAN",{"data-svelte-h":!0}),Z(z)!=="svelte-1mqhoa6"&&(z.textContent=he),re.forEach(_),we.forEach(_),ce=P(X),J=v(X,"LI",{});var ke=w(J);A=v(ke,"A",{href:!0,target:!0,class:!0});var ae=w(A);E(B.$$.fragment,ae),ue=P(ae),G=v(ae,"SPAN",{"data-svelte-h":!0}),Z(G)!=="svelte-1u97bkq"&&(G.textContent=ge),ae.forEach(_),ke.forEach(_),X.forEach(_),fe=P(U),E(F.$$.fragment,U),U.forEach(_),this.h()},h(){p(r,"href","/"),p(r,"class","title svelte-1ihufdv"),p(c,"href","/about"),p(c,"class","svelte-1ihufdv"),p(M,"href","/contact"),p(M,"class","svelte-1ihufdv"),p(A,"href","/rss.xml"),p(A,"target","_blank"),p(A,"class","svelte-1ihufdv"),p(o,"class","links svelte-1ihufdv"),p(e,"class","svelte-1ihufdv")},m(k,U){V(k,e,U),f(e,r),f(r,s),f(s,t),f(e,l),f(e,o),f(o,i),f(i,c),N(u,c,null),f(c,m),f(c,d),f(o,C),f(o,q),f(q,M),N(O,M,null),f(M,ie),f(M,z),f(o,ce),f(o,J),f(J,A),N(B,A,null),f(A,ue),f(A,G),f(e,fe),N(F,e,null),ne=!0},p:K,i(k){ne||($(u.$$.fragment,k),$(O.$$.fragment,k),$(B.$$.fragment,k),$(F.$$.fragment,k),ne=!0)},o(k){h(u.$$.fragment,k),h(O.$$.fragment,k),h(B.$$.fragment,k),h(F.$$.fragment,k),ne=!1},d(k){k&&_(e),I(u),I(O),I(B),I(F)}}}class Ot extends j{constructor(e){super(),D(this,e,null,Ut,T,{})}}function Ne(a){let e,r,s;const n=a[2].default,t=H(n,a,a[1],null);return{c(){e=g("div"),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var o=w(e);t&&t.l(o),o.forEach(_),this.h()},h(){p(e,"class","transition svelte-vcdv4c")},m(l,o){V(l,e,o),t&&t.m(e,null),s=!0},p(l,o){t&&t.p&&(!s||o&2)&&W(t,n,l,l[1],s?Q(n,l[1],o,null):Y(l[1]),null)},i(l){s||($(t,l),l&&(r||_e(()=>{r=$e(e,ft,{}),r.start()})),s=!0)},o(l){h(t,l),s=!1},d(l){l&&_(e),t&&t.d(l)}}}function Bt(a){let e=a[0],r,s,n=Ne(a);return{c(){n.c(),r=ye()},l(t){n.l(t),r=ye()},m(t,l){n.m(t,l),V(t,r,l),s=!0},p(t,[l]){l&1&&T(e,e=t[0])?(Pe(),h(n,1,1,K),Me(),n=Ne(t),n.c(),$(n,1),n.m(r.parentNode,r)):n.p(t,l)},i(t){s||($(n),s=!0)},o(t){h(n),s=!1},d(t){t&&_(r),n.d(t)}}}function Ft(a,e,r){let{$$slots:s={},$$scope:n}=e,{url:t}=e;return a.$$set=l=>{"url"in l&&r(0,t=l.url),"$$scope"in l&&r(1,n=l.$$scope)},[t,n,s]}class Ht extends j{constructor(e){super(),D(this,e,Ft,Bt,T,{url:0})}}function Wt(a){let e;const r=a[3].default,s=H(r,a,a[4],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,t){s&&s.m(n,t),e=!0},p(n,t){s&&s.p&&(!e||t&16)&&W(s,r,n,n[4],e?Q(r,n[4],t,null):Y(n[4]),null)},i(n){e||($(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){s&&s.d(n)}}}function Ie(a){let e,r='<h5 class="svelte-7nw179">Collected webs</h5> <section><a href="https://www.wakingup.com/" target="_blank">Waking Up</a><br/> <small>A New Operating System for Your Mind</small></section> <section><a href="https://fortelabs.com/" target="_blank">Forte Labs</a><br/> <small>What&#39;s Your Productivity Potential?</small></section>';return{c(){e=g("div"),e.innerHTML=r,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-18q4g7b"&&(e.innerHTML=r),this.h()},h(){p(e,"class","card svelte-7nw179")},m(s,n){V(s,e,n)},d(s){s&&_(e)}}}function Yt(a){let e,r,s,n,t,l,o,i,c,u;r=new Ot({}),t=new Ht({props:{url:a[0].url,$$slots:{default:[Wt]},$$scope:{ctx:a}}});let m=a[1]&&Ie();return c=new ct({}),{c(){e=g("div"),y(r.$$.fragment),s=R(),n=g("main"),y(t.$$.fragment),l=R(),m&&m.c(),i=R(),y(c.$$.fragment),this.h()},l(d){e=v(d,"DIV",{class:!0});var b=w(e);E(r.$$.fragment,b),s=P(b),n=v(b,"MAIN",{class:!0});var C=w(n);E(t.$$.fragment,C),l=P(C),m&&m.l(C),C.forEach(_),i=P(b),E(c.$$.fragment,b),b.forEach(_),this.h()},h(){p(n,"class",o=Ce(a[1]?"main-grid":"page-grid")+" svelte-7nw179"),p(e,"class","layout svelte-7nw179")},m(d,b){V(d,e,b),N(r,e,null),f(e,s),f(e,n),N(t,n,null),f(n,l),m&&m.m(n,null),f(e,i),N(c,e,null),u=!0},p(d,[b]){const C={};b&1&&(C.url=d[0].url),b&16&&(C.$$scope={dirty:b,ctx:d}),t.$set(C),d[1]?m||(m=Ie(),m.c(),m.m(n,null)):m&&(m.d(1),m=null),(!u||b&2&&o!==(o=Ce(d[1]?"main-grid":"page-grid")+" svelte-7nw179"))&&p(n,"class",o)},i(d){u||($(r.$$.fragment,d),$(t.$$.fragment,d),$(c.$$.fragment,d),u=!0)},o(d){h(r.$$.fragment,d),h(t.$$.fragment,d),h(c.$$.fragment,d),u=!1},d(d){d&&_(e),I(r),I(t),m&&m.d(),I(c)}}}function Qt(a,e,r){let s,n;Re(a,me,i=>r(2,n=i));let{$$slots:t={},$$scope:l}=e,{data:o}=e;return a.$$set=i=>{"data"in i&&r(0,o=i.data),"$$scope"in i&&r(4,l=i.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(1,s=n.url.pathname==="/")},[o,s,n,t,l]}class en extends j{constructor(e){super(),D(this,e,Qt,Yt,T,{data:0})}}export{en as component,xt as universal};