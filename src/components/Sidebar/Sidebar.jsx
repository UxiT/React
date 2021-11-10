import React from "react";
import NavItem from "./NavItem";

const Sidebar = (props) => {
  // let nav = props.nav.map((n) => <NavItem text={n.text} to={n.to} key={n.id} />)

  return (
    <div className="sidebar">
      <div className="sideber__ul">
        <NavItem text="Profile" to={`profile/${props.id}`}/>
        <NavItem text="Messages" to="messages"/>
        <NavItem text="Users" to="users"/>
        <NavItem text="Feed" to="feed"/>
        <NavItem text="Media" to="media"/>
      </div>
    </div>
  );
};

export default Sidebar;
