import React from "react"
import { notFound } from "next/navigation"
import data from "@/utils/data.json"
import PortFolioDetails from "@/app/components/PortfolioDetails"

const fetchPortfolios = (id: string) => {
  const { portfolios } = data
  const portfolio = portfolios.find((p) => p.id === id)
  return portfolio ? portfolio : notFound()
}

const PortfolioPage = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const portfolio = fetchPortfolios(id)
  if (!portfolio) {
    notFound()
  }

  return <PortFolioDetails {...portfolio} />
}

export default PortfolioPage
