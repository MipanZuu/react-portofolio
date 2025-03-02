import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StoneModel() {
  const gltf = useGLTF("stone.gltf", true);
  const stoneRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const maxScale = 2; // Original scale
  const minScale = 1.5; // Smallest scale when fully scrolled down

  // Update the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFactor = Math.min(scrollTop / maxScroll, 1); // Normalize between 0 and 1
      setScrollY(scrollFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (stoneRef.current) {
      stoneRef.current.rotation.y += 0.0015; // Slow rotation
      stoneRef.current.scale.setScalar(maxScale - scrollY * (maxScale - minScale)); // Reduce scale based on scroll
    }
  });

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material = new THREE.MeshStandardMaterial({
        color: "gray",
        roughness: 0.6,
        metalness: 0.3,
      });
    }
  });

  return <primitive ref={stoneRef} object={gltf.scene} scale={[maxScale, maxScale, maxScale]} position={[0, 4, 0]} />;
}
