import React from "react";

const PortfolioSection = ({ styles, portfolio }) => {
  return (
    <section className={styles.section}>
      <div className="justify-center p-4 m-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
        <div className="flex flex-wrap gap-4 mt-8 text-center justify-center">
          <button
            className="block w-full px-12 py-3 text-lg font-medium text-black border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
            href="/about"
          >
            All
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4 justify-center align-center grid-cols-1 gap-2">
        {portfolio?.map((port) => (
          <div className="w-full shadow-sm  border-rose-500" key={port.id}>
            <a href="" className="block overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-56"
                src={`/images/portfolio/${port.img}`}
                alt=""
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
