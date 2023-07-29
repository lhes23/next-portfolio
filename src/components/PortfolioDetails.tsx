"use client"
import React from "react"
import Link from "next/link"
import { IPortfolio } from "@/utils/interfaces"

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
    </>
  )
}

export default PortFolioDetails
