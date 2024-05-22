import { useState } from "react";
export default function NameForm() {
    const [value,setValue]=useState('');

    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('이름: '+value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label >
                이름:
                <input type="text" value={value} onChange={handleChange}/>
            </label>
        </form>
    )
}