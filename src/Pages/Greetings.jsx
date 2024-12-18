import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Scroll up with rounded edges, scaling, and fade-out
        gsap.to(containerRef.current, {
          yPercent: -100, // Moves the container up
          borderRadius: "50%", // Adds rounded corners
          scale: 0.8, // Slightly shrinks the container
          opacity: 0, // Fades out the container
          duration: 0.6, // Faster scroll-up animation
          ease: "power2.inOut",
          onComplete: onComplete, // Trigger parent callback
        });
      },
    });

    // Animate greetings faster with your specified durations
    greetings.forEach((_, index) => {
      tl.to(greetingRefs.current[index], {
        opacity: 1,
        duration: 0.09, // Fast fade-in
        y: 0,
        ease: "power3.out",
      }).to(
        greetingRefs.current[index],
        {
          opacity: 0,
          duration: 0.08, // Fast fade-out
          delay: 0.08, // Short delay between transitions
        },
        "+=0.08" // Fast stagger effect
      );
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black text-white flex items-center justify-center overflow-hidden z-50"
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
    </div>
  );
}

export default Greetings;
