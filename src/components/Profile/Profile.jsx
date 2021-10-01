import React from "react";
import st from "./profile.module.css";
import Post from "./../Post/Post";
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import StoreContext from "../../redux/StoreContext";

const Profile = (props) => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState();

          let posts = state.profilePage.posts.map((post) => (
            <Post
              name={post.name}
              img={post.img}
              text={post.text}
              date={post.date}
              likes={post.likes}
              reposts={post.reposts}
            />));
          return (
            <div className={st.profile}>
              <div className={st.profile__top}>
                <ProfilePicture img={state.profilePage.profile.img} />
                <ProfileInfoContainer />
              </div>

              <div className={st.posts}>{posts}</div>
            </div>
          );

        }
      }
    </StoreContext.Consumer>)

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
