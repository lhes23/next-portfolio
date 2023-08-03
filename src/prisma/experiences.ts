import { prisma } from "./prismaInstantiate"

export const getAllExperiences = async () => {
  const experiences = await prisma.experience.findMany({
    orderBy: {
      workDate: "desc"
    }
  })
  return experiences
}
