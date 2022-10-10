var gt=Object.create;var z=Object.defineProperty,Rt=Object.defineProperties,Tt=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,xt=Object.getOwnPropertyNames,we=Object.getOwnPropertySymbols,It=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var Ae=(n,e,t)=>e in n?z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Y=(n,e)=>{for(var t in e||(e={}))Le.call(e,t)&&Ae(n,t,e[t]);if(we)for(var t of we(e))Pt.call(e,t)&&Ae(n,t,e[t]);return n},Se=(n,e)=>Rt(n,vt(e));var $t=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),bt=(n,e)=>{for(var t in e)z(n,t,{get:e[t],enumerable:!0})},Nt=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of xt(e))!Le.call(n,o)&&o!==t&&z(n,o,{get:()=>e[o],enumerable:!(r=Tt(e,o))||r.enumerable});return n};var Mt=(n,e,t)=>(t=n!=null?gt(It(n)):{},Nt(e||!n||!n.__esModule?z(t,"default",{value:n,enumerable:!0}):t,n));var I=(n,e,t)=>new Promise((r,o)=>{var s=c=>{try{i(t.next(c))}catch(p){o(p)}},a=c=>{try{i(t.throw(c))}catch(p){o(p)}},i=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,a);i((t=t.apply(n,e)).next())});var ot=$t((hr,ve)=>{"use strict";var Pn=Object.prototype.hasOwnProperty,T="~";function B(){}Object.create&&(B.prototype=Object.create(null),new B().__proto__||(T=!1));function $n(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function st(n,e,t,r,o){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new $n(t,r||n,o),a=T?T+e:e;return n._events[a]?n._events[a].fn?n._events[a]=[n._events[a],s]:n._events[a].push(s):(n._events[a]=s,n._eventsCount++),n}function oe(n,e){--n._eventsCount===0?n._events=new B:delete n._events[e]}function g(){this._events=new B,this._eventsCount=0}g.prototype.eventNames=function(){var e=[],t,r;if(this._eventsCount===0)return e;for(r in t=this._events)Pn.call(t,r)&&e.push(T?r.slice(1):r);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};g.prototype.listeners=function(e){var t=T?T+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,a=new Array(s);o<s;o++)a[o]=r[o].fn;return a};g.prototype.listenerCount=function(e){var t=T?T+e:e,r=this._events[t];return r?r.fn?1:r.length:0};g.prototype.emit=function(e,t,r,o,s,a){var i=T?T+e:e;if(!this._events[i])return!1;var c=this._events[i],p=arguments.length,l,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),p){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,r),!0;case 4:return c.fn.call(c.context,t,r,o),!0;case 5:return c.fn.call(c.context,t,r,o,s),!0;case 6:return c.fn.call(c.context,t,r,o,s,a),!0}for(u=1,l=new Array(p-1);u<p;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var v=c.length,A;for(u=0;u<v;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),p){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,r);break;case 4:c[u].fn.call(c[u].context,t,r,o);break;default:if(!l)for(A=1,l=new Array(p-1);A<p;A++)l[A-1]=arguments[A];c[u].fn.apply(c[u].context,l)}}return!0};g.prototype.on=function(e,t,r){return st(this,e,t,r,!1)};g.prototype.once=function(e,t,r){return st(this,e,t,r,!0)};g.prototype.removeListener=function(e,t,r,o){var s=T?T+e:e;if(!this._events[s])return this;if(!t)return oe(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!o||a.once)&&(!r||a.context===r)&&oe(this,s);else{for(var i=0,c=[],p=a.length;i<p;i++)(a[i].fn!==t||o&&!a[i].once||r&&a[i].context!==r)&&c.push(a[i]);c.length?this._events[s]=c.length===1?c[0]:c:oe(this,s)}return this};g.prototype.removeAllListeners=function(e){var t;return e?(t=T?T+e:e,this._events[t]&&oe(this,t)):(this._events=new B,this._eventsCount=0),this};g.prototype.off=g.prototype.removeListener;g.prototype.addListener=g.prototype.on;g.prefixed=T;g.EventEmitter=g;typeof ve<"u"&&(ve.exports=g)});function wt(n){let e={exports:{}};return n(e,e.exports),e.exports}var At=Number.MAX_SAFE_INTEGER||9007199254740991;var Re={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:At,MAX_SAFE_COMPONENT_LENGTH:16},Lt=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...n)=>console.error("SEMVER",...n):()=>{},d=Lt,W=wt(function(n,e){let{MAX_SAFE_COMPONENT_LENGTH:t}=Re,r=(e=n.exports={}).re=[],o=e.src=[],s=e.t={},a=0,i=(c,p,l)=>{let u=a++;d(u,p),s[c]=u,o[u]=p,r[u]=new RegExp(p,l?"g":void 0)};i("NUMERICIDENTIFIER","0|[1-9]\\d*"),i("NUMERICIDENTIFIERLOOSE","[0-9]+"),i("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),i("MAINVERSION",`(${o[s.NUMERICIDENTIFIER]})\\.(${o[s.NUMERICIDENTIFIER]})\\.(${o[s.NUMERICIDENTIFIER]})`),i("MAINVERSIONLOOSE",`(${o[s.NUMERICIDENTIFIERLOOSE]})\\.(${o[s.NUMERICIDENTIFIERLOOSE]})\\.(${o[s.NUMERICIDENTIFIERLOOSE]})`),i("PRERELEASEIDENTIFIER",`(?:${o[s.NUMERICIDENTIFIER]}|${o[s.NONNUMERICIDENTIFIER]})`),i("PRERELEASEIDENTIFIERLOOSE",`(?:${o[s.NUMERICIDENTIFIERLOOSE]}|${o[s.NONNUMERICIDENTIFIER]})`),i("PRERELEASE",`(?:-(${o[s.PRERELEASEIDENTIFIER]}(?:\\.${o[s.PRERELEASEIDENTIFIER]})*))`),i("PRERELEASELOOSE",`(?:-?(${o[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[s.PRERELEASEIDENTIFIERLOOSE]})*))`),i("BUILDIDENTIFIER","[0-9A-Za-z-]+"),i("BUILD",`(?:\\+(${o[s.BUILDIDENTIFIER]}(?:\\.${o[s.BUILDIDENTIFIER]})*))`),i("FULLPLAIN",`v?${o[s.MAINVERSION]}${o[s.PRERELEASE]}?${o[s.BUILD]}?`),i("FULL",`^${o[s.FULLPLAIN]}$`),i("LOOSEPLAIN",`[v=\\s]*${o[s.MAINVERSIONLOOSE]}${o[s.PRERELEASELOOSE]}?${o[s.BUILD]}?`),i("LOOSE",`^${o[s.LOOSEPLAIN]}$`),i("GTLT","((?:<|>)?=?)"),i("XRANGEIDENTIFIERLOOSE",`${o[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),i("XRANGEIDENTIFIER",`${o[s.NUMERICIDENTIFIER]}|x|X|\\*`),i("XRANGEPLAIN",`[v=\\s]*(${o[s.XRANGEIDENTIFIER]})(?:\\.(${o[s.XRANGEIDENTIFIER]})(?:\\.(${o[s.XRANGEIDENTIFIER]})(?:${o[s.PRERELEASE]})?${o[s.BUILD]}?)?)?`),i("XRANGEPLAINLOOSE",`[v=\\s]*(${o[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[s.XRANGEIDENTIFIERLOOSE]})(?:${o[s.PRERELEASELOOSE]})?${o[s.BUILD]}?)?)?`),i("XRANGE",`^${o[s.GTLT]}\\s*${o[s.XRANGEPLAIN]}$`),i("XRANGELOOSE",`^${o[s.GTLT]}\\s*${o[s.XRANGEPLAINLOOSE]}$`),i("COERCE",`(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`),i("COERCERTL",o[s.COERCE],!0),i("LONETILDE","(?:~>?)"),i("TILDETRIM",`(\\s*)${o[s.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",i("TILDE",`^${o[s.LONETILDE]}${o[s.XRANGEPLAIN]}$`),i("TILDELOOSE",`^${o[s.LONETILDE]}${o[s.XRANGEPLAINLOOSE]}$`),i("LONECARET","(?:\\^)"),i("CARETTRIM",`(\\s*)${o[s.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",i("CARET",`^${o[s.LONECARET]}${o[s.XRANGEPLAIN]}$`),i("CARETLOOSE",`^${o[s.LONECARET]}${o[s.XRANGEPLAINLOOSE]}$`),i("COMPARATORLOOSE",`^${o[s.GTLT]}\\s*(${o[s.LOOSEPLAIN]})$|^$`),i("COMPARATOR",`^${o[s.GTLT]}\\s*(${o[s.FULLPLAIN]})$|^$`),i("COMPARATORTRIM",`(\\s*)${o[s.GTLT]}\\s*(${o[s.LOOSEPLAIN]}|${o[s.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",i("HYPHENRANGE",`^\\s*(${o[s.XRANGEPLAIN]})\\s+-\\s+(${o[s.XRANGEPLAIN]})\\s*$`),i("HYPHENRANGELOOSE",`^\\s*(${o[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[s.XRANGEPLAINLOOSE]})\\s*$`),i("STAR","(<|>)?=?\\s*\\*"),i("GTE0","^\\s*>=\\s*0.0.0\\s*$"),i("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")}),Oe=/^[0-9]+$/,Ke=(n,e)=>{let t=Oe.test(n),r=Oe.test(e);return t&&r&&(n=+n,e=+e),n===e?0:t&&!r?-1:r&&!t?1:n<e?-1:1},St=(n,e)=>Ke(e,n),Ot={compareIdentifiers:Ke,rcompareIdentifiers:St},{MAX_LENGTH:Ce,MAX_SAFE_INTEGER:Z}=Re,{re:_e,t:De}=W,{compareIdentifiers:j}=Ot,E=class{constructor(e,t){if(t&&typeof t=="object"||(t={loose:!!t,includePrerelease:!1}),e instanceof E){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid Version: ${e}`);if(e.length>Ce)throw new TypeError(`version is longer than ${Ce} characters`);d("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;let r=e.trim().match(t.loose?_e[De.LOOSE]:_e[De.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Z||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Z||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Z||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Z)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(d("SemVer.compare",this.version,this.options,e),!(e instanceof E)){if(typeof e=="string"&&e===this.version)return 0;e=new E(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof E||(e=new E(e,this.options)),j(this.major,e.major)||j(this.minor,e.minor)||j(this.patch,e.patch)}comparePre(e){if(e instanceof E||(e=new E(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let r=this.prerelease[t],o=e.prerelease[t];if(d("prerelease compare",t,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r!==o)return j(r,o)}while(++t)}compareBuild(e){e instanceof E||(e=new E(e,this.options));let t=0;do{let r=this.build[t],o=e.build[t];if(d("prerelease compare",t,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r!==o)return j(r,o)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t),this.inc("pre",t);break;case"major":this.minor===0&&this.patch===0&&this.prerelease.length!==0||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":this.patch===0&&this.prerelease.length!==0||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let r=this.prerelease.length;for(;--r>=0;)typeof this.prerelease[r]=="number"&&(this.prerelease[r]++,r=-2);r===-1&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}},Ct=(n,e,t)=>new E(n,t).compare(new E(e,t)),k=Ct,_t=(n,e,t)=>k(n,e,t)===0,Dt=_t,kt=(n,e,t)=>k(n,e,t)!==0,Jt=kt,qt=(n,e,t)=>k(n,e,t)>0,Gt=qt,Ut=(n,e,t)=>k(n,e,t)>=0,Kt=Ut,jt=(n,e,t)=>k(n,e,t)<0,Ft=jt,Wt=(n,e,t)=>k(n,e,t)<=0,Xt=Wt,Bt=(n,e,t,r)=>{switch(e){case"===":return typeof n=="object"&&(n=n.version),typeof t=="object"&&(t=t.version),n===t;case"!==":return typeof n=="object"&&(n=n.version),typeof t=="object"&&(t=t.version),n!==t;case"":case"=":case"==":return Dt(n,t,r);case"!=":return Jt(n,t,r);case">":return Gt(n,t,r);case">=":return Kt(n,t,r);case"<":return Ft(n,t,r);case"<=":return Xt(n,t,r);default:throw new TypeError(`Invalid operator: ${e}`)}},ge=Bt,F=Symbol("SemVer ANY"),L=class{static get ANY(){return F}constructor(e,t){if(t&&typeof t=="object"||(t={loose:!!t,includePrerelease:!1}),e instanceof L){if(e.loose===!!t.loose)return e;e=e.value}d("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===F?this.value="":this.value=this.operator+this.semver.version,d("comp",this)}parse(e){let t=this.options.loose?ke[Je.COMPARATORLOOSE]:ke[Je.COMPARATOR],r=e.match(t);if(!r)throw new TypeError(`Invalid comparator: ${e}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new E(r[2],this.options.loose):this.semver=F}toString(){return this.value}test(e){if(d("Comparator.test",e,this.options.loose),this.semver===F||e===F)return!0;if(typeof e=="string")try{e=new E(e,this.options)}catch(t){return!1}return ge(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof L))throw new TypeError("a Comparator is required");if(t&&typeof t=="object"||(t={loose:!!t,includePrerelease:!1}),this.operator==="")return this.value===""||new b(e.value,t).test(this.value);if(e.operator==="")return e.value===""||new b(this.value,t).test(e.semver);let r=!(this.operator!==">="&&this.operator!==">"||e.operator!==">="&&e.operator!==">"),o=!(this.operator!=="<="&&this.operator!=="<"||e.operator!=="<="&&e.operator!=="<"),s=this.semver.version===e.semver.version,a=!(this.operator!==">="&&this.operator!=="<="||e.operator!==">="&&e.operator!=="<="),i=ge(this.semver,"<",e.semver,t)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),c=ge(this.semver,">",e.semver,t)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return r||o||s&&a||i||c}},{re:ke,t:Je}=W,b=class{constructor(e,t){if(t&&typeof t=="object"||(t={loose:!!t,includePrerelease:!1}),e instanceof b)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new b(e.raw,t);if(e instanceof L)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){let{loose:t}=this.options;e=e.trim();let r=t?y[f.HYPHENRANGELOOSE]:y[f.HYPHENRANGE];e=e.replace(r,an(this.options.includePrerelease)),d("hyphen replace",e),e=e.replace(y[f.COMPARATORTRIM],Ht),d("comparator trim",e,y[f.COMPARATORTRIM]),e=(e=(e=e.replace(y[f.TILDETRIM],Vt)).replace(y[f.CARETTRIM],zt)).split(/\s+/).join(" ");let o=t?y[f.COMPARATORLOOSE]:y[f.COMPARATOR];return e.split(" ").map(s=>Yt(s,this.options)).join(" ").split(/\s+/).map(s=>on(s,this.options)).filter(this.options.loose?s=>!!s.match(o):()=>!0).map(s=>new L(s,this.options))}intersects(e,t){if(!(e instanceof b))throw new TypeError("a Range is required");return this.set.some(r=>qe(r,t)&&e.set.some(o=>qe(o,t)&&r.every(s=>o.every(a=>s.intersects(a,t)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new E(e,this.options)}catch(t){return!1}for(let t=0;t<this.set.length;t++)if(cn(this.set[t],e,this.options))return!0;return!1}},{re:y,t:f,comparatorTrimReplace:Ht,tildeTrimReplace:Vt,caretTrimReplace:zt}=W,qe=(n,e)=>{let t=!0,r=n.slice(),o=r.pop();for(;t&&r.length;)t=r.every(s=>o.intersects(s,e)),o=r.pop();return t},Yt=(n,e)=>(d("comp",n,e),n=en(n,e),d("caret",n),n=Zt(n,e),d("tildes",n),n=nn(n,e),d("xrange",n),n=sn(n,e),d("stars",n),n),R=n=>!n||n.toLowerCase()==="x"||n==="*",Zt=(n,e)=>n.trim().split(/\s+/).map(t=>Qt(t,e)).join(" "),Qt=(n,e)=>{let t=e.loose?y[f.TILDELOOSE]:y[f.TILDE];return n.replace(t,(r,o,s,a,i)=>{let c;return d("tilde",n,r,o,s,a,i),R(o)?c="":R(s)?c=`>=${o}.0.0 <${+o+1}.0.0-0`:R(a)?c=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:i?(d("replaceTilde pr",i),c=`>=${o}.${s}.${a}-${i} <${o}.${+s+1}.0-0`):c=`>=${o}.${s}.${a} <${o}.${+s+1}.0-0`,d("tilde return",c),c})},en=(n,e)=>n.trim().split(/\s+/).map(t=>tn(t,e)).join(" "),tn=(n,e)=>{d("caret",n,e);let t=e.loose?y[f.CARETLOOSE]:y[f.CARET],r=e.includePrerelease?"-0":"";return n.replace(t,(o,s,a,i,c)=>{let p;return d("caret",n,o,s,a,i,c),R(s)?p="":R(a)?p=`>=${s}.0.0${r} <${+s+1}.0.0-0`:R(i)?p=s==="0"?`>=${s}.${a}.0${r} <${s}.${+a+1}.0-0`:`>=${s}.${a}.0${r} <${+s+1}.0.0-0`:c?(d("replaceCaret pr",c),p=s==="0"?a==="0"?`>=${s}.${a}.${i}-${c} <${s}.${a}.${+i+1}-0`:`>=${s}.${a}.${i}-${c} <${s}.${+a+1}.0-0`:`>=${s}.${a}.${i}-${c} <${+s+1}.0.0-0`):(d("no pr"),p=s==="0"?a==="0"?`>=${s}.${a}.${i}${r} <${s}.${a}.${+i+1}-0`:`>=${s}.${a}.${i}${r} <${s}.${+a+1}.0-0`:`>=${s}.${a}.${i} <${+s+1}.0.0-0`),d("caret return",p),p})},nn=(n,e)=>(d("replaceXRanges",n,e),n.split(/\s+/).map(t=>rn(t,e)).join(" ")),rn=(n,e)=>{n=n.trim();let t=e.loose?y[f.XRANGELOOSE]:y[f.XRANGE];return n.replace(t,(r,o,s,a,i,c)=>{d("xRange",n,r,o,s,a,i,c);let p=R(s),l=p||R(a),u=l||R(i),v=u;return o==="="&&v&&(o=""),c=e.includePrerelease?"-0":"",p?r=o===">"||o==="<"?"<0.0.0-0":"*":o&&v?(l&&(a=0),i=0,o===">"?(o=">=",l?(s=+s+1,a=0,i=0):(a=+a+1,i=0)):o==="<="&&(o="<",l?s=+s+1:a=+a+1),o==="<"&&(c="-0"),r=`${o+s}.${a}.${i}${c}`):l?r=`>=${s}.0.0${c} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${a}.0${c} <${s}.${+a+1}.0-0`),d("xRange return",r),r})},sn=(n,e)=>(d("replaceStars",n,e),n.trim().replace(y[f.STAR],"")),on=(n,e)=>(d("replaceGTE0",n,e),n.trim().replace(y[e.includePrerelease?f.GTE0PRE:f.GTE0],"")),an=n=>(e,t,r,o,s,a,i,c,p,l,u,v,A)=>`${t=R(r)?"":R(o)?`>=${r}.0.0${n?"-0":""}`:R(s)?`>=${r}.${o}.0${n?"-0":""}`:a?`>=${t}`:`>=${t}${n?"-0":""}`} ${c=R(p)?"":R(l)?`<${+p+1}.0.0-0`:R(u)?`<${p}.${+l+1}.0-0`:v?`<=${p}.${l}.${u}-${v}`:n?`<${p}.${l}.${+u+1}-0`:`<=${c}`}`.trim(),cn=(n,e,t)=>{for(let r=0;r<n.length;r++)if(!n[r].test(e))return!1;if(e.prerelease.length&&!t.includePrerelease){for(let r=0;r<n.length;r++)if(d(n[r].semver),n[r].semver!==L.ANY&&n[r].semver.prerelease.length>0){let o=n[r].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0},je=(n,e,t)=>{try{e=new b(e,t)}catch(r){return!1}return e.test(n)};var{MAX_LENGTH:ln}=Re,{re:Ge,t:Ue}=W,pn=(n,e)=>{if(e&&typeof e=="object"||(e={loose:!!e,includePrerelease:!1}),n instanceof E)return n;if(typeof n!="string"||n.length>ln||!(e.loose?Ge[Ue.LOOSE]:Ge[Ue.FULL]).test(n))return null;try{return new E(n,e)}catch(t){return null}},un=pn,{re:Q,t:ee}=W,Fe=(n,e)=>{if(n instanceof E)return n;if(typeof n=="number"&&(n=String(n)),typeof n!="string")return null;let t=null;if((e=e||{}).rtl){let r;for(;(r=Q[ee.COERCERTL].exec(n))&&(!t||t.index+t[0].length!==n.length);)t&&r.index+r[0].length===t.index+t[0].length||(t=r),Q[ee.COERCERTL].lastIndex=r.index+r[1].length+r[2].length;Q[ee.COERCERTL].lastIndex=-1}else t=n.match(Q[ee.COERCE]);return t===null?null:un(`${t[2]}.${t[3]||"0"}.${t[4]||"0"}`,e)};function dn(n){return String.fromCharCode(parseInt(n.slice(1),16))}function mn(n){return`%${`00${n.charCodeAt(0).toString(16)}`.slice(-2)}`}function En(n){return btoa(encodeURIComponent(n).replace(/%[0-9A-F]{2}/g,dn))}function hn(n){return decodeURIComponent(Array.from(atob(n),mn).join(""))}function te(n){return En(JSON.stringify(n))}function We(n){return JSON.parse(hn(n))}import{RPCErrorCode as Tn,SDKErrorCode as G,SDKWarningCode as se}from"@magic-sdk/types";import{MagicPayloadMethod as fn,RPCErrorCode as yn}from"@magic-sdk/types";function N(n){return typeof n=="undefined"}function gn(n){return n===null}function ne(n){return gn(n)||N(n)}function Qn(n){return ne(n)?!1:!N(n.jsonrpc)&&!N(n.id)&&!N(n.method)&&!N(n.params)}function Xe(n){return ne(n)?!1:!N(n.jsonrpc)&&!N(n.id)&&(!N(n.result)||!N(n.error))}function er(n){return ne(n)?!1:typeof n=="string"&&Object.values(fn).includes(n)}function Be(n){return ne(n)?!1:typeof n=="number"&&Object.values(yn).includes(n)}function re(n){if(!n)return!0;for(let e in n)if(Object.hasOwnProperty.call(n,e))return!1;return!0}var m={};function Rn(n,e){return Object.assign(m,e),n}var He={"magic-sdk":"magic-sdk","@magic-sdk/react-native":"magic-sdk-rn"};var $=class extends Error{constructor(t,r){super(`Magic SDK Error: [${t}] ${r}`);this.code=t;this.rawMessage=r;this.__proto__=Error;Object.setPrototypeOf(this,$.prototype)}},M=class extends Error{constructor(t){super();this.__proto__=Error;let r=Number(t==null?void 0:t.code);this.rawMessage=(t==null?void 0:t.message)||"Internal error",this.code=Be(r)?r:Tn.InternalError,this.message=`Magic RPC Error: [${this.code}] ${this.rawMessage}`,Object.setPrototypeOf(this,M.prototype)}},J=class{constructor(e,t){this.code=e;this.rawMessage=t;this.message=`Magic SDK Warning: [${e}] ${t}`}log(){console.warn(this.message)}},q=class extends Error{constructor(t,r,o,s){super(`Magic Extension Error (${t.name}): [${r}] ${o}`);this.code=r;this.rawMessage=o;this.data=s;this.__proto__=Error;Object.setPrototypeOf(this,q.prototype)}},X=class{constructor(e,t,r){this.code=t;this.rawMessage=r;this.message=`Magic Extension Warning (${e.name}): [${t}] ${r}`}log(){console.warn(this.message)}};function Ve(){return new $(G.MissingApiKey,"Please provide an API key that you acquired from the Magic developer dashboard.")}function ar(){return new $(G.ModalNotReady,"Modal is not ready.")}function ze(){return new $(G.MalformedResponse,"Response from the Magic iframe is malformed.")}function Ye(n){return new $(G.ExtensionNotInitialized,`Extensions must be initialized with a Magic SDK instance before \`Extension.${n}\` can be accessed. Do not invoke \`Extension.${n}\` inside an extension constructor.`)}function Ze(n){let e=`Some extensions are incompatible with \`${m.sdkName}@${m.version}\`:`;return n.filter(t=>typeof t.compat!="undefined"&&t.compat!==null).forEach(t=>{let r=t.compat[m.sdkName];typeof r=="string"?e+=`
  - Extension \`${t.name}\` supports version(s) \`${r}\``:r||(e+=`
  - Extension \`${t.name}\` does not support ${m.platform} environments.`)}),new $(G.IncompatibleExtensions,e)}function Qe(n){let e=t=>{let r=t+1,o=r%10,s=r%100;return o===1&&s!==11?`${r}st`:o===2&&s!==12?`${r}nd`:o===3&&s!==13?`${r}rd`:`${r}th`};return new $(G.InvalidArgument,`Invalid ${e(n.argument)} argument given to \`${n.procedure}\`.
  Expected: \`${n.expected}\`
  Received: \`${n.received}\``)}function cr(){return new J(se.DuplicateIframe,"Duplicate iframes found.")}function et(){return new J(se.SyncWeb3Method,"Non-async web3 methods are deprecated in web3 > 1.0 and are not supported by the Magic web3 provider. Please use an async method instead.")}function tt(){return new J(se.ReactNativeEndpointConfiguration,`CUSTOM DOMAINS ARE NOT SUPPORTED WHEN USING MAGIC SDK WITH REACT NATIVE! The \`endpoint\` parameter SHOULD NOT be provided. The Magic \`<iframe>\` is automatically wrapped by a WebView pointed at \`${m.defaultEndpoint}\`. Changing this default behavior will lead to unexpected results and potentially security-threatening bugs.`)}function lr(n){let{method:e,removalVersions:t,useInstead:r}=n,o=t[m.sdkName],s=r?` Use \`${r}\` instead.`:"",a=`\`${e}\` will be removed from \`${m.sdkName}\` in version \`${o}\`.${s}`;return new J(se.DeprecationNotice,a)}import{MagicPayloadMethod as O}from"@magic-sdk/types";import{MagicOutgoingWindowMessage as bn,MagicIncomingWindowMessage as Nn}from"@magic-sdk/types";function*vn(){let n=0;for(;;)n<Number.MAX_SAFE_INTEGER?yield++n:n=0}var xn=vn();function Te(){return xn.next().value}var nt=Symbol("Payload pre-processed by Magic SDK");function rt(n){return Object.defineProperty(n,nt,{value:!0,enumerable:!1}),n}function In(n){return!!n[nt]}function _(n){var e,t,r;return In(n)||(n.jsonrpc=(e=n.jsonrpc)!=null?e:"2.0",n.id=Te(),n.method=(t=n.method)!=null?t:"noop",n.params=(r=n.params)!=null?r:[],rt(n)),n}function h(n,e=[]){return rt({params:e,method:n,jsonrpc:"2.0",id:Te()})}var S=class{constructor(e){e instanceof S?(this._jsonrpc=e.payload.jsonrpc,this._id=e.payload.id,this._result=e.payload.result,this._error=e.payload.error):Xe(e)?(this._jsonrpc=e.jsonrpc,this._id=e.id,this._result=e.result,this._error=e.error):(this._jsonrpc=e.jsonrpc,this._id=e.id,this._result=void 0,this._error=void 0)}applyError(e){return this._error=e,this}applyResult(e){return this._result=e,this}get hasError(){return typeof this._error!="undefined"&&this._error!==null}get hasResult(){return typeof this._result!="undefined"}get payload(){return{jsonrpc:this._jsonrpc,id:this._id,result:this._result,error:this._error}}};var it=Mt(ot()),xe=class extends it.default{};function ie(){let n=new xe;return{emitter:n,createChainingEmitterMethod:(r,o)=>(...s)=>(n[r].apply(n,s),o),createBoundEmitterMethod:r=>(...o)=>n[r].apply(n,o)}}var at=Symbol("isPromiEvent");function ct(n){return!!n[at]}function ae(n){let e=Ie(n),{createBoundEmitterMethod:t,createChainingEmitterMethod:r}=ie(),o=Symbol("Promise.then"),s=Symbol("Promise.catch"),a=Symbol("Promise.finally"),i=(l,u)=>(...v)=>{let A=u[l].apply(u,v);return c(A)},c=l=>Object.assign(l,{[at]:!0,[o]:l[o]||l.then,[s]:l[s]||l.catch,[a]:l[a]||l.finally,then:i(o,l),catch:i(s,l),finally:i(a,l),on:r("on",l),once:r("once",l),addListener:r("addListener",l),off:r("off",l),removeListener:r("removeListener",l),removeAllListeners:r("removeAllListeners",l),emit:t("emit"),eventNames:t("eventNames"),listeners:t("listeners"),listenerCount:t("listenerCount")}),p=c(e.then(l=>(p.emit("done",l),p.emit("settled"),l),l=>{throw p.emit("error",l),p.emit("settled"),l}));return p}function Ie(n){return new Promise((e,t)=>{let r=n(e,t);Promise.resolve(r).catch(t)})}var P=class{constructor(e){this.sdk=e}get overlay(){return this.sdk.overlay}request(e){let t=this.overlay.post(bn.MAGIC_HANDLE_REQUEST,_(e)),r=ae((s,a)=>{t.then(i=>{if(o(),i.hasError)a(new M(i.payload.error));else if(i.hasResult)s(i.payload.result);else throw ze()}).catch(i=>{o(),a(i)})}),o=this.overlay.on(Nn.MAGIC_HANDLE_EVENT,s=>{var i;let{response:a}=s.data;if(a.id===e.id&&((i=a.result)==null?void 0:i.event)){let{event:c,params:p=[]}=a.result;r.emit(c,...p)}});return r}};var ce=class extends P{loginWithMagicLink(e){let{email:t,showUI:r=!0,redirectURI:o}=e,s=h(this.sdk.testMode?O.LoginWithMagicLinkTestMode:O.LoginWithMagicLink,[{email:t,showUI:r,redirectURI:o}]);return this.request(s)}loginWithSMS(e){let{phoneNumber:t}=e,r=h(this.sdk.testMode?O.LoginWithSmsTestMode:O.LoginWithSms,[{phoneNumber:t,showUI:!0}]);return this.request(r)}loginWithEmailOTP(e){let{email:t}=e,r=h(this.sdk.testMode?O.LoginWithEmailOTPTestMode:O.LoginWithEmailOTP,[{email:t,showUI:!0}]);return this.request(r)}loginWithCredential(e){let t=e!=null?e:"";if(!e&&m.platform==="web"){t=window.location.search;let o=window.location.origin+window.location.pathname;window.history.replaceState(null,"",o)}let r=h(this.sdk.testMode?O.LoginWithCredentialTestMode:O.LoginWithCredential,[t]);return this.request(r)}};import{MagicPayloadMethod as x}from"@magic-sdk/types";var H={};bt(H,{clear:()=>Mn,getItem:()=>D,iterate:()=>Sn,key:()=>An,keys:()=>Ln,length:()=>wn,removeItem:()=>pe,setItem:()=>U});var le;function C(n){return(...e)=>I(this,null,function*(){return le||(le=yield m.configureStorage()),yield le.ready(),le[n](...e)})}var D=C("getItem"),U=C("setItem"),pe=C("removeItem"),Mn=C("clear"),wn=C("length"),An=C("key"),Ln=C("keys"),Sn=C("iterate");function lt(){let n=window.crypto.getRandomValues(new Uint8Array(16));n[6]=n[6]&15|64,n[8]=n[8]&191|128;let e="";return e+=n[0].toString(16),e+=n[1].toString(16),e+=n[2].toString(16),e+=n[3].toString(16),e+="-",e+=n[4].toString(16),e+=n[5].toString(16),e+="-",e+=n[6].toString(16),e+=n[7].toString(16),e+="-",e+=n[8].toString(16),e+=n[9].toString(16),e+="-",e+=n[10].toString(16),e+=n[11].toString(16),e+=n[12].toString(16),e+=n[13].toString(16),e+=n[14].toString(16),e+=n[15].toString(16),e}var Pe="STORE_KEY_PRIVATE_KEY",ue="STORE_KEY_PUBLIC_JWK",$e="ECDSA",ut="P-256",On={name:$e,namedCurve:ut},Cn={name:$e,namedCurve:ut};function dt(){pe(ue),pe(Pe)}function mt(){return I(this,null,function*(){let n=yield _n();if(!n){console.info("unable to create public key or webcrypto is unsupported");return}let{subtle:e}=window.crypto,t=yield D(Pe);if(!t||!e){console.info("unable to find private key or webcrypto unsupported");return}let r={iat:Math.floor(new Date().getTime()/1e3),jti:lt()},o={typ:"dpop+jwt",alg:"ES256",jwk:n},s={protected:pt(JSON.stringify(o)),claims:pt(JSON.stringify(r))},a=Jn(`${s.protected}.${s.claims}`),i={name:$e,hash:{name:"SHA-256"}},c=Gn(new Uint8Array(yield e.sign(i,t,a)));return`${s.protected}.${s.claims}.${c}`})}function _n(){return I(this,null,function*(){if(!kn()){console.info("webcrypto is not supported");return}return(yield D(ue))||(yield Dn()),D(ue)})}function Dn(){return I(this,null,function*(){let n=null,{subtle:e}=window.crypto,t=yield e.generateKey(On,!0,["sign"]),r=yield e.exportKey("jwk",t.privateKey);n=yield e.exportKey("jwk",t.publicKey);let o=yield e.importKey("jwk",r,Cn,!1,["sign"]);yield U(Pe,o),yield U(ue,n)})}function kn(){let n=typeof window!="undefined"&&!!window.crypto,e=n&&!!window.crypto.subtle;return n&&e}function pt(n){return Et(qn(n))}function Jn(n){return new TextEncoder().encode(n)}function Et(n){return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+/g,"")}function qn(n){return encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(t,r)=>String.fromCharCode(parseInt(r,16)))}function Gn(n){let e="";return n.forEach(t=>{e+=String.fromCharCode(t)}),Et(e)}var de=class extends P{getIdToken(e){let t=h(this.sdk.testMode?x.GetIdTokenTestMode:x.GetIdToken,[e]);return this.request(t)}generateIdToken(e){let t=h(this.sdk.testMode?x.GenerateIdTokenTestMode:x.GenerateIdToken,[e]);return this.request(t)}getMetadata(){let e=h(this.sdk.testMode?x.GetMetadataTestMode:x.GetMetadata);return this.request(e)}updateEmail(e){let{email:t,showUI:r=!0}=e,o=h(this.sdk.testMode?x.UpdateEmailTestMode:x.UpdateEmail,[{email:t,showUI:r}]);return this.request(o)}isLoggedIn(){let e=h(this.sdk.testMode?x.IsLoggedInTestMode:x.IsLoggedIn);return this.request(e)}logout(){dt();let e=h(this.sdk.testMode?x.LogoutTestMode:x.Logout);return this.request(e)}showSettings(){let e=h(this.sdk.testMode?x.UserSettingsTestMode:x.UserSettings);return this.request(e)}};import{MagicOutgoingWindowMessage as ht}from"@magic-sdk/types";var{createBoundEmitterMethod:me,createChainingEmitterMethod:K}=ie(),Ee=class extends P{constructor(){super(...arguments);this.isMagic=!0;this.on=K("on",this);this.once=K("once",this);this.addListener=K("addListener",this);this.off=K("off",this);this.removeListener=K("removeListener",this);this.removeAllListeners=K("removeAllListeners",this);this.emit=me("emit");this.eventNames=me("eventNames");this.listeners=me("listeners");this.listenerCount=me("listenerCount")}sendAsync(t,r){if(!r)throw Qe({procedure:"Magic.rpcProvider.sendAsync",argument:1,expected:"function",received:r===null?"null":typeof r});if(Array.isArray(t))this.overlay.post(ht.MAGIC_HANDLE_REQUEST,t.map(o=>{let s=_(o);return this.prefixPayloadMethodForTestMode(s),s})).then(o=>{r(null,o.map(s=>Se(Y({},s.payload),{error:s.hasError?new M(s.payload.error):null})))});else{let o=_(t);this.prefixPayloadMethodForTestMode(o),this.overlay.post(ht.MAGIC_HANDLE_REQUEST,o).then(s=>{r(s.hasError?new M(s.payload.error):null,s.payload)})}}send(t,r){if(typeof t=="string"){let s=h(t,Array.isArray(r)?r:[]);return this.request(s)}if(Array.isArray(t)||!!r){this.sendAsync(t,r);return}let o=et();return o.log(),new S(t).applyError({code:-32603,message:o.rawMessage}).payload}enable(){let t=h("eth_accounts");return this.request(t)}request(t){return this.prefixPayloadMethodForTestMode(t),super.request(t)}prefixPayloadMethodForTestMode(t){let r="testMode/eth/";this.sdk.testMode&&(t.method=`${r}${t.method}`)}};function be(n,e){return e?new URL(n,e):new URL(n)}var ft=["request","overlay","sdk"];function Un(n){let e=Object.getPrototypeOf(n),t=[e];for(;e!==P.prototype;)e=Object.getPrototypeOf(e),t.push(e);return t}var he=class extends P{constructor(){super(void 0);this.__sdk_access_field_descriptors__=new Map;this.__is_initialized__=!1;this.utils={createPromiEvent:ae,isPromiEvent:ct,encodeJSON:te,decodeJSON:We,createJsonRpcRequestPayload:h,standardizeJsonRpcRequestPayload:_,storage:H};let t=[this,...Un(this)];ft.forEach(r=>{let o=t.map(c=>Object.getOwnPropertyDescriptor(c,r)),s=o.findIndex(c=>!!c),a=s>0,i=o[s];i&&(this.__sdk_access_field_descriptors__.set(r,{descriptor:i,isPrototypeField:a}),Object.defineProperty(this,r,{configurable:!0,get:()=>{throw Ye(r)}}))})}init(t){this.__is_initialized__||(ft.forEach(r=>{if(this.__sdk_access_field_descriptors__.has(r)){let{descriptor:o,isPrototypeField:s}=this.__sdk_access_field_descriptors__.get(r);s?delete this[r]:Object.defineProperty(this,r,o)}}),this.sdk=t,this.__is_initialized__=!0)}createDeprecationWarning(t){let{method:r,removalVersion:o,useInstead:s}=t,a=s?` Use \`${s}\` instead.`:"",i=`\`${r}\` will be removed from this Extension in version \`${o}\`.${a}`;return new X(this,"DEPRECATION_NOTICE",i)}createWarning(t,r){return new X(this,t,r)}createError(t,r,o){return new q(this,t,r,o)}},Ne=class extends he{},w=class extends he{};w.Internal=Ne,w.Anonymous="anonymous extension";function yt(n){return n.compat&&n.compat[m.sdkName]!=null?typeof n.compat[m.sdkName]=="string"?je(Fe(m.version),n.compat[m.sdkName]):!!n.compat[m.sdkName]:!0}function Kn(n){var o;let e=(o=n==null?void 0:n.extensions)!=null?o:[],t={},r=[];if(Array.isArray(e)?e.forEach(s=>{yt(s)?(s.init(this),(s.name||s.name!==w.Anonymous)&&(this[s.name]=s),s instanceof w.Internal&&(re(s.config)||(t[s.name]=s.config))):r.push(s)}):Object.keys(e).forEach(s=>{if(yt(e[s])){e[s].init(this);let a=e[s];this[s]=a,a instanceof w.Internal&&(re(a.config)||(t[e[s].name]=a.config))}else r.push(e[s])}),r.length)throw Ze(r);return t}var V=class{constructor(e,t){this.apiKey=e;var a;if(!e)throw Ve();m.platform==="react-native"&&(t==null?void 0:t.endpoint)&&tt().log();let{defaultEndpoint:r,version:o}=m;this.testMode=!!(t!=null&&t.testMode),this.endpoint=be((a=t==null?void 0:t.endpoint)!=null?a:r).origin,this.auth=new ce(this),this.user=new de(this),this.rpcProvider=new Ee(this);let s=Kn.call(this,t);this.parameters=te(Y({API_KEY:this.apiKey,DOMAIN_ORIGIN:window.location?window.location.origin:"",ETH_NETWORK:t==null?void 0:t.network,host:be(this.endpoint).host,sdk:He[m.sdkName],version:o,ext:re(s)?void 0:s,locale:(t==null?void 0:t.locale)||"en_US"},m.bundleId?{bundleId:m.bundleId}:{}))}get overlay(){if(!V.__overlays__.has(this.parameters)){let e=new m.ViewController(this.endpoint,this.parameters);e.init(),V.__overlays__.set(this.parameters,e)}return V.__overlays__.get(this.parameters)}preload(){return I(this,null,function*(){yield this.overlay.ready})}},fe=V;fe.__overlays__=new Map;import{MagicIncomingWindowMessage as ye}from"@magic-sdk/types";function jn(n,e){return e&&Array.isArray(n)?n.find(t=>t.id===e):n}function Fn(n,e){var o;let t=(o=e.data.response)==null?void 0:o.id,r=jn(n,t);if(t&&r){let s=new S(r).applyResult(e.data.response.result).applyError(e.data.response.error);return{id:t,response:s}}return{}}function Wn(n,e){return I(this,null,function*(){let t=yield D("rt"),r;if(m.platform==="web")try{r=yield mt()}catch(o){console.error("webcrypto error",o)}return r?t?{msgType:n,payload:e,jwt:r,rt:t}:{msgType:n,payload:e,jwt:r}:{msgType:n,payload:e}})}function Xn(n){return I(this,null,function*(){!n.data.rt||(yield U("rt",n.data.rt))})}var Me=class{constructor(e,t){this.endpoint=e;this.parameters=t;this.messageHandlers=new Set;this.ready=this.waitForReady(),this.listen()}post(e,t){return I(this,null,function*(){return Ie(r=>I(this,null,function*(){yield this.ready;let o=[],s=Array.isArray(t)?t.map(p=>p.id):[],a=yield Wn(`${e}-${this.parameters}`,t);yield this._post(a);let i=p=>l=>{let{id:u,response:v}=Fn(t,l);Xn(l),u&&v&&Array.isArray(t)&&s.includes(u)?(o.push(v),o.length===t.length&&(p(),r(o))):u&&v&&!Array.isArray(t)&&u===t.id&&(p(),r(v))},c=this.on(ye.MAGIC_HANDLE_RESPONSE,i(()=>c()))}))})}on(e,t){let r=t.bind(window),o=s=>{s.data.msgType===`${e}-${this.parameters}`&&r(s)};return this.messageHandlers.add(o),()=>this.messageHandlers.delete(o)}waitForReady(){return new Promise(e=>{this.on(ye.MAGIC_OVERLAY_READY,()=>e())})}listen(){this.on(ye.MAGIC_HIDE_OVERLAY,()=>{this.hideOverlay()}),this.on(ye.MAGIC_SHOW_OVERLAY,()=>{this.showOverlay()})}};export{w as Extension,q as MagicExtensionError,X as MagicExtensionWarning,M as MagicRPCError,$ as MagicSDKError,J as MagicSDKWarning,fe as SDKBase,Pe as STORE_KEY_PRIVATE_KEY,ue as STORE_KEY_PUBLIC_JWK,xe as TypedEmitter,Me as ViewController,dt as clearKeys,lr as createDeprecationWarning,cr as createDuplicateIframeWarning,Ye as createExtensionNotInitializedError,Ze as createIncompatibleExtensionsError,Qe as createInvalidArgumentError,mt as createJwt,ze as createMalformedResponseError,Ve as createMissingApiKeyError,ar as createModalNotReadyError,ae as createPromiEvent,Ie as createPromise,tt as createReactNativeEndpointConfigurationWarning,Rn as createSDK,et as createSynchronousWeb3MethodWarning,ie as createTypedEmitter,be as createURL,We as decodeJSON,te as encodeJSON,Te as getPayloadId,re as isEmpty,Be as isJsonRpcErrorCode,Qn as isJsonRpcRequestPayload,Xe as isJsonRpcResponsePayload,er as isMagicPayloadMethod,ct as isPromiEvent,H as storage,lt as uuid};
//# sourceMappingURL=index.js.map
