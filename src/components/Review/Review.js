import React, { useState } from 'react';
import './Review.css'

const Review = (props) => {
    const {id, name, ratting,feedback} = props.review
    return (
        
        <div className='review-cart'>
          
            <h3>Name: {name} </h3>
            <h5>Id: {id} </h5>
            <h6>Ratting: {ratting} </h6>
            <p> Feedback: {feedback} </p>

        </div>
    );
};

export default Review;