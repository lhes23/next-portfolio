import { prisma } from "../prismaInstantiate"

export const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

export const addUser = async (data) => {
  const user = await prisma.user.create({
    data
  })

  return user
}

export const getSingleUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  return user
}

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id: id
    }
  })
  return user
}
