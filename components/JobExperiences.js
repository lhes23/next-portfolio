import { motion } from "framer-motion";
import { container, item } from "../utils/animations";
import { useInView } from "react-intersection-observer";

const JobExperiences = ({ jobExperiences }) => {
  const { ref: jobRef, inView: jobInView } = useInView();

  return (
    <section>
      <div className="py-8" ref={jobRef}>
        <h2 className="text-2xl font-bold text-black sm:text-3xl justify-center align-center flex">
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
                <div className="card-body">
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
      </div>
    </section>
  );
};
export default JobExperiences;
