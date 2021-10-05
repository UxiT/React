const ADD_POST = "ADD-POST";
const EDIT_POST_TEXT = "EDIT-POST-TEXT";

let initState = {
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
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };

      let obj = {
        id: 2,
        name: "John Doe",
        img: "https://bit.ly/3BUJXdi",
        text: stateCopy.newPostText,
        date: "none",
        likes: 0,
        reposts: 0,
      };

      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(obj);
      stateCopy.newPostText = "";
      return stateCopy;
    }

    case EDIT_POST_TEXT: {
      let stateCopy = { ...state };

      stateCopy.newPostText = action.text;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const editPostTextActionCreator = (text) => ({
  type: EDIT_POST_TEXT,
  newText: text,
});

export default profileReducer;
