import React from "react"
import Icons from "./Icons"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"

const Skill = ({ name }: { name: string }) => {
  return (
    <>
      <CardContainer className="inter-var hover:shadow-xl">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border justify-center text-center">
          <CardItem
            translateZ="50"
            className="text-lg font-bold text-neutral-600 dark:text-white text-center justify-center flex"
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
