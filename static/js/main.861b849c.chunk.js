(this["webpackJsonpreact-login-demo"]=this["webpackJsonpreact-login-demo"]||[]).push([[0],{79:function(e,t,a){e.exports=a(92)},84:function(e,t,a){},85:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(84),a(23)),l=(a(85),a(47)),s=a(27),u=a(8),m=a(141),p=a(143),d=a(140),g=a(153),h=a(138),b=a(93),f=a(154),O=a(139),E=a(59),y=a.n(E),v=a(40),w=a(58),j={LOGIN:"LOGIN",LOGOUT:"LOGOUT"};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var x=Object(w.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function N(){var e=x(),t=r.a.useContext(le).dispatch,a=r.a.useState({username:"",password:"",isSubmitting:!1,errorMessage:null}),n=Object(c.a)(a,2),o=n[0],i=n[1],l=function(e){i(S({},o,Object(u.a)({},e.target.name,e.target.value)))};return r.a.createElement(O.a,{container:!0,component:"main",className:e.root},r.a.createElement(d.a,null),r.a.createElement(O.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(O.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(m.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Log In"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),i(S({},o,{isSubmitting:!0,errorMessage:null})),setTimeout((function(){t({type:j.LOGIN,payload:{username:o.username,token:"token123"}})}),2e3)}},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoFocus:!0,value:o.username,onChange:l}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:o.password,onChange:l}),o.errorMessage&&r.a.createElement("span",null,o.errorMessage),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:o.isSubmitting},o.isSubmitting?"Loading...":"Log In"),r.a.createElement(f.a,{mt:5},r.a.createElement(k,null))))))}var C=a(3),D=a(156),I=a(146),B=a(147),L=a(142),G=a(151),W=a(148),T=a(149),z=a(152),A=a(61),M=a.n(A),U=a(64),H=a.n(U),R=a(63),Y=a.n(R),q=a(62),F=a.n(q),J=a(94),V=a(144),X=a(145),$=a(60),K=a.n($),Q=r.a.createElement("div",null,r.a.createElement(J.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(K.a,null)),r.a.createElement(X.a,{primary:"Dashboard"}))),Z=a(150),_=a(66);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ae(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ne=Object(w.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:te({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function re(){var e=ne(),t=r.a.useContext(le).dispatch,a=r.a.useState(!0),n=Object(c.a)(a,2),o=n[0],i=n[1],l=r.a.useState(null),s=Object(c.a)(l,2),u=s[0],m=s[1],p=Object(C.a)(e.paper,e.fixedHeight),g=function(){m(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(I.a,{position:"absolute",className:Object(C.a)(e.appBar,o&&e.appBarShift)},r.a.createElement(B.a,{className:e.toolbar},r.a.createElement(W.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(C.a)(e.menuButton,o&&e.menuButtonHidden)},r.a.createElement(M.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"),r.a.createElement(W.a,{color:"inherit"},r.a.createElement(T.a,{badgeContent:1,color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement(W.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement(Y.a,null)),r.a.createElement(_.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},getContentAnchorEl:null,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(u),onClose:g},r.a.createElement(Z.a,{onClick:g},"Profile"),r.a.createElement(G.a,null),r.a.createElement(Z.a,{onClick:function(e){e.preventDefault(),t({type:j.LOGOUT})}},"Logout")))),r.a.createElement(D.a,{variant:"permanent",classes:{paper:Object(C.a)(e.drawerPaper,!o&&e.drawerPaperClose)},open:o},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(W.a,{onClick:function(){i(!1)}},r.a.createElement(H.a,null))),r.a.createElement(G.a,null),r.a.createElement(L.a,null,Q),r.a.createElement(G.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(z.a,{maxWidth:"lg",className:e.container},r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(b.a,{className:p},r.a.createElement("h1",null,"Welcome Back!"))))),r.a.createElement(ae,null)))}function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ce=function(e,t){switch(t.type){case j.LOGIN:return localStorage.setItem("username",t.payload.username),localStorage.setItem("token",t.payload.token),ie({},e,{isAuthenticated:!0,username:t.payload.username,token:t.payload.token});case j.LOGOUT:return localStorage.clear(),ie({},e,{isAuthenticated:!1,username:null,token:null});default:return e}},le=r.a.createContext(),se={isAuthenticated:!1,username:null,token:null};var ue=function(){var e=r.a.useReducer(ce,se),t=Object(c.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){var e=localStorage.getItem("username"),t=localStorage.getItem("token");e&&t&&n({type:j.LOGIN,payload:{username:e,token:t}})}),[]),r.a.createElement(le.Provider,{value:{state:a,dispatch:n}},a.isAuthenticated?r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:re}),r.a.createElement(s.b,{path:"*",component:re}))):r.a.createElement(l.a,null,r.a.createElement(s.b,{exact:!0,path:"/",component:N}),r.a.createElement(s.a,{to:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.861b849c.chunk.js.map