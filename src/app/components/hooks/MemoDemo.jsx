'use client';
import {useState} from "react";

function factorial(n){
    console.log('Compute factorial : ',n);
    let result = 1;
    for (let i = 1; i <= n; ++i) {
        result *= i;
    }
    return result;
}

export default function MemoDemo() {
    const [n, setN] = useState(0);

    return(
        <div>
            <input type={"text"} value={n}  onChange = {e=>setN(e.target.value)} />
            <h1>{n} Factory of : {factorial(n)}</h1>
            Use Memo
        </div>
    )
}
