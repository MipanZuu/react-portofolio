import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

function Greetings({ onComplete }) {
  const greetings = [
    "Hello",
    "Halo",
    "Bonjour",
    "Hola",
    "こんにちは",
    "안녕하세요",
    "Привет",
    "你好",
    "नमस्ते",
    "Salam",
  ];

  const greetingRefs = useRef([]);
  const containerRef = useRef();
  const loadingBarRef = useRef();
  const [progress, setProgress] = useState(0);
  const location = useLocation(); // Get current path

  // Function to extract & format the page title from the path
  const getPageTitle = (pathname) => {
    if (pathname === "/") return "Home";
    return pathname.replace("/", "").replace("-", " ").replace(/^\w/, (c) => c.toUpperCase());
  };

  const pageTitle = getPageTitle(location.pathname); // Get formatted title

  useEffect(() => {
    const totalGreetings = greetings.length;
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          borderRadius: "50%",
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      },
    });

    greetings.forEach((_, index) => {
      tl.to(greetingRefs.current[index], {
        opacity: 1,
        duration: 0.09,
        y: 0,
        ease: "power3.out",
        onStart: () => {
          setProgress(Math.round(((index + 1) / totalGreetings) * 100));
        },
      }).to(
        greetingRefs.current[index],
        {
          opacity: 0,
          duration: 0.08,
          delay: 0.08,
        },
        "+=0.08"
      );
    });

    gsap.to(loadingBarRef.current, {
      width: "100%",
      duration: totalGreetings * 0.25,
      ease: "linear",
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center overflow-hidden z-50"
    >
      {greetings.map((greeting, index) => (
        <h1
          key={index}
          ref={(el) => (greetingRefs.current[index] = el)}
          className="absolute text-4xl md:text-6xl font-bold opacity-0 translate-y-10"
        >
          {greeting}
        </h1>
      ))}

      {/* Progress Bar Section */}
      <div className="absolute bottom-10 w-full px-10 flex items-center justify-between text-gray-400 text-sm">
        <span className="text-2xl md:text-3xl font-semibold">{progress}%</span>
        <span className="text-2xl md:text-3xl font-semibold">({pageTitle})</span>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-6 w-3/4 md:w-2/3 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div ref={loadingBarRef} className="h-full bg-red-500 w-0"></div>
      </div>
    </div>
  );
}

export default Greetings;