import React from "react";
import st from "./profile.module.css";
import Post from "./../Post/Post";
import { addPostActionCreator, editPostTextActionCreator } from "../../redux/profileReducer";
 
const Profile = (props) => {
  let posts = props.state.posts.map((post) => (
    <Post
      name={post.name}
      img={post.img}
      text={post.text}
      date={post.date}
      likes={post.likes}
      reposts={post.reposts}
    />
  ));

  return (
    <div className={st.profile}>
      <div className={st.profile__top}>
        <ProfilePicture img={props.state.profile.img} />
        <ProfileInfo
          name={props.state.profile.name}
          dispatch={props.dispatch}
          newPostText={props.state.newPostText}
        />
      </div>

      <div className={st.posts}>{posts}</div>
    </div>
  );
};


// Profile name + textarea to make a post
const ProfileInfo = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let editPostText = () => {
    let text = newPostElement.current.value;
    let action = editPostTextActionCreator(text); // object
    props.dispatch(action);
  };

  // component itself

  return (
    <div className={st.wrapper}>

      {/* top rectangle width profile name */}
      <div className={st.name}>
        <h1>
          {props.name} {props.lastname}
        </h1>
        <span className={`${st.online} ${st.active}`}>online</span>
      </div>

      {/* rectangle width profile information (empty for now) */}
      <div className={st.info}></div>

      {/* text area to create a new post */}

      <div className={st.addPost}>
        {/* text area */}
        <textarea
          onChange={editPostText}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost} className={st.post_button}>
          <span>Post</span>
        </button>
      </div>
    </div>
  );
};

// Profile picture

const ProfilePicture = (props) => {
  return (
    <div className={st.picture}>
      <div className={st.wrapper}>
        <img src={props.img} alt="profile picture" />
      </div>
    </div>
  );
};

// main Profile component



export default Profile;
