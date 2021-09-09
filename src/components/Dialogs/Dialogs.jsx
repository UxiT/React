import React from "react";
import st from '../Messages/messages.module.css';


const Dialogs = (props) => {
    return (
        <div className={st.dialogs}>
            {props.dialogs}
        </div>
    )
}

export default Dialogs;