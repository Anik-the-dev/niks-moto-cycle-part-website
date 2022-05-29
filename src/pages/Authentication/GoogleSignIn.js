import React from 'react';
import google from '../../images/google.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // Redirect to inventory page
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <>
            <p className='mt-3 mx-auto fs-5'>Login Also.</p>
            <div onClick={() => signInWithGoogle()} className="d-flex align-items-center justify-content-center autosignin mx-auto flex-wrap px-2 gap-1">
                <img src={google} alt='google'></img>
                <p className='mt-3'>Sign In with Google</p>

            </div>


        </>

    );
};

export default GoogleSignIn;