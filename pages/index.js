import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Nav from "../components/Nav";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";

export default function Home({ userDetails }) {
  const { personalDetails, professionalDetails, portfolio } = userDetails[0];
  return (
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
      <AboutSection />
      <div className="lg:m-auto px-10 bg-neutral-100">
        <PortfolioSection styles={styles} portfolio={portfolio} />
        <InfoSection styles={styles} />
        <ContactSection styles={styles} personalDetails={personalDetails} />
      </div>
      <Footer personalDetails={personalDetails} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const baseUrl =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();

  return {
    props: {
      userDetails: data.userDetails,
    },
  };
};

const styles = {
  section: "py-16 lg:px-16",
};
