var a=(i,s,e)=>new Promise((u,c)=>{var l=n=>{try{r(e.next(n))}catch(t){c(t)}},p=n=>{try{r(e.throw(n))}catch(t){c(t)}},r=n=>n.done?u(n.value):Promise.resolve(n.value).then(l,p);r((e=e.apply(i,s)).next())});import{Extension as g}from"@magic-sdk/commons";var o=class extends g.Internal{constructor(e){super();this.nearConfig=e;this.name="near";this.config={};this.config={rpcUrl:e.rpcUrl,chainType:"NEAR"}}signTransaction(e){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("near_signTransaction",e))})}getPublicKey(){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("near_getPublicKey",[]))})}};export{o as NearExtension};
//# sourceMappingURL=index.js.map