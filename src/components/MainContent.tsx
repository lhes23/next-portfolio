"use client"
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

const MainContent = ({ data }: { data: AppContextInterface }) => {
  const heroSectionProps = (data: AppContextInterface) => {
    const { firstName, lastName } = data.personalDetails
    const { jobTitles } = data.professionalDetails
    return {
      firstName,
      lastName,
      jobTitles
    }
  }

  const heroData = heroSectionProps(data)
  // const heroData = {}
  const infoData = {
    about: data.personalDetails.about,
    course: data.education.course,
    year: data.education.year,
    school: data.education.school,
    schoolAddress: data.education.schoolAddress
  }

  return (
    <>
      <main className="w-full bg-gradient-to-tr from-blue-300 via-purple-200 to-blue-500">
        <Nav />
        <HeroSection {...heroData} />
        <div className="lg:m-auto px-6 md:px-10 text-gray-600">
          <SkillsSection skills={data.professionalDetails.skills} />
          <AboutSection summary={data.professionalDetails.summary} />
          <JobExperiences jobExperiences={data.jobExperiences} />
          <PortfolioSection portfolios={data.portfolios} />
          <InfoSection {...infoData} />
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
