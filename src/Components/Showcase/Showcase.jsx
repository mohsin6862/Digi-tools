import React from 'react';

const Showcase = () => {
    return (
        <div className='bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] p-20 text-white grid grid-cols-3 text-center'>
            <div className='space-y-2.5 text-center'>
                <h1 className='text-6xl font-extrabold'>50K+</h1>
                <p className='font-medium'>Active Users</p>
            </div>
            <div className='space-y-2.5 text-center'>
                <h1 className='text-6xl font-extrabold'>200+</h1>
                <p className='font-medium'>Premium Tools</p>
            </div>
            <div className='space-y-2.5 text-center'>
                <h1 className='text-6xl font-extrabold'>4.9+</h1>
                <p className='font-medium'>Ratings</p>
            </div>
        </div>
    );
};

export default Showcase;