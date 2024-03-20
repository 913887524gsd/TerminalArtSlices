import{d as q,y as at,v as j,t as U,a3 as lt,D as ct,n as Z,Z as ft,av as pt,o as gt,b as yt,l as mt,A as P}from"./modules/vue-CfP6fvKf.js";import{g as dt}from"./modules/file-saver-EUMWMpoS.js";import{u as _t}from"./slidev/context-Dm6xwR48.js";import{u as bt,X as vt,Z as wt,b as St}from"./index-CTotweke.js";const kt=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function At(e){if(e!=null&&e.__resolved)return e;const n={...kt,...e};return Object.defineProperty(n,"__resolved",{value:!0,enumerable:!1}),n}const L=-1,C=1,E=0;function M(e,n){return[e,n]}function O(e,n,r,s=!0,t){const i=At(r);typeof t>"u"&&(i.diffTimeout<=0?t=Number.MAX_VALUE:t=new Date().getTime()+i.diffTimeout*1e3);const l=t;if(e==null||n==null)throw new Error("Null input. (diff_main)");if(e===n)return e?[M(E,e)]:[];const f=s;let o=H(e,n);const a=e.substring(0,o);e=e.substring(o),n=n.substring(o),o=z(e,n);const u=e.substring(e.length-o);e=e.substring(0,e.length-o),n=n.substring(0,n.length-o);const h=Mt(e,n,i,f,l);return a&&h.unshift(M(E,a)),u&&h.push(M(E,u)),K(h),h}function Mt(e,n,r,s,t){let i;if(!e)return[M(C,n)];if(!n)return[M(L,e)];const l=e.length>n.length?e:n,f=e.length>n.length?n:e,o=l.indexOf(f);if(o!==-1)return i=[M(C,l.substring(0,o)),M(E,f),M(C,l.substring(o+f.length))],e.length>n.length&&(i[0][0]=i[2][0]=L),i;if(f.length===1)return[M(L,e),M(C,n)];const a=Tt(e,n,r);if(a){const u=a[0],h=a[1],p=a[2],c=a[3],m=a[4],k=O(u,p,r,s,t),A=O(h,c,r,s,t);return k.concat([M(E,m)],A)}return s&&e.length>100&&n.length>100?Et(e,n,r,t):Ct(e,n,r,t)}function Et(e,n,r,s){const t=Lt(e,n);e=t.chars1,n=t.chars2;const i=t.lineArray,l=O(e,n,r,!1,s);Bt(l,i),Rt(l),l.push(M(E,""));let f=0,o=0,a=0,u="",h="";for(;f<l.length;){switch(l[f][0]){case C:a++,h+=l[f][1];break;case L:o++,u+=l[f][1];break;case E:if(o>=1&&a>=1){l.splice(f-o-a,o+a),f=f-o-a;const p=O(u,h,r,!1,s);for(let c=p.length-1;c>=0;c--)l.splice(f,0,p[c]);f=f+p.length}a=0,o=0,u="",h="";break}f++}return l.pop(),l}function Ct(e,n,r,s){const t=e.length,i=n.length,l=Math.ceil((t+i)/2),f=l,o=2*l,a=new Array(o),u=new Array(o);for(let v=0;v<o;v++)a[v]=-1,u[v]=-1;a[f+1]=0,u[f+1]=0;const h=t-i,p=h%2!==0;let c=0,m=0,k=0,A=0;for(let v=0;v<l&&!(new Date().getTime()>s);v++){for(let b=-v+c;b<=v-m;b+=2){const S=f+b;let d;b===-v||b!==v&&a[S-1]<a[S+1]?d=a[S+1]:d=a[S-1]+1;let w=d-b;for(;d<t&&w<i&&e.charAt(d)===n.charAt(w);)d++,w++;if(a[S]=d,d>t)m+=2;else if(w>i)c+=2;else if(p){const g=f+h-b;if(g>=0&&g<o&&u[g]!==-1){const y=t-u[g];if(d>=y)return W(e,n,r,d,w,s)}}}for(let b=-v+k;b<=v-A;b+=2){const S=f+b;let d;b===-v||b!==v&&u[S-1]<u[S+1]?d=u[S+1]:d=u[S-1]+1;let w=d-b;for(;d<t&&w<i&&e.charAt(t-d-1)===n.charAt(i-w-1);)d++,w++;if(u[S]=d,d>t)A+=2;else if(w>i)k+=2;else if(!p){const g=f+h-b;if(g>=0&&g<o&&a[g]!==-1){const y=a[g],_=f+y-g;if(d=t-d,y>=d)return W(e,n,r,y,_,s)}}}}return[M(L,e),M(C,n)]}function W(e,n,r,s,t,i){const l=e.substring(0,s),f=n.substring(0,t),o=e.substring(s),a=n.substring(t),u=O(l,f,r,!1,i),h=O(o,a,r,!1,i);return u.concat(h)}function Lt(e,n){const r=[],s={};let t=4e4;r[0]="";function i(o){let a="",u=0,h=-1,p=r.length;for(;h<o.length-1;){h=o.indexOf(`
`,u),h===-1&&(h=o.length-1);let c=o.substring(u,h+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,c):s[c]!==void 0)?a+=String.fromCharCode(s[c]):(p===t&&(c=o.substring(u),h=o.length),a+=String.fromCharCode(p),s[c]=p,r[p++]=c),u=h+1}return a}const l=i(e);t=65535;const f=i(n);return{chars1:l,chars2:f,lineArray:r}}function Bt(e,n){for(let r=0;r<e.length;r++){const s=e[r][1],t=[];for(let i=0;i<s.length;i++)t[i]=n[s.charCodeAt(i)];e[r][1]=t.join("")}}function H(e,n){if(!e||!n||e.charAt(0)!==n.charAt(0))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(i,t)===n.substring(i,t)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function z(e,n){if(!e||!n||e.charAt(e.length-1)!==n.charAt(n.length-1))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(e.length-t,e.length-i)===n.substring(n.length-t,n.length-i)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function J(e,n){const r=e.length,s=n.length;if(r===0||s===0)return 0;r>s?e=e.substring(r-s):r<s&&(n=n.substring(0,r));const t=Math.min(r,s);if(e===n)return t;let i=0,l=1;for(;;){const f=e.substring(t-l),o=n.indexOf(f);if(o===-1)return i;l+=o,(o===0||e.substring(t-l)===n.substring(0,l))&&(i=l,l++)}}function Tt(e,n,r){if(r.diffTimeout<=0)return null;const s=e.length>n.length?e:n,t=e.length>n.length?n:e;if(s.length<4||t.length*2<s.length)return null;function i(m,k,A){const v=m.substring(A,A+Math.floor(m.length/4));let b=-1,S="",d,w,g,y;for(;(b=k.indexOf(v,b+1))!==-1;){const _=H(m.substring(A),k.substring(b)),$=z(m.substring(0,A),k.substring(0,b));S.length<$+_&&(S=k.substring(b-$,b)+k.substring(b,b+_),d=m.substring(0,A-$),w=m.substring(A+_),g=k.substring(0,b-$),y=k.substring(b+_))}return S.length*2>=m.length?[d,w,g,y,S]:null}const l=i(s,t,Math.ceil(s.length/4)),f=i(s,t,Math.ceil(s.length/2));let o;if(!l&&!f)return null;f?l?o=l[4].length>f[4].length?l:f:o=f:o=l;let a,u,h,p;e.length>n.length?(a=o[0],u=o[1],h=o[2],p=o[3]):(h=o[0],p=o[1],a=o[2],u=o[3]);const c=o[4];return[a,u,h,p,c]}function Rt(e){let n=!1;const r=[];let s=0,t=null,i=0,l=0,f=0,o=0,a=0;for(;i<e.length;)e[i][0]===E?(r[s++]=i,l=o,f=a,o=0,a=0,t=e[i][1]):(e[i][0]===C?o+=e[i][1].length:a+=e[i][1].length,t&&t.length<=Math.max(l,f)&&t.length<=Math.max(o,a)&&(e.splice(r[s-1],0,M(L,t)),e[r[s-1]+1][0]=C,s--,s--,i=s>0?r[s-1]:-1,l=0,f=0,o=0,a=0,t=null,n=!0)),i++;for(n&&K(e),$t(e),i=1;i<e.length;){if(e[i-1][0]===L&&e[i][0]===C){const u=e[i-1][1],h=e[i][1],p=J(u,h),c=J(h,u);p>=c?(p>=u.length/2||p>=h.length/2)&&(e.splice(i,0,M(E,h.substring(0,p))),e[i-1][1]=u.substring(0,u.length-p),e[i+1][1]=h.substring(p),i++):(c>=u.length/2||c>=h.length/2)&&(e.splice(i,0,M(E,u.substring(0,c))),e[i-1][0]=C,e[i-1][1]=h.substring(0,h.length-c),e[i+1][0]=L,e[i+1][1]=u.substring(c),i++),i++}i++}}const X=/[^a-zA-Z0-9]/,Y=/\s/,Q=/[\r\n]/,Ot=/\n\r?\n$/,Dt=/^\r?\n\r?\n/;function $t(e){function n(s,t){if(!s||!t)return 6;const i=s.charAt(s.length-1),l=t.charAt(0),f=i.match(X),o=l.match(X),a=f&&i.match(Y),u=o&&l.match(Y),h=a&&i.match(Q),p=u&&l.match(Q),c=h&&s.match(Ot),m=p&&t.match(Dt);return c||m?5:h||p?4:f&&!a&&u?3:a||u?2:f||o?1:0}let r=1;for(;r<e.length-1;){if(e[r-1][0]===E&&e[r+1][0]===E){let s=e[r-1][1],t=e[r][1],i=e[r+1][1];const l=z(s,t);if(l){const h=t.substring(t.length-l);s=s.substring(0,s.length-l),t=h+t.substring(0,t.length-l),i=h+i}let f=s,o=t,a=i,u=n(s,t)+n(t,i);for(;t.charAt(0)===i.charAt(0);){s+=t.charAt(0),t=t.substring(1)+i.charAt(0),i=i.substring(1);const h=n(s,t)+n(t,i);h>=u&&(u=h,f=s,o=t,a=i)}e[r-1][1]!==f&&(f?e[r-1][1]=f:(e.splice(r-1,1),r--),e[r][1]=o,a?e[r+1][1]=a:(e.splice(r+1,1),r--))}r++}}function K(e){e.push(M(E,""));let n=0,r=0,s=0,t="",i="",l;for(;n<e.length;)switch(e[n][0]){case C:s++,i+=e[n][1],n++;break;case L:r++,t+=e[n][1],n++;break;case E:r+s>1?(r!==0&&s!==0&&(l=H(i,t),l!==0&&(n-r-s>0&&e[n-r-s-1][0]===E?e[n-r-s-1][1]+=i.substring(0,l):(e.splice(0,0,M(E,i.substring(0,l))),n++),i=i.substring(l),t=t.substring(l)),l=z(i,t),l!==0&&(e[n][1]=i.substring(i.length-l)+e[n][1],i=i.substring(0,i.length-l),t=t.substring(0,t.length-l))),n-=r+s,e.splice(n,r+s),t.length&&(e.splice(n,0,M(L,t)),n++),i.length&&(e.splice(n,0,M(C,i)),n++),n++):n!==0&&e[n-1][0]===E?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,s=0,r=0,t="",i="";break}e[e.length-1][1]===""&&e.pop();let f=!1;for(n=1;n<e.length-1;)e[n-1][0]===E&&e[n+1][0]===E&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),f=!0):e[n][1].substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),f=!0)),n++;f&&K(e)}const V=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Pt(e,n){n?n={...V,...n}:n=V;const r=ht(n);return r.dispatch(e),r.toString()}const jt=Object.freeze(["prototype","__proto__","constructor"]);function ht(e){let n="",r=new Map;const s=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let l="";const f=i.length;f<10?l="unknown:["+i+"]":l=i.slice(8,f-1),l=l.toLowerCase();let o=null;if((o=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return s("buffer:"),s(t.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](t):e.ignoreUnknown||this.unkown(t,l);else{let a=Object.keys(t);e.unorderedObjects&&(a=a.sort());let u=[];e.respectType!==!1&&!G(t)&&(u=jt),e.excludeKeys&&(a=a.filter(p=>!e.excludeKeys(p)),u=u.filter(p=>!e.excludeKeys(p))),s("object:"+(a.length+u.length)+":");const h=p=>{this.dispatch(p),s(":"),e.excludeValues||this.dispatch(t[p]),s(",")};for(const p of a)h(p);for(const p of u)h(p)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,s("array:"+t.length+":"),!i||t.length<=1){for(const o of t)this.dispatch(o);return}const l=new Map,f=t.map(o=>{const a=ht(e);a.dispatch(o);for(const[u,h]of a.getContext())l.set(u,h);return a.toString()});return r=l,f.sort(),this.array(f,!1)},date(t){return s("date:"+t.toJSON())},symbol(t){return s("symbol:"+t.toString())},unkown(t,i){if(s(i),!!t&&(s(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return s("error:"+t.toString())},boolean(t){return s("bool:"+t)},string(t){s("string:"+t.length+":"),s(t)},function(t){s("fn:"),G(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return s("number:"+t)},xml(t){return s("xml:"+t.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(t){return s("regex:"+t.toString())},uint8array(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return s("url:"+t.toString())},map(t){s("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){s("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(t){return s("bigint:"+t.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const ut="[native code] }",zt=ut.length;function G(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-zt)===ut}class T{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||Ft).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const s=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new T([...this.words])}}const Ft={stringify(e){const n=[];for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;n.push((s>>>4).toString(16),(s&15).toString(16))}return n.join("")}},Nt={stringify(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<e.sigBytes;s+=3){const t=e.words[s>>>2]>>>24-s%4*8&255,i=e.words[s+1>>>2]>>>24-(s+1)%4*8&255,l=e.words[s+2>>>2]>>>24-(s+2)%4*8&255,f=t<<16|i<<8|l;for(let o=0;o<4&&s*8+o*6<e.sigBytes*8;o++)r.push(n.charAt(f>>>6*(3-o)&63))}return r.join("")}},xt={parse(e){const n=e.length,r=[];for(let s=0;s<n;s++)r[s>>>2]|=(e.charCodeAt(s)&255)<<24-s%4*8;return new T(r,n)}},Ut={parse(e){return xt.parse(unescape(encodeURIComponent(e)))}};class qt{constructor(){this._data=new T,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new T,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Ut.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,s=this._data.sigBytes/(this.blockSize*4);n?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let l=0;l<t;l+=this.blockSize)this._doProcessBlock(this._data.words,l);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new T(r,i)}}class Ht extends qt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const tt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Kt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],R=[];class It extends Ht{constructor(){super(...arguments),this._hash=new T([...tt])}reset(){super.reset(),this._hash=new T([...tt])}_doProcessBlock(n,r){const s=this._hash.words;let t=s[0],i=s[1],l=s[2],f=s[3],o=s[4],a=s[5],u=s[6],h=s[7];for(let p=0;p<64;p++){if(p<16)R[p]=n[r+p]|0;else{const S=R[p-15],d=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,w=R[p-2],g=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;R[p]=d+R[p-7]+g+R[p-16]}const c=o&a^~o&u,m=t&i^t&l^i&l,k=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),A=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),v=h+A+c+Kt[p]+R[p],b=k+m;h=u,u=a,a=o,o=f+v|0,f=l,l=i,i=t,t=v+b|0}s[0]=s[0]+t|0,s[1]=s[1]+i|0,s[2]=s[2]+l|0,s[3]=s[3]+f|0,s[4]=s[4]+o|0,s[5]=s[5]+a|0,s[6]=s[6]+u|0,s[7]=s[7]+h|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Zt(e){return new It().finalize(e).toString(Nt)}function Wt(e,n={}){const r=typeof e=="string"?e:Pt(e,n);return Zt(r).slice(0,10)}function Jt(e,n,r=""){const s=Wt(e+r);let t=0;const i=Xt(n).flatMap(l=>{const f=l[l.length-1];return f?t=f.offset+f.content.length:t+=1,[...l,{content:`
`,offset:t}]}).map((l,f)=>{const o=l;return o.key=`${s}-${f}`,o});return{code:e,hash:s,tokens:i}}function Xt(e){return e.map(n=>n.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,t,i,l]=s;if(!t&&!l)return r;const f=[{...r,offset:r.offset+t.length,content:i}];return t&&f.unshift({content:t,offset:r.offset}),l&&f.push({content:l,offset:r.offset+t.length+i.length}),f}))}function Yt(e,n){let r=0;const s=e.key;let t=0;const i=[];function l(){return t===0?(t++,s):`${s}-${t++}`}for(const f of n)f>r&&i.push({...e,content:e.content.slice(r,f),offset:e.offset+r,key:l()}),r=f;return r<e.content.length&&i.push({...e,content:e.content.slice(r),offset:e.offset+r,key:l()}),i}function et(e,n){const r=Array.from(n instanceof Set?n:new Set(n)).sort((s,t)=>s-t);return r.length?e.flatMap(s=>{const t=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,l)=>i-l);return t.length?Yt(s,t):s}):e}function Qt(e,n,r={}){const{splitTokens:s=!1,enhanceMatching:t=!0}=r,i=Vt(e.code,n.code,r),l=s?et(e.tokens,i.flatMap(a=>a.from)):e.tokens,f=s?et(n.tokens,i.flatMap(a=>a.to)):n.tokens,o=new Set;if(i.forEach(a=>{var m,k;const u=l.filter(A=>A.offset>=a.from[0]&&A.offset+A.content.length<=a.from[1]),h=f.filter(A=>A.offset>=a.to[0]&&A.offset+A.content.length<=a.to[1]);let p=0,c=0;for(;p<u.length&&c<h.length&&!(!u[p]||!h[c]);)u[p].content===h[c].content?(h[c].key=u[p].key,o.add(u[p].key),p++,c++):((m=u[p+1])==null?void 0:m.content)===h[c].content?p++:(u[p].content===((k=h[c+1])==null?void 0:k.content)||p++,c++)}),t)for(const a of l){if(o.has(a.key)||a.content.length<3||!a.content.match(/^[\w\d_-]+$/))continue;const u=f.find(h=>h.content===a.content&&!o.has(h.key));u&&(u.key=a.key,o.add(a.key))}return{from:l.length===e.tokens.length?e:{...e,tokens:l},to:f.length===n.tokens.length?n:{...n,tokens:f}}}function Vt(e,n,r={}){var f;let s=O(e,n);s=((f=r.diffCleanup)==null?void 0:f.call(r,s))||s;let t="",i="";const l=[];for(const[o,a]of s)o===0?(l.push({from:[t.length,t.length+a.length],to:[i.length,i.length+a.length],content:a}),t+=a,i+=a):o===-1?t+=a:o===1&&(i+=a);if(t!==e||i!==n)throw new Error("Content mismatch");return l}var Gt=Object.defineProperty,te=(e,n,r)=>n in e?Gt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,D=(e,n,r)=>(te(e,typeof n!="symbol"?n+"":n,r),r);const B="shiki-magic-move",F=`${B}-leave-from`,ee=`${B}-leave-to`,nt=`${B}-leave-active`,N=`${B}-enter-from`,x=`${B}-enter-to`,st=`${B}-enter-active`,rt=`${B}-move`,it=`${B}-container-resize`,ot=`${B}-container-restyle`,ne={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class se{constructor(n,r={}){D(this,"mapDom",new Map),D(this,"container"),D(this,"anchor"),D(this,"previousPromises",[]),D(this,"options"),D(this,"isFirstRender",!0),this.options={...ne,...r},typeof n=="string"?this.container=document.querySelector(n):this.container=n,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(n,r){r.content!==`
`&&(n.textContent=r.content,n.classList.add(`${B}-item`))}applyElementStyle(n,r){r.htmlStyle&&n.setAttribute("style",r.htmlStyle),r.color&&(n.style.color=r.color),r.bgColor&&(n.style.backgroundColor=r.bgColor)}applyElement(n,r){this.applyElementContent(n,r),this.applyElementStyle(n,r)}applyContainerStyle(n){if(this.options.containerStyle&&(n.bg&&(this.container.style.backgroundColor=n.bg),n.fg&&(this.container.style.color=n.fg),n.rootStyle)){const r=n.rootStyle.split(";");for(const s of r){const[t,i]=s.split(":");t&&i&&this.container.style.setProperty(t.trim(),i.trim())}}}registerTransitionEnd(n,r){let s=!1,t=()=>{};const i=new Promise(l=>{const f=o=>{!o||o.target!==n||t()};t=()=>{s||(s=!0,n.removeEventListener("transitionend",f),r(),l())},n.addEventListener("transitionend",f)});return i.resolve=t,i}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(n){const r=new Map,s=n.tokens.map(t=>{if(this.mapDom.has(t.key)){const i=this.mapDom.get(t.key);return this.applyElement(i,t),r.set(t.key,i),this.mapDom.delete(t.key),i}else{const i=document.createElement(t.content===`
`?"br":"span");return this.applyElement(i,t),r.set(t.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(n),this.mapDom=r}render(n){this.setCssVariables();const r=new Map,s=[],t=[],i=[],l=[];this.previousPromises.forEach(c=>c.resolve()),this.previousPromises=[];const f=[],{globalScale:o}=this.options,a=new Map;let u=this.anchor.getBoundingClientRect();const h=this.container.getBoundingClientRect();for(const c of this.mapDom.values()){const m=c.getBoundingClientRect();a.set(c,{x:m.x-u.x,y:m.y-u.y})}const p=n.tokens.map(c=>{if(this.mapDom.has(c.key)){const m=this.mapDom.get(c.key);return this.applyElementContent(m,c),f.push(()=>{this.applyElementStyle(m,c)}),s.push(m),r.set(c.key,m),this.mapDom.delete(c.key),m}else{const m=document.createElement(c.content===`
`?"br":"span");return this.applyElement(m,c),t.push(m),r.set(c.key,m),m}});for(const[c,m]of this.mapDom)m.tagName!=="BR"&&i.push(m);for(const c of i)c.style.position="absolute";if(this.container.replaceChildren(this.anchor,...p,...i),this.mapDom=r,i.forEach((c,m)=>{c.style.position="absolute";const k=a.get(c);c.style.top=`${k.y/o}px`,c.style.left=`${k.x/o}px`,this.options.stagger?c.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):c.style.removeProperty("--smm-stagger"),c.classList.add(F),c.classList.add(nt),f.unshift(()=>{c.classList.remove(F),c.classList.add(ee)}),l.push(this.registerTransitionEnd(c,()=>{c.classList.remove(F),c.classList.remove(nt),c.classList.remove(x),c.remove()}))}),this.isFirstRender||t.forEach((c,m)=>{c.classList.add(N),c.classList.add(st),this.options.stagger?c.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):c.style.removeProperty("--smm-stagger"),f.push(()=>{c.classList.remove(N),c.classList.add(x)}),l.push(this.registerTransitionEnd(c,()=>{c.classList.remove(N),c.classList.remove(st),c.classList.remove(x)}))}),u=this.anchor.getBoundingClientRect(),s.forEach((c,m)=>{const k=c.getBoundingClientRect(),A={x:k.x-u.x,y:k.y-u.y},v=a.get(c);c.style.transitionDuration=c.style.transitionDelay="0ms";const b=(v.x-A.x)/o,S=(v.y-A.y)/o;c.style.transform=`translate(${b}px, ${S}px)`,this.options.stagger?c.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):c.style.removeProperty("--smm-stagger"),f.unshift(()=>{c.classList.add(rt),c.style.transform=c.style.transitionDuration=c.style.transitionDelay=""}),l.push(this.registerTransitionEnd(c,()=>{c.classList.remove(rt)}))}),this.options.animateContainer&&!this.isFirstRender){const c=this.container.getBoundingClientRect();(c.width!==h.width||c.height!==h.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${h.height/o}px`,this.container.style.width=`${h.width/o}px`,f.unshift(()=>{this.container.classList.add(it),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${c.height/o}px`,this.container.style.width=`${c.width/o}px`}),l.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(it),this.container.style.height=this.container.style.width=""})))}return this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(n):(f.push(()=>{this.container.classList.add(ot),this.applyContainerStyle(n)}),l.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(ot)})))),re(),f.forEach(c=>c()),this.isFirstRender=!1,this.previousPromises=l,Promise.all(l).then()}}function re(){return document.body.offsetHeight}const ie=q({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(e,{emit:n}){const r=U();let s=!1;return lt(()=>{r.value.innerHTML="",s=!0;const t=new se(r.value);ct(()=>e.tokens,async i=>{if(Object.assign(t.options,e.options),e.animate){e.previous&&t.replace(e.previous),await Z();const l=t.render(i);await Z(),n("start"),await l,n("end")}else t.replace(i)},{immediate:!0})}),()=>j("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:ft(e.tokens.tokens,t=>t.content===`
`?j("br",{key:t.key}):j("span",{style:[{color:t.color},t.htmlStyle],class:"shiki-magic-move-item",key:t.key},t.content)))}}),oe=q({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(e,{emit:n}){let s=Jt("",[]);const t=at(()=>{const i=Qt(s,e.steps[Math.min(e.step,e.steps.length-1)],e.options);return s=i.to,i});return()=>j(ie,{tokens:t.value.to,previous:t.value.from,options:e.options,animate:e.animate,onStart:()=>n("start"),onEnd:()=>n("end")})}});var I={exports:{}};I.exports;(function(e){var n=function(){var r=String.fromCharCode,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function l(o,a){if(!i[o]){i[o]={};for(var u=0;u<o.length;u++)i[o][o.charAt(u)]=u}return i[o][a]}var f={compressToBase64:function(o){if(o==null)return"";var a=f._compress(o,6,function(u){return s.charAt(u)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:f._decompress(o.length,32,function(a){return l(s,o.charAt(a))})},compressToUTF16:function(o){return o==null?"":f._compress(o,15,function(a){return r(a+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:f._decompress(o.length,16384,function(a){return o.charCodeAt(a)-32})},compressToUint8Array:function(o){for(var a=f.compress(o),u=new Uint8Array(a.length*2),h=0,p=a.length;h<p;h++){var c=a.charCodeAt(h);u[h*2]=c>>>8,u[h*2+1]=c%256}return u},decompressFromUint8Array:function(o){if(o==null)return f.decompress(o);for(var a=new Array(o.length/2),u=0,h=a.length;u<h;u++)a[u]=o[u*2]*256+o[u*2+1];var p=[];return a.forEach(function(c){p.push(r(c))}),f.decompress(p.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":f._compress(o,6,function(a){return t.charAt(a)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),f._decompress(o.length,32,function(a){return l(t,o.charAt(a))}))},compress:function(o){return f._compress(o,16,function(a){return r(a)})},_compress:function(o,a,u){if(o==null)return"";var h,p,c={},m={},k="",A="",v="",b=2,S=3,d=2,w=[],g=0,y=0,_;for(_=0;_<o.length;_+=1)if(k=o.charAt(_),Object.prototype.hasOwnProperty.call(c,k)||(c[k]=S++,m[k]=!0),A=v+k,Object.prototype.hasOwnProperty.call(c,A))v=A;else{if(Object.prototype.hasOwnProperty.call(m,v)){if(v.charCodeAt(0)<256){for(h=0;h<d;h++)g=g<<1,y==a-1?(y=0,w.push(u(g)),g=0):y++;for(p=v.charCodeAt(0),h=0;h<8;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1}else{for(p=1,h=0;h<d;h++)g=g<<1|p,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=0;for(p=v.charCodeAt(0),h=0;h<16;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1}b--,b==0&&(b=Math.pow(2,d),d++),delete m[v]}else for(p=c[v],h=0;h<d;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1;b--,b==0&&(b=Math.pow(2,d),d++),c[A]=S++,v=String(k)}if(v!==""){if(Object.prototype.hasOwnProperty.call(m,v)){if(v.charCodeAt(0)<256){for(h=0;h<d;h++)g=g<<1,y==a-1?(y=0,w.push(u(g)),g=0):y++;for(p=v.charCodeAt(0),h=0;h<8;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1}else{for(p=1,h=0;h<d;h++)g=g<<1|p,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=0;for(p=v.charCodeAt(0),h=0;h<16;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1}b--,b==0&&(b=Math.pow(2,d),d++),delete m[v]}else for(p=c[v],h=0;h<d;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1;b--,b==0&&(b=Math.pow(2,d),d++)}for(p=2,h=0;h<d;h++)g=g<<1|p&1,y==a-1?(y=0,w.push(u(g)),g=0):y++,p=p>>1;for(;;)if(g=g<<1,y==a-1){w.push(u(g));break}else y++;return w.join("")},decompress:function(o){return o==null?"":o==""?null:f._decompress(o.length,32768,function(a){return o.charCodeAt(a)})},_decompress:function(o,a,u){var h=[],p=4,c=4,m=3,k="",A=[],v,b,S,d,w,g,y,_={val:u(0),position:a,index:1};for(v=0;v<3;v+=1)h[v]=v;for(S=0,w=Math.pow(2,2),g=1;g!=w;)d=_.val&_.position,_.position>>=1,_.position==0&&(_.position=a,_.val=u(_.index++)),S|=(d>0?1:0)*g,g<<=1;switch(S){case 0:for(S=0,w=Math.pow(2,8),g=1;g!=w;)d=_.val&_.position,_.position>>=1,_.position==0&&(_.position=a,_.val=u(_.index++)),S|=(d>0?1:0)*g,g<<=1;y=r(S);break;case 1:for(S=0,w=Math.pow(2,16),g=1;g!=w;)d=_.val&_.position,_.position>>=1,_.position==0&&(_.position=a,_.val=u(_.index++)),S|=(d>0?1:0)*g,g<<=1;y=r(S);break;case 2:return""}for(h[3]=y,b=y,A.push(y);;){if(_.index>o)return"";for(S=0,w=Math.pow(2,m),g=1;g!=w;)d=_.val&_.position,_.position>>=1,_.position==0&&(_.position=a,_.val=u(_.index++)),S|=(d>0?1:0)*g,g<<=1;switch(y=S){case 0:for(S=0,w=Math.pow(2,8),g=1;g!=w;)d=_.val&_.position,_.position>>=1,_.position==0&&(_.position=a,_.val=u(_.index++)),S|=(d>0?1:0)*g,g<<=1;h[c++]=r(S),y=c-1,p--;break;case 1:for(S=0,w=Math.pow(2,16),g=1;g!=w;)d=_.val&_.position,_.position>>=1,_.position==0&&(_.position=a,_.val=u(_.index++)),S|=(d>0?1:0)*g,g<<=1;h[c++]=r(S),y=c-1,p--;break;case 2:return A.join("")}if(p==0&&(p=Math.pow(2,m),m++),h[y])k=h[y];else if(y===c)k=b+b.charAt(0);else return null;A.push(k),h[c++]=b+k.charAt(0),p--,b=k,p==0&&(p=Math.pow(2,m),m++)}}};return f}();e!=null?e.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(I);var ae=I.exports;const le=dt(ae),ce=q({__name:"ShikiMagicMove",props:{at:{type:[String,Number],required:!1},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0}},setup(e){const n=e,r=JSON.parse(le.decompressFromBase64(n.stepsLz)),{$clicksContext:s,$scale:t}=_t(),{isPrintMode:i}=bt(),l=vt(),f=U(0),o=U(),a=at(()=>n.stepRanges.map(u=>u.length?u:["all"]));return pt(()=>{s==null||s.unregister(l)}),lt(()=>{if(!s)return;if(a.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const u=a.value.map(m=>m.length).reduce((m,k)=>m+k,0),{start:h,end:p,delta:c}=s.resolve(n.at??"+1",u-1);s.register(l,{max:p,delta:c}),ct(()=>s.current,()=>{var w;const m=s.current-h;let k=r.length-1,A=0,v="all";for(let g=0;g<a.value.length;g++){const y=a.value[g];if(m<A+y.length-1){k=g,v=y[m-A+1];break}A+=y.length||1}f.value=k;const b=(w=o.value)==null?void 0:w.querySelector(".shiki");if(!b)return;const d=Array.from(b.children).slice(1).filter(g=>!g.className.includes("shiki-magic-move-leave")).reduce((g,y)=>(y.tagName==="BR"?g.push([]):g[g.length-1].push(y),g),[[]]);wt(v,d.length,1,g=>d[g])},{immediate:!0})}),(u,h)=>(gt(),yt("div",{ref_key:"container",ref:o,class:"slidev-code-wrapper slidev-code-magic-move relative"},[mt(P(oe),{class:"slidev-code relative shiki overflow-visible",steps:P(r),step:f.value,animate:!P(i),options:{globalScale:P(t),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}}),ge=St(ce,[["__file","C:/Users/91388/Desktop/terminal/node_modules/@slidev/client/builtin/ShikiMagicMove.vue"]]);export{ge as _};
