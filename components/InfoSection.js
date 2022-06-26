import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const profilePicVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0.4, duration: 0.5 } },
};

const infoVariants = {
  hidden: { scale: 0.1 },
  visible: { scale: 1, transition: { delay: 0.4, duration: 0.5 } },
};

const InfoSection = ({ styles, personalDetails }) => {
  const { about } = personalDetails;
  const { ref: picRef, inView: picInView } = useInView();
  const { ref: infoRef, inView: infoInView } = useInView();
  return (
    <section className={styles.section}>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
        <div className="relative py-10 justify-center flex" ref={picRef}>
          <motion.div
            className="avatar"
            variants={profilePicVariants}
            initial="hidden"
            animate={picInView ? "visible" : ""}
          >
            <div className="justify-center w-full z-10 rounded-full ring ring-offset-gray-200 ring-offset-2 relative h-64 sm:h-80 lg:h-full">
              <img src="/images/profile/profilepic.jpg" />
            </div>
          </motion.div>
        </div>
        <div ref={infoRef}>
          <motion.div
            className="relative flex items-center bg-gray-100 shadow-md rounded-lg"
            variants={infoVariants}
            initial="hidden"
            animate={infoInView ? "visible" : ""}
          >
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16" />
            <div className="p-4 sm:p-16 lg:p-4">
              <h2 className="text-2xl font-bold sm:text-3xl">More Info</h2>
              <p className="mt-4 text-gray-600">{about}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
