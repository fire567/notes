import React from "react";
import SidebarBlock from "./SidebarBlock/SidebarBlock";
import { isSidebarOpen } from "../../actions";
import { connect } from "react-redux";
import "./Sidebar.css";

const Sidebar = ({openSidebar, isSidebarOpen}) => {

    const dateFilter = [
        {
            id: 0,
            label: "По дате",
            data: [
                {id: 0, name: "Все"},
                {id: 1, name: "Сегодня"},
                {id: 2, name: "Предстоящие"},
            ]
        },
        {
            id: 1,
            label: "По занятиям",
            data: [
                {id: 0, name: "Путешествие"},
                {id: 1, name: "Встреча"},
                {id: 2, name: "Работа"},
            ]
        },
    ]

    const closeSidebarHandler = () => {
        isSidebarOpen(false)
    }

    return(
        <>
            <div className={openSidebar ? "mobile-sidebar-background" : "mobile-sidebar-background-close"}>
                <div className={openSidebar ? "sidebar-form" : "sidebar-form-false"}>
                    <div className="close-sidebar-form">
                        <span className="close" onClick={() => closeSidebarHandler()}></span>
                    </div>
                    {dateFilter.map((el) => (
                        <SidebarBlock label={el.label} data={el.data}/>
                    ))}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        openSidebar: state.openSidebar,
        isSidebarOpen: state.isSidebarOpen,
    }
}

export default connect(mapStateToProps, {
    isSidebarOpen: isSidebarOpen,
})(Sidebar);