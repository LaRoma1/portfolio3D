import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

const ChessModel = () => {
  const { scene } = useGLTF('/assets/models/chess_set_4k.gltf');// Charger le modèle
  // Ce code retourne un élément 3D primitif qui:
  // - utilise la scène 3D chargée depuis le fichier GLTF comme objet
  // - applique une échelle de 1.5x à l'objet
  // - positionne l'objet aux coordonnées [0,1,0] (centré horizontalement, 1 unité en hauteur)
  return <primitive object={scene} scale={2.5} position={[0, 1, 0]} />;
};

const Chess = () => {
  return (
    <ChessModel />
    // <Suspense fallback={null}>
    //   <ambientLight intensity={1.5} />
    //   <directionalLight position={[10, 10, 5]} intensity={2} />
    //   <ChessModel />
    // </Suspense>
  );
};

export default Chess;

// Précharger le modèle pour une meilleure performance
useGLTF.preload('/assets/models/chess_set_4k.gltf');
