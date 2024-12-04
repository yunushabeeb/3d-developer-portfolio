import { BallCanvas } from './canvas'; // Importing the BallCanvas component to display each technology icon as a canvas element
import { SectionWrapper } from '../hoc'; // Importing the SectionWrapper higher-order component (HOC) to wrap the section for additional styling or functionality
import { technologies } from '../constants'; // Importing the list of technologies from a constants file

const Tech = () => {
  return (
    // A flex container to arrange technology icons in a responsive, centered layout with gaps between them
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Iterating over the technologies array to render each technology */}
      {technologies.map((technology) => (
        // For each technology, a div is created that holds the BallCanvas with the technology icon
        <div className="w-28 h-28" key={technology.name}>
          {/* Rendering the BallCanvas component with the technology's icon */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// Wrapping the Tech component with SectionWrapper HOC to add section-specific styling or features
export default SectionWrapper(Tech, '');
