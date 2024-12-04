import { Suspense } from 'react'; // Import Suspense for lazy loading
import { Canvas } from '@react-three/fiber'; // Import Canvas to render 3D scene
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Import 3D utilities from react-three/drei (for controls, preloading, and loading GLTF models)

import CanvasLoader from '../Loader'; // Import a custom loader to be displayed while the 3D model is loading

// Earth component to render the 3D Earth model
const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf'); // Load the Earth model from the specified path using useGLTF hook

  return (
    <primitive
      object={earth.scene} // Pass the loaded Earth scene as a primitive object to the scene
      scale={2.5} // Scale the model by 2.5 times for better visibility
      position-y={0} // Position the Earth model along the y-axis (no vertical displacement)
      rotation-y={0} // Set initial rotation on the y-axis (no rotation)
    />
  );
};

// EarthCanvas component to set up the 3D canvas and controls
const EarthCanvas = () => {
  return (
    <Canvas
      shadows // Enable shadows for objects in the scene
      frameloop="demand" // Render the scene only when necessary to improve performance
      dpr={[1, 2]} // Set the device pixel ratio (for better resolution on high-DPI screens)
      gl={{ preserveDrawingBuffer: true }} // Ensure the drawing buffer is preserved for better export options (such as screenshots)
      camera={{
        fov: 45, // Set the field of view for the camera
        near: 0.1, // Set the near clipping plane distance (how close objects can be to the camera)
        far: 200, // Set the far clipping plane distance (how far objects can be from the camera)
        position: [-4, 3, 6], // Set the initial camera position in 3D space
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {' '}
        {/* Show the CanvasLoader component while the Earth model is being loaded */}
        {/* OrbitControls allow the user to interact with the scene by rotating, zooming, and panning */}
        <OrbitControls
          autoRotate // Enable automatic rotation of the camera around the Earth
          enableZoom={false} // Disable zoom functionality (fixed distance from Earth)
          maxPolarAngle={Math.PI / 2} // Limit the vertical rotation of the camera (up to 90 degrees)
          minPolarAngle={Math.PI / 2} // Keep the camera fixed at a horizontal view (prevent flipping)
        />
        <Earth /> {/* Render the Earth model within the scene */}
        <Preload all /> {/* Preload all assets to ensure smooth rendering */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; // Export EarthCanvas component for use in other parts of the application
