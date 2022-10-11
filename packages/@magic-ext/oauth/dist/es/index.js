var te=Object.create;var D=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var H=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports);var se=(n,r,s,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let h of ie(r))!oe.call(n,h)&&h!==s&&D(n,h,{get:()=>r[h],enumerable:!(m=ne(r,h))||m.enumerable});return n};var T=(n,r,s)=>(s=n!=null?te(ae(n)):{},se(r||!n||!n.__esModule?D(s,"default",{value:n,enumerable:!0}):s,n));var C=(n,r,s)=>new Promise((m,h)=>{var w=p=>{try{d(s.next(p))}catch(u){h(u)}},R=p=>{try{d(s.throw(p))}catch(u){h(u)}},d=p=>p.done?m(p.value):Promise.resolve(p.value).then(w,R);d((s=s.apply(n,r)).next())});var k=H((I,F)=>{(function(n,r){typeof I=="object"?F.exports=I=r():typeof define=="function"&&define.amd?define([],r):n.CryptoJS=r()})(I,function(){var n=n||function(r,s){var m=Object.create||function(){function e(){}return function(t){var c;return e.prototype=t,c=new e,e.prototype=null,c}}(),h={},w=h.lib={},R=w.Base=function(){return{extend:function(e){var t=m(this);return e&&t.mixIn(e),(!t.hasOwnProperty("init")||this.init===t.init)&&(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),d=w.WordArray=R.extend({init:function(e,t){e=this.words=e||[],t!=s?this.sigBytes=t:this.sigBytes=e.length*4},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,c=e.words,i=this.sigBytes,g=e.sigBytes;if(this.clamp(),i%4)for(var v=0;v<g;v++){var b=c[v>>>2]>>>24-v%4*8&255;t[i+v>>>2]|=b<<24-(i+v)%4*8}else for(var v=0;v<g;v+=4)t[i+v>>>2]=c[v>>>2];return this.sigBytes+=g,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-t%4*8,e.length=r.ceil(t/4)},clone:function(){var e=R.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],c=function(y){var y=y,A=987654321,x=4294967295;return function(){A=36969*(A&65535)+(A>>16)&x,y=18e3*(y&65535)+(y>>16)&x;var B=(A<<16)+y&x;return B/=4294967296,B+=.5,B*(r.random()>.5?1:-1)}},i=0,g;i<e;i+=4){var v=c((g||r.random())*4294967296);g=v()*987654071,t.push(v()*4294967296|0)}return new d.init(t,e)}}),p=h.enc={},u=p.Hex={stringify:function(e){for(var t=e.words,c=e.sigBytes,i=[],g=0;g<c;g++){var v=t[g>>>2]>>>24-g%4*8&255;i.push((v>>>4).toString(16)),i.push((v&15).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,c=[],i=0;i<t;i+=2)c[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new d.init(c,t/2)}},_=p.Latin1={stringify:function(e){for(var t=e.words,c=e.sigBytes,i=[],g=0;g<c;g++){var v=t[g>>>2]>>>24-g%4*8&255;i.push(String.fromCharCode(v))}return i.join("")},parse:function(e){for(var t=e.length,c=[],i=0;i<t;i++)c[i>>>2]|=(e.charCodeAt(i)&255)<<24-i%4*8;return new d.init(c,t)}},a=p.Utf8={stringify:function(e){try{return decodeURIComponent(escape(_.stringify(e)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(e){return _.parse(unescape(encodeURIComponent(e)))}},f=w.BufferedBlockAlgorithm=R.extend({reset:function(){this._data=new d.init,this._nDataBytes=0},_append:function(e){typeof e=="string"&&(e=a.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,c=t.words,i=t.sigBytes,g=this.blockSize,v=g*4,b=i/v;e?b=r.ceil(b):b=r.max((b|0)-this._minBufferSize,0);var y=b*g,A=r.min(y*4,i);if(y){for(var x=0;x<y;x+=g)this._doProcessBlock(c,x);var B=c.splice(0,y);t.sigBytes-=A}return new d.init(B,A)},clone:function(){var e=R.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),o=w.Hasher=f.extend({cfg:R.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:512/32,_createHelper:function(e){return function(t,c){return new e.init(c).finalize(t)}},_createHmacHelper:function(e){return function(t,c){return new l.HMAC.init(e,c).finalize(t)}}}),l=h.algo={};return h}(Math);return n})});var z=H((S,W)=>{(function(n,r){typeof S=="object"?W.exports=S=r(k()):typeof define=="function"&&define.amd?define(["./core"],r):r(n.CryptoJS)})(S,function(n){return function(r){var s=n,m=s.lib,h=m.WordArray,w=m.Hasher,R=s.algo,d=[],p=[];(function(){function a(e){for(var t=r.sqrt(e),c=2;c<=t;c++)if(!(e%c))return!1;return!0}function f(e){return(e-(e|0))*4294967296|0}for(var o=2,l=0;l<64;)a(o)&&(l<8&&(d[l]=f(r.pow(o,1/2))),p[l]=f(r.pow(o,1/3)),l++),o++})();var u=[],_=R.SHA256=w.extend({_doReset:function(){this._hash=new h.init(d.slice(0))},_doProcessBlock:function(a,f){for(var o=this._hash.words,l=o[0],e=o[1],t=o[2],c=o[3],i=o[4],g=o[5],v=o[6],b=o[7],y=0;y<64;y++){if(y<16)u[y]=a[f+y]|0;else{var A=u[y-15],x=(A<<25|A>>>7)^(A<<14|A>>>18)^A>>>3,B=u[y-2],G=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;u[y]=x+u[y-7]+G+u[y-16]}var Q=i&g^~i&v,X=l&e^l&t^e&t,Z=(l<<30|l>>>2)^(l<<19|l>>>13)^(l<<10|l>>>22),ee=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),P=b+ee+Q+p[y]+u[y],re=Z+X;b=v,v=g,g=i,i=c+P|0,c=t,t=e,e=l,l=P+re|0}o[0]=o[0]+l|0,o[1]=o[1]+e|0,o[2]=o[2]+t|0,o[3]=o[3]+c|0,o[4]=o[4]+i|0,o[5]=o[5]+g|0,o[6]=o[6]+v|0,o[7]=o[7]+b|0},_doFinalize:function(){var a=this._data,f=a.words,o=this._nDataBytes*8,l=a.sigBytes*8;return f[l>>>5]|=128<<24-l%32,f[(l+64>>>9<<4)+14]=r.floor(o/4294967296),f[(l+64>>>9<<4)+15]=o,a.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var a=w.clone.call(this);return a._hash=this._hash.clone(),a}});s.SHA256=w._createHelper(_),s.HmacSHA256=w._createHmacHelper(_)}(Math),n.SHA256})});var q=H((U,L)=>{(function(n,r){typeof U=="object"?L.exports=U=r(k()):typeof define=="function"&&define.amd?define(["./core"],r):r(n.CryptoJS)})(U,function(n){return function(){var r=n,s=r.lib,m=s.WordArray,h=r.enc,w=h.Base64={stringify:function(d){var p=d.words,u=d.sigBytes,_=this._map;d.clamp();for(var a=[],f=0;f<u;f+=3)for(var o=p[f>>>2]>>>24-f%4*8&255,l=p[f+1>>>2]>>>24-(f+1)%4*8&255,e=p[f+2>>>2]>>>24-(f+2)%4*8&255,t=o<<16|l<<8|e,c=0;c<4&&f+c*.75<u;c++)a.push(_.charAt(t>>>6*(3-c)&63));var i=_.charAt(64);if(i)for(;a.length%4;)a.push(i);return a.join("")},parse:function(d){var p=d.length,u=this._map,_=this._reverseMap;if(!_){_=this._reverseMap=[];for(var a=0;a<u.length;a++)_[u.charCodeAt(a)]=a}var f=u.charAt(64);if(f){var o=d.indexOf(f);o!==-1&&(p=o)}return R(d,p,_)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function R(d,p,u){for(var _=[],a=0,f=0;f<p;f++)if(f%4){var o=u[d.charCodeAt(f-1)]<<f%4*2,l=u[d.charCodeAt(f)]>>>6-f%4*2;_[a>>>2]|=(o|l)<<24-a%4*8,a++}return m.create(_,a)}}(),n.enc.Base64})});import{Extension as le}from"magic-sdk";var E=(r=>(r.ParseRedirectResult="magic_oauth_parse_redirect_result",r))(E||{}),ce=(a=>(a.InvalidRequest="invalid_request",a.InvalidClient="invalid_client",a.InvalidScope="invalid_scope",a.InvalidGrant="invalid_grant",a.UnauthorizedClient="unauthorized_client",a.UnsupportedResponseType="unsupported_response_type",a.UnsupportedGrantType="unsupported_grant_type",a.UnsupportedTokenType="unsupported_token_type",a.AccessDenied="access_denied",a.ServerError="server_error",a.TemporarilyUnavailable="temporarily_unavailable",a))(ce||{});var j=T(z()),J=T(q());var $="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",V=typeof window!="undefined"&&!!window.crypto,fe=V&&!!window.crypto.subtle;function ue(n){return Array.from(n).map(r=>$[r%$.length]).join("")}function M(n){let r=s=>s.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");if(n instanceof ArrayBuffer){let s=new Uint8Array(n),m=Array.from(s).map(w=>String.fromCharCode(w)).join(""),h=btoa(m);return r(h)}return r(J.default.stringify(n))}function de(n){return C(this,null,function*(){if(fe){let r=new TextEncoder().encode(n);return crypto.subtle.digest("SHA-256",r).then(M)}return M((0,j.default)(n))})}function N(n){let r=new Uint8Array(n);if(V)window.crypto.getRandomValues(r);else for(let s=0;s<n;s+=1)r[s]=Math.floor(Math.random()*Math.floor(255));return ue(r)}function K(){return C(this,null,function*(){let n=N(128),r=N(128),s=yield de(r);return{verifier:r,challenge:s,state:n}})}var Y=class extends le.Internal{constructor(){super(...arguments);this.name="oauth";this.config={};this.compat={"magic-sdk":">=2.4.6","@magic-sdk/react-native":!1}}loginWithRedirect(s){return this.utils.createPromiEvent(m=>C(this,null,function*(){let{provider:h,query:w}=yield pe.call(this,s);window.location.href=new URL(`/v1/oauth2/${h}/start?${w}`,this.sdk.endpoint).href,m()}))}getRedirectResult(){let s=window.location.search,m=window.location.origin+window.location.pathname;return window.history.replaceState(null,"",m),he.call(this,s)}},O="oauth_redirect_metadata";function pe(n){return C(this,null,function*(){yield this.utils.storage.removeItem(O);let{provider:r,redirectURI:s,scope:m,loginHint:h}=n,{verifier:w,challenge:R,state:d}=yield K(),p=JSON.stringify({verifier:w,state:d});return yield this.utils.storage.setItem(O,p),{query:[`magic_api_key=${encodeURIComponent(this.sdk.apiKey)}`,`magic_challenge=${encodeURIComponent(R)}`,`state=${encodeURIComponent(d)}`,`platform=${encodeURIComponent("web")}`,m&&`scope=${encodeURIComponent(m.join(" "))}`,s&&`redirect_uri=${encodeURIComponent(s)}`,h&&`login_hint=${encodeURIComponent(h)}`].reduce((_,a)=>a?`${_}&${a}`:_),provider:r,redirectURI:s}})}function he(n){return this.utils.createPromiEvent((r,s)=>C(this,null,function*(){var _;let m=yield this.utils.storage.getItem(O),{verifier:h,state:w}=JSON.parse(m);this.utils.storage.removeItem(O);let R=this.utils.createJsonRpcRequestPayload("magic_oauth_parse_redirect_result",[n,h,w]),d=yield this.request(R),p=d,u=d;u.error&&s(this.createError(u.error,(_=u.error_description)!=null?_:"An error occurred.",{errorURI:u.error_uri,provider:u.provider})),r(p)}))}export{ce as OAuthErrorCode,Y as OAuthExtension,E as OAuthPayloadMethods};
//# sourceMappingURL=index.js.map