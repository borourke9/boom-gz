"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Logo3D from './Logo3D';

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
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
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
