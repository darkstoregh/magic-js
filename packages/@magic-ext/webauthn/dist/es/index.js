var c=(e,s,n)=>new Promise((t,r)=>{var i=o=>{try{u(n.next(o))}catch(l){r(l)}},a=o=>{try{u(n.throw(o))}catch(l){r(l)}},u=o=>o.done?t(o.value):Promise.resolve(o.value).then(i,a);u((n=n.apply(e,s)).next())});import{Extension as w}from"@magic-sdk/commons";var y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function b(e){let s,n=e.length%3,t="",r,i;function a(o){return y.charAt(o)}function u(o){return a(o>>18&63)+a(o>>12&63)+a(o>>6&63)+a(o&63)}for(s=0,i=e.length-n;s<i;s+=3)r=(e[s]<<16)+(e[s+1]<<8)+e[s+2],t+=u(r);switch(n){case 1:r=e[e.length-1],t+=a(r>>2),t+=a(r<<4&63),t+="==";break;case 2:r=(e[e.length-2]<<8)+e[e.length-1],t+=a(r>>10),t+=a(r>>4&63),t+=a(r<<2&63),t+="=";break;default:break}return t}function h(e){return b(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function p(e){return b(e).replace(/\+/g,"-").replace(/\//g,"_")}function _(e){return Array.from(e).map(function(s){return`0${s.toString(16)}`.substr(-2)}).join("")}var g=e=>{let s=new Uint8Array(e.response.attestationObject),n=new Uint8Array(e.response.clientDataJSON),t=new Uint8Array(e.rawId),r=e.getClientExtensionResults();return{id:e.id,rawId:h(t),type:e.type,attObj:h(s),clientData:h(n),registrationClientExtensions:JSON.stringify(r)}},f=e=>{let s=new Uint8Array(e.response.authenticatorData),n=new Uint8Array(e.response.clientDataJSON),t=new Uint8Array(e.rawId),r=new Uint8Array(e.response.signature),i=e.getClientExtensionResults();return{id:e.id,rawId:h(t),type:e.type,authData:p(s),clientData:p(n),signature:_(r),assertionClientExtensions:JSON.stringify(i)}};var d=class extends w.Internal{constructor(){super(...arguments);this.name="webauthn";this.config={}}createWebAuthnNotSupportError(){this.createError("WEBAUTHN_NOT_SUPPORTED","WebAuthn is not supported in this device.",{})}createWebAuthCreateCredentialError(n){this.createError("WEBAUTHN_CREATE_CREDENTIAL_ERROR",`Error creating credential: ${n}`,{})}registerNewUser(n){return c(this,null,function*(){if(!window.PublicKeyCredential)throw this.createWebAuthnNotSupportError();let{username:t,nickname:r=""}=n,i=yield this.request(this.utils.createJsonRpcRequestPayload("magic_auth_webauthn_registration_start",[{username:t}])),a;try{a=yield navigator.credentials.create({publicKey:i.credential_options})}catch(u){throw this.createWebAuthCreateCredentialError(u)}return this.request(this.utils.createJsonRpcRequestPayload("magic_auth_webauthn_register",[{id:i.id,nickname:r,transport:a.response.getTransports(),user_agent:navigator.userAgent,registration_response:g(a)}]))})}login(n){return c(this,null,function*(){if(!window.PublicKeyCredential)throw this.createWebAuthnNotSupportError();let{username:t}=n,r=yield this.request(this.utils.createJsonRpcRequestPayload("magic_auth_login_with_web_authn",[{username:t}])),i;try{i=yield navigator.credentials.get({publicKey:r})}catch(a){throw this.createWebAuthCreateCredentialError(a)}return this.request(this.utils.createJsonRpcRequestPayload("magic_auth_login_with_webauthn_verify",[{username:t,assertion_response:f(i)}]))})}updateInfo(n){let{id:t,nickname:r}=n,i=this.utils.createJsonRpcRequestPayload("magic_user_update_webauthn",[{webAuthnCredentialsId:t,nickname:r}]);return this.request(i)}unregisterDevice(n){let t=this.utils.createJsonRpcRequestPayload("magic_user_unregister_webauthn",[{webAuthnCredentialsId:n}]);return this.request(t)}registerNewDevice(n=""){return c(this,null,function*(){if(!window.PublicKeyCredential)throw this.createWebAuthnNotSupportError();let t=yield this.request(this.utils.createJsonRpcRequestPayload("magic_auth_register_webauthn_device_start",[])),r;try{r=yield navigator.credentials.create({publicKey:t.credential_options})}catch(i){throw this.createWebAuthCreateCredentialError(i)}return this.request(this.utils.createJsonRpcRequestPayload("magic_auth_register_webauthn_device",[{nickname:n,transport:r.response.getTransports(),user_agent:navigator.userAgent,registration_response:g(r)}]))})}getMetadata(){let n=this.utils.createJsonRpcRequestPayload("magic_user_get_webauthn_credentials",[]);return this.request(n)}};export{d as WebAuthnExtension};
//# sourceMappingURL=index.js.map