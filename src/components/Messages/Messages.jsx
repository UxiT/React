import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import Chat from "./Chat";
import st from "./messages.module.css";

const Messages = (props) => {
  return (
    <div className={st.messages}>
      <Chat messages={props.state.messages} />
      <Dialogs dialogs={props.state.dialogs} />
    </div>
  );
};

export default Messages;
