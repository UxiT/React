import React from "react";
import st from './navbar.module.css'

const Nav = () => {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <span className={st.text}>Projects</span>
            </div>
            <div className={st.item}>
                <span className={st.text}>Skills</span>
            </div>
            <div className={st.item}>
                <span className={st.text}>About</span>
            </div>
            <div className={st.item}>
                <span className={st.text}>Links</span>
            </div>
        </nav>
    )
}

export default Nav;