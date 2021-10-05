import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navReducer from "./navReducer";
import friendsReducer from "./friendsReducer"
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    users: usersReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    nav: navReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;