import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ product }) => {
    const navigate = useNavigate()
    const { _id, name, image, description, price, minimum__ordered_quantity, available_quantity } = product

    return (
        <Col md={4}>
            <Card style={{ width: '18rem', margin: 'auto', marginBottom: '20px', height: '650px' }}>
                <div className='w-75 mx-auto mt-3'>
                    <Card.Img variant="top" src={image} alt='product' />
                </div>
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

                    <Button onClick={() => navigate(`/purchase/${_id}`)} style={{ backgroundColor: '#F47C7C', border: 'none' , width:'100%'}}>Order Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ToolsCard;