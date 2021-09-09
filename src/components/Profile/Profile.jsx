import React from "react";
import st from './profile.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={st.wrapper}>
            <div className={st.name}>
                <h1>{props.name} {props.lastname}</h1>
                <span className={`${st.online} ${st.active}`}>online</span>
            </div>
            <div className={st.info}></div>
        </div>
    )
}

const ProfilePicture = (props) => {
    return (
        <div className={st.picture}>
            <div className={st.wrapper}>
                <img src={props.img} alt="profile picture" />
            </div>
        </div>
    )
}


const Profile = (props) => {
    return (
        <div className={st.profile}>
            <div className={st.profile__top}>
                <ProfilePicture img={props.img} />
                <ProfileInfo name={props.name} />
            </div>

            <div className={st.posts}>
                {props.posts}
            </div>
        </div>
    )
}

export default Profile;