import React, {useState} from "react";
import BlockItem from "../BlockItem/BlockItem";
import "./SidebarBlock.css";

const SidebarBlock = ({label, data}) => {

    const [open, setOpen] = useState(false)

    return(
        <div className="block-form">
            <div className="block-label" onClick={() => setOpen(!open)}>
                <i className={`arrow ${open ? "down" : "up"}`}></i>
                <ul className="sidebar-label">
                    {label}
                </ul>
            </div>
            <div className={open ? "dropdown-form-active" : "dropdown-form"}>
                {data.map((el) => (
                    <BlockItem name={el.name}/>
                ))
                }
            </div>
        </div>
    )
}

export default SidebarBlock;