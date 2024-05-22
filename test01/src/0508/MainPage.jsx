import { useState } from "react";
import WarningBanner from "./WarningBanner";

export default function MainPage(props){
    const [showWarning, setShowWarning] = useState(true);
    const handleToggleClick = () => {
        setShowWarning(!showWarning);
    }
    return(
        <div>
            <WarningBanner warning={showWarning}/>
            <button onClick={handleToggleClick}>
                {showWarning ? "숨기기" : "보이기"}
            </button>
        </div>
    );
}