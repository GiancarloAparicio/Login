// let allInputs = {
//   inputLoginEmail: "",
//   inputLoginPassword: "",
//   inputRegisterEmail: "",
//   inputRegisterPassword: "",
// }

let allInputs = {
  loginInputEmail: "",
  loginInputPassword: "",
  registerInputEmail: "",
  registerInputPassword: "",
}


export const initalState = {
  currentUserExists: localStorage["SESSION"],
  currentUser: {},
  validateInputs: allInputs
};
