import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Chess from './worlds/chess';

const CanvasExemple = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>

<Canvas>
        <ambientLight intensity={3.5} />
        <directionalLight position={[5, 1, 1]} />
        <Chess />
        <OrbitControls />
      </Canvas>
      {/* <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        shadows
      >
        <color attach="background" args={['#f0f0f0']} />
        <Chess />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas> */}
    </div>
  );
};

export default CanvasExemple;
