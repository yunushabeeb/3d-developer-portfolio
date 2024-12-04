// Import necessary libraries and utilities
import { motion } from 'framer-motion'; // For adding animations with Framer Motion
import Tilt from 'react-parallax-tilt'; // For the tilt effect on the service card
import { fadeIn } from '../utils/motions'; // Motion variants for animations

// ServiceCard component definition
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  // Adding the tilt effect to the service card
  <Tilt
    tiltMaxAngleX={45} // Max tilt angle on the X axis
    tiltMaxAngleY={45} // Max tilt angle on the Y axis
    scale={1} // No scaling effect on the tilt (the card remains the same size)
    transitionSpeed={450} // Transition speed for the tilt effect
    className="xs:w-[250px] w-full" // Responsive width for the card
  >
    {/* Motion wrapper for animation effect */}
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)} // Animation setup (right direction, spring effect)
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" // Gradient border and shadow styling
    >
      {/* Inner content of the service card */}
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        {/* Service icon */}
        <img
          src={icon} // Icon image source
          alt={title.toLowerCase().replace(/\s+/g, '-')} // Alt text based on title, formatted to lowercase with hyphens
          className="w-16 h-16 object-contain" // Styling to maintain the aspect ratio and size of the icon
        />

        {/* Service title */}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title} {/* Display the service title */}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
