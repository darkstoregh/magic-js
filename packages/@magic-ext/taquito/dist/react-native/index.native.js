"use strict";var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var b=(r,i)=>{for(var t in i)p(r,t,{get:i[t],enumerable:!0})},P=(r,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of q(i))!f.call(r,n)&&n!==t&&p(r,n,{get:()=>i[n],enumerable:!(e=h(i,n))||e.enumerable});return r};var K=r=>P(p({},"__esModule",{value:!0}),r);var s=(r,i,t)=>new Promise((e,n)=>{var m=a=>{try{c(t.next(a))}catch(u){n(u)}},l=a=>{try{c(t.throw(a))}catch(u){n(u)}},c=a=>a.done?e(a.value):Promise.resolve(a.value).then(m,l);c((t=t.apply(r,i)).next())});var x={};b(x,{TaquitoExtension:()=>g});module.exports=K(x);var y=require("@magic-sdk/commons");var o=class{constructor(i,t,e){this.pkh=i;this.pK=t;this.magic=e}publicKeyHash(){return s(this,null,function*(){return this.pkh})}publicKey(){return s(this,null,function*(){return this.pK})}secretKey(){return s(this,null,function*(){throw new Error("Secret key cannot be exposed")})}sign(i,t){return s(this,null,function*(){return this.magic.request(this.magic.utils.createJsonRpcRequestPayload("taquito_sign",[{bytes:i,watermark:t}]))})}};var g=class extends y.Extension.Internal{constructor(t){super();this.taquitoConfig=t;this.name="taquito";this.config={};this.config={rpcUrl:t.rpcUrl}}getPublicKey(){return s(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("taquito_getPublicKeyAndHash",[]))})}sign(t,e){return s(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("taquito_sign",[{bytes:t,watermark:e}]))})}createMagicSigner(){return s(this,null,function*(){let{pk:t,pkh:e}=yield this.getPublicKey();return new o(e,t,this)})}};
//# sourceMappingURL=index.native.js.map