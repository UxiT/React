import React from "react";
import NavItem from "./NavItem";

const Sidebar = (props) => {

  let nav = props.nav.map((n) => <NavItem text={n.text} to={n.to} key={n.id} />)

  return (
    <div className="sidebar">
      <div className="sideber__ul">{nav}</div>
    </div>
  );
};

export default Sidebar;
