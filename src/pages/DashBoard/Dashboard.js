import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './dashboard.css'
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    // const [show, setShow] = useState(true);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (

        <div className='dashboard-width ms-auto'>
            <Outlet></Outlet>


            <div className="offcanvas offcanvas-start sidebar-nav" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-4 text-dark fw-bold" id="offcanvasScrollingLabel">{admin? 'Admin Dashboard' : 'User Dashboard'}</h5>
                    
                </div>
                <div className="offcanvas-body">
                    <ul className='dashboard-list m-2'>
                      
                        
                        { admin ? 
                        <>
                         
                          <li><Link className='text-decoration-none fw-bold text-dark pb-2  ' to="/dashboard/add">Add Products</Link></li>
                          <li><Link className='text-decoration-none fw-bold text-dark pb-2  ' to="/dashboard/users">All User</Link></li>
                        </>
                        :
                        <>
                        <li><Link className='text-decoration-none fw-bold text-dark  pb-2 ' to="/dashboard">My Orders</Link></li>
                        <li><Link className='text-decoration-none fw-bold text-dark  pb-2 ' to="/dashboard/review">My Review</Link></li>
                        </>

                        }
                        <li><Link className='text-decoration-none fw-bold text-dark  pb-2 ' to="/dashboard/profile">My Profile</Link></li>
                    </ul>
                </div>
            </div>



        </div>


    );
};

export default Dashboard;