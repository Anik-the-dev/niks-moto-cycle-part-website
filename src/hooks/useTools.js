import { useEffect, useState } from 'react';


const useTools = () => {
    const [items, setItems] = useState([])
    useEffect(() => {

        fetch("https://guarded-lowlands-14993.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useTools;