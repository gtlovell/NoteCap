/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var lt=Object.create;var H=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var ut=Object.getOwnPropertyNames;var pt=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty;var L=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports),gt=(r,a)=>{for(var e in a)H(r,e,{get:a[e],enumerable:!0})},he=(r,a,e,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of ut(a))!ht.call(r,i)&&i!==e&&H(r,i,{get:()=>a[i],enumerable:!(t=ct(a,i))||t.enumerable});return r};var dt=(r,a,e)=>(e=r!=null?lt(pt(r)):{},he(a||!r||!r.__esModule?H(e,"default",{value:r,enumerable:!0}):e,r)),ft=r=>he(H({},"__esModule",{value:!0}),r);var ge=L((tr,ne)=>{var re=function(r){"use strict";var a=Object.prototype,e=a.hasOwnProperty,t=Object.defineProperty||function(s,n,o){s[n]=o.value},i,u=typeof Symbol=="function"?Symbol:{},l=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",m=u.toStringTag||"@@toStringTag";function b(s,n,o){return Object.defineProperty(s,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),s[n]}try{b({},"")}catch(s){b=function(n,o,p){return n[o]=p}}function C(s,n,o,p){var c=n&&n.prototype instanceof F?n:F,v=Object.create(c.prototype),A=new g(p||[]);return t(v,"_invoke",{value:Q(s,o,A)}),v}r.wrap=C;function d(s,n,o){try{return{type:"normal",arg:s.call(n,o)}}catch(p){return{type:"throw",arg:p}}}var y="suspendedStart",x="suspendedYield",E="executing",I="completed",k={};function F(){}function G(){}function j(){}var W={};b(W,l,function(){return this});var B=Object.getPrototypeOf,U=B&&B(B(S([])));U&&U!==a&&e.call(U,l)&&(W=U);var M=j.prototype=F.prototype=Object.create(W);G.prototype=j,t(M,"constructor",{value:j,configurable:!0}),t(j,"constructor",{value:G,configurable:!0}),G.displayName=b(j,m,"GeneratorFunction");function q(s){["next","throw","return"].forEach(function(n){b(s,n,function(o){return this._invoke(n,o)})})}r.isGeneratorFunction=function(s){var n=typeof s=="function"&&s.constructor;return n?n===G||(n.displayName||n.name)==="GeneratorFunction":!1},r.mark=function(s){return Object.setPrototypeOf?Object.setPrototypeOf(s,j):(s.__proto__=j,b(s,m,"GeneratorFunction")),s.prototype=Object.create(M),s},r.awrap=function(s){return{__await:s}};function D(s,n){function o(v,A,O,R){var P=d(s[v],s,A);if(P.type==="throw")R(P.arg);else{var te=P.arg,V=te.value;return V&&typeof V=="object"&&e.call(V,"__await")?n.resolve(V.__await).then(function(z){o("next",z,O,R)},function(z){o("throw",z,O,R)}):n.resolve(V).then(function(z){te.value=z,O(te)},function(z){return o("throw",z,O,R)})}}var p;function c(v,A){function O(){return new n(function(R,P){o(v,A,R,P)})}return p=p?p.then(O,O):O()}t(this,"_invoke",{value:c})}q(D.prototype),b(D.prototype,f,function(){return this}),r.AsyncIterator=D,r.async=function(s,n,o,p,c){c===void 0&&(c=Promise);var v=new D(C(s,n,o,p),c);return r.isGeneratorFunction(n)?v:v.next().then(function(A){return A.done?A.value:v.next()})};function Q(s,n,o){var p=y;return function(v,A){if(p===E)throw new Error("Generator is already running");if(p===I){if(v==="throw")throw A;return T()}for(o.method=v,o.arg=A;;){var O=o.delegate;if(O){var R=K(O,o);if(R){if(R===k)continue;return R}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(p===y)throw p=I,o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);p=E;var P=d(s,n,o);if(P.type==="normal"){if(p=o.done?I:x,P.arg===k)continue;return{value:P.arg,done:o.done}}else P.type==="throw"&&(p=I,o.method="throw",o.arg=P.arg)}}}function K(s,n){var o=n.method,p=s.iterator[o];if(p===i)return n.delegate=null,o==="throw"&&s.iterator.return&&(n.method="return",n.arg=i,K(s,n),n.method==="throw")||o!=="return"&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),k;var c=d(p,s.iterator,n.arg);if(c.type==="throw")return n.method="throw",n.arg=c.arg,n.delegate=null,k;var v=c.arg;if(!v)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,k;if(v.done)n[s.resultName]=v.value,n.next=s.nextLoc,n.method!=="return"&&(n.method="next",n.arg=i);else return v;return n.delegate=null,k}q(M),b(M,m,"Generator"),b(M,l,function(){return this}),b(M,"toString",function(){return"[object Generator]"});function ee(s){var n={tryLoc:s[0]};1 in s&&(n.catchLoc=s[1]),2 in s&&(n.finallyLoc=s[2],n.afterLoc=s[3]),this.tryEntries.push(n)}function h(s){var n=s.completion||{};n.type="normal",delete n.arg,s.completion=n}function g(s){this.tryEntries=[{tryLoc:"root"}],s.forEach(ee,this),this.reset(!0)}r.keys=function(s){var n=Object(s),o=[];for(var p in n)o.push(p);return o.reverse(),function c(){for(;o.length;){var v=o.pop();if(v in n)return c.value=v,c.done=!1,c}return c.done=!0,c}};function S(s){if(s){var n=s[l];if(n)return n.call(s);if(typeof s.next=="function")return s;if(!isNaN(s.length)){var o=-1,p=function c(){for(;++o<s.length;)if(e.call(s,o))return c.value=s[o],c.done=!1,c;return c.value=i,c.done=!0,c};return p.next=p}}return{next:T}}r.values=S;function T(){return{value:i,done:!0}}return g.prototype={constructor:g,reset:function(s){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(h),!s)for(var n in this)n.charAt(0)==="t"&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=i)},stop:function(){this.done=!0;var s=this.tryEntries[0],n=s.completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(s){if(this.done)throw s;var n=this;function o(R,P){return v.type="throw",v.arg=s,n.next=R,P&&(n.method="next",n.arg=i),!!P}for(var p=this.tryEntries.length-1;p>=0;--p){var c=this.tryEntries[p],v=c.completion;if(c.tryLoc==="root")return o("end");if(c.tryLoc<=this.prev){var A=e.call(c,"catchLoc"),O=e.call(c,"finallyLoc");if(A&&O){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(A){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else if(O){if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(s,n){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.tryLoc<=this.prev&&e.call(p,"finallyLoc")&&this.prev<p.finallyLoc){var c=p;break}}c&&(s==="break"||s==="continue")&&c.tryLoc<=n&&n<=c.finallyLoc&&(c=null);var v=c?c.completion:{};return v.type=s,v.arg=n,c?(this.method="next",this.next=c.finallyLoc,k):this.complete(v)},complete:function(s,n){if(s.type==="throw")throw s.arg;return s.type==="break"||s.type==="continue"?this.next=s.arg:s.type==="return"?(this.rval=this.arg=s.arg,this.method="return",this.next="end"):s.type==="normal"&&n&&(this.next=n),k},finish:function(s){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.finallyLoc===s)return this.complete(o.completion,o.afterLoc),h(o),k}},catch:function(s){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc===s){var p=o.completion;if(p.type==="throw"){var c=p.arg;h(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(s,n,o){return this.delegate={iterator:S(s),resultName:n,nextLoc:o},this.method==="next"&&(this.arg=i),k}},r}(typeof ne=="object"?ne.exports:{});try{regeneratorRuntime=re}catch(r){typeof globalThis=="object"?globalThis.regeneratorRuntime=re:Function("r","regeneratorRuntime = r")(re)}});var Y=L((rr,de)=>{de.exports=(r,a)=>`${r}-${a}-${Math.random().toString(16).slice(3,8)}`});var se=L((nr,me)=>{var mt=Y(),fe=0;me.exports=({id:r,action:a,payload:e={}})=>{let t=r;return typeof t=="undefined"&&(t=mt("Job",fe),fe+=1),{id:t,action:a,payload:e}}});var J=L($=>{var ie=!1;$.logging=ie;$.setLogging=r=>{ie=r};$.log=(...r)=>ie?console.log.apply($,r):null});var be=L((ye,ve)=>{var wt=se(),{log:X}=J(),yt=Y(),we=0;ve.exports=()=>{let r=yt("Scheduler",we),a={},e={},t=[];we+=1;let i=()=>t.length,u=()=>Object.keys(a).length,l=()=>{if(t.length!==0){let d=Object.keys(a);for(let y=0;y<d.length;y+=1)if(typeof e[d[y]]=="undefined"){t[0](a[d[y]]);break}}},f=(d,y)=>new Promise((x,E)=>{let I=wt({action:d,payload:y});t.push(async k=>{t.shift(),e[k.id]=I;try{x(await k[d].apply(ye,[...y,I.id]))}catch(F){E(F)}finally{delete e[k.id],l()}}),X(`[${r}]: Add ${I.id} to JobQueue`),X(`[${r}]: JobQueue length=${t.length}`),l()});return{addWorker:d=>(a[d.id]=d,X(`[${r}]: Add ${d.id}`),X(`[${r}]: Number of workers=${u()}`),l(),d.id),addJob:async(d,...y)=>{if(u()===0)throw Error(`[${r}]: You need to have at least one worker before adding jobs`);return f(d,y)},terminate:async()=>{Object.keys(a).forEach(async d=>{await a[d].terminate()}),t=[]},getQueueLen:i,getNumWorkers:u}}});var Se=L((ir,Le)=>{function vt(){return!!(typeof window!="undefined"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process!="undefined"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}Le.exports=vt});var Ee=L((or,ke)=>{var bt=Se();ke.exports=r=>{let a={};return typeof WorkerGlobalScope!="undefined"?a.type="webworker":bt()?a.type="electron":typeof document=="object"?a.type="browser":typeof process=="object"&&typeof require=="function"&&(a.type="node"),typeof r=="undefined"?a:a[r]}});var Ae=L((ar,Te)=>{var Lt=Ee()("type")==="browser",St=Lt?r=>new URL(r,window.location.href).href:r=>r;Te.exports=r=>{let a={...r};return["corePath","workerPath","langPath"].forEach(e=>{r[e]&&(a[e]=St(a[e]))}),a}});var Pe=L((lr,Oe)=>{Oe.exports=r=>{let a=[],e=[],t=[],i=[],u=[];return r.blocks&&r.blocks.forEach(l=>{l.paragraphs.forEach(f=>{f.lines.forEach(m=>{m.words.forEach(b=>{b.symbols.forEach(C=>{u.push({...C,page:r,block:l,paragraph:f,line:m,word:b})}),i.push({...b,page:r,block:l,paragraph:f,line:m})}),t.push({...m,page:r,block:l,paragraph:f})}),e.push({...f,page:r,block:l})}),a.push({...l,page:r})}),{...r,blocks:a,paragraphs:e,lines:t,words:i,symbols:u}}});var oe=L((cr,Ce)=>{Ce.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}});var Ne=L((ur,Re)=>{var kt=oe();Re.exports={defaultOEM:kt.DEFAULT}});var Ie=L((pr,Et)=>{Et.exports={name:"tesseract.js",version:"4.1.4",description:"Pure Javascript Multilingual OCR",main:"src/index.js",types:"src/index.d.ts",unpkg:"dist/tesseract.min.js",jsdelivr:"dist/tesseract.min.js",scripts:{start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},browser:{"./src/worker/node/index.js":"./src/worker/browser/index.js"},author:"",contributors:["jeromewu"],license:"Apache-2.0",devDependencies:{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},dependencies:{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^4.0.4","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},overrides:{"@rollup/pluginutils":"^5.0.2"},repository:{type:"git",url:"https://github.com/naptha/tesseract.js.git"},bugs:{url:"https://github.com/naptha/tesseract.js/issues"},homepage:"https://github.com/naptha/tesseract.js",collective:{type:"opencollective",url:"https://opencollective.com/tesseractjs"}}});var _e=L((hr,je)=>{je.exports={langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:()=>{}}});var Me=L((gr,xe)=>{var Tt=r=>new URL(r,window.location.href).href,{version:At}=Ie(),Ot=_e();xe.exports={...Ot,workerPath:typeof process!="undefined"&&process.env.TESS_ENV==="development"?Tt(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`):`https://cdn.jsdelivr.net/npm/tesseract.js@v${At}/dist/worker.min.js`,corePath:null}});var ze=L((dr,Fe)=>{Fe.exports=({workerPath:r,workerBlobURL:a})=>{let e;if(Blob&&URL&&a){let t=new Blob([`importScripts("${r}");`],{type:"application/javascript"});e=new Worker(URL.createObjectURL(t))}else e=new Worker(r);return e}});var Ue=L((fr,Ge)=>{Ge.exports=r=>{r.terminate()}});var We=L((mr,De)=>{De.exports=(r,a)=>{r.onmessage=({data:e})=>{a(e)}}});var Ve=L((wr,Be)=>{Be.exports=async(r,a)=>{r.postMessage(a)}});var qe=L((yr,$e)=>{var ae=r=>new Promise((a,e)=>{let t=new FileReader;t.onload=()=>{a(t.result)},t.onerror=({target:{error:{code:i}}})=>{e(Error(`File could not be read! Code=${i}`))},t.readAsArrayBuffer(r)}),le=async r=>{let a=r;if(typeof r=="undefined")return"undefined";if(typeof r=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(r)?a=atob(r.split(",")[1]).split("").map(e=>e.charCodeAt(0)):a=await(await fetch(r)).arrayBuffer();else if(typeof HTMLElement!="undefined"&&r instanceof HTMLElement)r.tagName==="IMG"&&(a=await le(r.src)),r.tagName==="VIDEO"&&(a=await le(r.poster)),r.tagName==="CANVAS"&&await new Promise(e=>{r.toBlob(async t=>{a=await ae(t),e()})});else if(typeof OffscreenCanvas!="undefined"&&r instanceof OffscreenCanvas){let e=await r.convertToBlob();a=await ae(e)}else(r instanceof File||r instanceof Blob)&&(a=await ae(r));return new Uint8Array(a)};$e.exports=le});var He=L((vr,Ke)=>{var Pt=Me(),Ct=ze(),Rt=Ue(),Nt=We(),It=Ve(),jt=qe();Ke.exports={defaultOptions:Pt,spawnWorker:Ct,terminateWorker:Rt,onMessage:Nt,send:It,loadImage:jt}});var ce=L((br,Ze)=>{var _t=Ae(),xt=Pe(),N=se(),{log:Ye}=J(),Mt=Y(),{defaultOEM:Ft}=Ne(),{defaultOptions:zt,spawnWorker:Gt,terminateWorker:Ut,onMessage:Dt,loadImage:Je,send:Wt}=He(),Xe=0;Ze.exports=async(r={})=>{let a=Mt("Worker",Xe),{logger:e,errorHandler:t,...i}=_t({...zt,...r}),u={},l={},f,m,b=new Promise((h,g)=>{m=h,f=g}),C=h=>{f(h.message)},d=Gt(i);d.onerror=C,Xe+=1;let y=(h,g)=>{u[h]=g},x=(h,g)=>{l[h]=g},E=({id:h,action:g,payload:S})=>new Promise((T,s)=>{Ye(`[${a}]: Start ${h}, action=${g}`),y(g,T),x(g,s),Wt(d,{workerId:a,jobId:h,action:g,payload:S})}),I=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),k=h=>E(N({id:h,action:"load",payload:{options:i}})),F=(h,g,S)=>E(N({id:S,action:"FS",payload:{method:"writeFile",args:[h,g]}})),G=(h,g)=>E(N({id:g,action:"FS",payload:{method:"readFile",args:[h,{encoding:"utf8"}]}})),j=(h,g)=>E(N({id:g,action:"FS",payload:{method:"unlink",args:[h]}})),W=(h,g,S)=>E(N({id:S,action:"FS",payload:{method:h,args:g}})),B=(h="eng",g)=>E(N({id:g,action:"loadLanguage",payload:{langs:h,options:i}})),U=(h="eng",g=Ft,S,T)=>E(N({id:T,action:"initialize",payload:{langs:h,oem:g,config:S}})),M=(h={},g)=>E(N({id:g,action:"setParameters",payload:{params:h}})),q=async(h,g={},S={blocks:!0,text:!0,hocr:!0,tsv:!0},T)=>E(N({id:T,action:"recognize",payload:{image:await Je(h),options:g,output:S}})),D=(h="Tesseract OCR Result",g=!1,S)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E(N({id:S,action:"getPDF",payload:{title:h,textonly:g}}))),Q=async(h,g)=>E(N({id:g,action:"detect",payload:{image:await Je(h)}})),K=async()=>(d!==null&&(Ut(d),d=null),Promise.resolve());Dt(d,({workerId:h,jobId:g,status:S,action:T,data:s})=>{if(S==="resolve"){Ye(`[${h}]: Complete ${g}`);let n=s;T==="recognize"?n=xt(s):T==="getPDF"&&(n=Array.from({...s,length:Object.keys(s).length})),u[T]({jobId:g,data:n})}else if(S==="reject")if(l[T](s),T==="load"&&f(s),t)t(s);else throw Error(s);else S==="progress"&&e({...s,userJobId:g})});let ee={id:a,worker:d,setResolve:y,setReject:x,load:I,writeText:F,readText:G,removeFile:j,FS:W,loadLanguage:B,initialize:U,setParameters:M,recognize:q,getPDF:D,detect:Q,terminate:K};return k().then(()=>m(ee)).catch(()=>{}),b}});var tt=L((Lr,et)=>{var Qe=ce(),Bt=async(r,a,e)=>{let t=await Qe(e);return await t.loadLanguage(a),await t.initialize(a),t.recognize(r).finally(async()=>{await t.terminate()})},Vt=async(r,a)=>{let e=await Qe(a);return await e.loadLanguage("osd"),await e.initialize("osd"),e.detect(r).finally(async()=>{await e.terminate()})};et.exports={recognize:Bt,detect:Vt}});var nt=L((Sr,rt)=>{rt.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}});var it=L((kr,st)=>{st.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}});var at=L((Er,ot)=>{ge();var $t=be(),qt=ce(),Kt=tt(),Ht=nt(),Yt=oe(),Jt=it(),{setLogging:Xt}=J();ot.exports={languages:Ht,OEM:Yt,PSM:Jt,createScheduler:$t,createWorker:qt,setLogging:Xt,...Kt}});var Qt={};gt(Qt,{default:()=>Z});module.exports=ft(Qt);var w=require("obsidian"),_=dt(at()),Zt={minimumTagConfidence:.7,enableAutoBacklinks:!0,language:"eng",llmProvider:"none",openaiApiKey:"",anthropicApiKey:"",useVisionForOcr:!1,enhanceWithLlm:!1,tagSuggestions:!0,summarizeContent:!1,maxTokens:1e3},Z=class extends w.Plugin{constructor(){super(...arguments);this.scheduler=null;this.worker=null;this.isInitialized=!1}async onload(){console.log("Loading NoteCap plugin");try{await this.loadSettings(),this.settings.useVisionForOcr||await this.setupOCR(),this.addRibbonIcon("camera","NoteCap: Capture Notes",e=>{if(!this.settings.useVisionForOcr&&!this.isInitialized){new w.Notice("OCR engine is still initializing. Please wait.");return}new ue(this.app,this).open()}),this.addSettingTab(new pe(this.app,this)),this.registerEvent(this.app.vault.on("create",async e=>{(e.extension==="png"||e.extension==="jpg"||e.extension==="jpeg"||e.extension==="heic")&&await this.processImage(e)})),console.log("NoteCap plugin loaded successfully")}catch(e){console.error("Error loading NoteCap plugin:",e),new w.Notice(`Failed to load plugin: ${e.message||"Unknown error"}`)}}async onunload(){console.log("Unloading NoteCap plugin"),this.worker&&await this.worker.terminate(),this.scheduler&&await this.scheduler.terminate()}async loadSettings(){this.settings=Object.assign({},Zt,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async setupOCR(){try{console.log("Setting up OCR..."),new w.Notice("Initializing OCR engine..."),this.scheduler=(0,_.createScheduler)(),this.worker=await(0,_.createWorker)({logger:e=>console.log("Tesseract:",e),errorHandler:e=>console.error("Tesseract error:",e)}),await this.worker.loadLanguage(this.settings.language),await this.worker.initialize(this.settings.language),await this.worker.setParameters({tessedit_char_whitelist:`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,'"-;:!? `,tessedit_pageseg_mode:_.PSM.SINGLE_BLOCK,preserve_interword_spaces:"1"}),this.scheduler.addWorker(this.worker),this.isInitialized=!0,console.log("OCR setup complete with handwriting optimization"),new w.Notice("OCR engine ready!")}catch(e){throw console.error("OCR setup error:",e),this.isInitialized=!1,new Error(`OCR initialization failed: ${e.message}`)}}async processImage(e){try{new w.Notice("Starting image processing..."),console.log("Processing image:",e.path);let t="",i=[],u="",l=await this.app.vault.readBinary(e);if(!l||l.byteLength===0)throw new Error("Image file is empty or couldn't be read");console.log("Image data loaded, size:",l.byteLength);let f=await this.convertToBase64(l);if(!f||!f.startsWith("data:image"))throw new Error("Invalid base64 image conversion");if(console.log("Image converted to base64"),this.settings.useVisionForOcr&&(!this.settings.llmProvider||this.settings.llmProvider==="none"))return new w.Notice("Vision OCR requires an LLM provider. Please configure one in settings."),!1;if(this.settings.useVisionForOcr){if(!this.settings.llmProvider||this.settings.llmProvider==="none")throw new Error("Vision OCR selected but no LLM provider configured");console.log("Using Vision API with provider:",this.settings.llmProvider);let y=await this.processWithVisionAPI(f);t=y.text,i=y.tags||[],u=y.summary||""}else{if(!this.isInitialized||!this.scheduler)throw new Error("Tesseract OCR not initialized");if(console.log("Using Tesseract OCR"),t=await this.processWithTesseract(f),this.settings.enhanceWithLlm&&this.settings.llmProvider!=="none"){let y=await this.enhanceWithLLM(t);t=y.text,i=y.tags||[],u=y.summary||""}else i=await this.generateTags(t)}if(!t.trim())throw new Error("No text was extracted from the image");console.log("Extracted text length:",t.length);let m=`# ${e.basename}

`;if(m+=t.trim(),this.settings.summarizeContent&&u&&(m+=`

## Summary
${u.trim()}`),i.length>0&&(m+=`

## Tags
${i.map(y=>`#${y}`).join(" ")}`),this.settings.enableAutoBacklinks){let y=await this.findRelatedNotes(t);y.length>0&&(m+=`

## Related Notes
${y.map(x=>`[[${x}]]`).join(`
`)}`)}let b=`${e.parent?e.parent.path+"/":""}${e.basename}.md`;console.log("Creating note at path:",b);let C=this.app.vault.getAbstractFileByPath(b);C&&await this.app.vault.delete(C),await this.app.vault.create(b,m),new w.Notice("Successfully processed handwritten note!");let d=this.app.vault.getAbstractFileByPath(b);d instanceof w.TFile&&await this.app.workspace.getLeaf().openFile(d)}catch(t){throw console.error("Image processing error:",t),new w.Notice(`Failed to process image: ${t.message||"Unknown error"}`),t}}async processWithTesseract(e){var l;if(!this.scheduler)throw new Error("OCR engine not initialized");let t=[_.PSM.SINGLE_BLOCK,_.PSM.SINGLE_LINE,_.PSM.SPARSE_TEXT],i="",u=0;for(let f of t)try{await((l=this.worker)==null?void 0:l.setParameters({tessedit_char_whitelist:`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,'"-;:!? `,tessedit_pageseg_mode:f,preserve_interword_spaces:"1"}));let{data:m}=await this.scheduler.addJob("recognize",e),b=m.text.trim(),C=b.split(/\s+/).length;C>u&&(u=C,i=b)}catch(m){console.error(`OCR attempt with PSM ${f} failed:`,m)}return this.cleanupText(i)}async processWithVisionAPI(e){if(this.settings.llmProvider==="openai")return this.processWithGPT4Vision(e);if(this.settings.llmProvider==="anthropic")return this.processWithClaude3(e);throw new Error("No vision API provider configured")}async processWithGPT4Vision(e){try{let t=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.settings.openaiApiKey}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:this.constructVisionPrompt()},{type:"image_url",image_url:{url:e}}]}],max_tokens:this.settings.maxTokens})});if(!t.ok)throw new Error(`GPT-4V API error: ${t.statusText}`);let i=await t.json();return this.parseLLMResponse(i.choices[0].message.content)}catch(t){throw console.error("GPT-4V processing error:",t),t}}async processWithClaude3(e){try{let t=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":this.settings.anthropicApiKey,"anthropic-version":"2024-01-01"},body:JSON.stringify({model:"claude-3-opus-20240229",max_tokens:this.settings.maxTokens,messages:[{role:"user",content:[{type:"text",text:this.constructVisionPrompt()},{type:"image",source:{type:"base64",media_type:"image/jpeg",data:e}}]}]})});if(!t.ok)throw new Error(`Claude API error: ${t.statusText}`);let i=await t.json();return this.parseLLMResponse(i.content[0].text)}catch(t){throw console.error("Claude processing error:",t),t}}constructVisionPrompt(){let e="Please accurately transcribe the handwritten text in this image.";return this.settings.tagSuggestions&&(e+=" Also suggest relevant tags for categorizing this content."),this.settings.summarizeContent&&(e+=" Additionally, provide a brief summary of the content."),e+=` Format your response as follows:

TEXT:
[transcribed text]
`,this.settings.tagSuggestions&&(e+=`
TAGS:
[comma-separated list of relevant tags]
`),this.settings.summarizeContent&&(e+=`
SUMMARY:
[brief summary of the content]
`),e}parseLLMResponse(e){let t=e.split(`

`),i={text:"",confidence:.9};for(let u of t)u.startsWith("TEXT:")?i.text=u.replace("TEXT:","").trim():u.startsWith("TAGS:")?i.tags=u.replace("TAGS:","").trim().split(",").map(l=>l.trim().toLowerCase()).filter(l=>l.length>0):u.startsWith("SUMMARY:")&&(i.summary=u.replace("SUMMARY:","").trim());return i}async enhanceWithLLM(e){return{text:e,confidence:.9}}cleanupText(e){return e.replace(/([.,!?;:])+/g,"$1").replace(/[|]/g,"I").replace(/[1Il]/g,"l").replace(/[0O]/g,"o").replace(/[^\x20-\x7E\n]/g,"").replace(/\s+/g," ").trim()}async convertToBase64(e){return new Promise((t,i)=>{try{let u=new Blob([e],{type:"image/jpeg"}),l=new FileReader;l.onloadend=()=>{typeof l.result=="string"?t(l.result):i(new Error("Invalid result type from FileReader"))},l.onerror=()=>{var f;i(new Error(`FileReader error: ${((f=l.error)==null?void 0:f.message)||"Unknown error"}`))},l.readAsDataURL(u)}catch(u){i(new Error(`Base64 conversion error: ${u.message||"Unknown error"}`))}})}async generateTags(e){let t=new Set,i=e.toLowerCase().split(/\s+/).map(l=>l.replace(/[^a-z0-9]/g,"")).filter(l=>l.length>3),u=new Set(["the","and","that","have","for","not","with","you","this","but","his","from","they","say","her","she","will","one","all","would","there","their","what","out","about","who","get","which","when","make","can","like","time","just","him","know","take"]);for(let l of i)u.has(l)||t.add(l);return Array.from(t)}async findRelatedNotes(e){let t=[];if(!this.settings.enableAutoBacklinks)return t;let i=this.app.vault.getMarkdownFiles();for(let u of i){let l=await this.app.vault.read(u);this.calculateSimilarity(e,l)>.3&&t.push(u.basename)}return t}calculateSimilarity(e,t){let i=new Set(e.toLowerCase().split(/\s+/)),u=new Set(t.toLowerCase().split(/\s+/)),l=new Set([...i].filter(m=>u.has(m))),f=new Set([...i,...u]);return l.size/f.size}},ue=class extends w.Modal{constructor(e,t){super(e);this.plugin=t}onOpen(){let{contentEl:e}=this;e.createEl("h2",{text:"NoteCap: Upload Note"}),e.createEl("input",{type:"file",attr:{accept:"image/*",capture:"environment"}}).addEventListener("change",async i=>{var f;let l=(f=i.target.files)==null?void 0:f[0];if(l)try{let m=await l.arrayBuffer(),b=`${l.name}`;await this.app.vault.createBinary(b,m),this.close()}catch(m){console.error("Error uploading file:",m),new w.Notice("Error uploading file: "+m.message)}})}onClose(){let{contentEl:e}=this;e.empty()}},pe=class extends w.PluginSettingTab{constructor(e,t){super(e,t);this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"NoteCap Settings"}),new w.Setting(e).setName("LLM Provider").setDesc("Choose which LLM provider to use for vision capabilities").addDropdown(t=>t.addOption("none","None (Use Tesseract Only)").addOption("openai","OpenAI GPT-4V").addOption("anthropic","Anthropic Claude 3").setValue(this.plugin.settings.llmProvider).onChange(async i=>{this.plugin.settings.llmProvider=i,await this.plugin.saveSettings(),this.display()})),this.plugin.settings.llmProvider==="openai"&&new w.Setting(e).setName("OpenAI API Key").setDesc("Enter your OpenAI API key").addText(t=>t.setPlaceholder("sk-...").setValue(this.plugin.settings.openaiApiKey).onChange(async i=>{this.plugin.settings.openaiApiKey=i,await this.plugin.saveSettings()})),this.plugin.settings.llmProvider==="anthropic"&&new w.Setting(e).setName("Anthropic API Key").setDesc("Enter your Anthropic API key").addText(t=>t.setPlaceholder("sk-ant-...").setValue(this.plugin.settings.anthropicApiKey).onChange(async i=>{this.plugin.settings.anthropicApiKey=i,await this.plugin.saveSettings()})),this.plugin.settings.llmProvider!=="none"&&(new w.Setting(e).setName("Use Vision for OCR").setDesc("Use LLM vision capabilities for text recognition instead of Tesseract").addToggle(t=>t.setValue(this.plugin.settings.useVisionForOcr).onChange(async i=>{this.plugin.settings.useVisionForOcr=i,await this.plugin.saveSettings()})),new w.Setting(e).setName("Tag Suggestions").setDesc("Use LLM to suggest relevant tags").addToggle(t=>t.setValue(this.plugin.settings.tagSuggestions).onChange(async i=>{this.plugin.settings.tagSuggestions=i,await this.plugin.saveSettings()})),new w.Setting(e).setName("Content Summary").setDesc("Generate a brief summary of the content").addToggle(t=>t.setValue(this.plugin.settings.summarizeContent).onChange(async i=>{this.plugin.settings.summarizeContent=i,await this.plugin.saveSettings()})),new w.Setting(e).setName("Max Tokens").setDesc("Maximum number of tokens for LLM responses").addSlider(t=>t.setLimits(100,4e3,100).setValue(this.plugin.settings.maxTokens).onChange(async i=>{this.plugin.settings.maxTokens=i,await this.plugin.saveSettings()}))),this.plugin.settings.llmProvider==="none"&&new w.Setting(e).setName("OCR Language").setDesc("Language for text recognition (e.g., eng, fra, deu)").addText(t=>t.setPlaceholder("eng").setValue(this.plugin.settings.language).onChange(async i=>{this.plugin.settings.language=i,await this.plugin.saveSettings(),await this.plugin.setupOCR()})),new w.Setting(e).setName("Enable Auto Backlinks").setDesc("Automatically create backlinks to related notes").addToggle(t=>t.setValue(this.plugin.settings.enableAutoBacklinks).onChange(async i=>{this.plugin.settings.enableAutoBacklinks=i,await this.plugin.saveSettings()})),new w.Setting(e).setName("Minimum Tag Confidence").setDesc("Minimum confidence level for auto-generated tags (0-1)").addSlider(t=>t.setLimits(0,1,.1).setValue(this.plugin.settings.minimumTagConfidence).onChange(async i=>{this.plugin.settings.minimumTagConfidence=i,await this.plugin.saveSettings()}))}};
