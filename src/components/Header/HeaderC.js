import React from "react";
import { connect } from "react-redux";
import Header from './Header';


class HeaderContainer extends React.Component{

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = () =>({
    a: 13
})

let mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)