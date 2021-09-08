import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="wrapper row between flex-start">
          <Sidebar />
          <Route path="/messages" component={Messages} />
          <Route path="/profile" component={Profile} />
          {/* <Profile name="John" lastname="Doe" img="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"/> */}
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
