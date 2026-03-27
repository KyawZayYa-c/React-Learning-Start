'use client';

import {useState} from "react";

export default function FormDemo() {
    const [newTodo,setNewTodo] = useState('');

    console.log('new Todo ', newTodo);
    const onChange = (e) => {
        // console.log('e.target.value', e.target.value);
        setNewTodo(e.target.value);
    }

    const addTodo = () => {
        console.log('New To do '+newTodo);
        setNewTodo('');
    }
    return(
        <div>
            <h3>Todo Text</h3>
            <input type={"text"} value={newTodo}  onChange={onChange} />
            <button type={'button'} onClick={addTodo} >Add</button>
        </div>
    )
}