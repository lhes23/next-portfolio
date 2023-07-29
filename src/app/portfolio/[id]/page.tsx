"use client"
import React from "react"
import { notFound, useParams } from "next/navigation"
import PortFolioDetails from "@/components/PortfolioDetails"
import ctx from "@/utils/data.json"

const PortfolioPage = () => {
  const { portfolios } = ctx
  const { id } = useParams()
  const portfolio = portfolios.find((p) => p.id === id)
  return (
    <>{portfolio ? <PortFolioDetails portfolio={portfolio} /> : notFound()}</>
  )
}

export default PortfolioPage
