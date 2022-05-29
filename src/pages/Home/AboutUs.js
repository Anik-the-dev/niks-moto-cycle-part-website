import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import award from '../../images/award.png'




const AboutUs = () => {

    return (
        <div className='offwhiter-bg  p-5 my-5 mx-auto'>
            <Container className=' ' >
                <Row className='align-items-center '>
                    <Col sm className=''>
                        <div className=''>
                            <img className='  img-fluid' src={award} alt='award'></img>


                        </div>

                    </Col>
                    <Col sm className=''>
                        <h1 className='pt-5 fw-bolder fs-1 text-center text-sm-start' style={{ color: '#FFC910' }}>Best Moto Award - 2022</h1>
                        <hr className='fw-bolder w-100' style={{ color: '#3d3d3d' }} />
                        <p className='text-center text-sm-start p-2 p-sm-0' style={{ color: '#000' }}>We are very glad to deliver my speech on such an important and momentous occasion in my life. It is a huge honor for me to receive this award for being the employee of the year. I am deeply honored by my superiors for this recognition of my work. </p>

                        <h1 className='pt-5 fw-bolder fs-1 text-center text-sm-start' style={{ color: '#3d3d3d' }}>We are from 2005:</h1>
                        <hr className='fw-bolder w-100' style={{ color: '#3d3d3d' }} />
                        <p className='text-center text-sm-start p-2 p-sm-0' style={{ color: '#000' }}>niksmoto established in 2005 from a passion of doing big.It is a huge honor for me to receive this award for being the employee of the year. I am deeply honored by my superiors for this recognition of my work. </p>
                        <p>
                        <i class="bi bi-chat-dots text-success fs-3"></i> <span className=' ps-2 fw-bold' style={{ color: '#F47C7C' }}>Whatsapp Us at: +019999999</span>
                        </p>
                        





                    </Col>
                </Row>

            </Container>
        </div>

    );
};

export default AboutUs;