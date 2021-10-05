import React from "react";
import ChatContainer from "./ChatContainer";
import st from "./messages.module.css";
import DialogsContainer from "../Dialogs/DialogsContainer";

const Messages = (props) => {
  return (
    <div className={st.messages}>
      <ChatContainer/>
      <DialogsContainer/>
    </div>
  );
};

export default Messages;
