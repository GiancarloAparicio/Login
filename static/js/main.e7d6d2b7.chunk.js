(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(24)},17:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(11),s=t.n(l),o=(t(17),t(2));var c=Object(r.createContext)(),i=t(1);const m=(e,a)=>{switch(a.type){case"CHANGE_CURRENT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUser:a.payload});case"CHANGE_EXISTS_CURRENT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUserExists:a.payload});case"VALIDATE_STATUS_INPUTS":case"RESET_ERROR_MESSAGE":return Object(i.a)(Object(i.a)({},e),{},{validateInputs:Object(i.a)(Object(i.a)({},e.validateInputs),a.payload)});default:return e}};const d={currentUserExists:void 0===localStorage.SESSION?"false":localStorage.SESSION,currentUser:{},validateInputs:{loginInputEmail:"",loginInputPassword:"",registerInputEmail:"",registerInputPassword:"",errorMessage:!1}};var u=e=>{const a=Object(r.useReducer)(m,d),t=Object(o.a)(a,2),l=t[0],s=t[1];return n.a.createElement(c.Provider,{value:[l,s]},e.children)},v=t(3),E=t.n(v);t(20);const p=e=>({type:"CHANGE_EXISTS_CURRENT_USER",payload:g(e)}),b=(e,a)=>({type:"VALIDATE_STATUS_INPUTS",payload:h(e,a)}),g=e=>(localStorage.SESSION=e,e),h=(e,a)=>{switch(e){case"auth/invalid-email":return{[a+"InputEmail"]:"is-invalid"};case"auth/wrong-password":return{[a+"InputEmail"]:"is-valid",[a+"InputPassword"]:"is-invalid"};case"auth/user-not-found":return{[a+"InputEmail"]:"is-invalid"};case"reset-status":return{[a+"InputEmail"]:"",[a+"InputPassword"]:""};case"400":console.log("Tengo este error :V");break;default:return{errorMessage:e}}},N=e=>{E.a.auth().currentUser.sendEmailVerification().catch(a=>{e(b(a.code,"login"))})};t(9),t(22),t(23);var f=()=>n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.a.createElement("a",{className:"navbar-brand",href:"./"},"Anglofono"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",null,n.a.createElement("button",{"data-toggle":"modal","data-target":"#modal",className:"btn btn-secondary my-2 my-sm-0"},"Register")))));var S=({messageError:e="Sorry, the entered field is incorrect. Try again?",name:a="name",type:t="text",id:r="Password1",placeholder:l="",onChange:s=null,validate:o=""})=>{let c;switch(o){case"is-invalid":c="form-control is-invalid";break;case"is-valid":c="form-control is-valid";break;default:c="form-control"}return n.a.createElement("div",{className:"form-group mb-3"},n.a.createElement("label",{htmlFor:r},l),n.a.createElement("input",{name:a,type:t,autoComplete:"off",className:c,id:r,placeholder:l,onChange:s}),"is-invalid"===o?n.a.createElement("p",{className:"invalid-feedback d-relative"},e):"")};var y=()=>{var e,a;let t=Object(r.useContext)(c),l=Object(o.a)(t,2),s=l[0],m=l[1];const d=Object(r.useState)({email:"",password:""}),u=Object(o.a)(d,2),v=u[0],g=u[1],h=e=>{g(Object(i.a)(Object(i.a)({},v),{},{[e.target.name]:e.target.value}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:e=>{e.preventDefault(),((e,a,t)=>{E.a.auth().signInWithEmailAndPassword(e,a).then(()=>{localStorage.SESSION="true",t(p("true")),t(b("reset-status","login"))}).catch(e=>{t(b(e.code,"login"))})})(v.email,v.password,m)},method:"POST",className:"card container mx-auto p-3"},n.a.createElement("h4",{className:"p-2"},"Login User :"),n.a.createElement(S,{name:"email",type:"email",id:"Email2",validate:null===s||void 0===s?void 0:null===(e=s.validateInputs)||void 0===e?void 0:e.loginInputEmail,placeholder:"Enter email",messageError:"Sorry, that username is not registered. Try again?",onChange:h}),n.a.createElement(S,{name:"password",type:"password",id:"Password2",validate:null===s||void 0===s?void 0:null===(a=s.validateInputs)||void 0===a?void 0:a.loginInputPassword,placeholder:"Password",messageError:"Sorry, the password entered is incorrect. Try again?",onChange:h}),n.a.createElement("div",{className:"form-group mx-auto"},n.a.createElement("button",{type:"submit",className:"btn mr-2 btn-success"},"Login"),n.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:()=>{m(b("reset-status","login"))}},"Cancel"))))};var I=()=>{var e,a;const t=Object(r.useState)({email:"",password:""}),l=Object(o.a)(t,2),s=l[0],m=l[1];let d=Object(r.useContext)(c),u=Object(o.a)(d,2),v=u[0],g=u[1];const h=e=>{m(Object(i.a)(Object(i.a)({},s),{},{[e.target.name]:e.target.value}))};return n.a.createElement("form",{method:"POST",onSubmit:e=>{e.preventDefault(),((e,a,t)=>{E.a.auth().createUserWithEmailAndPassword(e,a).then(()=>{t(p(!0)),t(b("reset-status","register")),N(t)}).catch(function(e){t(b(e.code,"register"))})})(s.email,s.password,g)},className:"modal fade",id:"modal","data-backdrop":"static","data-keyboard":"false",tabIndex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"modalLabel"},"Register user"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement(S,{name:"email",type:"email",id:"Email1",validate:null===v||void 0===v?void 0:null===(e=v.validateInputs)||void 0===e?void 0:e.registerInputEmail,placeholder:"Enter email",messageError:"Sorry, that username's taken. Try another?",onChange:h}),n.a.createElement(S,{name:"password",type:"password",id:"Password1",validate:null===v||void 0===v?void 0:null===(a=v.validateInputs)||void 0===a?void 0:a.registerInputPassword,placeholder:"Password",onChange:h})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"submit",className:"btn btn-success"},"Register"),n.a.createElement("button",{type:"reset",className:"btn btn-danger",onClick:()=>{g(b("reset-status","register"))},"data-dismiss":"modal"},"Close"))))};var O=()=>{var e,a;const t=Object(r.useContext)(c),l=Object(o.a)(t,2),s=l[0],i=l[1];let m;m="auth/too-many-requests"===(null===s||void 0===s?void 0:null===(e=s.validateInputs)||void 0===e?void 0:e.errorMessage)?"Demasiados intentos de iniciar session, intente mas tarde...":"Error inesperado, comunicar a la pagina... :(",console.log(null===s||void 0===s?void 0:null===(a=s.validateInputs)||void 0===a?void 0:a.errorMessage);return n.a.createElement("div",{className:"alert alert-dismissible alert-danger mt-4"},n.a.createElement("button",{onClick:()=>{i({type:"RESET_ERROR_MESSAGE",payload:{errorMessage:""}})},className:"close"},"\xd7"),n.a.createElement("h4",{className:"alert-heading"},"Oops..!!"),n.a.createElement("p",{className:"mb-0"},m))};var w=()=>{var e;const a=Object(r.useContext)(c),t=Object(o.a)(a,1)[0];return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement(I,null),n.a.createElement("div",{className:"row container mt-5 mx-auto "},n.a.createElement("div",{className:"col-md-6 mx-auto"},n.a.createElement(y,null),(null===t||void 0===t?void 0:null===(e=t.validateInputs)||void 0===e?void 0:e.errorMessage)?n.a.createElement(O,null):"")))};var j=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"alert alert-dismissible alert-warning mt-4 p-5"},n.a.createElement("h4",{className:"alert-heading"},"Verify user account:"),n.a.createElement("p",{className:"mb-0"},"To be able to access first, see confirm your ",n.a.createElement("a",{rel:"noopener noreferrer",href:"https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",target:"_blank",className:"alert-link"},"email"),".")));var C=()=>{var e,a;const t=Object(r.useContext)(c),l=Object(o.a)(t,2),s=l[0],i=l[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.a.createElement("a",{className:"navbar-brand",href:"./"},"Navbar"),n.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar2","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"navbar-collapse collapse",id:"navbar2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"./"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"./"},"Courses")),n.a.createElement("li",null,n.a.createElement("button",{className:"btn btn-danger",onClick:()=>{(e=>{E.a.auth().signOut().then(()=>{e(p(!1))}).catch(function(e){console.warn(e)})})(i)}},"Cerrar Session"))))),n.a.createElement("div",{className:"container"},(null===s||void 0===s?void 0:null===(e=s.currentUser)||void 0===e?void 0:e.emailVerified)?n.a.createElement("h1",null,"Hola, usuario registrado y confirmado:  ",null===s||void 0===s?void 0:null===(a=s.currentUser)||void 0===a?void 0:a.email):n.a.createElement(j,null)))};var T=()=>{const e=Object(r.useContext)(c),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(r.useEffect)(()=>{(e=>{E.a.auth().onAuthStateChanged(a=>{a&&e((e=>({type:"CHANGE_CURRENT_USER",payload:e}))(a))})})(l)},[l]),"true"===(null===t||void 0===t?void 0:t.currentUserExists)?n.a.createElement(C,null):n.a.createElement(w,null)};var R=()=>(E.a.initializeApp({apiKey:"AIzaSyBK6hMpMekmHdYxf2r91KzEypwSXDErFEY",authDomain:"anglofono-unac.firebaseapp.com",databaseURL:"https://anglofono-unac.firebaseio.com",projectId:"anglofono-unac",storageBucket:"anglofono-unac.appspot.com",messagingSenderId:"819485692900",appId:"1:819485692900:web:5adbc5367cf05f3072edf1",measurementId:"G-FPT979WKF0"}),n.a.createElement(u,null,n.a.createElement(T,null)));const U=document.getElementById("root");s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),U)}},[[12,1,2]]]);
//# sourceMappingURL=main.e7d6d2b7.chunk.js.map