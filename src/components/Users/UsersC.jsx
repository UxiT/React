import react from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setTotalCount, setLoad } from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends react.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.setLoad(true);
      axios
        .get(`http://127.0.0.1:8000/api/v1/users/list?page=${this.props.currentPage}&size=${this.props.pageSize}`)
        .then((response) => {
          debugger
          this.props.setUsers(response.data.results);
          this.props.setTotalCount(response.data.count);
          this.props.setLoad(false);
        });
    }
  }

  setPage = (page) => {
    this.props.setPage(page);
    this.props.setLoad(true);
    axios.get(`http://127.0.0.1:8000/api/v1/users/list?page=${page}&size=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.results);
      this.props.setLoad(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          setPage={this.setPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = { follow, unfollow, setUsers, setTotalCount, setLoad, setPage };

const UsersC = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersC;
