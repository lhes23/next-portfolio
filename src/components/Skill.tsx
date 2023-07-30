import React from "react"
import { motion } from "framer-motion"
import { item } from "@/utils/animations"
import Icons from "./Icons"
import { styles } from "./MainContent"

const Skill = ({ name }: { name: string }) => {
  return (
    <>
      <motion.div
        className={`block p-4 border border-gray-100 focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 ${styles.bgCardGlass}`}
        key={name}
        variants={item}
        whileHover={{ scale: 1.02 }}
      >
        <span className="inline-block p-3 rounded-lg">
          <Icons icon={name} />
        </span>
        <h3 className="mt-2 font-bold">{name}</h3>
      </motion.div>
    </>
  )
}

export default Skill
