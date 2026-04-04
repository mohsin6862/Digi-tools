import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, cart, setCart }) => {
  // console.log(product);
  const { name, price, description, period, tag, tagType, features, icon } =
    product;
    const [added,setAdded]=useState(false)
  const handleBuyNow = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      
      toast.error(`${product.name} is already in your cart`);
      return;
    }

    setCart([...cart, product]);
    setAdded(true)
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm relative">
        <div className="card-body">
          {tag && (
            <span
              className={`absolute top-4 right-4 badge badge-xs text-lg font-medium p-4 rounded-3xl ${
                tagType === "popular"
                  ? "badge-warning"
                  : tagType === "new"
                    ? "badge-success"
                    : "badge-primary"
              }`}
            >
              {tag}
            </span>
          )}
          <br />
          <div>
            <span className="text-4xl border border-[#eae6e6] p-2 rounded-full">
              {icon}
            </span>
          </div>
          <div className="space-y-5 mt-8">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-[#627382] text-lg">{description}</p>
            <h3>
              <span className="text-3xl font-bold">${price} </span>
              <span className="text-xl text-[#627382]">/{period}</span>{" "}
            </h3>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={() => {
                handleBuyNow(product);
              }}
              className={`btn ${added? "btn-success": "btn-primary"}  btn-block rounded-3xl font-bold text-lg`}
            >
              {added? 'Added to Cart' : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
