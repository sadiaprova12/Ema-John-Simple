/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // eslint-disable-next-line react/prop-types
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    console.log(cart);

    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h4>Oder Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {total}</p>
                <p>Total Shipping: </p>
                <p>Tax: </p>
                <p>Grand Total: </p>
        </div>
    );
};

export default Cart;