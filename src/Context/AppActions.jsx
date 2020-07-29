import { CHANGE_CURRENT_USER, CHANGE_EXISTS_CURRENT_USER } from "./AppType";

export let currentUser =(user)=> ({
  type: CHANGE_CURRENT_USER,
  payload:user
});

export let existsCurrentUser =(currentUser)=> ({
  type: CHANGE_EXISTS_CURRENT_USER,
  payload:currentUser
});
