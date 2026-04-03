'use client'

import {useState} from "react";

export default function Counter(){

    console.log('Counter render');
    const [count, setCount] = useState(0);
    const [another, setAnother] = useState(10);

    const increase = ()=>{
        console.log('Counter increase ' ,count);
        setCount(count + 1);
    }

    const decrease = ()=>{
        console.log('Counter decrease ', count);
        setCount(count - 1);
    }

    const updateAnother = ()=>{
        console.log('Counter update another....');
        setAnother(another+2);
    }
    return(
        <div>
            <div>
                <button onClick={increase} >+</button>
                <h1>{count}</h1>
                <button onClick={decrease}>-</button>
            </div>

            <button onClick={updateAnother}>Update another</button>
            <h1>{another}</h1>
        </div>
    )
}