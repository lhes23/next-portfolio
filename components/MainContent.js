import Nav from "./Nav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSection";

const MainContent = ({ userDetails }) => {
  const {
    personalDetails,
    professionalDetails,
    portfolio,
    education,
    jobExperiences,
  } = userDetails[0];

  return (
    <>
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
        <AboutSection
          professionalDetails={professionalDetails}
          jobExperiences={jobExperiences}
        />
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
