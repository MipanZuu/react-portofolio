import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TravelingSection() {
  const travelingRef = useRef();
  const wrapperRef = useRef(null);

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
      { xPercent: 200 }, // Start position
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
      <section ref={travelingRef} className="min-h-screen no-scrollbar flex flex-col items-center justify-center py-12 md:py-24">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-center text-gray-900 dark:text-white">Traveling Section</h2>
        <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-10">Explore new places and enjoy amazing journeys!</p>

        {/* Scrollable Cards Container */}
        <div ref={wrapperRef} className="flex space-x-4 md:space-x-10 min-h-[50vh] md:min-h-[60vh] w-max items-center  py-10 px-6 md:px-0">
          {[
            {
              title: "CONSISTENT FROM CONCEPT TO LAUNCH",
              color: "text-orange-500",
            },
            { title: "RELAX AND ENJOY THE BEACHES", color: "text-green-400" },
            { title: "CONQUER THE BEAUTIFUL MOUNTAINS", color: "text-red-400" },
            { title: "EXPLORE THE VIBRANT CITIES", color: "text-purple-400" },
          ].map((card, index) => (
            <div
              key={index}
              className="travel-card flex-shrink-0 w-[95vw] sm:w-[85vw] md:w-[70vw] lg:w-[55vw] h-auto flex flex-col md:flex-row text-white rounded-3xl backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl border-4 border-gray-900 dark:border-gray-600 p-6 md:p-10"
            >
              {/* Left Column: Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 ${card.color}`}>{card.title}</h1>
                <p className="text-sm md:text-lg font-semibold text-gray-300">Experience breathtaking views and unforgettable hikes.</p>
                <p className="text-xs md:text-sm mt-2 text-gray-400">Climb to the peaks and witness nature in its raw and pure form.</p>
              </div>

              {/* Right Column: Placeholder Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-4/5 h-32 sm:h-40 md:h-48 lg:h-64 flex items-center justify-center bg-gray-900 rounded-lg border border-gray-600">
                  <span className="text-gray-400 font-bold text-sm sm:text-lg lg:text-2xl">Image Placeholder</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TravelingSection;
