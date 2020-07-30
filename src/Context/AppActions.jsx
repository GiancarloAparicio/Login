import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER, VALIDATE_STATUS_INPUTS } from "./AppType";

export const currentUser = (user) => ({
  type: CHANGE_CURRENT_USER,
  payload: user
});

export const existsCurrentUser = (currentUser) => ({
  type: CHANGE_EXISTS_CURRENT_USER,
  payload: currentUser
});

export const statusInputs = (status) => ({
  type: VALIDATE_STATUS_INPUTS,
  payload: validateStatusInputs(status)
})


const validateStatusInputs = (response) => {

  if (response === "auth/invalid-email") {
    return ({
      inputLoginEmail:"is-invalid"
    })
  }
  if (response=== "auth/wrong-password") {
    return ({
      inputLoginEmail:"is-valid",
      inputLoginPassword: "is-invalid"
    })
  }

  if(response==="reset-status-login"){
    return ({
      inputLoginEmail:"",
      inputLoginPassword: ""
    })
  }

  if(response==="reset-status-register"){
    return ({
      inputRegisterEmail:"",
      inputRegisterPassword: ""
    })
  }

 
}