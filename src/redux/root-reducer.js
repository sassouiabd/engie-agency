import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage"; //use local storage as default
import sessionStorage from "redux-persist/lib/storage/session";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["user"],
};

const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default persistReducer(persistConfig, rootReducer);
