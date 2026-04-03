'use client';

import {useEffect, useState} from "react";

export default function LoadTodo() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log('todos ', todos)
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                    setTodos(json);
                    setLoading(false);
                }
            )
            .catch(error => setError(error));
    }, []);
    return(
        <div>
            <h1>{loading && !error && <div>Loading....</div>}</h1>
            {error && <div>Something error....</div>}
            { !error &&
                todos.map(td => <div key={td.id} >
                    {td.title}</div>)
            }
        </div>
    )
}