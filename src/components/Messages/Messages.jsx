import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import ChatContainer from "./ChatContainer";
import st from "./messages.module.css";
import StoreContext from "../../redux/StoreContext";

const Messages = (props) => {
  return (
    <div className={st.messages}>
      <ChatContainer/>
      
      <StoreContext.Consumer>{
        (store) => (<Dialogs dialogs={store.getState().messagesPage.dialogs} />)
        }
      
      </StoreContext.Consumer>
    </div>
  );
};

export default Messages;
