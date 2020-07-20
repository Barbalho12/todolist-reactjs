(this["webpackJsonptodolist-reactjs"]=this["webpackJsonptodolist-reactjs"]||[]).push([[0],{130:function(e,t,n){e.exports=n(239)},239:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=n(13),u=n(55),l=n(278),s=n(31),p=n(32);function f(){var e=Object(s.a)(["\n  width: 100%;\n  text-align: center;\n  text-decoration: none;\n  padding-top: 10px;\n  color: #eee;\n  &:hover {\n    color: #f50057;\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(s.a)(["\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  width: 200px;\n  height: 100%;\n  background-color: #252526;\n  flex-direction: column;\n  transition: all 0.2s ease 0s;\n  &:hover {\n    width: 240px;\n  }\n"]);return m=function(){return e},e}var d=p.b.aside(m()),b=Object(p.b)(u.b)(f()),h=n(281),v=n(294),g=n(297),x=n(286),E=n(284),k=n(283),y=n(114),j=n.n(y),w=n(10),O=n.n(w),C=n(19),B="https://staging-todolist.herokuapp.com",A="".concat(B,"/tasks"),S={findAll:function(){var e=Object(C.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(A),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),findAllCompleteds:function(){var e=Object(C.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(A,"/completeds"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),findAllLefts:function(){var e=Object(C.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(A,"/lefts"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setCompleted:function(){var e=Object(C.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(A,"/").concat(t,"/set-completed/").concat(n),e.next=3,fetch(a,{method:"PUT"});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),create:function(){var e=Object(C.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(A),e.next=3,fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:t,block:{id:n.id}})});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),delete:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(A,"/").concat(t),e.next=3,fetch(n,{method:"DELETE"});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(C.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(A,"/").concat(t),e.next=3,fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getUserByEmail:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(B,"/users/by-email/").concat(t),e.next=3,fetch(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getBlocksByUserEmail:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(B,"/blocks"),e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json",user:t}});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),findAllByBlock:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(A),e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json",block:t.id}});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),findAllCompletedsByBlock:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(A,"/completeds"),e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json",block:t.id}});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),findAllLeftsByBlock:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(A,"/lefts"),e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json",block:t.id}});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createBlock:function(){var e=Object(C.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(B,"/blocks/").concat(n),e.next=3,fetch(a,{method:"POST",headers:{user:t}});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),webSocketURL:"".concat(B,"/subscribe")},T=Object(l.a)((function(e){return{bottom:{marginTop:"40px",padding:"10px"}}}));var N=function(e){var t=e.user,n=e.setBlocks,a=r.a.useState(!1),c=Object(i.a)(a,2),o=c[0],u=c[1],l=r.a.useState(""),s=Object(i.a)(l,2),p=s[0],f=s[1],m=T(),d=function(){u(!1)};return r.a.createElement("div",null,r.a.createElement(h.a,{className:m.bottom,color:"primary",onClick:function(){u(!0)}},r.a.createElement(j.a,null),"Novo bloco"),r.a.createElement(g.a,{open:o,onClose:d,"aria-labelledby":"form-dialog-title"},r.a.createElement(k.a,{id:"form-dialog-title"},"Adicionar novo bloco de tarefas"),r.a.createElement(E.a,null,r.a.createElement(v.a,{autoFocus:!0,id:"name",label:"Novo bloco",type:"text",fullWidth:!0,value:p,onChange:function(e){f(e.target.value)}})),r.a.createElement(x.a,null,r.a.createElement(h.a,{onClick:function(e){e.preventDefault(),S.createBlock(t.email,p).then((function(e){e.json().then((function(e){S.getBlocksByUserEmail(t.email).then((function(e){e.json().then((function(e){n(e),f(""),d()}))}))}))}))},color:"primary"},"Adicionar"),r.a.createElement(h.a,{onClick:d,color:"secondary"},"Cancelar"))))},I=Object(l.a)((function(e){return{list:{color:"primary",marginTop:"10px"}}})),R=function(e){var t=e.user,n=e.blocks,a=e.setBlocks,c=I();return r.a.createElement(d,null,r.a.createElement("div",{className:c.list}),n.map((function(e){return r.a.createElement(h.a,{color:"primary"},r.a.createElement(b,{key:"".concat(e.id),to:"/".concat(e.name)},e.name))})),r.a.createElement(N,{user:t,setBlocks:a}))},U=Object(l.a)((function(e){return{topRigth:{position:"absolute",right:"10px",top:"10px",display:"flex",justifyItems:"center",alignItems:"center"},name:{color:"grey"}}})),L=function(){var e=U();return r.a.createElement(h.a,{color:"primary",onClick:function(){localStorage.removeItem("@todo-app/username"),window.location.reload()},className:e.btlogout},"SAIR")},D=function(e){var t=e.user,n=U();return r.a.createElement("div",{className:n.topRigth},r.a.createElement("p",{className:n.name},t.email),r.a.createElement(L,null))},P=n(14);function W(){var e=Object(s.a)(["\n  color: #009cde;\n"]);return W=function(){return e},e}function G(){var e=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return G=function(){return e},e}var J=p.b.div(G()),z=(p.b.h1(W()),n(293)),V=Object(l.a)((function(e){return{button:{margin:"10px",width:"90%"},inputtext:{margin:"10px",width:"90%"}}})),q=function(e){var t=e.createTask,n=r.a.useState(""),a=Object(i.a)(n,2),c=a[0],o=a[1],u=V(),l=function(e){e.preventDefault(),t(c),o("")};return r.a.createElement("form",{className:u.inputtext,onSubmit:l,noValidate:!0,autoComplete:"off"},r.a.createElement(v.a,{id:"standard-basic",value:c,label:"Nova tarefa",onChange:function(e){o(e.target.value)},className:u.inputtext}),r.a.createElement(h.a,{variant:"contained",onClick:l,color:"primary",className:u.button},"ADICIONAR"))},F=n(287),H=n(288),M=n(117),K=n.n(M),Q=n(116),X=n.n(Q),Y=n(115),Z=n.n(Y),$=Object(l.a)((function(e){return{root:{width:"100%",maxWidth:360,justifyContent:"center",backgroundColor:e.palette.background.paper,padding:"10px"}}})),_=function(e){var t=e.pageValue,n=e.onPageChange,a=$();return r.a.createElement(F.a,{value:t,onChange:n,showLabels:!0,className:a.root},r.a.createElement(H.a,{label:"Todas",value:0,icon:r.a.createElement(Z.a,null)}),r.a.createElement(H.a,{label:"Pendentes",value:1,icon:r.a.createElement(X.a,null)}),r.a.createElement(H.a,{label:"Conclu\xeddas",value:2,icon:r.a.createElement(K.a,null)}))},ee=n(285),te=n(289),ne=n(290),ae=n(292),re=n(296),ce=n(291),oe=n(118),ie=n.n(oe),ue=function(e){var t=e.task,n=e.deleteAction,a=e.checkAction;return r.a.createElement(te.a,{role:void 0,dense:!0,button:!0,onClick:a(t)},r.a.createElement(ne.a,null,r.a.createElement(re.a,{edge:"start",checked:t.completed,tabIndex:t.id,disableRipple:!0})),r.a.createElement(ae.a,{id:"checkbox-description-".concat(t.id),primary:t.description}),r.a.createElement(ce.a,{edge:"end",color:"secondary","aria-label":"clear",onClick:function(){n(t.id)}},r.a.createElement(ie.a,null)))},le=Object(l.a)((function(e){return{list:{maxHeight:300,overflow:"auto",width:"100%",maxWidth:360,justifyContent:"center",backgroundColor:e.palette.background.paper,padding:"10px"}}})),se=function(e){var t=e.listItens,n=e.deleteAction,a=e.checkAction,c=le();return r.a.createElement(ee.a,{className:c.list},t.map((function(e){return r.a.createElement(ue,{task:e,key:"".concat(e.id),deleteAction:n,checkAction:a})})))},pe=n(119),fe=n.n(pe),me=function(e){var t=e.onReceive;return r.a.createElement(fe.a,{url:S.webSocketURL,topics:["/topic/tasks"],onMessage:function(e){t()}})},de=function(e){var t=e.block,n=r.a.useState(0),c=Object(i.a)(n,2),o=c[0],u=c[1],l=r.a.useState([]),s=Object(i.a)(l,2),p=s[0],f=s[1],m=0,d=function(){0===m?S.findAllByBlock(t).then((function(e){e.json().then((function(e){f(e)}))})):1===m?S.findAllLeftsByBlock(t).then((function(e){e.json().then((function(e){f(e)}))})):2===m&&S.findAllCompletedsByBlock(t).then((function(e){e.json().then((function(e){f(e)}))}))};Object(a.useEffect)((function(){d()}),[]);return r.a.createElement("div",null,r.a.createElement(q,{createTask:function(e){S.create(e,t).then((function(e){d()}))}}),r.a.createElement(se,{listItens:p,deleteAction:function(e){S.delete(e).then((function(e){d()}))},checkAction:function(e){return function(){e.completed=!e.completed,S.setCompleted(e.id,e.completed).then((function(e){d()}))}}}),r.a.createElement(me,{onReceive:d}),r.a.createElement(_,{pageValue:o,onPageChange:function(e,t){u(t),m=t,d()}}))},be=Object(l.a)((function(e){return{root:{width:"100%",maxWidth:360,justifyContent:"center",backgroundColor:e.palette.background.paper,padding:"10px"},container:{flexDirection:"column"},title:{margin:"20px",color:e.palette.primary.main}}})),he=function(e){var t=e.block,n=be();return Object(a.useEffect)((function(){console.log(t)}),[]),r.a.createElement(J,{className:n.container},r.a.createElement("h1",{className:n.title},t.name),r.a.createElement(z.a,{className:n.root},r.a.createElement(de,{block:t})))},ve=function(e){var t=e.user,n=e.blocks;return r.a.createElement(P.c,null,n.map((function(e){return r.a.createElement(P.a,{key:"".concat(e.id),path:"/".concat(e.name),render:function(t){return r.a.createElement(he,{block:e})}})})),r.a.createElement(P.a,{path:"/new",exact:!0,render:function(e){return r.a.createElement(N,{user:t,blocks:n})}}))};function ge(){var e=Object(s.a)(["\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      outline: 0;\n    }\n    html,\n    body,\n    #root {\n      height: 100%;\n    }\n    body {\n      text-rendering: optimizeLegibility !important;\n      font-family: sans-serif;\n      -webkit-font-smoothing: antialiased;\n      background: #eee;\n    }\n"]);return ge=function(){return e},e}function xe(){var e=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]);return xe=function(){return e},e}var Ee=p.b.div(xe()),ke=Object(p.a)(ge());var ye=function(e){var t=e.user,n=r.a.useState([]),c=Object(i.a)(n,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){S.getBlocksByUserEmail(t.email).then((function(e){e.json().then((function(e){console.log(e),l(e)}))}))}),[]),r.a.createElement(u.a,null,r.a.createElement(ke,null),r.a.createElement(Ee,null,r.a.createElement(R,{user:t,blocks:o,setBlocks:l}),r.a.createElement(ve,{user:t,blocks:o}),r.a.createElement(D,{user:t})))},je={center:{width:"100%",display:"flex",justifyContent:"center"},container:{display:"flex",textAlign:"center",flexDirection:"column",width:400,justifyContent:"center",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 20px",background:"rgb(255, 255, 255)",borderRadius:"4px",padding:"30px 20px"},submitButton:{height:"40px",textAlign:"center",alignItems:"center",borderRadius:"4px",fontWeight:"bold",fontSize:"14px",border:0,color:"#fff",background:"#009587",marginTop:"5px"},username:{height:"40px",padding:"0 15px",border:"1px solid #eee",borderRadius:"4px",marginBottom:"10px",color:"#444"}},we=function(){var e=r.a.useState(null),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem("@todo-app/username");null!=e&&S.getUserByEmail(e).then((function(e){e.json().then((function(e){c(e)}))}))}),[]);return null!==n?r.a.createElement(ye,{user:n}):r.a.createElement("div",{style:je.center},r.a.createElement("form",{style:je.container,onSubmit:function(e){e.preventDefault();var t=e.target.elements.username.value;S.getUserByEmail(t).then((function(e){console.log(e),e.json().then((function(e){c(e),localStorage.setItem("@todo-app/username",e.email)}))}))}},r.a.createElement("input",{style:je.username,type:"text",name:"username",placeholder:"Email do usu\xe1rio",required:!0}),r.a.createElement("button",{type:"submit",style:je.submitButton},"Entrar")))};o.a.render(r.a.createElement(we,null),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.f1ab5d29.chunk.js.map