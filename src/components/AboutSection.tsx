"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { slideFromLeft, scaleUp } from "@/utils/animations"
import EarthCanvas from "./canvas/Earth"
import { styles } from "./MainContent"

const AboutSection = ({ summary }: { summary: string }) => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(aboutRef)

  return (
    <section id="about" className={styles.section} ref={aboutRef}>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          // exit={!isInView ? "hidden" : ""}
          className="relative h-64 overflow-hidden rounded-lg sm:h-full"
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          className={`p-4 md:p-10 ${styles.bgCardGlass}`}
          variants={scaleUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
