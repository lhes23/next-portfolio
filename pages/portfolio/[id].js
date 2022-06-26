import { useRouter } from "next/router";
import Link from "next/link";

const PortFolioDetails = ({ userDetails }) => {
  const { portfolio: portfolios } = userDetails[0];
  const router = useRouter();
  const { id } = router.query;
  const portfolio = portfolios.filter((portfolio) => portfolio.id === id);
  const { id: portId, name, app, img, url, description } = portfolio[0];

  return (
    <>
      <div className="justify-center content-center flex pt-20">
        <div className="hero bg-indigo-200 max-w-screen-md rounded-2xl shadow-md">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={`/images/portfolio/${img}`}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="py-6">{description}</p>
              <a
                className={styles.btn}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to the site
              </a>
              <Link href="/#portfolios">
                <a className={styles.btn}>Back to Portfolios</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  btn: "block w-full px-12 py-3 my-2 text-lg font-medium text-blue-500 border border-white rounded w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring hover:text-white",
};

export default PortFolioDetails;
