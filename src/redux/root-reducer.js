import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage"; //use local storage as default
import sessionStorage from "redux-persist/lib/storage/session";
import userReducer from "./user/user.reducer";
import agenciesReducer from "./agencies/agencies.reducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["user", "agencies"],
};

const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};

const agenciesPersistConfig = {
  key: "agencies",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  agencies: persistReducer(agenciesPersistConfig, agenciesReducer),
});

export default persistReducer(persistConfig, rootReducer);
