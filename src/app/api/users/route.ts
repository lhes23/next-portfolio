import { NextResponse } from "next/server"
import { addUser, getAllUsers } from "../../../../prisma/user"

export const GET = async () => {
  const users = await getAllUsers()
  return NextResponse.json(users)
}

export const POST = async (req: Request) => {
  const res = await req.json()
  const user = await addUser(res)
  return NextResponse.json(user)
}
