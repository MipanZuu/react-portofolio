import React, { useRef, useEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";
import sunset from "../assets/photos/sunset.jpeg";
import ParallaxTilt from "react-parallax-tilt";
import { useGLTF, BakeShadows, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

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
  const { name, tagline, img, hobbies } = personalDetails;
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const greetingRef = useRef();
  const topSectionRef = useRef();
  const waveRef = useRef();

  const secondPageRef = useRef();
  const hobbiesRefs = useRef([]);

  const thirdWaveRef = useRef();
  const photographyRef = useRef();

  const photoRefs = useRef([]);
  const topGridRef = useRef();
  const bottomGridRef = useRef();

  const photos = [
    { src: sunset, alt: "Sunset Image" },
    { src: sunset, alt: "Sunset asds" },
    { src: sunset, alt: "Sunset Image" },
    { src: sunset, alt: "Sunset Image" },
    { src: sunset, alt: "Sunset Image" },
    { src: sunset, alt: "Sunset Image" },
    { src: sunset, alt: "Sunset Image" },
    { src: sunset, alt: "Sunset Image" },
  ];

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

    // GSAP animations
    const ctx = gsap.context(() => {
      // Top Section Fade Out on Scroll
      gsap.to(topSectionRef.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: waveRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      // Wave Animation - Flatten on Scroll
      gsap.to(waveRef.current, {
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
        height: "80px",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: secondPageRef.current,
          start: "top 100%",
          end: "top 15%",
          scrub: true,
        },
      });

      // Animate Hobbies as you scroll
      hobbiesRefs.current.forEach((hobby, index) => {
        gsap.fromTo(
          hobby,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: hobby,
              start: "top 100%",
              end: "top 80%",
              scrub: true,
            },
          }
        );
        photoRefs.current.forEach((photo, index) => {
          gsap.fromTo(
            photo,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: photo,
                start: "top 90%",
                end: "top 80%",
                scrub: true,
              },
            }
          );
        });
        gsap.fromTo(
          topGridRef.current,
          { x: "20%" },
          {
            x: "-10%",
            scrollTrigger: {
              trigger: photographyRef.current,
              start: "top 100%",
              end: "center 0%",
              scrub: true,
            },
          }
        );

        // Bottom Grid Animation: Left to Center
        gsap.fromTo(
          bottomGridRef.current,
          { x: "-20%" },
          {
            x: "10%",
            scrollTrigger: {
              trigger: photographyRef.current,
              start: "top 100%",
              end: "center 0%",
              scrub: true,
            },
          }
        );
      });

      // Wave between Section 2 and 3
      gsap.to(thirdWaveRef.current, {
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
        height: "80px",
        scrollTrigger: {
          trigger: photographyRef.current,
          start: "top 100%",
          end: "top 15%",
          scrub: true,
        },
      });
    });

    return () => {
      clearInterval(interval); // Cleanup interval
      ctx.revert(); // Cleanup GSAP
    };
  }, []);

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
          <h1 className="text-4xl md:text-6xl font-bold">
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
          <h2 className="text-2xl md:text-4xl mt-2">{tagline}</h2>
          <img
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mt-5 shadow-lg"
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

      {/* Wave Transition */}
      <div
        ref={waveRef}
        className="relative w-full h-[300px] bg-gray-100 dark:bg-gray-900"
        style={{
          borderTopLeftRadius: "50% 200px",
          borderTopRightRadius: "50% 200px",
        }}
      ></div>

      {/* Second Section */}
      <section
        ref={secondPageRef}
        className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center text-center px-5"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white">
          My Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              ref={(el) => (hobbiesRefs.current[index] = el)}
              className="p-6 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg rounded-lg transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer"
              onClick={() => alert(`You clicked on ${hobby}!`)} // Click Action
            >
              <h3 className="text-2xl font-semibold transition-all duration-300">
                {hobby}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <div
        ref={thirdWaveRef}
        className="relative w-full h-[500px] bg-gray-100 dark:bg-gray-900"
        style={{
          borderBottomLeftRadius: "50% 200px",
          borderBottomRightRadius: "50% 200px",
        }}
      ></div>

      {/* Photography Section */}
      <section
        ref={photographyRef}
        className="min-h-screen flex flex-col items-center justify-center py-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white">
          My Photography Gallery
        </h2>
        <div
          ref={topGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 mb-10"
        >
          {photos.slice(0, 4).map((photo, index) => (
            <ParallaxTilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1500}
            >
              <div className="relative group overflow-hidden rounded-lg shadow-xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 kenburns"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:clip-path-circle">
                  <p className="text-white font-semibold text-lg">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </ParallaxTilt>
          ))}
        </div>

        {/* Bottom Grid - Moves Left to Right */}
        <div
          ref={bottomGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32"
        >
          {photos.slice(4).map((photo, index) => (
            <ParallaxTilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1500}
            >
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 kenburns"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:clip-path-circle">
                  <p className="text-white font-semibold text-lg">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </ParallaxTilt>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
