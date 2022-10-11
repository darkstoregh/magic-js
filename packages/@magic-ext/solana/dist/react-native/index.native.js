"use strict";var i=Object.defineProperty,S=Object.defineProperties,h=Object.getOwnPropertyDescriptor,T=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(e,r,n)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,c=(e,r)=>{for(var n in r||(r={}))f.call(r,n)&&l(e,n,r[n]);if(m)for(var n of m(r))C.call(r,n)&&l(e,n,r[n]);return e},p=(e,r)=>S(e,T(r));var x=(e,r)=>{for(var n in r)i(e,n,{get:r[n],enumerable:!0})},B=(e,r,n,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of b(r))!f.call(e,s)&&s!==n&&i(e,s,{get:()=>r[s],enumerable:!(a=h(r,s))||a.enumerable});return e};var I=e=>B(i({},"__esModule",{value:!0}),e);var k={};x(k,{SolanaExtension:()=>g});module.exports=I(k);var y=require("@magic-sdk/commons");var g=class extends y.Extension.Internal{constructor(n){super();this.solanaConfig=n;this.name="solana";this.config={};this.sendAndConfirmTransaction=(n,a)=>{let{instructions:s}=n;return s.map(o=>{o.programId=o.programId.toBase58()}),this.request({id:42,jsonrpc:"2.0",method:"sol_sendTransaction",params:{instructions:s,options:a}})};this.signTransaction=(n,a)=>{let{instructions:s}=n,o=s.map(t=>p(c({},t),{keys:t.keys.map(u=>p(c({},u),{pubkey:u.pubkey.toBase58()})),programId:t.programId.toBase58()})),d={feePayer:n.feePayer.toBase58(),instructions:o,recentBlockhash:n.recentBlockhash,serializeConfig:a};return this.request({id:42,jsonrpc:"2.0",method:"sol_signTransaction",params:d})};this.signMessage=n=>this.request({id:42,jsonrpc:"2.0",method:"sol_signMessage",params:{message:n}});this.config={rpcUrl:n.rpcUrl,chainType:"SOLANA"}}};
//# sourceMappingURL=index.native.js.map
