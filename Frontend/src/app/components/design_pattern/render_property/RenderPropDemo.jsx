'use client';

import {Component} from "react";
import RenderPropTodo from "./RenderPropTodo";

const initItem = [
    {
        id : '1',
        title: 'Task 1',
    },{
        id : '2',
        title: 'Task 2',
    },{
        id : '3',
        title: 'Task 3',
    }
]

export default function RenderPropDemo() {
    return(
        <div>
            <RenderPropTodo todos={initItem} render={(todo) => <h1 key={todo.id}>
                {todo.title}
            </h1>} />
            <hr/>
            <RenderPropTodo todos={initItem} render={(todo) => <p key={todo.id} >
                {todo.title}
                </p>} />
            </div>
    )
}