import React, { useContext } from "react"
import Typed from "react-typed"
import Link from "next/link"
import { UserContext } from "@/pages/_app"

const HeroSection = () => {
  const ctx = useContext(UserContext)
  const { firstName, lastName } = ctx.personalDetails
  const { jobTitles } = ctx.professionalDetails

  return (
    <section className="relative">
      <video
        loop
        autoPlay
        muted
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-100 sm:opacity-100"
        src="/videos/circuit.mp4"
      />
      <div className="relative w-full px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="w-full text-center justify-center">
          <h1 className="text-3xl font-extrabold sm:pt-32 text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-pink-600 to-purple-600">
            Hi, my name is
            <span className="block">
              {firstName} {lastName}
            </span>
          </h1>

          <p className="mt-4 text-2xl sm:leading-relaxed sm:text-4xl text-white text-center">
            I&apos;m a{" "}
            <span className="block">
              <Typed
                strings={jobTitles.map((title) => title)}
                typeSpeed={100}
                backSpeed={50}
                loop
                className="text-left"
              />
            </span>
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center justify-center bg-transparent py-4">
            <Link
              href="#skills"
              className="block px-12 py-3 font-bold text-lg text-white border border-white rounded w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
            >
              Learn More
            </Link>
            <a
              href="https://docs.google.com/document/d/1nVsZ8jtdT1oDQG0cIizADwHPJ09Tji5GiJqUQ6xtVQc/edit?usp=sharing"
              className="block px-12 py-3 font-bold text-lg text-white border border-white rounded w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
