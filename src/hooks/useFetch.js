import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, sortedData: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    let sortedData = data.sort((a, b) => {
                        return a.tech.localeCompare(b.tech);
                    });
                    setState({
                        loading: false,
                        error: null,
                        data,
                        sortedData
                    })
                }
            }).catch(() => {
                setState({
                    data: null,
                    sortedData: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url]);

    return state;
}