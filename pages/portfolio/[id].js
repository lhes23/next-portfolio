import { useRouter } from "next/router";
import Link from "next/link";
import baseUrl from "../../utils/baseUrl";

const PortFolioDetails = ({ portfolios }) => {
  const router = useRouter();
  const { id } = router.query;
  const portfolio = portfolios.filter((portfolio) => portfolio.id === id);
  const { id: portId, name, app, img, url } = portfolio[0];

  return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={`/images/portfolio/${img}`} />
        <h2>{url}</h2>
        <p>{app}</p>
      </div>
      <Link href="/#portfolios">
        <a>Home</a>
      </Link>
    </>
  );
};
export default PortFolioDetails;

export const getPortfolio = async () => {
  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();
  const portfolios = data.userDetails[0].portfolio;
  return portfolios;
};

export const getStaticProps = async () => {
  const portfolios = await getPortfolio();
  return {
    props: {
      portfolios,
    },
  };
};

export const getStaticPaths = async () => {
  const portfolios = await getPortfolio();
  const paths = portfolios.map((portfolio) => {
    return {
      params: {
        id: portfolio.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
