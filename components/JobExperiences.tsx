import { motion } from "framer-motion"
import { container, item } from "../utils/animations"
import { useInView } from "react-intersection-observer"
import { useContext } from "react"
import { UserContext } from "../pages/_app"

const JobExperiences = () => {
  const ctx = useContext(UserContext)

  const { ref: jobRef, inView: jobInView } = useInView()

  return (
    <section>
      <div className="py-8" ref={jobRef}>
        <h2 className="text-2xl font-bold text-black sm:text-3xl justify-center align-center flex">
          Job Experiences
        </h2>
        <div className="container mx-auto w-full h-full">
          <motion.div
            className="relative wrap overflow-hidden p-10 h-full"
            variants={container}
            initial="hidden"
            animate={jobInView ? "visible" : ""}
          >
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            />
            {ctx.jobExperiences.map((job, index) => {
              return (
                <>
                  <motion.div
                    className={`mb-8 flex justify-between ${
                      index % 2 == 0 ? "flex-row-reverse" : ""
                    } items-center w-full`}
                    variants={item}
                  >
                    <div className="order-1 w-5/12" />
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-lg text-white">
                        {index + 1}
                      </h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 className="mb-3 font-bold text-gray-800 text-xl">
                        {job.title}
                      </h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        {job.tasks}
                      </p>
                    </div>
                  </motion.div>
                </>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default JobExperiences