import React from "react";
import st from "./messages.module.css";
import Message from "./Message";

const Chat = (props) => {
  let messages = props.messages.map((m) => <Message text={m.text} />);

  return (
    <div className={st.chat}>
      <div className={st.message_block}>{messages}</div>
      <div className={st.textarea}>
        <textarea id="" cols="30" rows="1"></textarea>
        <button className={st.send}></button>
      </div>
    </div>
  );
};

export default Chat;
