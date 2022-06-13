import React from "react";

const PortfolioSection = ({ portfolio }) => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 lg:gap-4 justify-center align-center grid-cols-1 gap-2">
        {portfolio?.map((port) => (
          <div className="w-full shadow-sm  border-rose-500">
            <a href className="block overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-56"
                src={`/images/portfolio/${port.img}`}
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
    </section>
  );
};

export default PortfolioSection;
