/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Products coming here</h2>
            </div>
            <div className="cart-container">
                <h4>Oder Summary</h4>
            </div>
            
        </div>
    );
};

export default Shop;