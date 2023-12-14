(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const re={},Qt=[],He=()=>{},pu=()=>!1,mu=/^on[^a-z]/,Wr=t=>mu.test(t),mi=t=>t.startsWith("onUpdate:"),ge=Object.assign,gi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gu=Object.prototype.hasOwnProperty,K=(t,e)=>gu.call(t,e),B=Array.isArray,Zt=t=>Vr(t)==="[object Map]",Wa=t=>Vr(t)==="[object Set]",W=t=>typeof t=="function",de=t=>typeof t=="string",_i=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Va=t=>ie(t)&&W(t.then)&&W(t.catch),za=Object.prototype.toString,Vr=t=>za.call(t),_u=t=>Vr(t).slice(8,-1),Ka=t=>Vr(t)==="[object Object]",yi=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yu=/-(\w)/g,Ze=zr(t=>t.replace(yu,(e,n)=>n?n.toUpperCase():"")),bu=/\B([A-Z])/g,_n=zr(t=>t.replace(bu,"-$1").toLowerCase()),Kr=zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ms=zr(t=>t?`on${Kr(t)}`:""),Un=(t,e)=>!Object.is(t,e),mr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vu=t=>{const e=de(t)?Number(t):NaN;return isNaN(e)?t:e};let ao;const Us=()=>ao||(ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Tu(r):bi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(de(t))return t;if(ie(t))return t}}const Eu=/;(?![^(]*\))/g,wu=/:([^]+)/,Iu=/\/\*[^]*?\*\//g;function Tu(t){const e={};return t.replace(Iu,"").split(Eu).forEach(n=>{if(n){const r=n.split(wu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qr(t){let e="";if(de(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=qr(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ru="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Su=pi(Ru);function qa(t){return!!t||t===""}const Fn=t=>de(t)?t:t==null?"":B(t)||ie(t)&&(t.toString===za||!W(t.toString))?JSON.stringify(t,Ja,2):String(t),Ja=(t,e)=>e&&e.__v_isRef?Ja(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Wa(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!B(e)&&!Ka(e)?String(e):e;let Fe;class Au{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cu(t,e=Fe){e&&e.active&&e.effects.push(t)}function Pu(){return Fe}const vi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ga=t=>(t.w&Pt)>0,Ya=t=>(t.n&Pt)>0,Ou=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},ku=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ga(s)&&!Ya(s)?s.delete(t):e[n++]=s,s.w&=~Pt,s.n&=~Pt}e.length=n}},Fs=new WeakMap;let Cn=0,Pt=1;const Bs=30;let $e;const Ft=Symbol(""),$s=Symbol("");class Ei{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cu(this,r)}run(){if(!this.active)return this.fn();let e=$e,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,Rt=!0,Pt=1<<++Cn,Cn<=Bs?Ou(this):co(this),this.fn()}finally{Cn<=Bs&&ku(this),Pt=1<<--Cn,$e=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(co(this),this.onStop&&this.onStop(),this.active=!1)}}function co(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const Xa=[];function yn(){Xa.push(Rt),Rt=!1}function bn(){const t=Xa.pop();Rt=t===void 0?!0:t}function Ce(t,e,n){if(Rt&&$e){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=vi()),Qa(s)}}function Qa(t,e){let n=!1;Cn<=Bs?Ya(t)||(t.n|=Pt,n=!Ga(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function lt(t,e,n,r,s,i){const o=Fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?yi(n)&&a.push(o.get("length")):(a.push(o.get(Ft)),Zt(t)&&a.push(o.get($s)));break;case"delete":B(t)||(a.push(o.get(Ft)),Zt(t)&&a.push(o.get($s)));break;case"set":Zt(t)&&a.push(o.get(Ft));break}if(a.length===1)a[0]&&Hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hs(vi(c))}}function Hs(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&lo(r);for(const r of n)r.computed||lo(r)}function lo(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Nu=pi("__proto__,__v_isRef,__isVue"),Za=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_i)),xu=wi(),Du=wi(!1,!0),Lu=wi(!0),uo=Mu();function Mu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yn();const r=J(this)[e].apply(this,n);return bn(),r}}),t}function Uu(t){const e=J(this);return Ce(e,"has",t),e.hasOwnProperty(t)}function wi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Zu:sc:e?rc:nc).get(r))return r;const o=B(r);if(!t){if(o&&K(uo,s))return Reflect.get(uo,s,i);if(s==="hasOwnProperty")return Uu}const a=Reflect.get(r,s,i);return(_i(s)?Za.has(s):Nu(s))||(t||Ce(r,"get",s),e)?a:we(a)?o&&yi(s)?a:a.value:ie(a)?t?oc(a):Gr(a):a}}const Fu=ec(),Bu=ec(!0);function ec(t=!1){return function(n,r,s,i){let o=n[r];if(cn(o)&&we(o)&&!we(s))return!1;if(!t&&(!Pr(s)&&!cn(s)&&(o=J(o),s=J(s)),!B(n)&&we(o)&&!we(s)))return o.value=s,!0;const a=B(n)&&yi(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?Un(s,o)&&lt(n,"set",r,s):lt(n,"add",r,s)),c}}function $u(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&lt(t,"delete",e,void 0),r}function Hu(t,e){const n=Reflect.has(t,e);return(!_i(e)||!Za.has(e))&&Ce(t,"has",e),n}function ju(t){return Ce(t,"iterate",B(t)?"length":Ft),Reflect.ownKeys(t)}const tc={get:xu,set:Fu,deleteProperty:$u,has:Hu,ownKeys:ju},Wu={get:Lu,set(t,e){return!0},deleteProperty(t,e){return!0}},Vu=ge({},tc,{get:Du,set:Bu}),Ii=t=>t,Jr=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(e!==i&&Ce(s,"get",e),Ce(s,"get",i));const{has:o}=Jr(s),a=r?Ii:n?Si:Bn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function cr(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(t!==s&&Ce(r,"has",t),Ce(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lr(t,e=!1){return t=t.__v_raw,!e&&Ce(J(t),"iterate",Ft),Reflect.get(t,"size",t)}function fo(t){t=J(t);const e=J(this);return Jr(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function ho(t,e){e=J(e);const n=J(this),{has:r,get:s}=Jr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Un(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function po(t){const e=J(this),{has:n,get:r}=Jr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&lt(e,"delete",t,void 0),i}function mo(){const t=J(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function ur(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?Ii:t?Si:Bn;return!t&&Ce(a,"iterate",Ft),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function fr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Zt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ii:e?Si:Bn;return!e&&Ce(i,"iterate",c?$s:Ft),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[f(u[0]),f(u[1])]:f(u),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function zu(){const t={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:fo,set:ho,delete:po,clear:mo,forEach:ur(!1,!1)},e={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:fo,set:ho,delete:po,clear:mo,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ur(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),e[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[t,n,e,r]}const[Ku,qu,Ju,Gu]=zu();function Ti(t,e){const n=e?t?Gu:Ju:t?qu:Ku;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Yu={get:Ti(!1,!1)},Xu={get:Ti(!1,!0)},Qu={get:Ti(!0,!1)},nc=new WeakMap,rc=new WeakMap,sc=new WeakMap,Zu=new WeakMap;function ef(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tf(t){return t.__v_skip||!Object.isExtensible(t)?0:ef(_u(t))}function Gr(t){return cn(t)?t:Ri(t,!1,tc,Yu,nc)}function ic(t){return Ri(t,!1,Vu,Xu,rc)}function oc(t){return Ri(t,!0,Wu,Qu,sc)}function Ri(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=tf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function en(t){return cn(t)?en(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function Pr(t){return!!(t&&t.__v_isShallow)}function ac(t){return en(t)||cn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function cc(t){return Cr(t,"__v_skip",!0),t}const Bn=t=>ie(t)?Gr(t):t,Si=t=>ie(t)?oc(t):t;function lc(t){Rt&&$e&&(t=J(t),Qa(t.dep||(t.dep=vi())))}function uc(t,e){t=J(t);const n=t.dep;n&&Hs(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function et(t){return fc(t,!1)}function nf(t){return fc(t,!0)}function fc(t,e){return we(t)?t:new rf(t,e)}class rf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:Bn(e)}get value(){return lc(this),this._value}set value(e){const n=this.__v_isShallow||Pr(e)||cn(e);e=n?e:J(e),Un(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bn(e),uc(this))}}function me(t){return we(t)?t.value:t}const sf={get:(t,e,n)=>me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dc(t){return en(t)?t:new Proxy(t,sf)}class of{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ei(e,()=>{this._dirty||(this._dirty=!0,uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function af(t,e,n=!1){let r,s;const i=W(t);return i?(r=t,s=He):(r=t.get,s=t.set),new of(r,s,i||!s,n)}function St(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Xn(i,e,n)}return s}function je(t,e,n,r){if(W(t)){const i=St(t,e,n,r);return i&&Va(i)&&i.catch(o=>{Xn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(je(t[i],e,n,r));return s}function Xn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){St(c,null,10,[t,o,a]);return}}cf(t,n,s,r)}function cf(t,e,n,r=!0){console.error(t)}let $n=!1,js=!1;const Ee=[];let Ge=0;const tn=[];let it=null,Lt=0;const hc=Promise.resolve();let Ai=null;function pc(t){const e=Ai||hc;return t?e.then(this?t.bind(this):t):e}function lf(t){let e=Ge+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;Hn(Ee[r])<t?e=r+1:n=r}return e}function Ci(t){(!Ee.length||!Ee.includes(t,$n&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?Ee.push(t):Ee.splice(lf(t.id),0,t),mc())}function mc(){!$n&&!js&&(js=!0,Ai=hc.then(yc))}function uf(t){const e=Ee.indexOf(t);e>Ge&&Ee.splice(e,1)}function gc(t){B(t)?tn.push(...t):(!it||!it.includes(t,t.allowRecurse?Lt+1:Lt))&&tn.push(t),mc()}function go(t,e=$n?Ge+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function _c(t){if(tn.length){const e=[...new Set(tn)];if(tn.length=0,it){it.push(...e);return}for(it=e,it.sort((n,r)=>Hn(n)-Hn(r)),Lt=0;Lt<it.length;Lt++)it[Lt]();it=null,Lt=0}}const Hn=t=>t.id==null?1/0:t.id,ff=(t,e)=>{const n=Hn(t)-Hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yc(t){js=!1,$n=!0,Ee.sort(ff);const e=He;try{for(Ge=0;Ge<Ee.length;Ge++){const n=Ee[Ge];n&&n.active!==!1&&St(n,null,14)}}finally{Ge=0,Ee.length=0,_c(),$n=!1,Ai=null,(Ee.length||tn.length)&&yc()}}function df(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[f]||re;p&&(s=n.map(g=>de(g)?g.trim():g)),u&&(s=n.map(Ms))}let a,c=r[a=ms(e)]||r[a=ms(Ze(e))];!c&&i&&(c=r[a=ms(_n(e))]),c&&je(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(l,t,6,s)}}function bc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const f=bc(l,e,!0);f&&(a=!0,ge(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):ge(o,i),ie(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,_n(e))||K(t,e))}let xe=null,Xr=null;function Or(t){const e=xe;return xe=t,Xr=t&&t.type.__scopeId||null,e}function Qr(t){Xr=t}function Zr(){Xr=null}function nn(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Co(-1);const i=Or(e);let o;try{o=t(...s)}finally{Or(i),r._d&&Co(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:p,setupState:g,ctx:_,inheritAttrs:v}=t;let k,P;const N=Or(t);try{if(n.shapeFlag&4){const R=s||r;k=Be(f.call(R,R,u,i,g,p,_)),P=c}else{const R=e;k=Be(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),P=e.props?c:pf(c)}}catch(R){xn.length=0,Xn(R,t,1),k=le(Ht)}let F=k;if(P&&v!==!1){const R=Object.keys(P),{shapeFlag:$}=F;R.length&&$&7&&(o&&R.some(mi)&&(P=mf(P,o)),F=un(F,P))}return n.dirs&&(F=un(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),k=F,Or(N),k}function hf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(xr(r)){if(r.type!==Ht||r.children==="v-if"){if(e)return;e=r}}else return}return e}const pf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},mf=(t,e)=>{const n={};for(const r in t)(!mi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_o(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(o[p]!==r[p]&&!Yr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_o(r,o,l):!0:!!o;return!1}function _o(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function Pi({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _f=t=>t.__isSuspense,yf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?vf(e,n,r,s,i,o,a,c,l):Ef(t,e,n,r,s,o,a,c,l)},hydrate:wf,create:Oi,normalize:If},bf=yf;function jn(t,e){const n=t.props&&t.props[e];W(n)&&n()}function vf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),p=t.suspense=Oi(t,s,r,e,u,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,u,null,r,p,i,o),p.deps>0?(jn(t,"onPending"),jn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),rn(p,t.ssFallback)):p.resolve(!1,!0)}function Ef(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:k,isHydrating:P}=u;if(v)u.pendingBranch=p,vt(p,v)?(c(v,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(_,g,n,r,s,null,i,o,a),rn(u,g))):(u.pendingId++,P?(u.isHydrating=!1,u.activeBranch=v):l(v,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(_,g,n,r,s,null,i,o,a),rn(u,g))):_&&vt(p,_)?(c(_,p,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(_&&vt(p,_))c(_,p,n,r,s,u,i,o,a),rn(u,p);else if(jn(e,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:N,pendingId:F}=u;N>0?setTimeout(()=>{u.pendingId===F&&u.fallback(g)},N):N===0&&u.fallback(g)}}function Oi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:p,um:g,n:_,o:{parentNode:v,remove:k}}=l;let P;const N=Rf(t);N&&e!=null&&e.pendingBranch&&(P=e.pendingId,e.deps++);const F=t.props?vu(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve($=!1,G=!1){const{vnode:se,activeBranch:te,pendingBranch:ae,pendingId:ue,effects:ye,parentComponent:Oe,container:be}=R;if(R.isHydrating)R.isHydrating=!1;else if(!$){const ce=te&&ae.transition&&ae.transition.mode==="out-in";ce&&(te.transition.afterLeave=()=>{ue===R.pendingId&&p(ae,be,q,0)});let{anchor:q}=R;te&&(q=_(te),g(te,Oe,R,!0)),ce||p(ae,be,q,0)}rn(R,ae),R.pendingBranch=null,R.isInFallback=!1;let Me=R.parent,nt=!1;for(;Me;){if(Me.pendingBranch){Me.effects.push(...ye),nt=!0;break}Me=Me.parent}nt||gc(ye),R.effects=[],N&&e&&e.pendingBranch&&P===e.pendingId&&(e.deps--,e.deps===0&&!G&&e.resolve()),jn(se,"onResolve")},fallback($){if(!R.pendingBranch)return;const{vnode:G,activeBranch:se,parentComponent:te,container:ae,isSVG:ue}=R;jn(G,"onFallback");const ye=_(se),Oe=()=>{R.isInFallback&&(u(null,$,ae,ye,te,null,ue,a,c),rn(R,$))},be=$.transition&&$.transition.mode==="out-in";be&&(se.transition.afterLeave=Oe),R.isInFallback=!0,g(se,te,null,!0),be||Oe()},move($,G,se){R.activeBranch&&p(R.activeBranch,$,G,se),R.container=$},next(){return R.activeBranch&&_(R.activeBranch)},registerDep($,G){const se=!!R.pendingBranch;se&&R.deps++;const te=$.vnode.el;$.asyncDep.catch(ae=>{Xn(ae,$,0)}).then(ae=>{if($.isUnmounted||R.isUnmounted||R.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:ue}=$;Gs($,ae,!1),te&&(ue.el=te);const ye=!te&&$.subTree.el;G($,ue,v(te||$.subTree.el),te?null:_($.subTree),R,o,c),ye&&k(ye),Pi($,ue.el),se&&--R.deps===0&&R.resolve()})},unmount($,G){R.isUnmounted=!0,R.activeBranch&&g(R.activeBranch,n,$,G),R.pendingBranch&&g(R.pendingBranch,n,$,G)}};return R}function wf(t,e,n,r,s,i,o,a,c){const l=e.suspense=Oi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),f}function If(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=yo(r?n.default:n),t.ssFallback=r?yo(n.fallback):le(Ht)}function yo(t){let e;if(W(t)){const n=ln&&t._c;n&&(t._d=!1,pe()),t=t(),n&&(t._d=!0,e=De,Uc())}return B(t)&&(t=hf(t)),t=Be(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Tf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):gc(t)}function rn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Pi(r,s))}function Rf(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const dr={};function gr(t,e,n){return vc(t,e,n)}function vc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=re){var a;const c=Pu()===((a=_e)==null?void 0:a.scope)?_e:null;let l,f=!1,u=!1;if(we(t)?(l=()=>t.value,f=Pr(t)):en(t)?(l=()=>t,r=!0):B(t)?(u=!0,f=t.some(R=>en(R)||Pr(R)),l=()=>t.map(R=>{if(we(R))return R.value;if(en(R))return Ut(R);if(W(R))return St(R,c,2)})):W(t)?e?l=()=>St(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),je(t,c,3,[g])}:l=He,e&&r){const R=l;l=()=>Ut(R())}let p,g=R=>{p=N.onStop=()=>{St(R,c,4)}},_;if(Wn)if(g=He,e?n&&je(e,c,3,[l(),u?[]:void 0,g]):l(),s==="sync"){const R=gd();_=R.__watcherHandles||(R.__watcherHandles=[])}else return He;let v=u?new Array(t.length).fill(dr):dr;const k=()=>{if(N.active)if(e){const R=N.run();(r||f||(u?R.some(($,G)=>Un($,v[G])):Un(R,v)))&&(p&&p(),je(e,c,3,[R,v===dr?void 0:u&&v[0]===dr?[]:v,g]),v=R)}else N.run()};k.allowRecurse=!!e;let P;s==="sync"?P=k:s==="post"?P=()=>Ae(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),P=()=>Ci(k));const N=new Ei(l,P);e?n?k():v=N.run():s==="post"?Ae(N.run.bind(N),c&&c.suspense):N.run();const F=()=>{N.stop(),c&&c.scope&&gi(c.scope.effects,N)};return _&&_.push(F),F}function Sf(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Ec(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=_e;fn(this);const a=vc(s,i.bind(r),n);return o?fn(o):Bt(),a}function Ec(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ut(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))Ut(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Ut(t[n],e);else if(Wa(t)||Zt(t))t.forEach(n=>{Ut(n,e)});else if(Ka(t))for(const n in t)Ut(t[n],e);return t}function Ws(t,e){const n=xe;if(n===null)return t;const r=rs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Ut(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(yn(),je(c,n,8,[t.el,a,t,e]),bn())}}function ki(t,e){return W(t)?(()=>ge({name:t.name},e,{setup:t}))():t}const _r=t=>!!t.type.__asyncLoader,wc=t=>t.type.__isKeepAlive;function Af(t,e){Ic(t,"a",e)}function Cf(t,e){Ic(t,"da",e)}function Ic(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(es(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wc(s.parent.vnode)&&Pf(r,e,n,s),s=s.parent}}function Pf(t,e,n,r){const s=es(e,t,r,!0);Rc(()=>{gi(r[e],s)},n)}function es(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yn(),fn(n);const a=je(e,n,t,o);return Bt(),bn(),a});return r?s.unshift(i):s.push(i),i}}const ft=t=>(e,n=_e)=>(!Wn||t==="sp")&&es(t,(...r)=>e(...r),n),Of=ft("bm"),Tc=ft("m"),kf=ft("bu"),Nf=ft("u"),xf=ft("bum"),Rc=ft("um"),Df=ft("sp"),Lf=ft("rtg"),Mf=ft("rtc");function Uf(t,e=_e){es("ec",t,e)}const Sc="components";function Ac(t,e){return Bf(Sc,t,!0,e)||t}const Ff=Symbol.for("v-ndc");function Bf(t,e,n=!0,r=!1){const s=xe||_e;if(s){const i=s.type;if(t===Sc){const a=hd(i,!1);if(a&&(a===e||a===Ze(e)||a===Kr(Ze(e))))return i}const o=bo(s[t]||i[t],e)||bo(s.appContext[t],e);return!o&&r?i:o}}function bo(t,e){return t&&(t[e]||t[Ze(e)]||t[Kr(Ze(e))])}function Cc(t,e,n,r){let s;const i=n&&n[r];if(B(t)||de(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Vs=t=>t?$c(t)?rs(t)||t.proxy:Vs(t.parent):null,Nn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vs(t.parent),$root:t=>Vs(t.root),$emit:t=>t.emit,$options:t=>Ni(t),$forceUpdate:t=>t.f||(t.f=()=>Ci(t.update)),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>Sf.bind(t)}),_s=(t,e)=>t!==re&&!t.__isScriptSetup&&K(t,e),$f={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_s(r,e))return o[e]=1,r[e];if(s!==re&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==re&&K(n,e))return o[e]=4,n[e];zs&&(o[e]=0)}}const f=Nn[e];let u,p;if(f)return e==="$attrs"&&Ce(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==re&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _s(s,e)?(s[e]=n,!0):r!==re&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&K(t,o)||_s(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Nn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vo(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zs=!0;function Hf(t){const e=Ni(t),n=t.proxy,r=t.ctx;zs=!1,e.beforeCreate&&Eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:p,beforeUpdate:g,updated:_,activated:v,deactivated:k,beforeDestroy:P,beforeUnmount:N,destroyed:F,unmounted:R,render:$,renderTracked:G,renderTriggered:se,errorCaptured:te,serverPrefetch:ae,expose:ue,inheritAttrs:ye,components:Oe,directives:be,filters:Me}=e;if(l&&jf(l,r,null),o)for(const q in o){const Y=o[q];W(Y)&&(r[q]=Y.bind(n))}if(s){const q=s.call(n,n);ie(q)&&(t.data=Gr(q))}if(zs=!0,i)for(const q in i){const Y=i[q],rt=W(Y)?Y.bind(n,n):W(Y.get)?Y.get.bind(n,n):He,ht=!W(Y)&&W(Y.set)?Y.set.bind(n):He,Ke=Ne({get:rt,set:ht});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Se=>Ke.value=Se})}if(a)for(const q in a)Pc(a[q],r,n,q);if(c){const q=W(c)?c.call(n):c;Reflect.ownKeys(q).forEach(Y=>{yr(Y,q[Y])})}f&&Eo(f,t,"c");function ce(q,Y){B(Y)?Y.forEach(rt=>q(rt.bind(n))):Y&&q(Y.bind(n))}if(ce(Of,u),ce(Tc,p),ce(kf,g),ce(Nf,_),ce(Af,v),ce(Cf,k),ce(Uf,te),ce(Mf,G),ce(Lf,se),ce(xf,N),ce(Rc,R),ce(Df,ae),B(ue))if(ue.length){const q=t.exposed||(t.exposed={});ue.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else t.exposed||(t.exposed={});$&&t.render===He&&(t.render=$),ye!=null&&(t.inheritAttrs=ye),Oe&&(t.components=Oe),be&&(t.directives=be)}function jf(t,e,n=He){B(t)&&(t=Ks(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),we(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eo(t,e,n){je(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pc(t,e,n,r){const s=r.includes(".")?Ec(n,r):()=>n[r];if(de(t)){const i=e[t];W(i)&&gr(s,i)}else if(W(t))gr(s,t.bind(n));else if(ie(t))if(B(t))t.forEach(i=>Pc(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&gr(s,i,t)}}function Ni(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>kr(c,l,o,!0)),kr(c,e,o)),ie(e)&&i.set(e,c),c}function kr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&kr(t,i,n,!0),s&&s.forEach(o=>kr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wf={data:wo,props:Io,emits:Io,methods:Pn,computed:Pn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Pn,directives:Pn,watch:zf,provide:wo,inject:Vf};function wo(t,e){return e?t?function(){return ge(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Vf(t,e){return Pn(Ks(t),Ks(e))}function Ks(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Pn(t,e){return t?ge(Object.create(null),t,e):e}function Io(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ge(Object.create(null),vo(t),vo(e??{})):e}function zf(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=Re(t[r],e[r]);return n}function Oc(){return{app:null,config:{isNativeTag:pu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function qf(t,e){return function(r,s=null){W(r)||(r=ge({},r)),s!=null&&!ie(s)&&(s=null);const i=Oc(),o=new Set;let a=!1;const c=i.app={_uid:Kf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_d,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...f)):W(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const p=le(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,u),a=!0,c._container=l,l.__vue_app__=c,rs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){Nr=c;try{return l()}finally{Nr=null}}};return c}}let Nr=null;function yr(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=_e||xe;if(r||Nr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}function Jf(t,e,n,r=!1){const s={},i={};Cr(i,ns,1),t.propsDefaults=Object.create(null),kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ic(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(Yr(t.emitsOptions,p))continue;const g=e[p];if(c)if(K(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=Ze(p);s[_]=qs(c,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{kc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!K(e,u)&&((f=_n(u))===u||!K(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=qs(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!K(e,u))&&(delete i[u],l=!0)}l&&lt(t,"set","$attrs")}function kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pr(c))continue;const l=e[c];let f;s&&K(s,f=Ze(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||re;for(let f=0;f<i.length;f++){const u=i[f];n[u]=qs(s,c,u,l[u],t,!K(l,u))}}return o}function qs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(fn(s),r=l[n]=c.call(null,e),Bt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===_n(n))&&(r=!0))}return r}function Nc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const f=u=>{c=!0;const[p,g]=Nc(u,e,!0);ge(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ie(t)&&r.set(t,Qt),Qt;if(B(i))for(let f=0;f<i.length;f++){const u=Ze(i[f]);To(u)&&(o[u]=re)}else if(i)for(const f in i){const u=Ze(f);if(To(u)){const p=i[f],g=o[u]=B(p)||W(p)?{type:p}:ge({},p);if(g){const _=Ao(Boolean,g.type),v=Ao(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||K(g,"default"))&&a.push(u)}}}const l=[o,a];return ie(t)&&r.set(t,l),l}function To(t){return t[0]!=="$"}function Ro(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function So(t,e){return Ro(t)===Ro(e)}function Ao(t,e){return B(e)?e.findIndex(n=>So(n,t)):W(e)&&So(e,t)?0:-1}const xc=t=>t[0]==="_"||t==="$stable",xi=t=>B(t)?t.map(Be):[Be(t)],Yf=(t,e,n)=>{if(e._n)return e;const r=nn((...s)=>xi(e(...s)),n);return r._c=!1,r},Dc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xc(s))continue;const i=t[s];if(W(i))e[s]=Yf(s,i,r);else if(i!=null){const o=xi(i);e[s]=()=>o}}},Lc=(t,e)=>{const n=xi(e);t.slots.default=()=>n},Xf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Cr(e,"_",n)):Dc(e,t.slots={})}else t.slots={},e&&Lc(t,e);Cr(t.slots,ns,1)},Qf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dc(e,s)),o=e}else e&&(Lc(t,e),o={default:1});if(i)for(const a in s)!xc(a)&&!(a in o)&&delete s[a]};function Js(t,e,n,r,s=!1){if(B(t)){t.forEach((p,g)=>Js(p,e&&(B(e)?e[g]:e),n,r,s));return}if(_r(r)&&!s)return;const i=r.shapeFlag&4?rs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===re?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(de(l)?(f[l]=null,K(u,l)&&(u[l]=null)):we(l)&&(l.value=null)),W(c))St(c,a,12,[o,f]);else{const p=de(c),g=we(c);if(p||g){const _=()=>{if(t.f){const v=p?K(u,c)?u[c]:f[c]:c.value;s?B(v)&&gi(v,i):B(v)?v.includes(i)||v.push(i):p?(f[c]=[i],K(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(u,c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(_.id=-1,Ae(_,n)):_()}}}const Ae=Tf;function Zf(t){return ed(t)}function ed(t,e){const n=Us();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:p,setScopeId:g=He,insertStaticContent:_}=t,v=(d,h,m,y=null,w=null,I=null,O=!1,S=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!vt(d,h)&&(y=E(d),Se(d,w,I,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:D}=h;switch(T){case ts:k(d,h,m,y);break;case Ht:P(d,h,m,y);break;case ys:d==null&&N(h,m,y,O);break;case ke:Oe(d,h,m,y,w,I,O,S,A);break;default:D&1?$(d,h,m,y,w,I,O,S,A):D&6?be(d,h,m,y,w,I,O,S,A):(D&64||D&128)&&T.process(d,h,m,y,w,I,O,S,A,C)}M!=null&&w&&Js(M,d&&d.ref,I,h||d,!h)},k=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},P=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},N=(d,h,m,y)=>{[d.el,d.anchor]=_(d.children,h,m,y,d.el,d.anchor)},F=({el:d,anchor:h},m,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,y),d=w;r(h,m,y)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},$=(d,h,m,y,w,I,O,S,A)=>{O=O||h.type==="svg",d==null?G(h,m,y,w,I,O,S,A):ae(d,h,w,I,O,S,A)},G=(d,h,m,y,w,I,O,S)=>{let A,T;const{type:M,props:D,shapeFlag:U,transition:j,dirs:V}=d;if(A=d.el=o(d.type,I,D&&D.is,D),U&8?f(A,d.children):U&16&&te(d.children,A,null,y,w,I&&M!=="foreignObject",O,S),V&&Nt(d,null,y,"created"),se(A,d,d.scopeId,O,y),D){for(const Z in D)Z!=="value"&&!pr(Z)&&i(A,Z,null,D[Z],I,d.children,y,w,ve);"value"in D&&i(A,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Je(T,y,d)}V&&Nt(d,null,y,"beforeMount");const ne=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;ne&&j.beforeEnter(A),r(A,h,m),((T=D&&D.onVnodeMounted)||ne||V)&&Ae(()=>{T&&Je(T,y,d),ne&&j.enter(A),V&&Nt(d,null,y,"mounted")},w)},se=(d,h,m,y,w)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(w){let I=w.subTree;if(h===I){const O=w.vnode;se(d,O,O.scopeId,O.slotScopeIds,w.parent)}}},te=(d,h,m,y,w,I,O,S,A=0)=>{for(let T=A;T<d.length;T++){const M=d[T]=S?yt(d[T]):Be(d[T]);v(null,M,h,m,y,w,I,O,S)}},ae=(d,h,m,y,w,I,O)=>{const S=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:M}=h;A|=d.patchFlag&16;const D=d.props||re,U=h.props||re;let j;m&&xt(m,!1),(j=U.onVnodeBeforeUpdate)&&Je(j,m,h,d),M&&Nt(h,d,m,"beforeUpdate"),m&&xt(m,!0);const V=w&&h.type!=="foreignObject";if(T?ue(d.dynamicChildren,T,S,m,y,V,I):O||Y(d,h,S,null,m,y,V,I,!1),A>0){if(A&16)ye(S,h,D,U,m,y,w);else if(A&2&&D.class!==U.class&&i(S,"class",null,U.class,w),A&4&&i(S,"style",D.style,U.style,w),A&8){const ne=h.dynamicProps;for(let Z=0;Z<ne.length;Z++){const fe=ne[Z],Ue=D[fe],qt=U[fe];(qt!==Ue||fe==="value")&&i(S,fe,Ue,qt,w,d.children,m,y,ve)}}A&1&&d.children!==h.children&&f(S,h.children)}else!O&&T==null&&ye(S,h,D,U,m,y,w);((j=U.onVnodeUpdated)||M)&&Ae(()=>{j&&Je(j,m,h,d),M&&Nt(h,d,m,"updated")},y)},ue=(d,h,m,y,w,I,O)=>{for(let S=0;S<h.length;S++){const A=d[S],T=h[S],M=A.el&&(A.type===ke||!vt(A,T)||A.shapeFlag&70)?u(A.el):m;v(A,T,M,null,y,w,I,O,!0)}},ye=(d,h,m,y,w,I,O)=>{if(m!==y){if(m!==re)for(const S in m)!pr(S)&&!(S in y)&&i(d,S,m[S],null,O,h.children,w,I,ve);for(const S in y){if(pr(S))continue;const A=y[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,O,h.children,w,I,ve)}"value"in y&&i(d,"value",m.value,y.value)}},Oe=(d,h,m,y,w,I,O,S,A)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=h;j&&(S=S?S.concat(j):j),d==null?(r(T,m,y),r(M,m,y),te(h.children,m,M,w,I,O,S,A)):D>0&&D&64&&U&&d.dynamicChildren?(ue(d.dynamicChildren,U,m,w,I,O,S),(h.key!=null||w&&h===w.subTree)&&Mc(d,h,!0)):Y(d,h,m,M,w,I,O,S,A)},be=(d,h,m,y,w,I,O,S,A)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,y,O,A):Me(h,m,y,w,I,O,A):nt(d,h,A)},Me=(d,h,m,y,w,I,O)=>{const S=d.component=cd(d,y,w);if(wc(d)&&(S.ctx.renderer=C),ld(S),S.asyncDep){if(w&&w.registerDep(S,ce),!d.el){const A=S.subTree=le(Ht);P(null,A,h,m)}return}ce(S,d,h,m,w,I,O)},nt=(d,h,m)=>{const y=h.component=d.component;if(gf(d,h,m))if(y.asyncDep&&!y.asyncResolved){q(y,h,m);return}else y.next=h,uf(y.update),y.update();else h.el=d.el,y.vnode=h},ce=(d,h,m,y,w,I,O)=>{const S=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:j,vnode:V}=d,ne=M,Z;xt(d,!1),M?(M.el=V.el,q(d,M,O)):M=V,D&&mr(D),(Z=M.props&&M.props.onVnodeBeforeUpdate)&&Je(Z,j,M,V),xt(d,!0);const fe=gs(d),Ue=d.subTree;d.subTree=fe,v(Ue,fe,u(Ue.el),E(Ue),d,w,I),M.el=fe.el,ne===null&&Pi(d,fe.el),U&&Ae(U,w),(Z=M.props&&M.props.onVnodeUpdated)&&Ae(()=>Je(Z,j,M,V),w)}else{let M;const{el:D,props:U}=h,{bm:j,m:V,parent:ne}=d,Z=_r(h);if(xt(d,!1),j&&mr(j),!Z&&(M=U&&U.onVnodeBeforeMount)&&Je(M,ne,h),xt(d,!0),D&&X){const fe=()=>{d.subTree=gs(d),X(D,d.subTree,d,w,null)};Z?h.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=gs(d);v(null,fe,m,y,d,w,I),h.el=fe.el}if(V&&Ae(V,w),!Z&&(M=U&&U.onVnodeMounted)){const fe=h;Ae(()=>Je(M,ne,fe),w)}(h.shapeFlag&256||ne&&_r(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Ae(d.a,w),d.isMounted=!0,h=m=y=null}},A=d.effect=new Ei(S,()=>Ci(T),d.scope),T=d.update=()=>A.run();T.id=d.uid,xt(d,!0),T()},q=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Gf(d,h.props,y,m),Qf(d,h.children,m),yn(),go(),bn()},Y=(d,h,m,y,w,I,O,S,A=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){ht(T,D,m,y,w,I,O,S,A);return}else if(U&256){rt(T,D,m,y,w,I,O,S,A);return}}j&8?(M&16&&ve(T,w,I),D!==T&&f(m,D)):M&16?j&16?ht(T,D,m,y,w,I,O,S,A):ve(T,w,I,!0):(M&8&&f(m,""),j&16&&te(D,m,y,w,I,O,S,A))},rt=(d,h,m,y,w,I,O,S,A)=>{d=d||Qt,h=h||Qt;const T=d.length,M=h.length,D=Math.min(T,M);let U;for(U=0;U<D;U++){const j=h[U]=A?yt(h[U]):Be(h[U]);v(d[U],j,m,null,w,I,O,S,A)}T>M?ve(d,w,I,!0,!1,D):te(h,m,y,w,I,O,S,A,D)},ht=(d,h,m,y,w,I,O,S,A)=>{let T=0;const M=h.length;let D=d.length-1,U=M-1;for(;T<=D&&T<=U;){const j=d[T],V=h[T]=A?yt(h[T]):Be(h[T]);if(vt(j,V))v(j,V,m,null,w,I,O,S,A);else break;T++}for(;T<=D&&T<=U;){const j=d[D],V=h[U]=A?yt(h[U]):Be(h[U]);if(vt(j,V))v(j,V,m,null,w,I,O,S,A);else break;D--,U--}if(T>D){if(T<=U){const j=U+1,V=j<M?h[j].el:y;for(;T<=U;)v(null,h[T]=A?yt(h[T]):Be(h[T]),m,V,w,I,O,S,A),T++}}else if(T>U)for(;T<=D;)Se(d[T],w,I,!0),T++;else{const j=T,V=T,ne=new Map;for(T=V;T<=U;T++){const Pe=h[T]=A?yt(h[T]):Be(h[T]);Pe.key!=null&&ne.set(Pe.key,T)}let Z,fe=0;const Ue=U-V+1;let qt=!1,so=0;const Tn=new Array(Ue);for(T=0;T<Ue;T++)Tn[T]=0;for(T=j;T<=D;T++){const Pe=d[T];if(fe>=Ue){Se(Pe,w,I,!0);continue}let qe;if(Pe.key!=null)qe=ne.get(Pe.key);else for(Z=V;Z<=U;Z++)if(Tn[Z-V]===0&&vt(Pe,h[Z])){qe=Z;break}qe===void 0?Se(Pe,w,I,!0):(Tn[qe-V]=T+1,qe>=so?so=qe:qt=!0,v(Pe,h[qe],m,null,w,I,O,S,A),fe++)}const io=qt?td(Tn):Qt;for(Z=io.length-1,T=Ue-1;T>=0;T--){const Pe=V+T,qe=h[Pe],oo=Pe+1<M?h[Pe+1].el:y;Tn[T]===0?v(null,qe,m,oo,w,I,O,S,A):qt&&(Z<0||T!==io[Z]?Ke(qe,m,oo,2):Z--)}}},Ke=(d,h,m,y,w=null)=>{const{el:I,type:O,transition:S,children:A,shapeFlag:T}=d;if(T&6){Ke(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){O.move(d,h,m,C);return}if(O===ke){r(I,h,m);for(let D=0;D<A.length;D++)Ke(A[D],h,m,y);r(d.anchor,h,m);return}if(O===ys){F(d,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Ae(()=>S.enter(I),w);else{const{leave:D,delayLeave:U,afterLeave:j}=S,V=()=>r(I,h,m),ne=()=>{D(I,()=>{V(),j&&j()})};U?U(I,V,ne):ne()}else r(I,h,m)},Se=(d,h,m,y=!1,w=!1)=>{const{type:I,props:O,ref:S,children:A,dynamicChildren:T,shapeFlag:M,patchFlag:D,dirs:U}=d;if(S!=null&&Js(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const j=M&1&&U,V=!_r(d);let ne;if(V&&(ne=O&&O.onVnodeBeforeUnmount)&&Je(ne,h,d),M&6)or(d.component,m,y);else{if(M&128){d.suspense.unmount(m,y);return}j&&Nt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,w,C,y):T&&(I!==ke||D>0&&D&64)?ve(T,h,m,!1,!0):(I===ke&&D&384||!w&&M&16)&&ve(A,h,m),y&&zt(d)}(V&&(ne=O&&O.onVnodeUnmounted)||j)&&Ae(()=>{ne&&Je(ne,h,d),j&&Nt(d,null,h,"unmounted")},m)},zt=d=>{const{type:h,el:m,anchor:y,transition:w}=d;if(h===ke){Kt(m,y);return}if(h===ys){R(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:S}=w,A=()=>O(m,I);S?S(d.el,I,A):A()}else I()},Kt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},or=(d,h,m)=>{const{bum:y,scope:w,update:I,subTree:O,um:S}=d;y&&mr(y),w.stop(),I&&(I.active=!1,Se(O,d,h,m)),S&&Ae(S,h),Ae(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ve=(d,h,m,y=!1,w=!1,I=0)=>{for(let O=I;O<d.length;O++)Se(d[O],h,m,y,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):v(h._vnode||null,d,h,null,null,null,m),go(),_c(),h._vnode=d},C={p:v,um:Se,m:Ke,r:zt,mt:Me,mc:te,pc:Y,pbc:ue,n:E,o:t};let L,X;return e&&([L,X]=e(C)),{render:x,hydrate:L,createApp:qf(x,L)}}function xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yt(s[i]),a.el=o.el),n||Mc(o,a)),a.type===ts&&(a.el=o.el)}}function td(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nd=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),ts=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),ys=Symbol.for("v-stc"),xn=[];let De=null;function pe(t=!1){xn.push(De=t?null:[])}function Uc(){xn.pop(),De=xn[xn.length-1]||null}let ln=1;function Co(t){ln+=t}function Fc(t){return t.dynamicChildren=ln>0?De||Qt:null,Uc(),ln>0&&De&&De.push(t),t}function Ie(t,e,n,r,s,i){return Fc(oe(t,e,n,r,s,i,!0))}function Po(t,e,n,r,s){return Fc(le(t,e,n,r,s,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function vt(t,e){return t.type===e.type&&t.key===e.key}const ns="__vInternal",Bc=({key:t})=>t??null,br=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||we(t)||W(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bc(e),ref:e&&br(e),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(Di(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ln>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const le=rd;function rd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ff)&&(t=Ht),xr(t)){const a=un(t,e,!0);return n&&Di(a,n),ln>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(t)]=a:De.push(a)),a.patchFlag|=-2,a}if(pd(t)&&(t=t.__vccOpts),e){e=sd(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=qr(a)),ie(c)&&(ac(c)&&!B(c)&&(c=ge({},c)),e.style=bi(c))}const o=de(t)?1:_f(t)?128:nd(t)?64:ie(t)?4:W(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function sd(t){return t?ac(t)||ns in t?ge({},t):t:null}function un(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?id(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bc(a),ref:e&&e.ref?n&&s?B(s)?s.concat(br(e)):[s,br(e)]:br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vr(t=" ",e=0){return le(ts,null,t,e)}function Be(t){return t==null||typeof t=="boolean"?le(Ht):B(t)?le(ke,null,t.slice()):typeof t=="object"?yt(t):le(ts,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function Di(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Di(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ns in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function id(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qr([e.class,r.class]));else if(s==="style")e.style=bi([e.style,r.style]);else if(Wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Je(t,e,n,r=null){je(t,e,7,[n,r])}const od=Oc();let ad=0;function cd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||od,i={uid:ad++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:bc(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=df.bind(null,i),t.ce&&t.ce(i),i}let _e=null,Li,Jt,Oo="__VUE_INSTANCE_SETTERS__";(Jt=Us()[Oo])||(Jt=Us()[Oo]=[]),Jt.push(t=>_e=t),Li=t=>{Jt.length>1?Jt.forEach(e=>e(t)):Jt[0](t)};const fn=t=>{Li(t),t.scope.on()},Bt=()=>{_e&&_e.scope.off(),Li(null)};function $c(t){return t.vnode.shapeFlag&4}let Wn=!1;function ld(t,e=!1){Wn=e;const{props:n,children:r}=t.vnode,s=$c(t);Jf(t,n,s,e),Xf(t,r);const i=s?ud(t,e):void 0;return Wn=!1,i}function ud(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cc(new Proxy(t.ctx,$f));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?dd(t):null;fn(t),yn();const i=St(r,t,0,[t.props,s]);if(bn(),Bt(),Va(i)){if(i.then(Bt,Bt),e)return i.then(o=>{Gs(t,o,e)}).catch(o=>{Xn(o,t,0)});t.asyncDep=i}else Gs(t,i,e)}else Hc(t,e)}function Gs(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=dc(e)),Hc(t,n)}let ko;function Hc(t,e,n){const r=t.type;if(!t.render){if(!e&&ko&&!r.render){const s=r.template||Ni(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=ko(s,l)}}t.render=r.render||He}fn(t),yn(),Hf(t),bn(),Bt()}function fd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ce(t,"get","$attrs"),e[n]}}))}function dd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fd(t)},slots:t.slots,emit:t.emit,expose:e}}function rs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(cc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nn)return Nn[n](t)},has(e,n){return n in e||n in Nn}}))}function hd(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function pd(t){return W(t)&&"__vccOpts"in t}const Ne=(t,e)=>af(t,e,Wn);function jc(t,e,n){const r=arguments.length;return r===2?ie(e)&&!B(e)?xr(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xr(n)&&(n=[n]),le(t,e,n))}const md=Symbol.for("v-scx"),gd=()=>We(md),_d="3.3.4",yd="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,No=Mt&&Mt.createElement("template"),bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Mt.createElementNS(yd,t):Mt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mt.createTextNode(t),createComment:t=>Mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=r?`<svg>${t}</svg>`:t;const a=No.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ed(t,e,n){const r=t.style,s=de(n);if(n&&!s){if(e&&!de(e))for(const i in e)n[i]==null&&Ys(r,i,"");for(const i in n)Ys(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const xo=/\s*!important$/;function Ys(t,e,n){if(B(n))n.forEach(r=>Ys(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wd(t,e);xo.test(n)?t.setProperty(_n(r),n.replace(xo,""),"important"):t[r]=n}}const Do=["Webkit","Moz","ms"],bs={};function wd(t,e){const n=bs[e];if(n)return n;let r=Ze(e);if(r!=="filter"&&r in t)return bs[e]=r;r=Kr(r);for(let s=0;s<Do.length;s++){const i=Do[s]+r;if(i in t)return bs[e]=i}return e}const Lo="http://www.w3.org/1999/xlink";function Id(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lo,e.slice(6,e.length)):t.setAttributeNS(Lo,e,n);else{const i=Su(e);n==null||i&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Td(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Gt(t,e,n,r){t.addEventListener(e,n,r)}function Rd(t,e,n,r){t.removeEventListener(e,n,r)}function Sd(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Ad(e);if(r){const l=i[e]=Od(r,s);Gt(t,a,l,c)}else o&&(Rd(t,a,o,c),i[e]=void 0)}}const Mo=/(?:Once|Passive|Capture)$/;function Ad(t){let e;if(Mo.test(t)){e={};let r;for(;r=t.match(Mo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let vs=0;const Cd=Promise.resolve(),Pd=()=>vs||(Cd.then(()=>vs=0),vs=Date.now());function Od(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(kd(r,n.value),e,5,[r])};return n.value=t,n.attached=Pd(),n}function kd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uo=/^on[a-z]/,Nd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?vd(t,r,s):e==="style"?Ed(t,n,r):Wr(e)?mi(e)||Sd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xd(t,e,r,s))?Td(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Id(t,e,r,s))};function xd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uo.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uo.test(e)&&de(n)?!1:e in t}const Fo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>mr(e,n):e};function Dd(t){t.target.composing=!0}function Bo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $o={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Fo(s);const i=r||s.props&&s.props.type==="number";Gt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ms(a)),t._assign(a)}),n&&Gt(t,"change",()=>{t.value=t.value.trim()}),e||(Gt(t,"compositionstart",Dd),Gt(t,"compositionend",Bo),Gt(t,"change",Bo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Fo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ms(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ld=["ctrl","shift","alt","meta"],Md={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ld.some(n=>t[`${n}Key`]&&!e.includes(n))},Ud=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Md[e[s]];if(i&&i(n,e))return}return t(n,...r)},Fd={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Rn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Rn(t,!0),r.enter(t)):r.leave(t,()=>{Rn(t,!1)}):Rn(t,e))},beforeUnmount(t,{value:e}){Rn(t,e)}};function Rn(t,e){t.style.display=e?t._vod:"none"}const Bd=ge({patchProp:Nd},bd);let Ho;function $d(){return Ho||(Ho=Zf(Bd))}const Hd=(...t)=>{const e=$d().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jd(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jd(t){return de(t)?document.querySelector(t):t}const Wd="modulepreload",Vd=function(t){return"/finalvue/"+t},jo={},zd=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Vd(i),i in jo)return;jo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const u=s[f];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Wd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,u)=>{l.addEventListener("load",f),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window<"u";function Kd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Es(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ve(s)?s.map(t):t(s)}return n}const Dn=()=>{},Ve=Array.isArray,qd=/\/$/,Jd=t=>t.replace(qd,"");function ws(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Qd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Gd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&dn(e.matched[r],n.matched[s])&&Wc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xd(t[n],e[n]))return!1;return!0}function Xd(t,e){return Ve(t)?Vo(t,e):Ve(e)?Vo(e,t):t===e}function Vo(t,e){return Ve(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Qd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var Ln;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ln||(Ln={}));function Zd(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jd(t)}const eh=/^[^#]+#/;function th(t,e){return t.replace(eh,"#")+e}function nh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ss=()=>({left:window.pageXOffset,top:window.pageYOffset});function rh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=nh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zo(t,e){return(history.state?history.state.position-e:-1)+t}const Xs=new Map;function sh(t,e){Xs.set(t,e)}function ih(t){const e=Xs.get(t);return Xs.delete(t),e}let oh=()=>location.protocol+"//"+location.host;function Vc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wo(c,"")}return Wo(n,t)+r+s}function ah(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Vc(t,location),_=n.value,v=e.value;let k=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}k=v?p.position-v.position:0}else r(g);s.forEach(P=>{P(n.value,_,{delta:k,type:Vn.pop,direction:k?k>0?Ln.forward:Ln.back:Ln.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:ss()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function Ko(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ss():null}}function ch(t){const{history:e,location:n}=window,r={value:Vc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:oh()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,Ko(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:ss()});i(f.current,f,!0);const u=Q({},Ko(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function lh(t){t=Zd(t);const e=ch(t),n=ah(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:th.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uh(t){return typeof t=="string"||t&&typeof t=="object"}function zc(t){return typeof t=="string"||typeof t=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kc=Symbol("");var qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qo||(qo={}));function hn(t,e){return Q(new Error,{type:t,[Kc]:!0},e)}function st(t,e){return t instanceof Error&&Kc in t&&(e==null||!!(t.type&e))}const Jo="[^/]+?",fh={sensitive:!1,strict:!1,start:!0,end:!0},dh=/[.+*?^${}()[\]/\\]/g;function hh(t,e){const n=Q({},fh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const p=l[u];let g=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(dh,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:v,optional:k,regexp:P}=p;i.push({name:_,repeatable:v,optional:k});const N=P||Jo;if(N!==Jo){g+=10;try{new RegExp(`(${N})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+R.message)}}let F=v?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;u||(F=k&&l.length<2?`(?:/${F})`:"/"+F),k&&(F+="?"),s+=F,g+=20,k&&(g+=-8),v&&(g+=-20),N===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",_=i[p-1];u[_.name]=g&&_.repeatable?g.split("/"):g}return u}function c(l){let f="",u=!1;for(const p of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:k}=g,P=_ in l?l[_]:"";if(Ve(P)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=Ve(P)?P.join("/"):P;if(!N)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ph(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ph(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Go(r))return 1;if(Go(s))return-1}return s.length-r.length}function Go(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gh={type:0,value:""},_h=/[a-zA-Z0-9_]/;function yh(t){if(!t)return[[]];if(t==="/")return[[gh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:_h.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function bh(t,e,n){const r=hh(yh(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vh(t,e){const n=[],r=new Map;e=Qo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,p){const g=!p,_=Eh(f);_.aliasOf=p&&p.record;const v=Qo(e,f),k=[_];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of F)k.push(Q({},_,{components:p?p.record.components:_.components,path:R,aliasOf:p?p.record:_}))}let P,N;for(const F of k){const{path:R}=F;if(u&&R[0]!=="/"){const $=u.record.path,G=$[$.length-1]==="/"?"":"/";F.path=u.record.path+(R&&G+R)}if(P=bh(F,u,v),p?p.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),g&&f.name&&!Xo(P)&&o(f.name)),_.children){const $=_.children;for(let G=0;G<$.length;G++)i($[G],P,p&&p.children[G])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return N?()=>{o(N)}:Dn}function o(f){if(zc(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&mh(f,n[u])>=0&&(f.record.path!==n[u].record.path||!qc(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Xo(f)&&r.set(f.record.name,f)}function l(f,u){let p,g={},_,v;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw hn(1,{location:f});v=p.record.name,g=Q(Yo(u.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),f.params&&Yo(f.params,p.keys.map(N=>N.name))),_=p.stringify(g)}else if("path"in f)_=f.path,p=n.find(N=>N.re.test(_)),p&&(g=p.parse(_),v=p.record.name);else{if(p=u.name?r.get(u.name):n.find(N=>N.re.test(u.path)),!p)throw hn(1,{location:f,currentLocation:u});v=p.record.name,g=Q({},u.params,f.params),_=p.stringify(g)}const k=[];let P=p;for(;P;)k.unshift(P.record),P=P.parent;return{name:v,path:_,params:g,matched:k,meta:Ih(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Eh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ih(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Qo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qc(t,e){return e.children.some(n=>n===t||qc(t,n))}const Jc=/#/g,Th=/&/g,Rh=/\//g,Sh=/=/g,Ah=/\?/g,Gc=/\+/g,Ch=/%5B/g,Ph=/%5D/g,Yc=/%5E/g,Oh=/%60/g,Xc=/%7B/g,kh=/%7C/g,Qc=/%7D/g,Nh=/%20/g;function Mi(t){return encodeURI(""+t).replace(kh,"|").replace(Ch,"[").replace(Ph,"]")}function xh(t){return Mi(t).replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function Qs(t){return Mi(t).replace(Gc,"%2B").replace(Nh,"+").replace(Jc,"%23").replace(Th,"%26").replace(Oh,"`").replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function Dh(t){return Qs(t).replace(Sh,"%3D")}function Lh(t){return Mi(t).replace(Jc,"%23").replace(Ah,"%3F")}function Mh(t){return t==null?"":Lh(t).replace(Rh,"%2F")}function Dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Uh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gc," "),o=i.indexOf("="),a=Dr(o<0?i:i.slice(0,o)),c=o<0?null:Dr(i.slice(o+1));if(a in e){let l=e[a];Ve(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Zo(t){let e="";for(let n in t){const r=t[n];if(n=Dh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&Qs(i)):[r&&Qs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Fh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Bh=Symbol(""),ea=Symbol(""),is=Symbol(""),Ui=Symbol(""),Zs=Symbol("");function Sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(hn(4,{from:n,to:e})):u instanceof Error?a(u):uh(u)?a(hn(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function Is(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if($h(a)){const l=(a.__vccOpts||a)[e];l&&s.push(bt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Kd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&bt(p,n,r,i,o)()}))}}return s}function $h(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ta(t){const e=We(is),n=We(Ui),r=Ne(()=>e.resolve(me(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const p=u.findIndex(dn.bind(null,f));if(p>-1)return p;const g=na(c[l-2]);return l>1&&na(f)===g&&u[u.length-1].path!==g?u.findIndex(dn.bind(null,c[l-2])):p}),i=Ne(()=>s.value>-1&&Vh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Wc(n.params,r.value.params));function a(c={}){return Wh(c)?e[me(t.replace)?"replace":"push"](me(t.to)).catch(Dn):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Hh=ki({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ta,setup(t,{slots:e}){const n=Gr(ta(t)),{options:r}=We(is),s=Ne(()=>({[ra(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ra(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jh=Hh;function Wh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Vh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function na(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ra=(t,e,n)=>t??e??n,zh=ki({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(Zs),s=Ne(()=>t.route||r.value),i=We(ea,0),o=Ne(()=>{let l=me(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);yr(ea,Ne(()=>o.value+1)),yr(Bh,a),yr(Zs,s);const c=et();return gr(()=>[c.value,a.value,t.name],([l,f,u],[p,g,_])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!dn(f,g)||!p)&&(f.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,p=u&&u.components[f];if(!p)return sa(n.default,{Component:p,route:l});const g=u.props[f],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=jc(p,Q({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return sa(n.default,{Component:k,route:l})||k}}});function sa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kh=zh;function qh(t){const e=vh(t.routes,t),n=t.parseQuery||Uh,r=t.stringifyQuery||Zo,s=t.history,i=Sn(),o=Sn(),a=Sn(),c=nf(mt);let l=mt;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Es.bind(null,E=>""+E),u=Es.bind(null,Mh),p=Es.bind(null,Dr);function g(E,x){let C,L;return zc(E)?(C=e.getRecordMatcher(E),L=x):L=E,e.addRoute(L,C)}function _(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function P(E,x){if(x=Q({},x||c.value),typeof E=="string"){const m=ws(n,E,x.path),y=e.resolve({path:m.path},x),w=s.createHref(m.fullPath);return Q(m,y,{params:p(y.params),hash:Dr(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in E)C=Q({},E,{path:ws(n,E.path,x.path).path});else{const m=Q({},E.params);for(const y in m)m[y]==null&&delete m[y];C=Q({},E,{params:u(m)}),x.params=u(x.params)}const L=e.resolve(C,x),X=E.hash||"";L.params=f(p(L.params));const d=Gd(r,Q({},E,{hash:xh(X),path:L.path})),h=s.createHref(d);return Q({fullPath:d,hash:X,query:r===Zo?Fh(E.query):E.query||{}},L,{redirectedFrom:void 0,href:h})}function N(E){return typeof E=="string"?ws(n,E,c.value.path):Q({},E)}function F(E,x){if(l!==E)return hn(8,{from:x,to:E})}function R(E){return se(E)}function $(E){return R(Q(N(E),{replace:!0}))}function G(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:C}=x;let L=typeof C=="function"?C(E):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=N(L):{path:L},L.params={}),Q({query:E.query,hash:E.hash,params:"path"in L?{}:E.params},L)}}function se(E,x){const C=l=P(E),L=c.value,X=E.state,d=E.force,h=E.replace===!0,m=G(C);if(m)return se(Q(N(m),{state:typeof m=="object"?Q({},X,m.state):X,force:d,replace:h}),x||C);const y=C;y.redirectedFrom=x;let w;return!d&&Yd(r,L,C)&&(w=hn(16,{to:y,from:L}),Ke(L,L,!0,!1)),(w?Promise.resolve(w):ue(y,L)).catch(I=>st(I)?st(I,2)?I:ht(I):Y(I,y,L)).then(I=>{if(I){if(st(I,2))return se(Q({replace:h},N(I.to),{state:typeof I.to=="object"?Q({},X,I.to.state):X,force:d}),x||y)}else I=Oe(y,L,!0,h,X);return ye(y,L,I),I})}function te(E,x){const C=F(E,x);return C?Promise.reject(C):Promise.resolve()}function ae(E){const x=Kt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function ue(E,x){let C;const[L,X,d]=Jh(E,x);C=Is(L.reverse(),"beforeRouteLeave",E,x);for(const m of L)m.leaveGuards.forEach(y=>{C.push(bt(y,E,x))});const h=te.bind(null,E,x);return C.push(h),ve(C).then(()=>{C=[];for(const m of i.list())C.push(bt(m,E,x));return C.push(h),ve(C)}).then(()=>{C=Is(X,"beforeRouteUpdate",E,x);for(const m of X)m.updateGuards.forEach(y=>{C.push(bt(y,E,x))});return C.push(h),ve(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(Ve(m.beforeEnter))for(const y of m.beforeEnter)C.push(bt(y,E,x));else C.push(bt(m.beforeEnter,E,x));return C.push(h),ve(C)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),C=Is(d,"beforeRouteEnter",E,x),C.push(h),ve(C))).then(()=>{C=[];for(const m of o.list())C.push(bt(m,E,x));return C.push(h),ve(C)}).catch(m=>st(m,8)?m:Promise.reject(m))}function ye(E,x,C){a.list().forEach(L=>ae(()=>L(E,x,C)))}function Oe(E,x,C,L,X){const d=F(E,x);if(d)return d;const h=x===mt,m=Yt?history.state:{};C&&(L||h?s.replace(E.fullPath,Q({scroll:h&&m&&m.scroll},X)):s.push(E.fullPath,X)),c.value=E,Ke(E,x,C,h),ht()}let be;function Me(){be||(be=s.listen((E,x,C)=>{if(!or.listening)return;const L=P(E),X=G(L);if(X){se(Q(X,{replace:!0}),L).catch(Dn);return}l=L;const d=c.value;Yt&&sh(zo(d.fullPath,C.delta),ss()),ue(L,d).catch(h=>st(h,12)?h:st(h,2)?(se(h.to,L).then(m=>{st(m,20)&&!C.delta&&C.type===Vn.pop&&s.go(-1,!1)}).catch(Dn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(h,L,d))).then(h=>{h=h||Oe(L,d,!1),h&&(C.delta&&!st(h,8)?s.go(-C.delta,!1):C.type===Vn.pop&&st(h,20)&&s.go(-1,!1)),ye(L,d,h)}).catch(Dn)}))}let nt=Sn(),ce=Sn(),q;function Y(E,x,C){ht(E);const L=ce.list();return L.length?L.forEach(X=>X(E,x,C)):console.error(E),Promise.reject(E)}function rt(){return q&&c.value!==mt?Promise.resolve():new Promise((E,x)=>{nt.add([E,x])})}function ht(E){return q||(q=!E,Me(),nt.list().forEach(([x,C])=>E?C(E):x()),nt.reset()),E}function Ke(E,x,C,L){const{scrollBehavior:X}=t;if(!Yt||!X)return Promise.resolve();const d=!C&&ih(zo(E.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return pc().then(()=>X(E,x,d)).then(h=>h&&rh(h)).catch(h=>Y(h,E,x))}const Se=E=>s.go(E);let zt;const Kt=new Set,or={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:k,getRoutes:v,resolve:P,options:t,push:R,replace:$,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:rt,install(E){const x=this;E.component("RouterLink",jh),E.component("RouterView",Kh),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>me(c)}),Yt&&!zt&&c.value===mt&&(zt=!0,R(s.location).catch(X=>{}));const C={};for(const X in mt)Object.defineProperty(C,X,{get:()=>c.value[X],enumerable:!0});E.provide(is,x),E.provide(Ui,ic(C)),E.provide(Zs,c);const L=E.unmount;Kt.add(E),E.unmount=function(){Kt.delete(E),Kt.size<1&&(l=mt,be&&be(),be=null,c.value=mt,zt=!1,q=!1),L()}}};function ve(E){return E.reduce((x,C)=>x.then(()=>ae(C)),Promise.resolve())}return or}function Jh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>dn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>dn(l,c))||s.push(c))}return[n,r,s]}function Gh(){return We(is)}function Yh(){return We(Ui)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},el={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[f],n[u],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new Qh;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const _=l<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zh=function(t){const e=Zc(t);return el.encodeByteArray(e,!0)},tl=function(t){return Zh(t).replace(/\./g,"")},nl=function(t){try{return el.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=()=>ep().__FIREBASE_DEFAULTS__,np=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nl(t[1]);return e&&JSON.parse(e)},Fi=()=>{try{return tp()||np()||rp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sp=t=>{var e,n;return(n=(e=Fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rl=()=>{var t;return(t=Fi())===null||t===void 0?void 0:t.config},sl=t=>{var e;return(e=Fi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function op(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function ap(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lp(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function up(){try{return typeof indexedDB=="object"}catch{return!1}}function fp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dp,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function hp(t,e){return t.replace(pp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pp=/\{\$([^}]+)}/g;function mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ia(i)&&ia(o)){if(!Lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ia(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function On(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gp(t,e){const n=new _p(t,e);return n.subscribe.bind(n)}class _p{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ts),s.error===void 0&&(s.error=Ts),s.complete===void 0&&(s.complete=Ts);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ts(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ip;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ep(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vp(t){return t===Dt?void 0:t}function Ep(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ip={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Tp=ee.INFO,Rp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Sp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=Tp,this._logHandler=Sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ip[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Ap=(t,e)=>e.some(n=>t instanceof n);let oa,aa;function Cp(){return oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pp(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,ei=new WeakMap,al=new WeakMap,Rs=new WeakMap,Bi=new WeakMap;function Op(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ol.set(n,t)}).catch(()=>{}),Bi.set(e,t),e}function kp(t){if(ei.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ei.set(t,e)}let ti={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||al.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Np(t){ti=t(ti)}function xp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ss(this),e,...n);return al.set(r,e.sort?e.sort():[e]),At(r)}:Pp().includes(t)?function(...e){return t.apply(Ss(this),e),At(ol.get(this))}:function(...e){return At(t.apply(Ss(this),e))}}function Dp(t){return typeof t=="function"?xp(t):(t instanceof IDBTransaction&&kp(t),Ap(t,Cp())?new Proxy(t,ti):t)}function At(t){if(t instanceof IDBRequest)return Op(t);if(Rs.has(t))return Rs.get(t);const e=Dp(t);return e!==t&&(Rs.set(t,e),Bi.set(e,t)),e}const Ss=t=>Bi.get(t);function Lp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return r&&o.addEventListener("upgradeneeded",c=>{r(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Mp=["get","getKey","getAll","getAllKeys","count"],Up=["put","add","delete","clear"],As=new Map;function ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Up.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return As.set(e,i),i}Np(t=>({...t,get:(e,n,r)=>ca(e,n)||t.get(e,n,r),has:(e,n)=>!!ca(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ni="@firebase/app",la="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new il("@firebase/app"),$p="@firebase/app-compat",Hp="@firebase/analytics-compat",jp="@firebase/analytics",Wp="@firebase/app-check-compat",Vp="@firebase/app-check",zp="@firebase/auth",Kp="@firebase/auth-compat",qp="@firebase/database",Jp="@firebase/database-compat",Gp="@firebase/functions",Yp="@firebase/functions-compat",Xp="@firebase/installations",Qp="@firebase/installations-compat",Zp="@firebase/messaging",em="@firebase/messaging-compat",tm="@firebase/performance",nm="@firebase/performance-compat",rm="@firebase/remote-config",sm="@firebase/remote-config-compat",im="@firebase/storage",om="@firebase/storage-compat",am="@firebase/firestore",cm="@firebase/firestore-compat",lm="firebase",um="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]",fm={[ni]:"fire-core",[$p]:"fire-core-compat",[jp]:"fire-analytics",[Hp]:"fire-analytics-compat",[Vp]:"fire-app-check",[Wp]:"fire-app-check-compat",[zp]:"fire-auth",[Kp]:"fire-auth-compat",[qp]:"fire-rtdb",[Jp]:"fire-rtdb-compat",[Gp]:"fire-fn",[Yp]:"fire-fn-compat",[Xp]:"fire-iid",[Qp]:"fire-iid-compat",[Zp]:"fire-fcm",[em]:"fire-fcm-compat",[tm]:"fire-perf",[nm]:"fire-perf-compat",[rm]:"fire-rc",[sm]:"fire-rc-compat",[im]:"fire-gcs",[om]:"fire-gcs-compat",[am]:"fire-fst",[cm]:"fire-fst-compat","fire-js":"fire-js",[lm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Map,si=new Map;function dm(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(si.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,t);for(const n of Mr.values())dm(n,t);return!0}function cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new Qn("app","Firebase",hm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=um;function ll(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ri,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(n||(n=rl()),!n)throw Ct.create("no-options");const i=Mr.get(s);if(i){if(Lr(n,i.options)&&Lr(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new wp(s);for(const c of si.values())o.addComponent(c);const a=new pm(n,r,o);return Mr.set(s,a),a}function mm(t=ri){const e=Mr.get(t);if(!e&&t===ri&&rl())return ll();if(!e)throw Ct.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=fm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}zn(new pn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="firebase-heartbeat-database",_m=1,Kn="firebase-heartbeat-store";let Cs=null;function ul(){return Cs||(Cs=Lp(gm,_m,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),Cs}async function ym(t){try{return await(await ul()).transaction(Kn).objectStore(Kn).get(fl(t))}catch(e){if(e instanceof Ot)jt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function ua(t,e){try{const r=(await ul()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,fl(t)),await r.done}catch(n){if(n instanceof Ot)jt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function fl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=1024,vm=30*24*60*60*1e3;class Em{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Im(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fa(),{heartbeatsToSend:n,unsentEntries:r}=wm(this._heartbeatsCache.heartbeats),s=tl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fa(){return new Date().toISOString().substring(0,10)}function wm(t,e=bm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),da(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),da(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return up()?fp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ym(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function da(t){return tl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){zn(new pn("platform-logger",e=>new Fp(e),"PRIVATE")),zn(new pn("heartbeat",e=>new Em(e),"PRIVATE")),sn(ni,la,t),sn(ni,la,"esm2017"),sn("fire-js","")}Tm("");var Rm="firebase",Sm="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(Rm,Sm,"app");const Am={apiKey:"AIzaSyBgvRyJMrpkg2kWI7iDm7NiNdjrJZbr8NE",authDomain:"fake-directory-comapany.firebaseapp.com",projectId:"fake-directory-comapany",storageBucket:"fake-directory-comapany.appspot.com",messagingSenderId:"752701169406",appId:"1:752701169406:web:3273d9ef5d26afbf010faf"},Cm=ll(Am);function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ha(t){return t!==void 0&&t.enterprise!==void 0}class Pm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function dl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Om=dl,hl=new Qn("auth","Firebase",dl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new il("@firebase/auth");function km(t,...e){Ur.logLevel<=ee.WARN&&Ur.warn(`Auth (${er}): ${t}`,...e)}function Er(t,...e){Ur.logLevel<=ee.ERROR&&Ur.error(`Auth (${er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,...e){throw Hi(t,...e)}function Xe(t,...e){return Hi(t,...e)}function Nm(t,e,n){const r=Object.assign(Object.assign({},Om()),{[e]:n});return new Qn("auth","Firebase",r).create(e,{appName:t.name})}function Hi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hl.create(t,...e)}function H(t,e,...n){if(!t)throw Hi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Er(e),new Error(e)}function ut(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xm(){return pa()==="http:"||pa()==="https:"}function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xm()||ap()||"connection"in navigator)?navigator.onLine:!0}function Lm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=op()||cp()}get(){return Dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new tr(3e4,6e4);function vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vt(t,e,n,r,s={}){return ml(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Zn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),pl.fetch()(gl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ml(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mm),e);try{const s=new Fm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Nm(t,f,l);ze(t,f)}}catch(s){if(s instanceof Ot)throw s;ze(t,"network-request-failed",{message:String(s)})}}async function os(t,e,n,r,s={}){const i=await Vt(t,e,n,r,s);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ji(t.config,s):`${t.config.apiScheme}://${s}`}class Fm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),Um.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xe(t,e,r);return s.customData._tokenResponse=n,s}async function Bm(t,e){return Vt(t,"GET","/v2/recaptchaConfig",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Hm(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jm(t,e=!1){const n=kt(t),r=await n.getIdToken(e),s=Wi(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(Ps(s.auth_time)),issuedAtTime:Mn(Ps(s.iat)),expirationTime:Mn(Ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ps(t){return Number(t)*1e3}function Wi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const s=nl(n);return s?JSON.parse(s):(Er("Failed to decode base64 JWT payload"),null)}catch(s){return Er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wm(t){const e=Wi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&Vm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Vm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qn(t,Hm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jm(i.providerUserInfo):[],a=qm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Km(t){const e=kt(t);await Fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jm(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(t,e){const n=await ml(t,{},async()=>{const r=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jm(this,e)}reload(){return Km(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qn(this,$m(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:R,isAnonymous:$,providerData:G,stsTokenManager:se}=n;H(F&&se,e,"internal-error");const te=Jn.fromJSON(this.name,se);H(typeof F=="string",e,"internal-error"),gt(u,e.name),gt(p,e.name),H(typeof R=="boolean",e,"internal-error"),H(typeof $=="boolean",e,"internal-error"),gt(g,e.name),gt(_,e.name),gt(v,e.name),gt(k,e.name),gt(P,e.name),gt(N,e.name);const ae=new $t({uid:F,auth:e,email:p,emailVerified:R,displayName:u,isAnonymous:$,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:te,createdAt:P,lastLoginAt:N});return G&&Array.isArray(G)&&(ae.providerData=G.map(ue=>Object.assign({},ue))),k&&(ae._redirectEventId=k),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jn;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map;function at(t){ut(t instanceof Function,"Expected a class definition");let e=ma.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ma.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yl.type="NONE";const ga=yl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wr(this.userKey,s.apiKey,i),this.fullPersistenceKey=wr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(at(ga),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(ga);const o=wr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=$t._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new on(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(El(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Il(e))return"Blackberry";if(Tl(e))return"Webos";if(Vi(e))return"Safari";if((e.includes("chrome/")||vl(e))&&!e.includes("edge/"))return"Chrome";if(wl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bl(t=Te()){return/firefox\//i.test(t)}function Vi(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vl(t=Te()){return/crios\//i.test(t)}function El(t=Te()){return/iemobile/i.test(t)}function wl(t=Te()){return/android/i.test(t)}function Il(t=Te()){return/blackberry/i.test(t)}function Tl(t=Te()){return/webos/i.test(t)}function as(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ym(t=Te()){var e;return as(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xm(){return lp()&&document.documentMode===10}function Rl(t=Te()){return as(t)||wl(t)||Tl(t)||Il(t)||/windows phone/i.test(t)||El(t)}function Qm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e=[]){let n;switch(t){case"Browser":n=_a(Te());break;case"Worker":n=`${_a(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",vn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=6;class ng{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ya(this),this.idTokenSubscription=new ya(this),this.beforeStateQueue=new Zm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eg(this),n=new ng(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&km(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function En(t){return kt(t)}class ya{constructor(e){this.auth=e,this.observer=null,this.addObserver=gp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Al(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sg().appendChild(r)})}function ig(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const og="https://www.google.com/recaptcha/enterprise.js?render=",ag="recaptcha-enterprise",cg="NO_RECAPTCHA";class lg{constructor(e){this.type=ag,this.auth=En(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Bm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Pm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ha(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(cg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ha(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Al(og+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ba(t,e,n,r=!1){const s=new lg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){const n=cl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Lr(i,e??{}))return s;ze(s,"already-initialized")}return n.initialize({options:e})}function fg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dg(t,e,n){const r=En(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Cl(e),{host:o,port:a}=hg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||pg()}function Cl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hg(t){const e=Cl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:va(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:va(o)}}}function va(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function mg(t,e){return Vt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e){return os(t,"POST","/v1/accounts:signInWithPassword",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t,e){return os(t,"POST","/v1/accounts:signInWithEmailLink",vn(t,e))}async function _g(t,e){return os(t,"POST","/v1/accounts:signInWithEmailLink",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends zi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ba(e,r,"signInWithPassword");return Os(e,s)}else return Os(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ba(e,r,"signInWithPassword");return Os(e,i)}else return Promise.reject(s)});case"emailLink":return gg(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _g(e,{idToken:n,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e){return os(t,"POST","/v1/accounts:signInWithIdp",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="http://localhost";class Wt extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vg(t){const e=On(kn(t)).link,n=e?On(kn(e)).deep_link_id:null,r=On(kn(t)).deep_link_id;return(r?On(kn(r)).link:null)||r||n||e||t}class Ki{constructor(e){var n,r,s,i,o,a;const c=On(kn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=bg((s=c.mode)!==null&&s!==void 0?s:null);H(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vg(e);try{return new Ki(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return Gn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ki.parseLink(n);return H(r,"argument-error"),Gn._fromEmailAndCode(e,r.code,r.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends nr{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends nr{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends nr{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=Ea(r);return new mn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ea(r);return new mn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ea(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Br.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Br(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(t,i,e,r):i})}async function Eg(t,e,n=!1){const r=await qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await qn(t,Ol(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Wi(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),mn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t,e,n=!1){const r="signIn",s=await Ol(t,r,e),i=await mn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ig(t,e){return kl(En(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t){const e=En(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Rg(t,e,n){return Ig(kt(t),wn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tg(t),r})}function Sg(t,e,n,r){return kt(t).onIdTokenChanged(e,n,r)}function Ag(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}function Cg(t){return kt(t).signOut()}const $r="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){const t=Te();return Vi(t)||as(t)}const Og=1e3,kg=10;class xl extends Nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pg()&&Qm(),this.fallbackToPolling=Rl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xl.type="LOCAL";const Ng=xl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dl.type="SESSION";const Ll=Dl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=qi("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Lg(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function Mg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ug(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fg(){return Ml()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="firebaseLocalStorageDb",Bg=1,Hr="firebaseLocalStorage",Fl="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ls(t,e){return t.transaction([Hr],e?"readwrite":"readonly").objectStore(Hr)}function $g(){const t=indexedDB.deleteDatabase(Ul);return new rr(t).toPromise()}function oi(){const t=indexedDB.open(Ul,Bg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hr,{keyPath:Fl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hr)?e(r):(r.close(),await $g(),e(await oi()))})})}async function wa(t,e,n){const r=ls(t,!0).put({[Fl]:e,value:n});return new rr(r).toPromise()}async function Hg(t,e){const n=ls(t,!1).get(e),r=await new rr(n).toPromise();return r===void 0?null:r.value}function Ia(t,e){const n=ls(t,!0).delete(e);return new rr(n).toPromise()}const jg=800,Wg=3;class Bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ml()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(Fg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mg(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oi();return await wa(e,$r,"1"),await Ia(e,$r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ia(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ls(s,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bl.type="LOCAL";const Vg=Bl;new tr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){return e?at(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kg(t){return kl(t.auth,new Ji(t),t.bypassAuthState)}function qg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),wg(n,new Ji(t),t.bypassAuthState)}async function Jg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Eg(n,new Ji(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kg;case"linkViaPopup":case"linkViaRedirect":return Jg;case"reauthViaPopup":case"reauthViaRedirect":return qg;default:ze(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new tr(2e3,1e4);class Xt extends $l{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="pendingRedirect",Ir=new Map;class Xg extends $l{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(t,e){const n=t_(e),r=e_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zg(t,e){Ir.set(t._key(),e)}function e_(t){return at(t._redirectPersistence)}function t_(t){return wr(Yg,t.config.apiKey,t.name)}async function n_(t,e,n=!1){const r=En(t),s=zg(r,e),o=await new Xg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=10*60*1e3;class s_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}}function Ta(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c_=/^https?/;async function l_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o_(t);for(const n of e)try{if(u_(n))return}catch{}ze(t,"unauthorized-domain")}function u_(t){const e=ii(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c_.test(n))return!1;if(a_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new tr(3e4,6e4);function Ra(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ra(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ra(),n(Xe(t,"network-request-failed"))},timeout:f_.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)o();else{const a=ig("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},Al(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Tr=null,e})}let Tr=null;function h_(t){return Tr=Tr||d_(t),Tr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new tr(5e3,15e3),m_="__/auth/iframe",g_="emulator/auth/iframe",__={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ji(e,g_):`https://${t.config.authDomain}/${m_}`,r={apiKey:e.apiKey,appName:t.name,v:er},s=y_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zn(r).slice(1)}`}async function v_(t){const e=await h_(t),n=Qe().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:b_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:__,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},p_.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w_=500,I_=600,T_="_blank",R_="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S_(t,e,n,r=w_,s=I_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},E_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=vl(l)?T_:n),bl(l)&&(e=e||R_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(Ym(l)&&a!=="_self")return A_(e||"",a),new Sa(null);const u=window.open(e||"",a,f);H(u,t,"popup-blocked");try{u.focus()}catch{}return new Sa(u)}function A_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="__/auth/handler",P_="emulator/auth/handler",O_=encodeURIComponent("fac");async function Aa(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:er,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof nr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${O_}=${encodeURIComponent(c)}`:"";return`${k_(t)}?${Zn(a).slice(1)}${l}`}function k_({config:t}){return t.emulator?ji(t,P_):`https://${t.authDomain}/${C_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ll,this._completeRedirectFn=n_,this._overrideRedirectResult=Zg}async _openPopup(e,n,r,s){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Aa(e,n,r,ii(),s);return S_(e,o,qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Aa(e,n,r,ii(),s);return Lg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v_(e),r=new s_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ks,{type:ks},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ks];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rl()||Vi()||as()}}const x_=N_;var Ca="@firebase/auth",Pa="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M_(t){zn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sl(t)},l=new rg(r,s,i,c);return fg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new pn("auth-internal",e=>{const n=En(e.getProvider("auth").getImmediate());return(r=>new D_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Ca,Pa,L_(t)),sn(Ca,Pa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=5*60,F_=sl("authIdTokenMaxAge")||U_;let Oa=null;const B_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F_)return;const s=n==null?void 0:n.token;Oa!==s&&(Oa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $_(t=mm()){const e=cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ug(t,{popupRedirectResolver:x_,persistence:[Vg,Ng,Ll]}),r=sl("authTokenSyncURL");if(r){const i=B_(r);Ag(n,i,()=>i(n.currentUser)),Sg(n,o=>i(o))}const s=sp("auth");return s&&dg(n,`http://${s}`),n}M_("Browser");function H_(t){const e=et(t.currentUser),n=Ne(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const ai=$_(Cm),{isAuthenticated:ka,user:j_}=H_(ai),Gi=()=>({isAuthenticated:ka,user:j_,login:async(n,r)=>(await Rg(ai,n,r),ka.value),logout:async()=>{await Cg(ai),ro.push({name:"Home"})}});const dt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},W_={},jl=t=>(Qr("data-v-ae2e6a69"),t=t(),Zr(),t),V_={class:"wrapper"},z_=jl(()=>oe("input",{type:"text",placeholder:"Search Monster",class:"search"},null,-1)),K_=jl(()=>oe("span",{class:"icon"},[oe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),q_=[z_,K_];function J_(t,e){return pe(),Ie("div",V_,q_)}const G_=dt(W_,[["render",J_],["__scopeId","data-v-ae2e6a69"]]);function Wl(t,e){return function(){return t.apply(e,arguments)}}const{toString:Y_}=Object.prototype,{getPrototypeOf:Yi}=Object,us=(t=>e=>{const n=Y_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tt=t=>(t=t.toLowerCase(),e=>us(e)===t),fs=t=>e=>typeof e===t,{isArray:In}=Array,Yn=fs("undefined");function X_(t){return t!==null&&!Yn(t)&&t.constructor!==null&&!Yn(t.constructor)&&Le(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Vl=tt("ArrayBuffer");function Q_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Vl(t.buffer),e}const Z_=fs("string"),Le=fs("function"),zl=fs("number"),ds=t=>t!==null&&typeof t=="object",ey=t=>t===!0||t===!1,Rr=t=>{if(us(t)!=="object")return!1;const e=Yi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ty=tt("Date"),ny=tt("File"),ry=tt("Blob"),sy=tt("FileList"),iy=t=>ds(t)&&Le(t.pipe),oy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Le(t.append)&&((e=us(t))==="formdata"||e==="object"&&Le(t.toString)&&t.toString()==="[object FormData]"))},ay=tt("URLSearchParams"),cy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function sr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),In(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Kl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const ql=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Jl=t=>!Yn(t)&&t!==ql;function ci(){const{caseless:t}=Jl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Kl(e,s)||s;Rr(e[i])&&Rr(r)?e[i]=ci(e[i],r):Rr(r)?e[i]=ci({},r):In(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&sr(arguments[r],n);return e}const ly=(t,e,n,{allOwnKeys:r}={})=>(sr(e,(s,i)=>{n&&Le(s)?t[i]=Wl(s,n):t[i]=s},{allOwnKeys:r}),t),uy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),fy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},dy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Yi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},hy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},py=t=>{if(!t)return null;if(In(t))return t;let e=t.length;if(!zl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},my=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Yi(Uint8Array)),gy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},_y=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},yy=tt("HTMLFormElement"),by=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Na=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),vy=tt("RegExp"),Gl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};sr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Ey=t=>{Gl(t,(e,n)=>{if(Le(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Le(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return In(t)?r(t):r(String(t).split(e)),n},Iy=()=>{},Ty=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ns="abcdefghijklmnopqrstuvwxyz",xa="0123456789",Yl={DIGIT:xa,ALPHA:Ns,ALPHA_DIGIT:Ns+Ns.toUpperCase()+xa},Ry=(t=16,e=Yl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Sy(t){return!!(t&&Le(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ay=t=>{const e=new Array(10),n=(r,s)=>{if(ds(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=In(r)?[]:{};return sr(r,(o,a)=>{const c=n(o,s+1);!Yn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Cy=tt("AsyncFunction"),Py=t=>t&&(ds(t)||Le(t))&&Le(t.then)&&Le(t.catch),b={isArray:In,isArrayBuffer:Vl,isBuffer:X_,isFormData:oy,isArrayBufferView:Q_,isString:Z_,isNumber:zl,isBoolean:ey,isObject:ds,isPlainObject:Rr,isUndefined:Yn,isDate:ty,isFile:ny,isBlob:ry,isRegExp:vy,isFunction:Le,isStream:iy,isURLSearchParams:ay,isTypedArray:my,isFileList:sy,forEach:sr,merge:ci,extend:ly,trim:cy,stripBOM:uy,inherits:fy,toFlatObject:dy,kindOf:us,kindOfTest:tt,endsWith:hy,toArray:py,forEachEntry:gy,matchAll:_y,isHTMLForm:yy,hasOwnProperty:Na,hasOwnProp:Na,reduceDescriptors:Gl,freezeMethods:Ey,toObjectSet:wy,toCamelCase:by,noop:Iy,toFiniteNumber:Ty,findKey:Kl,global:ql,isContextDefined:Jl,ALPHABET:Yl,generateString:Ry,isSpecCompliantForm:Sy,toJSONObject:Ay,isAsyncFn:Cy,isThenable:Py};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Xl=z.prototype,Ql={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ql[t]={value:t}});Object.defineProperties(z,Ql);Object.defineProperty(Xl,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(Xl);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Oy=null;function li(t){return b.isPlainObject(t)||b.isArray(t)}function Zl(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function Da(t,e,n){return t?t.concat(e).map(function(s,i){return s=Zl(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function ky(t){return b.isArray(t)&&!t.some(li)}const Ny=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function hs(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,k){return!b.isUndefined(k[v])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(b.isDate(_))return _.toISOString();if(!c&&b.isBlob(_))throw new z("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(_)||b.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function f(_,v,k){let P=_;if(_&&!k&&typeof _=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),_=JSON.stringify(_);else if(b.isArray(_)&&ky(_)||(b.isFileList(_)||b.endsWith(v,"[]"))&&(P=b.toArray(_)))return v=Zl(v),P.forEach(function(F,R){!(b.isUndefined(F)||F===null)&&e.append(o===!0?Da([v],R,i):o===null?v:v+"[]",l(F))}),!1}return li(_)?!0:(e.append(Da(k,v,i),l(_)),!1)}const u=[],p=Object.assign(Ny,{defaultVisitor:f,convertValue:l,isVisitable:li});function g(_,v){if(!b.isUndefined(_)){if(u.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));u.push(_),b.forEach(_,function(P,N){(!(b.isUndefined(P)||P===null)&&s.call(e,P,b.isString(N)?N.trim():N,v,p))===!0&&g(P,v?v.concat(N):[N])}),u.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return g(t),e}function La(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Xi(t,e){this._pairs=[],t&&hs(t,this,e)}const eu=Xi.prototype;eu.append=function(e,n){this._pairs.push([e,n])};eu.toString=function(e){const n=e?function(r){return e.call(this,r,La)}:La;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function xy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tu(t,e,n){if(!e)return t;const r=n&&n.encode||xy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new Xi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Dy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ma=Dy,nu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ly=typeof URLSearchParams<"u"?URLSearchParams:Xi,My=typeof FormData<"u"?FormData:null,Uy=typeof Blob<"u"?Blob:null,Fy={isBrowser:!0,classes:{URLSearchParams:Ly,FormData:My,Blob:Uy},protocols:["http","https","file","blob","url","data"]},ru=typeof window<"u"&&typeof document<"u",By=(t=>ru&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),$y=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ru,hasStandardBrowserEnv:By,hasStandardBrowserWebWorkerEnv:$y},Symbol.toStringTag,{value:"Module"})),Ye={...Hy,...Fy};function jy(t,e){return hs(t,new Ye.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ye.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Wy(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Vy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function su(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=Vy(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(Wy(r),s,n,0)}),n}return null}function zy(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Qi={transitional:nu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(su(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return jy(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return hs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),zy(e)):e}],transformResponse:[function(e){const n=this.transitional||Qi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ye.classes.FormData,Blob:Ye.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Qi.headers[t]={}});const Zi=Qi,Ky=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Ky[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ua=Symbol("internals");function An(t){return t&&String(t).trim().toLowerCase()}function Sr(t){return t===!1||t==null?t:b.isArray(t)?t.map(Sr):String(t)}function Jy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Gy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xs(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function Yy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Xy(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ps{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=An(c);if(!f)throw new Error("header name must be a non-empty string");const u=b.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Sr(a))}const o=(a,c)=>b.forEach(a,(l,f)=>i(l,f,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Gy(e)?o(qy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=An(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Jy(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=An(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||xs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=An(o),o){const a=b.findKey(r,o);a&&(!n||xs(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||xs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Sr(s),delete n[i];return}const a=e?Yy(i):String(i).trim();a!==i&&delete n[i],n[a]=Sr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ua]=this[Ua]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=An(o);r[a]||(Xy(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}ps.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(ps.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(ps);const ct=ps;function Ds(t,e){const n=this||Zi,r=e||n,s=ct.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function iu(t){return!!(t&&t.__CANCEL__)}function ir(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(ir,z,{__CANCEL__:!0});function Qy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Zy=Ye.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];b.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),b.isString(r)&&o.push("path="+r),b.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function eb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function tb(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ou(t,e){return t&&!eb(e)?tb(t,e):e}const nb=Ye.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function rb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function sb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,p=0;for(;u!==s;)p+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=f&&l-f;return g?Math.round(p*1e3/g):void 0}}function Fa(t,e){let n=0;const r=sb(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const ib=typeof XMLHttpRequest<"u",ob=ib&&function(t){return new Promise(function(n,r){let s=t.data;const i=ct.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(b.isFormData(s)){if(Ye.hasStandardBrowserEnv||Ye.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[v,...k]=f?f.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+k))}const p=ou(t.baseURL,t.url);u.open(t.method.toUpperCase(),tu(p,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function g(){if(!u)return;const v=ct.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:t,request:u};Qy(function(F){n(F),l()},function(F){r(F),l()},P),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new z("Request aborted",z.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||nu;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new z(k,P.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,u)),u=null},Ye.hasStandardBrowserEnv&&(a&&b.isFunction(a)&&(a=a(t)),a||a!==!1&&nb(p))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&Zy.read(t.xsrfCookieName);v&&i.set(t.xsrfHeaderName,v)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&b.forEach(i.toJSON(),function(k,P){u.setRequestHeader(P,k)}),b.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Fa(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fa(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=v=>{u&&(r(!v||v.type?new ir(null,t,u):v),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=rb(p);if(_&&Ye.protocols.indexOf(_)===-1){r(new z("Unsupported protocol "+_+":",z.ERR_BAD_REQUEST,t));return}u.send(s||null)})},ui={http:Oy,xhr:ob};b.forEach(ui,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ba=t=>`- ${t}`,ab=t=>b.isFunction(t)||t===null||t===!1,au={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!ab(n)&&(r=ui[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ba).join(`
`):" "+Ba(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ui};function Ls(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ir(null,t)}function $a(t){return Ls(t),t.headers=ct.from(t.headers),t.data=Ds.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),au.getAdapter(t.adapter||Zi.adapter)(t).then(function(r){return Ls(t),r.data=Ds.call(t,t.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return iu(r)||(Ls(t),r&&r.response&&(r.response.data=Ds.call(t,t.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const Ha=t=>t instanceof ct?t.toJSON():t;function gn(t,e){e=e||{};const n={};function r(l,f,u){return b.isPlainObject(l)&&b.isPlainObject(f)?b.merge.call({caseless:u},l,f):b.isPlainObject(f)?b.merge({},f):b.isArray(f)?f.slice():f}function s(l,f,u){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!b.isUndefined(f))return r(void 0,f)}function o(l,f){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(Ha(l),Ha(f),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,p=u(t[f],e[f],f);b.isUndefined(p)&&u!==a||(n[f]=p)}),n}const cu="1.6.2",eo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ja={};eo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+cu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!ja[o]&&(ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function cb(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const fi={assertOptions:cb,validators:eo},_t=fi.validators;class jr{constructor(e){this.defaults=e,this.interceptors={request:new Ma,response:new Ma}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=gn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&fi.assertOptions(r,{silentJSONParsing:_t.transitional(_t.boolean),forcedJSONParsing:_t.transitional(_t.boolean),clarifyTimeoutError:_t.transitional(_t.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:fi.assertOptions(s,{encode:_t.function,serialize:_t.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=ct.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let f,u=0,p;if(!c){const _=[$a.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,f=Promise.resolve(n);u<p;)f=f.then(_[u++],_[u++]);return f}p=a.length;let g=n;for(u=0;u<p;){const _=a[u++],v=a[u++];try{g=_(g)}catch(k){v.call(this,k);break}}try{f=$a.call(this,g)}catch(_){return Promise.reject(_)}for(u=0,p=l.length;u<p;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=gn(this.defaults,e);const n=ou(e.baseURL,e.url);return tu(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){jr.prototype[e]=function(n,r){return this.request(gn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(gn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}jr.prototype[e]=n(),jr.prototype[e+"Form"]=n(!0)});const Ar=jr;class to{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ir(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new to(function(s){e=s}),cancel:e}}}const lb=to;function ub(t){return function(n){return t.apply(null,n)}}function fb(t){return b.isObject(t)&&t.isAxiosError===!0}const di={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(di).forEach(([t,e])=>{di[e]=t});const db=di;function lu(t){const e=new Ar(t),n=Wl(Ar.prototype.request,e);return b.extend(n,Ar.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return lu(gn(t,s))},n}const he=lu(Zi);he.Axios=Ar;he.CanceledError=ir;he.CancelToken=lb;he.isCancel=iu;he.VERSION=cu;he.toFormData=hs;he.AxiosError=z;he.Cancel=he.CanceledError;he.all=function(e){return Promise.all(e)};he.spread=ub;he.isAxiosError=fb;he.mergeConfig=gn;he.AxiosHeaders=ct;he.formToJSON=t=>su(b.isHTMLForm(t)?new FormData(t):t);he.getAdapter=au.getAdapter;he.HttpStatusCode=db;he.default=he;const hb=he,uu=et([]),fu=et(1),hi=et(!1),du=et(1),hu=et(8),pb=hb.create({baseURL:"https://finalserver3.onrender.com",auth:{username:"admin",password:"admin"}}),mb=async()=>{hi.value=!0;const{data:t,headers:e}=await pb.get("/api/monsters",{params:{page:du.value,size:hu.value}});uu.value=t,fu.value=Number(e["x-total-pages"])||1,hi.value=!1},no=()=>({monsters:uu,pages:fu,activePage:du,loading:hi,pageSize:hu,getMonsters:mb});const gb=t=>(Qr("data-v-e0065b30"),t=t(),Zr(),t),_b=gb(()=>oe("div",{class:"card-image"},null,-1)),yb={class:"card-details"},bb={class:"card-details-name"},vb={class:"card-details-quote"},Eb={__name:"MainCardsSingle",props:{monster:{type:Object,required:!0,default:()=>({createdAt:"2022-01-01",monsterId:"123",monsterName:"Beholder",monsterDesc:"Really Cool desc",updatedAt:"2022-01-01"})}},setup(t){const e=t,n=()=>{console.log(`${e.monster.name} selected`)};return(r,s)=>(pe(),Ie("div",{class:"card",onClick:n},[_b,oe("div",yb,[oe("p",bb,Fn(e.monster.monsterName),1),oe("p",vb,'"'+Fn(e.monster.monsterDesc)+'"',1)])]))}},wb=dt(Eb,[["__scopeId","data-v-e0065b30"]]);const Ib=t=>(Qr("data-v-999c15ba"),t=t(),Zr(),t),Tb={class:"sub-wrapper"},Rb=Ib(()=>oe("div",null,"Loading...",-1)),Sb={__name:"MainCards",setup(t){const{monsters:e}=no();return(n,r)=>(pe(),Ie("div",Tb,[(pe(),Po(bf,null,{fallback:nn(()=>[Rb]),default:nn(()=>[(pe(!0),Ie(ke,null,Cc(me(e),s=>(pe(),Po(wb,{key:s.monsterId,monster:s},null,8,["monster"]))),128))]),_:1}))]))}},Ab=dt(Sb,[["__scopeId","data-v-999c15ba"]]);const Cb={class:"pagination"},Pb=["disabled"],Ob=["onClick"],kb=["disabled"],Nb={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getMonsters:r}=no(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(pe(),Ie("div",Cb,[oe("button",{class:"action",disabled:me(e)===1,onClick:s},"Prev",8,Pb),(pe(!0),Ie(ke,null,Cc(me(n),l=>(pe(),Ie("button",{key:l,class:qr(["page",l===me(e)?"active":""]),onClick:f=>o(l)},Fn(l),11,Ob))),128)),oe("button",{class:"action",disabled:me(e)===me(n),onClick:i},"Next",8,kb)]))}},xb=dt(Nb,[["__scopeId","data-v-5b0e5cc0"]]);const Db={key:0},Lb={key:1,class:"wrapper"},Mb={__name:"MainPage",setup(t){const{getMonsters:e,loading:n}=no();return Tc(async()=>{await e()}),(r,s)=>me(n)?(pe(),Ie("p",Db,"Loading...")):(pe(),Ie("div",Lb,[le(G_),le(Ab),le(xb)]))}},Ub=dt(Mb,[["__scopeId","data-v-cea08a19"]]);const Fb=t=>(Qr("data-v-769d7c94"),t=t(),Zr(),t),Bb=["onSubmit"],$b=Fb(()=>oe("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Log In",-1)),Hb={__name:"LoginPage",setup(t){const{login:e,logout:n}=Gi(),r=Gh(),s=Yh(),i=et(""),o=et(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(pe(),Ie("form",{class:"login-form",onSubmit:Ud(a,["prevent"])},[Ws(oe("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[$o,i.value]]),Ws(oe("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[$o,o.value]]),$b],40,Bb))}},jb=dt(Hb,[["__scopeId","data-v-769d7c94"]]),Wb=ki({setup(){return{}}});function Vb(t,e,n,r,s,i){return pe(),Ie("h1",null,"Settings Page")}const zb=dt(Wb,[["render",Vb]]);const Kb={},qb={class:"not-found"};function Jb(t,e){return pe(),Ie("h2",qb," 404-page not found")}const Gb=dt(Kb,[["render",Jb],["__scopeId","data-v-b4441e46"]]),{isAuthenticated:Yb}=Gi(),Xb=[{path:"/finalvue/",name:"Home",component:Ub},{path:"/login",name:"Login",component:jb},{path:"/settings",name:"Settings",component:zb,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Gb},{path:"/other",name:"Other",component:()=>zd(()=>import("./OtherPage-314d6e0e.js"),[])}],ro=qh({history:lh(),routes:Xb});ro.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Yb.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const Qb={class:"wrapper"},Zb={class:"brand-title"},ev={class:"menu"},tv={class:"px-2 py-4"},nv={key:0},rv={key:1},sv={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Gi(),s=et("DnD 🐉 Monsters");return(i,o)=>{var c;const a=Ac("RouterLink");return pe(),Ie("nav",null,[oe("div",Qb,[le(a,{to:{name:"Home"},class:"brand"},{default:nn(()=>[oe("span",Zb,Fn(s.value),1)]),_:1}),oe("div",ev,[Ws(oe("p",tv,[vr(" Welcome back "),oe("strong",null,[oe("i",null,Fn((c=me(r))==null?void 0:c.email),1)])],512),[[Fd,me(e)]]),me(e)?(pe(),Ie("div",nv,[le(a,{to:{name:"Settings"},href:"#",class:"menu-item"},{default:nn(()=>[vr("Settings")]),_:1}),oe("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>me(n)&&me(n)(...l))},"Logout")])):(pe(),Ie("div",rv,[le(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:nn(()=>[vr("Login")]),_:1})]))])])])}}},iv=dt(sv,[["__scopeId","data-v-9852947c"]]),ov={__name:"App",setup(t){return(e,n)=>{const r=Ac("RouterView");return pe(),Ie(ke,null,[le(iv),le(r)],64)}}};Hd(ov).use(ro).mount("#app");export{dt as _,oe as a,Ie as c,pe as o};
