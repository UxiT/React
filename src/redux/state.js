let renderPage = () => {};

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
    },
  },

  getState() {
    return this._state;
  },

  addPost() {
    let obj = {
      id: 2,
      name: "John Doe",
      img: "https://bit.ly/3BUJXdi",
      text: state.profilePage.newPostText,
      date: "none",
      likes: 0,
      reposts: 0,
    };

    state.profilePage.posts.push(obj);
    state.profilePage.newPostText = "";
    renderPage(state);
  },

  editPostText(newText) {
    state.profilePage.newPostText = newText;
    renderPage(state);
  },

  subscribe(observer) {
    renderPage = observer;
  },
};

export default store;
