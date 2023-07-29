import Head from "next/head"
import Nav from "./Nav"
import AboutSection from "./AboutSection"
import HeroSection from "./HeroSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import InfoSection from "./InfoSection"
import PortfolioSection from "./PortfolioSection"
import SkillsSection from "./SkillsSection"
import JobExperiences from "./JobExperiences"
import ctx from "@/utils/data.json"

const MainContent = () => {
  const { firstName, lastName } = ctx.personalDetails

  return (
    <>
      <Head>
        <title>{firstName + " " + lastName}</title>
        <meta name="description" content={firstName + " " + lastName} />
        <link rel="icon" href="/lr-logo.svg" />
      </Head>
      <main className="w-full bg-gradient-to-tr from-blue-300 via-purple-200 to-blue-500">
        <Nav />
        <HeroSection />
        <div className="lg:m-auto px-6 md:px-10 text-gray-600">
          <SkillsSection />
          <AboutSection />
          <JobExperiences />
          <PortfolioSection />
          <InfoSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  )
}

export const styles = {
  section: "py-16 lg:px-16",
  title: "font-bold text-gray-800 text-3xl sm:text-4xl",
  bgCardGlass: "backdrop-blur-md bg-white/80 rounded-lg shadow-lg glass",
  button:
    "text-white text-sm md:text-base bg-blue-500 btn glass hover:text-black hover:bg-gradient-to-r from-cyan-300 via-blue-100 to-purple-600"
}

export default MainContent
