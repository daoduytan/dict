(window["webpackJsonpreact-kit"]=window["webpackJsonpreact-kit"]||[]).push([[7],{112:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),i=a(8),c=a(18),o=a(19),s=a(16),m=a(2);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],p=t[1],d=Object(r.useState)(null),b=Object(i.a)(d,2),g=b[0],f=b[1],y=Object(r.useState)({}),w=Object(i.a)(y,2),O=w[0],h=w[1],j=Object(r.useState)({email:"",password:""}),E=Object(i.a)(j,2),v=E[0],k=E[1],P=function(e){var t=u({},v,Object(l.a)({},e.target.name,e.target.value)),a=u({},O,Object(l.a)({},e.target.name,""));h(a),k(t)},S=v.email,z=v.password;return n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=v.email,a=v.password;p(!0);var r=function(){var e={},t=v.email,a=v.password;return 0===t.length&&(e.email="Required"),0===a.length&&(e.password="Required"),a.length<8&&(e.password="Password 8 letter"),e}();Object.keys(r).length>0?(h(r),p(!1)):o.a.signInWithEmailAndPassword(t,a).then(function(){p(!1)}).catch(function(){f("User not found"),p(!1)})}},!!g&&n.a.createElement(s.a,{message:g,type:"error",onClose:function(){return f(null)}}),n.a.createElement("div",null,n.a.createElement(s.g,{placeholder:"Your email",type:"email",name:"email",size:"large",block:!0,onChange:P,value:S,label:"Email"}),O.email&&n.a.createElement(s.k,null,O.email)),n.a.createElement("div",{style:{margin:"".concat(2*m.a.size.space,"px 0")}},n.a.createElement(s.g,{type:"password",name:"password",onChange:P,size:"large",value:z,block:!0,label:"Password",placeholder:"Your password"}),O.password&&n.a.createElement(s.k,null,O.password)),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:m.a.size.space}},n.a.createElement(s.d,{htmlType:"submit",type:"primary",block:!0,size:"large",loading:a},"Submit"),n.a.createElement(c.b,{to:"/sign-up"},n.a.createElement(s.d,{block:!0,size:"large"},"Signup"))))};t.default=function(){return n.a.createElement(s.h,null,n.a.createElement("div",{style:{padding:"20px 30px",position:"fixed",top:0}},n.a.createElement(s.j,{size:30})),n.a.createElement("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:15}},n.a.createElement("div",{style:{width:"90%",maxWidth:350}},n.a.createElement("h2",{style:{marginBottom:30,fontSize:40,fontFamily:m.a.font.family.secondary}},"Wellcome back"),n.a.createElement(d,null))))}}}]);
//# sourceMappingURL=7.a475ca48.chunk.js.map