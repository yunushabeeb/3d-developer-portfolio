import { VerticalTimeline } from 'react-vertical-timeline-component'; // Importing the VerticalTimeline component for creating a timeline
import { motion } from 'framer-motion'; // Importing motion for animations

import 'react-vertical-timeline-component/style.min.css'; // Importing the CSS for styling the vertical timeline

import { styles } from '../styles'; // Importing styles for consistent styling across the app
import { experiences } from '../constants'; // Importing the experiences data from constants
import { SectionWrapper } from '../hoc'; // Higher-order component to wrap the section
import { textVariant } from '../utils/motions'; // Importing motion variant for animations
import ExperienceCard from './ExperienceCard'; // Importing the ExperienceCard component for each timeline item

const Experience = () => {
  return (
    <>
      {/* Animating the section header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {/* Subtext for the section, describing the purpose of the section */}
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {/* Main section header */}
          Work Experience.
        </h2>
      </motion.div>

      {/* Main container for the timeline */}
      <div className="mt-20 flex flex-col">
        {/* Vertical Timeline component rendering each experience */}
        <VerticalTimeline>
          {/* Looping through the experiences array and rendering each ExperienceCard */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Unique key for each timeline entry
              experience={experience} // Passing experience data as a prop to ExperienceCard
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrapping the Experience component with the SectionWrapper HOC to handle section-specific logic
export default SectionWrapper(Experience, 'work');
