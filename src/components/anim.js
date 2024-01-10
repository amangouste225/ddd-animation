const transition = { duration: 10, ease: [0.76, 0, 0.24, 1] };

export const background = {
  initial: {
    opacity: 0,
    visibility: "hidden",
    transition,
  },
  clicked: {
    opacity: 1,
    visibility: "visible",
    transition,
  },
  exit: {
    opacity: 0,
    transition,
  },
};

export const heading = {
  initial: {
    y: 0,
  },
  clicked: (i) => ({
    y: "50px",
    duration: { delay: i * 0.02 },
    type: "spring",
    stiffness: 100,
  }),
  exit: (i) => ({
    y: "0px",
    duration: { delay: i },
  }),
};
