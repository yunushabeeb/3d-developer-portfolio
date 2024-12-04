import { motion } from 'framer-motion'; // Importing motion for animations from Framer Motion
import { styles } from '../styles'; // Importing styles for consistent styling across the app
import { SectionWrapper } from '../hoc'; // Importing SectionWrapper HOC to wrap the section and potentially add additional styling or functionality
import { projects } from '../constants'; // Importing the list of projects from the constants file
import { fadeIn, textVariant } from '../utils/motions'; // Importing motion utility functions for animations
import ProjectCard from './ProjectCard'; // Importing the ProjectCard component to display individual project details

const Works = () => {
  return (
    <>
      {/* Motion container for the section heading with animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>{' '}
        {/* Subheading: Describes the section */}
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>{' '}
        {/* Main heading for the Projects section */}
      </motion.div>

      {/* Description text with animation */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)} // Applying fade-in animation to the paragraph
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* Description of the projects section */}
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Container for the individual project cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {/* Mapping through the projects array to render a ProjectCard for each project */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Wrapping the Works component with SectionWrapper to add section-specific styles or functionality
export default SectionWrapper(Works, '');
