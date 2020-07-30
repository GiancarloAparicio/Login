import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER, VALIDATE_STATUS_INPUTS } from "./AppType";

export const currentUser = (user) => ({
  type: CHANGE_CURRENT_USER,
  payload: user
});

export const existsCurrentUser = (currentUser) => ({
  type: CHANGE_EXISTS_CURRENT_USER,
  payload: saveExistsCurrentUser(currentUser)
});

export const statusInputs = (status,authForm) => ({
  type: VALIDATE_STATUS_INPUTS,
  payload: validateStatusInputs(status,authForm)
})

const saveExistsCurrentUser=(status)=>{
    localStorage["SESSION"]=status
    return status
}

const validateStatusInputs = (response,authForm) => {

  if (response === "auth/invalid-email") {
    return ({
      [authForm+"InputEmail"]:"is-invalid"
    })
  }
  if (response=== "auth/wrong-password") {
    return ({
      [authForm+"InputEmail"]:"is-valid",
      [authForm+"InputPassword"]: "is-invalid"
    })
  }

  if(response==="reset-status"){
    return ({
      [authForm+"InputEmail"]:"",
      [authForm+"InputPassword"]: ""
    })
  }

 
}