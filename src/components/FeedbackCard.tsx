import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import { fadeIn } from '../utils/motions'; // Importing fadeIn animation from utils
import { FC } from 'react'; // Importing FC (Functional Component) type for type safety

// Define FeedbackCard component with props destructured and typed
const FeedbackCard: FC<FeedbackCardProps> = ({
  index, // The index for animation
  testimonial, // The testimonial text
  name, // The name of the person providing the feedback
  designation, // The designation of the person providing the feedback
  company, // The company the person is associated with
  image, // Image URL for the person's photo
}) => (
  // Using motion.div for applying animations with framer-motion
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)} // Animation settings using fadeIn variant
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full" // Tailwind classes for styling (background, padding, rounding corners, width)
  >
    {/* Quotation mark for indicating it's a testimonial */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      {/* The testimonial message */}
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        {/* Container for the person details */}
        <div className="flex-1 flex flex-col">
          {/* Name of the person providing the feedback */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          {/* Their designation and company */}
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        {/* The image of the person providing the testimonial */}
        <img
          src={image} // Source of the image
          alt={`feedback_by-${name}`} // Alt text for accessibility
          className="w-10 h-10 rounded-full object-cover" // Tailwind classes for styling (size, rounded shape, object-fit)
        />
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard; // Export the component for use in other parts of the application
