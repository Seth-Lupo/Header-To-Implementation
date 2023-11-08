import{s as S,n as C}from"../chunks/scheduler.03df403d.js";import{S as I,i as M,g as $,s as T,h as v,j as y,y as H,c as E,f,k as x,a as _,x as g,z as L,r as k,u as A,v as b,d as D,t as N,w as j}from"../chunks/index.65589ce2.js";import{w as B,d as F}from"../chunks/index.1c50704a.js";const P=B("");function O(p){let e,s,t='<h3 class="svelte-j141se">Paste Header File</h3>',l,o,c,r;return{c(){e=$("main"),s=$("div"),s.innerHTML=t,l=T(),o=$("textarea"),this.h()},l(i){e=v(i,"MAIN",{class:!0});var m=y(e);s=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-1jpuats"&&(s.innerHTML=t),l=E(m),o=v(m,"TEXTAREA",{}),y(o).forEach(f),m.forEach(f),this.h()},h(){x(s,"class","headerDiv svelte-j141se"),x(e,"class","ioBlock")},m(i,m){_(i,e,m),g(e,s),g(e,l),g(e,o),c||(r=L(o,"input",p[0]),c=!0)},p:C,i:C,o:C,d(i){i&&f(e),c=!1,r()}}}function R(p){function e(s){let l=s.target.value;l==null&&(l=""),P.set(l)}return[e]}class V extends I{constructor(e){super(),M(this,e,R,O,S,{})}}function X(){const p=new Date,e=p.getFullYear(),s=String(p.getMonth()+1),t=String(p.getDate());return`${s}/${t}/${e}`}function q(p){const s=/class\s+(\w+)\s+\{([^}]+)}/g.exec(p);if(!s)return"Please paste a valid class declaration to see output.";let t=s[1],l=s[2];l=l.replace("public:",""),l=l.replace("private:","");let o=l.split(/;/g);console.log(o),o=o.map(r=>r.trim()),o=o.filter(r=>r!=";"),console.log(o);let c="";c+=`/*
* ${t}.cpp
* John Doe
* CLASS ProjectName
* ${X()}
*
* The implementation of the ${t} class
*
*/
`,console.log(o);for(let r of o){let i=/([\:\w\*\&\~]+)\s+([\:\w\*\&\~]+|operator[^\(\)]{1,3})\s*(\([^\)]*\))\s*(const)?/g,m=/([\:\w\*\&\~]+)\s*(\([^\)]*\))/g,u=i.exec(r),h=m.exec(r);if(console.log(h,r),u&&r==u[0]){let n=u[1],a=u[2],d=u[3],w=u[4]!=null?" "+u[4]:"";c+=`
/*
* name: ${a}
* purpose: 
* arguments: 
* returns: 
* effects: 
*/
${n} ${t}::${a}${d} {

}${w};


`}if(h&&r==h[0]){let n=h[1],a=h[2];n==t&&(c+=`
/*
* name: constructor
* purpose: create a new instance of ${t} with
* arguments: 
* returns: nothing
* effects: 
*/
${t}::${n}${a} {

};


`),n=="~"+t&&(c+=`
/*
* name: destructor
* purpose: deletes this instance of the ${t} class
* arguments: none
* returns: nothing
* effects: frees alls memory allocated to this class
*/
${t}::${n}${a} {

};


`)}}return c}const z=F(P,q);function J(p){let e,s,t,l="Implementation Scaffold",o,c,r,i,m,u,h,n;return{c(){e=$("main"),s=$("div"),t=$("h3"),t.textContent=l,o=T(),c=$("button"),r=T(),i=$("textarea"),m=T(),u=$("p"),this.h()},l(a){e=v(a,"MAIN",{class:!0});var d=y(e);s=v(d,"DIV",{class:!0});var w=y(s);t=v(w,"H3",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-4k22si"&&(t.textContent=l),o=E(w),c=v(w,"BUTTON",{class:!0}),y(c).forEach(f),w.forEach(f),r=E(d),i=v(d,"TEXTAREA",{}),y(i).forEach(f),d.forEach(f),m=E(a),u=v(a,"P",{}),y(u).forEach(f),this.h()},h(){x(t,"class","svelte-1i9toyf"),x(c,"class","copyButton svelte-1i9toyf"),x(s,"class","headerDiv svelte-1i9toyf"),i.value=p[0],x(e,"class","ioBlock")},m(a,d){_(a,e,d),g(e,s),g(s,t),g(s,o),g(s,c),g(e,r),g(e,i),_(a,m,d),_(a,u,d),h||(n=L(c,"click",p[1]),h=!0)},p(a,[d]){d&1&&(i.value=a[0])},i:C,o:C,d(a){a&&(f(e),f(m),f(u)),h=!1,n()}}}function Q(p,e,s){let t;return z.subscribe(o=>{s(0,t=o)}),[t,()=>{navigator.clipboard.writeText(t)}]}class U extends I{constructor(e){super(),M(this,e,Q,J,S,{})}}function Y(p){let e,s="Header to Implementation Scaffold",t,l,o="<i>Quickly turn your class declaration into a .cpp template!</i>",c,r,i,m,u,h;return i=new V({}),u=new U({}),{c(){e=$("h1"),e.textContent=s,t=T(),l=$("h3"),l.innerHTML=o,c=T(),r=$("main"),k(i.$$.fragment),m=T(),k(u.$$.fragment),this.h()},l(n){e=v(n,"H1",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-na6n5o"&&(e.textContent=s),t=E(n),l=v(n,"H3",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-1fgogmg"&&(l.innerHTML=o),c=E(n),r=v(n,"MAIN",{class:!0});var a=y(r);A(i.$$.fragment,a),m=E(a),A(u.$$.fragment,a),a.forEach(f),this.h()},h(){x(e,"class","svelte-15de7hk"),x(l,"class","svelte-15de7hk"),x(r,"class","svelte-15de7hk")},m(n,a){_(n,e,a),_(n,t,a),_(n,l,a),_(n,c,a),_(n,r,a),b(i,r,null),g(r,m),b(u,r,null),h=!0},p:C,i(n){h||(D(i.$$.fragment,n),D(u.$$.fragment,n),h=!0)},o(n){N(i.$$.fragment,n),N(u.$$.fragment,n),h=!1},d(n){n&&(f(e),f(t),f(l),f(c),f(r)),j(i),j(u)}}}class Z extends I{constructor(e){super(),M(this,e,null,Y,S,{})}}export{Z as component};
