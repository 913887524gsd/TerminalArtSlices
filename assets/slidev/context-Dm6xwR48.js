import{az as n,as as r,t as m,Y as u,aA as v}from"../modules/vue-CfP6fvKf.js";import{g as j,a6 as l,i as $,z as p,w as x,x as C,v as R,a7 as S,a8 as T}from"../index-CTotweke.js";function g(){const t=n($),s=r(t,"nav"),a=n(p).value,e=r(a,"current"),i=n(x),c=n(C),o=n(l,{}),d=n(R,void 0),f=n(j,m(1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:f}}function F(t){var i,c;u(l,t);const{$slidev:s,$page:a}=g(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function A(t,s){return{...v(t,s===0?S:T),frontmatter:t}}export{A as f,F as p,g as u};
