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

  newPostText: "Hello everyone!",
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let obj = {
        id: 2,
        name: "John Doe",
        img: "https://bit.ly/3BUJXdi",
        text: state.newPostText,
        date: "none",
        likes: 0,
        reposts: 0,
      };

      return {
        ...state,
        posts: [...state.posts, obj],
        newPostText: "",
      };
    }

    case EDIT_POST_TEXT: {

      return {
        ...state,
        newPostText: action.newText,
      };
    }

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });

export const editPostTextAC = (text) => ({
  type: EDIT_POST_TEXT,
  newText: text,
});

export default profileReducer;
