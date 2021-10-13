import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navReducer from "./navReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.nav = navReducer(this._state.nav, action);

    this._renderPage(this._state);
  },
};

export default store;
