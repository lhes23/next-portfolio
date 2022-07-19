import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { container, item } from "../utils/animations";
import { useInView } from "react-intersection-observer";
import { UserContext } from "../pages/_app";
import { styles } from "./MainContent";

const PortfolioSection = () => {
  const ctx = useContext(UserContext);

  const { ref: portContainer, inView } = useInView();

  return (
    <section className={styles.section} ref={portContainer} id="portfolios">
      <div className="justify-center p-4 m-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
        <div className="flex flex-wrap gap-4 mt-8 text-center justify-center">
          {/* <button
            className="block w-full px-12 py-3 text-lg font-medium text-black border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
            href="/about"
          >
            All
          </button> */}
        </div>
      </div>
      <motion.div
        className="grid lg:grid-cols-4 lg:gap-4 justify-center align-center grid-cols-2 gap-2"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : ""}
      >
        {ctx.portfolio?.map((port) => (
          <motion.div
            key={port.id}
            className="w-full"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            {/* <Link> */}
            <a
              href={`/portfolio/${port.id}`}
              className="rounded-2xl block overflow-hidden"
            >
              <Image
                className="object-cover w-full h-56"
                src={`/images/portfolio/${port.img}`}
                width="100%"
                height="100%"
                layout="responsive"
                alt={port.name}
              />
              <div className="p-4 bg-gray-900">
                <p className="text-sm text-white text-ellipsis overflow-hidden whitespace-nowrap">
                  {port.name}
                </p>
              </div>
            </a>
            {/* </Link> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
