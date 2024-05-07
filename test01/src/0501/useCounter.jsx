import React, {useState} from "react";

function useCounter(initialValue){
    const [ count, setCount ] = useState(initialValue);

    const increasecount = () => setCount((count) => count + 1);
    const decreasecount = () => setCount((count) => Math.max(count - 1,0));

    return[count, increasecount,decreasecount]
}

export default useCounter;

