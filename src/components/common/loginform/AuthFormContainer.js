import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SingupForm";
import AuthForm from "./AuthForm";

class AuthFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      username: "",
      logged_in: localStorage.getItem("token") ? true : false,
    };
  }

  // check if token is stored in local storage and gets current user's username

  componentDidMount() {
    if (this.state.logged_in) {
      fetch("http://localhost:8000/core/current-user", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ username: json.username });
        });
    }
  }

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
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.user.username,
        });
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
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.username,
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({
      logged_in: false,
      username: "",
    });
  };

  display_form = (form) => {
    this.setState({
      displayed_form: form,
    });
    console.log(this.state);
  };

  render() {
    let form;

    switch (this.state.displayed_form) {
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
          {this.state.logged_in
            ? `Hello, ${this.state.username}!`
            : "Please log in >"}
        </h3>
        <AuthForm
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
          form={form}
        />
      </div>
    );
  }
}

export default AuthFormContainer;
