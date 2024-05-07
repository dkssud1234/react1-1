import React ,{useState, useEffect}from 'react';

export default function Counter(props) {

    // const [isOnline, setIsOnline] = useState(null);
    // function handleStatusChange(status){
    //     setIsOnline(status.setIsOnline);
    // }
    // useEffect(() => {
    //     ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    //     return () => {
    //         ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    //     };
    // })
    // if(isOnline == null){
    //     return "대기중..."
    // }
    // return isOnline ? "온라인" : "오프라인";
    
    
    const [count , setCount] = useState(0);
    
    // const Counter=()=>{
    //     setCount(count+1)
    // }

    useEffect(() => {
        console.log("컴포넌트가 렌더링되었습니다.");
    });

    return(
        <>
        <p>{count}번 눌림</p>
        <button onClick={()=> setCount(count+1)}>증가</button>
        </>
    )

}

