'use client'

import {useState} from "react";

function Child({count, onClick}) {
    console.log('Child render...');
    return <div>
        Child count: {count}
        <button onClick={onClick}>Click</button>
    </div>
}

export default function WhyUseCallback() {
    const [count, setCount] = useState(0);
    function onClickHandler() {
        console.log('Count : ', count);
    }
    console.log('Parent render....');
    return <div>
        <h1>Why Use Call Back?</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Update</button>
        <Child onClick={onClickHandler} count={count} />
    </div>
}