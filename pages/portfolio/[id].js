const PortFolioDetails = ({ id }) => {
  console.log(id);
  return <div>PortFolioDetails</div>;
};
export default PortFolioDetails;

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/");
  return {
    props: {
      id: params.id,
    },
  };
}

export async function getStaticPath() {}
