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
  const heroData = {
    firstName: data.user.firstName,
    lastName: data.user.lastName,
    jobTitles: data.jobTitles
  }
  const infoData = {
    about: data.user.about,
    schoolCourse: data.user.schoolCourse,
    schoolYear: data.user.schoolYear,
    schoolName: data.user.schoolName,
    schoolAddress: data.user.schoolAddress
  }

  const contactData = {
    phoneNumber: data.user.phoneNumber,
    address: data.user.address,
    email: data.user.email
  }
  return (
    <>
      <main className="w-full bg-gradient-to-tr from-blue-300 via-purple-200 to-blue-500">
        <Nav />
        <HeroSection {...heroData} />
        <div className="lg:m-auto px-6 md:px-10 text-gray-600">
          <SkillsSection skills={data.skills} />
          <AboutSection summary={data.user.summary} />
          <JobExperiences jobExperiences={data.experiences} />
          <PortfolioSection portfolios={data.portfolios} />
          <InfoSection {...infoData} />
          <ContactSection {...contactData} />
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
    "text-white text-sm md:text-base bg-blue-500 btn glass hover:text-black hover:bg-gradient-to-r from-cyan-300 via-blue-100 to-purple-600"
}

export default MainContent
