import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER, VALIDATE_STATUS_INPUTS, RESET_ERROR_MESSAGE } from "./AppType";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case CHANGE_EXISTS_CURRENT_USER:
      return {
        ...state,
        currentUserExists: action.payload
      };

    case VALIDATE_STATUS_INPUTS:
      return {
        ...state,
        validateInputs: {
          ...state.validateInputs,
          ...action.payload
        }
      };

      case RESET_ERROR_MESSAGE:
        return {
          ...state,
          validateInputs: {
            ...state.validateInputs,
            ...action.payload
          }
        };
    

    default:
      return state;
  }
};
