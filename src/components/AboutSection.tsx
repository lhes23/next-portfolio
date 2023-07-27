import React, { useContext } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { leftElement, rightElement } from "@/utils/animations"
import { UserContext } from "@/pages/_app"
import EarthCanvas from "./canvas/Earth"

const AboutSection = () => {
  const ctx = useContext(UserContext)

  const { summary } = ctx.professionalDetails
  const { ref: planetRef, inView: planetInView } = useInView()
  const { ref: summaryRef, inView: summaryInView } = useInView()

  return (
    <section id="about" className="bg-black w-full px-10 py-10">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
          <div ref={planetRef} className="h-full">
            <EarthCanvas />
          </div>
        </div>
        <div ref={summaryRef}>
          <motion.div
            className="lg:py-24"
            variants={leftElement}
            initial="hidden"
            animate={summaryInView ? "visible" : "hidden"}
            exit={!summaryInView ? "hidden" : ""}
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Professional Summary
            </h2>
            <p className="mt-4 text-white">{summary}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
