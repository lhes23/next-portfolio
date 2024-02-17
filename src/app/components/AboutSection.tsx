"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import { slideFromLeft, scaleUp } from "@/utils/animations"
import EarthCanvas from "./canvas/Earth"
import { styles } from "./MainContent"
import { Meteors } from "./ui/meteors"

export function MeteorsEarth() {
  return (
    <div className="">
      <div className="h-full md:h-1/2 w-full  relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <EarthCanvas />
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  )
}

const AboutSection = ({ summary }: { summary: string }) => {
  // const aboutRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(aboutRef)

  return (
    // <section id="about" className={styles.section} ref={aboutRef}>
    <section id="about" className={`${styles.section} bg-gray-900`}>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 ">
        <MeteorsEarth />

        <motion.div
          className={`p-4 md:p-10 ${styles.bgCardGlass}`}
          // variants={scaleUp}
          initial="hidden"
          // animate={isInView ? "visible" : "hidden"}
          animate="visible"
          // exit={!isInView ? "hidden" : ""}
        >
          <h2 className={`text-center ${styles.title}`}>
            Professional Summary
          </h2>
          <p className="mt-4">{summary}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
