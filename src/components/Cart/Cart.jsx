/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // eslint-disable-next-line react/prop-types
    // const cart = props.cart;
    const {cart} = props;
    return (
        <div className='cart'>
            <h4>Oder Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: </p>
                <p>Total Shipping: </p>
                <p>Tax: </p>
                <p>Grand Total: </p>
        </div>
    );
};

export default Cart;