function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-C56tIDNX.js","assets/modules/vue-CfP6fvKf.js","assets/index-D6fnevxT.js","assets/modules/shiki-CJa7bTEM.js","assets/modules/shiki-BSchMNmt.css","assets/index-B1yXVoCl.css","assets/slidev/bottom-Cm77YUGA.js","assets/bottom-DbIWt59F.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as r,M as E,Y as D,J as F,o as l,b as c,l as d,A as e,i as L,c as m,g as C,h as q,F as p,Z as A,e as B,f as U,C as V}from"../modules/vue-CfP6fvKf.js";import{G as j,g as z,S as G,a as M,w as W}from"./bottom-Cm77YUGA.js";import{s as I,a as g,_ as O,c as k,i as T,b as f,u as S,d as x,C as H,e as $,f as h,p as J,g as K}from"../index-D6fnevxT.js";import{P as X}from"./PrintStyle-B8BJ-x-H.js";import"../modules/shiki-CJa7bTEM.js";const Y=["id"],Z=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(o){const{nav:t}=o,s=r(()=>t.currentSlideRoute.value),i=r(()=>({height:`${I.value}px`,width:`${g.value}px`})),n=E();O(()=>import("./DrawingPreview-C56tIDNX.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(a=>n.value=a.default);const u=r(()=>`${s.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return D(T,F({nav:t,configs:k,themeConfigs:r(()=>k.themeConfig)})),(a,y)=>(l(),c("div",{id:u.value,class:"print-slide-container",style:q(i.value)},[d(e(j)),d(G,{is:s.value.component,"clicks-context":a.nav.clicksContext.value,class:L(e(z)(s.value)),route:s.value},null,8,["is","clicks-context","class","route"]),n.value?(l(),m(e(n),{key:0,page:s.value.no},null,8,["page"])):C("v-if",!0),d(e(M))],12,Y))}}),N=f(Z,[["__file","C:/Users/91388/Desktop/terminal/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Q=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(o){const{route:t}=o,{isPrintWithClicks:s}=S(),i=x(t,s.value?0:H);return(n,u)=>(l(),c(p,null,[d(N,{"clicks-context":e(i),nav:e($)(n.route,e(i))},null,8,["clicks-context","nav"]),e(s)?(l(!0),c(p,{key:0},A(e(i).total,a=>(l(),m(N,{key:a,nav:e($)(n.route,e(x)(n.route,a))},null,8,["nav"]))),128)):C("v-if",!0)],64))}}),ee=f(Q,[["__file","C:/Users/91388/Desktop/terminal/node_modules/@slidev/client/internals/PrintSlide.vue"]]),te={id:"print-content"},se=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(o){const t=o,{slides:s,currentRoute:i}=S(),n=r(()=>t.width),u=r(()=>t.width/h.value),a=r(()=>n.value/u.value),y=r(()=>a.value<h.value?n.value/g.value:u.value*h.value/g.value);let v=s.value;i.value.query.range&&(v=J(v.length,i.value.query.range).map(P=>v[P-1]));const R=r(()=>({"select-none":!k.selectable}));return D(K,y),(w,P)=>(l(),c("div",{id:"print-container",class:L(R.value)},[B("div",te,[(l(!0),c(p,null,A(e(v),b=>(l(),m(ee,{key:b.no,route:b},null,8,["route"]))),128))]),U(w.$slots,"controls")],2))}}),ne=f(se,[["__file","C:/Users/91388/Desktop/terminal/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},le=_({__name:"print",setup(o){const{isPrintMode:t}=S();return V(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,i)=>(l(),c(p,null,[e(t)?(l(),m(X,{key:0})):C("v-if",!0),B("div",ae,[d(ne,{class:"w-full h-full",style:q({background:"var(--slidev-slide-container-background, black)"}),width:e(W).width.value},null,8,["style","width"])])],64))}}),de=f(le,[["__file","C:/Users/91388/Desktop/terminal/node_modules/@slidev/client/pages/print.vue"]]);export{de as default};
