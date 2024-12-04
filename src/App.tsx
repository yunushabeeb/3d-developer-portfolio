import { BrowserRouter } from 'react-router-dom';
// Importing BrowserRouter to enable routing functionality across the app.

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
// Importing reusable components from the components folder.

const App = () => {
  return (
    <BrowserRouter>
      {/* Wrapping the application with BrowserRouter to manage routing. */}
      <div className="relative z-0 bg-primary">
        {/* Main container with relative positioning and a background color (bg-primary). */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Section for the hero background with a custom pattern, covering the full section. */}
          <Navbar />
          {/* Navigation bar at the top of the page. */}
          <Hero />
          {/* Hero section to display a prominent introduction. */}
        </div>
        <About />
        {/* Section to describe personal or professional details. */}
        <Experience />
        {/* Section to showcase career milestones or work history. */}
        <Tech />
        {/* Section to display technologies and tools with a focus on 3D visuals. */}
        <Works />
        {/* Section to showcase projects or portfolio works. */}
        <Feedbacks />
        {/* Section to display testimonials or user feedback. */}
        <div className="relative z-0">
          {/* Sub-container with a new stacking context for proper z-index management. */}
          <Contact />
          {/* Contact form or contact details for visitors. */}
          <StarsCanvas />
          {/* Interactive 3D stars animation for visual appeal. */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
// Exporting the App component as the default export.
