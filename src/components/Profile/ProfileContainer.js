import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

  // !!
  // NEED TO ADD THIS TO PROFILE LINK IN NAV!
  // !!
  
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.currentId;
    }

    axios.get(`http://127.0.0.1:8000/api/v1/users/edit/${userId}`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  currentId: state.auth.userId
});
let mapDispatchToProps = { setUserProfile };

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlProfileContainer);
