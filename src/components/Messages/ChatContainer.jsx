import React from "react";
import Message from "./Message";
import Chat from "./Chat";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagesReducer";
import StoreContext from "../../redux/StoreContext";

const ChatContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let messages = state.messagesPage.messages.map((m) => <Message text={m.text} />);
          let newMessageBody = state.messagesPage.newMessageBody; // new message text from state.js

          let onChange = (body) => { // Update textarea text on key press
            store.dispatch(updateNewMessageBodyCreator(body));
          }

          let onSend = (e) => {
            store.dispatch(sendMessageCreator());
          }

          return (
            <Chat messages={messages} newMessageBody={newMessageBody} onChange={onChange} onSend={onSend} />
          )
        }
      }
    </StoreContext.Consumer>)
};

export default ChatContainer;
