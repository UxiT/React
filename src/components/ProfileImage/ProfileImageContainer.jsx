import ProfilePicture from "./ProfileImage";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return (
        {
            img: state.profilePage.profile.img
        }
    )
}

const ProfilePictureContainer = connect(mapStateToProps)(ProfilePicture);

export default ProfilePictureContainer;
