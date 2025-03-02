import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BakeShadows, ContactShadows } from "@react-three/drei";
import StoneModel from "./StoneModel";
import * as THREE from "three";

export default function StoneBackground() {
  return (
    <div className="fixed w-full h-full z-[-1] ">
      <Canvas
        shadows
        camera={{ position: [0, 40, 95], fov: 50 }}
        gl={{
          antialias: true,
          shadowMap: { type: THREE.PCFSoftShadowMap },
        }}
      >
        <Suspense fallback={null}>
          {/* General Ambient Light */}
          <ambientLight intensity={0.2} />

          {/* Spotlight */}
          <spotLight position={[0, 10, 5]} angle={0.8} penumbra={1} intensity={3} castShadow />

          {/* Directional Light */}
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {/* BakeShadows */}
          <BakeShadows />

          {/* Contact Shadows for a Soft Shadow Plane */}
          <ContactShadows
            position={[0, -1.5, 0]} // Below the model
            opacity={1}
            blur={2} // Blurred soft shadow
            width={20}
            height={20}
            resolution={1024}
            far={10}
          />

          {/* Load the 3D Model */}
          <StoneModel />

          {/* Ground Plane */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
