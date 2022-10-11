"use strict";var MagicTerraExtension=(()=>{var x=Object.create;var a=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var K=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),R=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},l=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of T(e))!q.call(r,i)&&i!==t&&a(r,i,{get:()=>e[i],enumerable:!(s=P(e,i))||s.enumerable});return r};var C=(r,e,t)=>(t=r!=null?x(h(r)):{},l(e||!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r)),U=r=>l(a({},"__esModule",{value:!0}),r);var p=(r,e,t)=>new Promise((s,i)=>{var y=n=>{try{o(t.next(n))}catch(u){i(u)}},b=n=>{try{o(t.throw(n))}catch(u){i(u)}},o=n=>n.done?s(n.value):Promise.resolve(n.value).then(y,b);o((t=t.apply(r,e)).next())});var g=K((J,f)=>{f.exports=Magic});var B={};R(B,{default:()=>d});var m=C(g());var c=class extends m.Extension.Internal{constructor(t){super();this.terraConfig=t;this.name="terra";this.config={};this.config={rpcUrl:t.rpcUrl}}getPublicKey(){return p(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("terra_getPublicKey",[]))})}sign(t){return p(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("terra_sign",[t]))})}};var d=c;return U(B);})();
if (MagicTerraExtension && MagicTerraExtension.default != null) { MagicTerraExtension = Object.assign(MagicTerraExtension.default, MagicTerraExtension); delete MagicTerraExtension.default; }
