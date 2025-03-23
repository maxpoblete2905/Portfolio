import{d as K,e as W,f as J,g as k,h as q,k as C,l as S,m as b,n as X,o as T,p as Z,q as ee,r as te,s as ie,t as oe,u as ne,v as re,w as ae,x as se,y as le,z as ce}from"./chunk-Q2J5BII7.js";import"./chunk-ZPRKIMH5.js";import{$a as G,Aa as j,Da as a,Ea as g,O as L,Rb as x,Sa as f,Sb as P,Tb as Q,Ua as d,V,W as w,Wa as U,Xa as _,Ya as n,Za as i,_a as m,ab as I,bb as v,ea as u,fa as F,fb as l,gb as p,hb as h,ib as $,lb as B,ma as O,mb as H,na as A,nb as Y}from"./chunk-KA25DUZG.js";import"./chunk-CQCHLVVT.js";var M=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["portfolio-layout-page"]],decls:6,vars:0,consts:[[1,"grid","grid-cols-1","sm:grid-cols-12","h-screen"],[1,"sm:col-span-3","p-0","h-full","flex","flex-col"],[1,"top-0","h-full"],[1,"sm:col-span-9","p-0","h-full","bg-slate-300","text-white","sm:overflow-y-auto"]],template:function(r,c){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),m(3,"shared-sidebar"),i()(),n(4,"div",3),m(5,"router-outlet"),i()())}});let t=e;return t})();var be=t=>["/portfolio/project/",t];function ye(t,e){if(t&1&&(n(0,"div",4)(1,"div",5),m(2,"img",6),i(),n(3,"div",7)(4,"h3",8),l(5),i(),n(6,"p",9),l(7),i(),n(8,"a",10),l(9," Ver m\xE1s "),i()()()),t&2){let s=e.$implicit;a(2),d("src",s.imageUrl,j)("alt",s.title),a(3),p(s.title.toUpperCase()),a(2),p(s.companyName),a(),d("routerLink",Y(5,be,s.id))}}var me=(()=>{let e=class e{constructor(o){this.firestore=o,this.title="proyectos",this.projects=[],this.firestoreService=new S(this.firestore),this.firestoreService.setCollection("projects")}ngOnInit(){this.firestoreService.getDocuments().subscribe({next:o=>{this.projects=o},error:o=>{console.error("Error loading projects:",o)}})}};e.\u0275fac=function(r){return new(r||e)(g(C))},e.\u0275cmp=u({type:e,selectors:[["portfolio-projects-page"]],decls:4,vars:2,consts:[[3,"title"],[1,"m-3"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-2","xl:grid-cols-3","gap-4"],["class","bg-blue-950 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105",4,"ngFor","ngForOf"],[1,"bg-blue-950","rounded-lg","shadow-md","overflow-hidden","transition","duration-300","transform","hover:scale-105"],[1,"overflow-hidden","rounded-lg","w-full","h-52","rounded-b-none","border-blue-950","border-2"],[1,"w-full","h-full","object-cover","object-center",3,"src","alt"],[1,"p-3"],[1,"text-lg","font-semibold","mb-1"],[1,"text-gray-400","mb-2"],[1,"text-blue-300","font-semibold","hover:text-blue-700",3,"routerLink"]],template:function(r,c){r&1&&(m(0,"shared-head",0),n(1,"div",1)(2,"div",2),f(3,ye,10,7,"div",3),i()()),r&2&&(d("title",c.title),a(3),d("ngForOf",c.projects))},dependencies:[x,k,b],styles:[".img[_ngcontent-%COMP%]{width:100px;height:100px}"]});let t=e;return t})();var D=(()=>{let e=class e{constructor(){}getIconForTechnology(o){switch(o){case"Spring Boot":case"Microservicios":case"REST API":return"fab fa-java";case"Node js":return"fa-brands fa-node";case"Nest js":return"fa-brands fa-node-js";case"React":return"fa-brands fa-react";case"Angular":return"fab fa-js";case"MongoDB":case"Firestore":case"BigQuery":return"fas fa-database";case"Bootstrap":case"Tailwind CSS":case"Material UI":case"Ant Design":return"fab fa-css3-alt";case"Storybook":case"Angular Material":case"PrimeNG":return"fas fa-book-open";case"PostgreSQL":return"fa-sharp fa-solid fa-database";case"SQL MySQL":case"SQLServer":return"fas fa-database";case"Patrones de dise\xF1o":return"fas fa-paint-brush";case"Sistema de dise\xF1o":return"fas fa-layer-group";case"Docker":return"fab fa-docker";case"Git":case"Github":case"Gitlab":return"fab fa-git-alt";case"Git flow":case"Trunk base":return"fas fa-code-branch";case"Google Cloud Platform (GCP)":return"fa-brands fa-google";case"Azure":return"fa-regular fa-cloud";case"AWS":return"fa-solid fa-cloud";default:return"fas fa-code"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ce=()=>["/portfolio/projects/"];function Se(t,e){if(t&1&&m(0,"img",13),t&2){let s=v();d("src",s.project.views[s.currentIndex].src,j)("alt",s.project.views[s.currentIndex].description)}}function Ie(t,e){if(t&1){let s=G();n(0,"div",14)(1,"button",15),I("click",function(){O(s);let r=v();return A(r.previousImage())}),l(2," \u276E "),i(),n(3,"button",15),I("click",function(){O(s);let r=v();return A(r.nextImage())}),l(4," \u276F "),i()()}}function Ee(t,e){if(t&1&&(n(0,"span",16),m(1,"i"),l(2),i()),t&2){let s=e.$implicit,o=v();a(),_("",o.getIconForName(s)," text-xl mr-2"),a(),h(" ",s," ")}}var fe=(()=>{let e=class e{constructor(o,r,c,R){this.activatedRoute=o,this.firestore=r,this.router=c,this.iconServicesTsService=R,this.title="Proyect",this.id=0,this.project={title:"",description:"",imageUrl:"",companyName:"",position:"",client:"",technologies:[],views:[]},this.currentIndex=0,this.firestoreService=new S(this.firestore),this.firestoreService.setCollection("projects")}ngOnInit(){this.activatedRoute.params.pipe(L(({id:o})=>this.firestoreService.getDocumentById(o))).subscribe(o=>{if(!o){this.router.navigateByUrl("portfolio/projects");return}this.project=o})}getIconForName(o){return this.iconServicesTsService.getIconForTechnology(o)}nextImage(){this.currentIndex<this.project.views.length-1?this.currentIndex++:this.currentIndex=0}previousImage(){this.currentIndex>0?this.currentIndex--:this.currentIndex=this.project.views.length-1}};e.\u0275fac=function(r){return new(r||e)(g(K),g(C),g(J),g(D))},e.\u0275cmp=u({type:e,selectors:[["portfolio-project-page"]],decls:31,vars:10,consts:[[1,"m-3"],[1,"background-class","rounded-xl","shadow-md","overflow-hidden","w-full","h-full"],[1,"flex","flex-col","items-center","w-full","rounded-b-lg"],[1,"relative","w-full","overflow-hidden"],["class","w-full object-cover rounded-b-0 shadow-xl",3,"src","alt",4,"ngIf"],["class","absolute inset-0 flex items-center justify-between",4,"ngIf"],[1,"p-6"],[1,"text-xl","font-bold"],[1,"mt-2"],[1,"mt-3"],[1,"flex","flex-wrap"],["class","flex items-center font-semibold text-sm text-blue-600 bg-blue-100 rounded-full m-2 px-2",4,"ngFor","ngForOf"],[1,"mt-4","inline-block","bg-blue-500","hover:bg-blue-700","text-white","py-1","px-2","rounded-lg",3,"routerLink"],[1,"w-full","object-cover","rounded-b-0","shadow-xl",3,"src","alt"],[1,"absolute","inset-0","flex","items-center","justify-between"],[1,"p-2","text-white","bg-black","bg-opacity-50","hover:bg-opacity-75",3,"click"],[1,"flex","items-center","font-semibold","text-sm","text-blue-600","bg-blue-100","rounded-full","m-2","px-2"]],template:function(r,c){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),f(4,Se,1,2,"img",4)(5,Ie,5,0,"div",5),i()(),n(6,"div",6)(7,"h2",7),l(8),i(),n(9,"p",8),l(10),i(),n(11,"div",9)(12,"p")(13,"strong"),l(14,"Empresa:"),i(),l(15),i(),n(16,"p")(17,"strong"),l(18,"Cargo:"),i(),l(19),i(),n(20,"p")(21,"strong"),l(22,"Cliente:"),i(),l(23),i(),n(24,"p")(25,"strong"),l(26,"Tecnolog\xEDas:"),i()(),n(27,"div",10),f(28,Ee,3,4,"span",11),i()(),n(29,"a",12),l(30," Atr\xE1s "),i()()()()),r&2&&(a(4),d("ngIf",c.project.views[c.currentIndex]&&c.project.views[c.currentIndex].src),a(),d("ngIf",c.project.views.length>1),a(3),p(c.project.title.toUpperCase()),a(2),p(c.project.description),a(5),h(" ",c.project.companyName,""),a(4),h(" ",c.project.position,""),a(4),h(" ",c.project.client,""),a(5),d("ngForOf",c.project.technologies),a(),d("routerLink",H(9,Ce)))},dependencies:[x,P,k],styles:[".imagen[_ngcontent-%COMP%]{width:100%;height:600px;object-fit:cover;object-position:center}"]});let t=e;return t})();function we(t,e){if(t&1&&(n(0,"span",11),m(1,"i"),l(2),i()),t&2){let s=e.$implicit,o=v(2);a(),_("",o.getIconForName(s)," mr-1"),a(),h(" ",s," ")}}function Fe(t,e){if(t&1&&(n(0,"div",4)(1,"div",5)(2,"div",6),m(3,"i"),i(),n(4,"div")(5,"h3",7),l(6),i(),n(7,"p",8),l(8),i(),n(9,"div",9),f(10,we,3,4,"span",10),i()()()()),t&2){let s=e.$implicit;a(3),U(s.icon),a(3),p(s.title.toUpperCase()),a(2),p(s.description),a(2),d("ngForOf",s.technologies)}}var ue=(()=>{let e=class e{constructor(o,r){this.firestore=o,this.iconServicesTsService=r,this.title="Habilidades",this.skills=[],this.firestoreService=new S(this.firestore),this.firestoreService.setCollection("skills")}ngOnInit(){this.firestoreService.getDocuments().subscribe({next:o=>{this.skills=o},error:o=>{console.error("Error loading projects:",o)}})}getIconForName(o){return this.iconServicesTsService.getIconForTechnology(o)}};e.\u0275fac=function(r){return new(r||e)(g(C),g(D))},e.\u0275cmp=u({type:e,selectors:[["portfolio-skills-page"]],decls:4,vars:2,consts:[[3,"title"],[1,"m-3"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","lg:grid-cols-2","xl:grid-cols-3","gap-4"],["class","bg-blue-950 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg",4,"ngFor","ngForOf"],[1,"bg-blue-950","rounded-lg","shadow-md","overflow-hidden","transition","duration-300","transform","hover:scale-105","hover:shadow-lg"],[1,"p-2","flex","items-center"],[1,"p-2","text-blue-500","text-4xl"],[1,"text-sm","font-semibold","mb-2"],[1,"text-sm","text-gray-400","mb-2"],[1,"flex","flex-wrap"],["class","flex items-center font-semibold text-sm text-blue-600 bg-blue-100 rounded-full px-2 mr-2 m-1",4,"ngFor","ngForOf"],[1,"flex","items-center","font-semibold","text-sm","text-blue-600","bg-blue-100","rounded-full","px-2","mr-2","m-1"]],template:function(r,c){r&1&&(m(0,"shared-head",0),n(1,"div",1)(2,"div",2),f(3,Fe,11,5,"div",3),i()()),r&2&&(d("title",c.title),a(3),d("ngForOf",c.skills))},dependencies:[x,b]});let t=e;return t})();function je(t,e){if(t&1&&(n(0,"h2",16),l(1),i()),t&2){let s=v();a(),p(s.message)}}function _e(t,e){if(t&1&&(n(0,"span",17),l(1),i()),t&2){let s=v();a(),h(" ",s.getFieldError("name")," ")}}function Pe(t,e){if(t&1&&(n(0,"span",17),l(1),i()),t&2){let s=v();a(),h(" ",s.getFieldError("email")," ")}}function ke(t,e){if(t&1&&(n(0,"span",17),l(1),i()),t&2){let s=v();a(),h(" ",s.getFieldError("message")," ")}}var ge=(()=>{let e=class e{constructor(o,r){this.fb=o,this.firestore=r,this.title="contacto",this.message="Mensaje enviado correctamente",this.stateMessage=!1,this.contactForm=this.fb.group({name:["",[T.required]],email:["",[T.required]],message:["",[T.required]]}),this.firestoreService=new S(this.firestore),this.firestoreService.setCollection("contact-messages")}onSave(){if(this.contactForm.invalid){this.contactForm.markAllAsTouched();return}this.firestoreService.addDocument(this.contactForm.value)&&(this.stateMessage=!0,setTimeout(()=>{this.stateMessage=!1},5e3),this.contactForm.reset({name:"",email:"",mesage:""}))}isValidfield(o){return this.contactForm.controls[o].errors&&this.contactForm.controls[o].touched}getFieldError(o){if(!this.contactForm.controls[o])return null;let r=this.contactForm.controls[o].errors||{};for(let c of Object.keys(r))switch(c){case"required":return"Este campo es requerido";case"minlength":return`Minimo ${r.minlength.requiredLength} caracters.`;case"min":return"el valor minimo es 0"}return null}};e.\u0275fac=function(r){return new(r||e)(g(re),g(C))},e.\u0275cmp=u({type:e,selectors:[["portfolio-contact-page"]],decls:26,vars:6,consts:[[3,"title"],[1,"m-3"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-4"],[1,"bg-blue-950","shadow-lg","rounded-lg","p-6"],[1,"text-xl","font-semibold","mb-4"],["class","text-green-400 text-lg mb-1",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"mb-4"],["for","name",1,"block","text-slate-300","font-bold","mb-2"],["formControlName","name","type","text","id","name","placeholder","Nombre","required","",1,"text-black","form-input","w-full","rounded","pl-3","focus:outline-none","hover:outline-none"],["class","form-text text-danger",4,"ngIf"],["for","email",1,"block","text-slate-300","font-bold","mb-2"],["formControlName","email","type","email","id","email","placeholder","correo@example.com","required","",1,"text-black","form-input","w-full","rounded","pl-3","focus:outline-none","hover:outline-none"],["for","message",1,"block","text-slate-300","font-bold","mb-2"],["formControlName","message","id","message","rows","4","placeholder","Escribe tu mensaje aqu\xED","required","",1,"text-black","form-input","w-full","rounded","pl-3","focus:outline-none","hover:outline-none"],["type","submit",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded"],[1,"text-green-400","text-lg","mb-1"],[1,"form-text","text-danger"]],template:function(r,c){r&1&&(m(0,"shared-head",0),n(1,"div",1)(2,"div",2),m(3,"shared-contact-information"),n(4,"div",3)(5,"h2",4),l(6,"Formulario de Contacto"),i(),f(7,je,2,1,"h2",5),n(8,"form",6),I("ngSubmit",function(){return c.onSave()}),n(9,"div",7)(10,"label",8),l(11,"Nombre"),i(),m(12,"input",9),f(13,_e,2,1,"span",10),i(),n(14,"div",7)(15,"label",11),l(16,"Correo Electr\xF3nico"),i(),m(17,"input",12),f(18,Pe,2,1,"span",10),i(),n(19,"div",7)(20,"label",13),l(21,"Mensaje"),i(),m(22,"textarea",14),f(23,ke,2,1,"span",10),i(),n(24,"button",15),l(25," Enviar Mensaje "),i()()()()()),r&2&&(d("title",c.title),a(7),d("ngIf",c.stateMessage),a(),d("formGroup",c.contactForm),a(5),d("ngIf",c.isValidfield("name")),a(5),d("ngIf",c.isValidfield("email")),a(5),d("ngIf",c.isValidfield("message")))},dependencies:[P,b,se,te,X,Z,ee,ne,ie,oe]});let t=e;return t})();function Te(t,e){if(t&1&&(n(0,"p",7),l(1),i()),t&2){let s=e.$implicit;a(),p(s)}}function Me(t,e){if(t&1&&(n(0,"div",4)(1,"h3",5),l(2),i(),f(3,Te,2,1,"p",6),i()),t&2){let s=e.$implicit;a(2),p(s.title),a(),d("ngForOf",s.content)}}var ve=(()=>{let e=class e{constructor(){this.title="Experiencias",this.colaboradorInfo=[{title:"Colaborador en el desarrollo y dise\xF1o de Interfaz de Usuario:",content:["Implement\xE9 principios de dise\xF1o centrados en el usuario para mejorar la usabilidad y la experiencia del usuario.","Colabor\xE9 estrechamente con el equipo de dise\xF1o para traducir los requisitos del cliente en interfaces de usuario intuitivas y atractivas."]},{title:"Colaborador en el desarrollo de backend, API Rest y Microservicios:",content:["Desarroll\xE9 soluciones backend robustas y escalables utilizando tecnolog\xEDas modernas como [nombre de la tecnolog\xEDa].","Contribu\xED al dise\xF1o y la implementaci\xF3n de APIs RESTful y microservicios, garantizando la interoperabilidad y la eficiencia del sistema."]},{title:"Colaborador y administrador de bases de datos:",content:["Gestion\xE9 eficientemente bases de datos [nombre de la base de datos] para garantizar la integridad, seguridad y rendimiento de los datos.","Colabor\xE9 en el dise\xF1o de esquemas de bases de datos optimizados para satisfacer los requisitos del sistema y las necesidades del negocio."]},{title:"Colaborador en el desarrollo de test unitarios y pruebas de integraci\xF3n:",content:["Implement\xE9 pruebas unitarias exhaustivas para validar el funcionamiento individual de los componentes del software.","Contribu\xED al desarrollo e implementaci\xF3n de pruebas de integraci\xF3n automatizadas, garantizando la calidad y la estabilidad del sistema en su conjunto."]},{title:"Experiencia con servicios Cloud de Firestore:",content:["Desarroll\xE9 aplicaciones utilizando servicios Cloud de Firestore para gestionar bases de datos en la nube de manera eficiente y escalable.","Implement\xE9 funcionalidades avanzadas como consultas en tiempo real y sincronizaci\xF3n de datos para mejorar la experiencia del usuario."]},{title:"Experiencia con microservicios:",content:["Particip\xE9 en el dise\xF1o, desarrollo y despliegue de arquitecturas basadas en microservicios para crear sistemas modulares y escalables.","Utilic\xE9 tecnolog\xEDas como Docker y Kubernetes para gestionar y orquestar contenedores, asegurando la alta disponibilidad y el rendimiento del sistema."]},{title:"Experiencia con sistema de dise\xF1o en Storybook:",content:["Contribu\xED al desarrollo de un sistema de dise\xF1o utilizando Storybook, permitiendo la creaci\xF3n y documentaci\xF3n de componentes de manera modular y reutilizable.","Colabor\xE9 con el equipo para establecer y mantener un conjunto coherente de componentes y estilos, mejorando la consistencia y eficiencia en el desarrollo."]}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["portfolio-experience-page"]],decls:4,vars:2,consts:[[3,"title"],[1,"m-3"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-2","xl:grid-cols-3","gap-4"],["class",`bg-blue-950 rounded-lg my-3 p-3
    overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg`,4,"ngFor","ngForOf"],[1,"bg-blue-950","rounded-lg","my-3","p-3","overflow-hidden","transition","duration-300","transform","hover:scale-105","hover:shadow-lg"],[1,"text-lg","font-bold","mb-2"],["class","text-gray-300 mb-4",4,"ngFor","ngForOf"],[1,"text-gray-300","mb-4"]],template:function(r,c){r&1&&(m(0,"shared-head",0),n(1,"div",1)(2,"div",2),f(3,Me,4,2,"div",3),i()()),r&2&&(d("title",c.title),a(3),d("ngForOf",c.colaboradorInfo))},dependencies:[x,b]});let t=e;return t})();function Ne(t,e){if(t&1&&(n(0,"div",4)(1,"h2",5),l(2),i(),n(3,"p",6),l(4),i(),n(5,"p",6),l(6),i(),n(7,"p"),l(8),i()()),t&2){let s=e.$implicit;a(2),p(s.title),a(2),p(s.institution),a(2),$("",s.startYear," - ",s.endYear,""),a(2),p(s.description)}}function De(t,e){if(t&1&&(n(0,"div",4)(1,"h2",5),l(2),i(),n(3,"p",6),l(4),i()()),t&2){let s=e.$implicit;a(2),p(s.name),a(2),p(s.year)}}var he=(()=>{let e=class e{constructor(){this.title="Educaci\xF3n",this.educations=[{institution:"Intituto Profesional AIEP",startYear:2016,endYear:2018,title:"Programador Computacional",description:"Especializaci\xF3n en desarrollo de software y sistemas de informaci\xF3n."},{institution:"Intituto Profesional AIEP",startYear:2019,endYear:2020,title:"An\xE1lisis de Sistemas",description:"Especializaci\xF3n en an\xE1lisis de sistemas."}],this.certifications=[{name:"Database Administration",year:2019},{name:"SCRUM FUNDAMENTAL CERTIFIED (SFC)",year:2019}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["portfolio-education-page"]],decls:5,vars:3,consts:[[3,"title"],[1,"m-3"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["class","bg-blue-950 p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg",4,"ngFor","ngForOf"],[1,"bg-blue-950","p-4","rounded-lg","shadow-md","transition","duration-300","transform","hover:scale-105","hover:shadow-lg"],[1,"text-lg","font-semibold"],[1,"text-white"]],template:function(r,c){r&1&&(m(0,"shared-head",0),n(1,"div",1)(2,"div",2),f(3,Ne,9,5,"div",3)(4,De,5,2,"div",3),i()()),r&2&&(d("title",c.title),a(3),d("ngForOf",c.educations),a(),d("ngForOf",c.certifications))},dependencies:[x,b]});let t=e;return t})();var Oe=[{path:"",component:M,children:[{path:"projects",component:me},{path:"skills",component:ue},{path:"experience",component:ve},{path:"education",component:he},{path:"contact",component:ge},{path:"project/:id",component:fe},{path:"**",redirectTo:"projects"}]}],xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=F({type:e}),e.\u0275inj=w({imports:[q.forChild(Oe),q]});let t=e;return t})();var Et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=F({type:e}),e.\u0275inj=w({imports:[Q,xe,ce,ae]});let t=e;return t})();B(M,[W,le],[]);export{Et as PortfolioModule};
