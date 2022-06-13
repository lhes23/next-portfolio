import React from "react";

const PortfolioSection = () => {
  return (
    <>
      <div className="w-1/3 m-auto">
        <a href className="block overflow-hidden rounded-2xl">
          <img
            className="object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt
          />
          <div className="p-4 bg-gray-900">
            <p className="text-xs text-gray-500">website.com</p>
            <h5 className="text-sm text-white">
              How to position your furniture for positivity
            </h5>
            <p className="mt-1 text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              nobis aliquid accusamus? Sint, sequi voluptas.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default PortfolioSection;
