import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const ThatteIdli = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Organic lerping motion for the idli
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.cos(t / 4) / 8, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, Math.sin(t / 4) / 8, 0.1);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -0.2 - (1 + Math.sin(t / 1.5)) / 20, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, (1 + Math.sin(t / 1.5)) / 10, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={[2.5, 0.6, 2.5]} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        {/* Soft, warm, steamed texture approximation */}
        <meshStandardMaterial 
          color="#fefae0" 
          roughness={0.8} 
          metalness={0.1}
          bumpScale={0.02}
        />
        
        {/* Podi/Ghee drizzle approximation using a second subtle mesh/decal could be added,
            but for a pristine look, we stick to the soft surface */}
      </mesh>
      
      {/* Plate */}
      <mesh position={[0, -1.2, 0]} scale={[3.2, 0.1, 3.2]} receiveShadow>
        <cylinderGeometry args={[1, 0.8, 1, 64]} />
        <meshStandardMaterial color="#222" roughness={0.4} metalness={0.8} />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 2, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize={2048}
      />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <ThatteIdli />
      </PresentationControls>

      <Environment preset="city" />
    </Canvas>
  );
};

export default Scene;
