import { deleteUser, getSingleUser } from "@/prisma/controllers/users"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }) => {
  const { id } = params
  const user = await getSingleUser(id)
  return NextResponse.json(user)
}

export const DELETE = async (req: Request, { params }) => {
  const { id } = params
  const user = await deleteUser(id)
  return NextResponse.json(user)
}
