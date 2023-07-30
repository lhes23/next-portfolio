"use client"
import React, { useRef } from "react"
import { useInView } from "framer-motion"
import { styles } from "./MainContent"
import JobExperience from "./JobExperience"
import { IJobExperience } from "@/utils/interfaces"

const JobExperiences = ({
  jobExperiences
}: {
  jobExperiences: IJobExperience[]
}) => {
  const jobRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(jobRef)

  return (
    <section className={styles.section} id="experiences">
      <div className="py-8">
        <div className="justify-center p-4 m-4 text-center">
          <h2 className={styles.title}>Job Experiences</h2>
        </div>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div
              ref={jobRef}
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border md:block"
              style={{ left: "50%" }}
            />
            {jobExperiences.map((job, index) => {
              return (
                <JobExperience
                  key={index}
                  job={job}
                  index={index}
                  isInView={isInView}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default JobExperiences
