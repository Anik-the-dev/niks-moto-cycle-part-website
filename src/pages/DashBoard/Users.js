import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import UserTable from './UserTable';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://salty-refuge-93523.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div className='py-5'>
            <div className='container'>
                <div className='my-5'>



                    <h2 className='text-center my-5 fw-5'>User in nis Moto</h2>

                    <div class="table-responsive">
                        <Table striped bordered hover class="table">
                            <thead>
                                <tr>

                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Make Admin</th>
                                    <th>Remove User</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users?.map((user,i) => <UserTable
                                        key={user._id}
                                        user={user}
                                        refetch={refetch}
                                        index={i}
                                    ></UserTable>)
                                }





                            </tbody>
                        </Table>

                    </div>







                </div>


            </div>
        </div>

    );
};

export default Users;