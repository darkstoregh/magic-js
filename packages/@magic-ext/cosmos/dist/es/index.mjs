var e=(a,d,n)=>new Promise((s,i)=>{var c=r=>{try{t(n.next(r))}catch(o){i(o)}},p=r=>{try{t(n.throw(r))}catch(o){i(o)}},t=r=>r.done?s(r.value):Promise.resolve(r.value).then(c,p);t((n=n.apply(a,d)).next())});import{Extension as u}from"@magic-sdk/commons";var g=class extends u.Internal{constructor(n){super();this.cosmosConfig=n;this.name="cosmos";this.config={};this.signAndBroadcast=(n,s)=>e(this,null,function*(){return this.request({id:42,jsonrpc:"2.0",method:"cos_signAndBroadcast",params:{message:n,fee:s}})});this.sign=(n,s)=>e(this,null,function*(){return this.request({id:42,jsonrpc:"2.0",method:"cos_sign",params:{message:n,fee:s}})});this.sendTokens=(n,s,i,c)=>e(this,null,function*(){return this.request({id:42,jsonrpc:"2.0",method:"cos_sendTokens",params:{recipientAddress:n,transferAmount:s,denom:i,memo:c}})});this.changeAddress=n=>e(this,null,function*(){return this.request({id:41,jsonrpc:"2.0",method:"cos_changeAddress",params:{prefix:n}})});this.config={rpcUrl:n.rpcUrl,chainType:"COSMOS"}}};export{g as CosmosExtension};
//# sourceMappingURL=index.mjs.map
