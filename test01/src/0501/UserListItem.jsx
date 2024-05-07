import { useState, useEffect} from "react";

export default function UserStatus(props) {
    const isOnline = unsubscribeUserStatus(props.userId)

    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>
        {props.user.name}
        </li>
    )
}
