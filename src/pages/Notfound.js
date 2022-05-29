import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../images/notfound.PNG'

const Notfound = () => {
    return (
        <div className='my-5'>
            <Container>
                <img className='img-fluid' src={image} alt='404 page'/>
            </Container>
            
        </div>
    );
};

export default Notfound;