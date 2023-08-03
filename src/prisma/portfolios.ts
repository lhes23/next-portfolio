import { prisma } from "./prismaInstantiate"

export const getAllPortfolios = async () => {
  const portfolios = await prisma.portfolio.findMany()
  return portfolios
}

export const getSinglePotfolio = async (id: string) => {
  // const body = req.json()
  const portfolio = await prisma.portfolio.findUnique({
    where: {
      id: id
    }
  })
  return portfolio
  // return body
}
