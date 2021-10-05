const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initState = {
  dialogs: [
    { id: "1", title: "Geralt", img: "https://bit.ly/3tDkkLf", messages: [{text: ""},] },
    { id: "2", title: "Triss", img: "https://bit.ly/3yWQ8vx" },
    { id: "3", title: "Ciri", img: "https://bit.ly/3BUfXhz" },
    { id: "4", title: "Dandelion", img: "https://bit.ly/38P2dIz" },
  ],
  messages: [{ id: "1", text: "Hiii" }],

  newMessageBody: "",
};

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:{

      let stateCopy = {...state};
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE:{
      let stateCopy = {...state};

      let body = stateCopy.newMessageBody;
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({ id: 2, text: body });
      stateCopy.newMessageBody = "";
      return stateCopy;
    }

    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default messagesReducer;
