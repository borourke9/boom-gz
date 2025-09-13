"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Logo3D from './Logo3D';
import { useState, useEffect } from 'react';

interface Logo3DCanvasProps {
  className?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  rotationSpeed?: number;
  enableControls?: boolean;
  enableEnvironment?: boolean;
}

export default function Logo3DCanvas({
  className = "w-full h-full",
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  rotationSpeed = 0.01,
  enableControls = false,
  enableEnvironment = true
}: Logo3DCanvasProps) {
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Error boundary for Canvas
  const handleCanvasError = (error: Error) => {
    console.error('Canvas error:', error);
    setHasError(true);
  };

  // Only render on client side to avoid SSR issues
  if (!isClient) {
    return (
      <div className={className}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-6xl">N</span>
            </div>
            <p className="text-gray-600 text-lg font-medium">NexGen Sites</p>
          </div>
        </div>
      </div>
    );
  }

  // If there's an error, show fallback
  if (hasError) {
    return (
      <div className={className}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-6xl">N</span>
            </div>
            <p className="text-gray-600 text-lg font-medium">NexGen Sites</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
        onError={handleCanvasError}
      >
        {enableEnvironment && <Environment preset="studio" />}
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        <Logo3D
          scale={scale}
          position={position}
          rotation={rotation}
          autoRotate={autoRotate}
          rotationSpeed={rotationSpeed}
        />
        
        {enableControls && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}
