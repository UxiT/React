import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAc } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
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
  };
};

const UsersC = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersC;
