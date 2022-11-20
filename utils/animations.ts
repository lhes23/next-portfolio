// Staggered Animation Container
export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

// Staggered Animation Children
export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const leftElement = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0.4, duration: 0.5 } },
};

export const rightElement = {
  hidden: { scale: 0.1 },
  visible: { scale: 1, transition: { delay: 0.4, duration: 0.5 } },
};
