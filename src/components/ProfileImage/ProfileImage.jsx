import React from "react";
import st from "../Profile/profile.module.css"

const ProfilePicture = (props) => {
    return (
      <div className={st.picture}>
        <div className={st.wrapper}>
          <img src={props.img}  alt="Owner's profile"/>
        </div>
      </div>
    );
};

export default ProfilePicture;