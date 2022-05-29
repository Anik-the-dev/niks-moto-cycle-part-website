import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const UserTable = ({ user, refetch, index }) => {

    const { email, role, name} = user;
    const [part, setPart] = useState([user])
    const makeAdmin = () => {
        fetch(`http://localhost:4000//user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    // delete item
    const handleDeleteItem = (email) => {
        const proceed = window.confirm("Want to Delete this Person?")
        if (proceed) {
            const url = `http://localhost:4000//user/${email}`
            fetch(url, {
                method: 'delete'
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingUser = part.filter(item => item.email !== email)

                        setPart(remainingUser)

                    }
                })


        }

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <Button onClick={makeAdmin} className="btn bg-success border-0 text-light">Make Admin</Button>}</td>
            <td><Button onClick={() => handleDeleteItem(email)} className="btn bg-danger text-light border-0">Remove User</Button></td>
        </tr>
    );
};

export default UserTable;