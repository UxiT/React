import React from "react";
import Message from "./Message";
import Chat from "./Chat";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagesReducer";
import { connect } from "react-redux";


let mapStateToProps = (state) =>{
  return{
    messages: state.messagesPage.messages.map((m) => <Message text={m.text}/>),
    newMessageBody: state.messagesPage.newMessageBody,
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    onChange: (body)=>{
      dispatch(updateNewMessageBodyCreator(body));
    },
    onSend: ()=>{
      dispatch(sendMessageCreator());
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;
