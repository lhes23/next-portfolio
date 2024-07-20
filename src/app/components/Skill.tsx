import React from "react"
import Icons from "./Icons"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import { styles } from "./MainContent"

const Skill = ({ name }: { name: string }) => {
  return (
    <>
      <CardContainer className={`inter-var hover:shadow-xl ${styles.bgCardGlass}`}>
        <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border justify-center text-center">
          <CardItem
            translateZ="50"
            // TODO: Longer text tend to increase in height on mobile devices, fix responsiveness
            // className={`${
            //   name.toLowerCase() === "django rest framework" ||
            //   name.toLowerCase() === "amazon web service" ||
            //   name.toLowerCase() === "web host manager" ? "text-sm" : "text-base"} 
            //   font-bold text-neutral-600 dark:text-white text-center justify-center flex`}
            className="font-bold text-neutral-600 dark:text-white text-center justify-center flex text-sm"
          >
            {name}
          </CardItem>
          <CardItem
            translateZ="100"
            className="w-full mt-4 text-center justify-center flex"
          >
            <Icons icon={name} />
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  )
}

export default Skill
