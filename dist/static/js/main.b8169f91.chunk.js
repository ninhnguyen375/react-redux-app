(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{256:function(e,t,a){e.exports=a(499)},418:function(e,t,a){},499:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(252),s=a.n(i),c=a(4),l=a(5),o=a(7),u=a(6),m=a(8),d=a(502),p=a(504),h=a(500),b=a(268),g=a(501),f=a(14),E=a(11),v=a.n(E),y=a(23),j=a(31),O=a.n(j),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isDisplay:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"hiddenSidebar",value:function(){this.setState({isDisplay:!1}),window.document.getElementsByClassName("sidenav-overlay")[0].style.display="none",this.setState({isDisplay:!0});var e=document.querySelectorAll(".sidenav");O.a.Sidenav.init(e,{edge:"left",inDuration:250})}},{key:"render",value:function(){var e=this.props,t=e.signOut,a=e.profile;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"#",className:"cursor-pointer",onClick:t},"Log Out")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/",className:"btn pink lighten-1"},a.initials))),r.a.createElement("ul",{className:this.state.isDisplay?"sidenav":"sidenav hidden",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"#",className:"cursor-pointer",onClick:t},"Log Out")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/create",onClick:this.hiddenSidebar.bind(this)},"New Project")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/",className:"btn pink lighten-1"},a.initials))))}}]),t}(n.Component),S=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{signOut:function(){return e(function(){var e=Object(y.a)(v.a.mark(function e(t,a,n){var r,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getFirebase,i=r(),e.prev=2,e.next=5,i.auth().signOut();case 5:t({type:"SIGNOUT_SUCCESS"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t({type:"SIGNOUT_FAIL"});case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t,a,n){return e.apply(this,arguments)}}())}}})(N),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isDisplay:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"hiddenSidebar",value:function(){this.setState({isDisplay:!1}),window.document.getElementsByClassName("sidenav-overlay")[0].style.display="none",this.setState({isDisplay:!0});var e=document.querySelectorAll(".sidenav");O.a.Sidenav.init(e,{edge:"left",inDuration:250})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/signin"},"Log In")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/signup"},"Sign Up"))),r.a.createElement("ul",{className:this.state.isDisplay?"sidenav":"sidenav hidden",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement(g.a,{onClick:this.hiddenSidebar.bind(this),to:"/signin"},"Log In")),r.a.createElement("li",null,r.a.createElement(g.a,{onClick:this.hiddenSidebar.bind(this),to:"/signup"},"Sign Up"))))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=document.querySelectorAll(".sidenav");O.a.Sidenav.init(e,{edge:"left",inDuration:250}),window.document.getElementsByClassName("sidenav-overlay")[0].style.display="none"}},{key:"render",value:function(){var e=this.props.auth;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement(b.a,{to:"#","data-target":"mobile-demo",className:"sidenav-trigger"},"Menu"),r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{to:"/",className:"brand-logo"},"NinhPlan"),e.isEmpty?r.a.createElement(w,null):r.a.createElement(S,null))))}}]),t}(n.Component),C=Object(f.b)(function(e){return console.log(e),{auth:e.firebase.auth}})(k),x=a(107),L=a.n(x),R=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notificationns"},e&&e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",{className:""}," ",e.content),r.a.createElement("div",{className:"grey-text note-date"},L()(e.time.toDate()).fromNow()))})))))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isHovered:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleMouseOver",value:function(){this.setState({isHovered:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isHovered:!1})}},{key:"render",value:function(){var e=this.props.project;return r.a.createElement("div",{onMouseOver:this.handleMouseOver.bind(this),onMouseLeave:this.handleMouseLeave.bind(this),className:this.state.isHovered?"card z-depth-2 project-summary":"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},e.title),r.a.createElement("p",null,"Post by ".concat(e.authorFirstName)),r.a.createElement("p",{className:"grey-text"},e.createAt)))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.projects;return r.a.createElement("div",null,r.a.createElement("div",{className:"project-list section"},e&&e.map(function(e){return r.a.createElement(b.a,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(F,{project:e}))})))}}]),t}(n.Component),I=a(32),P=a(22),U=a(503),_=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.isEmpty?r.a.createElement(U.a,{to:"/signin"}):r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(A,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(R,{notifications:n}))))}}]),t}(n.Component),D=Object(P.d)(Object(f.b)(function(e){return console.log(e),{auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,projects:e.firestore.ordered.projects}}),Object(I.firestoreConnect)([{collection:"projects",orderBy:["createAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(_),z=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.auth.isEmpty)return r.a.createElement(U.a,{to:"/signin"});var e=this.props.project;return e?r.a.createElement("div",{className:"container section project-details z-depth-2"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},e.title),r.a.createElement("p",null,e.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Post by ",e.authorFirstName," ",e.authorLastName),r.a.createElement("div",null,e.createAt)))):r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{className:"loading-image",alt:"loading...",src:"/image/Wedges-3s-200px.svg"}))}}]),t}(n.Component),G=Object(P.d)(Object(f.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(I.firestoreConnect)([{collection:"projects"}]))(z),T=a(37),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",isLoading:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"activeLoading",value:function(){this.setState({isLoading:!0})}},{key:"disableLoading",value:function(){this.setState({isLoading:!1})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeLoading(),t.preventDefault(),e.next=4,this.props.signIn(this.state);case 4:this.disableLoading();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(T.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return this.props.auth.isEmpty?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this),className:"white z-depth-2"},r.a.createElement("h5",{className:"grey-text darken-3"},"Sign In"),r.a.createElement("div",{className:"red-text center"},this.props.authError?r.a.createElement("p",null,this.props.authError.message):null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:this.handleChange.bind(this)})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",onChange:this.handleChange.bind(this)})),r.a.createElement("div",{className:"input-field"},this.state.isLoading?r.a.createElement("button",{type:"button",className:"btn pink lighten-1 z-depth-0"},r.a.createElement("img",{className:"loading-image-sm",alt:"loading...",src:"/image/Rolling-1s-200px.svg"})):r.a.createElement("button",{type:"submit",className:"btn pink lighten-1 z-depth-0"},"Login"))))):r.a.createElement(U.a,{to:"/"})}}]),t}(n.Component),M=Object(f.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(){var e=Object(y.a)(v.a.mark(function e(t,n,r){var i,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.getFirebase,s=i(),e.prev=2,e.next=5,s.auth().signInWithEmailAndPassword(a.email,a.password);case 5:t({type:"LOGIN_SUCCESS"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),t({type:"LOGIN_ERROR",err:e.t0});case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t,a,n){return e.apply(this,arguments)}}()));var a}}})(B),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",lastName:"",firstName:"",isLoading:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"activeLoading",value:function(){this.setState({isLoading:!0})}},{key:"disableLoading",value:function(){this.setState({isLoading:!1})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeLoading(),t.preventDefault(),e.next=4,this.props.signUp(this.state);case 4:this.disableLoading();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(T.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return this.props.auth.isEmpty?r.a.createElement("div",{className:"container "},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this),className:"white z-depth-2"},r.a.createElement("div",{className:"red-text center"},this.props.signupError?r.a.createElement("p",null,this.props.signupError.message):null),r.a.createElement("h5",{className:"grey-text darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:this.handleChange.bind(this),value:this.state.email})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",name:"firstName",id:"firstName",onChange:this.handleChange.bind(this),value:this.state.firstName})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",id:"lastName",onChange:this.handleChange.bind(this),value:this.state.lastName})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",onChange:this.handleChange.bind(this)})),r.a.createElement("div",{className:"input-field"},this.state.isLoading?r.a.createElement("button",{type:"button",className:"btn pink lighten-1 z-depth-0"},r.a.createElement("img",{className:"loading-image-sm",alt:"loading...",src:"/image/Rolling-1s-200px.svg"})):r.a.createElement("button",{type:"submit",className:"btn pink lighten-1 z-depth-0"},"Sign Up")))):r.a.createElement(U.a,{to:"/"})}}]),t}(n.Component),q=Object(f.b)(function(e){return{auth:e.firebase.auth,signupError:e.auth.signupError}},function(e){return{signUp:function(t){return e(function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a,n,r){var i,s,c,l,o;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.getFirebase,s=r.getFirestore,c=i(),l=s(),t.prev=3,t.next=6,c.auth().createUserWithEmailAndPassword(e.email,e.password);case 6:return o=t.sent,t.next=9,l.collection("users").doc(o.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]});case 9:a({type:"SIGNUP_SUCCESS"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),a({type:"SIGNUP_ERROR",err:t.t0});case 15:case"end":return t.stop()}},t,this,[[3,12]])}));return function(e,a,n){return t.apply(this,arguments)}}()}(t))}}})(J),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",isLoading:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"activeLoading",value:function(){this.setState({isLoading:!0})}},{key:"disableLoading",value:function(){this.setState({isLoading:!1})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeLoading(),t.preventDefault(),e.next=4,this.props.createProject(this.state);case 4:this.disableLoading(),this.props.history.push("/");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(T.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return this.props.auth.isEmpty?r.a.createElement(U.a,{to:"/signin"}):r.a.createElement("div",{className:"container "},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this),className:"white z-depth-2"},r.a.createElement("h5",{className:"grey-text darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Project Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",onChange:this.handleChange.bind(this),required:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{className:"materialize-textarea",name:"content",id:"content",onChange:this.handleChange.bind(this),required:!0})),r.a.createElement("div",{className:"input-field"},this.state.isLoading?r.a.createElement("button",{type:"button",className:"btn pink lighten-1 z-depth-0"},r.a.createElement("img",{className:"loading-image-sm",alt:"loading...",src:"/image/Rolling-1s-200px.svg"})):r.a.createElement("button",{type:"submit",className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),t}(n.Component),H=Object(f.b)(function(e){return{auth:e.firebase.auth,projectError:e.project.projectError}},function(e){return{createProject:function(t){return e(function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a,n,r){var i,s,c,l,o;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.getFirebase,i=r.getFirestore,s=i(),c=n().firebase,l=c.profile,o=c.auth,t.prev=3,t.next=6,s.collection("projects").add({title:e.title,content:e.content,authorFirstName:l.firstName,authorLastName:l.lastName,authorId:o.uid,createAt:L()().format()});case 6:a({type:"CREATE_PROJECT",project:e}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),a({type:"CREATE_PROJECT_ERROR",err:t.t0});case 12:case"end":return t.stop()}},t,this,[[3,9]])}));return function(e,a,n){return t.apply(this,arguments)}}()}(t))}}})(W),K=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:D}),r.a.createElement(h.a,{path:"/project/:id",component:G}),r.a.createElement(h.a,{path:"/signin",component:M}),r.a.createElement(h.a,{path:"/signup",component:q}),r.a.createElement(h.a,{path:"/create",component:H}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(416),a(418);var V=a(26),$={authError:null},Q={projects:[],projectError:null},X=a(74),Y=Object(P.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.err;switch(a){case"LOGIN_SUCCESS":return console.log("Login Success"),Object(V.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log(n),Object(V.a)({},e,{authError:n});case"SIGNOUT_SUCCESS":return console.log("sign out success"),Object(V.a)({},e);case"SIGNOUT_FAIL":return console.log("sign out fail"),Object(V.a)({},e);case"SIGNUP_SUCCESS":return console.log("sign up success"),Object(V.a)({},e,{signupError:null});case"SIGNUP_ERROR":return console.log("sign up error",n),Object(V.a)({},e,{signupError:n});default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=(t.project,t.err);switch(a){case"CREATE_PROJECT":return console.log("Create project success"),Object(V.a)({},e,{projectError:null});case"CREATE_PROJECT_ERROR":return console.log("Create project error",n),Object(V.a)({},e,{projectError:n});default:return e}},firestore:X.firestoreReducer,firebase:I.firebaseReducer}),Z=a(255),ee=a(166),te=a.n(ee);a(493),a(497);te.a.initializeApp({apiKey:"AIzaSyAsh3Mpk_GGRJg6_cl5aNBo02V-pEPsL7U",authDomain:"elite-totality-229311.firebaseapp.com",databaseURL:"https://elite-totality-229311.firebaseio.com",projectId:"elite-totality-229311",storageBucket:"elite-totality-229311.appspot.com",messagingSenderId:"528122939859"});var ae=te.a,ne=Object(P.e)(Y,Object(P.d)(Object(P.a)(Z.a.withExtraArgument({getFirebase:I.getFirebase,getFirestore:X.getFirestore})),Object(I.reactReduxFirebase)(ae,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(X.reduxFirestore)(ae)));ne.firebaseAuthIsReady.then(function(){s.a.render(r.a.createElement(f.a,{store:ne},r.a.createElement(K,null)),document.getElementById("root"));var e=document.querySelectorAll(".sidenav"),t=O.a.Sidenav.init(e,{edge:"left",inDuration:250});console.log(t)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[256,2,1]]]);
//# sourceMappingURL=main.b8169f91.chunk.js.map