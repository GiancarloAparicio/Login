let allInputs = {
  loginInputEmail: "",
  loginInputPassword: "",
  registerInputEmail: "",
  registerInputPassword: "",
  manyRequests: "",
  errorMessage:""
}


export const initalState = {
  currentUserExists: localStorage["SESSION"]=== undefined ? false : localStorage["SESSION"] ,
  currentUser: {},
  validateInputs: allInputs
};
