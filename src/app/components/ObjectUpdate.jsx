'use client';
import {useState} from "react";

export  default  function ObjectUpdate(){
    const [person, setPerson] = useState(
        {
            name : 'John',
            age : 30
        }
    );

    const updateAge = () => {
        setPerson({
            ...person,
            age : person.age + 1
        })
    }

    return (<div>
        <h1>Name {person.name}</h1>
        <h3>Age {person.age}</h3>
        <button type={'button'} onClick={updateAge} >Update Age</button>
    </div>)

}