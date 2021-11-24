import { Variants } from "framer-motion";

//
export const VStaggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const VStaggerItemsFromTop: Variants = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 },
  },
};

export const VStaggerItemsFromBottom: Variants = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.1, duration: 1.5 },
  },
};

export const VStaggerItemsFromLeft: Variants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 },
  },
};

export const VStaggerItemsFromRight: Variants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 },
  },
};
