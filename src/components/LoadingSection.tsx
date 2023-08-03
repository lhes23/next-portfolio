import React from "react"
import { styles } from "./MainContent"

const LoadingSection = () => {
  return (
    <section className={`py-16 lg:px-16 text-gray-800 animate-pulse`}>
      <h3
        className="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
        style={{ width: "40%" }}
      />
      <ul className="mt-5 space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
      </ul>
    </section>
  )
}

export default LoadingSection
