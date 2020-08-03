(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(24)},17:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),s=t.n(r),o=(t(17),t(2));var c=Object(n.createContext)(),i=t(1);const d=(e,a)=>{switch(a.type){case"CHANGE_CURRENT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUser:a.payload});case"CHANGE_EXISTS_CURRENT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUserExists:a.payload});case"VALIDATE_STATUS_INPUTS":case"RESET_ERROR_MESSAGE":return Object(i.a)(Object(i.a)({},e),{},{validateInputs:Object(i.a)(Object(i.a)({},e.validateInputs),a.payload)});default:return e}};const m={currentUserExists:void 0!==localStorage.SESSION&&localStorage.SESSION,currentUser:{},validateInputs:{loginInputEmail:"",loginInputPassword:"",registerInputEmail:"",registerInputPassword:"",errorMessage:!1}};var u=e=>{const a=Object(n.useReducer)(d,m),t=Object(o.a)(a,2),r=t[0],s=t[1];return l.a.createElement(c.Provider,{value:[r,s]},e.children)},v=t(3),E=t.n(v);t(20);const p=e=>({type:"CHANGE_EXISTS_CURRENT_USER",payload:g(e)}),b=(e,a)=>({type:"VALIDATE_STATUS_INPUTS",payload:h(e,a)}),g=e=>(localStorage.SESSION=e,e),h=(e,a)=>{switch(e){case"auth/invalid-email":return{[a+"InputEmail"]:"is-invalid"};case"auth/wrong-password":return{[a+"InputEmail"]:"is-valid",[a+"InputPassword"]:"is-invalid"};case"auth/user-not-found":return{[a+"InputEmail"]:"is-invalid"};case"reset-status":return{[a+"InputEmail"]:"",[a+"InputPassword"]:""};default:return{errorMessage:e}}},N=e=>{E.a.auth().currentUser.sendEmailVerification().catch(a=>{e(b(a.code,"login"))})};t(9),t(22),t(23);var S=()=>l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"./"},"Anglofono"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",null,l.a.createElement("button",{"data-toggle":"modal","data-target":"#modal",className:"btn btn-secondary my-2 my-sm-0"},"Register")))));var f=({name:e="name",type:a="text",id:t="Password1",placeholder:n="",onChange:r=null,validate:s=""})=>{let o;switch(s){case"is-invalid":o="form-control is-invalid";break;case"is-valid":o="form-control is-valid";break;default:o="form-control"}return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:t},n),l.a.createElement("input",{name:e,type:a,autoComplete:"off",className:o,id:t,placeholder:n,onChange:r}))};var I=()=>{var e,a;let t=Object(n.useContext)(c),r=Object(o.a)(t,2),s=r[0],d=r[1];const m=Object(n.useState)({email:"",password:""}),u=Object(o.a)(m,2),v=u[0],g=u[1],h=e=>{g(Object(i.a)(Object(i.a)({},v),{},{[e.target.name]:e.target.value}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),((e,a,t)=>{E.a.auth().signInWithEmailAndPassword(e,a).then(()=>{localStorage.SESSION=!0,t(p(!0)),t(b("reset-status","login"))}).catch(e=>{t(b(e.code,"login"))})})(v.email,v.password,d)},method:"POST",className:"card container mx-auto p-3"},l.a.createElement("h4",{className:"p-2"},"Login User:"),l.a.createElement(f,{name:"email",type:"email",id:"Email2",validate:null===s||void 0===s?void 0:null===(e=s.validateInputs)||void 0===e?void 0:e.loginInputEmail,placeholder:"Enter email",onChange:h}),l.a.createElement(f,{name:"password",type:"password",id:"Password2",validate:null===s||void 0===s?void 0:null===(a=s.validateInputs)||void 0===a?void 0:a.loginInputPassword,placeholder:"Password",onChange:h}),l.a.createElement("div",{className:"form-group mx-auto"},l.a.createElement("button",{type:"submit",className:"btn mr-2 btn-success"},"Login"),l.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:()=>{d(b("reset-status","login"))}},"Cancel"))))};var O=()=>{var e,a;const t=Object(n.useState)({email:"",password:""}),r=Object(o.a)(t,2),s=r[0],d=r[1];let m=Object(n.useContext)(c),u=Object(o.a)(m,2),v=u[0],g=u[1];const h=e=>{d(Object(i.a)(Object(i.a)({},s),{},{[e.target.name]:e.target.value}))};return l.a.createElement("form",{method:"POST",onSubmit:e=>{e.preventDefault(),((e,a,t)=>{E.a.auth().createUserWithEmailAndPassword(e,a).then(()=>{t(p(!0)),t(b("reset-status","register")),N(t)}).catch(function(e){t(b(e.code,"register"))})})(s.email,s.password,g)},className:"modal fade",id:"modal","data-backdrop":"static","data-keyboard":"false",tabIndex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"modalLabel"},"Register user"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(f,{name:"email",type:"email",id:"Email1",validate:null===v||void 0===v?void 0:null===(e=v.validateInputs)||void 0===e?void 0:e.registerInputEmail,placeholder:"Enter email",onChange:h}),l.a.createElement(f,{name:"password",type:"password",id:"Password1",validate:null===v||void 0===v?void 0:null===(a=v.validateInputs)||void 0===a?void 0:a.registerInputPassword,placeholder:"Password",onChange:h})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Register"),l.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:()=>{g(b("reset-status","register"))},"data-dismiss":"modal"},"Close"))))};var y=()=>{var e,a;const t=Object(n.useContext)(c),r=Object(o.a)(t,2),s=r[0],i=r[1];let d;d="auth/too-many-requests"===(null===s||void 0===s?void 0:null===(e=s.validateInputs)||void 0===e?void 0:e.errorMessage)?"Demasiados intentos de iniciar session, intente mas tarde...":"Error inesperado, comunicar a la pagina... :(",console.log(null===s||void 0===s?void 0:null===(a=s.validateInputs)||void 0===a?void 0:a.errorMessage);return l.a.createElement("div",{className:"alert alert-dismissible alert-danger mt-4"},l.a.createElement("button",{onClick:()=>{i({type:"RESET_ERROR_MESSAGE",payload:{errorMessage:""}})},className:"close"},"\xd7"),l.a.createElement("h4",{className:"alert-heading"},"Oops..!!"),l.a.createElement("p",{className:"mb-0"},d))};var w=()=>{var e;const a=Object(n.useContext)(c),t=Object(o.a)(a,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(O,null),l.a.createElement("div",{className:"row container mt-5 mx-auto "},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement(I,null),(null===t||void 0===t?void 0:null===(e=t.validateInputs)||void 0===e?void 0:e.errorMessage)?l.a.createElement(y,null):"")))};var j=()=>{var e;const a=Object(n.useContext)(c),t=Object(o.a)(a,2),r=t[0],s=t[1];return console.log(r),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Navbar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbarColor01","aria-expanded":"true","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navbar-collapse collapse show",id:"navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Courses")),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-danger",onClick:()=>{(e=>{E.a.auth().signOut().then(()=>{e(p(!1))}).catch(function(e){console.warn(e)})})(s)}},"Cerrar Session"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Hola usuario:  ",null===r||void 0===r?void 0:null===(e=r.currentUser)||void 0===e?void 0:e.email)))};var C=()=>{const e=Object(n.useContext)(c),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(()=>{(e=>{E.a.auth().onAuthStateChanged(a=>{a&&e((e=>({type:"CHANGE_CURRENT_USER",payload:e}))(a))})})(r)},[r]),l.a.createElement(l.a.Fragment,null,!0===(null===t||void 0===t?void 0:t.currentUserExists)?l.a.createElement(j,null):l.a.createElement(w,null))};var R=()=>(E.a.initializeApp({apiKey:"AIzaSyBK6hMpMekmHdYxf2r91KzEypwSXDErFEY",authDomain:"anglofono-unac.firebaseapp.com",databaseURL:"https://anglofono-unac.firebaseio.com",projectId:"anglofono-unac",storageBucket:"anglofono-unac.appspot.com",messagingSenderId:"819485692900",appId:"1:819485692900:web:5adbc5367cf05f3072edf1",measurementId:"G-FPT979WKF0"}),l.a.createElement(u,null,l.a.createElement(C,null)));const x=document.getElementById("root");s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),x)}},[[12,1,2]]]);
//# sourceMappingURL=main.d56e7459.chunk.js.map