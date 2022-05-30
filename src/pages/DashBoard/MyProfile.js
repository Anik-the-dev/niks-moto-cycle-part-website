
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import avatar from '../../images/avatar-fe.png'
import axios from 'axios';
import {toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const name = user?.displayName
    const email = user?.email
    const [description, setDescription] = useState('')
    const [mobile, setMobile] = useState(0)
    const [social, setSocial] = useState(0)

 
    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const data = { name,email, mobile, description, social }
        axios.post('https://salty-refuge-93523.herokuapp.com/user', data).then(res => toast("Profile Updated Successfully!"))

        e.target.reset()

    }

    return (
        <Container>


            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={avatar} alt='avatar' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='lead'>Update Your Profile.</h2>

                        <form onSubmit={handleProfileUpdate}>

                            <Form.Control className='mt-3' value={user.displayName} type="text" name="name" placeholder="Name" disabled />
                            <Form.Control className='mt-3' value={user.email} type="email" name="email" placeholder="Email" disabled />

                           

                            <Form.Control className='mt-3' onBlur={(e) => setDescription(e.target.value)} type="textarea" name="location" placeholder="Location"  />




                            <Form.Control className='mt-3' onBlur={(e) => setMobile(e.target.value)} type="text" name="cell" placeholder="Phone Number"  />

                            <Form.Control className='mt-3' onBlur={(e) => setSocial(e.target.value)} type="text" name="social" placeholder="LinkedIn / Twitter"  />

                           





                            <input type="submit" value="Update Profile" className="btn btn-primary w-100 p-2 mt-3 text-dark " style={{ border: 'none' , backgroundColor:'#F47C7C' }}></input>
                        </form>
                        


                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default MyProfile;