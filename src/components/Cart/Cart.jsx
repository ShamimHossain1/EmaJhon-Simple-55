import React from 'react';

const Cart = ({cart}) => {
    //const cart = props.cart; // o1
    //const {cart} = props; // o2
    //console.log(cart);
    // calculate
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart ){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tax = total *0.07;
    const grandTotal = total + totalShipping + tax

    return (
        <div className='sticky top-32  '>
                <div className=' p-10 '>
                <h4 className='text-4xl font-semibold mb-10 text-slate-800 text-center'>Order Summery</h4>
                <p className='text-2xl font-semibold mb-4 text-slate-800'>Selected items {quantity}</p>
                <p className='text-2xl font-semibold mb-4 text-slate-800'>Total Price: ${total} </p>
                <p className='text-2xl font-semibold mb-4 text-slate-800'>Total Shipping: ${totalShipping}</p>
                <p className='text-2xl font-semibold mb-4 text-red-700'>Tax ${tax.toFixed(2)}</p>
                <h6 className='text-3xl font-semibold mb-2 text-green-700'>Grand Total: ${grandTotal.toFixed(2)} </h6>
                </div>
        </div>
    );
};

export default Cart;