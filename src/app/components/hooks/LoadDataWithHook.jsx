'use client';

import useFectchData from "@/app/components/hooks/useFectchData";

export default function LoadDataWithHook() {
    const [data, loading, error] = useFectchData('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <h1>{loading && !error && <div>Loading....</div>}</h1>
            {error && <div>Something error....</div>}
            { !error &&
                data.map(td => <div key={td.id} >
                    {td.name}</div>)
            }
        </div>
    )
}