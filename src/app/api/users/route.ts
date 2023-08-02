import { NextRequest, NextResponse } from "next/server"
import { addUser, getAllUsers } from "../../../../prisma/user"

export const GET = async () => {
  const users = await getAllUsers()
  return NextResponse.json(users)
}

export const POST = async (req: Request) => {
  const body = await req.json()
  //   const data = JSON.stringify(body)
  const user = await addUser(body)
  //   return new Response(data)
  return NextResponse.json(user)
}
