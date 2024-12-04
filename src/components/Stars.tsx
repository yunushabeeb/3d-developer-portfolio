import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

// The Stars component creates a rotating field of stars using Three.js and React Three Fiber
const Stars = (props: JSX.IntrinsicElements['group']) => {
  // useRef to reference the Points mesh, which contains the stars
  const ref = useRef<THREE.Points>(null);

  // useState to generate random star positions within a spherical space
  // 'random.inSphere' generates random positions in 3D space within a defined radius
  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
  );

  // useFrame allows for continuous updates to the scene
  // Here we rotate the star field around the X and Y axes for animation
  useFrame((_, delta) => {
    if (ref.current) {
      // Adjust the rotation speed based on time (delta)
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    // The group is positioned with a rotation along the Z-axis
    // It can be customized with props passed down from parent components
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      {/* Points component to render the stars */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        {/* PointMaterial defines the appearance of each star */}
        <PointMaterial
          transparent // Allows the stars to be semi-transparent
          color="#f272c8" // Set the star color
          size={0.002} // Set the size of each star
          sizeAttenuation={true} // Ensures the size of stars appears to shrink with distance
          depthWrite={false} // Disable writing to the depth buffer for transparency effects
        />
      </Points>
    </group>
  );
};

export default Stars;
