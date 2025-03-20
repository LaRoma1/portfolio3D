import React from 'react';
import { Canvas } from '@react-three/fiber';
import {   OrbitControls } from '@react-three/drei';
const Box = () => (
    <mesh >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
const CanvasExemple = () => {
  return (
    <div style={{ height: '100vh', width:'200vh' }}>
      <Canvas >
        {/* La scène 3D */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={14} />
        {/* Les objets 3D */}
        <Box  />
        <mesh position={[2, 4, -5]}>
          <boxGeometry args={[2, 7, 2]} />
          <meshStandardMaterial color="green"  />
        </mesh>
        <mesh position={[2, 4, 5]}>
          <boxGeometry args={[2, 7, 2]} />
          <meshStandardMaterial color="green"  />
        </mesh>
        {/* Les contrôles de la caméra */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default CanvasExemple;
