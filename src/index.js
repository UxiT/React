import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavItem from "./components/Sidebar/NavItem";
import Message from "./components/Messages/Message";
import Post from "./components/Post/Post";
import Dialog from './components/Dialogs/Dialog'

let messageData = [
  { id: "1", text: "Hiii" },
  { id: "2", text: "Hey, how are things?" },
  { id: "3", text: "Could've been better" },
];

let profileData = {
  name: "John Doe",
  img: "https://bit.ly/3BUJXdi",
};

let navData = [
  { to: "profile", text: "My Profile" },
  { to: "feed", text: "Feed" },
  { to: "messages", text: "Mesages" },
  { to: "media", text: "Media" },
  { to: "friends", text: "Friends" },
];

let postsData = [
  {id: "1", name: "John Doe", img: "https://bit.ly/3BUJXdi", text: "This is my firts post!", date: "08.09.2021", likes: "23", reposts: "3"},
  
]
let dialogsData = [
  {id: "1", title: "Geralt", img: "https://bit.ly/3tDkkLf"},
  {id: "2", title: "Triss", img: "https://bit.ly/3yWQ8vx"},
  {id: "3", title: "Ciri", img: "https://bit.ly/3BUfXhz"},
  {id: "4", title: "Dandelion", img: "https://bit.ly/38P2dIz"},
];

let dialogs = dialogsData.map( (el) =>{
  return(<Dialog id={el.id} title={el.title} img={el.img}/>)
});


let nav = navData.map((item) => <NavItem to={item.to} text={item.text} />);
let messages = messageData.map((message) => <Message text={message.text} />);
let posts = postsData.map(post => <Post name={post.name} img={post.img} text={post.text} date={post.date} likes={post.likes} reposts={post.reposts}/>)

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} profile={profileData} nav={nav} posts={posts} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
