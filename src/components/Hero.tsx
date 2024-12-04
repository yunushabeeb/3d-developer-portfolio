import { motion } from 'framer-motion'; // Importing motion for animation
import { styles } from '../styles'; // Importing styles for layout and theming
import { ComputersCanvas } from './canvas'; // Importing the ComputersCanvas component for 3D animation

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* The main container section, taking up full width and screen height */}

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* This container is for the left-side content. It is positioned absolute to stay fixed in the section */}

        <div className="flex flex-col justify-center items-center mt-5">
          {/* A column that contains a circle and a vertical line, used for decorative purposes */}

          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          {/* Small circle with the color `#915EFF` (violet) */}

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          {/* A vertical line with a gradient effect, different height for mobile (h-40) and larger screens (h-80) */}
        </div>

        <div>
          {/* This section contains the heading and subtext */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yunus</span>
          </h1>
          {/* Main heading with a greeting and your name */}

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          {/* Subheading introducing your skills with responsive line break */}
        </div>
      </div>

      <ComputersCanvas />
      {/* This component renders the 3D computer scene */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* This container holds the scrolling down indicator, positioned at the bottom */}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* The clickable scroll-down indicator */}

            <motion.div
              animate={{
                y: [0, 24, 0], // Vertical bouncing animation
              }}
              transition={{
                duration: 1.5, // The duration of each animation cycle
                repeat: Infinity, // The animation repeats infinitely
                repeatType: 'loop', // The animation repeats in a loop
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            {/* The animated bouncing dot inside the scroll-down indicator */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
