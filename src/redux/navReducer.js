
let initState = [
    { to: "profile", text: "My Profile" },
    { to: "messages", text: "Mesages" },
    { to: "friends", text: "Friends" },
    { to: "feed", text: "Feed" },
    { to: "media", text: "Media" },
   
  ];

const navReducer = (state = initState, action) =>{
    return state;
}

export default navReducer;