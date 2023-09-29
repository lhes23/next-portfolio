// "use client"
import React from "react"
import { motion } from "framer-motion"
import { IJobExperience } from "@/utils/interfaces"
// import { scaleUp } from "@/utils/animations"
import { styles } from "./MainContent"

interface IProp {
  job: IJobExperience
  index: number
}

const JobExperience = ({ job, index }: IProp) => {
  return (
    <>
      <motion.div
        className={`mb-8 flex justify-between items-center w-full ${
          index % 2 == 0 ? "flex-row-reverse" : ""
        }`}
        key={index}
        // variants={scaleUp}
        initial="hidden"
        animate="visible"
      >
        <div className="order-1 md:w-5/12 hidden md:block" />
        <div className="z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:flex">
          <h1 className="mx-auto font-semibold text-lg text-white ">
            {index + 1}
          </h1>
        </div>
        <div
          className={`${styles.bgCardGlass} order-1 md:w-5/12 px-6 py-4 block p-4 border border-gray-100  focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200`}
        >
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{job.title}</h3>
          <div className="text-slate-400">
            <p>{job.company}</p>
            <p>{job.date}</p>
          </div>
          <div className="text-sm leading-snug tracking-wide">
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
    </>
  )
}

export default JobExperience
