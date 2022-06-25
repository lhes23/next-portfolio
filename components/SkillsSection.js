import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../utils/staggeredAnim";
import { useInView } from "react-intersection-observer";
import Icons from "./Icons";

const SkillsSection = ({ styles, professionalDetails }) => {
  const { ref: skillRef, inView } = useInView();
  const { skills } = professionalDetails;

  return (
    <section className={styles.section} id="skills">
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
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-block p-3 rounded-lg bg-gray-50">
                  <Icons icon={skill.name} />
                </span>
                <h6 className="mt-2 font-bold">{skill.name}</h6>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
