import { prisma } from "./prismaInstantiate"

export const getAllSocialMedias = async () => {
  const socialMedias = await prisma.socialMedia.findMany()
  return socialMedias
}
