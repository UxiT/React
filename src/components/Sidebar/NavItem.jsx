import React from "react";
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <NavLink to={`/${props.to}`} activeClassName="active" className="sidebar__item">
            <div className="icon"></div>
            <span className="link"> {props.text} </span>
        </NavLink>
    )
}

export default NavItem;