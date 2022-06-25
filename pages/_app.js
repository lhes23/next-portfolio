import "../styles/globals.css";
import App from "next/app";
import baseUrl from "../utils/baseUrl";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();

  const appProps = await App.getInitialProps(appContext);
  appProps.pageProps = { userDetails: data.userDetails };
  return { ...appProps };
};

export default MyApp;
