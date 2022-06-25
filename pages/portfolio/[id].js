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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
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
