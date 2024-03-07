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
    let totalShipping = 0;
    // let tax = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.price;
        // tax = tax + product.price;
    }
    const tax = total*7/100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Oder Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;