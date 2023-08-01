import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"
import objectData from "@/utils/data.json"

const fetchData = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/staticdata/`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const Home = async () => {
  const data = await fetchData()
  if (!data) return undefined
  // const data = objectData
  return <MainContent data={data} />
}

export default Home
