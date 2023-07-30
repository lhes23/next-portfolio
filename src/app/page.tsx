import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"

const Home = async () => {
  const res = await fetch(`${baseUrl}/api/staticdata/`)
  const data = await res.json()
  if (!data) return <>Cant Load Data</>
  return <MainContent data={data} />
}

export default Home
