import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setLoad(true);
    axios
    .get(`http://127.0.0.1:8000/api/v1/users/profile/2`)
    .then((response) => {
      this.props.setUsers(response.data.results);
      this.props.setTotalCount(response.data.count);
      this.props.setLoad(false);
    });
  }

  render() {
    return <Profile props={...this.props}/>;
  }
}
