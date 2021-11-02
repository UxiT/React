import React from "react";
import st from './auth.module.css'

const AuthForm = (props) => {

  const logged_in = (
    <ul>
      <li className={st.auth_field} onClick={props.handle_logout}>Logout</li>
    </ul>
  );

  const logged__out = (
    <ul>
      <li className={st.auth_field} onClick={() => {props.display_form("login")}}>login</li>
      <li className={st.auth_field} onClick={() => props.display_form("signup")}>sign up</li>
    </ul>
  );

  return(
      <div>

        {props.logged_in ? logged_in: logged__out}
        <div className={st.auth_form}> 
            {props.form}
        </div>

        
      </div>
  )
};


export default AuthForm;