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
          <Sidebar nav={props.nav}/>
          <Route
            path="/messages"
            render={() => <Messages messages={props.messages} dialogs={props.dialogs}/>}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile name={props.profile.name} img={props.profile.img} posts={props.posts}/>
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
