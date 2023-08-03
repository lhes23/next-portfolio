import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"
import { fetchData } from "@/hooks/fetchData"

const Home = async () => {
  const data = await fetchData(`${baseUrl}/api/staticdata`)
  return <MainContent data={data} />
}

export default Home
