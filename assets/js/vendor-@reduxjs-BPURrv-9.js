import{i as L,c as F,a as U,b as X,d as M,e as z}from"./vendor-redux-DITMfSWq.js";import{i as x,p as B,a as G}from"./vendor-immer-DqxjFn0G.js";import{t as H,w as Q}from"./vendor-redux-thunk-ClJT1hhx.js";var V=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?M:M.apply(null,arguments)};function O(e,t){function n(...i){if(t){let r=t(...i);if(!r)throw new Error(m(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>z(i)&&i.type===e,n}var P=class D extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,D.prototype)}static get[Symbol.species](){return D}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new D(...t[0].concat(this)):new D(...t.concat(this))}};function A(e){return x(e)?B(e,()=>{}):e}function j(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(m(10));const i=n.insert(t,e);return e.set(t,i),i}function W(e){return typeof e=="boolean"}var Y=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:r=!0,actionCreatorCheck:u=!0}=t??{};let a=new P;return n&&(W(n)?a.push(H):a.push(Q(n.extraArgument))),a},K="RTK_autoBatch",I=e=>t=>{setTimeout(t,e)},J=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:I(10),Z=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let r=!0,u=!1,a=!1;const o=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?J:e.type==="callback"?e.queueNotification:I(e.timeout),f=()=>{a=!1,u&&(u=!1,o.forEach(c=>c()))};return Object.assign({},i,{subscribe(c){const d=()=>r&&c(),w=i.subscribe(d);return o.add(c),()=>{w(),o.delete(c)}},dispatch(c){var d;try{return r=!((d=c==null?void 0:c.meta)!=null&&d[K]),u=!r,u&&(a||(a=!0,h(f))),i.dispatch(c)}finally{r=!0}}})},ee=e=>function(n){const{autoBatch:i=!0}=n??{};let r=new P(e);return i&&r.push(Z(typeof i=="object"?i:void 0)),r};function ye(e){const t=Y(),{reducer:n=void 0,middleware:i,devTools:r=!0,preloadedState:u=void 0,enhancers:a=void 0}=e||{};let o;if(typeof n=="function")o=n;else if(L(n))o=F(n);else throw new Error(m(1));let h;typeof i=="function"?h=i(t):h=t();let f=M;r&&(f=V({trace:!1,...typeof r=="object"&&r}));const c=U(...h),d=ee(c);let w=typeof a=="function"?a(d):d();const g=f(...w);return X(o,u,g)}function N(e){const t={},n=[];let i;const r={addCase(u,a){const o=typeof u=="string"?u:u.type;if(!o)throw new Error(m(28));if(o in t)throw new Error(m(29));return t[o]=a,r},addMatcher(u,a){return n.push({matcher:u,reducer:a}),r},addDefaultCase(u){return i=u,r}};return e(r),[t,n,i]}function te(e){return typeof e=="function"}function re(e,t){let[n,i,r]=N(t),u;if(te(e))u=()=>A(e());else{const o=A(e);u=()=>o}function a(o=u(),h){let f=[n[h.type],...i.filter(({matcher:c})=>c(h)).map(({reducer:c})=>c)];return f.filter(c=>!!c).length===0&&(f=[r]),f.reduce((c,d)=>{if(d)if(G(c)){const g=d(c,h);return g===void 0?c:g}else{if(x(c))return B(c,w=>d(w,h));{const w=d(c,h);if(w===void 0){if(c===null)return c;throw new Error(m(9))}return w}}return c},o)}return a.getInitialState=u,a}var ne=Symbol.for("rtk-slice-createasyncthunk");function ie(e,t){return`${e}/${t}`}function ce({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[ne];return function(r){const{name:u,reducerPath:a=u}=r;if(!u)throw new Error(m(11));typeof process<"u";const o=(typeof r.reducers=="function"?r.reducers(ae()):r.reducers)||{},h=Object.keys(o),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(s,l){const p=typeof s=="string"?s:s.type;if(!p)throw new Error(m(12));if(p in f.sliceCaseReducersByType)throw new Error(m(13));return f.sliceCaseReducersByType[p]=l,c},addMatcher(s,l){return f.sliceMatchers.push({matcher:s,reducer:l}),c},exposeAction(s,l){return f.actionCreators[s]=l,c},exposeCaseReducer(s,l){return f.sliceCaseReducersByName[s]=l,c}};h.forEach(s=>{const l=o[s],p={reducerName:s,type:ie(u,s),createNotation:typeof r.reducers=="function"};se(l)?de(p,l,c,t):oe(p,l,c)});function d(){const[s={},l=[],p=void 0]=typeof r.extraReducers=="function"?N(r.extraReducers):[r.extraReducers],E={...s,...f.sliceCaseReducersByType};return re(r.initialState,C=>{for(let y in E)C.addCase(y,E[y]);for(let y of f.sliceMatchers)C.addMatcher(y.matcher,y.reducer);for(let y of l)C.addMatcher(y.matcher,y.reducer);p&&C.addDefaultCase(p)})}const w=s=>s,g=new Map;let T;function S(s,l){return T||(T=d()),T(s,l)}function R(){return T||(T=d()),T.getInitialState()}function k(s,l=!1){function p(C){let y=C[s];return typeof y>"u"&&l&&(y=R()),y}function E(C=w){const y=j(g,l,{insert:()=>new WeakMap});return j(y,C,{insert:()=>{const v={};for(const[$,q]of Object.entries(r.selectors??{}))v[$]=ue(q,C,R,l);return v}})}return{reducerPath:s,getSelectors:E,get selectors(){return E(p)},selectSlice:p}}const _={name:u,reducer:S,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:R,...k(a),injectInto(s,{reducerPath:l,...p}={}){const E=l??a;return s.inject({reducerPath:E,reducer:S},p),{..._,...k(E,!0)}}};return _}}function ue(e,t,n,i){function r(u,...a){let o=t(u);return typeof o>"u"&&i&&(o=n()),e(o,...a)}return r.unwrapped=e,r}var we=ce();function ae(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function oe({type:e,reducerName:t,createNotation:n},i,r){let u,a;if("reducer"in i){if(n&&!fe(i))throw new Error(m(17));u=i.reducer,a=i.prepare}else u=i;r.addCase(e,u).exposeCaseReducer(t,u).exposeAction(t,a?O(e,a):O(e))}function se(e){return e._reducerDefinitionType==="asyncThunk"}function fe(e){return e._reducerDefinitionType==="reducerWithPrepare"}function de({type:e,reducerName:t},n,i,r){if(!r)throw new Error(m(18));const{payloadCreator:u,fulfilled:a,pending:o,rejected:h,settled:f,options:c}=n,d=r(e,u,c);i.exposeAction(t,d),a&&i.addCase(d.fulfilled,a),o&&i.addCase(d.pending,o),h&&i.addCase(d.rejected,h),f&&i.addMatcher(d.settled,f),i.exposeCaseReducer(t,{fulfilled:a||b,pending:o||b,rejected:h||b,settled:f||b})}function b(){}function m(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}export{ye as a,we as c};
