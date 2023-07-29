import MainContent from "@/components/MainContent"
import data from "@/utils/data.json"

const fetchData = () => {
  return data
}

export default function Home() {
  return <MainContent data={data} />
}
