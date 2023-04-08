import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);

    const handleRemoveCart = (id) => {
            const remaining= cart.filter(product => product.id !==id);
            setCart(remaining);
            removeFromDb(id);


    }
    // console.log(products);
    return (
        <div className='flex mt-10 px-52'>
            <div className='w-6/12 mx-auto '>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}

                    ></ReviewItem>)
                }
            </div>
            <div className=" w-4/12  bg-yellow-200 rounded-lg ">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;