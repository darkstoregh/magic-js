import{Extension as r}from"magic-sdk";var s=(t=>(t.ShowWallet="mc_wallet",t.RequestUserInfo="mc_request_user_info",t.Disconnect="mc_disconnect",t))(s||{});var o=class extends r.Internal{constructor(){super(...arguments);this.name="connect";this.config={mc:!0}}showWallet(){let e=this.utils.createJsonRpcRequestPayload("mc_wallet");return this.request(e)}requestUserInfo(e){let t=this.utils.createJsonRpcRequestPayload("mc_request_user_info",e?[e]:[]);return this.request(t)}disconnect(){let e=this.utils.createJsonRpcRequestPayload("mc_disconnect");return this.request(e)}};export{o as ConnectExtension,s as MagicConnectPayloadMethod};
//# sourceMappingURL=index.js.map
