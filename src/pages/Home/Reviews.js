import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useTools from '../../hooks/useTools';
import ReviewsCard from './ReviewsCard';


const FeaturedTools = () => {
    const [items, setItems] = useState([])
    useEffect(() => {

        fetch("https://salty-refuge-93523.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='mb-5 py-5'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center fs-1 fw-bold' style={{ color: '#3d3d3d' }}>Our Loyal Users Recommendation</h2>
                    <hr className='fw-bolder w-50 mb-5 mx-auto' style={{ color: '#3d3d3d' }} />


                    <Row className='d-flex justify-content-center gap-5'>

                        {
                            items.slice(-3).map(item => <ReviewsCard key={item._id} review={item}></ReviewsCard>
                            )
                        }



                    </Row>

                </div>



            </div>
        </div>
    );
};

export default FeaturedTools;