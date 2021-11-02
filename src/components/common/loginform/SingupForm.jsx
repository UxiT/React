import React from 'react';

class SignupForm extends React.Component{
    state={
        username : "",
        password : ""
    };

    handle_change = e =>{
        const name = e.target.name;
        const value = e.target.value;


        this.setState(prevstate =>{
            const newState = {...prevstate};
            newState[name] = value;

            return newState;
        })
    };

    render(){
        return(
            <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                <h4>Sign Up</h4>

                <label htmlFor="username">Username</label>
                <input anme="username" type="text"  value={this.state.username} onChange={this.handle_change}/>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handle_change}/>

                <input type="submit" />
            </form>
        )
    }
}

export default SignupForm;