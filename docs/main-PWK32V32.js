import{A as E,D as T,a as R,b as F,c as D,e as P,h as p,i as S,q as x}from"./chunk-DE7WI6H3.js";import"./chunk-ZPRKIMH5.js";import{Fa as v,Ga as w,Gb as N,Ha as A,Ja as C,Ka as M,R as h,T as u,U as l,Ya as I,Z as f,ca as g,da as d,fa as y,ya as b}from"./chunk-FPYAVUMA.js";import"./chunk-CQCHLVVT.js";var _=[{path:"portfolio",loadChildren:()=>import("./chunk-HCMNSKNW.js").then(i=>i.PortfolioModule)},{path:"404",component:S},{path:"",redirectTo:"portfolio",pathMatch:"full"},{path:"**",redirectTo:"404"}],k=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e}),e.\u0275inj=l({imports:[p.forRoot(_,{useHash:!0}),p]});let i=e;return i})();var j=(()=>{let e=class e{constructor(){this.title="portfolio"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(o,n){o&1&&I(0,"router-outlet")},dependencies:[P]});let i=e;return i})();var q="@",G=(()=>{let e=class e{constructor(r,o,n,s,a){this.doc=r,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=f(w,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-IGFO5JWP.js")).catch(o=>{throw new h(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new c(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let z=a.createRenderer(r,o);s.use(z)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){v()},e.\u0275prov=u({token:e,factory:e.\u0275fac});let i=e;return i})(),c=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(q)}};function O(i="animations"){return C("NgAsyncAnimations"),y([{provide:A,useFactory:(e,t,r)=>new G(e,t,r,i),deps:[N,R,M]},{provide:b,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var B={production:!1,firebaseConfig:{apiKey:"AIzaSyCTKHi7WZLVkGoqxw9qDq7qyn6rTSWV7G4",authDomain:"portfolio-549f8.firebaseapp.com",projectId:"portfolio-549f8",storageBucket:"portfolio-549f8.appspot.com",messagingSenderId:"346210724876",appId:"1:346210724876:web:9107d4534a1f905da69229",measurementId:"G-QJ6ENBNDV2"}};var V=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e,bootstrap:[j]}),e.\u0275inj=l({providers:[O()],imports:[D,x.initializeApp(B.firebaseConfig),E,k,T]});let i=e;return i})();F().bootstrapModule(V).catch(i=>console.error(i));
