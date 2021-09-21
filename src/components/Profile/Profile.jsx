import React from "react";
import st from "./profile.module.css";
import Post from "./../Post/Post";

const ProfileInfo = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let editPostText = () => {
    let text = newPostElement.current.value;
    props.editPostText(text);
  };

  return (
    <div className={st.wrapper}>
      <div className={st.name}>
        <h1>
          {props.name} {props.lastname}
        </h1>
        <span className={`${st.online} ${st.active}`}>online</span>
      </div>
      <div className={st.info}></div>

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

const ProfilePicture = (props) => {
  return (
    <div className={st.picture}>
      <div className={st.wrapper}>
        <img src={props.img} alt="profile picture" />
      </div>
    </div>
  );
};

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
          addPost={props.addPost}
          editPostText={props.editPostText}
          newPostText={props.state.newPostText}
        />
      </div>

      <div className={st.posts}>{posts}</div>
    </div>
  );
};

export default Profile;
