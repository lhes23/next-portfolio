import { NextResponse } from "next/server"
import fsPromises from "fs/promises"
import path from "path"
import objectData from "@/utils/data.json"

export async function GET() {
  // const filePath = path.join(process.cwd(), "/src/utils/data.json")
  // const jsonData = await fsPromises.readFile(filePath)
  // const objectData = await JSON.parse(jsonData.toString())
  // return NextResponse.json(objectData)
  const data = await objectData
  return NextResponse.json(data)
}
