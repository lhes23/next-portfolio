import { AiOutlineHtml5, AiFillApi, AiFillGithub } from "react-icons/ai"
import { FaCss3, FaNodeJs, FaWhmcs } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiWordpress,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiCpanel,
  SiPhpmyadmin,
  SiExpress,
  SiDjango,
  SiTailwindcss,
  SiAmazonaws
} from "react-icons/si"

const Icons = ({ icon }: { icon: string }) => {
  const size = 40
  icon = icon.toLowerCase()
  switch (icon) {
    case "html":
      return <AiOutlineHtml5 size={size} style={{ color: "#dd4d25" }} />
    case "css":
      return <FaCss3 size={size} style={{ color: "#146eb0" }} />
    case "javascript":
      return <SiJavascript size={size} style={{ color: "#f7df1e" }} />
    case "typescript":
      return <SiTypescript size={size} style={{ color: "#2f74c0" }} />
    case "php":
      return <SiPhp size={size} style={{ color: "#7377ad" }} />
    case "wordpress":
      return <SiWordpress size={size} style={{ color: "#207196" }} />
    case "python":
      return <SiPython size={size} style={{ color: "#356a97" }} />
    case "reactjs":
      return <SiReact size={size} style={{ color: "#5ed3f3" }} />
    case "nextjs":
      return <SiNextdotjs size={size} style={{ color: "#000" }} />
    case "cpanel":
      return <SiCpanel size={size} style={{ color: "#f7692b" }} />
    case "phpmyadmin":
      return <SiPhpmyadmin size={size} style={{ color: "#f0970e" }} />
    case "web host manager":
      return <FaWhmcs size={size} style={{ color: "#ea692f" }} />
    case "nodejs":
      return <FaNodeJs size={size} style={{ color: "green" }} />
    case "expressjs":
      return <SiExpress style={{ color: "black" }} size={size} />
    case "django":
      return <SiDjango style={{ color: "green" }} size={size} />
    case "django rest framework":
      return <AiFillApi style={{ color: "green" }} size={size} />
    case "git and github":
      return <AiFillGithub style={{ color: "#000" }} size={size} />
    case "tailwind css":
      return <SiTailwindcss style={{ color: "#06b6d4" }} size={size} />
    case "amazon web services":
      return <SiAmazonaws style={{ color: "#e7850f" }} size={size} />
    default:
      return <></>
  }
}

export default Icons
