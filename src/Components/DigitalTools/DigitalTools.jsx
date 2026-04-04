import React, { use, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Cart from '../Cart/Cart';

const DigitalTools = ({productsPromise,cart,setCart}) => {
    const products = use(productsPromise)
    // console.log(products)
    const [toggle,setToggle]=useState('product');
   
    console.log(toggle)
    return (
        <div className='my-20'>
            <div className='text-center space-y-8'>
                <h1 className='text-[#101727] text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium <br /> digital products designed to boost your productivity and creativity.</p>
                <div className='border-2 p-1 rounded-4xl w-64 mx-auto border-[#F6F6F6] space-x-2'>
                    <button onClick={()=>{setToggle('product')}} className={`${toggle==='product'? "btn-primary" :'' } btn font-bold rounded-3xl text-xl `}>Products</button>
                    <button onClick={()=>{setToggle('cart')}} className={`${toggle==='cart'? "btn-primary":''} btn font-bold rounded-3xl text-xl `}>Cart ({cart.length})</button>
                </div> 
            </div>
         {
            toggle ==='product'?   <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 justify-items-center'>
             {
                products.map(product => <ProductCard key={product.id} product={product} cart={cart} setCart={setCart}></ProductCard>)
            }
           </div> :<Cart cart={cart} setCart={setCart}></Cart>
         }
    
        </div>
    );
};

export default DigitalTools;