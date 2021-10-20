import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Messages from "./components/Messages/Messages";
import UsersC from "./components/Users/UsersC";

function App(props) {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='wrapper row between flex-start'>
          <SidebarContainer />

          <Route path='/messages' render={() => <Messages />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersC />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
