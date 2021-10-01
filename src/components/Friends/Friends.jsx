import react from "react";
import Friend from "./Friend"
import st from './friends.module.css'

const Friends = (props) =>{

    let friends = props.state.users.map((u) => <Friend name={u.name} img={u.img}/>)

    return(
        <div className={st.wrapper}>
            {friends}
        </div>
    )
}

export default Friends;