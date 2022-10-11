"use strict";var MagicZilliqaExtension=(()=>{var d=Object.create;var g=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var m=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports),z=(n,o)=>{for(var t in o)g(n,t,{get:o[t],enumerable:!0})},s=(n,o,t,e)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of h(o))!C.call(n,i)&&i!==t&&g(n,i,{get:()=>o[i],enumerable:!(e=b(o,i))||e.enumerable});return n};var S=(n,o,t)=>(t=n!=null?d(q(n)):{},s(o||!n||!n.__esModule?g(t,"default",{value:n,enumerable:!0}):t,n)),j=n=>s(g({},"__esModule",{value:!0}),n);var y=m((_,f)=>{f.exports=Magic});var T={};z(T,{default:()=>x});var P=S(y()),c=class extends P.Extension.Internal{constructor(t){super();this.zilliqaConfig=t;this.name="zilliqa";this.sendTransaction=(t,e)=>(t.amount&&(t.amount=typeof t.amount=="string"?t.amount:t.amount.toString()),t.gasPrice&&(t.gasPrice=typeof t.gasPrice=="string"?t.gasPrice:t.gasPrice.toString()),t.gasLimit&&(t.gasLimit=typeof t.gasLimit=="string"?t.gasLimit:t.gasLimit.toNumber()),this.request({id:42,method:"zil_sendTransaction",jsonrpc:"2.0",params:{params:t,toDs:e}}));this.deployContract=(t,e,i,r,l,u)=>(i.amount&&(i.amount=typeof i.amount=="string"?i.amount:i.amount.toString()),i.gasPrice&&(i.gasPrice=typeof i.gasPrice=="string"?i.gasPrice:i.gasPrice.toString()),i.gasLimit&&(i.gasLimit=typeof i.gasLimit=="string"?i.gasLimit:i.gasLimit.toNumber()),this.request({id:42,jsonrpc:"2.0",method:"zil_deployContract",params:{init:t,code:e,params:i,attempts:r,interval:l,toDs:u}}));this.callContract=(t,e,i,r=33,l=1e3,u=!1,L)=>(i.amount&&(i.amount=typeof i.amount=="string"?i.amount:i.amount.toString()),i.gasPrice&&(i.gasPrice=typeof i.gasPrice=="string"?i.gasPrice:i.gasPrice.toString()),i.gasLimit&&(i.gasLimit=typeof i.gasLimit=="string"?i.gasLimit:i.gasLimit.toNumber()),this.request({id:42,jsonrpc:"2.0",method:"zil_callContract",params:{transition:t,args:e,params:i,attempts:r,interval:l,toDs:u,contractAddress:L}}));this.getWallet=()=>this.request({id:42,jsonrpc:"2.0",method:"zil_getWallet",params:[]});this.config={rpcUrl:t.rpcUrl,chainType:"ZILLIQA"}}};var x=c;return j(T);})();
if (MagicZilliqaExtension && MagicZilliqaExtension.default != null) { MagicZilliqaExtension = Object.assign(MagicZilliqaExtension.default, MagicZilliqaExtension); delete MagicZilliqaExtension.default; }
