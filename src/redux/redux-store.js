import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer'

let reducers = combineReducers({
  users: usersReducer,
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  nav: navReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
