import { getSinglePotfolio } from "@/prisma/portfolios"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: Request, { params }) => {
  const { id } = params
  const portfolio = await getSinglePotfolio(id)
  return NextResponse.json(portfolio)
}
