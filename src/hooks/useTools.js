import { useEffect, useState } from 'react';


const useTools = () => {
    const [items, setItems] = useState([])
    useEffect(() => {

        fetch("http://localhost:4000/products")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useTools;