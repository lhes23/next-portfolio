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
  // const jobRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(jobRef)

  return (
    // <section className={styles.section} id="experiences" ref={jobRef}>
    <section className={styles.section} id="experiences">
      <div className="py-8">
        <div className="justify-center p-4 m-4 text-center">
          <h2 className={styles.title}>Job Experiences</h2>
        </div>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden h-full pt-10">
            <ol className="border-l border-neutral-300 dark:border-neutral-500">
              {jobExperiences.map((job, index) => {
                return (
                  <JobExperience
                    key={index}
                    job={job}
                    index={index}
                    // isInView={isInView}
                  />
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
export default JobExperiences
