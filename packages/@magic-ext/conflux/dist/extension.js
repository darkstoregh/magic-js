"use strict";var MagicConfluxExtension=(()=>{var g=Object.create;var a=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var U=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports),b=(n,o)=>{for(var r in o)a(n,r,{get:o[r],enumerable:!0})},u=(n,o,r,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of T(o))!I.call(n,t)&&t!==r&&a(n,t,{get:()=>o[t],enumerable:!(s=y(o,t))||s.enumerable});return n};var k=(n,o,r)=>(r=n!=null?g(h(n)):{},u(o||!n||!n.__esModule?a(r,"default",{value:n,enumerable:!0}):r,n)),w=n=>u(a({},"__esModule",{value:!0}),n);var f=(n,o,r)=>new Promise((s,t)=>{var m=e=>{try{i(r.next(e))}catch(p){t(p)}},C=e=>{try{i(r.throw(e))}catch(p){t(p)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(m,C);i((r=r.apply(n,o)).next())});var x=U((S,l)=>{l.exports=Magic});var q={};b(q,{default:()=>c});var d=k(x());var c=class extends d.Extension.Internal{constructor(r){super();this.confluxConfig=r;this.name="conflux";this.config={};this.config={chainType:"CONFLUX",options:{rpcUrl:r.rpcUrl,networkId:r.networkId}}}sendTransaction(r){return f(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("cfx_sendTransaction",r))})}};return w(q);})();
if (MagicConfluxExtension && MagicConfluxExtension.default != null) { MagicConfluxExtension = Object.assign(MagicConfluxExtension.default, MagicConfluxExtension); delete MagicConfluxExtension.default; }
