import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner top-banner'>
            <div className='container'>
                <div className='banner-content'>
                    <div className='banner-text text-center mx-auto my-3'>
                        <h1 className='fw-6' style={{ color: '#2E4259' }}>Niks Moto Manufacturer</h1>
                        <p className='mfs-1' style={{ width: '75%', margin: 'auto' }}>Secured Manufacturer for niksmoto admin only. Here Admins can analyze the growth of the business analyzing the previous data and also help to understand by statistics.Admins also can add, delete , increase and decrease items based on the production and sold.</p>
                    </div>
                    <div className='banner-btn my-3 d-flex flex-wrap  align-items-center justify-content-center  '>
                        <Link className='btn raw-btn flex-btn' to='/blog'>Go to Blog</Link>
                        <Link className='btn raw-btn raw-btn-outline flex-btn' to='/dashboard'>Go Dashboard</Link>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Banner;