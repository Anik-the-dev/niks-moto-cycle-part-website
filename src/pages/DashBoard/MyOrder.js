import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderTable from './OrderTable';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [datas, setDatas] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`https://salty-refuge-93523.herokuapp.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setDatas(data);
                });
        }
    }, [user])



    return (
        <div className='py-5'>
            <div className='container'>
                <div className='my-5'>



                    <h2 className='text-center my-5 fw-5'>My OverAll Orders</h2>

                    <div class="table-responsive">
                        <Table striped bordered hover class="table">
                            <thead>
                                <tr>

                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Pay</th>
                                    <th>Cancel</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    datas.map(item => <OrderTable key={item._id} singleItem={item}></OrderTable>
                                    )
                                }



                            </tbody>
                        </Table>

                    </div>







                </div>


            </div>
        </div>
    );
};

export default MyOrder;
