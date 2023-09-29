"use client"
import React from "react"
import { TypeAnimation } from "react-type-animation"
import data from "@/utils/data.json"

const TypingAnimate = () => {
  const { jobTitles } = data.professionalDetails
  const jobTitlesWithDelay = () => {
    const arr: (string | number)[] = []
    jobTitles.map((title: string) => {
      arr.push(title)
      arr.push(1000)
    })
    return arr
  }
  return (
    <>
      <div className="mt-4 text-2xl sm:leading-relaxed sm:text-4xl text-white text-center">
        I&apos;m a{" "}
        <span className="block">
          <TypeAnimation
            sequence={jobTitlesWithDelay()}
            speed={5}
            repeat={Infinity}
            className="text-left"
          />
        </span>
      </div>
    </>
  )
}

export default TypingAnimate
