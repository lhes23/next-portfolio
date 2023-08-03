import { prisma } from "../prismaInstantiate"

export const getAllSkills = () => {
  const skills = prisma.skill.findMany()
  return skills
}
