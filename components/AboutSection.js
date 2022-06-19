import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const planetVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delay: 0.5, duration: 1 } },
};

const AboutSection = ({ styles }) => {
  const { ref: planetRef, inView } = useInView();

  return (
    <section id="About" className="bg-black w-full px-10 py-10">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          ref={planetRef}
        >
          <motion.video
            loop
            autoPlay
            muted
            className="inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-100 sm:opacity-100"
            src="/videos/planet.mp4"
            type="video/mp4"
            variants={planetVariants}
            initial="hidden"
            animate={inView ? "visible" : ""}
          />
        </div>
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>
          <a
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span className="text-sm font-medium"> Get Started </span>
            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
