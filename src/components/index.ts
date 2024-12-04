// Importing the necessary components for the portfolio
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from './canvas'; // Specialized canvas components
import Hero from './Hero'; // Hero section component (typically the introduction)
import Navbar from './Navbar'; // Navigation bar component
import About from './About'; // About section component (likely includes personal details)
import Tech from './Tech'; // Technology showcase component
import Experience from './Experience'; // Work experience section component
import Works from './Works'; // Portfolio or project showcase section
import Feedbacks from './Feedbacks'; // Testimonials section component
import Contact from './Contact'; // Contact section component for user inquiries

// Exporting all the components and canvas elements together for easy use in other parts of the app
export {
  Hero, // Hero section (landing page introduction)
  Navbar, // Navbar for navigation across sections
  About, // About section (personal introduction)
  Tech, // Tech stack or skills showcase
  Experience, // Work experience in a timeline or card format
  Works, // Projects or works showcase
  Feedbacks, // Testimonials from clients or colleagues
  Contact, // Contact form or section for reaching out

  // Exporting specialized canvas elements for interactive graphics
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};
