import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript, SiPhp, SiWordpress, SiPython } from "react-icons/si";

const Icons = ({ icon }) => {
  const size = 40;
  switch (icon) {
    case "HTML":
      return <AiOutlineHtml5 size={size} />;
    case "CSS":
      return <FaCss3 size={size} />;
    case "Javascript":
      return <SiJavascript size={size} />;
    case "PHP":
      return <SiPhp size={size} />;
    case "WordPress":
      return <SiWordpress size={size} />;
    case "Python":
      return <SiPython size={size} />;
  }
};

export default Icons;
