import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const OrderTable = ({ singleItem }) => {
    const { _id } = singleItem
    const navigate = useNavigate()
    const [part, setPart] = useState([singleItem])

        // delete item
        const handleDeleteItem = (id) => {
            const proceed = window.confirm("Want to Delete?")
            if (proceed) {
                const url = `https://guarded-lowlands-14993.herokuapp.com/orders/${id}`
                fetch(url, {
                    method: 'delete'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const remainingUser = part.filter(item => item._id !== id)
    
                            setPart(remainingUser)
    
                        }
                    })
    
    
            }
    
        }

    return (
        <>
            {
                part.map(item => <tr>

                    <td>{item.pName}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}.0</td>
                    
                    <td>
                        <Button onClick={() => navigate(`/payment/${_id}`)} className="btn btn-primary text-dark bg-warning px-4" style={{ border: 'none' }}>Pay Now</Button>
                    </td>
                    <td>
                        <Button  onClick={() => handleDeleteItem(_id)} className="btn btn-danger text-light px-4" style={{ border: 'none' }}>Cancel</Button>
                    </td>
                </tr>
                )
            }



        </>

    );
};

export default OrderTable;