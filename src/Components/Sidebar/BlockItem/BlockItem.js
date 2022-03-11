import React from "react";
import "./BlockItem.css";

const BlockItem = ({name}) => {
    return (
        <div className="sidebar-item-form">
            <li className="sidebar-item-label">
                {name}
            </li>
        </div>
    )
}

export default BlockItem;