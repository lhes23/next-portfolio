"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { scaleUp, slideFromLeft } from "@/utils/animations"
import Image from "next/image"
import { styles } from "./MainContent"
import ctx from "@/utils/data.json"

interface IProp {
  about: string
  course: string
  year: string
  school: string
  schoolAddress: string
}
const InfoSection = ({ about, course, year, school, schoolAddress }: IProp) => {
  // const { about } = ctx.personalDetails
  // const { course, year, school, schoolAddress } = ctx.education
  const infoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(infoRef)

  return (
    <section className={styles.section} id="info" ref={infoRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          className="relative py-4 justify-center flex"
        >
          <div className="avatar">
            <div className="justify-center z-10 rounded-full ring ring-offset-gray-200 ring-offset-2 relative lg:h-96 sm:h-full sm:w-full w-48 h-48 bg-white shadow-lg">
              <Image
                src="/images/profile/profilepic.png"
                className="w-32"
                alt="Lester Reandino profile picture"
                width={500}
                height={500}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`relative flex items-center ${styles.bgCardGlass}`}
          variants={scaleUp}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          <div className="p-4 sm:p-16 lg:p-8">
            <h2 className={styles.title}>{course}</h2>
            <div className="py-4">
              <p>{year}</p>
              <p>{school}</p>
              <p>{schoolAddress}</p>
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">More Info</h2>
            <p className="mt-4">{about}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfoSection
