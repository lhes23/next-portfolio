import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Nav from "../components/Nav";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";

export default function Home({ userDetails }) {
  const user = userDetails[0];
  return (
    <main className="w-full">
      <Nav />
      <HeroSection user={user} />
      <SkillsSection />
      <AboutSection />
      <PortfolioSection user={user} />
      <InfoSection />
      <ContactSection />
      <Footer />
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
