import React, {  useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const ChessModel = () => {
  const { scene } = useGLTF('/assets/models/chess_set_4k.gltf');// Charger le modèle
  const chessRef = useRef<THREE.Group>(null); // Référence au modèle
  const [rotate, setRotate] = useState(true); // État pour activer/désactiver la rotation
 // Animation de rotation
 useFrame((_, delta) => {
  if (rotate && chessRef.current) {
    chessRef.current.rotation.y += delta * 2.5; // Tourne sur l'axe Y
  }
});
  // Ce code retourne un élément 3D primitif qui:
  // - utilise la scène 3D chargée depuis le fichier GLTF comme objet
  // - applique une échelle de 1.5x à l'objet
  // - positionne l'objet aux coordonnées [0,1,0] (centré horizontalement, 1 unité en hauteur)
  return (
    <primitive
      object={scene}
      ref={chessRef}
      scale={1.5}
      position={[0, 1, 0]}
      onClick={() => setRotate(!rotate)} // Clique pour stopper/redémarrer
    />
  );};

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
