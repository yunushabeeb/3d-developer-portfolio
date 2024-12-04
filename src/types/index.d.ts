declare interface ExperienceProps {
  title: string; // Job title or role
  company_name: string; // Name of the company
  icon: string; // Icon representing the company or role
  iconBg: string; // Background color for the icon
  date: string; // Date or duration of the experience
  points: string[]; // Key points or responsibilities related to the role
}

declare interface ProjectCardProps {
  index: number; // Index or position of the project
  name: string; // Name of the project
  description: string; // Description of the project
  tags: {
    name: string; // Tag name (e.g., technology used)
    color: string; // Color associated with the tag
  }[]; // Array of tags associated with the project
  image: string; // Image associated with the project
  source_code_link: string; // Link to the source code or repository
}

declare interface ServiceCardProps {
  index: number; // Index or position of the service card
  title: string; // Title or name of the service
  icon: string; // Icon representing the service
}

declare interface FeedbackCardProps {
  index: number; // Index or position of the feedback card
  testimonial: string; // Testimonial or feedback content
  name: string; // Name of the person giving the feedback
  designation: string; // Designation of the person giving the feedback
  company: string; // Company where the person giving the feedback works
  image: string; // Image of the person giving the feedback
}
