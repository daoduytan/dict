(window["webpackJsonpreact-kit"]=window["webpackJsonpreact-kit"]||[]).push([[7],{79:function(e,t,n){"use strict";var a=n(16),r=n(34),l=n(0),c=n.n(l),o=n(35),i={authContext:n(17).b,wordContext:o.b};function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t.a=function(e){return function(t){return function(n){var o={};Object(r.forEach)(function(e){if(e.context){var t=e.values,n=e.context,r=Object(l.useContext)(i[n]);t.forEach(function(e){o=u({},o,Object(a.a)({},e,r[e]))})}},e);var s=u({},n,{},o);return c.a.createElement(t,s)}}}},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),c=n(79),o=n(2),i=n(13),s=n(36),u=n(8),m=n(3),p=n(4);function f(){var e=Object(m.a)(["\n  font-size: 20px;\n  font-family: ",";\n  margin-bottom: ","px;\n  line-height: 1.5;\n  font-weight: 600;\n"]);return f=function(){return e},e}var d=p.b.div(f(),o.a.font.family.secondary,o.a.size.space+5),b=Object(c.a)([{values:["reload"],context:"wordContext"}])(function(e){var t=e.onClick,n=e.reload,c=Object(a.useState)(!1),i=Object(u.a)(c,2),s=i[0],m=i[1],p=function(){localStorage.removeItem("words"),m(!0)};return r.a.createElement("div",{style:{textAlign:"center"}},s?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,"Cache has been reset"),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:o.a.size.space}},r.a.createElement(l.d,{onClick:t,size:"large",block:!0},"Exit"),r.a.createElement(l.d,{onClick:n,size:"large",block:!0,type:"primary"},"Reload data"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,"Do you want to clear the cache?"),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:o.a.size.space}},r.a.createElement(l.d,{onClick:t,size:"large",block:!0},"Exit"),r.a.createElement(l.d,{type:"primary",onClick:p,size:"large",block:!0},"Yes, i do"))))}),E=n(24);function g(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n  padding: ","px ","px;\n\n  .label {\n    color: #999;\n    font-weight: 600;\n  }\n\n  span:last-child {\n    font-size: 18px;\n    font-weight 700;\n    color: ","\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(m.a)(["\n  font-weight: 700;\n"]);return y=function(){return e},e}function v(){var e=Object(m.a)(["\n  overflow: hidden;\n"]);return v=function(){return e},e}function O(){var e=Object(m.a)(["\n  minheight: 150px;\n  padding-bottom: ","px;\n  display: flex;\n  align-items: center;\n  flexdirection: column;\n  justify-content: center;\n  border-bottom: 1px solid ",";\n"]);return O=function(){return e},e}var h=p.b.div(O(),o.a.size.space,o.a.color.border),j=p.b.div(v()),x=p.b.div(y()),w=Object(p.b)(E.b)(g(),o.a.color.border,1.5*o.a.size.space,2*o.a.size.space,o.a.color.primary);t.default=Object(c.a)([{values:["user","logout"],context:"authContext"}])(function(e){var t=e.user,n=e.logout;return r.a.createElement(l.h,null,r.a.createElement(s.a,{title:"Profile"}),r.a.createElement(h,null,r.a.createElement("div",{style:{marginBottom:30}},r.a.createElement(l.c,{size:100}),r.a.createElement("div",null,t.displayName))),r.a.createElement("div",null,r.a.createElement(j,null,r.a.createElement(w,{style:{background:"#f9f9f9"},to:"/profile"},r.a.createElement(x,null,"Profile"),r.a.createElement("div",null,r.a.createElement(l.f,{icon:i.a.user,size:16}))),r.a.createElement(w,{to:"/profile"},r.a.createElement("span",{className:"label"},"Display name"),r.a.createElement("span",null,t.displayName)),r.a.createElement(w,{to:"/profile"},r.a.createElement("span",{className:"label"},"Email"),r.a.createElement("span",null,t.email))),r.a.createElement(j,null,r.a.createElement(w,{style:{background:"#f9f9f9"},to:"/profile"},r.a.createElement(x,null,"Setting"),r.a.createElement("div",null,r.a.createElement(l.f,{icon:i.a.setting,size:16}))),r.a.createElement(w,{to:"setting-number"},r.a.createElement("span",{className:"label"},"Number word"),r.a.createElement("span",null,localStorage.getItem("number")||10))),r.a.createElement("div",{style:{margin:2*o.a.size.space,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:2*o.a.size.space}},r.a.createElement(l.d,{block:!0,size:"large",onClick:n},"Log out"),r.a.createElement(l.l,{label:r.a.createElement(l.d,{type:"secondary",size:"large",block:!0},"Reset cached")},r.a.createElement(b,null)))))})}}]);
//# sourceMappingURL=7.9c9bc7bf.chunk.js.map