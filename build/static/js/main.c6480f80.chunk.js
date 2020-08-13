(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(e,t,a){e.exports={form:"Registration_form__2-jzU",input:"Registration_input__2Lo63",button:"Registration_button__15LxJ"}},25:function(e,t,a){e.exports={form:"AddContact_form__8psE-",input:"AddContact_input__2AOH7",button:"AddContact_button__15pyf"}},26:function(e,t,a){e.exports={listItem:"SingleContact_listItem__1gICF",contactName:"SingleContact_contactName__3h6Cq",contactNumber:"SingleContact_contactNumber__3GECH",contactButton:"SingleContact_contactButton__3tXHI"}},27:function(e,t,a){e.exports={form:"Login_form__24Xdb",input:"Login_input__3O2sG",button:"Login_button__1-04t"}},34:function(e,t,a){e.exports={wrapper:"FilterContacts_wrapper__2rGXm",input:"FilterContacts_input__2UTnj"}},52:function(e,t,a){e.exports=a(88)},57:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),u=(a(57),a(18)),l=a(2),s=a(9),i=a.n(s),m=a(17),p=a(13),b=a.n(p),f=a(6),d=Object(f.a)("@token/set"),h=Object(f.a)("@items/get"),v=Object(f.a)("@items/add"),O=Object(f.a)("@item/delete"),j=Object(f.a)("@items/clear"),E=Object(f.a)("@user-email/set");b.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var g=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.token})),a=Object(l.c)((function(e){return e.userEmail}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"header__email"},a),r.a.createElement("p",{onClick:function(){e(function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b()({url:"/users/logout",method:"post",headers:{Authorization:"Bearer ".concat(e)}});case 3:a(j()),a(d(null)),a(E("")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},className:"header__item"},"Logout"))},_=(a(80),function(){var e=Object(l.c)((function(e){return e.token}));return r.a.createElement("ul",{className:"header__list"},e?r.a.createElement(g,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/login",className:"header__item"},"Login"),r.a.createElement(u.b,{to:"/registration",className:"header__item"},"Register")))}),N=a(3),x=a(8),w=a(19),k=a(15),y=a(21),C=a.n(y),S={name:"",email:"",password:""},A=function(){var e=Object(n.useState)(S),t=Object(k.a)(e,2),a=t[0],c=t[1],o=Object(l.b)(),u=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(x.a)({},a,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title"},"Register"),r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),o((t=a,function(){var e=Object(m.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/users/signup",t);case 3:n=e.sent,a(d(n.data.token)),a(E(n.data.user.email)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},className:C.a.form},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:a.name,onChange:u,className:C.a.input}),r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:a.email,onChange:u,className:C.a.input}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:a.password,onChange:u,className:C.a.input}),r.a.createElement("button",{type:"submit",className:C.a.button},"Submit")))},L=a(25),B=a.n(L);b.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var F=function(e){var t=e.setShowAlert,a=Object(n.useState)(""),c=Object(k.a)(a,2),o=c[0],u=c[1],s=Object(n.useState)(""),p=Object(k.a)(s,2),f=p[0],d=p[1],h=Object(l.c)((function(e){return e.items})),O=Object(l.c)((function(e){return e.token})),j=Object(l.b)();return r.a.createElement("form",{className:B.a.form,autoComplete:"off",onSubmit:function(e){return e.preventDefault(),h.find((function(e){return e.name===o}))?(t({status:!0,text:"Contact already exist"}),void setTimeout((function(){t({status:!1,text:""})}),2e3)):o.length<2?(t({status:!0,text:"Name mast content 2 characters"}),void setTimeout((function(){t({status:!1,text:""})}),2e3)):(j(function(e,t){return function(){var a=Object(m.a)(i.a.mark((function a(n){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b()({url:"/contacts",method:"post",headers:{Authorization:"Bearer ".concat(t)},data:e});case 3:r=a.sent,n(v(r.data)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}({name:o,number:f},O)),u(""),void d(""))}},r.a.createElement("input",{className:B.a.input,type:"text",name:"name",placeholder:"Name",value:o,onChange:function(e){var t=e.target;u(t.value)}}),r.a.createElement("input",{className:B.a.input,type:"text",name:"number",placeholder:"Nubmer",value:f,onChange:function(e){var t=e.target;d(t.value)}}),r.a.createElement("button",{className:B.a.button,type:"submit"},"Add contacts"))},R=a(26),I=a.n(R),z=function(e){var t=e.name,a=e.number,n=e.id,c=Object(l.b)(),o=Object(l.c)((function(e){return e.token})),u=function(e,t){c(function(e,t){return function(){var a=Object(m.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b()({url:"/contacts/".concat(e),method:"delete",headers:{Authorization:"Bearer ".concat(t)}});case 3:n(O(e)),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}(e,t))};return r.a.createElement("li",{className:I.a.listItem},r.a.createElement("p",{className:I.a.contactName},t),r.a.createElement("p",{className:I.a.contactNumber},a),r.a.createElement("button",{className:I.a.contactButton,onClick:function(){return u(n,o)}},"X"))},D=a(90),T=a(89),U=(a(82),function(){var e=Object(l.c)((function(e){return e.items})),t=Object(l.c)((function(e){return e.filter})),a=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return r.a.createElement(D.a,{component:"ul"},a.map((function(e){var t=e.name,a=e.number,n=e.id;return r.a.createElement(T.a,{key:n,timeout:250,classNames:"listItem"},r.a.createElement(z,{name:t,number:a,id:n}))})))}),X=a(34),G=a.n(X),H=Object(f.a)("@filter/edit"),J=function(){var e=Object(l.b)();return r.a.createElement("div",{className:G.a.wrapper},r.a.createElement("input",{className:G.a.input,type:"text",placeholder:"Find contacts by name",onChange:function(t){var a=t.target;e(H(a.value.toLowerCase()))}}))},P=(a(83),function(e){var t=e.showAlert;return r.a.createElement("div",{className:"alert"},t)}),q=(a(84),function(){var e=Object(n.useState)({status:!1,text:""}),t=Object(k.a)(e,2),a=t[0],c=t[1],o=Object(l.c)((function(e){return e.items}));return r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"Phonebook"),r.a.createElement(F,{setShowAlert:c}),o.length>=2&&r.a.createElement(J,null),o.length>0&&r.a.createElement(U,null),r.a.createElement(T.a,{in:a.status,timeout:250,classNames:"alert",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(P,{showAlert:a.text})))}),M=a(27),W=a.n(M),K={email:"",password:""},Q=function(){var e=Object(n.useState)(K),t=Object(k.a)(e,2),a=t[0],c=t[1],o=Object(l.b)(),u=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(x.a)({},a,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title"},"Login"),r.a.createElement("form",{className:W.a.form,onSubmit:function(e){var t;e.preventDefault(),o((t=a,function(){var e=Object(m.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/users/login",t);case 3:n=e.sent,a(d(n.data.token)),a(E(n.data.user.email)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:a.email,onChange:u,className:W.a.input}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:a.password,onChange:u,className:W.a.input}),r.a.createElement("button",{type:"submit",className:W.a.button},"Submit")))};a(85);var V,Y=function(){var e=Object(N.g)(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.token}));return Object(n.useEffect)((function(){a?(e.replace("/"),t(function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b()({url:"/contacts",method:"get",headers:{Authorization:"Bearer ".concat(e)}});case 3:n=t.sent,a(h(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a))):e.replace("/login")}),[a,e,t]),r.a.createElement("div",{className:"container"},r.a.createElement(_,null),r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/",component:q}),r.a.createElement(N.b,{exact:!0,path:"/login",component:Q}),r.a.createElement(N.b,{exact:!0,path:"/registration",component:A}),r.a.createElement(N.a,{to:"/"})))},Z=a(4),$=a(47),ee=a(49),te=Object(f.b)([],(V={},Object(x.a)(V,h,(function(e,t){return t.payload})),Object(x.a)(V,v,(function(e,t){return[].concat(Object(ee.a)(e),[t.payload])})),Object(x.a)(V,O,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(x.a)(V,j,(function(){return[]})),V)),ae=Object(f.b)("",Object(x.a)({},H,(function(e,t){return t.payload}))),ne=Object(f.b)(null,Object(x.a)({},d,(function(e,t){return t.payload}))),re=Object(f.b)("",Object(x.a)({},E,(function(e,t){return t.payload}))),ce=Object(Z.combineReducers)({items:te,filter:ae,token:ne,userEmail:re}),oe=a(23),ue=a(35),le=a(48),se={key:"user",storage:a.n(le).a,whitelist:["token","userEmail"]},ie=Object(ue.a)(se,ce),me=Object(Z.createStore)(ie,Object($.composeWithDevTools)(Object(Z.applyMiddleware)(oe.a))),pe=(Object(ue.b)(me),me);o.a.render(r.a.createElement(u.a,null,r.a.createElement(l.a,{store:pe},r.a.createElement(Y,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c6480f80.chunk.js.map