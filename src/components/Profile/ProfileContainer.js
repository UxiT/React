import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
    .get(`http://127.0.0.1:8000/api/v1/users/user/2`)
    .then((response) => {
      this.props.setUserProfile(response.data)
    });
  }

  render() {
    return <Profile props={...this.props}/>;
  }
}

let mapStateToProps = (state) => ({})
let mapDispatchToProps = {setUserProfile}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)