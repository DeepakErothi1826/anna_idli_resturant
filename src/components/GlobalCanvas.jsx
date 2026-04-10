import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PresentationControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Particles for floating mustard seeds & curry leaves
const Particles = ({ count = 50 }) => {
  const mesh = useRef();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const t = Math.random() * 100;
        const factor = 0.5 + Math.random();
        const speed = 0.1 + Math.random() / 2;
        const xFactor = -5 + Math.random() * 10;
        const yFactor = -5 + Math.random() * 10;
        const zFactor = -5 + Math.random() * 10;
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 20;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s * 0.1, s * 0.1, s * 0.1);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.8} />
    </instancedMesh>
  );
};

const ThatteIdli = ({ route }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const [spinFactor, setSpinFactor] = useState(0);

  useEffect(() => {
    const handleMenuChange = () => {
      setSpinFactor(prev => prev + Math.PI * 2);
    };
    window.addEventListener('menuFilterChange', handleMenuChange);
    return () => window.removeEventListener('menuFilterChange', handleMenuChange);
  }, []);

  // Calculate destination settings based on current route
  const getRouteVariants = (path) => {
    switch(path) {
      case '/':
        return { x: 4, y: 0, z: 0, scaleX: 1, scaleY: 1, scaleZ: 1, rotateX: 0, rotateY: 0, rotateZ: -0.2 };
      case '/menu':
        return { x: 6, y: 3, z: -5, scaleX: 0.5, scaleY: 0.5, scaleZ: 0.5, rotateX: 1, rotateY: 0.5, rotateZ: 0 };
      case '/about':
        return { x: -5, y: -2, z: -2, scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8, rotateX: -0.5, rotateY: -0.8, rotateZ: 0 };
      case '/contact':
        return { x: 0, y: 1, z: 2, scaleX: 0.6, scaleY: 1.5, scaleZ: 0.6, rotateX: 0.2, rotateY: Math.PI, rotateZ: 0 };
      default:
        return { x: 4, y: 0, z: 0, scaleX: 1, scaleY: 1, scaleZ: 1, rotateX: 0, rotateY: 0, rotateZ: 0 };
    }
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mx = state.pointer.x * 0.5;
    const my = state.pointer.y * 0.5;

    // Organic floating on the plate itself
    if (meshRef.current) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.cos(t / 4) / 8 + my, 0.05);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, (Math.sin(t / 4) / 8) + spinFactor + mx * 2, 0.05);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, (Math.sin(t / 1.5)) / 10 - my, 0.05);
    }

    // Dynamic global group shifting based on React Router config 
    if (groupRef.current) {
      const target = getRouteVariants(route);
      // Position lerp
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, target.x, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, target.y, 0.05);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, target.z, 0.05);
      
      // Rotation lerp
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, target.rotateX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, target.rotateY, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, target.rotateZ, 0.05);

      // Scale lerp
      groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, target.scaleX, 0.05);
      groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, target.scaleY, 0.05);
      groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, target.scaleZ, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} castShadow receiveShadow>
          {route === '/contact' ? (
             <cylinderGeometry args={[1, 0.8, 2, 64]} />
          ) : (
             <sphereGeometry args={[2, 64, 64]} />
          )}
          <meshStandardMaterial 
            color={route === '/contact' ? "#D4AF37" : "#FDF5E6"} 
            roughness={route === '/contact' ? 0.2 : 0.8} 
            metalness={route === '/contact' ? 0.8 : 0.1}
            bumpScale={0.02}
          />
        </mesh>
        
        {/* Plate / Saucer */}
        <mesh position={[0, route === '/contact' ? -1 : -2, 0]} receiveShadow>
          <cylinderGeometry args={[2.5, 2, 0.2, 64]} />
          <meshStandardMaterial color="#121D16" roughness={0.4} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
};

const GlobalCanvas = ({ location }) => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize={2048}
        color="#FDF5E6"
      />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
        enabled={location.pathname === '/'}
      >
        <ThatteIdli route={location.pathname} />
      </PresentationControls>

      <Particles count={60} />

      <Environment preset="city" />
    </Canvas>
  );
};

export default GlobalCanvas;
