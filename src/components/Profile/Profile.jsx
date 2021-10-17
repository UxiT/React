import React from "react";
import st from "./profile.module.css";
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostsContainer from "../Posts/PostsContainer";
import ProfilePictureContainer from "../ProfileImage/ProfileImageContainer";

const Profile = () => {
  return (
    <div className={st.profile}>
      <div className={st.profile__top}>
        <ProfilePictureContainer />
        <ProfileInfoContainer />
      </div>
      <PostsContainer />
    </div>
  );
};

export default Profile;
