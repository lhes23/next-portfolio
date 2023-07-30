import React from "react"
import MainContent from "@/components/MainContent"
import baseUrl from "@/utils/baseUrl"

export const fetchData = async () => {
  const res = await fetch(`${baseUrl}/api/staticdata/`)
  const data = await res.json()
  return data
}

export default async function Home() {
  const objectData = await fetchData()
  if (!objectData) return <>Cant Load Data</>
  return <MainContent data={objectData} />
}
