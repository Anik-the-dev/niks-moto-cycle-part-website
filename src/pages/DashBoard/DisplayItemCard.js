import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DisplayItemCard = ({ singleItem }) => {
    const { _id, name, image} = singleItem
    const [modifiedData, setModifiedData] = useState([singleItem])
    const navigate = useNavigate()

    const [addquantity, setAddQuantity] = useState(0)
    console.log("modifiedData", modifiedData)
    console.log("modifiedData quantity", modifiedData[0].available_quantity)

    const handleQuantityForm = (e) => {
        e.preventDefault()
        const availableQuantity = parseInt(addquantity) + parseInt(modifiedData[0].available_quantity)

        const data = {availableQuantity}
        console.log("data quantity", data)



        fetch(`https://salty-refuge-93523.herokuapp.com/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Update Success:', data);
                toast("Product Added Successfully!")
                e.target.reset()
                if (data.modifiedCount > 0) {
                    fetch(`https://salty-refuge-93523.herokuapp.com/products/${_id}`)
                        .then(res => res.json())
                        .then(data => {
                            setModifiedData(data)

                        })



                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (

        <Container>

            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{ color: "#2F2869" }}>Product: {name}</h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text '>
                        <img className='img-fluid p-3 rounded border' src={image} alt='product' />

                    </div>

                </Col>

                <Col sm>
                    {
                        modifiedData.map(i => <ListGroup as="ul" className='w-75 mx-auto' >
                            <ListGroup.Item as="li" className='fw-6 text-start'>
                                Product: {i.name}
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>
                                Price : ${i.price}
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>Description:{i.description}</ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>
                                Available Quantity: {i.available_quantity}
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>Minimum Order: {i.minimum__ordered_quantity}</ListGroup.Item>
                            


                        </ListGroup>)
                    }

                    <Card className='p-5 mt-5 w-75 mx-auto'>
                        <h2>Add Products Stock</h2>

                        <form onSubmit={handleQuantityForm}>
                            <Form.Control className='mt-3' onBlur={(e) => setAddQuantity(e.target.value)} type="number" name="quantity" placeholder="Add Quantities" required>

                            </Form.Control>

                            <input type="submit" value="Add" className="btn btn-primary w-50 p-2 m-3" style={{ backgroundColor: "#21C9B6", border: "none" }}></input>

                        </form>
                        <ToastContainer></ToastContainer>




                    </Card>

                </Col>
            </Row >


        </Container >
    );
};

export default DisplayItemCard;