import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='flex mt-10 px-10'>
            <div className=' grid grid-cols-3 gap-8'>
                    <h1>Hello world </h1>
            </div>
            <div className="w-2/4 ml-8 bg-yellow-200 rounded-lg">
                <Cart cart={products} ></Cart>
            </div>
        </div>
    );
};

export default Orders;