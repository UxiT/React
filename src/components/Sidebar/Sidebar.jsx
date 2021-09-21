import React from "react";
import NavItem from "./NavItem";

const Sidebar = (props) => {
  let nav = props.nav.map((el) => <NavItem text={el.text} to={el.to} />);

  return (
    <div className="sidebar">
      <div className="sideber__ul">{nav}</div>
    </div>
  );
};

export default Sidebar;
