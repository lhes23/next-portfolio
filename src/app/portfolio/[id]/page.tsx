import React from "react"
import { notFound } from "next/navigation"
import data from "@/utils/data.json"
import PortFolioDetails from "@/app/components/PortfolioDetails"

export async function generateStaticParams() {
  const { portfolios } = data

  return portfolios.map((portfolio) => ({
    id: portfolio.id
  }))
}

const PortfolioPage = async ({ params }: { params: { id: string } }) => {
  const { portfolios } = data
  const { id } = params
  const portfolio = portfolios.find((p) => p.id === id)
  if (!portfolio) return notFound()

  return <PortFolioDetails {...portfolio} />
}

export default PortfolioPage
