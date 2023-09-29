"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import { container } from "@/utils/animations"
import { ISkill } from "@/utils/interfaces"
import Skill from "./Skill"

const Skills = ({ skills }: { skills: ISkill[] }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)
  return (
    <>
      <motion.div
        className="grid grid-cols-2 gap-4 sm:grid-cols-5"
        // variants={container}
        initial="hidden"
        animate={isInView ? "visible" : ""}
      >
        {skills?.map((skill, i) => (
          <Skill key={i} name={skill.name} />
        ))}
      </motion.div>
    </>
  )
}
export default Skills
