import Image from "next/image";
import React from "react";
import videoBG from "../public/videos/circuit.mp4";

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <video loop autoPlay muted className="heroBackground" src={videoBG} />
      <Image
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
        alt="Couple on a bed with a dog"
        layout="fill"
      />
      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent" />
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Hi, My Name is
            <span className="sm:block">Lester Reandino</span>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            I&apos;m a Full Stack Web Developer
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-black border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
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
