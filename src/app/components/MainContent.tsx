// "use client"
import Nav from "./Nav"
import AboutSection from "./AboutSection"
import HeroSection from "./HeroSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import InfoSection from "./InfoSection"
import PortfolioSection from "./PortfolioSection"
import SkillsSection from "./SkillsSection"
import JobExperiences from "./JobExperiences"
import { AppContextInterface } from "@/utils/interfaces"
import data from "@/utils/data.json"

const MainContent = () => {
  const { professionalDetails, jobExperiences } = data

  return (
    <>
      <main className="w-full">
        <Nav />
        <HeroSection />
        <div className="lg:m-auto px-6 md:px-10 text-gray-600">
          <SkillsSection skills={professionalDetails.skills} />
          <AboutSection summary={professionalDetails.summary} />
          <JobExperiences jobExperiences={jobExperiences} />
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
  section: "py-16 lg:px-16 text-gray-800",
  title: "font-bold text-gray-800 text-3xl sm:text-4xl",
  bgCardGlass: "backdrop-blur-md bg-white/80 rounded-lg shadow-lg glass",
  button:
    "text-white text-sm md:text-base bg-blue-500 btn glass hover:text-black hover:bg-gradient-to-r from-cyan-300 via-blue-100 to-purple-600 p-4"
}

export default MainContent
