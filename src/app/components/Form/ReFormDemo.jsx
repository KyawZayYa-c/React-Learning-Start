'use client';
import {useState} from "react";

export default function ReFormDemo() {

    const [newTodo, setNewTodo] = useState('');

    console.log('New Todo render ',newTodo);

    const onChange = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo = () => {
        console.log('add to do new todo ', newTodo)
        setNewTodo('');
    }

    return(<div>
        <input type={"text"} value={newTodo} onChange={onChange} />
        <button type={"button"} onClick={addTodo}>Add</button>
    </div>)
}