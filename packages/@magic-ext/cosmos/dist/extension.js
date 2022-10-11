"use strict";var MagicCosmosExtension=(()=>{var y=Object.create;var c=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var C=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),T=(n,r)=>{for(var s in r)c(n,s,{get:r[s],enumerable:!0})},m=(n,r,s,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of S(r))!b.call(n,i)&&i!==s&&c(n,i,{get:()=>r[i],enumerable:!(e=A(r,i))||e.enumerable});return n};var j=(n,r,s)=>(s=n!=null?y(x(n)):{},m(r||!n||!n.__esModule?c(s,"default",{value:n,enumerable:!0}):s,n)),k=n=>m(c({},"__esModule",{value:!0}),n);var o=(n,r,s)=>new Promise((e,i)=>{var p=t=>{try{d(s.next(t))}catch(g){i(g)}},l=t=>{try{d(s.throw(t))}catch(g){i(g)}},d=t=>t.done?e(t.value):Promise.resolve(t.value).then(p,l);d((s=s.apply(n,r)).next())});var h=C((U,u)=>{u.exports=Magic});var B={};T(B,{default:()=>q});var f=j(h());var a=class extends f.Extension.Internal{constructor(s){super();this.cosmosConfig=s;this.name="cosmos";this.config={};this.signAndBroadcast=(s,e)=>o(this,null,function*(){return this.request({id:42,jsonrpc:"2.0",method:"cos_signAndBroadcast",params:{message:s,fee:e}})});this.sign=(s,e)=>o(this,null,function*(){return this.request({id:42,jsonrpc:"2.0",method:"cos_sign",params:{message:s,fee:e}})});this.sendTokens=(s,e,i,p)=>o(this,null,function*(){return this.request({id:42,jsonrpc:"2.0",method:"cos_sendTokens",params:{recipientAddress:s,transferAmount:e,denom:i,memo:p}})});this.changeAddress=s=>o(this,null,function*(){return this.request({id:41,jsonrpc:"2.0",method:"cos_changeAddress",params:{prefix:s}})});this.config={rpcUrl:s.rpcUrl,chainType:"COSMOS"}}};var q=a;return k(B);})();
if (MagicCosmosExtension && MagicCosmosExtension.default != null) { MagicCosmosExtension = Object.assign(MagicCosmosExtension.default, MagicCosmosExtension); delete MagicCosmosExtension.default; }
