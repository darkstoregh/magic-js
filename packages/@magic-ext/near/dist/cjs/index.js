"use strict";var o=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var N=(r,n)=>{for(var e in n)o(r,e,{get:n[e],enumerable:!0})},h=(r,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of b(n))!m.call(r,t)&&t!==e&&o(r,t,{get:()=>n[t],enumerable:!(i=f(n,t))||i.enumerable});return r};var P=r=>h(o({},"__esModule",{value:!0}),r);var u=(r,n,e)=>new Promise((i,t)=>{var g=a=>{try{s(e.next(a))}catch(c){t(c)}},y=a=>{try{s(e.throw(a))}catch(c){t(c)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(g,y);s((e=e.apply(r,n)).next())});var R={};N(R,{NearExtension:()=>l});module.exports=P(R);var p=require("@magic-sdk/commons");var l=class extends p.Extension.Internal{constructor(e){super();this.nearConfig=e;this.name="near";this.config={};this.config={rpcUrl:e.rpcUrl,chainType:"NEAR"}}signTransaction(e){return u(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("near_signTransaction",e))})}getPublicKey(){return u(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("near_getPublicKey",[]))})}};
//# sourceMappingURL=index.js.map
