(this["webpackJsonpengie-agency"]=this["webpackJsonpengie-agency"]||[]).push([[0],{111:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(111),n(30)),o=n.n(s),l=n(42),u=n(51),j=n(189),d=n(177),b=n(173),p=n(185),O=n(171),h=n(174),m=n(186),g=n(61),f=n.n(g),x=n(133),v=n(172),y=n(168),w=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),k=n(84),C=n(4),S=function(e){var t=e.website,n=void 0===t?k.name:t,a=e.link,c=void 0===a?"https://www.engie.fr/":a;return Object(C.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(O.a,{color:"inherit",href:c,children:n})," ",(new Date).getFullYear(),"."]})},N=n(190),_=Object(N.a)("user/setChoice"),I=Object(N.a)("user/setSignIn"),T=Object(N.a)("user/setEmail"),A=Object(N.a)("user/setPassword"),W=Object(N.a)("user/setToken"),L=Object(N.a)("user/setUserId"),D=n(14),P=n(16);function E(){var e=w(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),g=s[0],y=s[1],k=Object(D.b)(),N=Object(P.g)(),_=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,r,i,s,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c.length>0&&g.length>0)){e.next=15;break}return(t=new Headers).append("Content-Type","application/json"),n=JSON.stringify({email:c,password:g}),a={method:"POST",headers:t,body:n,redirect:"follow"},"https://www.heroku.com/",e.next=9,fetch("".concat("https://www.heroku.com/","/auth/signup"),a);case 9:return r=e.sent,e.next=12,r.json();case 12:i=e.sent,s=i.error,l=i.token,u=i.userId,!s&&l&&u&&(k(T(c)),k(A(g)),k(I(!0)),k(W(l)),k(L(u)),N.push("/agency-collection"));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)("div",{className:e.paper,children:[Object(C.jsx)(j.a,{className:e.avatar,children:Object(C.jsx)(f.a,{})}),Object(C.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(C.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(C.jsxs)(h.a,{container:!0,spacing:2,children:[Object(C.jsx)(h.a,{item:!0,xs:12,children:Object(C.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return r(e.target.value)}})}),Object(C.jsx)(h.a,{item:!0,xs:12,children:Object(C.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return y(e.target.value)}})})]}),Object(C.jsx)(d.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:_,children:"Sign Up"}),Object(C.jsx)(h.a,{container:!0,justify:"flex-end",children:Object(C.jsx)(h.a,{item:!0,children:Object(C.jsx)(O.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(C.jsx)(m.a,{mt:5,children:Object(C.jsx)(S,{})})]})}var F=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),J=n(24),q=function(e){return e.user},z=Object(J.a)([q],(function(e){return e?e.choice:null})),V=Object(J.a)([q],(function(e){return!!e&&e.isSignIn})),B=Object(J.a)([q],(function(e){return e?e.email:null})),H=Object(J.a)([q],(function(e){return e?e.password:null})),M=Object(J.a)([q],(function(e){return e?e.token:null})),U=Object(J.a)([q],(function(e){return e?e.id:null}));function G(){var e=F(),t=Object(D.b)(),n=Object(P.g)(),a=Object(D.c)(B),c=Object(D.c)(H),r=function(){var e=Object(l.a)(o.a.mark((function e(){var r,i,s,l,u,j,d,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a.length>0&&c.length>0)){e.next=15;break}return(r=new Headers).append("Content-Type","application/json"),i=JSON.stringify({email:a,password:c}),s={method:"POST",headers:r,body:i,redirect:"follow"},"https://www.heroku.com/",e.next=9,fetch("".concat("https://www.heroku.com/","/auth/signin"),s);case 9:return l=e.sent,e.next=12,l.json();case 12:u=e.sent,j=u.error,d=u.token,b=u.userId,!j&&d&&b&&(t(I(!0)),t(W(d)),t(L(b)),n.push("/agency-collection"));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)("div",{className:e.paper,children:[Object(C.jsx)(j.a,{className:e.avatar,children:Object(C.jsx)(f.a,{})}),Object(C.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(C.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(C.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"cy_email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){t(T(e.target.value))},defaultValue:a}),Object(C.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"Password",label:"Password",type:"password",id:"cy_password",autoComplete:"current-password",onChange:function(e){t(A(e.target.value))},defaultValue:c}),Object(C.jsx)(d.a,{id:"cy_submitSignin",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:r,children:"Sign In"}),Object(C.jsx)(h.a,{container:!0,children:Object(C.jsx)(h.a,{item:!0,children:Object(C.jsx)(O.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(C.jsx)(m.a,{mt:8,children:Object(C.jsx)(S,{})})]})}var Y=n(12),K=n(188),Q=function(e){return e.agencies},R=Object(J.a)([Q],(function(e){return e?e.data:[]})),X=Object(J.a)([Q],(function(e){return!!e&&e.loaded})),Z=Object(J.a)([Q],(function(e){return!!e&&e.isLoading})),$=n(44);function ee(){var e=Object($.a)(),t=Object(D.c)(R),n=Object(D.b)();return Object(C.jsx)(K.a,{onChange:function(e,a){t&&n(_(a))},id:"cy-agency-label",options:t?Object.values(t):[{Nom:"Agency"}],getOptionLabel:function(e){return e.Nom},style:{width:300,margin:"".concat(e.spacing(1),"px 0px")},renderInput:function(e){return Object(C.jsx)(p.a,Object(Y.a)(Object(Y.a)({},e),{},{label:"Agence",variant:"outlined"}))}})}var te=n(181),ne=n(183),ae=n(180),ce=n(182),re=n(179),ie=n(176),se=n(5),oe=n(178),le=Object(se.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},body:{fontSize:14}}}))(oe.a),ue=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(re.a),je=Object(y.a)({table:{minWidth:500}});function de(){var e=je(),t=Object(D.c)(z);return t?Object(C.jsx)(ae.a,{component:ie.a,children:Object(C.jsxs)(te.a,{className:e.table,"aria-label":"customized table",children:[Object(C.jsx)(ce.a,{children:Object(C.jsx)(re.a,{children:Object.keys(t).map((function(e){return"_id"===e?null:Object(C.jsx)(le,{children:e},e)}))})}),Object(C.jsx)(ne.a,{children:Object(C.jsx)(ue,{children:Object.entries(t).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"_id"===n?null:Object(C.jsx)(le,{children:a},a)}))})})]})}):null}var be=Object(y.a)((function(e){return{root:{margin:e.spacing(1)}}})),pe=Object(N.a)("agencies/setData"),Oe=Object(N.a)("agencies/setLoaded"),he=Object(N.a)("agencies/setIsLoading"),me=n(184),ge=Object(y.a)((function(e){return{loaderContainer:{position:"absolute",left:"50%",top:"50%",webkitTransform:"translate(-50%, -50%)",transform:"translate(-50%, -50%)",width:"100vw",textAlign:"center"}}})),fe=function(e){e.text;var t=ge();return Object(C.jsx)("div",{className:t.loaderContainer,children:Object(C.jsx)(me.a,{size:60})})};function xe(){var e=be(),t=Object(D.b)(),n=Object(D.c)(X),c=Object(D.c)(Z),r=Object(D.c)(M),i=Object(D.c)(U);return Object(a.useEffect)((function(){!1===n&&!1===c&&function(){var e=Object(l.a)(o.a.mark((function e(){var n,a,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(he(!0)),e.prev=1,(n=new Headers).append("Authorization","Bearer ".concat(r)),n.append("userid",i),a={headers:n,method:"GET",redirect:"follow"},"https://www.heroku.com/",e.next=9,fetch("".concat("https://www.heroku.com/","/agency/retriveAll"),a);case 9:return c=e.sent,e.next=12,c.json();case 12:s=e.sent,l=s.agencies,t(pe(l)),t(Oe(!0)),t(he(!1)),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}()()})),Object(D.c)(Z)?Object(C.jsx)(fe,{}):Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(d.a,{id:"cy_logout",variant:"contained",color:"secondary",onClick:function(e){e.preventDefault(),t(I(!1))},children:"Logout"}),Object(C.jsx)(ee,{}),Object(C.jsx)(de,{})]})}var ve=n(57),ye=function(){var e=Object(D.c)(V);return Object(C.jsx)(ve.a,{children:Object(C.jsx)(v.a,{maxWidth:"lg",children:Object(C.jsxs)(P.d,{children:[Object(C.jsx)(P.b,{exact:!0,path:"/",children:e?Object(C.jsx)(xe,{}):Object(C.jsx)(P.a,{to:"/signin"})}),Object(C.jsx)(P.b,{exact:!0,path:"/signin",component:G}),Object(C.jsx)(P.b,{exact:!0,path:"/signup",component:E}),Object(C.jsx)(P.b,{exact:!0,path:"/agency-collection",children:e?Object(C.jsx)(xe,{}):Object(C.jsx)(P.a,{to:"/signin"})})]})})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},ke=n(88),Ce=n(23),Se=n(48),Ne=(n(128),n(63)),_e=n.n(Ne),Ie=n(187),Te=Object(Ie.a)(new Map([[_,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{choice:t.payload})}],[I,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{isSignIn:t.payload})}],[T,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{email:t.payload})}],[A,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{password:t.payload})}],[W,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{token:t.payload})}],[L,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{id:t.payload})}]]),{choice:null,isSignIn:!1,email:null,password:null,token:null,id:null}),Ae=n(90),We=Object(Ie.a)(new Map([[pe,function(e,t){var n=t.payload,a={};return n.forEach((function(e){e.__v;var t=Object(Ae.a)(e,["__v"]);a[t._id]=t})),Object(Y.a)(Object(Y.a)({},e),{},{data:a})}],[Oe,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{loaded:t.payload})}],[he,function(e,t){return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:t.payload})}]]),{loaded:!1,isLoading:!1,data:{}}),Le={key:"root",storage:_e.a,whitelist:["user","agencies"]},De={key:"user",storage:_e.a},Pe={key:"agencies",storage:_e.a},Ee=Object(Ce.c)({user:Object(Se.a)(De,Te),agencies:Object(Se.a)(Pe,We)}),Fe=Object(Se.a)(Le,Ee),Je=[n(89).a],qe=Object(Ce.d)(Fe,Ce.a.apply(void 0,Je)),ze=Object(Se.b)(qe);i.a.render(Object(C.jsxs)(D.a,{store:qe,children:[Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(ke.a,{persistor:ze,children:Object(C.jsx)(ye,{})})})," "]}),document.getElementById("root")),we()},84:function(e){e.exports=JSON.parse('{"name":"engie-agency","homepage":"http://sassouiabd.github.io/engie-agency/.","version":"0.1.0","private":true,"dependencies":{"@material-ui/core":"^4.11.3","@material-ui/icons":"^4.11.2","@material-ui/lab":"^4.0.0-alpha.57","@testing-library/jest-dom":"^5.12.0","@testing-library/user-event":"^12.8.3","@types/jest":"^26.0.22","@types/node":"^12.20.10","@types/react":"^17.0.3","@types/react-dom":"^17.0.3","react":"^17.0.2","react-dom":"^17.0.2","react-redux":"^7.2.3","react-router-dom":"^5.2.0","react-scripts":"4.0.3","redux-actions":"^2.6.5","redux-logger":"^3.0.6","redux-persist":"^6.0.0","redux-thunk":"^2.3.0","reselect":"^4.0.0","typescript":"^4.2.4","web-vitals":"^1.1.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","predeploy":"npm run build","deploy":"gh-pages -d build","tul":"react-scripts test","tup":"react-scripts test --watchAll=false ","cypress_h":"cypress run --headless","cypress_i":"cypress open","test":"npm run tup && npm run cypress_h","cov":"npm test -- --coverage --watchAll=false","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@testing-library/react":"^11.2.6","cypress":"^7.1.0","gh-pages":"^3.1.0","msw":"^0.28.2"}}')}},[[131,1,2]]]);
//# sourceMappingURL=main.1e3657cf.chunk.js.map