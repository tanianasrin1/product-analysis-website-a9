import React from 'react';
import './SingleReview.css'

const SingleReview = ({review}) => {
    const {id,img, name, ratting, feedback} = review
    return (
        <div className='review-carts'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h5>Id: {id} </h5>
            <h6>Ratting: {ratting} </h6>
            <p> Feedback: {feedback} </p>

        </div>
    );
};

export default SingleReview;