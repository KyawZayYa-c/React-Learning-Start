'use client';

import {useState} from "react";

function BatchUpdateCounter(){
     const [count, setCount] = useState(0);

     const increment = () => {
         console.log('Counter increment ', count);
         setCount(count => count + 1);
         setCount(count =>count + 1);
         setCount(count =>count + 1);
     }

     const decrement = () => {
         console.log('Counter decrement ', count);
         setCount(count - 1);
     }

     return(
         <div>
             <button onClick={increment} >+</button>
             <h1>{count}</h1>
             <button onClick={decrement} >-</button>
         </div>
     )
}

export default function BatchUpdateDemo(){
    return(
        <div>Batch Updated Demo
            <BatchUpdateCounter />
        </div>

    )
}