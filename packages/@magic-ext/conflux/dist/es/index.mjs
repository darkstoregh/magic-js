var a=(e,s,n)=>new Promise((u,c)=>{var l=r=>{try{o(n.next(r))}catch(t){c(t)}},p=r=>{try{o(n.throw(r))}catch(t){c(t)}},o=r=>r.done?u(r.value):Promise.resolve(r.value).then(l,p);o((n=n.apply(e,s)).next())});import{Extension as f}from"@magic-sdk/commons";var i=class extends f.Internal{constructor(n){super();this.confluxConfig=n;this.name="conflux";this.config={};this.config={chainType:"CONFLUX",options:{rpcUrl:n.rpcUrl,networkId:n.networkId}}}sendTransaction(n){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("cfx_sendTransaction",n))})}};export{i as ConfluxExtension};
//# sourceMappingURL=index.mjs.map
