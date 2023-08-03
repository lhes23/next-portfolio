import { NextResponse } from "next/server"
import fsPromises from "fs/promises"
import path from "path"
import objectData from "@/utils/data.json"
import { getSingleUser } from "@/prisma/controllers/users"
import { getAllSocialMedias } from "@/prisma/controllers/socialmedias"
import { getAllSkills } from "@/prisma/controllers/skills"
import { getAllPortfolios } from "@/prisma/controllers/portfolios"
import { getAllJobTitles } from "@/prisma/controllers/jobtitles"
import { getAllExperiences } from "@/prisma/controllers/experiences"

// export async function GET() {
// const filePath = path.join(process.cwd(), "/src/utils/data.json")
// const jsonData = await fsPromises.readFile(filePath)
// const objectData = await JSON.parse(jsonData.toString())
// return NextResponse.json(objectData)
//   const data = await objectData
//   return NextResponse.json(data)
// }

export const GET = async (req: Request) => {
  const id = "64c9d313866149c3746dba1c"
  const user = await getSingleUser(id)
  const socialMedias = await getAllSocialMedias()
  const skills = await getAllSkills()
  const portfolios = await getAllPortfolios()
  const jobTitles = await getAllJobTitles()
  const experiences = await getAllExperiences()
  return NextResponse.json({
    user,
    socialMedias,
    skills,
    portfolios,
    jobTitles,
    experiences
  })
}
