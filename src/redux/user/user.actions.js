import { createAction } from "redux-actions";

//--------------------------------------------------------------------
//                           ACTIONS
//--------------------------------------------------------------------
export const setChoice_act = createAction("user/setChoice");
export const setIsSignIn_act = createAction("user/setSignIn");
export const setToken_act = createAction("user/setToken");
export const setUserId_act = createAction("user/setUserId");
