"use client"
import React from "react"
import { motion } from "framer-motion"
import { styles } from "./MainContent"

const ButtonComponent = ({
  type,
  children
}: {
  type?: string
  children: React.ReactNode
}) => {
  return (
    <>
      <motion.button
        className={styles.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </>
  )
}

export default ButtonComponent
