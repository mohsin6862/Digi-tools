import React from "react";
import bannerImg from '../../assets/products/banner.png'
import circleImg from '../../assets/products/Rectangle 4.png'
const Banner = () => {
  return (
    <div className="my-20 md:flex justify-items-center  items-center justify-around">
      <div className="banner-info space-y-5 mb-10 md:mb-0">
        <div className="bg-[#E1E7FF] p-2 rounded-4xl max-w-74 mx-auto lg:mx-0 flex gap-2 items-center">
            <img className="h-2 w-2" src={circleImg} alt="" />
        <p className="text-[rgba(85,54,246,1)] font-medium"> New: AI-Powered Tools Available</p>
        </div>
        <h1 className="text-[#101727] font-extrabold text-5xl lg:text-7xl text-center lg:text-left leading-22">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="font-light text-[#627382} max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-4 text-center lg:text-left">
            <button className="btn btn-primary rounded-3xl">Explore Products</button>
            <button className="btn btn-outline btn-info rounded-3xl">Watch Demo</button>
        </div>
      </div>

      <div className="banner-img">
        <img src={bannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
