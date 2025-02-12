import React, { useRef, useEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";
import { useGLTF, BakeShadows, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import HobbiesSection from "./hobbies-section";
import TravelingSection from "./traveling-section";

function StoneModel() {
  const gltf = useGLTF("stone.gltf", true);
  const stoneRef = useRef();

  useFrame(() => {
    if (stoneRef.current) {
      stoneRef.current.rotation.y += 0.0015;
    }
  });

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true; // Allow the model to cast shadows
      child.receiveShadow = true; // Allow it to receive light shadows
      child.material = new THREE.MeshStandardMaterial({
        color: "gray",
        roughness: 0.6,
        metalness: 0.3,
      });
    }
  });

  return (
    <primitive
      ref={stoneRef}
      object={gltf.scene}
      scale={2}
      position={[0, 4, 0]}
    />
  );
}

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { name, tagline, img } = personalDetails;
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const greetingRef = useRef();
  const topSectionRef = useRef();

  const greetings = [
    { word: "Hello", gradient: "bg-gradient-to-r from-blue-400 to-indigo-600" },
    {
      word: "Hola",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      word: "Bonjour",
      gradient: "bg-gradient-to-r from-green-400 to-teal-500",
    },
    { word: "Ciao", gradient: "bg-gradient-to-r from-red-400 to-pink-500" },
    {
      word: "こんにちは",
      gradient: "bg-gradient-to-r from-pink-400 to-purple-500",
    },
    {
      word: "안녕하세요",
      gradient: "bg-gradient-to-r from-purple-400 to-indigo-500",
    },
    { word: "Olá", gradient: "bg-gradient-to-r from-orange-400 to-yellow-500" },
    { word: "Hallo", gradient: "bg-gradient-to-r from-teal-400 to-blue-500" },
    {
      word: "Привет",
      gradient: "bg-gradient-to-r from-indigo-400 to-purple-600",
    },
    { word: "नमस्ते", gradient: "bg-gradient-to-r from-amber-400 to-red-500" },
    {
      word: "Salam",
      gradient: "bg-gradient-to-r from-green-400 to-emerald-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => {
      clearInterval(interval); // Cleanup interval
    };
  }, [greetings.length]);

  useEffect(() => {
    gsap.fromTo(
      greetingRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [currentGreeting]);

  return (
    <main className="overflow-hidden">
      {/* First Section */}
      <section
        ref={topSectionRef}
        className="relative flex flex-col items-center justify-center min-h-screen text-center text-gray-900 dark:text-white"
      >
        <div className="absolute z-10 flex flex-col items-center justify-center top-[40%] transform -translate-y-1/2">
          {/* Glow Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -top-20 left-20 w-72 h-72 bg-blue-400 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-400 rounded-full opacity-30 blur-2xl"></div>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-6xl font-bold relative">
            <span
              ref={greetingRef}
              className={`pb-5 inline-block bg-clip-text text-transparent ${greetings[currentGreeting].gradient}`}
            >
              {greetings[currentGreeting].word}
            </span>
            <br />
            My Name is{" "}
            <span className="text-4xl md:text-6xl bg-clip-text bg-gradient text-transparent md:text-5xl font-bold">
              {name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl mt-2 text-gray-200 relative">
            {tagline}
          </h2>
          <img
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mt-5 shadow-2xl relative"
            src={img}
            alt="Profile"
          />
        </div>
        <div className="absolute w-full h-full">
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
              <spotLight
                position={[0, 10, 5]}
                angle={0.8}
                penumbra={1}
                intensity={3}
                castShadow
              />

              {/* Directional Light */}
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />

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
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1.5, 0]}
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.3} />
              </mesh>
            </Suspense>
          </Canvas>
        </div>
      </section>

      {/* Second Section */}
      <HobbiesSection />
      <TravelingSection />

      <section className="h-screen">test</section>
    </main>
  );
}

export default Home;
