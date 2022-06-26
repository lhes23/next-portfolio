import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const planetVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delay: 0.4, duration: 0.9 } },
};

const summaryVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0.4, duration: 0.5 } },
};

const AboutSection = ({ professionalDetails }) => {
  const { summary } = professionalDetails;
  const { ref: planetRef, inView: planetInView } = useInView();
  const { ref: summaryRef, inView: summaryInView } = useInView();

  return (
    <section id="About" className="bg-black w-full px-10 py-10">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
          <div ref={planetRef}>
            <motion.video
              loop
              autoPlay
              muted
              className="inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-100 sm:opacity-100"
              src="/videos/planet.mp4"
              type="video/mp4"
              variants={planetVariants}
              initial="hidden"
              animate={planetInView ? "visible" : ""}
            />
          </div>
        </div>
        <div ref={summaryRef}>
          <motion.div
            className="lg:py-24"
            variants={summaryVariants}
            initial="hidden"
            animate={summaryInView ? "visible" : "hidden"}
            exit={!summaryInView ? "hidden" : ""}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Professional Summary
            </h2>
            <p className="mt-4 text-white">{summary}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
