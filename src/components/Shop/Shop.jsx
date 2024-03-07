/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
function Shop() {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect( () => {
        console.log('products', products);
        const storedCart = getShoppingCart
        // console.log(storedCart);

        // Step 1: get id
        for(const id in storedCart){
            // console.log(id);

            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);

            // step 3: get quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity
            console.log(addedProduct);
        }

    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        // eslint-disable-next-line no-undef
        addToDb(product.id)
    };

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
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
}

export default Shop;