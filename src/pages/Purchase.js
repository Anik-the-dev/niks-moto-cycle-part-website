import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm'

const Purchase = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `https://salty-refuge-93523.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [id]);
    return (
        <div>
            {
                items.map(item => <PurchaseForm key={item._id} item={item}></PurchaseForm>
                )
            }

        </div>
    );
};

export default Purchase;