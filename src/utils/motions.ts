export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50, // Initial position off-screen vertically
      opacity: 0, // Initial opacity
    },
    show: {
      y: 0, // Final position
      opacity: 1, // Final opacity
      transition: {
        type: 'spring', // Spring animation type
        duration: 1.25, // Duration of animation
        delay: delay, // Delay for animation
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0, // Horizontal movement based on direction
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0, // Vertical movement based on direction
      opacity: 0, // Initial opacity
    },
    show: {
      x: 0, // Final horizontal position
      y: 0, // Final vertical position
      opacity: 1, // Final opacity
      transition: {
        type: type, // Type of transition
        delay: delay, // Delay before starting animation
        duration: duration, // Duration of animation
        ease: 'easeOut', // Easing function
      },
    },
  };
};

export const zoomIn = (delay?: number, duration?: number) => {
  return {
    hidden: {
      scale: 0, // Initial scale
      opacity: 0, // Initial opacity
    },
    show: {
      scale: 1, // Final scale
      opacity: 1, // Final opacity
      transition: {
        type: 'tween', // Tween transition
        delay: delay, // Delay before starting animation
        duration: duration, // Duration of animation
        ease: 'easeOut', // Easing function
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0, // Horizontal slide direction
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0, // Vertical slide direction
    },
    show: {
      x: 0, // Final horizontal position
      y: 0, // Final vertical position
      transition: {
        type: type, // Type of transition
        delay: delay, // Delay before starting animation
        duration: duration, // Duration of animation
        ease: 'easeOut', // Easing function
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => {
  return {
    hidden: {}, // Initial state (no change)
    show: {
      transition: {
        staggerChildren: staggerChildren, // Stagger children animations
        delayChildren: delayChildren || 0, // Delay before children animations start
      },
    },
  };
};
