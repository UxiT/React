import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderC";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Messages from "./components/Messages/Messages";
import UsersC from "./components/Users/UsersC";



const App = (props) =>{
  return(
    <BrowserRouter>
      <div className='App'>
        <HeaderContainer />
        <div className='wrapper row between flex-start'>
          <SidebarContainer />

          <Route path='/messages' render={() => <Messages />} />
          <Route path='/profile/:userId' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersC />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
