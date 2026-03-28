'use client';


import {todoReducer} from "@/app/components/reducer/TodoListWithReducer";
import {useReducer} from "react";
import TodoCount from "@/app/components/context/TodoCount";
import TodoWithContext from "@/app/components/context/TodoWithContext";
import {TodoContext} from "@/app/components/context/TodoContext";

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