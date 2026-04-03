'use client';
import {useState} from "react";

function Timer({time}){
    return (
        <h1>
            {
                time.toLocaleTimeString()
            }
        </h1>
    )
}

export default function TimmerDemo(){
    const [now , setNow] = useState(new Date());
    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return(
        <div>
            <Timer time = {now} />
        </div>
    )
}