'use client';


import {useEffect, useState} from "react";

export default function EffectLifCycle() {
    const [count , setCount] = useState(0);
    const [another, setAnother] = useState(0);

    useEffect(() => {
        console.log('UseEffect1 fire!');
    }, [count])
    useEffect(() => {
        console.log('UseEffect2 fire!');
    }, [another])
    useEffect(() => {
        console.log('UseEffect3 fire!');
    }, [count, another]);

    console.log('Render ');


    return (<div>
        <button onClick={() => setCount(count + 1)} type={'button'} > + </button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)} type={'button'} > - </button>
      <br/>  <button onClick={() => setAnother(another + 1)} type={'button'} > Another </button>
    </div>)
}