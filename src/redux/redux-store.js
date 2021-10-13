import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  users: usersReducer,
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  nav: navReducer,
});

let store = createStore(reducers);

export default store;
