import { getAllExperiences } from "@/prisma/controllers/experiences"
import { NextResponse } from "next/server"

export const GET = async () => {
  const experiences = await getAllExperiences()
  return NextResponse.json(experiences)
}
