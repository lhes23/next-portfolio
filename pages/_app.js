import "../styles/globals.css";
import App from "next/app";
import { AppWrapper } from "../utils/store";
import baseUrl from "../utils/baseUrl";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();

  const appProps = await App.getInitialProps(appContext);
  appProps.pageProps = { userDetails1: data.userDetails };
  return { ...appProps };
};

export default MyApp;
