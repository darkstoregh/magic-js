var y=Object.defineProperty,h=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(s,e,n)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,m=(s,e)=>{for(var n in e||(e={}))q.call(e,n)&&u(s,n,e[n]);if(l)for(var n of l(e))F.call(e,n)&&u(s,n,e[n]);return s},g=(s,e)=>h(s,k(e));var f=(s,e,n)=>new Promise((w,c)=>{var a=t=>{try{i(n.next(t))}catch(r){c(r)}},p=t=>{try{i(n.throw(t))}catch(r){c(r)}},i=t=>t.done?w(t.value):Promise.resolve(t.value).then(a,p);i((n=n.apply(s,e)).next())});import{Extension as N}from"@magic-sdk/commons";import*as o from"@onflow/fcl";var d=class extends N.Internal{constructor(n){super();this.flowConfig=n;this.name="flow";this.config={};this.authorization=(...w)=>f(this,[...w],function*(n={}){o.config().put("accessNode.api",this.config.rpcUrl);let c=yield this.request({id:42,jsonrpc:"2.0",method:"flow_getAccount",params:{}}),a=0,p;if(n.role.proposer){let t=yield o.send([o.getAccount(c)]);p=(yield o.decode(t)).keys[a].sequenceNumber}let i=t=>f(this,null,function*(){let r=yield this.request({id:42,jsonrpc:"2.0",method:"flow_signTransaction",params:{message:t.message}});return{addr:c,keyId:a,signature:r}});return g(m({},n),{addr:c,keyId:a,signingFunction:i,sequenceNum:p})});this.config={rpcUrl:n.rpcUrl,chainType:"FLOW",network:n.network}}};export{d as FlowExtension};
//# sourceMappingURL=index.js.map
