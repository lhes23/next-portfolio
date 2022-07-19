import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftElement, rightElement } from "../utils/animations";
import { UserContext } from "../pages/_app";

const AboutSection = () => {
  const ctx = useContext(UserContext);

  const { summary } = ctx.professionalDetails;
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
              variants={rightElement}
              initial="hidden"
              animate={planetInView ? "visible" : ""}
            />
          </div>
        </div>
        <div ref={summaryRef}>
          <motion.div
            className="lg:py-24"
            variants={leftElement}
            initial="hidden"
            animate={summaryInView ? "visible" : "hidden"}
            exit={!summaryInView ? "hidden" : ""}
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Professional Summary
            </h2>
            <p className="mt-4 text-white">{summary}</p>
          </motion.div>
        </div>
      </div>
      {/* <div className="py-8" ref={jobRef}>
        <h2 className="text-2xl font-bold text-white sm:text-3xl justify-center align-center flex">
          Job Experiences
        </h2>
        <motion.div
          className="grid lg:gap-4 justify-center align-center sm:grid-cols-2 grid-cols-1 gap-2 py-8 lg:px-4"
          variants={container}
          initial="hidden"
          animate={jobInView ? "visible" : ""}
        >
          {jobExperiences.map((job) => {
            return (
              <motion.div
                className="card w-full glass"
                key={job.title}
                variants={item}
              >
                <div className="card-body text-white">
                  <h2 className="card-title">{job.title}</h2>
                  <span className="text-sm text-gray-50">
                    {job.date} - {job.company}
                  </span>
                  <ul className="list-disc">
                    {job.tasks.map((task) => {
                      return (
                        <li className="py-2" key={task}>
                          {task}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="card-actions justify-end"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div> */}
    </section>
  );
};

export default AboutSection;
