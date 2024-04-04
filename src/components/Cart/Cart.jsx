/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart, handleClearCart}) => {
    // eslint-disable-next-line react/prop-types
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    // console.log(cart);

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    // let tax = 0;
    for (const product of cart){
        // simple solution
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // shortcut solution:
        // product.quantity = product.quantity || 1; // Jodi maan na thake maan bosay dibo
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.price;
        // tax = tax + product.price;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Oder Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: {total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>

                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span>Clear Cart</span> 
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default Cart;