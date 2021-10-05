import React from "react";
import NavItem from "./NavItem";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sideber__ul">{props.nav}</div>
    </div>
  );
};

export default Sidebar;
