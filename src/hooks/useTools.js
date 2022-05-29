import { useEffect, useState } from 'react';


const useTools = () => {
    const [items, setItems] = useState([])
    useEffect(() => {

        fetch("https://salty-refuge-93523.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useTools;