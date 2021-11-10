import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { setProfile } from '../../redux/navReducer'


let mapStateToProps = (state)=>{
    return{
        nav: state.nav,
        id: state.auth.userId
    }
};

let mapDispatchToProps = {setProfile}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;