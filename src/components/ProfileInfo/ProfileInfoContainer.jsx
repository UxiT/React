import React from 'react';
import { editPostText, addPost } from '../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return{
        newPostText: state.profilePage.newPostText,
        name: state.profilePage.profile.name,
    }
}

let mapDispatchToProps = {addPost, editPostText}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;