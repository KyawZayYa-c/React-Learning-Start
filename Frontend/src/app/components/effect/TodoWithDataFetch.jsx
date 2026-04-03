'use client';

import {useEffect, useState} from "react";

export default function TodoWithDataFetch() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log('todos ', todos)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, []);
    return(
        <div>
            {
                todos.map(td => <div key={td.id}>
                    {td.title}
                </div>)
            }
        </div>
    )
}