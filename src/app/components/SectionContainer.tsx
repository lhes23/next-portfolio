"use client"
import React, { useRef } from "react"
import { useInView } from "framer-motion"
import { styles } from "./MainContent"

const SectionContainer = ({
  children,
  sectionId
}: {
  children: React.ReactNode
  sectionId: string
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)
  return (
    <>
      <section className={styles.section} id={sectionId} ref={sectionRef}>
        {children}
      </section>
    </>
  )
}
export default SectionContainer
