import react from "react";
import st from './friends.module.css'

const Friends = (props) => {

    return (
        <div className={st.wrapper}>
            {props.users.map((u) =>
                <div key={u.id} className={st.friend}>
                    <div className={st.img__wrapper}>
                        <img src={u.img} alt="#" />
                    </div>

                    <div className={st.text}>
                        <h2 className={st.name}> {u.name} </h2>
                        <div className={st.location}>
                            <h3 className={st.city}>{u.location.city}</h3>
                            <h3 className={st.country}> {u.location.country} </h3>
                        </div>
                        <p className={st.status}> {u.status}</p>
                    </div>

                    {u.follow 
                    ? <button onClick={() => {props.unfollow(u.id)}} className={st.follow}>
                        <span>
                            Unfollow
                        </span>
                    </button>
                    : <button onClick={() => { props.follow(u.id)}} className={st.follow}>
                        <span>
                            Follow
                        </span>
                    </button> }



                </div>
            )}
        </div>
    )
}

export default Friends;