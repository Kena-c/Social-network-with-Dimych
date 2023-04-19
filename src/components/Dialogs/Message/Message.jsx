import React from "react";
import c from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div>
            <div className={c.messages}>{props.message}</div>
        </div>

    );
}

export default Message;