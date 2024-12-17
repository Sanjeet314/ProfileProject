import{a as ke,b as He,c as S,d as fe,e as me,f as $e,g as z,h as Le,i as B,j as G,k as U,l as V,m as ze,o as Be,p as Ge}from"./chunk-NSXNJQNA.js";import{$ as m,B as y,C,Ca as we,D as u,Da as Ie,E as a,Ea as Re,F as I,Fa as De,Ga as Pe,H as f,Ha as je,I as h,Ia as le,Q as R,S as Fe,V as l,W as D,_,a as E,aa as Te,b as F,ba as Ae,c as he,ca as i,d as Se,da as r,ea as g,fa as ce,ga as pe,i as T,ia as O,j as b,ja as Ne,k as A,ka as p,m as se,ma as P,n as N,o as w,p as Me,pa as j,q as _e,qa as k,r as Oe,t as be,u as ae,v as xe,xa as H,ya as $,za as L}from"./chunk-NFOMA6GN.js";function mt(e,o){if(e&1&&(ce(0),g(1,"app-employee-card",3),pe()),e&2){let t=o.$implicit;l(),m("employee",t)}}function dt(e,o){if(e&1&&(ce(0),_(1,mt,2,1,"ng-container",2),pe()),e&2){let t=o.ngIf;l(),m("ngForOf",t)}}var J=class e{constructor(o){this.store=o;this.employees$=this.store.select(ze)}ngOnInit(){this.store.dispatch(B())}static{this.\u0275fac=function(t){return new(t||e)(D(S))}}static{this.\u0275cmp=f({type:e,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"home-container"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"employee"]],template:function(t,n){t&1&&(i(0,"div",0),_(1,dt,2,1,"ng-container",1),j(2,"async"),r()),t&2&&(l(),m("ngIf",k(2,1,n.employees$)))},dependencies:[H,$,Be,L],styles:[".home-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;padding:16px}.home-container[_ngcontent-%COMP%] > app-employee-card[_ngcontent-%COMP%]{flex:auto;box-sizing:border-box}"]})}};var K=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-my-account"]],decls:2,vars:0,template:function(t,n){t&1&&(i(0,"p"),p(1,"my-account works!"),r())}})}};var ut=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:J},{path:"messages",loadChildren:()=>import("./chunk-BLMC55DZ.js").then(e=>e.MessagesModule)},{path:"search",loadChildren:()=>import("./chunk-54JXUR65.js").then(e=>e.SearchModule)},{path:"filter",loadChildren:()=>import("./chunk-R5AM6JSZ.js").then(e=>e.FilterModule)},{path:"history",loadChildren:()=>import("./chunk-YCK67WF5.js").then(e=>e.HistoryModule)},{path:"myaccount",component:K}],Y=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=C({imports:[le.forRoot(ut),le]})}};function gt(e,o){if(e&1&&(i(0,"option",4),p(1),r()),e&2){let t=o.$implicit;m("value",t.value)("selected",t.isSelected),l(),P(" ",t.label," ")}}var Z=class e{constructor(){this.options=[];this.selectionChange=new R}onSelect(o){let t=o.target.value;this.selectionChange.emit(t)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-select-dropdown"]],inputs:{options:"options"},outputs:{selectionChange:"selectionChange"},decls:5,vars:1,consts:[[1,"select-container"],[3,"change"],["value","","selected",""],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"select",1),O("change",function(c){return n.onSelect(c)}),i(2,"option",2),p(3," Select an option "),r(),_(4,gt,2,3,"option",3),r()()),t&2&&(l(4),m("ngForOf",n.options))},dependencies:[H],styles:[".select-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.logo[_ngcontent-%COMP%]{cursor:pointer}.selected[_ngcontent-%COMP%]{cursor:pointer;padding:8px;border:1px solid #ccc;border-radius:4px}select[_ngcontent-%COMP%]{width:100%;padding:8px;border-radius:4px;border:1px solid #ccc}option[_ngcontent-%COMP%]{padding:8px}option[selected][_ngcontent-%COMP%]{background-color:#f0f0f0}"]})}};function Et(e,o){if(e&1&&(i(0,"span",3),p(1),r()),e&2){let t=Ne();l(),P(" ",t.notifications.length," ")}}var X=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-alarm-notifications"]],inputs:{notifications:"notifications"},decls:3,vars:1,consts:[[1,"notification-bell"],["src","notifications_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"],["class","notification-count",4,"ngIf"],[1,"notification-count"]],template:function(t,n){t&1&&(i(0,"div",0),g(1,"img",1),_(2,Et,2,1,"span",2),r()),t&2&&(l(2),m("ngIf",n.notifications))},dependencies:[$],styles:[".notification-bell[_ngcontent-%COMP%]{position:relative;top:5px}.notification-count[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-10px;background-color:red;color:#fff;border-radius:50%;height:2em;width:2em;text-align:center;line-height:2em;font-size:10px}"]})}};var q=class e{constructor(o){this.store=o;this.toggleSideNav=new R;this.dropdownOptions=[{label:"Project Management Team",value:"Project Management Team",isSelected:!1},{label:"Development Team",value:"Development Team",isSelected:!1},{label:"Design Team",value:"Design Team",isSelected:!1},{label:"Business Team",value:"Business Team",isSelected:!1},{label:"Data Science Team",value:"Data Science Team",isSelected:!1},{label:"HR Team",value:"HR Team",isSelected:!1}];let t=[{eventType:"ALARM_TRIGGERED",markedRead:!1,message:"High severity alarm triggered!",data:{id:"1",severity:"high",timestamp:new Date}},{eventType:"ALARM_RESOLVED",markedRead:!1,message:"Medium severity alarm resolved.",data:{id:"2",severity:"medium",timestamp:new Date}}];this.notifications$=t?T(t.filter(n=>!n.markedRead)):T([])}onToggleSideNav(){this.toggleSideNav.emit()}onSelectionChange(o){this.dropdownOptions.forEach(n=>{n.isSelected=n.value===o});let t=this.dropdownOptions.find(n=>n.isSelected);t&&t.value&&this.store.dispatch(V({filter:{currentTeam:{name:String(t.value)}}}))}static{this.\u0275fac=function(t){return new(t||e)(D(S))}}static{this.\u0275cmp=f({type:e,selectors:[["app-top-nav"]],outputs:{toggleSideNav:"toggleSideNav"},decls:10,vars:4,consts:[[1,"top-nav"],[1,"nav-left"],[1,"toggle-btn",3,"click"],[1,"logo"],[1,"nav-right"],[3,"notifications"],[3,"selectionChange","options"]],template:function(t,n){t&1&&(i(0,"nav",0)(1,"div",1)(2,"button",2),O("click",function(){return n.onToggleSideNav()}),p(3," \u2630 "),r(),i(4,"span",3),p(5,"My App"),r()(),i(6,"div",4),g(7,"app-alarm-notifications",5),j(8,"async"),i(9,"app-select-dropdown",6),O("selectionChange",function(c){return n.onSelectionChange(c)}),r()()()),t&2&&(l(7),m("notifications",k(8,2,n.notifications$)),l(2),m("options",n.dropdownOptions))},dependencies:[Z,X,L],styles:[".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#2c3e50;color:#fff;padding:1rem;box-shadow:0 4px 8px #0000001a;position:fixed;top:0;width:-webkit-fill-available;z-index:99999}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]{display:flex;align-items:center}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{font-size:1.5rem;background:none;border:none;color:#fff;cursor:pointer;padding-right:1rem}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover{color:#1abc9c}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.top-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]{display:flex;gap:2em;align-items:center;justify-content:center}"]})}};var Q=class e{constructor(){this.isOpen=!1}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-side-nav"]],inputs:{isOpen:"isOpen"},decls:20,vars:2,consts:[[1,"side-nav"],["routerLink","home"],["routerLink","messages"],["routerLink","search"],["routerLink","filter"],["routerLink","history"],["routerLink","myaccount"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"ul")(2,"li")(3,"a",1),p(4,"Overview"),r()(),i(5,"li")(6,"a",2),p(7,"Messages"),r()(),i(8,"li")(9,"a",3),p(10,"Search"),r()(),i(11,"li")(12,"a",4),p(13,"Filter"),r()(),i(14,"li")(15,"a",5),p(16,"History"),r()(),i(17,"li")(18,"a",6),p(19,"My Account"),r()()()()),t&2&&Ae("open",n.isOpen)},dependencies:[je],styles:[".side-nav[_ngcontent-%COMP%]{position:fixed;left:-250px;height:100%;width:250px;top:60px;background-color:#34495e;color:#fff;transition:left .3s ease}.side-nav.open[_ngcontent-%COMP%]{left:0}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:1rem}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:1rem 0}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:1.2rem;display:block;padding:.5rem 1rem;transition:background-color .2s ease}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#1abc9c}"]})}};var W=class e{constructor(){this.isSideNavOpen=!1}toggleSideNav(){this.isSideNavOpen=!this.isSideNavOpen}get contentMargin(){return this.isSideNavOpen?"250px":"0"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-root"]],decls:4,vars:3,consts:[[3,"toggleSideNav"],[3,"isOpen"],[1,"content"]],template:function(t,n){t&1&&(i(0,"app-top-nav",0),O("toggleSideNav",function(){return n.toggleSideNav()}),r(),g(1,"app-side-nav",1),i(2,"div",2),g(3,"router-outlet"),r()),t&2&&(l(),m("isOpen",n.isSideNavOpen),l(),Te("margin-left",n.contentMargin))},dependencies:[Pe,q,Q],styles:[".content[_ngcontent-%COMP%]{transition:margin-left .3s ease;position:relative;top:60px;overflow:auto;height:calc(100vh - 60px)}"]})}};var Mt={id:"",name:"",designation:"",experience:void 0,dateJoined:"",reportingManager:{},currentTeam:{}},Ve={employees:[],filteredEmployees:[],filterCriteria:Mt,error:null};function _t(e,o){return Object.entries(o).every(([t,n])=>{if(!n)return!0;let s=e[t];return typeof n=="object"?Object.entries(n).every(([c,M])=>!M||s?.[c]===M):t==="dateJoined"&&s instanceof Date?s.getFullYear().toString()===n:s?.toString().toLowerCase().includes(n.toString().toLowerCase())})}var Je=Le(Ve,z(G,(e,{employees:o})=>F(E({},e),{employees:o,filteredEmployees:o,error:null})),z(U,(e,{error:o})=>F(E({},e),{error:o})),z(V,(e,{filter:o})=>{let t=e.employees.filter(n=>_t(n,o));return F(E({},e),{filterCriteria:o,filteredEmployees:t})}));var Ke={employee:Je};var Ot={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},te="__@ngrx/effects_create__";function qe(e,o={}){let t=o.functional?e:e(),n=E(E({},Ot),o);return Object.defineProperty(t,te,{value:n}),t}function bt(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty(te)?e[n][te].hasOwnProperty("dispatch"):!1).map(n=>{let s=e[n][te];return E({propertyName:n},s)})}function xt(e){return bt(e)}function Qe(e){return Object.getPrototypeOf(e)}function Ft(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function We(e){return typeof e=="function"}function Ye(e){return e.filter(We)}function Tt(e){return e instanceof u||We(e)}function At(e,o,t){let n=Qe(e),c=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,M=xt(e).map(({propertyName:v,dispatch:Ee,useEffectsErrorHandler:re})=>{let ye=typeof e[v]=="function"?e[v]():e[v],Ce=re?t(ye,o):ye;return Ee===!1?Ce.pipe(_e()):Ce.pipe(xe()).pipe(b(ft=>({effect:e[v],notification:ft,propertyName:v,sourceName:c,sourceInstance:e})))});return se(...M)}var Nt=10;function et(e,o,t=Nt){return e.pipe(w(n=>(o&&o.handleError(n),t<=1?e:et(e,o,t-1))))}var tt=(()=>{class e extends he{constructor(t){super(),t&&(this.source=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}static{this.\u0275fac=function(n){return new(n||e)(a(He))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function nt(...e){return N(o=>e.some(t=>typeof t=="string"?t===o.type:t.type===o.type))}var ot=new u("@ngrx/effects Internal Root Guard"),ee=new u("@ngrx/effects User Provided Effects"),ge=new u("@ngrx/effects Internal Root Effects"),it=new u("@ngrx/effects Internal Root Effects Instances"),Ze=new u("@ngrx/effects Internal Feature Effects"),rt=new u("@ngrx/effects Internal Feature Effects Instance Groups"),wt=new u("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>et}),st="@ngrx/effects/init",Ln=ke(st);function It(e,o){if(e.notification.kind==="N"){let t=e.notification.value;!Rt(t)&&o.handleError(new Error(`Effect ${Dt(e)} dispatched an invalid action: ${Pt(t)}`))}}function Rt(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function Dt({propertyName:e,sourceInstance:o,sourceName:t}){let n=typeof o[e]=="function";return!!t?`"${t}.${String(e)}${n?"()":""}"`:`"${String(e)}()"`}function Pt(e){try{return JSON.stringify(e)}catch{return e}}var jt="ngrxOnIdentifyEffects";function kt(e){return ve(e,jt)}var Ht="ngrxOnRunEffects";function $t(e){return ve(e,Ht)}var Lt="ngrxOnInitEffects";function zt(e){return ve(e,Lt)}function ve(e,o){return e&&o in e&&typeof e[o]=="function"}var at=(()=>{class e extends Se{constructor(t,n){super(),this.errorHandler=t,this.effectsErrorHandler=n}addEffects(t){this.next(t)}toActions(){return this.pipe(ae(t=>Ft(t)?Qe(t):t),A(t=>t.pipe(ae(Bt))),A(t=>{let n=t.pipe(be(c=>Gt(this.errorHandler,this.effectsErrorHandler)(c)),b(c=>(It(c,this.errorHandler),c.notification)),N(c=>c.kind==="N"&&c.value!=null),Oe()),s=t.pipe(Me(1),N(zt),b(c=>c.ngrxOnInitEffects()));return se(n,s)}))}static{this.\u0275fac=function(n){return new(n||e)(a(Fe),a(wt))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Bt(e){return kt(e)?e.ngrxOnIdentifyEffects():""}function Gt(e,o){return t=>{let n=At(t,e,o);return $t(t)?t.ngrxOnRunEffects(n):n}}var ct=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,n){this.effectSources=t,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(n){return new(n||e)(a(at),a(S))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),pt=(()=>{class e{constructor(t,n,s,c,M,v,Ee){this.sources=t,n.start();for(let re of c)t.addEffects(re);s.dispatch({type:st})}addEffects(t){this.sources.addEffects(t)}static{this.\u0275fac=function(n){return new(n||e)(a(at),a(ct),a(S),a(it),a(fe,8),a(me,8),a(ot,8))}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=C({})}}return e})(),Ut=(()=>{class e{constructor(t,n,s,c){let M=n.flat();for(let v of M)t.addEffects(v)}static{this.\u0275fac=function(n){return new(n||e)(a(pt),a(rt),a(fe,8),a(me,8))}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=C({})}}return e})(),lt=(()=>{class e{static forFeature(...t){let n=t.flat(),s=Ye(n);return{ngModule:Ut,providers:[s,{provide:Ze,multi:!0,useValue:n},{provide:ee,multi:!0,useValue:[]},{provide:rt,multi:!0,useFactory:Xe,deps:[Ze,ee]}]}}static forRoot(...t){let n=t.flat(),s=Ye(n);return{ngModule:pt,providers:[s,{provide:ge,useValue:[n]},{provide:ot,useFactory:Vt},{provide:ee,multi:!0,useValue:[]},{provide:it,useFactory:Xe,deps:[ge,ee]}]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=C({})}}return e})();function Xe(e,o){let t=[];for(let n of e)t.push(...n);for(let n of o)t.push(...n);return t.map(n=>Tt(n)?I(n):n)}function Vt(){let e=I(ct,{optional:!0,skipSelf:!0}),o=I(ge,{self:!0});if(!(o.length===1&&o[0].length===0)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}var ne=class e{constructor(o){this.http=o;this.jsonUrl="db.json"}getEmployees(){return this.http.get(this.jsonUrl)}static{this.\u0275fac=function(t){return new(t||e)(a(we))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}};var oe=class e{constructor(o,t){this.actions$=o;this.employeeService=t;this.loadEmployees$=qe(()=>this.actions$.pipe(nt(B),A(()=>this.employeeService.getEmployees().pipe(b(n=>G({employees:n})),w(n=>T(U({error:n})))))))}static{this.\u0275fac=function(t){return new(t||e)(a(tt),a(ne))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}};var ie=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=h({type:e,bootstrap:[W]})}static{this.\u0275inj=C({imports:[De,Y,Ie,$e.forRoot(Ke),lt.forRoot([oe]),Ge]})}};Re().bootstrapModule(ie,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));