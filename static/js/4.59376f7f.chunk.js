(window["webpackJsonpreact-kit"]=window["webpackJsonpreact-kit"]||[]).push([[4],{78:function(e,t,n){"use strict";var r=n(16),a=n(34),o=n(0),c=n.n(o),i=n(35),l={authContext:n(17).b,wordContext:i.b};function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t.a=function(e){return function(t){return function(n){var i={};Object(a.forEach)(function(e){if(e.context){var t=e.values,n=e.context,a=Object(o.useContext)(l[n]);t.forEach(function(e){i=p({},i,Object(r.a)({},e,a[e]))})}},e);var u=p({},n,{},i);return c.a.createElement(t,u)}}}},79:function(e,t,n){"use strict";var r=n(16),a=n(8),o=n(0),c=n.n(o),i=n(81),l=n.n(i),u=n(20),p=n(13),s=n(12),f=n(2),d=n(80),y=n(78);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=s.b.collection("user"),g=s.b.collection("words_done"),v=function(e){return"today"===e?"day":"day"===e?"week":"week"===e?"month":"day"};t.a=Object(y.a)([{values:["user"],context:"authContext"},{values:["updateTypeDate"],context:"wordContext"}])(function(e){var t=e.word,n=e.type,r=e.user,i=e.updateTypeDate,s=Object(o.useState)(t),y=Object(a.a)(s,2),m=y[0],w=y[1],h=r.uid;return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement(d.b,{to:"/word/".concat(m.word),key:m.word,style:{color:m.status?f.a.color.primary:f.a.color.text}},c.a.createElement("span",null,m.number+1,"."),c.a.createElement("div",{style:{flex:1,display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:50}},m.word,m.day&&Date.now()-m.day+6048e5>0&&c.a.createElement("div",{style:{color:f.a.color.text,fontSize:14,fontStyle:"italic",fontWeight:600,fontFamily:f.a.font.family.primary}},l()(Date.now()).to(l()(m.day+6048e5))),m.day&&Date.now()-m.day+6048e5<0&&c.a.createElement("div",{style:{color:"red",fontSize:16,fontWeight:400,fontFamily:f.a.font.family.primary}},"Time out"))),m.status&&m.type!==n&&c.a.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,padding:"0 15px",display:"flex",alignItems:"center"}},c.a.createElement(u.f,{icon:p.a.check,size:20,color:f.a.color.secondary})),m.status&&m.type===n&&"month"!==m.type&&c.a.createElement("div",{onClick:function(){O.doc(h).collection("word_today").where("word","==",m.word).get().then(function(e){return e.empty?null:e.forEach(function(e){O.doc(h).collection("word_today").doc(e.id).update({type:v(n)})})}),w(b({},m,{type:v(n)})),i(b({},m,{type:v(n)})),"today"===n?g.add(b({},t,{uid:h,type:v(n)})):g.where("uid","==",r.uid).where("id","==",t.id).get().then(function(e){return e.empty?null:e.forEach(function(e){g.doc(e.id).update({type:v(n)})})})},style:{position:"absolute",top:0,right:0,bottom:0,padding:"0 15px",display:"flex",alignItems:"center"},role:"presentation"},c.a.createElement(u.f,{icon:p.a.right,size:20,color:f.a.color.primary})))})},80:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"a",function(){return s});var r=n(3),a=n(4),o=n(23),c=n(2);function i(){var e=Object(r.a)(["\n  border: 1px solid ",";\n  height: 40px;\n  padding: 0 15px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background: #fff;\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  padding: ","px ","px\n    ","px ","px;\n"]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  font-size: 25px;\n  font-weight: 700;\n  padding: 15px;\n  border-bottom: 1px solid ",";\n  font-family: ",";\n\n  span {\n    text-align: center;\n    display: inline-block;\n    width: 50px;\n    margin-right: 15px;\n    color: rgba(0, 0, 0, 0.4);\n  }\n"]);return u=function(){return e},e}var p=Object(a.b)(o.b)(u(),c.a.color.border,c.a.font.family.secondary),s=a.b.div(l(),2*c.a.size.space,2*c.a.size.space,c.a.size.space,2*c.a.size.space);a.b.div(i(),c.a.color.border)},82:function(e,t,n){e.exports=n.p+"static/media/notfound.ccdb678f.jpg"},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),c=n(8),i=n(16),l=n(14),u=n(3),p=n(34),s=n(15),f=n(4),d=n(78),y=n(79),m=n(2),b=n(26),O=Object(r.memo)(function(){return a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"70px 0"}},a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",{src:b.d,alt:"",style:{width:150}}),a.a.createElement("div",{style:{fontSize:25,fontWeight:600,marginTop:1.5*m.a.size.space,fontFamily:m.a.font.family.secondary}},"No word")))});function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=Object(d.a)([{values:["words_done"],context:"wordContext"}])(function(e){var t=e.words_done.filter(function(e){return"day"===e.type});return 0===t.length?a.a.createElement(O,null):t.map(function(e,t){return a.a.createElement(y.a,{key:e.word,word:v({},e,{number:t,type:"day"}),type:"day"})})});function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=Object(d.a)([{values:["words_done"],context:"wordContext"}])(function(e){var t=e.words_done.filter(function(e){return"week"===e.type});return 0===t.length?a.a.createElement(O,null):t.map(function(e,t){return a.a.createElement(y.a,{key:e.word,word:j({},e,{number:t,type:"week"}),type:"week"})})});function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=Object(d.a)([{values:["words_done"],context:"wordContext"}])(function(e){var t=e.words_done.filter(function(e){return"month"===e.type});return 0===t.length?a.a.createElement(O,null):t.map(function(e,t){return a.a.createElement(y.a,{key:e.word,word:k({},e,{number:t,type:"month"}),type:"month"})})}),D=n(82),C=n.n(D),S=function(){return a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"calc(100vh - 178px - 55px - 60px)"}},a.a.createElement("img",{src:C.a,alt:"",style:{display:"block",width:"80%"}}))};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-bottom: 1px solid #ddd;\n  background: #fff;\n  width: 100%;\n  z-index: 100;\n  transition: all 0.3s cubic-bezier(0.63, -0.33, 0.37, 1.36);\n"]);return N=function(){return e},e}function T(){var e=Object(u.a)(["\n  height: 3px;\n  width: ",";\n  transition: all 0.3s cubic-bezier(0.63, -0.33, 0.37, 1.36);\n  background: ",";\n  position: absolute;\n  bottom: -1px;\n  z-isndex: 10;\n  transform: ",";\n"]);return T=function(){return e},e}function F(){var e=Object(u.a)(["\n  flex: 1;\n  padding: 15px 10px;\n  text-align: center;\n  font-weight: 700;\n  // text-transform: uppercase;\n  position: relative;\n\n  color: ",";\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    right: 0;\n    display: block;\n    height: 2px;\n    background: ",";\n  }\n"]);return F=function(){return e},e}var W=f.b.div(F(),function(e){return e.active?m.a.color.primary:m.a.color.text},function(e){e.active;return"transparent"}),I=f.b.div(T(),function(e){var t=e.number;return"".concat(100/t,"%")},m.a.color.primary,function(e){var t=e.active;return"translateX(".concat(100*(t-1),"%)")}),Y=f.b.div(N()),H=function(e){var t=e.title,n=e.onClick,r=e.active,o=Object(l.a)(e,["title","onClick","active"]);return a.a.createElement(W,Object.assign({onClick:n,active:r},o),t)},M=function(e){return e.children},A=Object(d.a)([{values:["wordsToday","reload"],context:"wordContext"}])(function(e){var t=e.wordsToday,n=e.reload,r=Object(p.find)(function(e){return!1===e.status},t);return a.a.createElement(a.a.Fragment,null,t.map(function(e,t){return a.a.createElement(y.a,{key:e.word,word:_({},e,{number:t,type:e.type||"today"}),type:"today"})}),!r&&a.a.createElement("div",{style:{margin:30}},a.a.createElement(o.d,{type:"primary",size:"large",block:!0,onClick:n},"Load more")))}),L=[{number:1,id:"today",component:A},{number:2,id:"day",component:w},{number:3,id:"week",component:x},{number:4,id:"month",component:P}],R=Object(s.g)(function(e){var t=e.match,n=e.history,o=t.params,i=Object(r.useState)(o.params||"today"),l=Object(c.a)(i,2),u=l[0],s=l[1],f=Object(r.useState)(!1),d=Object(c.a)(f,2),y=d[0],m=d[1],b=Object(r.useRef)(),O=function(e){n.push("/main/".concat(e.target.id)),s(e.target.id)},g=function(){return window.scrollY>=b.current.offsetTop-52?m(!0):m(!1)};Object(r.useEffect)(function(){return window.addEventListener("scroll",g),function(){window.removeEventListener("scroll",g)}},[]);var v=function(e){if(!e)return L[0].number;var t=Object(p.find)(function(t){return t.id===e},L);return t?t.number:null}(o.params);return a.a.createElement("div",null,a.a.createElement(Y,{style:{position:y?"fixed":"relative",top:y?"0":"auto"}},a.a.createElement(I,{active:v,number:4}),a.a.createElement(H,{title:"Today",onClick:O,id:"today",active:"today"===u}),a.a.createElement(H,{title:"Day",onClick:O,id:"day",active:"day"===u}),a.a.createElement(H,{title:"Week",onClick:O,id:"week",active:"week"===u}),a.a.createElement(H,{title:"Month",onClick:O,id:"month",active:"month"===u})),a.a.createElement("div",{ref:b},"today"===u&&a.a.createElement(M,{className:"tab"},a.a.createElement(A,null)),"day"===u&&a.a.createElement(M,{className:"tab"},a.a.createElement(w,null)),"week"===u&&a.a.createElement(M,{className:"tab"},a.a.createElement(x,null)),"month"===u&&a.a.createElement(M,{className:"tab"},a.a.createElement(P,null)),!v&&a.a.createElement(M,{className:"tab"},a.a.createElement(S,null))))}),J=n(23),X=n(81),q=n.n(X),B=n(80),G=Object(d.a)([{values:["user"],context:"authContext"}])(function(e){var t=e.user;return a.a.createElement(a.a.Fragment,null,a.a.createElement(B.a,null,a.a.createElement("div",{style:{paddingRight:30}},a.a.createElement("h2",{style:{margin:"5px 0 0",fontSize:30,fontFamily:m.a.font.family.secondary}},"Hi, ",t.displayName),a.a.createElement("small",{style:{color:m.a.color.primary}},"Date: ",q()(new Date).format("DD-MM-YYYY")),a.a.createElement("p",{style:{lineHeight:1.5,fontSize:17,fontWeight:600}},"10 vocabulary for today")),a.a.createElement(J.b,{to:"/profile"},a.a.createElement(o.c,null))))}),K=n(13);function Q(){var e=Object(u.a)(["\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding-top: 10px;\n  &.active {\n    &:before {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: '';\n      display: block;\n      height: 5px;\n      width: 10px;\n      border-radius: 0 0 5px 5px;\n      background: ",";\n    }\n  }\n\n  span {\n    display: block;\n    font-size: 10px;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-top: 7px;\n  }\n"]);return Q=function(){return e},e}function U(){var e=Object(u.a)(["\n  display: grid;\n  background: #fff;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  grid-template-columns: repeat(3, 1fr);\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);\n"]);return U=function(){return e},e}var V=f.b.div(U()),Z=f.b.div(Q(),m.a.color.primary),$=Object(s.g)(function(e){var t=e.icon,n=e.path,r=e.title;return-1!==e.history.location.pathname.indexOf(n)?a.a.createElement(Z,{className:"active"},a.a.createElement(o.f,{icon:t,color:m.a.color.primary}),a.a.createElement("span",{style:{color:m.a.color.primary}},r)):a.a.createElement(J.b,{to:n},a.a.createElement(Z,null,a.a.createElement(o.f,{icon:t,color:m.a.color.text}),a.a.createElement("span",{style:{color:m.a.color.text}},r)))}),ee=[{icon:K.a.home,title:"Home",path:"/main"},{icon:K.a.book,title:"Words",path:"/words-done"},{icon:K.a.user,title:"Me",path:"/profile"}],te=Object(d.a)([{values:["isAuth"],context:"authContext"}])(function(e){return e.isAuth?a.a.createElement(V,null,ee.map(function(e){return a.a.createElement($,Object.assign({},e,{key:e.path}))})):null});t.default=Object(r.memo)(function(){return a.a.createElement(o.h,{hasFooter:!0},a.a.createElement("div",{style:{background:"#f5f7f9",minHeight:"calc(100vh - 60px)"}},a.a.createElement(G,null),a.a.createElement(R,null)),a.a.createElement(te,null))})}}]);
//# sourceMappingURL=4.59376f7f.chunk.js.map