"use client"
import React from "react"
import Link from "next/link"
import { IPortfolio } from "@/utils/interfaces"
import Image from "next/image"
import { styles } from "./MainContent"
import ButtonComponent from "./ButtonComponent"

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
      <section
        className={`${styles.section} h-screen bg-[url('/images/bg-laptop.jpg')] bg-cover bg-no-repeat bg-fixed`}
      >
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className={`p-7 ${styles.bgCardGlass}`}>
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
              <div className="w-1/2 p-1 md:p-2">
                <div className={styles.bgCardGlass}>test</div>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <div className={styles.bgCardGlass}>test</div>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <Image
                  src={`/images/portfolio/${img}`}
                  width={1000}
                  height={1000}
                  alt={name}
                  className="rounded shadow-lg block h-full w-full object-cover object-center"
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
