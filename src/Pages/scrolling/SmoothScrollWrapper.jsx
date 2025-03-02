import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Feels more natural (0.6 may feel choppy)
      easing: (t) => 1 - Math.pow(1 - t, 4), // Prevents janky movements
      smoothWheel: true,
      smoothTouch: true, // Enable smooth touch scroll for mobile
      touchMultiplier: 2, // Increases touch scroll speed
      direction: "vertical",
      gestureOrientation: "vertical",
      infinite: false, // Prevents glitches
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup when unmounting
  }, []);

  return <>{children}</>;
}

export default SmoothScrollWrapper;