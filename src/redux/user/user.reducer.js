import { handleActions } from "redux-actions";
import * as ACT from "./user.actions";
//--------------------------------------------------------------------
//                           REDUCERS
//--------------------------------------------------------------------
//Initial state
const USER_DEFAULT_STATE = {
  choice: -1,
  isSignIn: false,
  email: null,
  password: true,
};

//Reducer
const userReducer = handleActions(
  new Map([
    [
      ACT.setChoice_act,
      (state, action) => ({
        ...state,
        choice: action.payload,
      }),
    ],
    [
      ACT.setIsSignIn_act,
      (state, action) => ({
        ...state,
        isSignIn: action.payload,
      }),
    ],
    [
      ACT.setEmail_act,
      (state, action) => ({
        ...state,
        email: action.payload,
      }),
    ],
    [
      ACT.setPassword_act,
      (state, action) => ({
        ...state,
        password: action.payload,
      }),
    ],
  ]),
  USER_DEFAULT_STATE
);

export default userReducer;
