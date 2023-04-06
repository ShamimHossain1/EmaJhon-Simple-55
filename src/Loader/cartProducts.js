import React from 'react';
import { getShoppingCart } from '../utilities/fakedb';

const cartProducts = async () => {

    // if data in database must have to use async

    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storedCart[id]

        }
    }
    return products;
};

export default cartProducts;