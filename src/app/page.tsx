import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"
import { fetchData } from "@/hooks/fetchData"

const Home = async () => {
  const myID = "64c9d313866149c3746dba1c"
  const personalDetailsData = fetchData(`${baseUrl}/api/users/${myID}`)
  const skillsData = fetchData(`${baseUrl}/api/skills/`)
  const jobTitlesData = fetchData(`${baseUrl}/api/job-titles/`)
  const portfoliosData = fetchData(`${baseUrl}/api/portfolios/`)
  const experiencesData = fetchData(`${baseUrl}/api/experiences/`)
  const socialMediasData = fetchData(`${baseUrl}/api/social-medias/`)

  const [
    personalDetails,
    skills,
    jobTitles,
    portfolios,
    experiences,
    socialMedias
  ] = await Promise.all([
    personalDetailsData,
    skillsData,
    jobTitlesData,
    portfoliosData,
    experiencesData,
    socialMediasData
  ])

  const data = {
    personalDetails,
    skills,
    jobTitles,
    portfolios,
    experiences,
    socialMedias
  }
  if (!data) return undefined
  return <MainContent data={data} />
}

export default Home
