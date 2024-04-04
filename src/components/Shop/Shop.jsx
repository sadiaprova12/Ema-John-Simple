/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


function Shop() {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // useEffect( () => {
    //     console.log('products', products);
    //     const storedCart = getShoppingCart
    //     // console.log(storedCart);

    //     // Step 1: get id
    //     for(const id in storedCart){
    //         // console.log(id);

    //         // step 2: get the product by using id
    //         const addedProduct = products.find(product => product.id === id)
    //         console.log(addedProduct);

    //         // step 3: get quantity of the product
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity
    //         console.log(addedProduct);
    //     }

    // }, [products])

    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedcart = [];
        // Step-1: get id of the addedProduct
        for (const id in storedCart){
            //Step-2: get product from products state by using id
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            //Step-3: Add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //Step-4: add the addedProduct to the savedcart
            savedcart.push(addedProduct);
        }
        console.log('added Product', addedProduct)
        }
        //Step-5: Set the cart
        setCart(savedcart);
    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        // cart.push(product);

        // Hard solution
        // 1st bar jodi add kori tahole ei way te kora lghbe
         let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exit in the cart, then set quantity =1;
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id!== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        // eslint-disable-next-line no-undef
        addToDb(product.id)
    }


    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)}
            </div>
            <div className="cart-container">
                <Cart 
                cart = {cart}
                handleClearCart={handleClearCart}
                >
                   
                   {/* <Link className='proceed-link' to="/orders">
                    <button className='btn-proceed'>Review Orders</button>
                   </Link> */}
                   <div>
                   <a className='proceed-link' href="/orders">
                    <button className='btn-proceed'>Review Orders</button></a>
                   </div>
                </Cart>
            </div>

        </div>
    );
}

export default Shop;

// 55-8 solve korte hbe