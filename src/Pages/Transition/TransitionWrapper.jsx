import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function TransitionWrapper({ children, pageName, onComplete }) {
  const containerRef = useRef();
  const overlayRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete, // Trigger after animation completes
      });

      // Full-screen entry transition
      tl.set(overlayRef.current, { y: "100%" }) // Start off-screen
        .to(overlayRef.current, {
          y: "0%",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        )
        .to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          delay: 0.5, // Pause before slide out
          ease: "power3.in",
        })
        .to(overlayRef.current, {
          y: "-100%", // Slide up
          duration: 0.6,
          ease: "power2.inOut",
        });

      // Content fade-in
      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5" // Overlap with slide-out animation
      );
    });

    // Cleanup GSAP animations
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <>
      {/* Full-Screen Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black text-white flex items-center justify-center z-50"
      >
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold uppercase tracking-wider"
        >
          {pageName}
        </h1>
      </div>

      {/* Page Content */}
      <div ref={containerRef} className="transition-wrapper">
        {children}
      </div>
    </>
  );
}

export default TransitionWrapper;
