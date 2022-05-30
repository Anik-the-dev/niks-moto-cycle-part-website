import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, FormControl, FormLabel, ListGroup, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
import { toast } from 'react-toastify';
import axios from 'axios';

const PurchaseForm = ({ item }) => {
    const [user] = useAuthState(auth);
    const uName = user?.displayName
    const uEmail = user?.email
    const navigate = useNavigate()
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [quantity, setQuantity] = useState('')
    const { _id, name, image, description, price, minimum__ordered_quantity, available_quantity } = item
    const productId = _id
    const pName = name

    // handle place my order.
    const handlePlaceMyOrder = (e) => {
        e.preventDefault()
        const data = { uName, uEmail, address, mobile, quantity, productId, price, pName }
        axios.post('https://salty-refuge-93523.herokuapp.com/orders', data).then(res => toast("Congrats, We received your order."))

        e.target.reset()

    }
    return (
        <Container>
            <Row className='mx-auto my-5 d-flex justify-content-between align-items-start text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div>
                        <img className='p-3 rounded border' src={image} alt='product' style={{ width: '300px', height: '300px' }} />

                    </div>
                    <div className='d-flex mt-4 justify-content-center '>
                        <Card className='border-0' style={{ width: '22rem', margin: 'auto', marginBottom: '20px', }}>

                            <Card.Body className='text-start my-3'>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>Price: ${price}</Card.Text>

                                <Card.Text>
                                    {description}
                                    <br /><br />


                                </Card.Text>
                                <Card.Text className='fw-bold'>
                                    Available Products: {available_quantity}
                                </Card.Text>

                                <Card.Text className='text-success'>
                                    Minimum Order: {minimum__ordered_quantity}
                                </Card.Text>

                            </Card.Body>
                        </Card>


                    </div>

                </Col>
                <Col className='w-md-75 px-3 pt-5'>
                    <h2 className=' fs-2 text-center text-sm-start' style={{ color: '#F47C7C' }}>Add your details Here</h2>
                    <Form onSubmit={handlePlaceMyOrder} className='w-75'>
                        <div className='d-flex align-items-center justify-content-center gap-3'>
                            <FormLabel className='mt-4'>Name:</FormLabel>
                            <Form.Control className='mt-3 border-0 border-bottom' value={user?.displayName} type="text" name="name" disabled></Form.Control>
                        </div>

                        <div className='d-flex align-items-center justify-content-center gap-3'>
                            <FormLabel className='mt-4'>Email:</FormLabel>
                            <Form.Control className='mt-3 border-0 border-bottom' type="email" name="email" value={user?.email} disabled>

                            </Form.Control>
                        </div>

                        <div className='d-flex align-items-center justify-content-center gap-3'>
                            <FormLabel className='mt-4'>Address:</FormLabel>
                            <Form.Control className='mt-3 border-1' type="text" name="address" onBlur={(e) => setAddress(e.target.value)} required>

                            </Form.Control>
                        </div>


                        <div className='d-flex align-items-center justify-content-center gap-3'>
                            <FormLabel className='mt-4'>More:</FormLabel>
                            <Form.Control className='mt-3 border-1' type="text" name="info" placeholder='Optional'>

                            </Form.Control>
                        </div>

                        <div className='d-flex align-items-center justify-content-center gap-3'>
                            <FormLabel className='mt-4'>Mobile:</FormLabel>
                            <Form.Control className='mt-3 border-1' type="text" name="mobile" onBlur={(e) => setMobile(e.target.value)} required>

                            </Form.Control>
                        </div>

                        <div className='d-flex align-items-center justify-content-center gap-3'>
                            <FormLabel className='mt-4'>Quantity:</FormLabel>
                            <Form.Control className='mt-3 border-1' type="number" name="quantity" onChange={(e) => setQuantity(e.target.value)} required>

                            </Form.Control>
                        </div>
                        {
                            (quantity < minimum__ordered_quantity && quantity > available_quantity) && <p className='fw-bold text-danger'>Check the Available and minimum ordered limit</p>

                        }

                        <input type="submit" value="Place The Order Now" className="btn btn-primary w-100 my-3 border-0 p-2 mx-auto" disabled={(quantity < minimum__ordered_quantity && quantity > available_quantity)} style={{ backgroundColor: "#F47C7C" }}></input>











                    </Form>




                </Col>
            </Row>

        </Container >
    );
};

export default PurchaseForm;