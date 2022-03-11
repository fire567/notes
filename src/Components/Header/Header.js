import React from "react";
import { connect } from "react-redux";
import { isSidebarOpen } from "../../actions";
import "./Header.css";

const Header = ({isSidebarOpen, openSidebar}) => {

    const sidebarHandler = () => {
        isSidebarOpen(!openSidebar)
    }


    return(
        <header className="header-form">
            <div className="burger-menu" onClick={() => sidebarHandler()}>
                <div className="burger first"></div>
                <div className="burger second"></div>
                <div className="burger third"></div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        openSidebar: state.openSidebar
    }
}

export default connect(mapStateToProps, {
    isSidebarOpen: isSidebarOpen,
})(Header)