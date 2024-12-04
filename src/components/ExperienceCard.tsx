import { VerticalTimelineElement } from 'react-vertical-timeline-component'; // Importing VerticalTimelineElement for rendering each timeline item

// Define the ExperienceCard component, which takes an experience object as a prop
const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <VerticalTimelineElement
      // Styling the content box of the timeline element
      contentStyle={{
        background: '#1d1836', // Dark background for the content box
        color: '#fff', // White text color
      }}
      // Styling the arrow that points to the timeline
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date} // Date of the experience, passed as a prop
      iconStyle={{ background: experience.iconBg }} // Icon background color, passed from the experience data
      // The icon that appears on the left side of the timeline element
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon} // The icon image URL
            alt={experience.company_name} // Alt text for the icon image
            className="w-[60%] h-[60%] object-contain" // Styling for the icon image to fit inside the circle
          />
        </div>
      }
    >
      {/* Content of the timeline entry */}
      <div>
        {/* The title of the experience (e.g., job title) */}
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {/* The company name */}
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }} // Remove margin from the company name
        >
          {experience.company_name}
        </p>
      </div>

      {/* List of bullet points describing the responsibilities or achievements */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          // Loop through the points and render each one as a list item
          <li
            key={`experience-point-${index}`} // Unique key for each list item
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point} {/* Each point of experience */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Exporting the component to be used in other parts of the application
export default ExperienceCard;
