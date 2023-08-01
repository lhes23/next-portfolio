import { NextRequest, NextResponse } from "next/server"
import { addUser, getAllUsers } from "../../../../prisma/user"

export const GET = async () => {
  const users = await getAllUsers()
  return NextResponse.json(users)
}

// export const POST = async (req: NextRequest) => {
//   const body = await req.json()
//   const data = await JSON.stringify(body)
//   const user = await addUser()
//   return new Response(user)
// }
