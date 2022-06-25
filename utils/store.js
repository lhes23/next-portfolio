import { useContext, createContext, useEffect, useState } from "react";
import baseUrl from "./baseUrl";

const AppContext = createContext();

export const AppWrapper = ({ children, userDetails }) => {
  //   const [userDetails, setUserDetails] = useState(null);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(`${baseUrl}/api/user`);
  //       const data = await res.json();
  //       setUserDetails(data.userDetails);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <AppContext.Provider value={userDetails}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
