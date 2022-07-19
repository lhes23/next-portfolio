import { createContext, useState } from "react";
import MainContent from "../components/MainContent";
import baseUrl from "../utils/baseUrl";

export default function Home({ userDetails }) {
  // const [userState, setUserState] = useState(userDetails);
  return (
    // <UserContext.Provider value={userState}>
    <MainContent />
    // </UserContext.Provider>
  );
}

export const getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();
  return {
    props: {
      userDetails: data.userDetails[0],
    },
  };
};
