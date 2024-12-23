import{A as lt,B as Q,C as X,D as mt,E as dt,F as ft,G as ut,a as Qe,b as Xe,c as v,d as Me,e as Oe,f as We,g as T,h as et,i as U,j as J,k as q,l as j,m as Y,n as K,o as Z,p as tt,q as ot,r as nt,s as E,t as it,u as rt,v as at,w as st,x as pt,z as ct}from"./chunk-Z4LO44O4.js";import{$ as m,B as b,C as M,Ca as Ue,D as C,Da as Je,E as l,Ea as qe,F as $,Fa as Ye,Ga as Ke,H as d,Ha as Ze,I as O,Ia as be,L as Le,M as ve,N as Ce,Q as w,S as Ve,V as c,W as F,_ as h,a as u,aa as Ge,b as S,ba as ze,c as Ie,ca as r,d as De,da as i,ea as f,fa as he,ga as _e,ha as Be,i as I,ia as g,j as A,ja as R,k as D,ka as s,la as Se,m as ye,ma as L,n as k,o as H,p as Re,pa as V,q as je,qa as G,r as ke,t as He,u as Ee,v as $e,xa as P,ya as z,za as B}from"./chunk-NFOMA6GN.js";var W=[{label:"Project Management Team",value:"Project Management Team",isSelected:!1},{label:"Development Team",value:"Development Team",isSelected:!1},{label:"Design Team",value:"Design Team",isSelected:!1},{label:"Business Team",value:"Business Team",isSelected:!1},{label:"Data Science Team",value:"Data Science Team",isSelected:!1},{label:"HR Team",value:"HR Team",isSelected:!1}];function kt(e,n){if(e&1&&(r(0,"option",20),s(1),i()),e&2){let t=n.$implicit;m("value",t.id),c(),Se(t.name)}}var ee=class e{constructor(n,t){this.fb=n;this.store=t;this.teams=[];this.employeeToEdit=null;this.isEditMode=!1;this.formSubmit=new w}ngOnInit(){this.teams=W.map((n,t)=>({id:(t+1).toString(),name:n.label,location:"HQ",emplist:[]})),this.employeeForm=this.fb.group({name:["",E.required],designation:["",E.required],experience:[0,[E.required,E.min(0)]],dateJoined:["",E.required],phoneNumber:["",[E.required,E.pattern(/^\d+$/)]],companyMailAdd:["",[E.required,E.email]],currentTeam:["",E.required]})}ngOnChanges(n){n.employeeToEdit&&this.employeeToEdit&&this.employeeForm.patchValue(this.employeeToEdit)}onSubmit(){this.formSubmit.emit(this.employeeForm.value),this.employeeForm.reset()}static{this.\u0275fac=function(t){return new(t||e)(F(mt),F(v))}}static{this.\u0275cmp=d({type:e,selectors:[["app-add-employee-form"]],inputs:{employeeToEdit:"employeeToEdit",isEditMode:"isEditMode"},outputs:{formSubmit:"formSubmit"},features:[Le],decls:37,vars:4,consts:[[1,"form-container"],[1,"employee-form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["id","name","formControlName","name","type","text","placeholder","Enter employee's name"],["for","designation"],["id","designation","formControlName","designation","type","text","placeholder","Enter designation"],["for","experience"],["id","experience","formControlName","experience","type","number","placeholder","Years of experience"],["for","dateJoined"],["id","dateJoined","formControlName","dateJoined","type","date"],["for","phoneNumber"],["id","phoneNumber","formControlName","phoneNumber","type","number","placeholder","Enter phone number"],["for","companyMailAdd"],["id","companyMailAdd","formControlName","companyMailAdd","type","email","placeholder","Enter email address"],["for","currentTeam"],["id","currentTeam","formControlName","currentTeam"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"submit-button",3,"disabled"],[3,"value"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"h2"),s(2,"Add Employee"),i(),r(3,"form",1),g("ngSubmit",function(){return o.onSubmit()}),r(4,"div",2)(5,"label",3),s(6,"Name:"),i(),f(7,"input",4),i(),r(8,"div",2)(9,"label",5),s(10,"Designation:"),i(),f(11,"input",6),i(),r(12,"div",2)(13,"label",7),s(14,"Experience (Years):"),i(),f(15,"input",8),i(),r(16,"div",2)(17,"label",9),s(18,"Date Joined:"),i(),f(19,"input",10),i(),r(20,"div",2)(21,"label",11),s(22,"Phone Number:"),i(),f(23,"input",12),i(),r(24,"div",2)(25,"label",13),s(26,"Company Email:"),i(),f(27,"input",14),i(),r(28,"div",2)(29,"label",15),s(30,"Team:"),i(),r(31,"select",16)(32,"option",17),s(33,"Select a team"),i(),h(34,kt,2,2,"option",18),i()(),r(35,"button",19),s(36),i()()()),t&2&&(c(3),m("formGroup",o.employeeForm),c(31),m("ngForOf",o.teams),c(),m("disabled",o.employeeForm.invalid),c(),Se(o.isEditMode?"Update":"Add"))},dependencies:[P,at,Q,X,nt,st,lt,it,rt,pt,ct],styles:[".form-container[_ngcontent-%COMP%]{max-width:500px;margin:0 auto;background:#f9f9f9;border:1px solid #ddd;border-radius:8px;padding:20px;box-shadow:0 4px 6px #0000001a}.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;color:#333;margin-bottom:20px}.employee-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px;color:#555}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:4px;font-size:14px;color:#333;transition:border-color .2s ease-in-out}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none;box-shadow:0 0 4px #007bff80}.submit-button[_ngcontent-%COMP%]{padding:10px 15px;font-size:16px;font-weight:600;color:#fff;background-color:#007bff;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s ease-in-out}.submit-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.submit-button[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed}@media (max-width: 576px){.form-container[_ngcontent-%COMP%]{padding:15px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{font-size:14px}}"]})}};function $t(e,n){if(e&1){let t=Be();he(0),r(1,"app-employee-card",6),g("edit",function(){let a=ve(t).$implicit,p=R(2);return Ce(p.onEditEmployee(a))})("delete",function(){let a=ve(t).$implicit,p=R(2);return Ce(p.onDeleteEmployee(a.id))}),i(),_e()}if(e&2){let t=n.$implicit;c(),m("employee",t)}}function Lt(e,n){if(e&1&&(he(0),r(1,"div",4),h(2,$t,2,1,"ng-container",5),i(),_e()),e&2){let t=n.ngIf;c(2),m("ngForOf",t)}}var oe=class e{constructor(n){this.store=n;this.selectedEmployee=null;this.isEditMode=!1;this.employees$=this.store.select(tt)}ngOnInit(){this.store.dispatch(U())}onEditEmployee(n){this.selectedEmployee=n,this.isEditMode=!0}onDeleteEmployee(n){this.store.dispatch(Z({id:n}))}handleFormSubmit(n){this.isEditMode?this.store.dispatch(K({employee:n})):this.store.dispatch(Y({employee:n})),this.selectedEmployee=null,this.isEditMode=!1}static{this.\u0275fac=function(t){return new(t||e)(F(v))}}static{this.\u0275cmp=d({type:e,selectors:[["app-home"]],decls:5,vars:5,consts:[[1,"home-container"],[1,"employee-form-container"],[3,"formSubmit","employeeToEdit","isEditMode"],[4,"ngIf"],[1,"employee-list-container"],[4,"ngFor","ngForOf"],[3,"edit","delete","employee"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"app-add-employee-form",2),g("formSubmit",function(p){return o.handleFormSubmit(p)}),i()(),h(3,Lt,3,1,"ng-container",3),V(4,"async"),i()),t&2&&(c(2),m("employeeToEdit",o.selectedEmployee)("isEditMode",o.isEditMode),c(),m("ngIf",G(4,3,o.employees$)))},dependencies:[P,z,ot,ee,B],styles:[".home-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:20% 1fr;gap:4px;padding:16px}.employee-list-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:4px;padding:16px}"]})}};var ne=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-my-account"]],decls:2,vars:0,template:function(t,o){t&1&&(r(0,"p"),s(1,"my-account works!"),i())}})}};var Vt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:oe},{path:"messages",loadChildren:()=>import("./chunk-BLMC55DZ.js").then(e=>e.MessagesModule)},{path:"search",loadChildren:()=>import("./chunk-EEWILATK.js").then(e=>e.SearchModule)},{path:"filter",loadChildren:()=>import("./chunk-R5AM6JSZ.js").then(e=>e.FilterModule)},{path:"history",loadChildren:()=>import("./chunk-YCK67WF5.js").then(e=>e.HistoryModule)},{path:"myaccount",component:ne}],ie=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=O({type:e})}static{this.\u0275inj=M({imports:[be.forRoot(Vt),be]})}};function Gt(e,n){if(e&1&&(r(0,"option",4),s(1),i()),e&2){let t=n.$implicit;m("value",t.value)("selected",t.isSelected),c(),L(" ",t.label," ")}}var re=class e{constructor(){this.options=[];this.selectionChange=new w}onSelect(n){let t=n.target.value;this.selectionChange.emit(t)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-select-dropdown"]],inputs:{options:"options"},outputs:{selectionChange:"selectionChange"},decls:5,vars:1,consts:[[1,"select-container"],[3,"change"],["value","","selected",""],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"select",1),g("change",function(p){return o.onSelect(p)}),r(2,"option",2),s(3," Select an option "),i(),h(4,Gt,2,3,"option",3),i()()),t&2&&(c(4),m("ngForOf",o.options))},dependencies:[P,Q,X],styles:[".select-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.logo[_ngcontent-%COMP%]{cursor:pointer}.selected[_ngcontent-%COMP%]{cursor:pointer;padding:8px;border:1px solid #ccc;border-radius:4px}select[_ngcontent-%COMP%]{width:100%;padding:8px;border-radius:4px;border:1px solid #ccc}option[_ngcontent-%COMP%]{padding:8px}option[selected][_ngcontent-%COMP%]{background-color:#f0f0f0}"]})}};function Bt(e,n){if(e&1&&(r(0,"span",3),s(1),i()),e&2){let t=R();c(),L(" ",t.notifications.length," ")}}var ae=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-alarm-notifications"]],inputs:{notifications:"notifications"},decls:3,vars:1,consts:[[1,"notification-bell"],["src","notifications_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"],["class","notification-count",4,"ngIf"],[1,"notification-count"]],template:function(t,o){t&1&&(r(0,"div",0),f(1,"img",1),h(2,Bt,2,1,"span",2),i()),t&2&&(c(2),m("ngIf",o.notifications))},dependencies:[z],styles:[".notification-bell[_ngcontent-%COMP%]{position:relative;top:5px}.notification-count[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-10px;background-color:red;color:#fff;border-radius:50%;height:2em;width:2em;text-align:center;line-height:2em;font-size:10px}"]})}};var se=class e{constructor(n){this.store=n;this.toggleSideNav=new w;this.dropdownOptions=W;let t=[{eventType:"ALARM_TRIGGERED",markedRead:!1,message:"High severity alarm triggered!",data:{id:"1",severity:"high",timestamp:new Date}},{eventType:"ALARM_RESOLVED",markedRead:!1,message:"Medium severity alarm resolved.",data:{id:"2",severity:"medium",timestamp:new Date}}];this.notifications$=t?I(t.filter(o=>!o.markedRead)):I([])}onToggleSideNav(){this.toggleSideNav.emit()}onSelectionChange(n){this.dropdownOptions.forEach(o=>{o.isSelected=o.value===n});let t=this.dropdownOptions.find(o=>o.isSelected);t&&t.value?this.store.dispatch(j({filter:{currentTeam:{name:String(t.value)}}})):this.store.dispatch(j({filter:{}}))}static{this.\u0275fac=function(t){return new(t||e)(F(v))}}static{this.\u0275cmp=d({type:e,selectors:[["app-top-nav"]],outputs:{toggleSideNav:"toggleSideNav"},decls:10,vars:4,consts:[[1,"top-nav"],[1,"nav-left"],[1,"toggle-btn",3,"click"],[1,"logo"],[1,"nav-right"],[3,"notifications"],[3,"selectionChange","options"]],template:function(t,o){t&1&&(r(0,"nav",0)(1,"div",1)(2,"button",2),g("click",function(){return o.onToggleSideNav()}),s(3," \u2630 "),i(),r(4,"span",3),s(5,"My App"),i()(),r(6,"div",4),f(7,"app-alarm-notifications",5),V(8,"async"),r(9,"app-select-dropdown",6),g("selectionChange",function(p){return o.onSelectionChange(p)}),i()()()),t&2&&(c(7),m("notifications",G(8,2,o.notifications$)),c(2),m("options",o.dropdownOptions))},dependencies:[re,ae,B],styles:[".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#2c3e50;color:#fff;padding:1rem;box-shadow:0 4px 8px #0000001a;position:fixed;top:0;width:-webkit-fill-available;z-index:99999}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]{display:flex;align-items:center}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{font-size:1.5rem;background:none;border:none;color:#fff;cursor:pointer;padding-right:1rem}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover{color:#1abc9c}.top-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.top-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]{display:flex;gap:2em;align-items:center;justify-content:center}"]})}};var pe=class e{constructor(){this.isOpen=!1}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-side-nav"]],inputs:{isOpen:"isOpen"},decls:20,vars:2,consts:[[1,"side-nav"],["routerLink","home"],["routerLink","messages"],["routerLink","search"],["routerLink","filter"],["routerLink","history"],["routerLink","myaccount"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"ul")(2,"li")(3,"a",1),s(4,"Overview"),i()(),r(5,"li")(6,"a",2),s(7,"Messages"),i()(),r(8,"li")(9,"a",3),s(10,"Search"),i()(),r(11,"li")(12,"a",4),s(13,"Filter"),i()(),r(14,"li")(15,"a",5),s(16,"History"),i()(),r(17,"li")(18,"a",6),s(19,"My Account"),i()()()()),t&2&&ze("open",o.isOpen)},dependencies:[Ze],styles:[".side-nav[_ngcontent-%COMP%]{position:fixed;left:-250px;height:100%;width:250px;top:60px;background-color:#34495e;color:#fff;transition:left .3s ease}.side-nav.open[_ngcontent-%COMP%]{left:0}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:1rem}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:1rem 0}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:1.2rem;display:block;padding:.5rem 1rem;transition:background-color .2s ease}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#1abc9c}"]})}};var ce=class e{constructor(){this.isSideNavOpen=!1}toggleSideNav(){this.isSideNavOpen=!this.isSideNavOpen}get contentMargin(){return this.isSideNavOpen?"250px":"0"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-root"]],decls:4,vars:3,consts:[[3,"toggleSideNav"],[3,"isOpen"],[1,"content"]],template:function(t,o){t&1&&(r(0,"app-top-nav",0),g("toggleSideNav",function(){return o.toggleSideNav()}),i(),f(1,"app-side-nav",1),r(2,"div",2),f(3,"router-outlet"),i()),t&2&&(c(),m("isOpen",o.isSideNavOpen),c(),Ge("margin-left",o.contentMargin))},dependencies:[Ke,se,pe],styles:[".content[_ngcontent-%COMP%]{transition:margin-left .3s ease;position:relative;top:60px;overflow:auto;height:calc(100vh - 60px)}"]})}};var Kt={id:"",name:"",designation:"",experience:void 0,dateJoined:"",reportingManager:{},currentTeam:{}},gt={employees:[],filteredEmployees:[],filterCriteria:Kt,error:null};function Zt(e,n){return Object.entries(n).every(([t,o])=>{if(!o)return!0;let a=e[t];return typeof o=="object"?Object.entries(o).every(([p,x])=>!x||a?.[p]===x):t==="dateJoined"&&a instanceof Date?a.getFullYear().toString()===o:a?.toString().toLowerCase().includes(o.toString().toLowerCase())})}var yt=et(gt,T(J,(e,{employees:n})=>S(u({},e),{employees:n,filteredEmployees:n,error:null})),T(q,(e,{error:n})=>S(u({},e),{error:n})),T(j,(e,{filter:n})=>{let t=e.employees.filter(o=>Zt(o,n));return console.log(t),S(u({},e),{filterCriteria:n,filteredEmployees:t})}),T(Y,(e,{employee:n})=>S(u({},e),{employees:[...e.employees,n],filteredEmployees:[...e.employees,n]})),T(K,(e,{employee:n})=>{let t=e.employees.map(a=>a.id===n.id?u({},n):a),o=e.filteredEmployees.map(a=>a.id===n.id?u({},n):a);return S(u({},e),{employees:t,filteredEmployees:o})}),T(Z,(e,{id:n})=>{let t=e.employees.filter(a=>a.id!==n),o=e.filteredEmployees.filter(a=>a.id!==n);return S(u({},e),{employees:t,filteredEmployees:o})}));var Et={employee:yt};var Qt={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},me="__@ngrx/effects_create__";function _t(e,n={}){let t=n.functional?e:e(),o=u(u({},Qt),n);return Object.defineProperty(t,me,{value:o}),t}function Xt(e){return Object.getOwnPropertyNames(e).filter(o=>e[o]&&e[o].hasOwnProperty(me)?e[o][me].hasOwnProperty("dispatch"):!1).map(o=>{let a=e[o][me];return u({propertyName:o},a)})}function Wt(e){return Xt(e)}function St(e){return Object.getPrototypeOf(e)}function eo(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function bt(e){return typeof e=="function"}function vt(e){return e.filter(bt)}function to(e){return e instanceof C||bt(e)}function oo(e,n,t){let o=St(e),p=!!o&&o.constructor.name!=="Object"?o.constructor.name:null,x=Wt(e).map(({propertyName:_,dispatch:Ae,useEffectsErrorHandler:ge})=>{let we=typeof e[_]=="function"?e[_]():e[_],Pe=ge?t(we,n):we;return Ae===!1?Pe.pipe(je()):Pe.pipe($e()).pipe(A(Rt=>({effect:e[_],notification:Rt,propertyName:_,sourceName:p,sourceInstance:e})))});return ye(...x)}var no=10;function Mt(e,n,t=no){return e.pipe(H(o=>(n&&n.handleError(o),t<=1?e:Mt(e,n,t-1))))}var Ot=(()=>{class e extends Ie{constructor(t){super(),t&&(this.source=t)}lift(t){let o=new e;return o.source=this,o.operator=t,o}static{this.\u0275fac=function(o){return new(o||e)(l(Xe))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function xt(...e){return k(n=>e.some(t=>typeof t=="string"?t===n.type:t.type===n.type))}var Ft=new C("@ngrx/effects Internal Root Guard"),le=new C("@ngrx/effects User Provided Effects"),Te=new C("@ngrx/effects Internal Root Effects"),Tt=new C("@ngrx/effects Internal Root Effects Instances"),Ct=new C("@ngrx/effects Internal Feature Effects"),Nt=new C("@ngrx/effects Internal Feature Effects Instance Groups"),io=new C("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Mt}),At="@ngrx/effects/init",An=Qe(At);function ro(e,n){if(e.notification.kind==="N"){let t=e.notification.value;!ao(t)&&n.handleError(new Error(`Effect ${so(e)} dispatched an invalid action: ${po(t)}`))}}function ao(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function so({propertyName:e,sourceInstance:n,sourceName:t}){let o=typeof n[e]=="function";return!!t?`"${t}.${String(e)}${o?"()":""}"`:`"${String(e)}()"`}function po(e){try{return JSON.stringify(e)}catch{return e}}var co="ngrxOnIdentifyEffects";function lo(e){return Ne(e,co)}var mo="ngrxOnRunEffects";function fo(e){return Ne(e,mo)}var uo="ngrxOnInitEffects";function go(e){return Ne(e,uo)}function Ne(e,n){return e&&n in e&&typeof e[n]=="function"}var wt=(()=>{class e extends De{constructor(t,o){super(),this.errorHandler=t,this.effectsErrorHandler=o}addEffects(t){this.next(t)}toActions(){return this.pipe(Ee(t=>eo(t)?St(t):t),D(t=>t.pipe(Ee(yo))),D(t=>{let o=t.pipe(He(p=>Eo(this.errorHandler,this.effectsErrorHandler)(p)),A(p=>(ro(p,this.errorHandler),p.notification)),k(p=>p.kind==="N"&&p.value!=null),ke()),a=t.pipe(Re(1),k(go),A(p=>p.ngrxOnInitEffects()));return ye(o,a)}))}static{this.\u0275fac=function(o){return new(o||e)(l(Ve),l(io))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function yo(e){return lo(e)?e.ngrxOnIdentifyEffects():""}function Eo(e,n){return t=>{let o=oo(t,e,n);return fo(t)?t.ngrxOnRunEffects(o):o}}var Pt=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,o){this.effectSources=t,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(o){return new(o||e)(l(wt),l(v))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),It=(()=>{class e{constructor(t,o,a,p,x,_,Ae){this.sources=t,o.start();for(let ge of p)t.addEffects(ge);a.dispatch({type:At})}addEffects(t){this.sources.addEffects(t)}static{this.\u0275fac=function(o){return new(o||e)(l(wt),l(Pt),l(v),l(Tt),l(Me,8),l(Oe,8),l(Ft,8))}}static{this.\u0275mod=O({type:e})}static{this.\u0275inj=M({})}}return e})(),vo=(()=>{class e{constructor(t,o,a,p){let x=o.flat();for(let _ of x)t.addEffects(_)}static{this.\u0275fac=function(o){return new(o||e)(l(It),l(Nt),l(Me,8),l(Oe,8))}}static{this.\u0275mod=O({type:e})}static{this.\u0275inj=M({})}}return e})(),Dt=(()=>{class e{static forFeature(...t){let o=t.flat(),a=vt(o);return{ngModule:vo,providers:[a,{provide:Ct,multi:!0,useValue:o},{provide:le,multi:!0,useValue:[]},{provide:Nt,multi:!0,useFactory:ht,deps:[Ct,le]}]}}static forRoot(...t){let o=t.flat(),a=vt(o);return{ngModule:It,providers:[a,{provide:Te,useValue:[o]},{provide:Ft,useFactory:Co},{provide:le,multi:!0,useValue:[]},{provide:Tt,useFactory:ht,deps:[Te,le]}]}}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=O({type:e})}static{this.\u0275inj=M({})}}return e})();function ht(e,n){let t=[];for(let o of e)t.push(...o);for(let o of n)t.push(...o);return t.map(o=>to(o)?$(o):o)}function Co(){let e=$(Pt,{optional:!0,skipSelf:!0}),n=$(Te,{self:!0});if(!(n.length===1&&n[0].length===0)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}var de=class e{constructor(n){this.http=n;this.jsonUrl="db.json"}getEmployees(){return this.http.get(this.jsonUrl)}static{this.\u0275fac=function(t){return new(t||e)(l(Ue))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}};var fe=class e{constructor(n,t){this.actions$=n;this.employeeService=t;this.loadEmployees$=_t(()=>this.actions$.pipe(xt(U),D(()=>this.employeeService.getEmployees().pipe(A(o=>J({employees:o})),H(o=>I(q({error:o})))))))}static{this.\u0275fac=function(t){return new(t||e)(l(Ot),l(de))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}};var ue=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=O({type:e,bootstrap:[ce]})}static{this.\u0275inj=M({imports:[Ye,ie,Je,We.forRoot(Et),Dt.forRoot([fe]),ut,dt,ft]})}};qe().bootstrapModule(ue,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
