import React from "react"
import { motion } from "framer-motion"
import { styles } from "./MainContent"

const ButtonComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.button
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </>
  )
}

export default ButtonComponent
