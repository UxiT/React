import React from 'react';
import { editPostTextActionCreator, addPostActionCreator } from '../../redux/profileReducer';
import ProfileInfo from './ProfileInfo';
import StoreContext from '../../redux/StoreContext';

const ProfileInfoContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let editPostText = (text) => {
                        let action = editPostTextActionCreator(text); // object
                        store.dispatch(action);
                    };

                    return (
                        <ProfileInfo addPost={addPost}
                            editPostText={editPostText}
                            newPostText={state.profilePage.newPostText}
                            name={state.profilePage.profile.name} />)
                }
            }
        </StoreContext.Consumer>
    )
}

export default ProfileInfoContainer;