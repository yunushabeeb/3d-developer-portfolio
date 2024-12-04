import { motion } from 'framer-motion'; // Importing motion for animations
import { styles } from '../styles'; // Importing styles for consistent layout and theming
import { SectionWrapper } from '../hoc'; // Importing SectionWrapper HOC (Higher-Order Component)
import { textVariant } from '../utils/motions'; // Importing textVariant animation function
import { testimonials } from '../constants'; // Importing the testimonials data
import FeedbackCard from './FeedbackCard'; // Importing the FeedbackCard component

// Feedbacks component displays a section of testimonials with animations
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* Container for the section, with margin-top and rounded corners */}

      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* Background and padding for the section heading container */}

        <motion.div variants={textVariant()}>
          {/* Applying textVariant animation to the heading */}
          <p className={styles.sectionSubText}>What others say</p>
          {/* Subheading: Introducing the testimonial section */}

          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          {/* Main heading for the testimonial section */}
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* Negative margin to lift up the testimonial cards and padding for side spacing */}

        {testimonials.map((testimonial, index) => (
          // Mapping through each testimonial and rendering the FeedbackCard component
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// Wrapping the Feedbacks component with the SectionWrapper HOC for consistent section structure
export default SectionWrapper(Feedbacks, '');
