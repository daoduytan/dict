(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,n){"use strict";var a=n(44),r=n(17),o=n(45),c=n(0),l=n.n(c),i=n(46),u={authContext:n(20).b,wordContext:i.b};t.a=function(e){return function(t){return function(n){var i={};Object(o.forEach)(function(e){if(e.context){var t=e.values,n=e.context,o=Object(c.useContext)(u[n]);t.forEach(function(e){i=Object(r.a)({},i,Object(a.a)({},e,o[e]))})}},e);var d=Object(r.a)({},n,i);return l.a.createElement(t,d)}}}},138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n(17),l=n(15),i=n(7),u=n(45),d=n(8),s=n(105),p=n(21),m=n(27),f=n(25),b=n(6),y=n(37);function x(){var e=Object(i.a)(["\n  border: 1px solid ",";\n  height: 40px;\n  padding: 0 15px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background: #fff;\n"]);return x=function(){return e},e}function v(){var e=Object(i.a)(["\n  // background: ",";\n  // color: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ","px ","px\n    ","px ","px;\n"]);return v=function(){return e},e}function g(){var e=Object(i.a)(["\n  height: 70px;\n  display: flex;\n  align-items: center;\n  font-size: 25px;\n  font-weight: 700;\n  padding: 15px;\n  border-bottom: 1px solid ",";\n  font-family: ",";\n\n  span {\n    text-align: center;\n    display: inline-block;\n    width: 50px;\n    margin-right: 30px;\n    color: rgba(0, 0, 0, 0.4);\n  }\n"]);return g=function(){return e},e}var E=Object(d.b)(y.b)(g(),b.a.color.border,b.a.font.family.secondary),h=d.b.div(v(),b.a.color.primary,b.a.size.space+5,2*b.a.size.space,b.a.size.space-5,2*b.a.size.space),w=(d.b.div(x(),b.a.color.border),f.b.collection("user")),j=f.b.collection("words_done"),O=Object(s.a)([{values:["user"],context:"authContext"},{values:["updateTypeDate"],context:"wordContext"}])(function(e){var t=e.word,n=e.type,l=e.user,i=e.updateTypeDate,u=Object(a.useState)(t),d=Object(o.a)(u,2),s=d[0],f=d[1],y=l.uid;console.log("user",y);return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(E,{to:"/word/".concat(s.word),key:s.word,style:{textDecoration:s.status?"line-through":"none",color:s.status?b.a.color.primary:b.a.color.text}},r.a.createElement("span",null,s.number+1,"."),s.word),s.status&&s.type!==n&&r.a.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,padding:"0 15px",display:"flex",alignItems:"center"}},r.a.createElement(p.c,{icon:m.a.check,size:20,color:b.a.color.secondary})),s.status&&s.type===n&&r.a.createElement("div",{onClick:function(){var e=function(){return"today"===t?"day":"day"===n?"week":"week"===n?"month":"day"};w.doc(y).collection("word_today").where("word","==",s.word).get().then(function(t){if(t.empty)return null;t.forEach(function(t){w.doc(y).collection("word_today").doc(t.id).update({type:e()})})}),f(Object(c.a)({},s,{type:e()})),i(Object(c.a)({},s,{type:e()})),j.add(Object(c.a)({},t,{uid:y,type:e()}))},style:{position:"absolute",top:0,right:0,bottom:0,padding:"0 15px",display:"flex",alignItems:"center"},role:"presentation"},r.a.createElement(p.c,{icon:m.a.right,size:20,color:b.a.color.primary})))});function k(){var e=Object(i.a)(["\n  flex: 1;\n  padding: 15px 10px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n\n  color: ",";\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    right: 0;\n    display: block;\n    height: 2px;\n    background: ",";\n  }\n"]);return k=function(){return e},e}var C=d.b.div(k(),function(e){return e.active?b.a.color.primary:b.a.color.text},function(e){return e.active?b.a.color.primary:"transparent"}),z=function(e){var t=e.title,n=e.onClick,a=e.active,o=Object(l.a)(e,["title","onClick","active"]);return r.a.createElement(C,Object.assign({onClick:n,active:a},o),t)},T=function(e){return e.children},D=Object(s.a)([{values:["wordsToday"],context:"wordContext"}])(function(e){return e.wordsToday.map(function(e,t){return r.a.createElement(O,{key:e.word,word:Object(c.a)({},e,{number:t,type:e.type||"today"}),type:"today"})})}),S=function(){return r.a.createElement("div",null,"TabDay")},_=function(){return r.a.createElement("div",null,"TabWeek")},F=function(){return r.a.createElement("div",null,"TabMonth")},I=function(){var e=Object(a.useState)(1),t=Object(o.a)(e,2),n=t[0],c=t[1],l=function(e){c(Object(u.toNumber)(e.target.id))};return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",borderBottom:"1px solid #eee",background:"#fff"}},r.a.createElement(z,{title:"Today",onClick:l,id:1,active:1===n}),r.a.createElement(z,{title:"Day",onClick:l,id:2,active:2===n}),r.a.createElement(z,{title:"Week",onClick:l,id:3,active:3===n}),r.a.createElement(z,{title:"Month",onClick:l,id:4,active:4===n})),r.a.createElement("div",null,1===n&&r.a.createElement(T,null,r.a.createElement(D,null)),2===n&&r.a.createElement(T,null,r.a.createElement(S,null)),3===n&&r.a.createElement(T,null,r.a.createElement(_,null)),4===n&&r.a.createElement(T,null,r.a.createElement(F,null))))},J=Object(s.a)([{values:["user"],context:"authContext"}])(function(e){var t=e.user;return console.log("dsda",t),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,r.a.createElement("div",{style:{paddingRight:30}},r.a.createElement("h2",{style:{margin:"5px 0",fontSize:30}},"Hi, ",t.displayName),r.a.createElement("p",null,"Learn vocabulary every day")),r.a.createElement(y.b,{to:"/profile"},r.a.createElement(p.a,null))))});t.default=Object(a.memo)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(I,null))})}}]);
//# sourceMappingURL=6.f1c9ed83.chunk.js.map