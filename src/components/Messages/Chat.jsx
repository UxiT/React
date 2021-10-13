import React from "react";
import st from "./messages.module.css";
import Message from "./Message";

const Chat = (props) => {

  let onChange = (e) =>{ // Update textarea text on key press
    let body = e.target.value;
    props.onChange(body);
  } 

  let adjustHeight = (e)=>{
    e.target.style.height = "1px";
    let height = (e.target.scrollHeight);
    if(height >= 150){
      e.target.style.height = "150px"
    }
    else{
      e.target.style.height = height+"px";
    }
    
  };

  // let resetHeight = function(e){
  //   console.log(e.target)
  // }

  let onSend = (e) =>{
    props.onSend();
    // resetHeight(e);
  }

  let messages = props.messages.map((m) => <Message text={m.text} key={m.id}/>)

  return (
    <div className={st.chat}>
      <div className={st.message_block}>
        {messages}
      </div>
      <div className={st.textarea}>
        <textarea 
              value={props.newMessageBody}
              onChange={onChange} 
              onKeyUp={adjustHeight}
              placeholder='Write something..'></textarea>
        <button onClick={onSend} className={st.send}></button>
      </div>
    </div>
  );
};

export default Chat;
