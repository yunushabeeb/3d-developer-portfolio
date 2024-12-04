// Importing necessary components from @react-three/drei and @react-three/fiber
import { Decal, Float, useTexture } from '@react-three/drei';

// Ball component that renders a 3D object with a decal (image) texture
const Ball = (props: { imgUrl: string }) => {
  // Loading the texture for the decal from the imgUrl prop
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component to make the ball float and animate with defined speed, rotation, and intensity
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient light to softly light the scene */}
      <ambientLight intensity={0.25} />

      {/* Directional light positioned slightly off the origin */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* Mesh for the ball with shadows, set to a scale of 2.75 */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Icosahedron geometry to give the ball a spherical shape */}
        <icosahedronGeometry args={[1, 1]} />

        {/* Standard material for the ball with flat shading and polygon offset */}
        <meshStandardMaterial
          color="#fff8eb" // Setting the color of the ball
          polygonOffset // Enabling polygon offset to prevent z-fighting
          polygonOffsetFactor={-5} // Adjusting the offset factor
          flatShading={true} // Enabling flat shading for a more geometric look
        />

        {/* Decal component to apply an image texture (decal) on the surface of the ball */}
        <Decal
          position={[0, 0, 1]} // Positioning the decal slightly above the surface
          rotation={[2 * Math.PI, 0, 6.25]} // Rotating the decal for alignment
          scale={1} // Keeping the decal scale as 1
          map={decal} // Applying the loaded texture as the decal map
        />
      </mesh>
    </Float>
  );
};

// Exporting the Ball component as the default export
export default Ball;
