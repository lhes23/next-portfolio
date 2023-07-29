// Staggered Animation Container
export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

// Staggered Animation Children
export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const transition = {
  delay: 0.2,
  duration: 0.4
}

export const slideFromLeft = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition }
}

export const scaleUp = {
  hidden: { scale: 0.1 },
  visible: { scale: 1, transition }
}
