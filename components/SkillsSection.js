import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../utils/staggeredAnim";
import { useInView } from "react-intersection-observer";
import Icons from "./Icons";

const SkillsSection = ({ styles, professionalDetails }) => {
  const { ref: skillRef, inView } = useInView();
  const { skills } = professionalDetails;

  return (
    <section className={styles.section}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
        <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Skills and Strength
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
            Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
            Obcaecati, autem.
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
        <div ref={skillRef}>
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : ""}
          >
            {skills?.map((skill, i) => (
              <motion.div
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                href="/accountant"
                key={skill.name}
                variants={item}
              >
                <span className="inline-block p-3 rounded-lg bg-gray-50">
                  <Icons icon={skill.name} />
                </span>
                <h6 className="mt-2 font-bold">{skill.name}</h6>
                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
