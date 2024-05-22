import { useState } from "react";

export default function LoginControl(props) {
    const[isLoggedIn,setIsTLogedIn] = useState(false);
    const handleLoginClick = () => {
        setIsTLogedIn(true);
    };

    const handleLogoutClick = () => {
        setIsTLogedIn(false);
    }
    let button;
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>;
    }else{
        button = <LoginButton onClick={handleLoginClick}/>;
    }
    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    );
}
function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            로그인
        </button>
    );
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            로그아웃
        </button>
    );
}
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <p>환영합니다</p>;
    }
    else{
        return <p>로그인해주세요</p>;
    }
}
