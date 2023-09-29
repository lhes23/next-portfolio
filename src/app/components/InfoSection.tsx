"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import { scaleUp, slideFromLeft } from "@/utils/animations"
import Image from "next/image"
import { styles } from "./MainContent"
import data from "@/utils/data.json"

const InfoSection = () => {
  const { about } = data.personalDetails
  const { course, year, school, schoolAddress } = data.education
  // const infoRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(infoRef)

  return (
    // <section className={styles.section} id="info" ref={infoRef}>
    <section className={styles.section} id="info">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          // variants={slideFromLeft}
          initial="hidden"
          animate="visible"
          className="relative p-4 mb-6 justify-center flex"
        >
          {/* <div className="avatar rounded-full w-1/2 h-1/2"> */}
          <div className="justify-center z-10 rounded-full relative sm:h-full w-1/2  h-36">
            <Image
              src="/images/profile/profilepic.png"
              className="rounded-full w-full ring ring-offset-gray-200 ring-offset-2 bg-white shadow-lg"
              alt="Lester Reandino profile picture"
              width={350}
              height={350}
            />
          </div>
          {/* </div> */}
        </motion.div>

        <motion.div
          className={`relative flex items-center ${styles.bgCardGlass}`}
          // variants={scaleUp}
          initial="hidden"
          // animate={isInView ? "visible" : ""}
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
