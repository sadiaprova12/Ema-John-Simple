/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // eslint-disable-next-line react/prop-types
    const cart = props.cart;
    return (
        <div>
            <h4>Oder Summary</h4>
                <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;