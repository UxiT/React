import react, { React } from "react";
import st from "./friends.module.css";
import * as axios from "axios";

class Users extends react.Component {
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
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <div className={st.wrapper}>
        <div className={st.pages}>
          {pages.map((p) => {
            return (
              <div
                key={p}
                className={st.pages__num}
                onClick={() => {
                  this.setPage(p);
                }}
              >
                <span className={this.props.currentPage === p ? st.selected : null}> {p} </span>
              </div>
            );
          })}
        </div>

        {this.props.users.map((u) => (
          <div key={u.id} className={st.friend}>
            <div className={st.img__wrapper}>
              <img src={u.img} alt='#' />
            </div>

            <div className={st.text}>
              <h2 className={st.name}> {u.name} </h2>
              <div className={st.location}>
                <h3 className={st.city}>{u.city}</h3>
                <h3 className={st.country}> {u.country} </h3>
              </div>
              <p className={st.status}> {u.status}</p>
            </div>

            {u.follow ? (
              <button
                onClick={() => {
                  this.props.unfollow(u.id);
                }}
                className={st.follow}
              >
                <span>Unfollow</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.follow(u.id);
                }}
                className={st.follow}
              >
                <span>Follow</span>
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
