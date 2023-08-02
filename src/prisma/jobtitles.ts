import { prisma } from "./prismaInstantiate"

export const getAllJobTitles = async () => {
  const jobTitles = await prisma.jobTitle.findMany()
  return jobTitles
}
