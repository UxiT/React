import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./components/Messages/Messages";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper row between flex-start">
          <Sidebar nav={props.state.nav} />
          <Route
            path="/messages"
            render={() => <Messages state={props.state.messagesPage} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                editPostText={props.editPostText}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
