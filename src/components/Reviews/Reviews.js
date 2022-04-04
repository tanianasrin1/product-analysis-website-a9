import React from 'react';
import useAllReviews from '../../Hook/useAllReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useAllReviews()
    return (
        <div>
            {
                reviews.map(review => <SingleReview
                 key = {review.id}
                 review = {review}
                ></SingleReview>)
            }
        </div>
    );
};

export default Reviews;