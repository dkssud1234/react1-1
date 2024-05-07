import { useState, useEffect} from "react";

export default function UserStatus(props) {
    const [ isOnline, setIsOnline ] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.userId, handleStatusChange);
        }
})
if (isOnline === null) {
    return 'Loading...';
}
return isOnline ? 'Online' : 'Offline';}  