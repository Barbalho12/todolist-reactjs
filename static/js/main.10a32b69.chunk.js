(this["webpackJsonptodolist-reactjs"]=this["webpackJsonptodolist-reactjs"]||[]).push([[0],{112:function(e,t,n){e.exports=n(221)},221:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(103),u=n(37),l=n(38);function s(){var e=Object(u.a)(["\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      outline: 0;\n    }\n    html,\n    body,\n    #root {\n      height: 100%;\n    }\n    body {\n      text-rendering: optimizeLegibility !important;\n      font-family: sans-serif;\n      -webkit-font-smoothing: antialiased;\n      background: #eee;\n    }\n"]);return s=function(){return e},e}function p(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]);return p=function(){return e},e}var f=l.b.div(p()),d=Object(l.a)(s()),m=n(16),b=n(15),h=n.n(b),v=n(29),x="https://staging-todolist.herokuapp.com/",g="".concat(x,"/tasks"),E={findAll:function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(g),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),findAllCompleteds:function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(g,"/completeds"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),findAllLefts:function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(g,"/lefts"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setCompleted:function(){var e=Object(v.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g,"/").concat(t,"/set-completed/").concat(n),e.next=3,fetch(a,{method:"PUT"});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),create:function(){var e=Object(v.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(g),e.next=3,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(v.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(g,"/").concat(t),e.next=3,fetch(n,{method:"DELETE"});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(v.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g,"/").concat(t),e.next=3,fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),webSocketURL:"".concat(x,"/subscribe")},y=n(259),k=n(263),j=n(265),w=n(266),O=n(268),C=n(275),N=n(273),S=n(267),A=n(264),L=n(99),T=n.n(L),D=n(101),I=n.n(D),J=n(100),P=n.n(J),R=n(269),U=n(270),z=n(102),B=n.n(z),W=n(272);function H(){var e=Object(u.a)(["\n  color: #009cde;\n"]);return H=function(){return e},e}function M(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return M=function(){return e},e}var V=l.b.div(M()),q=(l.b.h1(H()),n(271)),F=n(98),G=n.n(F),K=Object(y.a)((function(e){return{list:{maxHeight:300,overflow:"auto",width:"100%",maxWidth:360,justifyContent:"center",backgroundColor:e.palette.background.paper,padding:"10px"},root:{width:"100%",maxWidth:360,justifyContent:"center",backgroundColor:e.palette.background.paper,padding:"10px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},button:{margin:"10px",width:"90%"},inputtext:{margin:"10px",width:"90%"},container:{flexDirection:"column"},title:{margin:"20px",color:e.palette.primary.main}}})),Q=!0;function X(){var e=K(),t=r.a.useState(),n=Object(m.a)(t,2),a=n[0],c=n[1],o=r.a.useState(0),i=Object(m.a)(o,2),u=i[0],l=i[1],s=r.a.useState([]),p=Object(m.a)(s,2),f=p[0],d=p[1],b=r.a.useState([]),h=Object(m.a)(b,2),v=(h[0],h[1]),x=0;function g(){0===x?E.findAll().then((function(e){e.json().then((function(e){d(e)}))})):1===x?E.findAllLefts().then((function(e){e.json().then((function(e){d(e)}))})):2===x&&E.findAllCompleteds().then((function(e){e.json().then((function(e){d(e)}))}))}Q&&(g(),c(""),Q=!1);var y=function(e){return function(){e.completed=!e.completed,E.setCompleted(e.id,e.completed).then((function(e){g()}))}},L=function(e){e.preventDefault(),E.create(a).then((function(e){c(""),g()}))};return r.a.createElement("div",null,r.a.createElement("form",{className:e.inputtext,onSubmit:L,noValidate:!0,autoComplete:"off"},r.a.createElement(W.a,{id:"standard-basic",value:a,label:"Nova tarefa",onChange:function(e){c(e.target.value)},className:e.inputtext}),r.a.createElement(A.a,{variant:"contained",onClick:L,color:"primary",className:e.button},"ADICIONAR")),r.a.createElement(k.a,{className:e.list},f.map((function(e){return r.a.createElement(j.a,{key:"checkbox-list-".concat(e.id),role:void 0,dense:!0,button:!0,onClick:y(e)},r.a.createElement(w.a,null,r.a.createElement(N.a,{edge:"start",checked:e.completed,tabIndex:e.id,disableRipple:!0})),r.a.createElement(C.a,{id:"checkbox-description-".concat(e.id),primary:e.description}),r.a.createElement(O.a,null,r.a.createElement(S.a,{edge:"end",color:"secondary","aria-label":"clear",onClick:function(){var t;t=e.id,E.delete(t).then((function(e){g()}))}},r.a.createElement(T.a,null))))}))),r.a.createElement(R.a,{value:u,onChange:function(e,t){l(t),x=t,g()},showLabels:!0,className:e.root},r.a.createElement(U.a,{label:"Todas",value:0,icon:r.a.createElement(P.a,null)}),r.a.createElement(U.a,{label:"Pendentes",value:1,icon:r.a.createElement(I.a,null)}),r.a.createElement(U.a,{label:"Conclu\xeddas",value:2,icon:r.a.createElement(B.a,null)})),r.a.createElement(G.a,{url:E.webSocketURL,topics:["/topic/tasks"],onMessage:function(e){g()},ref:function(e){v(e)}}))}var Y=function(){var e=K();return r.a.createElement(V,{className:e.container},r.a.createElement("h1",{className:e.title},"TODO List"),r.a.createElement(q.a,{className:e.root},r.a.createElement(X,null)))};var Z=function(){return r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(f,null,r.a.createElement(Y,null)))};o.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.10a32b69.chunk.js.map