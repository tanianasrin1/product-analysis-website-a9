import React from 'react';

const SingleReview = ({review}) => {
    const {id,img, name, ratting, feedback} = review
    return (
        <div>
            <img src={img} alt="" />
            <h1> Name: {name} </h1>
        </div>
    );
};

export default SingleReview;