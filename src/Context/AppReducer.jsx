import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER } from "./AppType";

const AppReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: state
      };
    case CHANGE_EXISTS_CURRENT_USER:
      return {
        ...state,
        currentUserExists: state
      };
    default:
      return state;
  }
};
const initalState = 0;

export { AppReducer, initalState };
