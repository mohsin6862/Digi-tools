import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Cart = ({ cart, setCart }) => {

    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

    const handleRemove = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining);
    };

    return (
        <div className='border border-[rgb(246,246,246)] p-10 bg-base-200 my-20 rounded-2xl'>
            
            <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>

            {
                cart.length === 0 ? (
                    <p className="text-center text-lg">Your cart is empty 🛒</p>
                ) : (
                    cart.map(p => (
                        <div key={p.id} className='bg-base-300 p-8 rounded-2xl my-5'>
                            
                            <div className='flex justify-between items-center'>
                                
                                <div className='flex items-center space-x-8'>
                                    <span className="text-2xl">{p.icon}</span>

                                    <div>
                                        <h1 className='text-xl font-semibold'>{p.name}</h1>
                                        <p>${p.price}</p>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleRemove(p.id)}
                                    className='btn rounded-2xl text-lg font-semibold text-red-600'
                                >
                                    Remove
                                </button>

                            </div>

                        </div>
                    ))
                )
            }

            <div className='flex justify-between p-8 mt-6 border-t'>
                <h3 className='text-xl font-semibold'>Total:</h3>
                <h3 className='font-bold text-xl'>${total}</h3>
            </div>

            <button className='btn btn-primary w-full rounded-3xl mt-4'>
                Proceed to Checkout
            </button>

        </div>
    );
};

export default Cart;