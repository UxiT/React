import react, { React } from "react";
import st from "./friends.module.css";
import * as axios from "axios";

class Users extends react.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("http://127.0.0.1:8000/api/v1/users/list").then((response) => {
        this.props.setUsers(response.data);
        console.log(response.data);
      });
    }
  };

  render() {
    return (
      <div className={st.wrapper}>
        <button onClick={this.getUsers}>Get users</button>
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
