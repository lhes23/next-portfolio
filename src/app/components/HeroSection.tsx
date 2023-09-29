import React from "react"
import Link from "next/link"
import ButtonComponent from "./ButtonComponent"
import TypingAnimate from "./TypingAnimate"
import data from "@/utils/data.json"

const HeroSection = () => {
  const { firstName, lastName } = data.personalDetails
  return (
    <section className="relative">
      <video
        loop
        autoPlay
        muted
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-100 sm:opacity-100"
        src="/videos/circuit.mp4"
      />
      <div
        id="hero"
        className="relative w-full px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
      >
        <div className="w-full text-center justify-center">
          <h1 className="text-3xl font-extrabold sm:pt-32 text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-100 to-purple-600">
            Hi, my name is
            <span className="block">
              {firstName} {lastName}
            </span>
          </h1>

          <TypingAnimate />
          <div className="flex flex-wrap gap-4 mt-8 text-center justify-center bg-transparent py-4">
            <ButtonComponent>
              <Link href="#skills">Learn More</Link>
            </ButtonComponent>
            <ButtonComponent>
              <a
                href="https://docs.google.com/document/d/1nVsZ8jtdT1oDQG0cIizADwHPJ09Tji5GiJqUQ6xtVQc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
