"use client"
import React, { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { container, item } from "@/utils/animations"
import { useInView } from "react-intersection-observer"
import { UserContext } from "@/pages/_app"
import { styles } from "./MainContent"

const PortfolioSection = () => {
  const ctx = useContext(UserContext)

  const { ref: portContainer, inView } = useInView()

  const sortedPortfolios = ctx.portfolios.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  )

  return (
    <section className={styles.section} ref={portContainer} id="portfolios">
      <div className="justify-center p-4 m-4 text-center">
        <h2 className={styles.title}>Portfolios</h2>
      </div>
      <motion.div
        className="grid lg:grid-cols-4 lg:gap-4 justify-center align-center grid-cols-2 gap-2"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : ""}
      >
        {/* {ctx.portfolios?.map((port) => ( */}
        {sortedPortfolios?.map((port) => (
          <motion.div
            key={port.id}
            className="w-full h-[100%]"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <Link
              href={`/portfolio/${port.id}`}
              className="rounded-2xl block overflow-hidden"
            >
              <Image
                className="object-cover w-full h-56"
                src={`/images/portfolio/${port.img}`}
                width={500}
                height={500}
                alt={port.name}
              />
              <div className="p-4 bg-gray-900">
                <p className="text-sm text-white text-ellipsis overflow-hidden whitespace-nowrap">
                  {port.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default PortfolioSection
