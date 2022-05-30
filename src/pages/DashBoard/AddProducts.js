import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import wheel from '../../images/wheelsmart.jpg'
import auth from '../../firebase.init';
import axios from 'axios';
import {toast } from 'react-toastify';

const AddProducts = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [available_quantity, setAvailable_quantity] = useState(0)
    const [minimum__ordered_quantity, setMinimum__ordered_quantity] = useState(0)

    // handle  add items btn......
    const handleAddItems = (e) => {
        e.preventDefault()
        const data = { name, price, description, image, available_quantity, minimum__ordered_quantity }
        axios.post('https://salty-refuge-93523.herokuapp.com/products', data).then(res => toast("Product Added Successfully!"))

        e.target.reset()

    }

    return (
        <Container>
            

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={wheel} alt='wheel' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='lead'>Add New Product.</h2>

                        <form onSubmit={handleAddItems}>

                            <Form.Control className='mt-3' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Product" required />

                            <Form.Control className='mt-3' onBlur={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Product Image" required />

                            <Form.Control className='mt-3' onBlur={(e) => setDescription(e.target.value)} type="textarea" name="description" placeholder="Description" required />

                           


                            <Form.Control className='mt-3' onBlur={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="Price" required />

                            <Form.Control className='mt-3' onBlur={(e) => setAvailable_quantity(e.target.value)} type="number" name="avaiable_quantity" placeholder="Available Quantity" required />

                            <Form.Control className='mt-3' onBlur={(e) => setMinimum__ordered_quantity(e.target.value)} type="number" name="minimum_quantity" placeholder="Minimum Quantity" required />


                           


                            <input type="submit" value="Add Product" className="btn btn-primary w-100 p-2 mt-3 text-dark" style={{ border: 'none' ,backgroundColor:'#F47C7C'}}></input>
                        </form>
                       


                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default AddProducts;