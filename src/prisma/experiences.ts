import { prisma } from "./prismaInstantiate"

export const getAllExperiences = async () => {
  const experiences = await prisma.experience.findMany()
  return experiences
}
