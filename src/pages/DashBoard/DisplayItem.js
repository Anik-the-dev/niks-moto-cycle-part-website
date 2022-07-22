import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayItemCard from './DisplayItemCard';

const DisplayItem = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(() => {
        const url = `https://salty-refuge-93523.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    return (
        <div>
            
            {
                items.map(item => <DisplayItemCard key={item._id} singleItem={item}></DisplayItemCard>
                )
            }
            
        </div>
    );
};

export default DisplayItem;