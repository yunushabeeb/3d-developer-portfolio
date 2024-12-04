import { useGLTF } from '@react-three/drei'; // Importing useGLTF for handling 3D models

// Computers component responsible for rendering the 3D model of a computer
const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf'); // Using useGLTF hook to load a 3D model (the desktop PC)

  return (
    <mesh>
      {/* Lighting for the 3D scene */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* Soft light from above */}
      <spotLight
        position={[-20, 50, 10]} // Positioning the spotlight
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow // Enabling shadow for the computer model
        shadow-mapSize={1024} // Shadow map size for better shadow resolution
      />
      <pointLight intensity={3} />
      <ambientLight intensity={0.1} />
      {/* Ambient light to soften shadows */}
      {/* Additional point light for more illumination */}
      {/* The 3D model is displayed here, scaling and positioning based on the screen size */}
      <primitive
        object={computer.scene} // The actual 3D object
        scale={isMobile ? 0.65 : 0.75} // Adjusting the scale for mobile devices
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Adjusting position based on screen size
        rotation={[-0.01, -0.2, -0.1]} // Initial rotation of the model
      />
    </mesh>
  );
};

export default Computers;
