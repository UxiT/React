import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { followAC, unfollowAC, setUsersAc, setPageAC, setTotalCountAC } from "../../redux/usersReducer";

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

const UsersC = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersC;
