import Image from "next/image";
import React from "react";
import Typed from "react-typed";

const HeroSection = ({ user }) => {
  const { firstName, lastName } = user.personalDetails;
  const { jobTitles } = user.professionalDetails;

  return (
    <section className="relative bg-white">
      <video
        loop
        autoPlay
        muted
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-100 sm:opacity-100"
        src="/videos/circuit.mp4"
        type="video/mp4"
      />

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-r from-green-300 via-pink-600 to-purple-600 backgroundAnimate shadow-md">
            Hi, my name is
            <span className="sm:block">
              {firstName} {lastName}
            </span>
          </h1>

          <p className="max-w-lg mt-4 text-2xl sm:leading-relaxed sm:text-4xl text-white">
            I&apos;m a{" "}
            <Typed
              strings={jobTitles.map((title) => title)}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-lg font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
