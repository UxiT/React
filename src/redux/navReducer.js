const SET_PROFILE = "SET_PROFILE"


let initState = {
    profile: { id: 1, to: "profile", text: "My Profile" },
    messages: { id: 2, to: "messages", text: "Mesages" },
    users: { id: 3, to: "users", text: "Users" },
    feed: { id: 4, to: "feed", text: "Feed" },
    media: { id: 5, to: "media", text: "Media" },
};

export const setProfile = (id) => ({type: SET_PROFILE, id: id})

const navReducer = (state = initState, action) => {

  switch(action.type){
    case SET_PROFILE:
      return{
        ...state,
        profile: {id: 1, to: `profile/${action.id}`, text: "My Profile"}
        
      }
    default:
      return state
  }
  
  
};

export default navReducer;
