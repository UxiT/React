import React from "react";
import st from "./profile.module.css";
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostsContainer from "../Posts/PostsContainer";
import ProfilePictureContainer from "../ProfileImage/ProfileImageContainer";
import * as axios from "axios";

const Profile = (props) => {
  let data = axios.get("http://127.0.0.1:8000/api/v1/users/list").then((response) => {
    console.log(response);
  });

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
