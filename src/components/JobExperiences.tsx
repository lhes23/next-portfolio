import { motion } from "framer-motion"
import { container, item } from "@/utils/animations"
import { useInView } from "react-intersection-observer"
import { useContext } from "react"
import { UserContext } from "@/pages/_app"

const JobExperiences = () => {
  const ctx = useContext(UserContext)

  const { ref: jobRef, inView: jobInView } = useInView()

  return (
    <section>
      <div className="py-8" ref={jobRef}>
        <h2 className="text-2xl font-bold text-black sm:text-3xl justify-center align-center flex">
          Job Experiences
        </h2>
        <motion.div
          className="container mx-auto w-full h-full"
          variants={container}
          initial="hidden"
          animate={jobInView ? "visible" : ""}
        >
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block"
              style={{ left: "50%" }}
            />
            {ctx.jobExperiences.map((job, index) => {
              return (
                <motion.div
                  className={`mb-8 flex justify-between items-center w-full ${
                    index % 2 == 0 ? "flex-row-reverse" : ""
                  }`}
                  variants={item}
                  key={index}
                >
                  <div className="order-1 md:w-5/12 hidden md:block" />
                  <div className="z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:flex">
                    <h1 className="mx-auto font-semibold text-lg text-white ">
                      {index + 1}
                    </h1>
                  </div>
                  <div className="order-1 shadow-xl md:w-5/12 px-6 py-4 block p-4 border border-gray-100  bg-white rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      {job.title}
                    </h3>
                    <div className="text-slate-400">
                      <p>{job.company}</p>
                      <p>{job.date}</p>
                    </div>
                    <div className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                      <ul>
                        {job.tasks.map((task, i) => (
                          <li key={i} className="list-disc list-outside m-2">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default JobExperiences
