"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { container } from "@/utils/animations"
import { styles } from "./MainContent"
import ctx from "@/utils/data.json"
import Portfolio from "./Portfolio"
import { IPortfolio } from "@/utils/interfaces"

const PortfolioSection = ({ portfolios }: { portfolios: IPortfolio[] }) => {
  // const { portfolios } = ctx
  const portContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(portContainerRef)

  const sortedPortfolios = portfolios.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  )

  return (
    <section className={styles.section} ref={portContainerRef} id="portfolios">
      <div className="justify-center p-4 m-4 text-center">
        <h2 className={styles.title}>Portfolios</h2>
      </div>
      <motion.div
        className="grid lg:grid-cols-4 lg:gap-4 justify-center align-center grid-cols-2 gap-2"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : ""}
      >
        {sortedPortfolios?.map((port) => (
          <Portfolio key={port.id} port={port} />
        ))}
      </motion.div>
    </section>
  )
}

export default PortfolioSection
