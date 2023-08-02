import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"
import objectData from "@/utils/data.json"
import { fetchData } from "@/hooks/fetchData"

const Home = async () => {
  const myID = "64c9d313866149c3746dba1c"
  const data = await fetchData(`${baseUrl}/api/staticdata/`)
  const personalDetails = await fetchData(`${baseUrl}/api/users/${myID}`)
  console.log(personalDetails)
  if (!data) return undefined
  // const data = objectData
  return <MainContent data={data} personalDetails={personalDetails} />
}

export default Home
