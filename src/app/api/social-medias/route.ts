import { getAllSocialMedias } from "@/prisma/socialmedias"
import { NextResponse } from "next/server"

export const GET = async () => {
  const socialMedias = await getAllSocialMedias()
  return NextResponse.json(socialMedias)
}
