import React from 'react';
import { Row } from 'react-bootstrap';
import useTools from '../../hooks/useTools';
import ToolsCard from './ToolsCard';

const FeaturedTools = () => {
    const [items,] = useTools()
    return (
        <div className='my-5 py-5'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center fs-1 fw-bold' style={{ color: '#3d3d3d' }}>Choice niks moto Best </h2>
                    <hr className='fw-bolder w-50 mb-5 mx-auto' style={{ color: '#3d3d3d' }} />


                    <Row>

                        {
                            items.slice(-3).map(item => <ToolsCard key={item._id} product={item}></ToolsCard>
                            )
                        }



                    </Row>

                </div>



            </div>
        </div>
    );
};

export default FeaturedTools;