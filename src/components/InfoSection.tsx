import React, { useContext } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { leftElement, rightElement } from "@/utils/animations"
import Image from "next/image"
import { UserContext } from "@/pages/_app"
import { styles } from "./MainContent"

const InfoSection = () => {
  const ctx = useContext(UserContext)

  const { about } = ctx.personalDetails
  const { course, year, school, schoolAddress } = ctx.education

  const { ref: picRef, inView: picInView } = useInView()
  const { ref: infoRef, inView: infoInView } = useInView()

  return (
    <section className={styles.section} id="info">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative py-4 justify-center flex" ref={picRef}>
          <motion.div
            className="avatar"
            variants={leftElement}
            initial="hidden"
            animate={picInView ? "visible" : ""}
          >
            <div className="justify-center z-10 rounded-full ring ring-offset-gray-200 ring-offset-2 relative lg:h-96 sm:h-full sm:w-full w-48 h-48 bg-white shadow-lg">
              <Image
                src="/images/profile/profilepic.png"
                className="w-32"
                alt="Lester Reandino profile picture"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
        <div ref={infoRef}>
          <motion.div
            className="relative flex items-center bg-white shadow-xl rounded-lg"
            variants={rightElement}
            initial="hidden"
            animate={infoInView ? "visible" : ""}
          >
            <div className="p-4 sm:p-16 lg:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">{course}</h2>
              <div className="py-4">
                <p>{year}</p>
                <p>{school}</p>
                <p>{schoolAddress}</p>
              </div>
              <h2 className="text-xl font-bold sm:text-2xl">More Info</h2>
              <p className="mt-4 text-gray-600">{about}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
