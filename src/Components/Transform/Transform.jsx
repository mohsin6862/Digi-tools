import React from 'react';

const Transform = () => {
    return (
        <div className='bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] p-20 text-white  text-center'>
            <div className="text-center space-y-8 ">
        <h1 className=" text-4xl font-extrabold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="font-light max-w-xl mx-auto">
         Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
        </p>
        <div className='space-x-4'>
            <button className='btn rounded-full'>Explore Products</button>
            <button className='btn btn-outline rounded-full'>View Pricing</button>
        </div>
        <p className="font-extralight ">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
        </div>
    );
};

export default Transform;