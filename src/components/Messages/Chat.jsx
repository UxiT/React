import React from "react";
import st from "./messages.module.css";
import Message from "./Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagesReducer";

const Chat = (props) => {
  let messages = props.state.messages.map((m) => <Message text={m.text} />);
  let newMessageBody = props.state.newMessageBody; // new message text from state.js

  let onChange = (e) =>{ // Update textarea text on key press
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  } 

  let onSend = (e) =>{
    props.dispatch(sendMessageCreator());
  }

  let adjustHeight = (e)=>{
    e.target.style.height = "1px";
    let height = (5 + e.target.scrollHeight);
    if(height >= 150){
      e.target.style.height = "150px"
    }
    else{
      e.target.style.height = height+"px";
    }
    
  };

  return (
    <div className={st.chat}>
      <div className={st.message_block}>
        {messages}
      </div>
      <div className={st.textarea}>
        <textarea 
              value={newMessageBody}
              onChange={onChange} 
              onKeyUp={adjustHeight}
              placeholder='Write something..'></textarea>
        <button onClick={onSend} className={st.send}></button>
      </div>
    </div>
  );
};

export default Chat;
