import { createAction } from "redux-actions";

//--------------------------------------------------------------------
//                           ACTIONS
//--------------------------------------------------------------------
export const setChoice_act = createAction("user/setChoice");
export const setIsSignIn_act = createAction("user/setSignIn");
export const setEmail_act = createAction("user/setEmail");
export const setPassword_act = createAction("user/setPassword");
