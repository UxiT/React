import React from "react";
import st from './friends.module.css'


const Friend = (props) =>{
    return(
        <div className={st.friend}>
            <div className={st.img__wrapper}>
                <img src={props.img} alt="#"/>
            </div>
            
            <h2 className={st.name}> {props.name} </h2>
        </div>
    )
}

export default Friend;