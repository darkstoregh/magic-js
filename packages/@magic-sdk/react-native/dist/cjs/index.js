"use strict";var St=Object.create;var V=Object.defineProperty,Et=Object.defineProperties,Lt=Object.getOwnPropertyDescriptor,_t=Object.getOwnPropertyDescriptors,Ot=Object.getOwnPropertyNames,nt=Object.getOwnPropertySymbols,Rt=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var it=(o,s,i)=>s in o?V(o,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[s]=i,st=(o,s)=>{for(var i in s||(s={}))at.call(s,i)&&it(o,i,s[i]);if(nt)for(var i of nt(s))At.call(s,i)&&it(o,i,s[i]);return o},ct=(o,s)=>Et(o,_t(s));var Gt=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports),Mt=(o,s)=>{for(var i in s)V(o,i,{get:s[i],enumerable:!0})},D=(o,s,i,h)=>{if(s&&typeof s=="object"||typeof s=="function")for(let c of Ot(s))!at.call(o,c)&&c!==i&&V(o,c,{get:()=>s[c],enumerable:!(h=Lt(s,c))||h.enumerable});return o},f=(o,s,i)=>(D(o,s,"default"),i&&D(i,s,"default")),A=(o,s,i)=>(i=o!=null?St(Rt(o)):{},D(s||!o||!o.__esModule?V(i,"default",{value:o,enumerable:!0}):i,o)),Vt=o=>D(V({},"__esModule",{value:!0}),o);var T=(o,s,i)=>new Promise((h,c)=>{var b=u=>{try{E(i.next(u))}catch(_){c(_)}},v=u=>{try{E(i.throw(u))}catch(_){c(_)}},E=u=>u.done?h(u.value):Promise.resolve(u.value).then(b,v);E((i=i.apply(o,s)).next())});var lt=Gt((Tt,Q)=>{var x=function(o){"use strict";var s=Object.prototype,i=s.hasOwnProperty,h,c=typeof Symbol=="function"?Symbol:{},b=c.iterator||"@@iterator",v=c.asyncIterator||"@@asyncIterator",E=c.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch{u=function(t,r,a){return t[r]=a}}function _(e,t,r,a){var n=t&&t.prototype instanceof $?t:$,p=Object.create(n.prototype),m=new H(a||[]);return p._invoke=wt(e,r,m),p}o.wrap=_;function L(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(a){return{type:"throw",arg:a}}}var Z="suspendedStart",gt="suspendedYield",tt="executing",N="completed",S={};function $(){}function k(){}function O(){}var B={};u(B,b,function(){return this});var z=Object.getPrototypeOf,I=z&&z(z(J([])));I&&I!==s&&i.call(I,b)&&(B=I);var G=O.prototype=$.prototype=Object.create(B);k.prototype=O,u(G,"constructor",O),u(O,"constructor",k),k.displayName=u(O,E,"GeneratorFunction");function et(e){["next","throw","return"].forEach(function(t){u(e,t,function(r){return this._invoke(t,r)})})}o.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return t?t===k||(t.displayName||t.name)==="GeneratorFunction":!1},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,u(e,E,"GeneratorFunction")),e.prototype=Object.create(G),e},o.awrap=function(e){return{__await:e}};function P(e,t){function r(p,m,d,w){var y=L(e[p],e,m);if(y.type==="throw")w(y.arg);else{var q=y.arg,M=q.value;return M&&typeof M=="object"&&i.call(M,"__await")?t.resolve(M.__await).then(function(R){r("next",R,d,w)},function(R){r("throw",R,d,w)}):t.resolve(M).then(function(R){q.value=R,d(q)},function(R){return r("throw",R,d,w)})}}var a;function n(p,m){function d(){return new t(function(w,y){r(p,m,w,y)})}return a=a?a.then(d,d):d()}this._invoke=n}et(P.prototype),u(P.prototype,v,function(){return this}),o.AsyncIterator=P,o.async=function(e,t,r,a,n){n===void 0&&(n=Promise);var p=new P(_(e,t,r,a),n);return o.isGeneratorFunction(t)?p:p.next().then(function(m){return m.done?m.value:p.next()})};function wt(e,t,r){var a=Z;return function(p,m){if(a===tt)throw new Error("Generator is already running");if(a===N){if(p==="throw")throw m;return ot()}for(r.method=p,r.arg=m;;){var d=r.delegate;if(d){var w=rt(d,r);if(w){if(w===S)continue;return w}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(a===Z)throw a=N,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);a=tt;var y=L(e,t,r);if(y.type==="normal"){if(a=r.done?N:gt,y.arg===S)continue;return{value:y.arg,done:r.done}}else y.type==="throw"&&(a=N,r.method="throw",r.arg=y.arg)}}}function rt(e,t){var r=e.iterator[t.method];if(r===h){if(t.delegate=null,t.method==="throw"){if(e.iterator.return&&(t.method="return",t.arg=h,rt(e,t),t.method==="throw"))return S;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var a=L(r,e.iterator,t.arg);if(a.type==="throw")return t.method="throw",t.arg=a.arg,t.delegate=null,S;var n=a.arg;if(!n)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,S;if(n.done)t[e.resultName]=n.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=h);else return n;return t.delegate=null,S}et(G),u(G,E,"Generator"),u(G,b,function(){return this}),u(G,"toString",function(){return"[object Generator]"});function bt(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function H(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(bt,this),this.reset(!0)}o.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}};function J(e){if(e){var t=e[b];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(i.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=h,n.done=!0,n};return a.next=a}}return{next:ot}}o.values=J;function ot(){return{value:h,done:!0}}return H.prototype={constructor:H,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(F),!e)for(var t in this)t.charAt(0)==="t"&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=h)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(w,y){return p.type="throw",p.arg=e,t.next=w,y&&(t.method="next",t.arg=h),!!y}for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],p=n.completion;if(n.tryLoc==="root")return r("end");if(n.tryLoc<=this.prev){var m=i.call(n,"catchLoc"),d=i.call(n,"finallyLoc");if(m&&d){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(m){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else if(d){if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&(e==="break"||e==="continue")&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var p=n?n.completion:{};return p.type=e,p.arg=t,n?(this.method="next",this.next=n.finallyLoc,S):this.complete(p)},complete:function(e,t){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&t&&(this.next=t),S},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),S}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if(a.type==="throw"){var n=a.arg;F(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:J(e),resultName:t,nextLoc:r},this.method==="next"&&(this.arg=h),S}},o}(typeof Q=="object"?Q.exports:{});try{regeneratorRuntime=x}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=x:Function("r","regeneratorRuntime = r")(x)}});var l={};Mt(l,{Magic:()=>Pt});module.exports=Vt(l);var Yt=A(lt()),pt=require("@magic-sdk/provider"),It=A(require("process")),vt=A(require("localforage")),U=require("whatwg-url"),K=require("buffer"),mt=A(require("lodash")),dt=A(require("expo-application")),yt=require("@aveq-research/localforage-asyncstorage-driver"),X=A(require("localforage-driver-memory"));var g=A(require("react")),W=require("react-native"),ft=require("react-native-webview"),Y=require("@magic-sdk/provider"),ht=require("lodash");var Nt="MAGIC_PAYLOAD_FLAG_TYPED_ARRAY";function kt(){return W.StyleSheet.create({"magic-webview":{flex:1,backgroundColor:"transparent"},"webview-container":{flex:1,width:"100%",backgroundColor:"transparent",position:"absolute",top:0,left:0,right:0,bottom:0},show:{zIndex:1e4,elevation:1e4},hide:{zIndex:-1e4,elevation:0}})}var C=class extends Y.ViewController{constructor(){super(...arguments);this.Relayer=()=>{console.log("HERE WORKING");let[i,h]=(0,g.useState)(!1),c=(0,g.useCallback)(L=>{this.webView=L},[]),b=(0,g.useCallback)(L=>{this.container=ct(st({},L),{showOverlay:v,hideOverlay:E})},[]),v=(0,g.useCallback)(()=>{h(!0)},[]),E=(0,g.useCallback)(()=>{h(!1)},[]),u=(0,g.useMemo)(()=>[this.styles["webview-container"],i?this.styles.show:this.styles.hide],[i]),_=(0,g.useCallback)(L=>{this.handleReactNativeWebViewMessage(L)},[]);return g.default.createElement(W.View,{ref:b,style:u},g.default.createElement(ft.WebView,{ref:c,source:{uri:`${this.endpoint}/send/?params=${encodeURIComponent(this.parameters)}`},onMessage:_,style:this.styles["magic-webview"]}))}}init(){this.webView=null,this.container=null,this.styles=kt()}handleReactNativeWebViewMessage(i){var h;if(i.nativeEvent&&typeof i.nativeEvent.data=="string"&&(i.nativeEvent.url===`${this.endpoint}/send/?params=${encodeURIComponent(this.parameters)}`||i.nativeEvent.url===`${this.endpoint}/send/?params=${this.parameters}`)){let c=JSON.parse(i.nativeEvent.data,(b,v)=>{try{if(v&&typeof v=="object"&&v.flag&&v.flag==="MAGIC_PAYLOAD_FLAG_TYPED_ARRAY")return new global[v.constructor](v.data.split(","))}catch(E){}return v});if(c&&c.msgType&&this.messageHandlers.size){c.response=(h=c.response)!=null?h:{};let b={data:c};for(let v of this.messageHandlers.values())v(b)}}}hideOverlay(){this.container&&this.container.hideOverlay()}showOverlay(){this.container&&this.container.showOverlay()}_post(i){return T(this,null,function*(){if(this.webView&&this.webView.postMessage)this.webView.postMessage(JSON.stringify(i,(h,c)=>(0,ht.isTypedArray)(c)?{constructor:c.constructor.name,data:c.toString(),flag:Nt}:c),this.endpoint);else throw(0,Y.createModalNotReadyError)()})}};var ut=require("@magic-sdk/provider"),j=class extends ut.SDKBase{get Relayer(){return this.overlay.Relayer}};f(l,require("@magic-sdk/commons"),module.exports);global.process=mt.merge(global.process,It);global.process.browser=!1;global.Buffer=K.Buffer;global.URL=U.URL;global.URLSearchParams=U.URLSearchParams;global.btoa=o=>K.Buffer.from(o,"binary").toString("base64");global.atob=o=>K.Buffer.from(o,"base64").toString("binary");var Pt=(0,pt.createSDK)(j,{platform:"react-native",sdkName:"@magic-sdk/react-native",version:"11.0.0",bundleId:dt.applicationId,defaultEndpoint:"https://box.magic.link/",ViewController:C,configureStorage:()=>T(void 0,null,function*(){let o=vt.default.createInstance({name:"MagicAuthLocalStorageDB",storeName:"MagicAuthLocalStorage"}),s=(0,yt.driverWithoutSerialization)();return yield Promise.all([o.defineDriver(s),o.defineDriver(X)]),yield o.setDriver([s._driver,X._driver]),o})});0&&(module.exports={Magic});
//# sourceMappingURL=index.js.map