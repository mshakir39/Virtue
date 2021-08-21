import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import name_reducer from "./Reducers/name_reducer";
import user_reducer from "./Reducers/user_reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const master_reducer = combineReducers({
  name: name_reducer,
  users: user_reducer,
});

export default createStore(
  master_reducer,
  { name: "Muzamil", users: [] },

  composeEnhancers(applyMiddleware(thunk))
);
