import{S as e,i as s,s as t,e as a,J as o,k as n,t as l,c as r,a as c,K as i,n as u,g as h,d as m,L as p,P as g,b as f,f as d,H as $,Q as v,h as x,I as y,j as b,m as q,o as w,x as j,u as C,v as E,O as k,R as B,T as I,l as L,U as T,r as z,w as M,M as S,V as N,W as O,N as P,X as R,Y as U}from"../chunks/vendor-301d62d9.js";import{L as V}from"../chunks/Layout-e562eeb2.js";import{S as X}from"../chunks/SearchBar-463f7168.js";function Y(e){let s,t,b,q,w,j,C=(e[0].length>14?`${e[0].substring(0,12)}...`:e[0])+"";return{c(){s=a("li"),t=new o,b=n(),q=l(C),this.h()},l(e){s=r(e,"LI",{style:!0,class:!0});var a=c(s);t=i(a),b=u(a),q=h(a,C),a.forEach(m),this.h()},h(){t.a=b,p(s,"--color","#"+(g(`#${e[2]}`).getBrightness()>50?e[2]:"fff")),f(s,"class","svelte-vinuey")},m(a,o){d(a,s,o),t.m(e[1],s),$(s,b),$(s,q),w||(j=v(s,"click",e[3]),w=!0)},p(e,[a]){2&a&&t.p(e[1]),1&a&&C!==(C=(e[0].length>14?`${e[0].substring(0,12)}...`:e[0])+"")&&x(q,C),4&a&&p(s,"--color","#"+(g(`#${e[2]}`).getBrightness()>50?e[2]:"fff"))},i:y,o:y,d(e){e&&m(s),w=!1,j()}}}function A(e,s,t){let{slug:a,svg:o,hex:n,toast:l=!1}=s;return e.$$set=e=>{"slug"in e&&t(0,a=e.slug),"svg"in e&&t(1,o=e.svg),"hex"in e&&t(2,n=e.hex),"toast"in e&&t(4,l=e.toast)},[a,o,n,e=>{(e=>{const s=e.currentTarget,t=s.getBoundingClientRect(),a=document.createElement("span"),o=Math.max(t.width,t.height),n=o/2;a.style.width=a.style.height=`${o}px`,a.style.left=e.clientX-(t.left+n)+"px",a.style.top=e.clientY-(t.top+n)+"px",a.classList.add("ripple");const l=s.getElementsByClassName("ripple")[0];l&&l.remove(),s.appendChild(a)})(e),navigator.clipboard.writeText(`!icone ${a}`),t(4,l=!0),setTimeout((()=>t(4,l=!1)),5e3)},l]}class D extends e{constructor(e){super(),s(this,e,A,Y,t,{slug:0,svg:1,hex:2,toast:4})}}function G(e,s,t){const a=e.slice();return a[4]=s[t][0],a[5]=s[t][1],a}function H(e){let s,t,a;function o(s){e[3](s)}let n={slug:e[5].slug,svg:e[5].svg,hex:e[5].hex};return void 0!==e[1]&&(n.toast=e[1]),s=new D({props:n}),B.push((()=>I(s,"toast",o))),{c(){b(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,t){w(s,e,t),a=!0},p(e,a){const o={};!t&&2&a&&(t=!0,o.toast=e[1],T((()=>t=!1))),s.$set(o)},i(e){a||(j(s.$$.fragment,e),a=!0)},o(e){C(s.$$.fragment,e),a=!1},d(e){E(s,e)}}}function J(e){let s,t,a=`${e[5].slug} ${e[5].title}`.includes(e[0]),o=a&&H(e);return{c(){o&&o.c(),s=L()},l(e){o&&o.l(e),s=L()},m(e,a){o&&o.m(e,a),d(e,s,a),t=!0},p(e,t){1&t&&(a=`${e[5].slug} ${e[5].title}`.includes(e[0])),a?o?(o.p(e,t),1&t&&j(o,1)):(o=H(e),o.c(),j(o,1),o.m(s.parentNode,s)):o&&(z(),C(o,1,1,(()=>{o=null})),M())},i(e){t||(j(o),t=!0)},o(e){C(o),t=!1},d(e){o&&o.d(e),e&&m(s)}}}function K(e){let s,t,o,n,i,u;return{c(){s=a("div"),t=l("Comando copiado, agora é só colar no chat! "),o=a("img"),this.h()},l(e){s=r(e,"DIV",{class:!0});var a=c(s);t=h(a,"Comando copiado, agora é só colar no chat! "),o=r(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(m),this.h()},h(){S(o.src,n="/img/emote-hype.png")||f(o,"src","/img/emote-hype.png"),f(o,"alt",""),f(o,"class","svelte-1a2mzsi"),f(s,"class","toast svelte-1a2mzsi")},m(e,a){d(e,s,a),$(s,t),$(s,o),u=!0},p(e,s){},i(e){u||(N((()=>{i||(i=O(s,U,{duration:500,x:-16,opacity:0,easing:R},!0)),i.run(1)})),u=!0)},o(e){i||(i=O(s,U,{duration:500,x:-16,opacity:0,easing:R},!1)),i.run(0),u=!1},d(e){e&&m(s),e&&i&&i.end()}}}function Q(e){let s,t,o,i,p,g,v,x,y,S,N,O,R,U,V,Y=Object.entries(k).length+"";function A(s){e[2](s)}let D={placeholder:"Pesquise por ícones..."};void 0!==e[0]&&(D.query=e[0]),y=new X({props:D}),B.push((()=>I(y,"query",A)));let H=Object.entries(k),Q=[];for(let a=0;a<H.length;a+=1)Q[a]=J(G(e,H,a));const W=e=>C(Q[e],1,1,(()=>{Q[e]=null}));let _=e[1]&&K();return{c(){s=a("p"),t=l("Mostre o orgulho que você tem por sua equipe! Clique em um dos "),o=l(Y),i=l(" ícones abaixo para copiar um comando e colar no chat da Twitch para defini-lo como seu novo emblema. Ícones fornecidos por "),p=a("a"),g=l("Simple Icons"),v=l("."),x=n(),b(y.$$.fragment),N=n(),O=a("ul");for(let e=0;e<Q.length;e+=1)Q[e].c();R=n(),_&&_.c(),U=L(),this.h()},l(e){s=r(e,"P",{class:!0});var a=c(s);t=h(a,"Mostre o orgulho que você tem por sua equipe! Clique em um dos "),o=h(a,Y),i=h(a," ícones abaixo para copiar um comando e colar no chat da Twitch para defini-lo como seu novo emblema. Ícones fornecidos por "),p=r(a,"A",{href:!0,target:!0,class:!0});var n=c(p);g=h(n,"Simple Icons"),n.forEach(m),v=h(a,"."),a.forEach(m),x=u(e),q(y.$$.fragment,e),N=u(e),O=r(e,"UL",{class:!0});var l=c(O);for(let s=0;s<Q.length;s+=1)Q[s].l(l);l.forEach(m),R=u(e),_&&_.l(e),U=L(),this.h()},h(){f(p,"href","https://simpleicons.org"),f(p,"target","_blank"),f(p,"class","svelte-1a2mzsi"),f(s,"class","svelte-1a2mzsi"),f(O,"class","icons svelte-1a2mzsi")},m(e,a){d(e,s,a),$(s,t),$(s,o),$(s,i),$(s,p),$(p,g),$(s,v),d(e,x,a),w(y,e,a),d(e,N,a),d(e,O,a);for(let s=0;s<Q.length;s+=1)Q[s].m(O,null);d(e,R,a),_&&_.m(e,a),d(e,U,a),V=!0},p(e,s){const t={};if(!S&&1&s&&(S=!0,t.query=e[0],T((()=>S=!1))),y.$set(t),3&s){let t;for(H=Object.entries(k),t=0;t<H.length;t+=1){const a=G(e,H,t);Q[t]?(Q[t].p(a,s),j(Q[t],1)):(Q[t]=J(a),Q[t].c(),j(Q[t],1),Q[t].m(O,null))}for(z(),t=H.length;t<Q.length;t+=1)W(t);M()}e[1]?_?(_.p(e,s),2&s&&j(_,1)):(_=K(),_.c(),j(_,1),_.m(U.parentNode,U)):_&&(z(),C(_,1,1,(()=>{_=null})),M())},i(e){if(!V){j(y.$$.fragment,e);for(let e=0;e<H.length;e+=1)j(Q[e]);j(_),V=!0}},o(e){C(y.$$.fragment,e),Q=Q.filter(Boolean);for(let s=0;s<Q.length;s+=1)C(Q[s]);C(_),V=!1},d(e){e&&m(s),e&&m(x),E(y,e),e&&m(N),e&&m(O),P(Q,e),e&&m(R),_&&_.d(e),e&&m(U)}}}function W(e){let s,t;return s=new V({props:{$$slots:{default:[Q]},$$scope:{ctx:e}}}),{c(){b(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){w(s,e,a),t=!0},p(e,[t]){const a={};259&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){t||(j(s.$$.fragment,e),t=!0)},o(e){C(s.$$.fragment,e),t=!1},d(e){E(s,e)}}}function _(e,s,t){let a="",o=!1;return[a,o,function(e){a=e,t(0,a)},function(e){o=e,t(1,o)}]}class F extends e{constructor(e){super(),s(this,e,_,W,t,{})}}export{F as default};
