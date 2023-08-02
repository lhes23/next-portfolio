import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllSkills = () => {
  const skills = prisma.skill.findMany()
  return skills
}
