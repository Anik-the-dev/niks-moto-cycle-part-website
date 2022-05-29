import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signup from '../../images/signup.webp'
import GoogleSignIn from './GoogleSignIn';
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { updateProfile } from "firebase/auth";

const Signup = () => {
    // declare the states......
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    // destructuring the hook......
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Redirect to inventory page
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }


    const handleUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            console.log("Profile updated!")
            // ...
        }).catch((error) => {
            console.log("Profile Error!", error.message)
        });


    }
    const [sendEmailVerification] = useSendEmailVerification(auth);

    // click the sign up btn......
    const handleRegisterForm = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, pass).then(() => {
            sendEmailVerification()
            handleUpdateProfile();
            alert('Verification mail Sent. Check Your Email');

        })
        e.target.reset()


    }



    console.log(user?.user)

    return (
        <Container>
            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{ color: "#2F2869" }}>niks moto.</h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={signup} alt='Signup' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2>Sign Up for Access.</h2>

                        <form onSubmit={handleRegisterForm}>

                            <Form.Control className='mt-3' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required />

                            <Form.Control className='mt-3' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />


                            <FormControl className='mt-3' onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Password" required />


                            <input type="submit" value="Sign Up" className="btn btn-primary text-dark w-100 p-2 mt-3" style={{ backgroundColor: "#C7FF32", border: 'none' }}></input>
                        </form>
                        <GoogleSignIn></GoogleSignIn>
                        <p className='mt-2 mx-auto fs-6'>Already Registered? Go to  <Link className='text-success text-decoration-none fw-6' to='/login'>Login Page.</Link></p>

                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Signup;