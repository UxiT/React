const ADD_POST = "ADD-POST";
const EDIT_POST_TEXT = 'EDIT-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state: {
    nav: [
      { to: "profile", text: "My Profile" },
      { to: "feed", text: "Feed" },
      { to: "messages", text: "Mesages" },
      { to: "media", text: "Media" },
      { to: "friends", text: "Friends" },
    ],

    profilePage: {
      profile: {
        name: "John Doe",
        img: "https://bit.ly/3BUJXdi",
      },
      posts: [
        {
          id: "1",
          name: "John Doe",
          img: "https://bit.ly/3BUJXdi",
          text: "This is my firts post!",
          date: "08.09.2021",
          likes: 23,
          reposts: 3,
        },
      ],

      newPostText: "What's on your mind?",
    },

    messagesPage: {
      dialogs: [
        { id: "1", title: "Geralt", img: "https://bit.ly/3tDkkLf" },
        { id: "2", title: "Triss", img: "https://bit.ly/3yWQ8vx" },
        { id: "3", title: "Ciri", img: "https://bit.ly/3BUfXhz" },
        { id: "4", title: "Dandelion", img: "https://bit.ly/38P2dIz" },
      ],
      messages: [
        { id: "1", text: "Hiii" },
        { id: "2", text: "Hey, how are things?" },
        { id: "3", text: "Could've been better" },
      ],

      newMessageBody: "",
    },
  },

  _renderPage() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._renderPage = observer;
  },

  dispatch(action) {
    // {type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      let obj = {
        id: 2,
        name: "John Doe",
        img: "https://bit.ly/3BUJXdi",
        text: this._state.profilePage.newPostText,
        date: "none",
        likes: 0,
        reposts: 0,
      };

      this._state.profilePage.posts.push(obj);
      this._state.profilePage.newPostText = "";
      this._renderPage(this._state);

    } else if (action.type === EDIT_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._renderPage(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.messagesPage.newMessageBody = action.body;
      this._renderPage(this._state);
    }
    else if(action.type === SEND_MESSAGE){
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.messages.push({id: 6, text: body});
      this._state.messagesPage.newMessageBody = '';
      this._renderPage(this._state);
    }
    
  },
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const editPostTextActionCreator = (text) => 
        ({type: EDIT_POST_TEXT, newText: text })

export const updateNewMessageBodyCreator = (body)=> ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default store;
