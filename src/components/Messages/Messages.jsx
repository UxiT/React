import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import Chat from "./Chat";
import st from './messages.module.css';


const Messages = (props) => {
    return (
        <div className={st.messages}>
            <Dialogs dialogs={props.dialogs}/>
            <Chat messages={props.messages}/>
        </div>
    )
}

export default Messages;