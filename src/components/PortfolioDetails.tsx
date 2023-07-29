"use client"
import React from "react"
import Link from "next/link"
import { IPortfolio } from "@/utils/interfaces"
import Image from "next/image"
import { styles } from "./MainContent"

const PortFolioDetails = ({
  id,
  name,
  url,
  img,
  app,
  description,
  createdAt
}: IPortfolio) => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(/images/portfolio/${img})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5 text-2xl">{description}</p>
            <div className="flex justify-evenly">
              <Link href="/#portfolios" className="btn btn-accent">
                Back to Portfolios
              </Link>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Link to the site
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        className={`${styles.section} h-screen bg-[url('/images/bg-laptop.jpg')] bg-cover bg-no-repeat bg-fixed`}
      >
        <div className="m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className={`lg:w-6/12 p-7 ${styles.bgCardGlass}`}>
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
                {name}
              </h1>
              <p className="text-xl">{description}</p>
              <div className="py-5">
                <a
                  href="#"
                  className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3"
                >
                  Try for free
                </a>
                <a
                  href="#"
                  className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black"
                >
                  Requist a demo
                </a>
              </div>
            </div>
            <div className="lg:w-5/12 order-2">
              <Image
                src={`/images/portfolio/${img}`}
                width={1000}
                height={1000}
                alt={name}
                // style={{
                //   transform:
                //     "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
                // }}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortFolioDetails
