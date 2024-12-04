import { Suspense } from 'react'; // Importing Suspense for lazy loading the Ball component
import { Canvas } from '@react-three/fiber'; // Importing the Canvas component to set up the 3D scene
import { OrbitControls, Preload } from '@react-three/drei'; // Importing OrbitControls for camera movement and Preload for preloading assets

import CanvasLoader from '../Loader'; // Importing a custom loader component that shows while the canvas is loading
import Ball from '../Ball'; // Importing the Ball component which will be displayed in the 3D scene

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop="demand" // Setting the frame loop to "demand" to ensure rendering only happens when necessary
      dpr={[1, 2]} // Defining the device pixel ratio for better rendering on high-DPI screens
      gl={{ preserveDrawingBuffer: true }} // Configuring WebGL to preserve the drawing buffer, which is useful for saving images/screenshots
    >
      {/* Suspense is used to lazily load the Ball component, showing a loader until it is ready */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls enables camera movement with mouse interaction (no zoom in this case) */}
        <OrbitControls enableZoom={false} />

        {/* Ball component receives the icon URL and displays it as a 3D object */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload all assets to ensure smooth rendering and loading */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
