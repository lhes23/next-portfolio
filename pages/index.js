import { createContext, useState } from "react";
import MainContent from "../components/MainContent";

export const UserContext = createContext();

export default function Home({ userDetails }) {
  const [userState, setUserState] = useState(userDetails);
  return (
    <UserContext.Provider value={userState}>
      <MainContent />
    </UserContext.Provider>
  );
}
