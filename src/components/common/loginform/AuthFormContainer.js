import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SingupForm";
import AuthForm from "./AuthForm";
import { connect } from "react-redux";
import { setForm, setUser, logout } from "../../../redux/authReducer";

class AuthFormContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     displayed_form: "",
  //     username: "",
  //     logged_in: localStorage.getItem("token") ? true : false,
  //   };
  // }

  // check if token is stored in local storage and gets current user's username

  // componentDidMount() {
  //   if (this.state.logged_in) {
  //     fetch("http://localhost:8000/api/v1/current-user", {
  //       headers: {
  //         Authorization: `JWT ${localStorage.getItem("token")}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState({ username: json.username });
  //         console.log(json)
  //       });
  //   }
  // }

  // TOKEN AUTH AT api/v1/token-auth/
  handle_login = (e, data) => {
    try{
    e.preventDefault();
    fetch("http://localhost:8000/api/v1/token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.props.setUser(json.user);
      });
    }
    catch (error){
      console.log(error)
    }
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:8000/core/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.props.setUser();
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.props.logout();
  };

  display_form = (form) => {
    this.props.setForm(form);
  };

  render() {
    let form;
    

    switch (this.props.displayed_form) {
      case "login":
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case "signup":
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;

      default:
        form = null;
    }

    return (
      <div className="form">
        <h3>
          {this.props.logged_in
            ? `Hello, ${this.props.username}!`
            : "Please log in >"}
        </h3>
        <AuthForm
          logged_in={this.props.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
          form={form}
        />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return({
    displayed_form: state.auth.displayed_form,
    username: state.auth.username,
    logged_in: state.auth.logged_in
  })
}

const mapDispatchToProps = {setUser, setForm, logout}

const AuthFormC = connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer)

export default AuthFormC;
