import React from "react";
import st from './messages.module.css';

const Chat = (props) => {
    return (
        <div className={st.chat}>
            {props.messages}
        </div>
    )
}

export default Chat;