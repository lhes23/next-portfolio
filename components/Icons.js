import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaNodeJs, FaWhmcs } from "react-icons/fa";
import {
  SiJavascript,
  SiPhp,
  SiWordpress,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiCpanel,
  SiPhpmyadmin,
  SiExpress,
} from "react-icons/si";

const Icons = ({ icon }) => {
  const size = 40;
  switch (icon) {
    case "HTML":
      return <AiOutlineHtml5 size={size} style={{ color: "#dd4d25" }} />;
    case "CSS":
      return <FaCss3 size={size} style={{ color: "#146eb0" }} />;
    case "Javascript":
      return <SiJavascript size={size} style={{ color: "#f7df1e" }} />;
    case "PHP":
      return <SiPhp size={size} style={{ color: "#7377ad" }} />;
    case "WordPress":
      return <SiWordpress size={size} style={{ color: "#207196" }} />;
    case "Python":
      return <SiPython size={size} style={{ color: "#356a97" }} />;
    case "ReactJS":
      return <SiReact size={size} style={{ color: "#5ed3f3" }} />;
    case "NextJS":
      return <SiNextdotjs size={size} style={{ color: "#000" }} />;
    case "cPanel":
      return <SiCpanel size={size} style={{ color: "#f7692b" }} />;
    case "PhpMyAdmin":
      return <SiPhpmyadmin size={size} style={{ color: "#f0970e" }} />;
    case "Web Host Manager":
      return <FaWhmcs size={size} style={{ color: "#ea692f" }} />;
    case "NodeJS":
      return <FaNodeJs size={size} style={{ color: "green" }} />;
    case "ExpressJS":
      return <SiExpress style={{ color: "black" }} size={size} />;
  }
};

export default Icons;
