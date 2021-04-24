import { handleActions } from "redux-actions";
import * as ACT from "./agencies.actions";
//--------------------------------------------------------------------
//                           REDUCERS
//--------------------------------------------------------------------
//Initial state
const AGENCIES_DEFAULT_STATE = {
  loaded: false,
  isLoading: false,
  data: {},
};

//Reducer
const agenciesReducer = handleActions(
  new Map([
    [
      ACT.setAgenciesData_act,
      (state, action) => {
        const agencies = action.payload;
        const data = {};
        agencies.forEach(({ __v, ...agency }) => {
          data[agency._id] = agency;
        });
        return {
          ...state,
          data,
        };
      },
    ],
    [
      ACT.setAgenciesLoaded_act,
      (state, action) => ({
        ...state,
        loaded: action.payload,
      }),
    ],
    [
      ACT.setAgenciesIsLoading_act,
      (state, action) => ({
        ...state,
        isLoading: action.payload,
      }),
    ],
  ]),
  AGENCIES_DEFAULT_STATE
);

export default agenciesReducer;
