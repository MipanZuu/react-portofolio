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

  const secondWaveRef = useRef();
  const photographyRef = useRef();

  const photoRefs = useRef([]);
  const topGridRef = useRef();
  const bottomGridRef = useRef();

  const thirdPageRef = useRef();
  const thirdWaveRef = useRef();
  const travelingRef = useRef();
  const wrapperRef = useRef(null);

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

        // travelingRef.current.forEach((index) => {
        //   gsap.fromTo(
        //     index,
        //     { opacity: 0, y: 50 },
        //     {
        //       opacity: 1,
        //       y: 0,
        //       duration: 1,
        //       delay: index * 0.1,
        //       scrollTrigger: {
        //         trigger: index,
        //         start: "top 100%",
        //         end: "top 80%",
        //         scrub: true,
        //       },
        //     }
        //   );
        // });

        gsap.to(thirdWaveRef.current, {
          borderTopLeftRadius: "0%",
          borderTopRightRadius: "0%",
          height: "80px",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: travelingRef.current, // Correct trigger
            start: "top 100%",
            end: "top 15%",
            scrub: true,
          },
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
      gsap.to(secondWaveRef.current, {
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
        height: "80px",
        scrollTrigger: {
          trigger: photographyRef.current,
          start: "top 100%",
          end: "top 50%",
          scrub: true,
        },
      });

      // Wave between Section 2 and 3
      gsap.to(thirdWaveRef.current, {
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
        height: "80px",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: travelingRef.current,
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
  }, [greetings.length]);

  useEffect(() => {
    gsap.fromTo(
      greetingRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [currentGreeting]);

  useEffect(() => {
    const cards = gsap.utils.toArray(".travel-card");

    // Pin the section and enable horizontal scrolling
    const pinTrigger = ScrollTrigger.create({
      trigger: travelingRef.current,
      start: "top top",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1, // Prevent flickering/glitches
      end: () => `+=${wrapperRef.current.offsetWidth}`, // Total scroll length
      scrub: 1,
    });

    // Horizontal Scroll Animation
    const horizontalScroll = gsap.fromTo(
      cards,
      { xPercent: 50 }, // Start position
      {
        xPercent: -100 * (cards.length - 1), // Scroll through all cards
        ease: "none",
        scrollTrigger: {
          trigger: travelingRef.current,
          start: "top top",
          end: () => `+=${wrapperRef.current.offsetWidth}`,
          scrub: 1, // Smooth scrolling without snapping
        },
      }
    );

    // Cleanup ScrollTriggers to prevent duplication
    return () => {
      pinTrigger.kill();
      horizontalScroll.kill();
      ScrollTrigger.refresh();
    };
  }, []);

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

      {/* Wave Transition */}
      <div
        ref={waveRef}
        className="relative w-full h-[300px] bg-gray-100 dark:bg-dark-mode2 border-t-2 border-t-blue-700"
        style={{
          borderTopLeftRadius: "50% 200px",
          borderTopRightRadius: "50% 200px",
        }}
      ></div>

      {/* Second Section */}
      <section
        ref={secondPageRef}
        className="min-h-screen bg-gray-100 dark:bg-dark-mode2 flex flex-col items-center justify-center text-center px-5"
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

      {/* Photography Section */}
      <section
        ref={photographyRef}
        className="min-h-screen flex flex-col items-center justify-center py-24 pb-[200px]"
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

      <section
        ref={travelingRef}
        className="min-h-screen flex flex-col items-center justify-center py-24 bg-gray-100 dark:bg-dark-mode2"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Traveling Section
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
          Explore new places and enjoy amazing journeys!
        </p>

        {/* Horizontal Scroll Wrapper */}
        <div
          ref={wrapperRef}
          className="flex space-x-6 md:space-x-10 min-h-[60vh] items-center overflow-hidden py-10"
        >
          {/* Card 1 */}
          <div className="travel-card flex-shrink-0 w-[90%] md:w-[80%] lg:w-[60%] h-full flex flex-col md:flex-row bg-gray-800 text-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.1)] border-2 border-gray-700">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6 text-orange-500">
                CONSISTENT <br /> FROM CONCEPT <br /> TO LAUNCH
              </h1>
              <p className="text-sm md:text-lg font-semibold text-gray-300">
                As both a designer and a developer, I bridge the gap between
                these two fields.
              </p>
              <p className="text-xs md:text-sm mt-2 text-gray-400">
                This ensures your vision is realized exactly as you imagined it,
                without compromises or misunderstandings.
              </p>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-inner">
              <div className="w-4/5 h-32 md:h-48 lg:h-64 flex items-center justify-center bg-gray-900 rounded-lg border border-gray-600">
                <span className="text-gray-400 font-bold text-sm md:text-lg lg:text-2xl">
                  Image Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="travel-card flex-shrink-0 w-[90%] md:w-[80%] lg:w-[60%] h-full flex flex-col md:flex-row bg-gray-800 text-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.1)] border-2 border-gray-700">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6 text-green-400">
                RELAX AND <br /> ENJOY THE <br /> BEACHES
              </h1>
              <p className="text-sm md:text-lg font-semibold text-gray-300">
                Discover pristine sands, clear waters, and ultimate relaxation.
              </p>
              <p className="text-xs md:text-sm mt-2 text-gray-400">
                Find peace under the sun and enjoy the calming waves of the
                beach.
              </p>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-inner">
              <div className="w-4/5 h-32 md:h-48 lg:h-64 flex items-center justify-center bg-gray-900 rounded-lg border border-gray-600">
                <span className="text-gray-400 font-bold text-sm md:text-lg lg:text-2xl">
                  Image Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="travel-card flex-shrink-0 w-[90%] md:w-[80%] lg:w-[60%] h-full flex flex-col md:flex-row bg-gray-800 text-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.1)] border-2 border-gray-700">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6 text-red-400">
                CONQUER <br /> THE BEAUTIFUL <br /> MOUNTAINS
              </h1>
              <p className="text-sm md:text-lg font-semibold text-gray-300">
                Experience breathtaking views and unforgettable hikes.
              </p>
              <p className="text-xs md:text-sm mt-2 text-gray-400">
                Climb to the peaks and witness nature in its raw and pure form.
              </p>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-inner">
              <div className="w-4/5 h-32 md:h-48 lg:h-64 flex items-center justify-center bg-gray-900 rounded-lg border border-gray-600">
                <span className="text-gray-400 font-bold text-sm md:text-lg lg:text-2xl">
                  Image Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="travel-card flex-shrink-0 w-[90%] md:w-[80%] lg:w-[60%] h-full flex flex-col md:flex-row bg-gray-800 text-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.1)] border-2 border-gray-700">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6 text-purple-400">
                EXPLORE <br /> THE VIBRANT <br /> CITIES
              </h1>
              <p className="text-sm md:text-lg font-semibold text-gray-300">
                Discover bustling streets, lights, and endless possibilities.
              </p>
              <p className="text-xs md:text-sm mt-2 text-gray-400">
                Experience the energy, culture, and beauty of city life.
              </p>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-inner">
              <div className="w-4/5 h-32 md:h-48 lg:h-64 flex items-center justify-center bg-gray-900 rounded-lg border border-gray-600">
                <span className="text-gray-400 font-bold text-sm md:text-lg lg:text-2xl">
                  Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white">
          test
        </h2>
      </section>
    </main>
  );
}

export default Home;
