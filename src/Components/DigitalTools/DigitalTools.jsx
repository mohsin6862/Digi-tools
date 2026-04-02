import React, { use } from 'react';

const DigitalTools = ({productsPromise}) => {
    const products = use(productsPromise)
    console.log(products)
    return (
        <div className='my-20'>
            <div className='text-center space-y-8'>
                <h1 className='text-[#101727] text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium <br /> digital products designed to boost your productivity and creativity.</p>
                <div className='border-2 p-1 rounded-4xl w-60 mx-auto border-[#F6F6F6]'>
                    <button className='btn font-bold rounded-3xl btn-primary text-xl'>Products</button>
                    <button className='btn font-bold rounded-3xl text-xl'>Cart</button>
                </div> 
            </div>
        </div>
    );
};

export default DigitalTools;