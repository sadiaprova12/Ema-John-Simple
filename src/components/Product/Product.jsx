/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';


const Product = (props) => {
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;