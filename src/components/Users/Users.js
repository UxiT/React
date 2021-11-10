import react from "react";
import st from "./users.module.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                props.setPage(p);
              }}
            >
              <span className={props.currentPage === p ? st.selected : null}>
                {" "}
                {p}{" "}
              </span>
            </div>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={st.friend}>
          <NavLink to={`profile/${u.id}`}>
            <div className={st.img__wrapper}>
              <img src={u.profile_img} alt="#" />
            </div>
          </NavLink>

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
                props.unfollow(u.id);
              }}
              className={st.follow}
            >
              <span>Unfollow</span>
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(u.id);
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
};

export default Users;
