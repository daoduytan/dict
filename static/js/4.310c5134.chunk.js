(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{107:function(e,n,t){"use strict";t.r(n);var a=t(7),r=t(0),c=t.n(r),o=t(33),i=t(85),u=t.n(i),l=t(24),f=t(16),p=t(20),d=t(4),s=t(5),m=t(2);function b(){var e=Object(d.a)(["\n  background: ",";\n  height: 20px;\n  width: 20px;\n  border-radius: 20px;\n  line-height: 20px;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  margin-right: 15px;\n"]);return b=function(){return e},e}function x(){var e=Object(d.a)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 15px;\n  font-size: 12px;\n  margin-top: 5px;\n"]);return x=function(){return e},e}function g(){var e=Object(d.a)(["\n  font-size: 18px;\n  font-weight: 700;\n  color: ",";\n"]);return g=function(){return e},e}function v(){var e=Object(d.a)(["\n  padding: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #eee;\n  background: #fff;\n  border-radius: 5px;\n"]);return v=function(){return e},e}function y(){var e=Object(d.a)(["\n  padding: ","px ","px;\n"]);return y=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: flex;\n  alignitems: center;\n  padding: ","px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n"]);return E=function(){return e},e}function w(){var e=Object(d.a)(["\n  padding-top: 60px;\n"]);return w=function(){return e},e}var h=s.b.div(w()),j=s.b.div(E(),2*m.a.size.space),O=s.b.div(y(),m.a.size.space,2*m.a.size.space),k=s.b.div(v()),z=s.b.div(g(),m.a.color.primary),S=s.b.div(x()),C=s.b.div(b(),m.a.color.secondary),W=t(76);n.default=Object(W.a)([{values:["wordsToday","updateStatusWord"],context:"wordContext"}])(function(e){var n=e.match,t=e.updateStatusWord,i=e.wordsToday,d=n.params,s=Object(r.useState)(!0),b=Object(a.a)(s,2),x=b[0],g=b[1],v=Object(r.useState)(null),y=Object(a.a)(v,2),E=y[0],w=y[1];if(Object(r.useEffect)(function(){var e="https://sc5z4.sse.codesandbox.io/word/".concat(d.w);u.a.get(e).then(function(e){w(e.data),g(!1)})},[d.w]),x)return c.a.createElement(f.e,null);return c.a.createElement(h,null,c.a.createElement(j,null,c.a.createElement(l.b,{to:"/"},c.a.createElement(f.c,{icon:p.a.back,size:20}))),d.w&&c.a.createElement("div",{style:{textAlign:"center",fontSize:30,fontWeight:400,fontFamily:m.a.font.family.secondary,margin:"".concat(m.a.size.space,"px 0 ").concat(2*m.a.size.space,"px")}},d.w),c.a.createElement(O,null,E.map(function(e){return c.a.createElement(k,{key:e.pron},c.a.createElement(z,null,e.title),c.a.createElement(S,null,e.posgram.map(function(e){return c.a.createElement("span",{key:e},e)}),c.a.createElement("span",{style:{marginLeft:10}},e.pron)),e.content.map(function(e,n){return c.a.createElement("div",{key:e.def,style:{margin:"15px 0",display:"flex"}},c.a.createElement(C,null,n+1),c.a.createElement("div",{style:{flex:1}},c.a.createElement("div",{style:{fontWeight:700,lineHeight:1.3}},e.def),c.a.createElement("div",{style:{margin:"10px 0",color:m.a.color.primary,fontWeight:700}},e.trans),c.a.createElement("div",null,c.a.createElement("b",{style:{margin:"15px 0",display:"block"}},c.a.createElement("small",null,"Example:")),e.examp.map(function(e,n){return c.a.createElement("div",{style:{marginBottom:10,fontSize:14},key:e},"".concat(n+1,". ").concat(e))}))))}))}),function(){var e=Object(o.find)(function(e){return e.word===d.w},i);return!!e&&(!e.type||"today"===e.type)}()&&c.a.createElement(f.b,{type:"primary",block:!0,size:"large",onClick:function(){return t(d.w)}},Object(o.find)(function(e){return e.word===d.w&&!0===e.status},i)?c.a.createElement(f.c,{icon:p.a.check,color:"#fff"}):"Done")))})},76:function(e,n,t){"use strict";var a=t(32),r=t(11),c=t(33),o=t(0),i=t.n(o),u=t(34),l={authContext:t(15).b,wordContext:u.b};n.a=function(e){return function(n){return function(t){var u={};Object(c.forEach)(function(e){if(e.context){var n=e.values,t=e.context,c=Object(o.useContext)(l[t]);n.forEach(function(e){u=Object(r.a)({},u,Object(a.a)({},e,c[e]))})}},e);var f=Object(r.a)({},t,u);return i.a.createElement(n,f)}}}}}]);
//# sourceMappingURL=4.310c5134.chunk.js.map