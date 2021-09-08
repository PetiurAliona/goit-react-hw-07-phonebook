(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={input:"Filter_input__UHWo2"}},25:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c,a=n(0),o=n(8),r=n.n(o),u=n(4),i=(n(25),n(14)),s=n(6),l=n.n(s),b=n(3),j=n(29),d={addContact:Object(b.b)("contacts/add",(function(t,e){return{payload:{id:Object(j.a)(),name:t,number:e}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")},m=n(1),O=Object(u.b)(null,(function(t){return{onSubmit:function(e,n){return t(d.addContact(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),b=s[0],j=s[1];return Object(m.jsxs)("form",{className:l.a.contactForm,onSubmit:function(t){t.preventDefault(),e(o,b),r(""),j("")},children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){r(t.currentTarget.value)},className:l.a.input})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){j(t.currentTarget.value)},className:l.a.input})]}),Object(m.jsx)("button",{type:"submit",className:l.a.button,children:"Add contact"})]})})),f=n(15),h=n.n(f),p=Object(u.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(d.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{value:e,onChange:n,name:"filter",type:"text",className:h.a.input})]})})),x=n(7),C=n.n(x),v=Object(u.b)((function(t){var e=t.contacts,n=e.filter,c=e.items,a=n.toLowerCase();return{contacts:null===c||void 0===c?void 0:c.filter((function(t){return t.name.toLowerCase().includes(a)}))}}),(function(t){return{onDeleteContact:function(e){return t(d.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(m.jsxs)("li",{className:C.a.item,children:[Object(m.jsxs)("p",{className:C.a.text,children:[c,":"]}),Object(m.jsx)("p",{className:C.a.text,children:a}),Object(m.jsx)("button",{className:C.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),_=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(p,{}),Object(m.jsx)(v,{})]})},g=n(10),F=n(16),y=n(2),N=Object(b.c)([],(c={},Object(g.a)(c,d.addContact,(function(t,e){return function(t,e){var n=t.some((function(t){return t.name===e.name}));return n&&alert("".concat(e.name," is already in contacts")),n?t:[].concat(Object(F.a)(t),[e])}(t,e.payload)})),Object(g.a)(c,d.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),k=Object(b.c)("",Object(g.a)({},d.changeFilter,(function(t,e){return e.payload}))),w=Object(y.b)({items:N,filter:k}),z=Object(b.a)({reducer:{contacts:w},devTools:!1});r.a.render(Object(m.jsx)(u.a,{store:z,children:Object(m.jsx)(_,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__xGRFs",input:"ContactForm_input__3yj31",button:"ContactForm_button__uz7_-"}},7:function(t,e,n){t.exports={button:"ContactsList_button__-U71z",item:"ContactsList_item__2smm4",text:"ContactsList_text__Ljot2"}}},[[27,1,2]]]);
//# sourceMappingURL=main.c413e8a9.chunk.js.map