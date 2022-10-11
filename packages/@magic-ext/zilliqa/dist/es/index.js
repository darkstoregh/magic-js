import{Extension as u}from"@magic-sdk/commons";var c=class extends u.Internal{constructor(t){super();this.zilliqaConfig=t;this.name="zilliqa";this.sendTransaction=(t,n)=>(t.amount&&(t.amount=typeof t.amount=="string"?t.amount:t.amount.toString()),t.gasPrice&&(t.gasPrice=typeof t.gasPrice=="string"?t.gasPrice:t.gasPrice.toString()),t.gasLimit&&(t.gasLimit=typeof t.gasLimit=="string"?t.gasLimit:t.gasLimit.toNumber()),this.request({id:42,method:"zil_sendTransaction",jsonrpc:"2.0",params:{params:t,toDs:n}}));this.deployContract=(t,n,i,o,e,g)=>(i.amount&&(i.amount=typeof i.amount=="string"?i.amount:i.amount.toString()),i.gasPrice&&(i.gasPrice=typeof i.gasPrice=="string"?i.gasPrice:i.gasPrice.toString()),i.gasLimit&&(i.gasLimit=typeof i.gasLimit=="string"?i.gasLimit:i.gasLimit.toNumber()),this.request({id:42,jsonrpc:"2.0",method:"zil_deployContract",params:{init:t,code:n,params:i,attempts:o,interval:e,toDs:g}}));this.callContract=(t,n,i,o=33,e=1e3,g=!1,r)=>(i.amount&&(i.amount=typeof i.amount=="string"?i.amount:i.amount.toString()),i.gasPrice&&(i.gasPrice=typeof i.gasPrice=="string"?i.gasPrice:i.gasPrice.toString()),i.gasLimit&&(i.gasLimit=typeof i.gasLimit=="string"?i.gasLimit:i.gasLimit.toNumber()),this.request({id:42,jsonrpc:"2.0",method:"zil_callContract",params:{transition:t,args:n,params:i,attempts:o,interval:e,toDs:g,contractAddress:r}}));this.getWallet=()=>this.request({id:42,jsonrpc:"2.0",method:"zil_getWallet",params:[]});this.config={rpcUrl:t.rpcUrl,chainType:"ZILLIQA"}}};export{c as ZilliqaExtension};
//# sourceMappingURL=index.js.map
