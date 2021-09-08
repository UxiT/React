import React from "react";
import st from "./contacts.module.css"

const Contacts = () =>{
    return(
        <div className={st.contacts}>
            <a href="https://github.com/UxiT" className={st.link} target="_blank" data-contact="git"></a>
            <a href="" className={st.link} target="_blank" data-contact="gmail"></a>
            <a href="https://www.behance.net/tolstoff" className={st.link} target="_blank" data-contact="behance"></a>
            <a href="" className={st.link} target="_blank" data-contact="telegram"></a>
        </div>
    );
}

export default Contacts;