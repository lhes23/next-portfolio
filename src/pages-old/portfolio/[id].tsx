"use client"
import { useRouter } from "next/router"
import Link from "next/link"
import baseUrl from "../../utils/baseUrl"
import { useContext } from "react"
import { UserContext } from "../_app"

const PortFolioDetails = () => {
  const ctx = useContext(UserContext)
  const router = useRouter()
  const { id } = router.query
  const portfolio = ctx.portfolios.filter((portfolio) => portfolio.id === id)
  const { id: portId, name, app, img, url, description } = portfolio[0]

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(/images/portfolio/${img})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5 text-2xl">{description}</p>
            <div className="flex justify-evenly">
              <Link href="/#portfolios" className="btn btn-accent">
                Back to Portfolios
              </Link>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Link to the site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${baseUrl}/api/user`)
//   const data = await res.json()
//   const { portfolios } = data.userDetails[0]
//   return { props: { portfolios } }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${baseUrl}/api/user`)
//   const data = await res.json()
//   const { portfolios } = data.userDetails[0]

//   const paths = portfolios.map((port) => ({
//     params: { id: port.id }
//   }))
//   return {
//     paths,
//     fallback: false
//   }
// }

export default PortFolioDetails
