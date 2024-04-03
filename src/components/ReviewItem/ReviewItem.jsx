// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ReviewItem.css'

// eslint-disable-next-line react/prop-types
const ReviewItem = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            {/* <h2>Review Item</h2> */}
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;