"use client";

import { useRef, Suspense, useState, useEffect } from 'react';
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
  const [hasError, setHasError] = useState(false);
  
  // Load the GLB model with error handling
  let scene;
  try {
    const gltf = useGLTF('/logo.glb');
    scene = gltf.scene;
  } catch (error) {
    console.error('Error loading GLB model:', error);
    setHasError(true);
  }
  
  // Auto-rotate the model
  useFrame(() => {
    if (groupRef.current && autoRotate && !hasError) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  // If there's an error, return null to trigger fallback
  if (hasError || !scene) {
    return null;
  }

  return (
    <group ref={groupRef} scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

export default function Logo3D(props: Logo3DProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client side to avoid SSR issues
  if (!isClient) {
    return <Logo3DFallback className="w-full h-full" />;
  }

  return (
    <Suspense fallback={<Logo3DFallback className="w-full h-full" />}>
      <LogoModel {...props} />
    </Suspense>
  );
}

// Preload the model for better performance
if (typeof window !== 'undefined') {
  try {
    useGLTF.preload('/logo.glb');
  } catch (error) {
    console.error('Error preloading GLB model:', error);
  }
}
