var i=(a,s,t)=>new Promise((r,u)=>{var p=e=>{try{o(t.next(e))}catch(c){u(c)}},y=e=>{try{o(t.throw(e))}catch(c){u(c)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(p,y);o((t=t.apply(a,s)).next())});import{Extension as m}from"@magic-sdk/commons";var n=class{constructor(s,t,r){this.pkh=s;this.pK=t;this.magic=r}publicKeyHash(){return i(this,null,function*(){return this.pkh})}publicKey(){return i(this,null,function*(){return this.pK})}secretKey(){return i(this,null,function*(){throw new Error("Secret key cannot be exposed")})}sign(s,t){return i(this,null,function*(){return this.magic.request(this.magic.utils.createJsonRpcRequestPayload("taquito_sign",[{bytes:s,watermark:t}]))})}};var g=class extends m.Internal{constructor(t){super();this.taquitoConfig=t;this.name="taquito";this.config={};this.config={rpcUrl:t.rpcUrl}}getPublicKey(){return i(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("taquito_getPublicKeyAndHash",[]))})}sign(t,r){return i(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("taquito_sign",[{bytes:t,watermark:r}]))})}createMagicSigner(){return i(this,null,function*(){let{pk:t,pkh:r}=yield this.getPublicKey();return new n(r,t,this)})}};export{g as TaquitoExtension};
//# sourceMappingURL=index.js.map
