import React from 'react';
import { Row } from 'react-bootstrap';
import useTools from '../hooks/useTools';
import ToolsCard from './Home/ToolsCard';

const BrowseProducts = () => {
    const [items,] = useTools()
    return (
        <div className='mt-1 py-2'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center fs-1 fw-bold' style={{ color: '#3d3d3d' }}>Niksmoto all Products </h2>
                    <hr className='fw-bolder w-50 mb-5 mx-auto' style={{ color: '#3d3d3d' }} />


                    <Row>

                        {
                            items.map(item => <ToolsCard key={item._id} product={item}></ToolsCard>
                            )
                        }



                    </Row>

                </div>



            </div>
        </div>
    );
};

export default BrowseProducts;