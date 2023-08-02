import { getAllPortfolios } from "@/prisma/portfolios"
import { NextResponse } from "next/server"

export const GET = async () => {
  const portfolios = await getAllPortfolios()
  return NextResponse.json(portfolios)
}
