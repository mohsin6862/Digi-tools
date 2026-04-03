import React from "react";
import userImg from "../../assets/products/user.png"
import chooseProductImg from "../../assets/products/package.png"
import startCreatingImg from "../../assets/products/rocket.png"
const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] p-12 my20">
      <div className="text-center space-y-8 ">
        <h1 className="text-[#101727] text-5xl font-extrabold">
          Get Started in 3 Steps
        </h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

     <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center my-10 gap-5">
         <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
            <span className="absolute top-4 right-4 badge badge-xs text-lg font-medium p-4 rounded-full badge-primary">01</span>
          <img
            src={userImg}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center my-5">
           
          <h2 className="card-title">Create Account</h2>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
         
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
            <span className="absolute top-4 right-4 badge badge-xs text-lg font-medium p-4 rounded-full badge-primary">02</span>
          <img
            src={chooseProductImg}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      <div className="card-body items-center text-center my-5">
          <h2 className="card-title">Choose Products</h2>
          <p>
            Browse our catalog and select the toolsthat fit your needs.
          </p>
         
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
             <span className="absolute top-4 right-4 badge badge-xs text-lg font-medium p-4 rounded-full badge-primary">03</span>
          <img
            src={startCreatingImg}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
             <div className="card-body items-center text-center my-5">
          <h2 className="card-title">Start Creating</h2>
          <p>
            Download and start using your premium tools immediately.
          </p>
         
        </div>
      </div>
     </div>
    </div>
  );
};

export default GetStarted;

  
