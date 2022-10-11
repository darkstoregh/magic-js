import{Extension as i}from"@magic-sdk/commons";var e=class extends i.Internal{constructor(){super();this.name="ed";this.config={};this.getPublicKey=()=>this.request({id:42,jsonrpc:"2.0",method:"ed_getPublicKey",params:[]});this.sign=r=>this.request({id:42,jsonrpc:"2.0",method:"ed_sign",params:r});this.config={chainType:"ED"}}};export{e as Ed25519Extension};
//# sourceMappingURL=index.js.map
