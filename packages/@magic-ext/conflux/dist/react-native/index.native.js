"use strict";var i=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var y=(o,r)=>{for(var n in r)i(o,n,{get:r[n],enumerable:!0})},g=(o,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of m(r))!C.call(o,t)&&t!==n&&i(o,t,{get:()=>r[t],enumerable:!(s=d(r,t))||s.enumerable});return o};var T=o=>g(i({},"__esModule",{value:!0}),o);var u=(o,r,n)=>new Promise((s,t)=>{var l=e=>{try{c(n.next(e))}catch(a){t(a)}},x=e=>{try{c(n.throw(e))}catch(a){t(a)}},c=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,x);c((n=n.apply(o,r)).next())});var h={};y(h,{ConfluxExtension:()=>p});module.exports=T(h);var f=require("@magic-sdk/commons");var p=class extends f.Extension.Internal{constructor(n){super();this.confluxConfig=n;this.name="conflux";this.config={};this.config={chainType:"CONFLUX",options:{rpcUrl:n.rpcUrl,networkId:n.networkId}}}sendTransaction(n){return u(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("cfx_sendTransaction",n))})}};
//# sourceMappingURL=index.native.js.map