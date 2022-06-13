import React from "react";

const PortfolioSection = ({ user }) => {
  const { portfolio } = user;
  console.log(portfolio);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 m-40 justify-center align-center">
        {portfolio?.map((port) => (
          <div className="w-full">
            <a href className="block overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-56"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt
              />
              <div className="p-4 bg-gray-900">
                <p className="text-xs text-gray-500">{port.url}</p>
                <h5 className="text-sm text-white">{port.name}</h5>
                <p className="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioSection;
