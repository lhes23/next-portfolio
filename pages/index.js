import Head from "next/head";
import MainContent from "../components/MainContent";

export default function Home({ userDetails }) {
  const { firstName, lastName } = userDetails[0].personalDetails;
  return (
    <>
      <Head>
        <title>{firstName + " " + lastName}</title>
        <meta name="description" content={firstName + " " + lastName} />
        <link rel="icon" href="/lr-logo.svg" />
      </Head>
      <MainContent userDetails={userDetails} />
    </>
  );
}
