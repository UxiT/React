import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";


let mapStateToProps = (state)=>{
    return{
        nav: state.nav
    }
};

let mapDispatchToProps = (dispatch)=>{};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;