import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Nav from "../components/Nav";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import baseUrl from "../utils/baseUrl";

export default function Home({ userDetails, userDetails1 }) {
  console.log(userDetails1);
  const { personalDetails, professionalDetails, portfolio } = userDetails1[0];
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
        <AboutSection />
        <div className="lg:m-auto px-10 bg-neutral-100">
          <PortfolioSection styles={styles} portfolio={portfolio} />
          <InfoSection styles={styles} />
          <ContactSection styles={styles} personalDetails={personalDetails} />
        </div>
        <Footer personalDetails={personalDetails} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
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
