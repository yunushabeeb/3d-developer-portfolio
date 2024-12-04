// Importing necessary libraries and assets
import { FC } from 'react'; // Functional Component type for TypeScript
import Tilt from 'react-parallax-tilt'; // For the tilt effect on the project card
import { github } from '../assets'; // Importing the GitHub icon asset
import { motion } from 'framer-motion'; // For adding animations using Framer Motion
import { fadeIn } from '../utils/motions'; // Importing motion variants for animation

// Defining the ProjectCard component
const ProjectCard: FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // Framer Motion for animating the card
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      {/* Tilt effect for the card */}
      <Tilt
        tiltMaxAngleX={45} // Max tilt angle along the X axis
        tiltMaxAngleY={45} // Max tilt angle along the Y axis
        scale={1} // Scale of the card on tilt (no scaling here)
        transitionSpeed={450} // Transition speed of the tilt effect
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" // Styling for the card
      >
        {/* Image container */}
        <div className="relative w-full h-[230px]">
          {/* Project image */}
          <img
            src={image} // Source of the project image
            alt="project_image" // Alt text for the image
            className="w-full h-full object-cover rounded-2xl" // Styling to make the image fill the container
          />
          {/* GitHub icon container */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Icon to open the source code link */}
            <div
              onClick={() => window.open(source_code_link, '_blank')} // Opens the source code in a new tab
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github} // GitHub icon
                alt="source code" // Alt text for the GitHub icon
                className="w-1/2 h-1/2 object-contain" // Styling for the icon size
              />
            </div>
          </div>
        </div>

        {/* Project title and description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>{' '}
          {/* Display the project name */}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>{' '}
          {/* Display the project description */}
        </div>

        {/* Project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag using the project name and tag name
              className={`text-[14px] ${tag.color}`} // Styling for tags (color from the tag object)
            >
              #{tag.name} {/* Display the tag name with a # */}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Exporting the ProjectCard component
export default ProjectCard;
