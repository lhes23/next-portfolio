import Head from "next/head";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSection";
import JobExperiences from "./JobExperiences";
import { useContext } from "react";
import { UserContext } from "../pages";

const MainContent = () => {
  const ctx = useContext(UserContext);
  const { firstName, lastName } = ctx.personalDetails;

  return (
    <>
      <Head>
        <title>{firstName + " " + lastName}</title>
        <meta name="description" content={firstName + " " + lastName} />
        <link rel="icon" href="/lr-logo.svg" />
      </Head>
      <main className="w-full">
        <Nav />
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <JobExperiences />
        <div className="lg:m-auto px-10 bg-neutral-100">
          <PortfolioSection />
          <InfoSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export const styles = {
  section: "py-16 lg:px-16",
};

export default MainContent;
