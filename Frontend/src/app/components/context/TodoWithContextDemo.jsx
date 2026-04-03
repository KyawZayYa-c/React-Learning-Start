'use client';


import {todoReducer} from "../reducer/TodoListWithReducer";
import {useReducer} from "react";
import TodoCount from "./TodoCount";
import TodoWithContext from "./TodoWithContext";
import {TodoContext} from "./TodoContext";

const initialState = [
    {
        id : '1',
        title: 'Task 1',
    },{
        id : '2',
        title: 'Task 2',
    },{
        id : '3',
        title: 'Task 3'
    }
];

export default function TodoWithContextDemo(){
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const todoContext = {
        todos : todos,
        dispatch
    }

    return(
        <TodoContext.Provider value={todoContext} >
            <TodoCount />
            <TodoWithContext />
        </TodoContext.Provider>
    )
}