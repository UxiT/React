let initState = [
  { id: 1, to: "profile", text: "My Profile" },
  { id: 2, to: "messages", text: "Mesages" },
  { id: 3, to: "users", text: "Usres" },
  { id: 4, to: "feed", text: "Feed" },
  { id: 5, to: "media", text: "Media" },
];

const navReducer = (state = initState, action) => {
  return state;
};

export default navReducer;
