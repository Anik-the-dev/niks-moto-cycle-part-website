import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyReview = () => {
    const [user] = useAuthState(auth);
    const uName = user?.displayName
    const uEmail = user?.email

    const [count, setCount] = useState(0)
    const [review, setReview] = useState(false)
    const [reviewText, setReviewText] = useState('')
    const ratingChanged = (newRating) => {
        setCount(newRating)
        
    };

    const handleReviewText = (e) => {
        console.log(e.target.value)
        setReviewText(e.target.value)

    }

    // handle place my order.
    const handleSendReview = () => {
        setReview(true)
        const data = { uName, uEmail, count, reviewText }
        axios.post('https://salty-refuge-93523.herokuapp.com/reviews', data).then(res => toast("Thanks for the review"))

    

    }
    return (

        <div className='d-flex mt-5 flex-column align-items-center justify-content-center'>
            <h2 >Give us a Review</h2>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            <textarea className='w-25 ps-2 mt-3 pt-2' placeholder='Write a review' onBlur={handleReviewText}></textarea>
            <button className='btn btn-warning mt-3 p-3' onClick={handleSendReview}>Send Us the Review</button>
            {
                review && <p className='mt-3 fw-bold fs-4'>Thank you. You give us {count} start ratings.</p>
            }



        </div>
    );
};

export default MyReview;