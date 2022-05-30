import React from 'react';
import avatar from '../../images/avatar-fe.png'

const ReviewsCard = ({ review }) => {
    return (
        <div className="card border" style={{width:'18rem'}}>
            <img src={avatar} className="card-img-top w-25 pt-2 rounded-100 mx-auto" alt="avatar"/>
                <div className="card-body">
                    <p className="card-text fw-bold text-center">{review.uName}</p>
                    <p className="card-text text-center">Ratings: {review.count}</p>
                    <p className="card-text text-center">{review.reviewText}</p>
                </div>
        </div>
    );
};

export default ReviewsCard;