import ctx from "@/utils/data.json"

const Footer = () => {
  const { firstName, lastName } = ctx.personalDetails
  return (
    <div className="w-full justify-center text-center p-4 bg-white">
      <p className="text-slate-600 p-4 text-xs">
        &copy;Copyright {new Date().getFullYear()} || All Rights Reserved. ||{" "}
        {firstName} {lastName}
      </p>
    </div>
  )
}
export default Footer
