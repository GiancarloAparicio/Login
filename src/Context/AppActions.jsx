import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER, VALIDATE_STATUS_INPUTS, RESET_ERROR_MESSAGE } from "./AppType";

export const currentUser = (user) => ({
  type: CHANGE_CURRENT_USER,
  payload: user
});

export const existsCurrentUser = (currentUser) => ({
  type: CHANGE_EXISTS_CURRENT_USER,
  payload: saveExistsCurrentUser(currentUser)
});

export const statusInputs = (status, authForm) => ({
  type: VALIDATE_STATUS_INPUTS,
  payload: validateStatusInputs(status, authForm)
})

export const closeMessageError=()=>({
  type: RESET_ERROR_MESSAGE,
  payload: {
    manyRequests:"",
    errorMessage:""
  }
})

/*
* Support functions
*/
const saveExistsCurrentUser = (status) => {
  localStorage["SESSION"] = status
  return status
}

const validateStatusInputs = (status, authForm) => {

  switch (status) {
    case "auth/invalid-email":
      return ({
        [authForm + "InputEmail"]: "is-invalid"
      })
    case "auth/wrong-password":
      return ({
        [authForm + "InputEmail"]: "is-valid",
        [authForm + "InputPassword"]: "is-invalid"
      })

    case "auth/too-many-requests":
      return ({
        manyRequests:"true"
      })

    case "reset-status":
      return ({
        [authForm + "InputEmail"]: "",
        [authForm + "InputPassword"]: ""
      })

    default:
      return ({
        error:status
      })

  }



}