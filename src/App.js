import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Messages from "./components/Messages/Messages";
import Friends from "./components/Friends/Friends";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper row between flex-start">
          <SidebarContainer />

          <Route path="/messages" render={() => <Messages />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/friends"
            render={() => (
              <Friends state={props.state.users} dispatch={props.dispatch} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
