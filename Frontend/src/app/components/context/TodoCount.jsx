'use client';

import {useContext} from "react";
import {TodoContext} from "./TodoContext";

export default function TodoCount() {
    const  {todos, dispatch} = useContext(TodoContext);
    return (
        <div>
            Todo count {todos.length}
        </div>
    )
}