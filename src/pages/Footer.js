import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <Container>
                <div className='d-flex align-items-center justify-content-between flex-wrap'>
                    <div className='text-start'>
                        <p className='fs-4 text-light'>Niks Moto.</p>
                        <p className='fs-5 text-light'>&copy; All Rights Reserved-niksmoto 2022</p>


                    </div>

                    <div className='text-start' >

                        <p className='fs-5 text-light'>Browse Niks Moto</p>

                        <Nav.Link><Link className='menuitem text-light' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/dashboard'>Dashboard</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/login'>Login</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/signup'>Signup</Link></Nav.Link>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Footer;