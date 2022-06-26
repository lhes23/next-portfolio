const Footer = ({ personalDetails }) => {
  const { firstName, lastName } = personalDetails;
  return (
    <div className="w-full justify-center text-center p-4 bg-gray-400">
      <p className="text-slate-200 p-4">
        &copy;Copyright {new Date().getFullYear()} || All Rights Reserved. ||{" "}
        {firstName} {lastName}
      </p>
    </div>
  );
};
export default Footer;
