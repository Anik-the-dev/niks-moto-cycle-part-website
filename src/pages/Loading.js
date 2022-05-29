import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='my-5 d-flex align-items-center justify-content-center '>
            <Spinner animation='border' variant='success'></Spinner>
        </div>
    );
};

export default Loading;