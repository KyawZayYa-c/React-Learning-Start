'use client';

import {useEffect, useState} from "react";

export default function LoadUser() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                    setUsers(json);
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
                users.map(td => <div key={td.id} >
                    {td.name}</div>)
            }
        </div>
    )
}