import React from "react";
import c from './Friends.module.css'
import MyFriends from "./MyFriends/MyFriends";

const Friends = (props) => {

    let MyFriendsElements = props.friends.map(f => <MyFriends name={f.name}/>);
    return (
        <div>
            <div className={c.friends}>
                {MyFriendsElements}
            </div>
        </div>
    );
}

export default Friends;