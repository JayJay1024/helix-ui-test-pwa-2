import{o as v,r as fe,p as ue,q as he}from"./index-Bl6Lkf65.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="63a6e0f5-c3c8-469e-beb0-06e33708629a",t._sentryDebugIdIdentifier="sentry-dbid-63a6e0f5-c3c8-469e-beb0-06e33708629a")}catch{}})();const le=t=>JSON.stringify(t,(r,s)=>typeof s=="bigint"?s.toString()+"n":s),de=t=>{const r=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,s=t.replace(r,'$1"$2n"$3');return JSON.parse(s,(f,u)=>typeof u=="string"&&u.match(/^\d+n$/)?BigInt(u.substring(0,u.length-1)):u)};function pe(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return de(t)}catch{return t}}function C(t){return typeof t=="string"?t:le(t)||""}const ye="PARSE_ERROR",be="INVALID_REQUEST",ge="METHOD_NOT_FOUND",me="INVALID_PARAMS",G="INTERNAL_ERROR",D="SERVER_ERROR",ve=[-32700,-32600,-32601,-32602,-32603],R={[ye]:{code:-32700,message:"Parse error"},[be]:{code:-32600,message:"Invalid Request"},[ge]:{code:-32601,message:"Method not found"},[me]:{code:-32602,message:"Invalid params"},[G]:{code:-32603,message:"Internal error"},[D]:{code:-32e3,message:"Server error"}},z=D;function Ee(t){return ve.includes(t)}function U(t){return Object.keys(R).includes(t)?R[t]:R[z]}function we(t){const r=Object.values(R).find(s=>s.code===t);return r||R[z]}function Re(t,r,s){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${s} RPC url at ${r}`):t}var _e={},b={},M;function Oe(){if(M)return b;M=1,Object.defineProperty(b,"__esModule",{value:!0}),b.isBrowserCryptoAvailable=b.getSubtleCrypto=b.getBrowerCrypto=void 0;function t(){return(v===null||v===void 0?void 0:v.crypto)||(v===null||v===void 0?void 0:v.msCrypto)||{}}b.getBrowerCrypto=t;function r(){const f=t();return f.subtle||f.webkitSubtle}b.getSubtleCrypto=r;function s(){return!!t()&&!!r()}return b.isBrowserCryptoAvailable=s,b}var g={},N;function Ae(){if(N)return g;N=1,Object.defineProperty(g,"__esModule",{value:!0}),g.isBrowser=g.isNode=g.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}g.isReactNative=t;function r(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}g.isNode=r;function s(){return!t()&&!r()}return g.isBrowser=s,g}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const r=fe;r.__exportStar(Oe(),t),r.__exportStar(Ae(),t)})(_e);function X(t=3){const r=Date.now()*Math.pow(10,t),s=Math.floor(Math.random()*Math.pow(10,t));return r+s}function $e(t=6){return BigInt(X(t))}function Ve(t,r,s){return{id:s||X(),jsonrpc:"2.0",method:t,params:r}}function ke(t,r){return{id:t,jsonrpc:"2.0",result:r}}function Pe(t,r,s){return{id:t,jsonrpc:"2.0",error:Te(r,s)}}function Te(t,r){return typeof t>"u"?U(G):(typeof t=="string"&&(t=Object.assign(Object.assign({},U(D)),{message:t})),typeof r<"u"&&(t.data=r),Ee(t.code)&&(t=we(t.code)),t)}class Q{}let Ge=class extends Q{constructor(r){super()}};class Be extends Q{constructor(){super()}}class Xe extends Be{constructor(r){super()}}const De="^https?:",Se="^wss?:";function xe(t){const r=t.match(new RegExp(/^\w+:/,"gi"));if(!(!r||!r.length))return r[0]}function W(t,r){const s=xe(t);return typeof s>"u"?!1:new RegExp(r).test(s)}function L(t){return W(t,De)}function Qe(t){return W(t,Se)}function We(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function K(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function Ke(t){return K(t)&&"method"in t}function Ye(t){return K(t)&&(je(t)||Ie(t))}function je(t){return"result"in t}function Ie(t){return"error"in t}var B={exports:{}};(function(t,r){var s=typeof self<"u"?self:v,f=function(){function a(){this.fetch=!1,this.DOMException=s.DOMException}return a.prototype=s,new a}();(function(a){(function(d){var p={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function Y(e){return e&&DataView.prototype.isPrototypeOf(e)}if(p.arrayBuffer)var Z=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],ee=ArrayBuffer.isView||function(e){return e&&Z.indexOf(Object.prototype.toString.call(e))>-1};function E(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function S(e){return typeof e!="string"&&(e=String(e)),e}function O(e){var n={next:function(){var o=e.shift();return{done:o===void 0,value:o}}};return p.iterable&&(n[Symbol.iterator]=function(){return n}),n}function c(e){this.map={},e instanceof c?e.forEach(function(n,o){this.append(o,n)},this):Array.isArray(e)?e.forEach(function(n){this.append(n[0],n[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(n){this.append(n,e[n])},this)}c.prototype.append=function(e,n){e=E(e),n=S(n);var o=this.map[e];this.map[e]=o?o+", "+n:n},c.prototype.delete=function(e){delete this.map[E(e)]},c.prototype.get=function(e){return e=E(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(E(e))},c.prototype.set=function(e,n){this.map[E(e)]=S(n)},c.prototype.forEach=function(e,n){for(var o in this.map)this.map.hasOwnProperty(o)&&e.call(n,this.map[o],o,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(n,o){e.push(o)}),O(e)},c.prototype.values=function(){var e=[];return this.forEach(function(n){e.push(n)}),O(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(n,o){e.push([o,n])}),O(e)},p.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);function A(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function x(e){return new Promise(function(n,o){e.onload=function(){n(e.result)},e.onerror=function(){o(e.error)}})}function te(e){var n=new FileReader,o=x(n);return n.readAsArrayBuffer(e),o}function re(e){var n=new FileReader,o=x(n);return n.readAsText(e),o}function ne(e){for(var n=new Uint8Array(e),o=new Array(n.length),l=0;l<n.length;l++)o[l]=String.fromCharCode(n[l]);return o.join("")}function j(e){if(e.slice)return e.slice(0);var n=new Uint8Array(e.byteLength);return n.set(new Uint8Array(e)),n.buffer}function I(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:p.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:p.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():p.arrayBuffer&&p.blob&&Y(e)?(this._bodyArrayBuffer=j(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||ee(e))?this._bodyArrayBuffer=j(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var e=A(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?A(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(te)}),this.text=function(){var e=A(this);if(e)return e;if(this._bodyBlob)return re(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ne(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(ie)}),this.json=function(){return this.text().then(JSON.parse)},this}var se=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function oe(e){var n=e.toUpperCase();return se.indexOf(n)>-1?n:e}function m(e,n){n=n||{};var o=n.body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,n.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!o&&e._bodyInit!=null&&(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=n.credentials||this.credentials||"same-origin",(n.headers||!this.headers)&&(this.headers=new c(n.headers)),this.method=oe(n.method||this.method||"GET"),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})};function ie(e){var n=new FormData;return e.trim().split("&").forEach(function(o){if(o){var l=o.split("="),h=l.shift().replace(/\+/g," "),i=l.join("=").replace(/\+/g," ");n.append(decodeURIComponent(h),decodeURIComponent(i))}}),n}function ae(e){var n=new c,o=e.replace(/\r?\n[\t ]+/g," ");return o.split(/\r?\n/).forEach(function(l){var h=l.split(":"),i=h.shift().trim();if(i){var _=h.join(":").trim();n.append(i,_)}}),n}I.call(m.prototype);function y(e,n){n||(n={}),this.type="default",this.status=n.status===void 0?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new c(n.headers),this.url=n.url||"",this._initBody(e)}I.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var ce=[301,302,303,307,308];y.redirect=function(e,n){if(ce.indexOf(n)===-1)throw new RangeError("Invalid status code");return new y(null,{status:n,headers:{location:e}})},d.DOMException=a.DOMException;try{new d.DOMException}catch{d.DOMException=function(n,o){this.message=n,this.name=o;var l=Error(n);this.stack=l.stack},d.DOMException.prototype=Object.create(Error.prototype),d.DOMException.prototype.constructor=d.DOMException}function P(e,n){return new Promise(function(o,l){var h=new m(e,n);if(h.signal&&h.signal.aborted)return l(new d.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function _(){i.abort()}i.onload=function(){var w={status:i.status,statusText:i.statusText,headers:ae(i.getAllResponseHeaders()||"")};w.url="responseURL"in i?i.responseURL:w.headers.get("X-Request-URL");var T="response"in i?i.response:i.responseText;o(new y(T,w))},i.onerror=function(){l(new TypeError("Network request failed"))},i.ontimeout=function(){l(new TypeError("Network request failed"))},i.onabort=function(){l(new d.DOMException("Aborted","AbortError"))},i.open(h.method,h.url,!0),h.credentials==="include"?i.withCredentials=!0:h.credentials==="omit"&&(i.withCredentials=!1),"responseType"in i&&p.blob&&(i.responseType="blob"),h.headers.forEach(function(w,T){i.setRequestHeader(T,w)}),h.signal&&(h.signal.addEventListener("abort",_),i.onreadystatechange=function(){i.readyState===4&&h.signal.removeEventListener("abort",_)}),i.send(typeof h._bodyInit>"u"?null:h._bodyInit)})}return P.polyfill=!0,a.fetch||(a.fetch=P,a.Headers=c,a.Request=m,a.Response=y),d.Headers=c,d.Request=m,d.Response=y,d.fetch=P,Object.defineProperty(d,"__esModule",{value:!0}),d})({})})(f),f.fetch.ponyfill=!0,delete f.fetch.polyfill;var u=f;r=u.fetch,r.default=u.fetch,r.fetch=u.fetch,r.Headers=u.Headers,r.Request=u.Request,r.Response=u.Response,t.exports=r})(B,B.exports);var Ce=B.exports;const F=ue(Ce);var Ue=Object.defineProperty,Me=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,H=(t,r,s)=>r in t?Ue(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,J=(t,r)=>{for(var s in r||(r={}))Le.call(r,s)&&H(t,s,r[s]);if(q)for(var s of q(r))Fe.call(r,s)&&H(t,s,r[s]);return t},$=(t,r)=>Me(t,Ne(r));const qe={Accept:"application/json","Content-Type":"application/json"},He="POST",V={headers:qe,method:He},k=10;class Ze{constructor(r,s=!1){if(this.url=r,this.disableProviderPing=s,this.events=new he.EventEmitter,this.isAvailable=!1,this.registering=!1,!L(r))throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);this.url=r,this.disableProviderPing=s}get connected(){return this.isAvailable}get connecting(){return this.registering}on(r,s){this.events.on(r,s)}once(r,s){this.events.once(r,s)}off(r,s){this.events.off(r,s)}removeListener(r,s){this.events.removeListener(r,s)}async open(r=this.url){await this.register(r)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(r){this.isAvailable||await this.register();try{const s=C(r),f=await(await F(this.url,$(J({},V),{body:s}))).json();this.onPayload({data:f})}catch(s){this.onError(r.id,s)}}async register(r=this.url){if(!L(r))throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);if(this.registering){const s=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=s||this.events.listenerCount("open")>=s)&&this.events.setMaxListeners(s+1),new Promise((f,u)=>{this.events.once("register_error",a=>{this.resetMaxListeners(),u(a)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return u(new Error("HTTP connection is missing or invalid"));f()})})}this.url=r,this.registering=!0;try{if(!this.disableProviderPing){const s=C({id:1,jsonrpc:"2.0",method:"test",params:[]});await F(r,$(J({},V),{body:s}))}this.onOpen()}catch(s){const f=this.parseError(s);throw this.events.emit("register_error",f),this.onClose(),f}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(r){if(typeof r.data>"u")return;const s=typeof r.data=="string"?pe(r.data):r.data;this.events.emit("payload",s)}onError(r,s){const f=this.parseError(s),u=f.message||f.toString(),a=Pe(r,u);this.events.emit("payload",a)}parseError(r,s=this.url){return Re(r,s,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>k&&this.events.setMaxListeners(k)}}export{pe as a,Ye as b,Qe as c,_e as d,We as e,Ve as f,$e as g,Pe as h,Ie as i,Ke as j,ke as k,je as l,X as m,Ze as n,Ge as o,Re as p,Xe as r,C as s};
//# sourceMappingURL=index.es-BlHtwxd-.js.map
