// "use client"
import React from "react"
import { motion } from "framer-motion"
// import { item } from "@/utils/animations"
import { IPortfolio } from "@/utils/interfaces"
import Link from "next/link"
import Image from "next/image"

interface IProp {
  port: IPortfolio
}

const Portfolio = ({ port }: IProp) => {
  return (
    <>
      <motion.div
        className="w-full h-[100%]"
        // variants={item}
        whileHover={{ scale: 1.02 }}
      >
        <Link
          href={`/portfolio/${port.id}`}
          className="rounded-2xl block overflow-hidden"
        >
          <Image
            className="object-cover w-full h-56"
            src={`/images/portfolio/${port.img}`}
            width={300}
            height={300}
            alt=""
          />
          <div className="p-4 bg-gray-900">
            <p className="text-sm text-white text-ellipsis overflow-hidden whitespace-nowrap">
              {port.name}
            </p>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

export default Portfolio
