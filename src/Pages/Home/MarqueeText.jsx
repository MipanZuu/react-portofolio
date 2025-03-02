import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MarqueeText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50, // Moves text to the left infinitely
      repeat: -1, // Infinite loop
      duration: 10, // Speed of animation (adjust as needed)
      ease: "linear",
    });
  }, []);

  return (
    <div className="marquee-container backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl overflow-hidden w-full absolute bottom-0 py-4 text-white  bg-opacity-50">
      <div ref={marqueeRef} className="marquee-text flex whitespace-nowrap text-base sm:text-lg md:text-2xl lg:text-3xl font-pixel uppercase tracking-wide">
        <span className="px-6 sm:px-8 md:px-10 text-[#a0c4ff] drop-shadow-glow">Website Developer</span>
        <span className="px-6 sm:px-8 md:px-10 text-[#b9fbc0] drop-shadow-glow">Software Engineer</span>
        <span className="px-6 sm:px-8 md:px-10 text-[#ffc8dd] drop-shadow-glow">Creative Coder</span>
        <span className="px-6 sm:px-8 md:px-10 text-[#a0c4ff] drop-shadow-glow">Website Developer</span>
        <span className="px-6 sm:px-8 md:px-10 text-[#b9fbc0] drop-shadow-glow">Software Engineer</span>
        <span className="px-6 sm:px-8 md:px-10 text-[#ffc8dd] drop-shadow-glow">Creative Coder</span>
      </div>
    </div>
  );
};

export default MarqueeText;
