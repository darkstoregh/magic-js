var a=(s,e,n)=>new Promise((g,o)=>{var l=r=>{try{i(n.next(r))}catch(t){o(t)}},u=r=>{try{i(n.throw(r))}catch(t){o(t)}},i=r=>r.done?g(r.value):Promise.resolve(r.value).then(l,u);i((n=n.apply(s,e)).next())});import{Extension as p}from"@magic-sdk/commons";var c=class extends p.Internal{constructor(n){super();this.algorandConfig=n;this.name="algod";this.config={};this.config={rpcUrl:n.rpcUrl,chainType:"ALOGD"}}signTransaction(n){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("algod_signTransaction",n))})}signBid(n){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("algod_signBid",n))})}getWallet(){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("algod_getWallet",[]))})}signGroupTransaction(n){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("algod_signGroupTransaction",n))})}signGroupTransactionV2(n){return a(this,null,function*(){return this.request(this.utils.createJsonRpcRequestPayload("algod_signGroupTransactionV2",n))})}};export{c as AlgorandExtension};
//# sourceMappingURL=index.js.map
