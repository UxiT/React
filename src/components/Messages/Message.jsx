import React from "react";
import st from "./messages.module.css";

const Message = (props) => {
  return (
    <div className={st.message}>
      <span>{props.text}</span>
    </div>
  );
};

export default Message;
