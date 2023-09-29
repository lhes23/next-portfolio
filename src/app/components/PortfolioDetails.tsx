"use client"
import React from "react"
import Link from "next/link"
import { IPortfolio } from "@/utils/interfaces"
import Image from "next/image"
import { styles } from "./MainContent"
import ButtonComponent from "./ButtonComponent"
import Icons from "./Icons"

const PortFolioDetails = ({
  id,
  name,
  url,
  img,
  app,
  tech,
  description,
  createdAt
}: IPortfolio) => {
  // console.log({ img })
  return (
    <>
      <section
        className={`${styles.section} h-full lg:h-screen bg-[url('/images/bg-laptop.jpg')] bg-cover bg-no-repeat bg-fixed`}
      >
        <div className="container mx-auto px-5 py-2 lg:px-32">
          <div className="flex flex-wrap md:-m-2 flex-row-reverse md:flex-row">
            <div className="flex w-full md:w-1/2 flex-wrap">
              <div className="w-full">
                <div className={`p-4 my-2 ${styles.bgCardGlass}`}>
                  <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
                    {name}
                  </h1>
                  <p className="text-xl">{description}</p>
                  <div className="py-5 flex justify-evenly">
                    <ButtonComponent>
                      <Link href="/#portfolios">Back To Portfolio</Link>
                    </ButtonComponent>
                    <ButtonComponent>
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                      >
                        Link to Site
                      </a>
                    </ButtonComponent>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className={`p-4 my-2 ${styles.bgCardGlass}`}>
                  <h3 className="text-2xl">Tech Stacks:</h3>
                  <div className="flex flex-wrap">
                    {tech.map((t, i) => (
                      <div key={i} className="p-2">
                        <Icons icon={t} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-1/2 flex-wrap">
              <div className="w-full md:p-2">
                <Image
                  src={`/images/portfolio/${img}`}
                  width={1000}
                  height={1000}
                  alt={name}
                  className="rounded-lg shadow-lg block h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortFolioDetails
