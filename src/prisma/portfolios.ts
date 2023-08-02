import { prisma } from "./prismaInstantiate"

export const getAllPortfolios = async () => {
  const portfolios = await prisma.portfolio.findMany()
  return portfolios
}
