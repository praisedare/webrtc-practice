/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},mu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[h],n[l],n[d],n[p])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):mu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw new yu;const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),l!==64){const T=u<<6&192|l;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vu=function(e){const t=xo(e);return Ro.encodeByteArray(t,!0)},Dn=function(e){return vu(e).replace(/\./g,"")},wu=function(e){try{return Ro.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=()=>Eu().__FIREBASE_DEFAULTS__,Iu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Su=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wu(e[1]);return t&&JSON.parse(t)},Mo=()=>{try{return Tu()||Iu()||Su()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cu=e=>{var t,n;return(n=(t=Mo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Du=e=>{const t=Cu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Au=()=>{var e;return(e=Mo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Dn(JSON.stringify(n)),Dn(JSON.stringify(o)),a].join(".")}function ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Nu(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="FirebaseError";class ge extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=xu,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Ru(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ge(r,a,s)}}function Ru(e,t){return e.replace(Mu,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Mu=/\{\$([^}]+)}/g;function Bs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Ci(i)&&Ci(o)){if(!Bs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ci(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return e&&e._delegate?e._delegate:e}class Le{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new _u;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pu(t))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vt){return this.instances.has(t)}getOptions(t=Vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Lu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Vt){return this.component?this.component.multipleInstances?t:Vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lu(e){return e===Vt?void 0:e}function Pu(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ou(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Vu={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},$u=N.INFO,Uu={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Bu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Uu[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lo{constructor(t){this.name=t,this._logLevel=$u,this._logHandler=Bu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const ju=(e,t)=>t.some(n=>e instanceof n);let Di,Ai;function qu(){return Di||(Di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zu(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Po=new WeakMap,js=new WeakMap,Fo=new WeakMap,Cs=new WeakMap,Ir=new WeakMap;function Hu(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(_t(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Po.set(n,e)}).catch(()=>{}),Ir.set(t,e),t}function Ku(e){if(js.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});js.set(e,t)}let qs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return js.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gu(e){qs=e(qs)}function Qu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ds(this),t,...n);return Fo.set(s,t.sort?t.sort():[t]),_t(s)}:zu().includes(e)?function(...t){return e.apply(Ds(this),t),_t(Po.get(this))}:function(...t){return _t(e.apply(Ds(this),t))}}function Wu(e){return typeof e=="function"?Qu(e):(e instanceof IDBTransaction&&Ku(e),ju(e,qu())?new Proxy(e,qs):e)}function _t(e){if(e instanceof IDBRequest)return Hu(e);if(Cs.has(e))return Cs.get(e);const t=Wu(e);return t!==e&&(Cs.set(e,t),Ir.set(t,e)),t}const Ds=e=>Ir.get(e);function Xu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=_t(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Yu=["get","getKey","getAll","getAllKeys","count"],Ju=["put","add","delete","clear"],As=new Map;function _i(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Ju.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return As.set(t,i),i}Gu(e=>({...e,get:(t,n,s)=>_i(t,n)||e.get(t,n,s),has:(t,n)=>!!_i(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(th(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function th(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zs="@firebase/app",bi="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Lo("@firebase/app"),eh="@firebase/app-compat",nh="@firebase/analytics-compat",sh="@firebase/analytics",rh="@firebase/app-check-compat",ih="@firebase/app-check",oh="@firebase/auth",ah="@firebase/auth-compat",ch="@firebase/database",uh="@firebase/database-compat",hh="@firebase/functions",lh="@firebase/functions-compat",dh="@firebase/installations",fh="@firebase/installations-compat",gh="@firebase/messaging",ph="@firebase/messaging-compat",mh="@firebase/performance",yh="@firebase/performance-compat",vh="@firebase/remote-config",wh="@firebase/remote-config-compat",Eh="@firebase/storage",Th="@firebase/storage-compat",Ih="@firebase/firestore",Sh="@firebase/firestore-compat",Ch="firebase",Dh="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="[DEFAULT]",Ah={[zs]:"fire-core",[eh]:"fire-core-compat",[sh]:"fire-analytics",[nh]:"fire-analytics-compat",[ih]:"fire-app-check",[rh]:"fire-app-check-compat",[oh]:"fire-auth",[ah]:"fire-auth-compat",[ch]:"fire-rtdb",[uh]:"fire-rtdb-compat",[hh]:"fire-fn",[lh]:"fire-fn-compat",[dh]:"fire-iid",[fh]:"fire-iid-compat",[gh]:"fire-fcm",[ph]:"fire-fcm-compat",[mh]:"fire-perf",[yh]:"fire-perf-compat",[vh]:"fire-rc",[wh]:"fire-rc-compat",[Eh]:"fire-gcs",[Th]:"fire-gcs-compat",[Ih]:"fire-fst",[Sh]:"fire-fst-compat","fire-js":"fire-js",[Ch]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,Ks=new Map;function _h(e,t){try{e.container.addComponent(t)}catch(n){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _n(e){const t=e.name;if(Ks.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;Ks.set(t,e);for(const n of An.values())_h(n,e);return!0}function bh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Oo("app","Firebase",kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=Dh;function Vo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw bt.create("bad-app-name",{appName:String(r)});if(n||(n=Au()),!n)throw bt.create("no-options");const i=An.get(r);if(i){if(Bs(n,i.options)&&Bs(s,i.config))return i;throw bt.create("duplicate-app",{appName:r})}const o=new Fu(r);for(const c of Ks.values())o.addComponent(c);const a=new Nh(n,s,o);return An.set(r,a),a}function Rh(e=Hs){const t=An.get(e);if(!t&&e===Hs)return Vo();if(!t)throw bt.create("no-app",{appName:e});return t}function ee(e,t,n){var s;let r=(s=Ah[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}_n(new Le(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="firebase-heartbeat-database",Oh=1,Pe="firebase-heartbeat-store";let _s=null;function $o(){return _s||(_s=Xu(Mh,Oh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pe)}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),_s}async function Lh(e){try{return(await $o()).transaction(Pe).objectStore(Pe).get(Uo(e))}catch(t){if(t instanceof ge)qt.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(n.message)}}}async function ki(e,t){try{const s=(await $o()).transaction(Pe,"readwrite");return await s.objectStore(Pe).put(t,Uo(e)),s.done}catch(n){if(n instanceof ge)qt.warn(n.message);else{const s=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(s.message)}}}function Uo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=1024,Fh=30*24*60*60*1e3;class Vh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ni();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Fh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ni(),{heartbeatsToSend:n,unsentEntries:s}=$h(this._heartbeatsCache.heartbeats),r=Dn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ni(){return new Date().toISOString().substring(0,10)}function $h(e,t=Ph){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xi(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Uh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ku()?Nu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function xi(e){return Dn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(e){_n(new Le("platform-logger",t=>new Zu(t),"PRIVATE")),_n(new Le("heartbeat",t=>new Vh(t),"PRIVATE")),ee(zs,bi,e),ee(zs,bi,"esm2017"),ee("fire-js","")}Bh("");var jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Sr=Sr||{},S=jh||self;function bn(){}function Kn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Xe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function qh(e){return Object.prototype.hasOwnProperty.call(e,bs)&&e[bs]||(e[bs]=++zh)}var bs="closure_uid_"+(1e9*Math.random()>>>0),zh=0;function Hh(e,t,n){return e.call.apply(e.bind,arguments)}function Kh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=Hh:tt=Kh,tt.apply(null,arguments)}function dn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Lt(){this.s=this.s,this.o=this.o}var Gh=0;Lt.prototype.s=!1;Lt.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Gh!=0)&&qh(this)};Lt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Cr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ri(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var Qh=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{S.addEventListener("test",bn,t),S.removeEventListener("test",bn,t)}catch{}return e}();function kn(e){return/^[\s\xa0]*$/.test(e)}var Mi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ks(e,t){return e<t?-1:e>t?1:0}function Gn(){var e=S.navigator;return e&&(e=e.userAgent)?e:""}function gt(e){return Gn().indexOf(e)!=-1}function Dr(e){return Dr[" "](e),e}Dr[" "]=bn;function jo(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var Wh=gt("Opera"),oe=gt("Trident")||gt("MSIE"),qo=gt("Edge"),Gs=qo||oe,zo=gt("Gecko")&&!(Gn().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),Xh=Gn().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function Ho(){var e=S.document;return e?e.documentMode:void 0}var Nn;t:{var Ns="",xs=function(){var e=Gn();if(zo)return/rv:([^\);]+)(\)|;)/.exec(e);if(qo)return/Edge\/([\d\.]+)/.exec(e);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xh)return/WebKit\/(\S+)/.exec(e);if(Wh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(xs&&(Ns=xs?xs[1]:""),oe){var Rs=Ho();if(Rs!=null&&Rs>parseFloat(Ns)){Nn=String(Rs);break t}}Nn=Ns}var Yh={};function Jh(){return jo(Yh,9,function(){let e=0;const t=Mi(String(Nn)).split("."),n=Mi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=ks(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ks(r[2].length==0,i[2].length==0)||ks(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Qs;if(S.document&&oe){var Oi=Ho();Qs=Oi||parseInt(Nn,10)||void 0}else Qs=void 0;var Zh=Qs;function Fe(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(zo){t:{try{Dr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:tl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Fe.$.h.call(this)}}z(Fe,et);var tl={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ye="closure_listenable_"+(1e6*Math.random()|0),el=0;function nl(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++el,this.fa=this.ia=!1}function Qn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ar(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ko(e){const t={};for(const n in e)t[n]=e[n];return t}const Li="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Go(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Li.length;i++)n=Li[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Wn(e){this.src=e,this.g={},this.h=0}Wn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Xs(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new nl(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function Ws(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Bo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Qn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),Ms={};function Qo(e,t,n,s,r){if(s&&s.once)return Xo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Qo(e,t[i],n,s,r);return null}return n=Nr(n),e&&e[Ye]?e.O(t,n,Xe(s)?!!s.capture:!!s,r):Wo(e,t,n,!1,s,r)}function Wo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Xe(r)?!!r.capture:!!r,a=kr(e);if(a||(e[_r]=a=new Wn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=sl(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Qh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Jo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sl(){function e(n){return t.call(e.src,e.listener,n)}const t=rl;return e}function Xo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Xo(e,t[i],n,s,r);return null}return n=Nr(n),e&&e[Ye]?e.P(t,n,Xe(s)?!!s.capture:!!s,r):Wo(e,t,n,!0,s,r)}function Yo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Yo(e,t[i],n,s,r);else s=Xe(s)?!!s.capture:!!s,n=Nr(n),e&&e[Ye]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Xs(i,n,s,r),-1<n&&(Qn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=kr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xs(t,n,s,r)),(n=-1<e?t[e]:null)&&br(n))}function br(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ye])Ws(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Jo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=kr(t))?(Ws(n,e),n.h==0&&(n.src=null,t[_r]=null)):Qn(e)}}}function Jo(e){return e in Ms?Ms[e]:Ms[e]="on"+e}function rl(e,t){if(e.fa)e=!0;else{t=new Fe(t,this);var n=e.listener,s=e.la||e.src;e.ia&&br(e),e=n.call(s,t)}return e}function kr(e){return e=e[_r],e instanceof Wn?e:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nr(e){return typeof e=="function"?e:(e[Os]||(e[Os]=function(t){return e.handleEvent(t)}),e[Os])}function q(){Lt.call(this),this.i=new Wn(this),this.S=this,this.J=null}z(q,Lt);q.prototype[Ye]=!0;q.prototype.removeEventListener=function(e,t,n,s){Yo(this,e,t,n,s)};function Q(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var r=t;t=new et(s,e),Go(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=fn(o,s,!0,t)&&r}if(o=t.g=e,r=fn(o,s,!0,t)&&r,r=fn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=fn(o,s,!1,t)&&r}q.prototype.N=function(){if(q.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Qn(n[s]);delete e.g[t],e.h--}}this.J=null};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function fn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ws(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var xr=S.JSON.stringify;function il(){var e=ea;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ol{constructor(){this.h=this.g=null}add(t,n){const s=Zo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new al,e=>e.reset());class al{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cl(e){S.setTimeout(()=>{throw e},0)}function ta(e,t){Ys||ul(),Js||(Ys(),Js=!0),ea.add(e,t)}var Ys;function ul(){var e=S.Promise.resolve(void 0);Ys=function(){e.then(hl)}}var Js=!1,ea=new ol;function hl(){for(var e;e=il();){try{e.h.call(e.g)}catch(n){cl(n)}var t=Zo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Js=!1}function Xn(e,t){q.call(this),this.h=e||1,this.g=t||S,this.j=tt(this.qb,this),this.l=Date.now()}z(Xn,q);m=Xn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(Rr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Xn.$.N.call(this),Rr(this),delete this.g};function Mr(e,t,n){if(typeof e=="function")n&&(e=tt(e,n));else if(e&&typeof e.handleEvent=="function")e=tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}function na(e){e.g=Mr(()=>{e.g=null,e.i&&(e.i=!1,na(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ll extends Lt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:na(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(e){Lt.call(this),this.h=e,this.g={}}z(Ve,Lt);var Pi=[];function sa(e,t,n,s){Array.isArray(n)||(n&&(Pi[0]=n.toString()),n=Pi);for(var r=0;r<n.length;r++){var i=Qo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ra(e){Ar(e.g,function(t,n){this.g.hasOwnProperty(n)&&br(t)},e),e.g={}}Ve.prototype.N=function(){Ve.$.N.call(this),ra(this)};Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yn(){this.g=!0}Yn.prototype.Ea=function(){this.g=!1};function dl(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function fl(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function te(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+pl(e,n)+(s?" "+s:"")})}function gl(e,t){e.info(function(){return"TIMEOUT: "+t})}Yn.prototype.info=function(){};function pl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return xr(n)}catch{return t}}var Qt={},Fi=null;function Jn(){return Fi=Fi||new q}Qt.Ta="serverreachability";function ia(e){et.call(this,Qt.Ta,e)}z(ia,et);function $e(e){const t=Jn();Q(t,new ia(t))}Qt.STAT_EVENT="statevent";function oa(e,t){et.call(this,Qt.STAT_EVENT,e),this.stat=t}z(oa,et);function it(e){const t=Jn();Q(t,new oa(t,e))}Qt.Ua="timingevent";function aa(e,t){et.call(this,Qt.Ua,e),this.size=t}z(aa,et);function Je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}var Zn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ca={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Or(){}Or.prototype.h=null;function Vi(e){return e.h||(e.h=e.i())}function ua(){}var Ze={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lr(){et.call(this,"d")}z(Lr,et);function Pr(){et.call(this,"c")}z(Pr,et);var Zs;function ts(){}z(ts,Or);ts.prototype.g=function(){return new XMLHttpRequest};ts.prototype.i=function(){return{}};Zs=new ts;function tn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Ve(this),this.P=ml,e=Gs?125:void 0,this.V=new Xn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ha}function ha(){this.i=null,this.g="",this.h=!1}var ml=45e3,tr={},xn={};m=tn.prototype;m.setTimeout=function(e){this.P=e};function er(e,t,n){e.L=1,e.v=ns(It(t)),e.s=n,e.S=!0,la(e,null)}function la(e,t){e.G=Date.now(),en(e),e.A=It(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),wa(n.i,"t",s),e.C=0,n=e.l.I,e.h=new ha,e.g=Ua(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ll(tt(e.Pa,e,e.g),e.O)),sa(e.U,e.g,"readystatechange",e.nb),t=e.I?Ko(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),$e(),dl(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&wt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const h=wt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Gs||this.g&&(this.h.h||this.g.ja()||ji(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?$e(3):$e(2)),es(this);var n=this.g.da();this.aa=n;e:if(da(this)){var s=ji(this.g);e="";var r=s.length,i=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Ne(this);var o="";break e}this.h.i=new S.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fl(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kn(a)){var u=a;break e}}u=null}if(n=u)te(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nr(this,n);else{this.i=!1,this.o=3,it(12),$t(this),Ne(this);break t}}this.S?(fa(this,h,o),Gs&&this.i&&h==3&&(sa(this.U,this.V,"tick",this.mb),this.V.start())):(te(this.j,this.m,o,null),nr(this,o)),h==4&&$t(this),this.i&&!this.J&&(h==4?Pa(this.l,this):(this.i=!1,en(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),$t(this),Ne(this)}}}catch{}finally{}};function da(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function fa(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=yl(e,n),r==xn){t==4&&(e.o=4,it(14),s=!1),te(e.j,e.m,null,"[Incomplete Response]");break}else if(r==tr){e.o=4,it(15),te(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else te(e.j,e.m,r,null),nr(e,r);da(e)&&r!=xn&&r!=tr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qr(t),t.L=!0,it(11))):(te(e.j,e.m,n,"[Invalid Chunked Response]"),$t(e),Ne(e))}m.mb=function(){if(this.g){var e=wt(this.g),t=this.g.ja();this.C<t.length&&(es(this),fa(this,e,t),this.i&&e!=4&&en(this))}};function yl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?xn:(n=Number(t.substring(n,s)),isNaN(n)?tr:(s+=1,s+n>t.length?xn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.J=!0,$t(this)};function en(e){e.Y=Date.now()+e.P,ga(e,e.P)}function ga(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Je(tt(e.lb,e),t)}function es(e){e.B&&(S.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(gl(this.j,this.A),this.L!=2&&($e(),it(17)),$t(this),this.o=2,Ne(this)):ga(this,this.Y-e)};function Ne(e){e.l.H==0||e.J||Pa(e.l,e)}function $t(e){es(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Rr(e.V),ra(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function nr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||sr(n.h,e))){if(!e.K&&sr(n.h,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)On(n),is(n);else break t;jr(n),it(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Je(tt(n.ib,n),6e3));if(1>=Ia(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&On(n),!kn(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const h=u[3];h!=null&&(n.qa=h,n.j.info("VER="+n.qa));const l=u[4];l!=null&&(n.Ga=l,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const T=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=s.h;i.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fr(i,i.h),i.h=null))}if(s.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.Da=E,M(s.G,s.F,E))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=$a(s,s.I?s.oa:null,s.Y),o.K){Sa(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(es(a),en(a)),s.g=o}else Oa(s);0<n.i.length&&os(n)}else u[0]!="stop"&&u[0]!="close"||Ut(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ut(n,7):Br(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}$e(4)}catch{}}function vl(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Kn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function wl(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Kn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function pa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Kn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=wl(e),s=vl(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function El(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=t!==void 0?t:e.h,Rn(this,e.j),this.s=e.s,this.g=e.g,Mn(this,e.m),this.l=e.l,t=e.i;var n=new Ue;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),$i(this,n),this.o=e.o}else e&&(n=String(e).match(ma))?(this.h=!!t,Rn(this,n[1]||"",!0),this.s=Ce(n[2]||""),this.g=Ce(n[3]||"",!0),Mn(this,n[4]),this.l=Ce(n[5]||"",!0),$i(this,n[6]||"",!0),this.o=Ce(n[7]||"")):(this.h=!!t,this.i=new Ue(null,this.h))}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(De(t,Ui,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(De(t,Ui,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(De(n,n.charAt(0)=="/"?Sl:Il,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",De(n,Dl)),e.join("")};function It(e){return new jt(e)}function Rn(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $i(e,t,n){t instanceof Ue?(e.i=t,Al(e.i,e.h)):(n||(t=De(t,Cl)),e.i=new Ue(t,e.h))}function M(e,t,n){e.i.set(t,n)}function ns(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function De(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Tl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Tl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ui=/[#\/\?@]/g,Il=/[#\?:]/g,Sl=/[#\?]/g,Cl=/[#\?@]/g,Dl=/#/g;function Ue(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pt(e){e.g||(e.g=new Map,e.h=0,e.i&&El(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Ue.prototype;m.add=function(e,t){Pt(this),this.i=null,e=pe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ya(e,t){Pt(e),t=pe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function va(e,t){return Pt(e),t=pe(e,t),e.g.has(t)}m.forEach=function(e,t){Pt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};m.sa=function(){Pt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};m.Z=function(e){Pt(this);let t=[];if(typeof e=="string")va(this,e)&&(t=t.concat(this.g.get(pe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Pt(this),this.i=null,e=pe(this,e),va(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function wa(e,t,n){ya(e,t),0<n.length&&(e.i=null,e.g.set(pe(e,t),Cr(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function pe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Al(e,t){t&&!e.j&&(Pt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ya(this,s),wa(this,r,n))},e)),e.j=t}var _l=class{constructor(e,t){this.h=e,this.g=t}};function Ea(e){this.l=e||bl,S.PerformanceNavigationTiming?(e=S.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bl=10;function Ta(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ia(e){return e.h?1:e.g?e.g.size:0}function sr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Fr(e,t){e.g?e.g.add(t):e.h=t}function Sa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ea.prototype.cancel=function(){if(this.i=Ca(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ca(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Cr(e.i)}function Vr(){}Vr.prototype.stringify=function(e){return S.JSON.stringify(e,void 0)};Vr.prototype.parse=function(e){return S.JSON.parse(e,void 0)};function kl(){this.g=new Vr}function Nl(e,t,n){const s=n||"";try{pa(e,function(r,i){let o=r;Xe(r)&&(o=xr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function xl(e,t){const n=new Yn;if(S.Image){const s=new Image;s.onload=dn(gn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=dn(gn,n,s,"TestLoadImage: error",!1,t),s.onabort=dn(gn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=dn(gn,n,s,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function gn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function nn(e){this.l=e.fc||null,this.j=e.ob||!1}z(nn,Or);nn.prototype.g=function(){return new ss(this.l,this.j)};nn.prototype.i=function(e){return function(){return e}}({});function ss(e,t){q.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=$r,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(ss,q);var $r=0;m=ss.prototype;m.open=function(e,t){if(this.readyState!=$r)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Be(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||S).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=$r};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Da(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Da(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sn(this):Be(this),this.readyState==3&&Da(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,sn(this))};m.Ya=function(e){this.g&&(this.response=e,sn(this))};m.ka=function(){this.g&&sn(this)};function sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Be(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Rl=S.JSON.parse;function P(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Aa,this.L=this.M=!1}z(P,q);var Aa="",Ml=/^https?$/i,Ol=["POST","PUT"];m=P.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zs.g(),this.C=this.u?Vi(this.u):Vi(Zs),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Bi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=S.FormData&&e instanceof S.FormData,!(0<=Bo(Ol,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ka(this),0<this.B&&((this.L=Ll(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Mr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Bi(this,i)}};function Ll(e){return oe&&Jh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof Sr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Bi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_a(e),rs(e)}function _a(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),rs(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rs(this,!0)),P.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?ba(this):this.kb())};m.kb=function(){ba(this)};function ba(e){if(e.h&&typeof Sr<"u"&&(!e.C[1]||wt(e)!=4||e.da()!=2)){if(e.v&&wt(e)==4)Mr(e.La,0,e);else if(Q(e,"readystatechange"),wt(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.I).match(ma)[1]||null;if(!r&&S.self&&S.self.location){var i=S.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ml.test(r?r.toLowerCase():"")}n=s}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",_a(e)}}finally{rs(e)}}}}function rs(e,t){if(e.g){ka(e);const n=e.g,s=e.C[0]?bn:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=s}catch{}}}function ka(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}function wt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Rl(t)}};function ji(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Aa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Na(e){let t="";return Ar(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ur(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Na(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function Ie(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xa(e){this.Ga=0,this.i=[],this.j=new Yn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ie("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ie("baseRetryDelayMs",5e3,e),this.hb=Ie("retryDelaySeedMs",1e4,e),this.eb=Ie("forwardChannelMaxRetries",2,e),this.xa=Ie("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Ea(e&&e.concurrentRequestLimit),this.Ja=new kl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}m=xa.prototype;m.qa=8;m.H=1;function Br(e){if(Ra(e),e.H==3){var t=e.W++,n=It(e.G);M(n,"SID",e.J),M(n,"RID",t),M(n,"TYPE","terminate"),rn(e,n),t=new tn(e,e.j,t,void 0),t.L=2,t.v=ns(It(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(t.v.toString(),"")),!n&&S.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ua(t.l,null),t.g.ha(t.v)),t.G=Date.now(),en(t)}Va(e)}function is(e){e.g&&(qr(e),e.g.cancel(),e.g=null)}function Ra(e){is(e),e.u&&(S.clearTimeout(e.u),e.u=null),On(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&S.clearTimeout(e.m),e.m=null)}function os(e){Ta(e.h)||e.m||(e.m=!0,ta(e.Na,e),e.C=0)}function Pl(e,t){return Ia(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Je(tt(e.Na,e,t),Fa(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new tn(this,this.j,e,void 0);let i=this.s;if(this.U&&(i?(i=Ko(i),Go(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ma(this,r,t),n=It(this.G),M(n,"RID",e),M(n,"CVER",22),this.F&&M(n,"X-HTTP-Session-Id",this.F),rn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Na(i)))+"&"+t:this.o&&Ur(n,this.o,i)),Fr(this.h,r),this.bb&&M(n,"TYPE","init"),this.P?(M(n,"$req",t),M(n,"SID","null"),r.ba=!0,er(r,n,null)):er(r,n,t),this.H=2}}else this.H==3&&(e?qi(this,e):this.i.length==0||Ta(this.h)||qi(this))};function qi(e,t){var n;t?n=t.m:n=e.W++;const s=It(e.G);M(s,"SID",e.J),M(s,"RID",n),M(s,"AID",e.V),rn(e,s),e.o&&e.s&&Ur(s,e.o,e.s),n=new tn(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Ma(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Fr(e.h,n),er(n,s,t)}function rn(e,t){e.ma&&Ar(e.ma,function(n,s){M(t,s,n)}),e.l&&pa({},function(n,s){M(t,s,n)})}function Ma(e,t,n){n=Math.min(e.i.length,n);var s=e.l?tt(e.l.Va,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Nl(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,s}function Oa(e){e.g||e.u||(e.ba=1,ta(e.Ma,e),e.A=0)}function jr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Je(tt(e.Ma,e),Fa(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,La(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Je(tt(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,it(10),is(this),La(this))};function qr(e){e.B!=null&&(S.clearTimeout(e.B),e.B=null)}function La(e){e.g=new tn(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=It(e.wa);M(t,"RID","rpc"),M(t,"SID",e.J),M(t,"CI",e.M?"0":"1"),M(t,"AID",e.V),M(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&Ur(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=ns(It(t)),n.s=null,n.S=!0,la(n,e)}m.ib=function(){this.v!=null&&(this.v=null,is(this),jr(this),it(19))};function On(e){e.v!=null&&(S.clearTimeout(e.v),e.v=null)}function Pa(e,t){var n=null;if(e.g==t){On(e),qr(e),e.g=null;var s=2}else if(sr(e.h,t))n=t.F,Sa(e.h,t),s=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=Jn(),Q(s,new aa(s,n)),os(e)}else Oa(e);else if(r=t.o,r==3||r==0&&0<e.ta||!(s==1&&Pl(e,t)||s==2&&jr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function Fa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Ut(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=tt(e.pb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Rn(n,"https"),ns(n)),xl(n.toString(),s)}else it(2);e.H=0,e.l&&e.l.za(t),Va(e),Ra(e)}m.pb=function(e){e?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Va(e){if(e.H=0,e.pa=[],e.l){const t=Ca(e.h);(t.length!=0||e.i.length!=0)&&(Ri(e.pa,t),Ri(e.pa,e.i),e.h.i.length=0,Cr(e.i),e.i.length=0),e.l.ya()}}function $a(e,t,n){var s=n instanceof jt?It(n):new jt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Mn(s,s.m);else{var r=S.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new jt(null,void 0);s&&Rn(i,s),t&&(i.g=t),r&&Mn(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&M(s,n,t),M(s,"VER",e.qa),rn(e,s),s}function Ua(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new P(new nn({ob:!0})):new P(e.va),t.Oa(e.I),t}function Ba(){}m=Ba.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.Va=function(){};function Ln(){if(oe&&!(10<=Number(Zh)))throw Error("Environmental error: no available transport.")}Ln.prototype.g=function(e,t){return new ut(e,t)};function ut(e,t){q.call(this),this.g=new xa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!kn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!kn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new me(this)}z(ut,q);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=$a(e,null,e.Y),os(e)};ut.prototype.close=function(){Br(this.g)};ut.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xr(e),e=n);t.i.push(new _l(t.fb++,e)),t.H==3&&os(t)};ut.prototype.N=function(){this.g.l=null,delete this.j,Br(this.g),delete this.g,ut.$.N.call(this)};function ja(e){Lr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(ja,Lr);function qa(){Pr.call(this),this.status=1}z(qa,Pr);function me(e){this.g=e}z(me,Ba);me.prototype.Ba=function(){Q(this.g,"a")};me.prototype.Aa=function(e){Q(this.g,new ja(e))};me.prototype.za=function(e){Q(this.g,new qa)};me.prototype.ya=function(){Q(this.g,"b")};function Fl(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ft,Fl);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ls(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}ft.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)Ls(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){Ls(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){Ls(this,s),r=0;break}}this.h=r,this.i+=t};ft.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function x(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var Vl={};function zr(e){return-128<=e&&128>e?jo(Vl,e,function(t){return new x([t|0],0>t?-1:0)}):new x([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return ne;if(0>e)return G(pt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=rr;return new x(t,0)}function za(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(za(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),s=ne,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=pt(Math.pow(t,i)),s=s.R(i).add(pt(o))):(s=s.R(n),s=s.add(pt(o)))}return s}var rr=4294967296,ne=zr(0),ir=zr(1),zi=zr(16777216);m=x.prototype;m.ea=function(){if(ht(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:rr+s)*t,t*=rr}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Et(this))return"0";if(ht(this))return"-"+G(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,s="";;){var r=Fn(n,t).g;n=Pn(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,Et(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Et(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ht(e){return e.h==-1}m.X=function(e){return e=Pn(this,e),ht(e)?-1:Et(e)?0:1};function G(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new x(n,~e.h).add(ir)}m.abs=function(){return ht(this)?G(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new x(n,n[n.length-1]&-2147483648?-1:0)};function Pn(e,t){return e.add(G(t))}m.R=function(e){if(Et(this)||Et(e))return ne;if(ht(this))return ht(e)?G(this).R(G(e)):G(G(this).R(e));if(ht(e))return G(this.R(G(e)));if(0>this.X(zi)&&0>e.X(zi))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,c=e.D(r)&65535;n[2*s+2*r]+=o*c,pn(n,2*s+2*r),n[2*s+2*r+1]+=i*c,pn(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,pn(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,pn(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new x(n,0)};function pn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Se(e,t){this.g=e,this.h=t}function Fn(e,t){if(Et(t))throw Error("division by zero");if(Et(e))return new Se(ne,ne);if(ht(e))return t=Fn(G(e),t),new Se(G(t.g),G(t.h));if(ht(t))return t=Fn(e,G(t)),new Se(G(t.g),t.h);if(30<e.g.length){if(ht(e)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ir,s=t;0>=s.X(e);)n=Hi(n),s=Hi(s);var r=Yt(n,1),i=Yt(s,1);for(s=Yt(s,2),n=Yt(n,2);!Et(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=Yt(s,1),n=Yt(n,1)}return t=Pn(e,r.R(t)),new Se(r,t)}for(r=ne;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=pt(n),o=i.R(t);ht(o)||0<o.X(e);)n-=s,i=pt(n),o=i.R(t);Et(i)&&(i=ir),r=r.add(i),e=Pn(e,o)}return new Se(r,e)}m.gb=function(e){return Fn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new x(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new x(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new x(n,this.h^e.h)};function Hi(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new x(n,e.h)}function Yt(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new x(r,e.h)}Ln.prototype.createWebChannel=Ln.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Zn.NO_ERROR=0;Zn.TIMEOUT=8;Zn.HTTP_ERROR=6;ca.COMPLETE="complete";ua.EventType=Ze;Ze.OPEN="a";Ze.CLOSE="b";Ze.ERROR="c";Ze.MESSAGE="d";q.prototype.listen=q.prototype.O;P.prototype.listenOnce=P.prototype.P;P.prototype.getLastError=P.prototype.Sa;P.prototype.getLastErrorCode=P.prototype.Ia;P.prototype.getStatus=P.prototype.da;P.prototype.getResponseJson=P.prototype.Wa;P.prototype.getResponseText=P.prototype.ja;P.prototype.send=P.prototype.ha;P.prototype.setWithCredentials=P.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;x.prototype.add=x.prototype.add;x.prototype.multiply=x.prototype.R;x.prototype.modulo=x.prototype.gb;x.prototype.compare=x.prototype.X;x.prototype.toNumber=x.prototype.ea;x.prototype.toString=x.prototype.toString;x.prototype.getBits=x.prototype.D;x.fromNumber=pt;x.fromString=za;var $l=function(){return new Ln},Ul=function(){return Jn()},Ps=Zn,Bl=ca,jl=Qt,Ki={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ql=nn,mn=ua,zl=P,Hl=ft,se=x;const Gi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Lo("@firebase/firestore");function Qi(){return zt.logLevel}function y(e,...t){if(zt.logLevel<=N.DEBUG){const n=t.map(Hr);zt.debug(`Firestore (${ye}): ${e}`,...n)}}function St(e,...t){if(zt.logLevel<=N.ERROR){const n=t.map(Hr);zt.error(`Firestore (${ye}): ${e}`,...n)}}function ae(e,...t){if(zt.logLevel<=N.WARN){const n=t.map(Hr);zt.warn(`Firestore (${ye}): ${e}`,...n)}}function Hr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: `+e;throw St(t),new Error(t)}function R(e,t){e||I()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Gl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ql{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Ha(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new Y(t)}}class Wl{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Xl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Wl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jl{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.T=n.token,new Yl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Zl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function ce(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return B.fromMillis(Date.now())}static fromDate(t){return B.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new B(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new B(0,0))}static max(){return new C(new B(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return je.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof je?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends je{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new O(n)}static emptyPath(){return new O([])}}const td=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends je{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return td.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(O.fromString(t))}static fromName(t){return new w(O.fromString(t).popFirst(5))}static empty(){return new w(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new O(t.slice()))}}function ed(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new B(n+1,0):new B(n,s));return new Rt(r,w.empty(),t)}function nd(e){return new Rt(e.readTime,e.key,-1)}class Rt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(C.min(),w.empty(),-1)}static max(){return new Rt(C.max(),w.empty(),-1)}}function sd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class id{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==rd)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function an(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Kr.ct=-1;function as(e){return e==null}function Vn(e){return e===0&&1/e==-1/0}function od(e){return typeof e=="number"&&Number.isInteger(e)&&!Vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Wt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ga(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new L(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yn(this.root,t,this.comparator,!0)}}class yn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??K.RED,this.left=r??K.EMPTY,this.right=i??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new K(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return K.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new ct([])}unionWith(t){let n=new nt(Z.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Qa("Invalid base64 string: "+r):r}}(t);return new st(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new st(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(e){if(R(!!e),typeof e=="string"){let t=0;const n=ad.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?st.fromBase64String(e):st.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qr(e){const t=e.mapValue.fields.__previous_value__;return Gr(t)?Qr(t):t}function qe(e){const t=Mt(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gr(e)?4:ud(e)?9007199254740991:10:I()}function yt(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qe(e).isEqual(qe(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Mt(s.timestampValue),o=Mt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Ht(s.bytesValue).isEqual(Ht(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return V(s.geoPointValue.latitude)===V(r.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return V(s.integerValue)===V(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=V(s.doubleValue),o=V(r.doubleValue);return i===o?Vn(i)===Vn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ce(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wi(i)!==Wi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yt(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function He(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ue(e,t){if(e===t)return 0;const n=Kt(e),s=Kt(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=V(r.integerValue||r.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Yi(e.timestampValue,t.timestampValue);case 4:return Yi(qe(e),qe(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Ht(r),a=Ht(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=k(o[c],a[c]);if(u!==0)return u}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=k(V(r.latitude),V(i.latitude));return o!==0?o:k(V(r.longitude),V(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ue(o[c],a[c]);if(u)return u}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===vn.mapValue&&i===vn.mapValue)return 0;if(r===vn.mapValue)return 1;if(i===vn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=k(a[h],u[h]);if(l!==0)return l;const d=ue(o[a[h]],c[u[h]]);if(d!==0)return d}return k(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function Yi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Mt(e),s=Mt(t),r=k(n.seconds,s.seconds);return r!==0?r:k(n.nanos,s.nanos)}function he(e){return or(e)}function or(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Mt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ht(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=or(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${or(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function ar(e){return!!e&&"integerValue"in e}function Wr(e){return!!e&&"arrayValue"in e}function Ji(e){return!!e&&"nullValue"in e}function Zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tn(e){return!!e&&"mapValue"in e}function xe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Wt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=xe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ud(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xe(n)}setAll(t){let n=Z.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=xe(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Tn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Wt(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new at(xe(this.value))}}function Wa(e){const t=[];return Wt(e.fields,(n,s)=>{const r=new Z([n]);if(Tn(s)){const i=Wa(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,C.min(),C.min(),C.min(),at.empty(),0)}static newFoundDocument(t,n,s,r){return new J(t,1,n,C.min(),s,r,0)}static newNoDocument(t,n){return new J(t,2,n,C.min(),C.min(),at.empty(),0)}static newUnknownDocument(t,n){return new J(t,3,n,C.min(),C.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n){this.position=t,this.inclusive=n}}function to(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=ue(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function eo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n="asc"){this.field=t,this.dir=n}}function hd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{}class U extends Xa{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new dd(t,n,s):n==="array-contains"?new pd(t,s):n==="in"?new md(t,s):n==="not-in"?new yd(t,s):n==="array-contains-any"?new vd(t,s):new U(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new fd(t,s):new gd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ue(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.matchesComparison(ue(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vt extends Xa{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new vt(t,n)}matches(t){return Ya(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Ya(e){return e.op==="and"}function Ja(e){return ld(e)&&Ya(e)}function ld(e){for(const t of e.filters)if(t instanceof vt)return!1;return!0}function cr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+he(e.value);if(Ja(e))return e.filters.map(t=>cr(t)).join(",");{const t=e.filters.map(n=>cr(n)).join(",");return`${e.op}(${t})`}}function Za(e,t){return e instanceof U?function(n,s){return s instanceof U&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)}(e,t):e instanceof vt?function(n,s){return s instanceof vt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Za(i,s.filters[o]),!0):!1}(e,t):void I()}function tc(e){return e instanceof U?function(t){return`${t.field.canonicalString()} ${t.op} ${he(t.value)}`}(e):e instanceof vt?function(t){return t.op.toString()+" {"+t.getFilters().map(tc).join(" ,")+"}"}(e):"Filter"}class dd extends U{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class fd extends U{constructor(t,n){super(t,"in",n),this.keys=ec("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class gd extends U{constructor(t,n){super(t,"not-in",n),this.keys=ec("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ec(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class pd extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Wr(n)&&He(n.arrayValue,this.value)}}class md extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&He(this.value.arrayValue,n)}}class yd extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!He(this.value.arrayValue,n)}}class vd extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Wr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>He(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function no(e,t=null,n=[],s=[],r=null,i=null,o=null){return new wd(e,t,n,s,r,i,o)}function Xr(e){const t=D(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>cr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),as(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>he(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>he(s)).join(",")),t.ft=n}return t.ft}function Yr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!hd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Za(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eo(e.startAt,t.startAt)&&eo(e.endAt,t.endAt)}function ur(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ed(e,t,n,s,r,i,o,a){return new cs(e,t,n,s,r,i,o,a)}function us(e){return new cs(e)}function so(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Td(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Id(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Sd(e){return e.collectionGroup!==null}function re(e){const t=D(e);if(t.dt===null){t.dt=[];const n=Id(t),s=Td(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Re(n)),t.dt.push(new Re(Z.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Re(Z.keyField(),i))}}}return t.dt}function Ct(e){const t=D(e);if(!t._t)if(t.limitType==="F")t._t=no(t.path,t.collectionGroup,re(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of re(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Re(i.field,o))}const s=t.endAt?new $n(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $n(t.startAt.position,t.startAt.inclusive):null;t._t=no(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function hr(e,t,n){return new cs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function hs(e,t){return Yr(Ct(e),Ct(t))&&e.limitType===t.limitType}function nc(e){return`${Xr(Ct(e))}|lt:${e.limitType}`}function lr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>tc(s)).join(", ")}]`),as(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>he(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>he(s)).join(",")),`Target(${n})`}(Ct(e))}; limitType=${e.limitType})`}function ls(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of re(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=to(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,re(n),s)||n.endAt&&!function(r,i,o){const a=to(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,re(n),s))}(e,t)}function Cd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function sc(e){return(t,n)=>{let s=!1;for(const r of re(e)){const i=Dd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Dd(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ue(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Wt(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Ga(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new L(w.comparator);function Dt(){return Ad}const rc=new L(w.comparator);function Ae(...e){let t=rc;for(const n of e)t=t.insert(n.key,n);return t}function ic(e){let t=rc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Bt(){return Me()}function oc(){return Me()}function Me(){return new ve(e=>e.toString(),(e,t)=>e.isEqual(t))}const _d=new L(w.comparator),bd=new nt(w.comparator);function _(...e){let t=bd;for(const n of e)t=t.add(n);return t}const kd=new nt(k);function Nd(){return kd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function cc(e){return{integerValue:""+e}}function xd(e,t){return od(t)?cc(t):ac(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this._=void 0}}function Rd(e,t,n){return e instanceof Un?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Gr(r)&&(r=Qr(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ke?hc(e,t):e instanceof Ge?lc(e,t):function(s,r){const i=uc(s,r),o=ro(i)+ro(s.wt);return ar(i)&&ar(s.wt)?cc(o):ac(s.serializer,o)}(e,t)}function Md(e,t,n){return e instanceof Ke?hc(e,t):e instanceof Ge?lc(e,t):n}function uc(e,t){return e instanceof Bn?ar(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Un extends ds{}class Ke extends ds{constructor(t){super(),this.elements=t}}function hc(e,t){const n=dc(t);for(const s of e.elements)n.some(r=>yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ge extends ds{constructor(t){super(),this.elements=t}}function lc(e,t){let n=dc(t);for(const s of e.elements)n=n.filter(r=>!yt(r,s));return{arrayValue:{values:n}}}class Bn extends ds{constructor(t,n){super(),this.serializer=t,this.wt=n}}function ro(e){return V(e.integerValue||e.doubleValue)}function dc(e){return Wr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Od(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ke&&s instanceof Ke||n instanceof Ge&&s instanceof Ge?ce(n.elements,s.elements,yt):n instanceof Bn&&s instanceof Bn?yt(n.wt,s.wt):n instanceof Un&&s instanceof Un}(e.transform,t.transform)}class Ld{constructor(t,n){this.version=t,this.transformResults=n}}class lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function In(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class fs{}function fc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new pc(e.key,lt.none()):new cn(e.key,e.data,lt.none());{const n=e.data,s=at.empty();let r=new nt(Z.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ft(e.key,s,new ct(r.toArray()),lt.none())}}function Pd(e,t,n){e instanceof cn?function(s,r,i){const o=s.value.clone(),a=oo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ft?function(s,r,i){if(!In(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=oo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(gc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Oe(e,t,n,s){return e instanceof cn?function(r,i,o,a){if(!In(r.precondition,i))return o;const c=r.value.clone(),u=ao(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ft?function(r,i,o,a){if(!In(r.precondition,i))return o;const c=ao(r.fieldTransforms,a,i),u=i.data;return u.setAll(gc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return In(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Fd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=uc(s.transform,r||null);i!=null&&(n===null&&(n=at.empty()),n.set(s.field,i))}return n||null}function io(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ce(n,s,(r,i)=>Od(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class cn extends fs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ft extends fs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function oo(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Md(o,a,n[r]))}return s}function ao(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Rd(i,o,t))}return s}class pc extends fs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vd extends fs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Pd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Oe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Oe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=oc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=fc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),_())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(n,s)=>io(n,s))&&ce(this.baseMutations,t.baseMutations,(n,s)=>io(n,s))}}class Jr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=_d;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Jr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,b;function jd(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function mc(e){if(e===void 0)return St("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(b=F||(F={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wn}static getOrCreateInstance(){return wn===null&&(wn=new Zr),wn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let wn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new se([4294967295,4294967295],0);function co(e){const t=qd().encode(e),n=new Hl;return n.update(t),new Uint8Array(n.digest())}function uo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new se([n,s],0),new se([r,i],0)]}class ti{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new _e(`Invalid padding: ${n}`);if(s<0)throw new _e(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new _e(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new _e(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=se.fromNumber(this.yt)}Tt(t,n,s){let r=t.add(n.multiply(se.fromNumber(s)));return r.compare(zd)===1&&(r=new se([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=co(t),[s,r]=uo(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new ti(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=co(t),[s,r]=uo(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class _e extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new gs(C.min(),r,new L(k),Dt(),_())}}class un{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new un(s,n,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n,s,r){this.vt=t,this.removedTargetIds=n,this.key=s,this.Pt=r}}class yc{constructor(t,n){this.targetId=t,this.bt=n}}class vc{constructor(t,n,s=st.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ho{constructor(){this.Vt=0,this.St=fo(),this.Dt=st.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=_(),n=_(),s=_();return this.St.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new un(this.Dt,this.Ct,t,n,s)}$t(){this.xt=!1,this.St=fo()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Hd{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Dt(),this.jt=lo(),this.zt=new L(k)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const s=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&s.Mt(t.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(t.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(t){var n;const s=t.targetId,r=t.bt.count,i=this.ne(s);if(i){const o=i.target;if(ur(o))if(r===0){const a=new w(o.path);this.Jt(s,a,J.newNoDocument(a,C.min()))}else R(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(t,a);if(c!==0){this.te(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,u)}(n=Zr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,h,l){var d,p,T,E,A,$;const W={localCacheCount:h,existenceFilterCount:l.count},H=l.unchangedNames;return H&&(W.bloomFilter={applied:u===0,hashCount:(d=H==null?void 0:H.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(E=(T=(p=H==null?void 0:H.bits)===null||p===void 0?void 0:p.bitmap)===null||T===void 0?void 0:T.length)!==null&&E!==void 0?E:0,padding:($=(A=H==null?void 0:H.bits)===null||A===void 0?void 0:A.padding)!==null&&$!==void 0?$:0}),W}(c,a,t.bt))}}}}ie(t,n){const{unchangedNames:s,count:r}=t.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=Ht(i).toUint8Array()}catch(h){if(h instanceof Qa)return ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{u=new ti(c,o,a)}catch(h){return ae(h instanceof _e?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return u.yt===0?1:r!==n-this.re(t.targetId,u)?2:0}re(t,n){const s=this.Kt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(t,i,null),r++)}),r}ue(t){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&ur(a.target)){const c=new w(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,J.newNoDocument(c,t))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=_();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ne(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(t));const r=new gs(t,n,this.zt,this.Qt,s);return this.Qt=Dt(),this.jt=lo(),this.zt=new L(k),r}Ht(t,n){if(!this.Zt(t))return;const s=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,s){if(!this.Zt(t))return;const r=this.Xt(t);this.ce(t,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new ho,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new nt(k),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new ho),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function lo(){return new L(w.comparator)}function fo(){return new L(w.comparator)}const Kd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Qd=(()=>({and:"AND",or:"OR"}))();class Wd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function dr(e,t){return e.useProto3Json||as(t)?t:{value:t}}function jn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xd(e,t){return jn(e,t.toTimestamp())}function mt(e){return R(!!e),C.fromTimestamp(function(t){const n=Mt(t);return new B(n.seconds,n.nanos)}(e))}function ei(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Ec(e){const t=O.fromString(e);return R(Cc(t)),t}function fr(e,t){return ei(e.databaseId,t.path)}function Fs(e,t){const n=Ec(t);if(n.get(1)!==e.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Tc(n))}function gr(e,t){return ei(e.databaseId,t)}function Yd(e){const t=Ec(e);return t.length===4?O.emptyPath():Tc(t)}function pr(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Tc(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function go(e,t,n){return{name:fr(e,t),fields:n.value.mapValue.fields}}function Jd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(R(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:mc(c.code);return new v(u,c.message||"")}(o);n=new vc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Fs(e,s.document.name),i=mt(s.document.updateTime),o=s.document.createTime?mt(s.document.createTime):C.min(),a=new at({mapValue:{fields:s.document.fields}}),c=J.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Sn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Fs(e,s.document),i=s.readTime?mt(s.readTime):C.min(),o=J.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Sn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Fs(e,s.document),i=s.removedTargetIds||[];n=new Sn([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Bd(r,i),a=s.targetId;n=new yc(a,o)}}return n}function Zd(e,t){let n;if(t instanceof cn)n={update:go(e,t.key,t.value)};else if(t instanceof pc)n={delete:fr(e,t.key)};else if(t instanceof Ft)n={update:go(e,t.key,t.data),updateMask:uf(t.fieldMask)};else{if(!(t instanceof Vd))return I();n={verify:fr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Un)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ke)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ge)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Bn)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Xd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(e,t.precondition)),n}function tf(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?mt(s.updateTime):mt(r);return i.isEqual(C.min())&&(i=mt(r)),new Ld(i,s.transformResults||[])}(n,t))):[]}function ef(e,t){return{documents:[gr(e,t.path)]}}function nf(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=gr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=gr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Sc(vt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Jt(h.field),direction:of(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=dr(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function sf(e){let t=Yd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=Ic(h);return l instanceof vt&&Ja(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Re(Zt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,as(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new $n(d,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new $n(d,l)}(n.endAt)),Ed(t,r,o,i,a,"F",c,u)}function rf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ic(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Zt(t.unaryFilter.field);return U.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Zt(t.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zt(t.unaryFilter.field);return U.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zt(t.unaryFilter.field);return U.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(t){return U.create(Zt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return vt.create(t.compositeFilter.filters.map(n=>Ic(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op))}(e):I()}function of(e){return Kd[e]}function af(e){return Gd[e]}function cf(e){return Qd[e]}function Jt(e){return{fieldPath:e.canonicalString()}}function Zt(e){return Z.fromServerFormat(e.fieldPath)}function Sc(e){return e instanceof U?function(t){if(t.op==="=="){if(Zi(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(Ji(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zi(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(Ji(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:af(t.op),value:t.value}}}(e):e instanceof vt?function(t){const n=t.getFilters().map(s=>Sc(s));return n.length===1?n[0]:{compositeFilter:{op:cf(t.op),filters:n}}}(e):I()}function uf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Cc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n,s,r,i=C.min(),o=C.min(),a=st.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new At(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.le=t}}function lf(e){const t=sf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?hr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.sn=new ff}addToCollectionParentIndex(t,n){return this.sn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Rt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Rt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class ff{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new nt(O.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new nt(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new le(0)}static kn(){return new le(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.changes=new ve(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Oe(s.mutation,r,ct.empty(),B.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,_()).next(()=>s))}getLocalViewOfDocuments(t,n,s=_()){const r=Bt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ae();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Bt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,_()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Dt();const o=Me(),a=Me();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ft)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Oe(h.mutation,u,h.mutation.getFieldMask(),B.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new pf(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Me();let r=new L((o,a)=>o-a),i=_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ct.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||_()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=oc();h.forEach(d=>{if(!i.has(d)){const p=fc(n.get(d),s.get(d));p!==null&&l.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Sd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(Bt());let a=-1,c=i;return o.next(u=>g.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?g.resolve():this.remoteDocumentCache.getEntry(t,h).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,_())).next(h=>({batchId:a,changes:ic(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=Ae();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ae();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const c=function(u,h){return new cs(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,J.newInvalidDocument(u)))});let o=Ae();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Oe(u.mutation,c,ct.empty(),B.now()),ls(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return g.resolve(this.us.get(n))}saveBundleMetadata(t,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:mt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(s){return{name:s.name,query:lf(s.bundledQuery),readTime:mt(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.overlays=new L(w.comparator),this.hs=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Bt();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.de(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=Bt(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new L((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Bt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Bt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return g.resolve(a)}de(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ud(n,s));let i=this.hs.get(n);i===void 0&&(i=_(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.ls=new nt(j.fs),this.ds=new nt(j._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const s=new j(t,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.gs(new j(t,n))}ys(t,n){t.forEach(s=>this.removeReference(s,n))}ps(t){const n=new w(new O([])),s=new j(n,t),r=new j(n,t+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new w(new O([])),s=new j(n,t),r=new j(n,t+1);let i=_();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new j(t,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class j{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return w.comparator(t.key,n.key)||k(t.Es,n.Es)}static _s(t,n){return k(t.Es,n.Es)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new nt(j.fs)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $d(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new j(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new j(n,0),r=new j(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new nt(k);return n.forEach(r=>{const i=new j(r,0),o=new j(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),g.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new j(new w(i),0);let a=new nt(k);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Es)),!0)},o),g.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(n.mutations,r=>{const i=new j(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Dn(t){}containsKey(t,n){const s=new j(n,0),r=this.Rs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.Ss=t,this.docs=new L(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():J.newInvalidDocument(n))}getEntries(t,n){let s=Dt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():J.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Dt();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sd(nd(h),s)<=0||(r.has(h.key)||ls(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,s,r){I()}Ds(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tf(this)}getSize(t){return g.resolve(this.size)}}class Tf extends gf{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(t,r)):this.rs.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.persistence=t,this.Cs=new ve(n=>Xr(n),Yr),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.xs=0,this.Ns=new ni,this.targetCount=0,this.ks=le.Nn()}forEachTarget(t,n){return this.Cs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),g.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new le(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.$n(n),g.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Cs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Ns.ws(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ns.Ts(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n){this.Ms={},this.overlays={},this.Os=new Kr(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new If(this),this.indexManager=new df,this.remoteDocumentCache=function(s){return new Ef(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new hf(n),this.Ls=new yf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new vf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ms[t.toKey()];return s||(s=new wf(n,this.referenceDelegate),this.Ms[t.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const r=new Cf(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(t,n){return g.or(Object.values(this.Ms).map(s=>()=>s.containsKey(t,n)))}}class Cf extends id{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.Gs=new ni,this.Qs=null}static js(t){return new si(t)}get zs(){if(this.Qs)return this.Qs;throw I()}addReference(t,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),g.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.zs,s=>{const r=w.fromPath(s);return this.Ws(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return g.or([()=>g.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(t,n){let s=_(),r=_();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ri(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ui(t,n).next(i=>i||this.Ki(t,n,r,s)).next(i=>i||this.Gi(t,n))}Ui(t,n){if(so(n))return g.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=hr(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=_(...i);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Qi(n,a);return this.ji(n,u,o,c.readTime)?this.Ui(t,hr(n,null,"F")):this.zi(t,u,n,c)}))})))}Ki(t,n,s,r){return so(n)||r.isEqual(C.min())?this.Gi(t,n):this.qi.getDocuments(t,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(t,n):(Qi()<=N.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),lr(n)),this.zi(t,o,n,ed(r,-1)))})}Qi(t,n){let s=new nt(sc(t));return n.forEach((r,i)=>{ls(t,i)&&(s=s.add(i))}),s}ji(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(t,n){return Qi()<=N.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",lr(n)),this.qi.getDocumentsMatchingQuery(t,n,Rt.min())}zi(t,n,s,r){return this.qi.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,n,s,r){this.persistence=t,this.Wi=n,this.serializer=r,this.Hi=new L(k),this.Ji=new ve(i=>Xr(i),Yr),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(s)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mf(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function _f(e,t,n,s){return new Af(e,t,n,s)}async function Dc(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=_();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function bf(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=g.resolve();return l.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(T=>{const E=c.docVersions.get(p);R(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=_();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ac(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function kf(e,t){const n=D(e),s=t.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];t.targetChanges.forEach((h,l)=>{const d=r.get(l);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Fs.addMatchingKeys(i,h.addedDocuments,l)));let p=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?p=p.withResumeToken(st.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),r=r.insert(l,p),function(T,E,A){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,p,h)&&a.push(n.Fs.updateTargetData(i,p))});let c=Dt(),u=_();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Nf(i,o,t.documentUpdates).next(h=>{c=h.er,u=h.nr})),!s.isEqual(C.min())){const h=n.Fs.getLastRemoteSnapshotVersion(i).next(l=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Hi=r,i))}function Nf(e,t,n){let s=_(),r=_();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Dt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{er:o,nr:r}})}function xf(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Rf(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new At(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(t,s.targetId)),s})}async function mr(e,t,n){const s=D(e),r=s.Hi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!an(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Hi=s.Hi.remove(t),s.Ji.delete(r.target)}function po(e,t,n){const s=D(e);let r=C.min(),i=_();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=D(a),l=h.Ji.get(u);return l!==void 0?g.resolve(h.Hi.get(l)):h.Fs.getTargetData(c,u)}(s,o,Ct(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,t,n?r:C.min(),n?i:_())).next(a=>(Mf(s,Cd(t),a),{documents:a,sr:i})))}function Mf(e,t,n){let s=e.Yi.get(t)||C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Yi.set(t,s)}class mo{constructor(){this.activeTargetIds=Nd()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Of{constructor(){this.Wr=new mo,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,s){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new mo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{Jr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En=null;function Vs(){return En===null?En=268435456+Math.round(2147483648*Math.random()):En++,"0x"+En.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class Vf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,s,r,i){const o=Vs(),a=this.Io(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(t,a,c,s).then(u=>(y("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw ae("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}Ao(t,n,s,r,i,o){return this.po(t,n,s,r,i)}To(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ye,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}Io(t,n){const s=Pf[t];return`${this.wo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,s,r){const i=Vs();return new Promise((o,a)=>{const c=new zl;c.setWithCredentials(!0),c.listenOnce(Bl.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ps.NO_ERROR:const h=c.getResponseJson();y(X,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case Ps.TIMEOUT:y(X,`RPC '${t}' ${i} timed out`),a(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ps.HTTP_ERROR:const l=c.getStatus();if(y(X,`RPC '${t}' ${i} failed with status:`,l,"response text:",c.getResponseText()),l>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const T=function(E){const A=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(A)>=0?A:f.UNKNOWN}(p.status);a(new v(T,p.message))}else a(new v(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y(X,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);y(X,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Ro(t,n,s){const r=Vs(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=$l(),a=Ul(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new ql({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");y(X,`Creating RPC '${t}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let l=!1,d=!1;const p=new Ff({io:E=>{d?y(X,`Not sending because RPC '${t}' stream ${r} is closed:`,E):(l||(y(X,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),y(X,`RPC '${t}' stream ${r} sending:`,E),h.send(E))},ro:()=>h.close()}),T=(E,A,$)=>{E.listen(A,W=>{try{$(W)}catch(H){setTimeout(()=>{throw H},0)}})};return T(h,mn.EventType.OPEN,()=>{d||y(X,`RPC '${t}' stream ${r} transport opened.`)}),T(h,mn.EventType.CLOSE,()=>{d||(d=!0,y(X,`RPC '${t}' stream ${r} transport closed`),p.fo())}),T(h,mn.EventType.ERROR,E=>{d||(d=!0,ae(X,`RPC '${t}' stream ${r} transport errored:`,E),p.fo(new v(f.UNAVAILABLE,"The operation could not be completed")))}),T(h,mn.EventType.MESSAGE,E=>{var A;if(!d){const $=E.data[0];R(!!$);const W=$,H=W.error||((A=W[0])===null||A===void 0?void 0:A.error);if(H){y(X,`RPC '${t}' stream ${r} received error:`,H);const Ee=H.status;let Te=function(pu){const Si=F[pu];if(Si!==void 0)return mc(Si)}(Ee),Ii=H.message;Te===void 0&&(Te=f.INTERNAL,Ii="Unknown error status: "+Ee+" with message "+H.message),d=!0,p.fo(new v(Te,Ii)),h.close()}else y(X,`RPC '${t}' stream ${r} received:`,$),p._o($)}}),T(a,jl.STAT_EVENT,E=>{E.stat===Ki.PROXY?y(X,`RPC '${t}' stream ${r} detected buffering proxy`):E.stat===Ki.NOPROXY&&y(X,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function $s(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){return new Wd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,n,s=1e3,r=1.5,i=6e4){this.si=t,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,n,s,r,i,o,a,c){this.si=t,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new _c(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{t(()=>{const r=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(t,n){const s=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $f extends bc{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=Jd(this.serializer,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?mt(i.readTime):C.min()}(t);return this.listener.eu(n,s)}nu(t){const n={};n.database=pr(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=ur(a)?{documents:ef(r,a)}:{query:nf(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=wc(r,i.resumeToken);const c=dr(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(C.min())>0){o.readTime=jn(r,i.snapshotVersion.toTimestamp());const c=dr(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,t);const s=rf(this.serializer,t);s&&(n.labels=s),this.zo(n)}su(t){const n={};n.database=pr(this.serializer),n.removeTarget=t,this.zo(n)}}class Uf extends bc{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=tf(t.writeResults,t.commitTime),s=mt(t.commitTime);return this.listener.uu(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=pr(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Zd(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}Ao(t,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class jf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(St(n),this.wu=!1):y("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Xt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.Au.add(4),await hn(c),c.Pu.set("Unknown"),c.Au.delete(4),await ms(c)}(this))})}),this.Pu=new jf(s,r)}}async function ms(e){if(Xt(e))for(const t of e.Ru)await t(!0)}async function hn(e){for(const t of e.Ru)await t(!1)}function kc(e,t){const n=D(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),ai(n)?oi(n):we(n).Uo()&&ii(n,t))}function Nc(e,t){const n=D(e),s=we(n);n.Eu.delete(t),s.Uo()&&xc(n,t),n.Eu.size===0&&(s.Uo()?s.Qo():Xt(n)&&n.Pu.set("Unknown"))}function ii(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(C.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}we(e).nu(t)}function xc(e,t){e.bu.Lt(t),we(e).su(t)}function oi(e){e.bu=new Hd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),we(e).start(),e.Pu.mu()}function ai(e){return Xt(e)&&!we(e).qo()&&e.Eu.size>0}function Xt(e){return D(e).Au.size===0}function Rc(e){e.bu=void 0}async function zf(e){e.Eu.forEach((t,n)=>{ii(e,t)})}async function Hf(e,t){Rc(e),ai(e)?(e.Pu.pu(t),oi(e)):e.Pu.set("Unknown")}async function Kf(e,t,n){if(e.Pu.set("Online"),t instanceof vc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await qn(e,s)}else if(t instanceof Sn?e.bu.Wt(t):t instanceof yc?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(C.min()))try{const s=await Ac(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Eu.get(c);u&&r.Eu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const u=r.Eu.get(a);if(!u)return;r.Eu.set(a,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),xc(r,a);const h=new At(u.target,a,c,u.sequenceNumber);ii(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await qn(e,s)}}async function qn(e,t,n){if(!an(t))throw t;e.Au.add(1),await hn(e),e.Pu.set("Offline"),n||(n=()=>Ac(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await ms(e)})}function Mc(e,t){return t().catch(n=>qn(e,n,t))}async function ys(e){const t=D(e),n=Ot(t);let s=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;Gf(t);)try{const r=await xf(t.localStore,s);if(r===null){t.Tu.length===0&&n.Qo();break}s=r.batchId,Qf(t,r)}catch(r){await qn(t,r)}Oc(t)&&Lc(t)}function Gf(e){return Xt(e)&&e.Tu.length<10}function Qf(e,t){e.Tu.push(t);const n=Ot(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function Oc(e){return Xt(e)&&!Ot(e).qo()&&e.Tu.length>0}function Lc(e){Ot(e).start()}async function Wf(e){Ot(e).au()}async function Xf(e){const t=Ot(e);for(const n of e.Tu)t.ou(n.mutations)}async function Yf(e,t,n){const s=e.Tu.shift(),r=Jr.from(s,t,n);await Mc(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ys(e)}async function Jf(e,t){t&&Ot(e).ru&&await async function(n,s){if(r=s.code,jd(r)&&r!==f.ABORTED){const i=n.Tu.shift();Ot(n).Go(),await Mc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ys(n)}var r}(e,t),Oc(e)&&Lc(e)}async function vo(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Xt(n);n.Au.add(3),await hn(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await ms(n)}async function Zf(e,t){const n=D(e);t?(n.Au.delete(2),await ms(n)):t||(n.Au.add(2),await hn(n),n.Pu.set("Unknown"))}function we(e){return e.Vu||(e.Vu=function(t,n,s){const r=D(t);return r.lu(),new $f(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{oo:zf.bind(null,e),co:Hf.bind(null,e),eu:Kf.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),ai(e)?oi(e):e.Pu.set("Unknown")):(await e.Vu.stop(),Rc(e))})),e.Vu}function Ot(e){return e.Su||(e.Su=function(t,n,s){const r=D(t);return r.lu(),new Uf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{oo:Wf.bind(null,e),co:Jf.bind(null,e),cu:Xf.bind(null,e),uu:Yf.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await ys(e)):(await e.Su.stop(),e.Tu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ci(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ui(e,t){if(St("AsyncQueue",`${t}: ${e}`),an(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Ae(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ie;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.Du=new L(w.comparator)}track(t){const n=t.doc.key,s=this.Du.get(n);s?t.type!==0&&s.type===3?this.Du=this.Du.insert(n,t):t.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Du=this.Du.remove(n):t.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):I():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,s)=>{t.push(s)}),t}}class de{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new de(t,n,ie.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.xu=void 0,this.listeners=[]}}class eg{constructor(){this.queries=new ve(t=>nc(t),hs),this.onlineState="Unknown",this.Nu=new Set}}async function Pc(e,t){const n=D(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new tg),r)try{i.xu=await n.onListen(s)}catch(o){const a=ui(o,`Initialization of query '${lr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.ku(n.onlineState),i.xu&&t.Mu(i.xu)&&hi(n)}async function Fc(e,t){const n=D(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ng(e,t){const n=D(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&hi(n)}function sg(e,t,n){const s=D(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function hi(e){e.Nu.forEach(t=>{t.next()})}class Vc{constructor(t,n,s){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new de(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=de.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this.key=t}}class Uc{constructor(t){this.key=t}}class rg{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=_(),this.mutatedKeys=_(),this.Zu=sc(t),this.tc=new ie(this.Zu)}get ec(){return this.Ju}nc(t,n){const s=n?n.sc:new wo,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const d=r.get(h),p=ls(this.query,l)?l:null,T=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;d&&p?d.data.isEqual(p.data)?T!==E&&(s.track({type:3,doc:p}),A=!0):this.ic(d,p)||(s.track({type:2,doc:p}),A=!0,(c&&this.Zu(p,c)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),A=!0):d&&!p&&(s.track({type:1,doc:d}),A=!0,(c||u)&&(a=!0)),A&&(p?(o=o.add(p),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const i=t.sc.Cu();i.sort((u,h)=>function(l,d){const p=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(l)-p(d)}(u.type,h.type)||this.Zu(u.doc,h.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new de(this.query,t.tc,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new wo,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=_(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return t.forEach(s=>{this.Xu.has(s)||n.push(new Uc(s))}),this.Xu.forEach(s=>{t.has(s)||n.push(new $c(s))}),n}ac(t){this.Ju=t.sr,this.Xu=_();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return de.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class ig{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class og{constructor(t){this.key=t,this.lc=!1}}class ag{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ve(a=>nc(a),hs),this._c=new Map,this.wc=new Set,this.mc=new L(w.comparator),this.gc=new Map,this.yc=new ni,this.Ic={},this.Tc=new Map,this.Ec=le.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function cg(e,t){const n=vg(e);let s,r;const i=n.dc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await Rf(n.localStore,Ct(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ug(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&kc(n.remoteStore,o)}return r}async function ug(e,t,n,s,r){e.Rc=(l,d,p)=>async function(T,E,A,$){let W=E.view.nc(A);W.ji&&(W=await po(T.localStore,E.query,!1).then(({documents:Te})=>E.view.nc(Te,W)));const H=$&&$.targetChanges.get(E.targetId),Ee=E.view.applyChanges(W,T.isPrimaryClient,H);return To(T,E.targetId,Ee.uc),Ee.snapshot}(e,l,d,p);const i=await po(e.localStore,t,!0),o=new rg(t,i.sr),a=o.nc(i.documents),c=un.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);To(e,n,u.uc);const h=new ig(t,n,o);return e.dc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function hg(e,t){const n=D(e),s=n.dc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!hs(i,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await mr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nc(n.remoteStore,s.targetId),yr(n,s.targetId)}).catch(on)):(yr(n,s.targetId),await mr(n.localStore,s.targetId,!0))}async function lg(e,t,n){const s=wg(e);try{const r=await function(i,o){const a=D(i),c=B.now(),u=o.reduce((d,p)=>d.add(p.key),_());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Dt(),T=_();return a.Xi.getEntries(d,u).next(E=>{p=E,p.forEach((A,$)=>{$.isValidDocument()||(T=T.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(E=>{h=E;const A=[];for(const $ of o){const W=Fd($,h.get($.key).overlayedDocument);W!=null&&A.push(new Ft($.key,W,Wa(W.value.mapValue),lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,A,o)}).next(E=>{l=E;const A=E.applyToLocalDocumentSet(h,T);return a.documentOverlayCache.saveOverlays(d,E.batchId,A)})}).then(()=>({batchId:l.batchId,changes:ic(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new L(k)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await ln(s,r.changes),await ys(s.remoteStore)}catch(r){const i=ui(r,"Failed to persist write");n.reject(i)}}async function Bc(e,t){const n=D(e);try{const s=await kf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?R(o.lc):r.removedDocuments.size>0&&(R(o.lc),o.lc=!1))}),await ln(n,s,t)}catch(s){await on(s)}}function Eo(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=D(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.ku(o)&&(c=!0)}),c&&hi(a)}(s.eventManager,t),r.length&&s.fc.eu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function dg(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.gc.get(t),i=r&&r.key;if(i){let o=new L(w.comparator);o=o.insert(i,J.newNoDocument(i,C.min()));const a=_().add(i),c=new gs(C.min(),new Map,new L(k),o,a);await Bc(s,c),s.mc=s.mc.remove(i),s.gc.delete(t),li(s)}else await mr(s.localStore,t,!1).then(()=>yr(s,t,n)).catch(on)}async function fg(e,t){const n=D(e),s=t.batch.batchId;try{const r=await bf(n.localStore,t);qc(n,s,null),jc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ln(n,r)}catch(r){await on(r)}}async function gg(e,t,n){const s=D(e);try{const r=await function(i,o){const a=D(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);qc(s,t,n),jc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await ln(s,r)}catch(r){await on(r)}}function jc(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function qc(e,t,n){const s=D(e);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.Ic[s.currentUser.toKey()]=r}}function yr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.dc.delete(s),n&&e.fc.vc(s,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(s=>{e.yc.containsKey(s)||zc(e,s)})}function zc(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(Nc(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),li(e))}function To(e,t,n){for(const s of n)s instanceof $c?(e.yc.addReference(s.key,t),pg(e,s)):s instanceof Uc?(y("SyncEngine","Document no longer in limbo: "+s.key),e.yc.removeReference(s.key,t),e.yc.containsKey(s.key)||zc(e,s.key)):I()}function pg(e,t){const n=t.key,s=n.path.canonicalString();e.mc.get(n)||e.wc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.wc.add(s),li(e))}function li(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new w(O.fromString(t)),s=e.Ec.next();e.gc.set(s,new og(n)),e.mc=e.mc.insert(n,s),kc(e.remoteStore,new At(Ct(us(n.path)),s,"TargetPurposeLimboResolution",Kr.ct))}}async function ln(e,t,n){const s=D(e),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=ri.Bi(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,l=>g.forEach(l.$i,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>g.forEach(l.Fi,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!an(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.Hi.get(l),p=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(l,T)}}}(s.localStore,i))}async function mg(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Dc(n.localStore,t);n.currentUser=t,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ln(n,s.tr)}}function yg(e,t){const n=D(e),s=n.gc.get(t);if(s&&s.lc)return _().add(s.key);{let r=_();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function vg(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dg.bind(null,t),t.fc.eu=ng.bind(null,t.eventManager),t.fc.vc=sg.bind(null,t.eventManager),t}function wg(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gg.bind(null,t),t}class Io{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ps(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return _f(this.persistence,new Df,t.initialUser,this.serializer)}createPersistence(t){return new Sf(si.js,this.serializer)}createSharedClientState(t){return new Of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Eg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Eo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mg.bind(null,this.syncEngine),await Zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new eg}createDatastore(t){const n=ps(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Vf(r));var r;return function(i,o,a,c){return new Bf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Eo(this.syncEngine,a,0),o=yo.D()?new yo:new Lf,new qf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new ag(s,r,i,o,a,c);return u&&(h.Ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);y("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await hn(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):St("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Y.UNAUTHENTICATED,this.clientId=Ka.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ui(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Us(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function So(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Sg(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>vo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>vo(t.remoteStore,i)),e._onlineComponents=t}function Ig(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Sg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Us(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ig(n))throw n;ae("Error using user provided cache. Falling back to memory cache: "+n),await Us(e,new Io)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Us(e,new Io);return e._offlineComponents}async function Kc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await So(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await So(e,new Eg))),e._onlineComponents}function Cg(e){return Kc(e).then(t=>t.syncEngine)}async function vr(e){const t=await Kc(e),n=t.eventManager;return n.onListen=cg.bind(null,t.syncEngine),n.onUnlisten=hg.bind(null,t.syncEngine),n}function Dg(e,t,n={}){const s=new kt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Hc({next:l=>{i.enqueueAndForget(()=>Fc(r,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new v(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Vc(us(o.path),u,{includeMetadataChanges:!0,Uu:!0});return Pc(r,h)}(await vr(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ag(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Do(e){if(!w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ao(e){if(w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function di(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function dt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=di(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ag("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _o({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _o(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kl;switch(n.type){case"firstParty":return new Xl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Co.get(t);n&&(y("ComponentProvider","Removing Datastore"),Co.delete(t),n.terminate())}(this),Promise.resolve()}}function _g(e,t,n,s={}){var r;const i=(e=dt(e,vs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&ae("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Y.MOCK_USER;else{o=bu(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Y(c)}e._authCredentials=new Gl(new Ha(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class ws{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ws(this.firestore,t,this._query)}}class Nt extends ws{constructor(t,n,s){super(t,n,us(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new w(t))}withConverter(t){return new Nt(this.firestore,t,this._path)}}function xt(e,t,...n){if(e=Tt(e),Gc("collection","path",t),e instanceof vs){const s=O.fromString(t,...n);return Ao(s),new Nt(e,null,s)}{if(!(e instanceof ot||e instanceof Nt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Ao(s),new Nt(e.firestore,null,s)}}function fi(e,t,...n){if(e=Tt(e),arguments.length===1&&(t=Ka.A()),Gc("doc","path",t),e instanceof vs){const s=O.fromString(t,...n);return Do(s),new ot(e,null,new w(s))}{if(!(e instanceof ot||e instanceof Nt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Do(s),new ot(e.firestore,e instanceof Nt?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new _c(this,"async_queue_retry"),this.Yc=()=>{const n=$s();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=$s();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=$s();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new kt;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!an(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(t,n,s){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const r=ci.createAndSchedule(this,t,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&I()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}function bo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Gt extends vs{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new bg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qc(this),this._firestoreClient.terminate()}}function kg(e,t){const n=typeof e=="object"?e:Rh(),s=typeof e=="string"?e:t||"(default)",r=bh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Du("firestore");i&&_g(r,...i)}return r}function gi(e){return e._firestoreClient||Qc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qc(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,c,u){return new cd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Tg(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fe(st.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new fe(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=/^__.*__$/;class xg{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms):new cn(t,this.data,n,this.fieldTransforms)}}class Wc{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class yi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ca({path:s,ha:!1});return r.la(t),r}fa(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ca({path:s,ha:!1});return r.oa(),r}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return zn(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Xc(this.ua)&&Ng.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Rg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ps(t)}ga(t,n,s,r=!1){return new yi({ua:t,methodName:n,ma:s,path:Z.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vi(e){const t=e._freezeSettings(),n=ps(e._databaseId);return new Rg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Yc(e,t,n,s,r,i={}){const o=e.ga(i.merge||i.mergeFields?2:0,t,n,r);wi("Data must be an object, but it was:",o,s);const a=Jc(s,o);let c,u;if(i.merge)c=new ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=wr(t,l,n);if(!o.contains(d))throw new v(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tu(h,d)||h.push(d)}c=new ct(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new xg(new at(a),c,u)}class Ts extends pi{_toFieldTransform(t){if(t.ua!==2)throw t.ua===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ts}}function Mg(e,t,n,s){const r=e.ga(1,t,n);wi("Data must be an object, but it was:",r,s);const i=[],o=at.empty();Wt(s,(c,u)=>{const h=Ei(t,c,n);u=Tt(u);const l=r.fa(h);if(u instanceof Ts)i.push(h);else{const d=Is(u,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new ct(i);return new Wc(o,a,r.fieldTransforms)}function Og(e,t,n,s,r,i){const o=e.ga(1,t,n),a=[wr(t,s,n)],c=[r];if(i.length%2!=0)throw new v(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(wr(t,i[d])),c.push(i[d+1]);const u=[],h=at.empty();for(let d=a.length-1;d>=0;--d)if(!tu(u,a[d])){const p=a[d];let T=c[d];T=Tt(T);const E=o.fa(p);if(T instanceof Ts)u.push(p);else{const A=Is(T,E);A!=null&&(u.push(p),h.set(p,A))}}const l=new ct(u);return new Wc(h,l,o.fieldTransforms)}function Is(e,t){if(Zc(e=Tt(e)))return wi("Unsupported field value:",t,e),Jc(e,t);if(e instanceof pi)return function(n,s){if(!Xc(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Is(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Tt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=B.fromDate(n);return{timestampValue:jn(s.serializer,r)}}if(n instanceof B){const r=new B(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jn(s.serializer,r)}}if(n instanceof mi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fe)return{bytesValue:wc(s.serializer,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ei(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${di(n)}`)}(e,t)}function Jc(e,t){const n={};return Ga(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wt(e,(s,r)=>{const i=Is(r,t.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Zc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof B||e instanceof mi||e instanceof fe||e instanceof ot||e instanceof pi)}function wi(e,t,n){if(!Zc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=di(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function wr(e,t,n){if((t=Tt(t))instanceof Es)return t._internalPath;if(typeof t=="string")return Ei(e,t);throw zn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Lg=new RegExp("[~\\*/\\[\\]]");function Ei(e,t,n){if(t.search(Lg)>=0)throw zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Es(...t.split("."))._internalPath}catch{throw zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}function tu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(nu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Pg extends eu{data(){return super.data()}}function nu(e,t){return typeof t=="string"?Ei(e,t):t instanceof Es?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vg{convertValue(t,n="none"){switch(Kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Wt(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new mi(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Qr(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(qe(t));default:return null}}convertTimestamp(t){const n=Mt(t);return new B(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);R(Cc(s));const r=new ze(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ru extends eu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(nu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cn extends ru{data(t={}){return super.data(t)}}class $g{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new be(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Cn(this._firestore,this._userDataWriter,s.key,s,new be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Ug(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ug(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e){e=dt(e,ot);const t=dt(e.firestore,Gt);return Dg(gi(t),e._key).then(n=>au(t,e,n))}class iu extends Vg{constructor(t){super(),this.firestore=t}convertBytes(t){return new fe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function ou(e,t,n){e=dt(e,ot);const s=dt(e.firestore,Gt),r=su(e.converter,t,n);return Ti(s,[Yc(vi(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,lt.none())])}function jg(e,t,n,...s){e=dt(e,ot);const r=dt(e.firestore,Gt),i=vi(r);let o;return o=typeof(t=Tt(t))=="string"||t instanceof Es?Og(i,"updateDoc",e._key,t,n,s):Mg(i,"updateDoc",e._key,t),Ti(r,[o.toMutation(e._key,lt.exists(!0))])}function Qe(e,t){const n=dt(e.firestore,Gt),s=fi(e),r=su(e.converter,t);return Ti(n,[Yc(vi(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,lt.exists(!1))]).then(()=>s)}function Er(e,...t){var n,s,r;e=Tt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||bo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bo(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(e instanceof ot)u=dt(e.firestore,Gt),h=us(e._key.path),c={next:l=>{t[o]&&t[o](au(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=dt(e,ws);u=dt(l.firestore,Gt),h=l._query;const d=new iu(u);c={next:p=>{t[o]&&t[o](new $g(u,d,l,p))},error:t[o+1],complete:t[o+2]},Fg(e._query)}return function(l,d,p,T){const E=new Hc(T),A=new Vc(d,E,p);return l.asyncQueue.enqueueAndForget(async()=>Pc(await vr(l),A)),()=>{E.Sc(),l.asyncQueue.enqueueAndForget(async()=>Fc(await vr(l),A))}}(gi(u),h,a,c)}function Ti(e,t){return function(n,s){const r=new kt;return n.asyncQueue.enqueueAndForget(async()=>lg(await Cg(n),s,r)),r.promise}(gi(e),t)}function au(e,t,n){const s=n.docs.get(t._key),r=new iu(e);return new ru(e,r,t._key,s,new be(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){ye=n})(xh),_n(new Le("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Gt(new Ql(n.getProvider("auth-internal")),new Jl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ee(Gi,"3.11.0",e),ee(Gi,"3.11.0","esm2017")})();var qg="firebase",zg="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee(qg,zg,"app");const Hg=Vo({apiKey:"AIzaSyDb2b_AfhGmJwQzyQ9y0dCoJHXGbuKF2hU",authDomain:"video-rtc-a9fcf.firebaseapp.com",projectId:"video-rtc-a9fcf",storageBucket:'"video-rtc-a9fcf.appspot.com",',messagingSenderId:'"931673781262",',appId:"1=931673781262=web=61f8790c0cd789a66a785f"}),Ss=kg(Hg),Hn=document.getElementById("video_canvas"),ko=Hn.getContext("2d"),cu=document.querySelector("#create_call"),uu=document.querySelector("#answer_call"),Kg=document.querySelector("#hangup"),hu=document.querySelector("#call_id"),lu=document.querySelector("#call_link"),We=document.querySelector("#video"),Tr=document.getElementById("remote_video");hu.value?uu.removeAttribute("hidden"):(cu.removeAttribute("hidden"),lu.removeAttribute("hidden"));cu.onclick=Qg;uu.onclick=Wg;Kg.onclick=Xg;const rt=new RTCPeerConnection({iceServers:[{urls:"stun://localhost:8180",username:"user",credential:"pass"}],iceCandidatePoolSize:10});rt.addEventListener("connectionstatechange",function(e){let t=e.target.connectionState;["closed","disconnected"].includes(t)&&gu()});let ke,No;async function du(){let e;try{e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0})}catch{return null}return ke=We.srcObject=e,No=Tr.srcObject=new MediaStream,ke.getTracks().forEach(t=>rt.addTrack(t,ke)),Object.assign(window,{localStream:ke}),rt.ontrack=t=>{console.log("received track",t),t.streams[0].getTracks().forEach(n=>{No.addTrack(n)})},setTimeout(()=>Gg(),1e3),fu(),e}function Gg(){const e=We.getBoundingClientRect();Hn.width=e.width/2,Hn.height=e.height/2,console.log("set dimensions to",e)}function fu(){ko.setTransform(-.5,0,0,.5,Hn.width,0),ko.drawImage(We,0,0),requestAnimationFrame(fu)}async function Qg(){if(!await du()){alert("Cannot begin video stream without camera access");return}const t=await Qe(xt(Ss,"calls"),{});lu.value=window.location+"?call_id="+t.id;let n=xt(t,"offerCandidates"),s=xt(t,"answerCandidates");rt.onicecandidate=o=>{o.candidate&&Qe(n,o.candidate.toJSON())};const r=await rt.createOffer();await rt.setLocalDescription(r);const i={sdp:r.sdp,type:r.type};await ou(t,{offer:i}),Er(t,o=>{console.log("change detected in call doc");let a=o.data();if(!rt.currentRemoteDescription&&(a!=null&&a.answer)){const c=new RTCSessionDescription(a.answer);rt.setRemoteDescription(c)}}),Er(s,o=>{console.log("answer detected",o),o.docChanges().forEach(a=>{if(a.type==="added"){const c=new RTCIceCandidate(a.doc.data());rt.addIceCandidate(c)}})})}async function Wg(){if(!await du()){alert("Cannot begin video stream without camera access");return}console.log("answering call");const t=hu.value,n=fi(xt(Ss,"calls"),t),s=xt(n,"answerCandidates"),r=xt(n,"offerCandidates");rt.onicecandidate=h=>{h.candidate&&Qe(s,h.candidate.toJSON())};const i=(await Bg(n)).data();console.log("callData",i);const o=i.offer;let a=new RTCSessionDescription(o);console.log("rcd",a),await rt.setRemoteDescription(a);const c=await rt.createAnswer();await rt.setLocalDescription(c);const u={type:c.type,sdp:c.sdp};await jg(n,{answer:u}),Er(r,h=>{console.log("offerCandidatesSnapshot watcher"),h.docChanges().forEach(l=>{if(console.log("offerCandidates change",l),l.type==="added"){let d=l.doc.data();rt.addIceCandidate(new RTCIceCandidate(d))}})})}function Xg(){rt.close(),ke.getTracks().forEach(e=>e.stop()),gu()}function gu(){We.srcObject=null,We.remove(),Tr.srcObject=null,Tr.remove()}function Yg(e,t){return Qe(xt(Ss,e),t)}Object.assign(window,{addDoc:Qe,collection:xt,doc:fi,setDoc:ou,firestore:Ss,addDataToFirestoreCollection:Yg});
