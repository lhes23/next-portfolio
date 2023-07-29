"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { container } from "@/utils/animations"
import { styles } from "./MainContent"
import { ISkill } from "@/utils/interfaces"
import Skill from "./Skill"

const SkillsSection = ({ skills }: { skills: ISkill[] }) => {
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
              <Skill key={i} name={skill.name} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
