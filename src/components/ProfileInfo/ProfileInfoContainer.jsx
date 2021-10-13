import React from 'react';
import { editPostTextAC, addPostAC } from '../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return{
        newPostText: state.profilePage.newPostText,
        name: state.profilePage.profile.name,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch(addPostAC());
        },
        editPostText: (text) =>{
            let action = editPostTextAC(text); // object
            dispatch(action);
        },
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;