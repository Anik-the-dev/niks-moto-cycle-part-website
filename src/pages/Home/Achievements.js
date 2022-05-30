import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import acv from '../../images/acv.png'
import './Banner/Banner.css'

const Achievements = () => {
    return (
        <div className=' my-5 mx-auto' style={{ backgroundColor: '#F47C7C' , paddingBottom:'120px' , paddingTop:'120px'}}>
            <Container className=' ' >
                <Row className='align-items-center '>
                    <Col sm className=''>
                        <div className=''>
                            <img className='  img-fluid' src={acv} alt='acv'></img>


                        </div>

                    </Col>
                    <Col sm className=''>
                        <h1 className='pt-5 fw-bolder fs-1 text-center text-sm-start' style={{ color: '#fff' }}>Our Achievements - 2022</h1>
                        <hr className='fw-bolder w-100' style={{ color: '#fff' }} />
                        <p className='text-center text-sm-start p-2 p-sm-0' style={{ color: '#000' }}>We are very glad to deliver my speech on such an important and momentous occasion in my life. It is a huge honor for me to receive this award for being the employee of the year. I am deeply honored by my superiors for this recognition of my work. </p>
                        <p className='text-center text-sm-start p-2 p-sm-0' style={{ color: '#000' }}>niksmoto established in 2005 from a passion of doing big.It is a huge honor for me to receive this award for being the employee of the year. I am deeply honored by my superiors for this recognition of my work. </p>
                        <div className='banner-btn my-3 d-flex flex-wrap  align-items-center justify-content-center justify-content-md-start '>
                            <Link className='btn raw-btn flex-btn bg-dark' to='/about'>About Us</Link>
                            <Link className='btn raw-btn raw-btn-outline flex-btn bg-light' to='/reviews'>Reviews</Link>
                        </div>







                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Achievements;