import React from "react";
import { connect } from "react-redux";
import AllNotes from "../AllNotes/AllNotes";
import "./Content.css";

const Content = ({openSidebar}) => {
    return(
        <div className="content-wrapper">
            <div className={openSidebar ? "content-part" : "max-width-content-part"}>
                <div className="content-header">
                    <h1 className="header-content-label">
                        Все
                    </h1>
                </div>
                <AllNotes />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        openSidebar: state.openSidebar,
    }
}

export default connect(mapStateToProps)(Content);