import {useEffect, useState} from "react";

export default function useFectchData(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response =>{
                if (!response.ok) {
                    throw new Error('error response ok');
                }
                return response.json();
            })
            .then(json => {
                    setData(json);
                    setLoading(false);
                }
            )
            .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    return [data, loading, error];
}