let allInputs = {
  loginInputEmail: "",
  loginInputPassword: "",
  registerInputEmail: "",
  registerInputPassword: "",
  errorMessage:false
}


export const initalState = {
  currentUserExists: localStorage["SESSION"]=== undefined ? false : localStorage["SESSION"] ,
  currentUser: {},
  validateInputs: allInputs
};
