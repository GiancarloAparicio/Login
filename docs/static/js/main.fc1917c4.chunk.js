(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(41)},30:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),s=t.n(r),o=(t(30),t(6));var c=Object(n.createContext)(),i=t(3);const m=(e,a)=>{switch(a.type){case"CHANGE_CURRENT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUser:a.payload});case"CHANGE_EXISTS_CURRENT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUserExists:a.payload});case"VALIDATE_STATUS_INPUTS":return Object(i.a)(Object(i.a)({},e),{},{validateInputs:Object(i.a)(Object(i.a)({},e.validateInputs),a.payload)});default:return e}};const d={currentUserExists:void 0!==localStorage.SESSION&&localStorage.SESSION,currentUser:{},validateInputs:{loginInputEmail:"",loginInputPassword:"",registerInputEmail:"",registerInputPassword:""}};var u=e=>{const a=Object(n.useReducer)(m,d),t=Object(o.a)(a,2),r=t[0],s=t[1];return l.a.createElement(c.Provider,{value:[r,s]},e.children)},v=t(9),p=t.n(v);t(33);const b=e=>({type:"CHANGE_EXISTS_CURRENT_USER",payload:g(e)}),E=(e,a)=>({type:"VALIDATE_STATUS_INPUTS",payload:h(e,a)}),g=e=>(localStorage.SESSION=e,e),h=(e,a)=>"auth/invalid-email"===e?{[a+"InputEmail"]:"is-invalid"}:"auth/wrong-password"===e?{[a+"InputEmail"]:"is-valid",[a+"InputPassword"]:"is-invalid"}:"reset-status"===e?{[a+"InputEmail"]:"",[a+"InputPassword"]:""}:void 0,N=()=>{p.a.auth().currentUser.sendEmailVerification().then(()=>{console.log("Usuario email confirmed")}).catch(e=>{console.warn(e)})};t(19),t(35),t(36);var S=t(23),f=t(1);var I=()=>l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"./"},"Anglofono"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",null,l.a.createElement("button",{"data-toggle":"modal","data-target":"#modal",className:"btn btn-secondary my-2 my-sm-0"},"Register")))));var w=({name:e="name",type:a="text",id:t="Password1",placeholder:n="",onChange:r=null,validate:s=""})=>{let o;switch(s){case"is-invalid":o="form-control is-invalid";break;case"is-valid":o="form-control is-valid";break;default:o="form-control"}return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:t},n),l.a.createElement("input",{name:e,type:a,autoComplete:"off",className:o,id:t,placeholder:n,onChange:r}))};var y=()=>{var e,a;let t=Object(n.useContext)(c),r=Object(o.a)(t,2),s=r[0],m=r[1];const d=Object(n.useState)({email:"",password:""}),u=Object(o.a)(d,2),v=u[0],g=u[1],h=e=>{g(Object(i.a)(Object(i.a)({},v),{},{[e.target.name]:e.target.value}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),((e,a,t)=>{p.a.auth().signInWithEmailAndPassword(e,a).then(()=>{console.log("Iniciando session"),localStorage.SESSION=!0,t(b(!0)),t(E("reset-status","login"))}).catch(e=>{t(E(e.code,"login"))})})(v.email,v.password,m)},method:"POST",className:"card container mx-auto p-3"},l.a.createElement("h4",{className:"p-2"},"Login User:"),l.a.createElement(w,{name:"email",type:"email",id:"Email2",validate:null===s||void 0===s?void 0:null===(e=s.validateInputs)||void 0===e?void 0:e.loginInputEmail,placeholder:"Enter email",onChange:h}),l.a.createElement(w,{name:"password",type:"password",id:"Password2",validate:null===s||void 0===s?void 0:null===(a=s.validateInputs)||void 0===a?void 0:a.loginInputPassword,placeholder:"Password",onChange:h}),l.a.createElement("div",{className:"form-group mx-auto"},l.a.createElement("button",{type:"submit",className:"btn mr-2 btn-success"},"Login"),l.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:()=>{m(E("reset-status","login"))}},"Cancel"))))};var O=()=>{var e,a;const t=Object(n.useState)({email:"",password:""}),r=Object(o.a)(t,2),s=r[0],m=r[1];let d=Object(n.useContext)(c),u=Object(o.a)(d,2),v=u[0],g=u[1];const h=e=>{m(Object(i.a)(Object(i.a)({},s),{},{[e.target.name]:e.target.value}))};return l.a.createElement("form",{method:"POST",onSubmit:e=>{e.preventDefault(),((e,a,t)=>{p.a.auth().createUserWithEmailAndPassword(e,a).then(()=>{t(b(!0)),t(E("reset-status","register")),N()}).catch(function(e){t(E(e.code,"register"))})})(s.email,s.password,g)},className:"modal fade",id:"modal","data-backdrop":"static","data-keyboard":"false",tabIndex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"modalLabel"},"Register user"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(w,{name:"email",type:"email",id:"Email1",validate:null===v||void 0===v?void 0:null===(e=v.validateInputs)||void 0===e?void 0:e.registerInputEmail,placeholder:"Enter email",onChange:h}),l.a.createElement(w,{name:"password",type:"password",id:"Password1",validate:null===v||void 0===v?void 0:null===(a=v.validateInputs)||void 0===a?void 0:a.registerInputPassword,placeholder:"Password",onChange:h})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Register"),l.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:()=>{g(E("reset-status","register"))},"data-dismiss":"modal"},"Close"))))};var C=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement(O,null),l.a.createElement("div",{className:"row container mt-5 mx-auto "},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement(y,null))));var j=()=>{var e;const a=Object(n.useContext)(c),t=Object(o.a)(a,2),r=t[0],s=t[1];return console.log(r),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Navbar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbarColor01","aria-expanded":"true","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navbar-collapse collapse show",id:"navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Courses")),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-danger",onClick:()=>{(e=>{p.a.auth().signOut().then(()=>{e(b(!1))}).catch(function(e){console.warn(e)})})(s)}},"Cerrar Session"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Hola usuario:  ",null===r||void 0===r?void 0:null===(e=r.currentUser)||void 0===e?void 0:e.email)))};var U=()=>{const e=Object(n.useContext)(c),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(()=>{(e=>{p.a.auth().onAuthStateChanged(a=>{a&&e((e=>({type:"CHANGE_CURRENT_USER",payload:e}))(a))})})(r)},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",component:!0===(null===t||void 0===t?void 0:t.currentUserExists)?j:C}))))};var x=()=>(p.a.initializeApp({apiKey:"AIzaSyBK6hMpMekmHdYxf2r91KzEypwSXDErFEY",authDomain:"anglofono-unac.firebaseapp.com",databaseURL:"https://anglofono-unac.firebaseio.com",projectId:"anglofono-unac",storageBucket:"anglofono-unac.appspot.com",messagingSenderId:"819485692900",appId:"1:819485692900:web:5adbc5367cf05f3072edf1",measurementId:"G-FPT979WKF0"}),l.a.createElement(u,null,l.a.createElement(U,null)));const P=document.getElementById("root");s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),P)}},[[25,1,2]]]);
//# sourceMappingURL=main.fc1917c4.chunk.js.map