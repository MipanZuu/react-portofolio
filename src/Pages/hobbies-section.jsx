import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sunset from "../assets/photos/sunset.jpeg";

gsap.registerPlugin(ScrollTrigger);

function HobbiesSection() {
  const hobbiesDenta = [
    {
      title: "Guitar & Music",
      image: sunset,
      tags: ["MUSIC", "ART"],
      color: "bg-[#3D8D7A] dark:bg-[#27374D] shadow-gray-800/40",
    },
    {
      title: "Hiking & Outdoors",
      image: sunset,
      tags: ["ADVENTURE", "NATURE"],
      color: "bg-[#B3D8A8] dark:bg-[#526D82] shadow-gray-700/40",
    },
    {
      title: "Tech & Programming",
      image: sunset,
      tags: ["CODE", "TECH"],
      color: "bg-[#FBFFE4] dark:bg-[#9DB2BF] shadow-gray-600/40",
    },
    {
      title: "Photography",
      image: sunset,
      tags: ["PHOTOGRAPHY", "VISUAL"],
      color: "bg-[#A3D1C6] dark:bg-[#DDE6ED] shadow-gray-500/40",
    },
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const randomPositions = useRef([]);

  // Function to generate a random number once
  const getRandom = (min, max) => Math.random() * (max - min) + min;

  // Generate random positions once
  if (randomPositions.current.length === 0) {
    randomPositions.current = hobbiesDenta.map(() => ({
      x: getRandom(-20, 20), // Slight shift left or right
      y: getRandom(-10, 10), // Slight shift up or down
      rotate: getRandom(-5, 5), // Small random rotation
    }));
  }

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * hobbiesDenta.length}`,
        scrub: true,
        pin: true,
      },
    });

    hobbiesDenta.forEach((_, index) => {
      tl.to(
        cardsRef.current[index],
        {
          x: -window.innerWidth, // Move fully off-screen to the left
          rotateY: 180,
          rotateZ: 10,
          boxShadow: "0px 10px 30px rgba(255,255,255,0.2)",
          rotate: -15, // Slight rotation for realism
          duration: 5, // Smooth effect
          ease: "power2.out", // Smooth acceleration
        },
        `+=0.5`
      );
    });

    // Add hover effect with GSAP
    cardsRef.current.forEach((card) => {
      gsap.set(card, { scale: 1 }); // Ensure initial scale is 1
      gsap
        .to(card, {
          scale: 1.05, // Slight scale up when hovered
          duration: 0.3, // Smooth grow effect
          ease: "power1.out",
          paused: true,
        })
        .eventCallback("onReverseComplete", () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
        });

      card.addEventListener("mouseenter", () =>
        gsap.to(card, { scale: 1.02, duration: 0.3 })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, { scale: 1, duration: 0.3 })
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-[#F7F2EC] dark:bg-dark-mode mx-auto"
    >
      <div className="relative w-full max-w-[60vw] md:max-w-[50vw] h-[50vh] md:h-[70vh] flex items-center justify-center">
        {hobbiesDenta.map((hobby, index) => {
          const { x, y, rotate } = randomPositions.current[index];

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`absolute w-full h-full shadow-xl rounded-xl p-2 md:p-8 flex flex-col items-center justify-center text-center ${hobby.color}`}
              style={{
                zIndex: hobbiesDenta.length - index,
                transform: `rotate(${rotate}deg) translate(${x}px, ${y}px)`,
                transformStyle: "preserve-3d", // Enables the 3D effect for flipping
                boxShadow: "10px 10px 30px rgba(0,0,0,0.15)", // Adds a realistic depth effect
              }}
            >
              {/* IMAGE */}
              <div className="w-[95%] h-[70%] md:w-[90%] md:h-[70%] overflow-hidden rounded-lg shadow-md">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE - Uses a Modern Font */}
              <h2 className="text-3xl md:text-6xl font-extrabold font-sans text-gray-900 dark:text-white mt-2">
                {hobby.title}
              </h2>

              {/* TAGS */}
              <div className="flex gap-2 mt-2">
                {hobby.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-900 dark:bg-gray-700 text-white px-2 md:px-3 py-1 text-xs md:text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HobbiesSection;
