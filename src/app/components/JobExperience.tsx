"use client"
import React from "react"
import { motion } from "framer-motion"
import { IJobExperience } from "@/utils/interfaces"
// import { scaleUp } from "@/utils/animations"
import { styles } from "./MainContent"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"

interface IProp {
  job: IJobExperience
  index: number
}

const JobExperience = ({ job, index }: IProp) => {
  return (
    <>
      <li className=" sm:pl-10">
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            {job.date}
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
        <CardContainer className={`inter-var hover:shadow-xl ${styles.bgCardGlass}`}>
          <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border justify-center text-center">
              <CardItem
                translateZ="70"
                className="text-lg font-bold text-neutral-600 dark:text-white text-center justify-center flex"
              >
                <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">
                  {job.title}
                </h3>
              </CardItem>
              <CardItem
                translateZ="10"
                className="w-full mt-4 flex text-xs text-gray-400"
              >
                <p>{job.company}</p>
                <p>{job.date}</p>
              </CardItem>
              <CardItem translateZ={30}>
                <ul>
                  {job.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="list-disc list-outside m-2 text-start text-sm"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </li>
    </>
  )
}

export default JobExperience
