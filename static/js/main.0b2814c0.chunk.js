(this["webpackJsonpatividade3-react"]=this["webpackJsonpatividade3-react"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),r=a(4),o=a.n(r),s=(a(10),a(2)),d=(a(11),function(e){var t=Object(c.useState)({nome:"",QtdeChar:0}),a=Object(s.a)(t,2),i=a[0],r=a[1];return Object(n.jsxs)("div",{className:"edit",children:[Object(n.jsx)("input",{type:"text",title:e.dica,onChange:function(e){return t=e.target.value,void r({nome:t,QtdeChar:t.length});var t}}),Object(n.jsx)("p",{children:Object(n.jsxs)("label",{children:["Este texto cont\xe9m ",i.QtdeChar," caracteres"]})})]})}),j=function(e){var t=Object(c.useState)({logado:!1}),a=Object(s.a)(t,2),i=a[0],r=a[1];return Object(n.jsxs)("div",{className:"identificaLogado",children:[Object(n.jsx)("img",{className:"imagem",src:["https://image.freepik.com/fotos-gratis/mulher-negra-de-negocios-convidando-alguem-para-vir_1187-6478.jpg","JaPodeSair.png"][i.logado?1:0],alt:["camarada fora","camarada dentro"][i.logado?1:0]}),Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t=!i.logado,r({logado:t}),void e.avisarLogin(t);var t},children:["Vamos entrar ?","Quero sair"][i.logado?1:0]})})]})};var l=function(){var e=Object(c.useState)({EstaDentro:!1}),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.jsxs)("div",{className:"App",children:[a.EstaDentro?Object(n.jsxs)("div",{children:["Comece a digitar algo ",Object(n.jsx)(d,{dica:"digite seu nome"})]}):Object(n.jsx)("div",{}),Object(n.jsx)("div",{children:Object(n.jsx)(j,{avisarLogin:function(e){return i({EstaDentro:e})}})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.0b2814c0.chunk.js.map