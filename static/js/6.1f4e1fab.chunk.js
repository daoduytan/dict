(window["webpackJsonpreact-kit"]=window["webpackJsonpreact-kit"]||[]).push([[6],{111:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(0),i=n.n(r),c=n(24),o=n(90),l=n.n(o),u=n(16),s=n(6),d=n(3),f=n(4),p=n(2);function m(){var e=Object(d.a)(["\n  background: ",";\n  height: 20px;\n  width: 20px;\n  border-radius: 20px;\n  line-height: 20px;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  margin-right: 15px;\n"]);return m=function(){return e},e}function g(){var e=Object(d.a)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 15px;\n  font-size: 12px;\n  margin-top: 5px;\n"]);return g=function(){return e},e}function b(){var e=Object(d.a)(["\n  font-size: 18px;\n  font-weight: 700;\n  color: ",";\n"]);return b=function(){return e},e}function y(){var e=Object(d.a)(["\n  padding: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #eee;\n  background: #fff;\n  border-radius: 5px;\n"]);return y=function(){return e},e}function x(){var e=Object(d.a)(["\n  padding: ","px ","px;\n"]);return x=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: flex;\n  alignitems: center;\n  padding: ","px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n"]);return E=function(){return e},e}function v(){var e=Object(d.a)([""]);return v=function(){return e},e}var h=f.b.div(v()),w=(f.b.div(E(),2*p.a.size.space),f.b.div(x(),p.a.size.space,2*p.a.size.space)),j=f.b.div(y()),k=f.b.div(b(),p.a.color.primary),O=f.b.div(g()),z=f.b.div(m(),p.a.color.secondary),S=n(35);t.default=Object(S.a)([{values:["wordsToday","updateStatusWord"],context:"wordContext"}])(function(e){var t=e.match,n=e.updateStatusWord,o=e.wordsToday,d=t.params,f=Object(r.useState)(!0),m=Object(a.a)(f,2),g=m[0],b=m[1],y=Object(r.useState)(null),x=Object(a.a)(y,2),E=x[0],v=x[1];if(Object(r.useEffect)(function(){var e="https://sc5z4.sse.codesandbox.io/word/".concat(d.w);l.a.get(e).then(function(e){v(e.data),b(!1)})},[d.w]),g)return i.a.createElement(u.i,null);return console.log("data",E),i.a.createElement(u.h,null,i.a.createElement(u.e,{title:""}),i.a.createElement(h,null,d.w&&i.a.createElement("div",{style:{textAlign:"center",fontSize:40,fontWeight:700,lineHeight:1,fontFamily:p.a.font.family.secondary,margin:"0 0 ".concat(2*p.a.size.space,"px")}},d.w),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:12}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("span",{style:{marginRight:5}},"ENG:")," ",i.a.createElement(u.b,{audio:E[0].sounds[0]})),i.a.createElement("div",{style:{display:"flex",alignItems:"center",marginLeft:20}},i.a.createElement("span",{style:{marginRight:5}},"USA:")," ",i.a.createElement(u.b,{audio:E[0].sounds[1]}))),i.a.createElement(w,null,E.map(function(e){return i.a.createElement(j,{key:e.pron},i.a.createElement(k,null,e.title),i.a.createElement(O,null,e.posgram.map(function(e){return i.a.createElement("span",{key:e},e)}),i.a.createElement("span",{style:{marginLeft:10}},e.pron)),e.content.map(function(e,t){return i.a.createElement("div",{key:e.def,style:{margin:"15px 0",display:"flex"}},i.a.createElement(z,null,t+1),i.a.createElement("div",{style:{flex:1}},i.a.createElement("div",{style:{fontWeight:700,lineHeight:1.3}},e.def),i.a.createElement("div",{style:{margin:"10px 0",color:p.a.color.primary,fontWeight:700}},e.trans),i.a.createElement("div",null,i.a.createElement("b",{style:{margin:"15px 0",display:"block"}},i.a.createElement("small",null,"Example:")),e.examp.map(function(e,t){return i.a.createElement("div",{style:{marginBottom:10},key:e},"".concat(t+1,". ").concat(e))}))))}))}),function(){var e=Object(c.find)(function(e){return e.word===d.w},o);return!!e&&(!e.type||"today"===e.type)}()&&i.a.createElement(u.d,{type:"primary",block:!0,size:"large",onClick:function(){return n(d.w)}},Object(c.find)(function(e){return e.word===d.w&&!0===e.status},o)?i.a.createElement(u.f,{icon:s.a.check,color:"#fff"}):"Done"))))})}}]);
//# sourceMappingURL=6.1f4e1fab.chunk.js.map