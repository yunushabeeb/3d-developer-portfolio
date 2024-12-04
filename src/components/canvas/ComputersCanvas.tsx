import { Suspense, useEffect, useState } from 'react'; // Importing necessary React hooks for state and effect management
import { Canvas } from '@react-three/fiber'; // Importing the Canvas component to set up the 3D scene
import { OrbitControls, Preload } from '@react-three/drei'; // Importing 3D utilities like OrbitControls and Preload for handling 3D models

import CanvasLoader from '../Loader'; // Importing a custom loader component that will be shown while 3D objects are loading
import Computers from './Computers';

// ComputersCanvas component responsible for the overall 3D scene and responsiveness
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track whether the screen is mobile-sized

  useEffect(() => {
    // Add a listener to check if the screen size matches the mobile condition (width < 500px)
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches); // Set the initial state based on current screen size

    // Function to handle changes in screen size
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches); // Update the state when the screen size changes
    };

    // Adding event listener for media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      // window.removeEventListener('load', handlePageLoad);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component is mounted

  // if (!isLoading) {
  return (
    <>
      <Canvas
        frameloop="demand" // Render the canvas only when necessary (helps improve performance)
        shadows // Enable shadows for the scene
        dpr={[1, 2]} // Set the device pixel ratio for better rendering on high-DPI screens
        camera={{ position: [20, 3, 5], fov: 25 }} // Set the initial camera position and field of view
        gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for image saving
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* General ambient light to brighten the scene */}
          {/* Suspense is used to lazy load the 3D model, showing the CanvasLoader while loading */}
          <ambientLight intensity={5} />
          {/* OrbitControls allow for rotating and interacting with the 3D scene (disables zoom) */}
          <OrbitControls
            enableZoom={false} // Disable zoom functionality
            maxPolarAngle={Math.PI / 2} // Limit the camera's rotation on the vertical axis
            minPolarAngle={Math.PI / 2} // Ensure the camera is always at the same angle (fixed)
          />

          {/* Pass the 'isMobile' state to adjust the computer model based on screen size */}
          <Computers isMobile={isMobile} />
          {/* Preload all assets to ensure smooth rendering after initial load */}
          <Preload all />
        </Suspense>
      </Canvas>
    </>
  );
};
// };

export default ComputersCanvas; // Export the ComputersCanvas component for use in other parts of the app
