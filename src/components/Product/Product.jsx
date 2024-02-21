/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';


const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    //console.log(props.product);
    
    // eslint-disable-next-line react/prop-types
    const {img, name, seller, quantity, price} = props.product;

    const handelAddToCart = () =>{
        
    }

    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
           </div>
        <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;