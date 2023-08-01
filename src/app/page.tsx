import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"
import objectData from "@/utils/data.json"

const Home = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/staticdata/`)
    const data = await res.json()
    console.log({ data })
    // const data = objectData
    return <MainContent data={data} />
  } catch (error) {
    console.log(error)
  }
}

export default Home
