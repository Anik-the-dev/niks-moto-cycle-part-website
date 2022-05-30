import React from 'react';
import avatar from '../../images/avatar-fe.png'
import ReactStars from "react-rating-stars-component";

const ReviewsCard = ({ review }) => {
    return (
        <div className="card border" style={{ width: '18rem' }}>
            <img src={avatar} className="card-img-top w-25 pt-4 rounded-100 mx-auto" alt="avatar" />
            <div className="card-body">
                
                <p className=" fw-bold text-center pt-2">{review.uName}</p>
                <div className='d-flex align-items-center justify-content-center mt-0'>
                    <p className=" fw-bold mt-3 me-2   " >{review.count} : </p>
                    <ReactStars
                        count={review.count}
                        color='#ffd700'
                        size={24}
                       


                    /></div>
                <p className="card-text text-center">{review.reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;
