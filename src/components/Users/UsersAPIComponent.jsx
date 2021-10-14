import react, { React } from "react";
import Users from "./Users";
import * as axios from "axios";

class UsersAPIComponent extends react.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`http://127.0.0.1:8000/api/v1/users/list?page=${this.props.currentPage}&size=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.results);
          this.props.setTotalCount(response.data.count);
        });
    }
  }

  setPage = (page) => {
    this.props.setPage(page);
    axios.get(`http://127.0.0.1:8000/api/v1/users/list?page=${page}&size=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.results);
    });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        setPage={this.setPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

export default UsersAPIComponent;
