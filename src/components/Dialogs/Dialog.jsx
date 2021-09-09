import React from "react";
import {NavLink} from "react-router-dom";
import st from '../Messages/messages.module.css';


const Dialog = (props) => {
    return (
        <NavLink activeClassName={st.active} className={st.dialog} to={`/messages/${props.id}`}>
            <div className={st.img}>
                <img src={props.img} alt="" />
            </div>
            <h2 className={st.title}>
                {props.title}
            </h2>
        </NavLink>
    )
}

export default Dialog;