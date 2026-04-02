import React from 'react';

const Showcase = () => {
    return (
        <div className='bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] p-20 text-white grid grid-cols-1 md:grid-cols-3 text-center relative'>

            
            <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 h-[40%] w-[2px] bg-white/40"></div>

          
            <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 h-[40%] w-[2px] bg-white/40"></div>

            <div className='space-y-2.5'>
                <h1 className='text-6xl font-extrabold'>50K+</h1>
                <p className='font-medium'>Active Users</p>
            </div>

            <div className='space-y-2.5'>
                <h1 className='text-6xl font-extrabold'>200+</h1>
                <p className='font-medium'>Premium Tools</p>
            </div>

            <div className='space-y-2.5'>
                <h1 className='text-6xl font-extrabold'>4.9+</h1>
                <p className='font-medium'>Ratings</p>
            </div>
        </div>
    );
};

export default Showcase;