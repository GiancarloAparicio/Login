import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER } from "./AppType";

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

    default:
      return state;
  }
};


