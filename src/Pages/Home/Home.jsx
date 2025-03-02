import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../../Details";
import HobbiesSection from "./hobbies-section";
import TravelingSection from "./traveling-section";
import MarqueeText from "./MarqueeText";
import ScrambleText from "./ScrambleText";
import { Helmet } from "react-helmet-async";

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
    gsap.fromTo(greetingRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
  }, [currentGreeting]);

  return (
    <main className="overflow-hidden bg-transparent custom-cursor">
      <Helmet>
        <title>Denta Bramasta Hidayat - Fullstack Developer</title>
        <meta name="description" content="Welcome to my portfolio! I am a fullstack developer specializing in modern web technologies, UI/UX, and performance optimization." />
        <meta name="keywords" content="Denta Bramasta Hidayat, fullstack developer, software engineer, frontend, backend, JavaScript, React, Next.js, Node.js, Tailwind CSS, UI/UX" />
        <meta property="og:title" content="Denta Bramasta Hidayat - Fullstack Developer" />
        <meta property="og:description" content="Explore my projects and skills in frontend, backend, and web development." />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.jpg" />
        <meta property="og:url" content="https://dentabramasta.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* First Section */}
      <section ref={topSectionRef} className="relative flex flex-col items-center justify-center min-h-screen text-center text-gray-900 dark:text-white">
        <div className="absolute z-10 flex flex-col items-center justify-center top-[40%] transform -translate-y-1/2">
          {/* Content */}
          <h1 className="text-4xl md:text-6xl font-bold relative">
            <span ref={greetingRef} className={`pb-5 inline-block bg-clip-text text-transparent ${greetings[currentGreeting].gradient}`}>
              {greetings[currentGreeting].word}
            </span>
            <br />
          </h1>
          <span className="text-4xl md:text-6xl bg-clip-text md:text-5xl font-pixel py-14">{name}</span>

          <h2 className="text-2xl md:text-4xl mt-2 text-gray-200 relative">{tagline}</h2>
          {/* <img className="w-32 h-32 md:w-48 md:h-48 rounded-full mt-5 shadow-2xl relative" src={img} alt="Profile" /> */}
        </div>
        <div
  className="absolute bottom-32 right-10 border border-gray-700 backdrop-blur-lg bg-white/10 dark:bg-black/20 
  shadow-xl drop-shadow-2xl rounded-lg p-4 text-gray-300 dark:text-gray-200 text-xs md:text-sm tracking-wide 
  opacity-80 flex items-end justify-center min-w-[200px] max-w-xs transition-all duration-500
  transform perspective-1000 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1"
>
  <p className="text-center leading-relaxed">
    <ScrambleText text="Mzyy" /> is the in-game username of <ScrambleText text="Denta Bramasta Hidayat," /> inspired by <ScrambleText text="Mipanzu" /> during the COVID era.
  </p>
</div>

        <MarqueeText />
      </section>

      {/* Second Section */}
      <HobbiesSection />
      <TravelingSection />
    </main>
  );
}

export default Home;
