"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { container, item } from "@/utils/animations"
import Icons from "./Icons"
import { styles } from "./MainContent"
import ctx from "@/utils/data.json"

const SkillsSection = () => {
  const { skills } = ctx.professionalDetails
  const skillRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(skillRef)

  return (
    <section className={styles.section} id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-y-8 lg:gap-x-16 lg:items-center">
        <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
          <h2 className={styles.title}>Skills and Strength</h2>
          <p className="mt-4">
            Continuous learning and self-improvement. Full Stack Web
            Development. Experienced with back-end and front-end development
          </p>
        </div>
        <div ref={skillRef}>
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-5"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : ""}
          >
            {skills?.map((skill, i) => (
              <motion.div
                className={`block p-4 border border-gray-100 focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 ${styles.bgCardGlass}`}
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-block p-3 rounded-lg">
                  <Icons icon={skill.name} />
                </span>
                <h3 className="mt-2 font-bold">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
