import { getAllJobTitles } from "@/prisma/controllers/jobtitles"
import { NextResponse } from "next/server"

export const GET = async () => {
  const jobTitles = await getAllJobTitles()
  return NextResponse.json(jobTitles)
}
