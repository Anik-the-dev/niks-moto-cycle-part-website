import React from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import InventoryTable from './InventoryTable';

const ManageInventory = () => {
    const [items,] = useInventory()
    const navigate = useNavigate()
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='my-5'>

                    <div className='d-flex align-items-center justify-content-center gap-3'>

                        <h2 className='text-center my-5 fw-5'>niks Moto All Products</h2>


                        <Button onClick={() => navigate('/dashboard/add')} className="btn text-light px-3 rounded" style={{ backgroundColor: "#21C9B6", border: 'none' }}>+</Button>

                    </div>


                    {/* grid grid-three-col md-flex */}
                    {/* d-md-flex align-items-center justify-content-center */}
                    <div class="table-responsive">
                        <Table striped bordered hover class="table">
                            <thead>
                                <tr>

                                    <th>Product Name</th>
                                    <th>Available</th>
                                    <th>Price</th>
                                    <th>Minimum Order</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    items.map(item => <InventoryTable key={item._id} singleItem={item}></InventoryTable>
                                    )
                                }



                            </tbody>
                        </Table>

                    </div>

                    <div className='d-flex mt-4 justify-content-end'>
                        <Button onClick={() => navigate('/dashboard/add')} className="btn text-light px-3 rounded" style={{ backgroundColor: "#21C9B6", border: 'none' }}>Add More Items</Button>

                    </div>






                </div>


            </div>
        </div>

    );
};

export default ManageInventory;