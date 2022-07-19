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

const MainContent = ({ userDetails }) => {
  const {
    personalDetails,
    professionalDetails,
    portfolio,
    education,
    jobExperiences,
  } = userDetails;

  const { firstName, lastName } = personalDetails;

  return (
    <>
      <Head>
        <title>{firstName + " " + lastName}</title>
        <meta name="description" content={firstName + " " + lastName} />
        <link rel="icon" href="/lr-logo.svg" />
      </Head>
      <main className="w-full">
        <Nav />
        <HeroSection
          personalDetails={personalDetails}
          professionalDetails={professionalDetails}
        />
        <div className="lg:m-auto px-10 bg-neutral-100">
          <SkillsSection
            styles={styles}
            professionalDetails={professionalDetails}
          />
        </div>
        <AboutSection professionalDetails={professionalDetails} />
        <JobExperiences jobExperiences={jobExperiences} />
        <div className="lg:m-auto px-10 bg-neutral-100">
          <PortfolioSection styles={styles} portfolio={portfolio} />
          <InfoSection
            styles={styles}
            personalDetails={personalDetails}
            education={education}
          />
          <ContactSection styles={styles} personalDetails={personalDetails} />
        </div>
        <Footer personalDetails={personalDetails} />
      </main>
    </>
  );
};

const styles = {
  section: "py-16 lg:px-16",
};

export default MainContent;
