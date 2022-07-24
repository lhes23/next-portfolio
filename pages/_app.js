import "../styles/globals.css";
import App from "next/app";
import baseUrl from "../utils/baseUrl";
import { createContext, useState } from "react";
import data from "../utils/data.json";

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  console.log("_app - userDetails: ", pageProps.userDetails);
  // const [userState, setUserState] = useState(pageProps.userDetails);
  const [userState, setUserState] = useState(data);

  return (
    <UserContext.Provider value={userState}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();
  appProps.pageProps = { userDetails: data.userDetails[0] };

  return { ...appProps };
};

export default MyApp;
