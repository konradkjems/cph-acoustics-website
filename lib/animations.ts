// Framer Motion Animation Variants for CPH Acoustics

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInOnScroll = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export const cardHover = {
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 229, 204, 0.15)",
    transition: { duration: 0.3 }
  }
};

export const buttonPress = {
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

