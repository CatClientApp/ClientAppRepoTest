import{r as p}from"./vendor-react-Cx8bjDp6.js";import{bC as d}from"./index-LjUrMrkT.js";var H={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function N(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return H[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function w(e){var t=N(e);return"".concat(t.value).concat(t.unit)}var J=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,v=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return s&&s.insertRule(v,0),r},i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)},K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Q=J("FadeLoader","50% {opacity: 0.3} 100% {opacity: 1}","fade");function ie(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,a=r===void 0?"#000000":r,s=e.speedMultiplier,v=s===void 0?1:s,g=e.cssOverride,j=g===void 0?{}:g,h=e.height,S=h===void 0?15:h,y=e.width,M=y===void 0?5:y,b=e.radius,P=b===void 0?2:b,x=e.margin,_=x===void 0?2:x,F=K(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),$=N(_).value,o=$+18,l=o/2+o/5.5,A=i({display:"inherit",position:"relative",fontSize:"0",top:o,left:o,width:"".concat(o*3,"px"),height:"".concat(o*3,"px")},j),u=function(B){return{position:"absolute",width:w(M),height:w(S),margin:w(_),backgroundColor:a,borderRadius:w(P),transition:"2s",animationFillMode:"both",animation:"".concat(Q," ").concat(1.2/v,"s ").concat(B*.12,"s infinite ease-in-out")}},L=i(i({},u(1)),{top:"".concat(o,"px"),left:"0"}),V=i(i({},u(2)),{top:"".concat(l,"px"),left:"".concat(l,"px"),transform:"rotate(-45deg)"}),C=i(i({},u(3)),{top:"0",left:"".concat(o,"px"),transform:"rotate(90deg)"}),R=i(i({},u(4)),{top:"".concat(-1*l,"px"),left:"".concat(l,"px"),transform:"rotate(45deg)"}),U=i(i({},u(5)),{top:"".concat(-1*o,"px"),left:"0"}),D=i(i({},u(6)),{top:"".concat(-1*l,"px"),left:"".concat(-1*l,"px"),transform:"rotate(-45deg)"}),I=i(i({},u(7)),{top:"0",left:"".concat(-1*o,"px"),transform:"rotate(90deg)"}),q=i(i({},u(8)),{top:"".concat(l,"px"),left:"".concat(-1*l,"px"),transform:"rotate(45deg)"});return n?p.createElement("span",i({style:A},F),p.createElement("span",{style:L}),p.createElement("span",{style:V}),p.createElement("span",{style:C}),p.createElement("span",{style:R}),p.createElement("span",{style:U}),p.createElement("span",{style:D}),p.createElement("span",{style:I}),p.createElement("span",{style:q})):null}var W={},m={};Object.defineProperty(m,"__esModule",{value:!0});m.cssValue=m.parseLengthAndUnit=void 0;var T={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function G(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return T[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}m.parseLengthAndUnit=G;function X(e){var t=G(e);return"".concat(t.value).concat(t.unit)}m.cssValue=X;var E={};Object.defineProperty(E,"__esModule",{value:!0});E.createAnimation=void 0;var Y=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,v=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return s&&s.insertRule(v,0),r};E.createAnimation=Y;var c=d&&d.__assign||function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)},Z=d&&d.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),k=d&&d.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),z=d&&d.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&Z(t,e,n);return k(t,e),t},ee=d&&d.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};Object.defineProperty(W,"__esModule",{value:!0});var f=z(p),O=m,te=E,re=(0,te.createAnimation)("FadeLoader","50% {opacity: 0.3} 100% {opacity: 1}","fade");function ne(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,a=r===void 0?"#000000":r,s=e.speedMultiplier,v=s===void 0?1:s,g=e.cssOverride,j=g===void 0?{}:g,h=e.height,S=h===void 0?15:h,y=e.width,M=y===void 0?5:y,b=e.radius,P=b===void 0?2:b,x=e.margin,_=x===void 0?2:x,F=ee(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),$=(0,O.parseLengthAndUnit)(_).value,o=$+18,l=o/2+o/5.5,A=c({display:"inherit",position:"relative",fontSize:"0",top:o,left:o,width:"".concat(o*3,"px"),height:"".concat(o*3,"px")},j),u=function(B){return{position:"absolute",width:(0,O.cssValue)(M),height:(0,O.cssValue)(S),margin:(0,O.cssValue)(_),backgroundColor:a,borderRadius:(0,O.cssValue)(P),transition:"2s",animationFillMode:"both",animation:"".concat(re," ").concat(1.2/v,"s ").concat(B*.12,"s infinite ease-in-out")}},L=c(c({},u(1)),{top:"".concat(o,"px"),left:"0"}),V=c(c({},u(2)),{top:"".concat(l,"px"),left:"".concat(l,"px"),transform:"rotate(-45deg)"}),C=c(c({},u(3)),{top:"0",left:"".concat(o,"px"),transform:"rotate(90deg)"}),R=c(c({},u(4)),{top:"".concat(-1*l,"px"),left:"".concat(l,"px"),transform:"rotate(45deg)"}),U=c(c({},u(5)),{top:"".concat(-1*o,"px"),left:"0"}),D=c(c({},u(6)),{top:"".concat(-1*l,"px"),left:"".concat(-1*l,"px"),transform:"rotate(-45deg)"}),I=c(c({},u(7)),{top:"0",left:"".concat(-1*o,"px"),transform:"rotate(90deg)"}),q=c(c({},u(8)),{top:"".concat(l,"px"),left:"".concat(-1*l,"px"),transform:"rotate(45deg)"});return n?f.createElement("span",c({style:A},F),f.createElement("span",{style:L}),f.createElement("span",{style:V}),f.createElement("span",{style:C}),f.createElement("span",{style:R}),f.createElement("span",{style:U}),f.createElement("span",{style:D}),f.createElement("span",{style:I}),f.createElement("span",{style:q})):null}var ce=W.default=ne;export{ie as F,ce as _};