import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Head from "next/head"
import data from "@/utils/data.json"

const inter = Inter({ subsets: ["latin"] })
const { firstName, lastName } = data.personalDetails

export const metadata: Metadata = {
  title: firstName + " " + lastName,
  description: firstName + " " + lastName
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="svg" />
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
