import {useEffect, useState} from "react";

export const useFetch= <T, >(endpoint: string) => {

    const [object, setObject] = useState<T>();
    useEffect(() => {
        fetch(endpoint)
            .then(value => value.json())
            .then(value => setObject(value))
    }, [endpoint]);
    return object;
}
