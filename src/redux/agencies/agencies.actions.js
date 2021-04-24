import { createAction } from "redux-actions";

//--------------------------------------------------------------------
//                           ACTIONS
//--------------------------------------------------------------------
export const setAgenciesData_act = createAction("agencies/setData");
export const setAgenciesLoaded_act = createAction("agencies/setLoaded");
export const setAgenciesIsLoading_act = createAction("agencies/setIsLoading");
