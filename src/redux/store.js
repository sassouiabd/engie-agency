import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";

import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: (getState, action) => true,
  });
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export const retrieveState = () => {
  return store ? store.getState() : null;
};

export const dispatchToState = props => {
  return store ? store.dispatch(props) : null;
};
