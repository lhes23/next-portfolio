import React from "react"
import { notFound } from "next/navigation"
import PortFolioDetails from "@/components/PortfolioDetails"
import data from "@/utils/data.json"

const fetchPortfolios = async (id: string) => {
  const { portfolios } = await data
  const portfolio = portfolios.find((p) => p.id === id)
  return portfolio ? portfolio : notFound()
}

const PortfolioPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const portfolio = await fetchPortfolios(id)
  if (!portfolio) {
    notFound()
  }

  return <PortFolioDetails {...portfolio} />
}

export default PortfolioPage
