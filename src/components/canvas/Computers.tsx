import { Suspense, useEffect, useState } from 'react'; // Importing necessary React hooks for state and effect management
import { Canvas } from '@react-three/fiber'; // Importing the Canvas component to set up the 3D scene
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Importing 3D utilities like OrbitControls, Preload, and useGLTF for handling 3D models

import CanvasLoader from '../Loader'; // Importing a custom loader component that will be shown while 3D objects are loading

// Computers component responsible for rendering the 3D model of a computer
const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf'); // Using useGLTF hook to load a 3D model (the desktop PC)

  return (
    <mesh>
      {/* Lighting for the 3D scene */}
      <hemisphereLight intensity={0.15} groundColor="black" />{' '}
      {/* Soft light from above */}
      <spotLight
        position={[-20, 50, 10]} // Positioning the spotlight
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow // Enabling shadow for the computer model
        shadow-mapSize={1024} // Shadow map size for better shadow resolution
      />
      <ambientLight intensity={0.1} /> {/* Ambient light to soften shadows */}
      <pointLight intensity={3} />{' '}
      {/* Additional point light for more illumination */}
      {/* The 3D model is displayed here, scaling and positioning based on the screen size */}
      <primitive
        object={computer.scene} // The actual 3D object
        scale={isMobile ? 0.7 : 0.75} // Adjusting the scale for mobile devices
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Adjusting position based on screen size
        rotation={[-0.01, -0.2, -0.1]} // Initial rotation of the model
      />
    </mesh>
  );
};

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
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component is mounted

  return (
    <Canvas
      frameloop="demand" // Render the canvas only when necessary (helps improve performance)
      shadows // Enable shadows for the scene
      dpr={[1, 2]} // Set the device pixel ratio for better rendering on high-DPI screens
      camera={{ position: [20, 3, 5], fov: 25 }} // Set the initial camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for image saving
    >
      <ambientLight intensity={5} />{' '}
      {/* General ambient light to brighten the scene */}
      {/* Suspense is used to lazy load the 3D model, showing the CanvasLoader while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allow for rotating and interacting with the 3D scene (disables zoom) */}
        <OrbitControls
          enableZoom={false} // Disable zoom functionality
          maxPolarAngle={Math.PI / 2} // Limit the camera's rotation on the vertical axis
          minPolarAngle={Math.PI / 2} // Ensure the camera is always at the same angle (fixed)
        />

        {/* Pass the 'isMobile' state to adjust the computer model based on screen size */}
        <Computers isMobile={isMobile} />
      </Suspense>
      {/* Preload all assets to ensure smooth rendering after initial load */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas; // Export the ComputersCanvas component for use in other parts of the app
