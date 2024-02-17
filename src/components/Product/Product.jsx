/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';


const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    //console.log(props.product);
    
    // eslint-disable-next-line react/prop-types
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;