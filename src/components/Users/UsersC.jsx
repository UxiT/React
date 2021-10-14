import react from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAc, setPageAC, setTotalCountAC } from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends react.Component {
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },

    setPage: (page) => {
      dispatch(setPageAC(page));
    },

    setTotalCount: (count) => {
      dispatch(setTotalCountAC(count));
    },
  };
};

const UsersC = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersC;
