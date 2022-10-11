"use strict";var e=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var d=(n,r)=>{for(var t in r)e(n,t,{get:r[t],enumerable:!0})},l=(n,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of m(r))!u.call(n,o)&&o!==t&&e(n,o,{get:()=>r[o],enumerable:!(s=p(r,o))||s.enumerable});return n};var g=n=>l(e({},"__esModule",{value:!0}),n);var f={};d(f,{PolkadotExtension:()=>i});module.exports=g(f);var c=require("@magic-sdk/commons"),i=class extends c.Extension.Internal{constructor(t){super();this.polkadotConfig=t;this.name="polkadot";this.sendTransaction=(t,s)=>this.request({id:42,jsonrpc:"2.0",method:"pdt_sendTransaction",params:{to:t,value:s}});this.contractCall=(t,s,o,a)=>this.request({id:42,jsonrpc:"2.0",method:"pdt_contractCall",params:{contractAddress:t,value:s,maxGas:o,data:a}});this.getAccount=()=>this.request({id:42,jsonrpc:"2.0",method:"pdt_getAccount",params:[]});this.config={rpcUrl:t.rpcUrl,chainType:"POLKADOT"}}};
//# sourceMappingURL=index.js.map
