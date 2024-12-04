// Importing motion for animations and necessary assets/styles
import { motion } from 'framer-motion';
import { styles } from '../styles'; // Importing custom styles
import { services } from '../constants'; // Importing services data
import { SectionWrapper } from '../hoc'; // Importing SectionWrapper HOC (Higher Order Component)
import { fadeIn, textVariant } from '../utils/motions'; // Importing animation utility functions
import ServiceCard from './ServiceCard'; // Importing the ServiceCard component

// About component that represents the overview section of the website
const About = () => {
  return (
    <>
      {/* Motion wrapper for the text "Introduction" and "Overview" */}
      <motion.div variants={textVariant()}>
        {' '}
        {/* Applying animation variant for the title */}
        <p className={styles.sectionSubText}>Introduction</p>{' '}
        {/* Sub-text styled via the styles object */}
        <h2 className={styles.sectionHeadText}>Overview.</h2>{' '}
        {/* Main heading styled via the styles object */}
      </motion.div>

      {/* Motion paragraph with fade-in effect for the introduction text */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        // Fade-in animation for paragraph
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        // Custom styling
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Flex container for services cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {/* Mapping through the services array to display each ServiceCard */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          // Passing data and index to ServiceCard
        ))}
      </div>
    </>
  );
};

// Wrapping About component with SectionWrapper HOC for adding section styles or animation
export default SectionWrapper(About, 'about');
