/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;