"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import { slideFromLeft, scaleUp } from "@/utils/animations"
import EarthCanvas from "./canvas/Earth"
import { styles } from "./MainContent"
import { Meteors } from "./ui/meteors"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"

export function MeteorsEarth() {
  return (
    <div className="">
      <div className="h-full w-full  relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform bg-red-500 rounded-full blur-3xl" />
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
    <section id="about" className={`${styles.section} bg-gray-900 w-full`}>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 ">
        <MeteorsEarth />
        <CardContainer className="inter-var hover:shadow-xl">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border justify-center text-center">
            <CardItem
              translateZ="50"
              className="text-lg font-bold text-neutral-600 dark:text-white text-center justify-center flex"
            >
              <h2 className={`text-center ${styles.title}`}>
                Professional Summary
              </h2>
            </CardItem>
            <CardItem
              translateZ="100"
              className="w-full mt-4 text-center justify-center flex"
            >
              {" "}
              <p className="mt-4">{summary}</p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  )
}

export default AboutSection
