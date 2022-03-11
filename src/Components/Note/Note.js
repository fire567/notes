import React, {useState} from "react";
import "./Note.css";

const Note = () => {
    const [isHover, setIsHover] = useState(false)

    return(
        <div className="note-form" onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <div  className="inner-note-form">
            <div className="note-header">
                <div className="subject-of-note">
                    Тема задачи
                </div>
                <div className={isHover ? "rewrite-note" : "rewrite-note-hidden"}>
                </div>
            </div>
                <div className="text-of-note">
                    Текст задачи
                </div>
                <div className="note-border-line">
                </div>
                <div className="note-footer">
                    <div className="note-deadline">
                        30.01.2022
                    </div>
                    <div className="done-delete-note-buttons">
                        <button className="note-done-button">Выполнено</button> / <button className="note-delete-button">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note;