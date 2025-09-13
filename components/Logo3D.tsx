"use client";

import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import Logo3DFallback from './Logo3DFallback';

interface Logo3DProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  rotationSpeed?: number;
}

function LogoModel({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], autoRotate = true, rotationSpeed = 0.01 }: Logo3DProps) {
  const groupRef = useRef<Group>(null);
  
  // Load the GLB model
  const { scene } = useGLTF('/logo.glb');
  
  // Auto-rotate the model
  useFrame(() => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

export default function Logo3D(props: Logo3DProps) {
  return (
    <Suspense fallback={<Logo3DFallback className="w-full h-full" />}>
      <LogoModel {...props} />
    </Suspense>
  );
}

// Preload the model for better performance
useGLTF.preload('/logo.glb');
