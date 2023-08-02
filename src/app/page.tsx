import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"
import objectData from "@/utils/data.json"
import { fetchData } from "@/hooks/fetchData"

const Home = async () => {
  const myID = "64c9d313866149c3746dba1c"
  const data = await fetchData(`${baseUrl}/api/staticdata/`)

  const personalDetailsData = fetchData(`${baseUrl}/api/users/${myID}`)
  const skillsData = fetchData(`${baseUrl}/api/skills/`)
  const jobTitlesData = fetchData(`${baseUrl}/api/job-titles/`)
  const portfoliosData = fetchData(`${baseUrl}/api/portfolios/`)

  const [personalDetails, skills, jobTitles, portfolios] = await Promise.all([
    personalDetailsData,
    skillsData,
    jobTitlesData,
    portfoliosData
  ])

  if (!data) return undefined
  // const data = objectData
  return (
    <MainContent
      data={data}
      personalDetails={personalDetails}
      skills={skills}
      jobTitles={jobTitles}
      portfolios={portfolios}
    />
  )
}

export default Home
