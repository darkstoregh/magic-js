var f=Object.defineProperty,y=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(r,e,n)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,t=(r,e)=>{for(var n in e||(e={}))S.call(e,n)&&u(r,n,e[n]);if(g)for(var n of g(e))h.call(e,n)&&u(r,n,e[n]);return r},c=(r,e)=>y(r,d(e));import{Extension as T}from"@magic-sdk/commons";var l=class extends T.Internal{constructor(n){super();this.solanaConfig=n;this.name="solana";this.config={};this.sendAndConfirmTransaction=(n,i)=>{let{instructions:s}=n;return s.map(a=>{a.programId=a.programId.toBase58()}),this.request({id:42,jsonrpc:"2.0",method:"sol_sendTransaction",params:{instructions:s,options:i}})};this.signTransaction=(n,i)=>{let{instructions:s}=n,a=s.map(o=>c(t({},o),{keys:o.keys.map(p=>c(t({},p),{pubkey:p.pubkey.toBase58()})),programId:o.programId.toBase58()})),m={feePayer:n.feePayer.toBase58(),instructions:a,recentBlockhash:n.recentBlockhash,serializeConfig:i};return this.request({id:42,jsonrpc:"2.0",method:"sol_signTransaction",params:m})};this.signMessage=n=>this.request({id:42,jsonrpc:"2.0",method:"sol_signMessage",params:{message:n}});this.config={rpcUrl:n.rpcUrl,chainType:"SOLANA"}}};export{l as SolanaExtension};
//# sourceMappingURL=index.js.map
