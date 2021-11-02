import React from "react";
import AuthFormContainer from '../common/loginform/AuthFormContainer'

const Header = () =>{

    return(
        <header className="header">
            <h2 className="header__name"> Tolstov Vaslilii </h2>

            <div className="login__block">
                <AuthFormContainer/>
            </div>
        </header>
    );
}

export default Header;