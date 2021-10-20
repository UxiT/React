import React from "react";
import st from "./profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PostsContainer from "../Posts/PostsContainer";
import ProfilePicture from "../ProfileImage/ProfileImage";
import Preloader from "../common/preloader/preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={st.profile}>
        <div className={st.profile__top}>
          <ProfilePicture img={props.profile.img} />
          <ProfileInfo
            addPost={props.addPost}
            editPostText={props.editPostText}
            name={props.profile.name}
            newPostText={props.newPostText}
          />
        </div>
        <PostsContainer />
      </div>
    );
  }
};

export default Profile;
