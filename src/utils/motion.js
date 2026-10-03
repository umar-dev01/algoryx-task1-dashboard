// Bubble animation variants and utilities for Framer Motion

// Spring configurations
export const springs = {
  gentle: { stiffness: 260, damping: 18 },
  responsive: { stiffness: 300, damping: 15 },
  bouncy: { stiffness: 400, damping: 10 },
};

// Card entrance animation (staggered)
export const bubbleCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.gentle,
      delay: index * 0.07,
    },
  }),
};

// Hover lift animation
export const bubbleHover = {
  y: -6,
  scale: 1.02,
  transition: springs.responsive,
};

// Press animation
export const bubbleTap = {
  scale: 0.96,
};

// Icon bubble float animation (idle state)
export const iconFloatVariants = {
  float: (delay = 0) => ({
    y: [0, -3, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    },
  }),
};

// Icon bubble pop on card hover
export const iconPopHover = {
  scale: 1.15,
  transition: springs.responsive,
};

// Dropdown/panel scale animation
export const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springs.gentle,
  },
  exit: { opacity: 0, scale: 0.9, y: -10, transition: { duration: 0.2 } },
};

// Badge pop animation
export const badgePopVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: springs.bouncy,
  },
};

// Button bubble animation
export const buttonBubbleVariants = {
  hover: bubbleHover,
  tap: bubbleTap,
};
