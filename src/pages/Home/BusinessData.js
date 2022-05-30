import React from 'react';
import { Container } from 'react-bootstrap';

const BusinessData = () => {
    return (
        <Container style={{ marginTop: '50px', marginBottom: '100px' }}>
            <h1 className='fw-bold fs-1 text-center' style={{ color: '#F18500' }}>Our 12 Years Customers</h1>
            <p className='text-center'> We are glad to have these loyal customers all over the globe from last 12 years. Here are some business data to show.</p>
            <hr className='fw-bolder w-100 mb-5 ' style={{ color: '#3d3d3d' }} />

            <div className='d-block d-md-flex align-items-center justify-content-center gap-5 w-75 mx-auto '>
                <div className='bg-warning d-flex flex-column align-items-center mb-5 text-center border p-3 rounded'>
                    <i class="bi bi-emoji-smile-fill" style={{ fontSize: '40px', color: '#FFF' }}></i>
                    <h2 className='fs-1 fw-bold' style={{ color: '#3d3d3d' }}>817200</h2>
                    <p>Happy Customers</p>
                    <p>We are glad to have these loyal customers all over the globe from last 12 years. Here are some business data to show.</p>
                </div>

                <div className='d-flex flex-column align-items-center mb-5 text-center border p-3 rounded'>
                    <i class="bi bi-shop" style={{ fontSize: '40px', color: '#F18500' }}></i>
                    <h2 className='fs-1 fw-bold' style={{ color: '#3d3d3d' }}>11645</h2>
                    <p>Help Business</p>
                    <p>We are glad to have these loyal customers all over the globe from last 12 years. Here are some business data to show.</p>
                </div>

                <div className='d-flex flex-column align-items-center mb-5 text-center border p-3 rounded' style={{ backgroundColor: '#F47C7C' }}>
                    <i class="bi bi-cash-coin" style={{ fontSize: '40px', color: '#fff' }}></i>
                    <h2 className='fs-1 fw-bold' style={{ color: '#3d3d3d' }}>$456M</h2>
                    <p>Help to Generate Revenue</p>
                    <p>We are glad to have these loyal customers all over the globe from last 12 years. Here are some business data to show.</p>
                </div>
            </div>









        </Container >
    );
};

export default BusinessData;