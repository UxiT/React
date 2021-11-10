import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { isToken, setUser } from "./redux/authReducer";


class AppContainer extends React.Component{
    is_token = () =>{
        let token = localStorage.getItem("token");
        if(token != null){
            this.props.isToken()
        }
    }

    componentDidMount() {

      this.is_token();

      if(localStorage.getItem("token") != null ) {
        fetch("http://localhost:8000/api/v1/current-user", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            this.props.setUser(json)
            
          });
      }
    }  
  
    render(){
      return <App {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        userId: state.auth.userId,
        username: state.auth.username,
        logged_in: state.auth.logged_in
    };
}

const mapDispatchToProps = {setUser, isToken}

const AppC = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppC