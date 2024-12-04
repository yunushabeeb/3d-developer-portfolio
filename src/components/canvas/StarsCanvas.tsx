import { Suspense } from 'react'; // Import Suspense for lazy loading of the 3D scene
import { Canvas } from '@react-three/fiber'; // Import Canvas to render the 3D scene
import { Preload } from '@react-three/drei'; // Import Preload to ensure assets are preloaded
import Stars from '../Stars'; // Import the Stars component that will generate the starry background

// StarsCanvas component to set up the 3D canvas with stars
const StarsCanvas = () => {
  return (
    // Set up the div container for the canvas, making it fullscreen and placed behind other content
    <div className="w-full h-screen absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Suspense to handle lazy loading of the Stars component */}
        <Suspense fallback={null}>
          <Stars /> {/* Render the Stars component within the scene */}
        </Suspense>
        {/* Preload all assets before rendering the scene */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas; // Export StarsCanvas component for use in other parts of the application
