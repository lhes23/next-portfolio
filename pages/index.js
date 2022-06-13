import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Nav from "../components/Nav";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <main className="w-full">
      <Nav />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <PortfolioSection />
      <InfoSection />
      <ContactSection />
    </main>
  );
}
