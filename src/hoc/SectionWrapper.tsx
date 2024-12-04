import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motions';

// Higher-order component (HOC) to wrap a component with motion animations and section styling
const StarWrapper = (
  Component: React.ComponentType, // Accepting a React component
  idName: string // Accepting a string for the section ID
): React.FC => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // Animation variants for staggered effect
        initial="hidden" // Initial state of the animation
        whileInView="show" // Animation triggers when in view
        viewport={{ once: true, amount: 0.25 }} // Defines how much of the section should be in view for the animation to trigger
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Section styling from styles object
      >
        <span className="hash-span" id={idName}>
          {' '}
          {/* Span to display the section ID */}
          &nbsp;
        </span>
        <Component /> {/* Rendering the passed component */}
      </motion.section>
    );
  };
};

export default StarWrapper; // Exporting the wrapped component
