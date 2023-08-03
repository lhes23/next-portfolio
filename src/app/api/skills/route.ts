import { getAllSkills } from "@/prisma/controllers/skills"
import { NextResponse } from "next/server"

export const GET = async () => {
  const skills = await getAllSkills()
  return NextResponse.json(skills)
}
