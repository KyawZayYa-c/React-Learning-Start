'use client';

import {useEffect, useState} from "react";

function Timer ({time}){
    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default function TimerDemo() {
    const [now, setNow] = useState(new Date());
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Setinterval registered!');
      let time =  setInterval(() => {
            setNow(new Date());
            console.log("time");
        }, 1000)
        return( () => {
            console.log('Interval registered!');
            clearInterval(time)
        })
    }, []);

    console.log('Render ')

    return (
        <div>
            <h1>Timer Demo</h1>
            <Timer time = {now} />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} type={'button'} > + </button>
        </div>
    )
}