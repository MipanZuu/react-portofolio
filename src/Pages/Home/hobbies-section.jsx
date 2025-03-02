import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sunset from "../../assets/photos/sunset.jpeg";
import arjuno from "../../assets/mountains/Arjuno.JPG";

gsap.registerPlugin(ScrollTrigger);

function HobbiesSection() {
  const hobbiesDenta = [
    {
      title: "Hiking & Outdoors",
      image: arjuno,
      description: "Exploring mountains, trails, and nature.",
      tags: ["ADVENTURE", "NATURE"],
      color: "backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl hover:shadow-gray-700/50 transition-shadow",
      link: "/hiking",
    },
    {
      title: "Tech & Programming",
      image: sunset,
      description: "Building software and solving problems.",
      tags: ["CODE", "TECH"],
      color: "backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl hover:shadow-gray-500/50 transition-shadow",
      link: "/tech",
    },
    {
      title: "Photography",
      image: sunset,
      description: "Capturing the world through a lens.",
      tags: ["PHOTOGRAPHY", "VISUAL"],
      color: "backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl shadow-lg hover:shadow-gray-400/50 transition-shadow",
      link: "/photography",
    },
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const randomPositions = useRef([]);
  const navigate = useNavigate();
  const [zoomed, setZoomed] = useState(false);

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

      card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.02, duration: 0.3 }));
      card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
    });
  }, []);

  const handleClick = (index, link) => {
    if (zoomed) return;
    setZoomed(true);

    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect(); // Get initial position

    // Set the card to fixed position with its current size
    gsap.set(card, {
      position: "fixed",
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      zIndex: 1000, // Ensure it's above everything
    });

    // Fade out other cards first
    gsap.to(
      cardsRef.current.filter((_, i) => i !== index),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Move and scale the clicked card smoothly to full screen (x=0, y=0)
    gsap.to(card, {
      x: -rect.left, // Move to the left to align to (0,0)
      y: -rect.top, // Move up to align to (0,0)
      rotate: 0, // Reset rotation
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      duration: 1, // Smooth transition duration
      ease: "power2.out",
      onComplete: () => {
        navigate(link);
      },
    });
  };

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center bg-transparent mx-auto">
      <div className="relative w-full max-w-[60vw] md:max-w-[50vw] h-[50vh] md:h-[70vh] flex items-center justify-center">
        {hobbiesDenta.map((hobby, index) => {
          const { x, y, rotate } = randomPositions.current[index];

          return (
            <div
              key={index}
              onClick={() => handleClick(index, hobby.link)}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`absolute w-full h-full shadow-xl rounded-[2rem] p-2 md:p-8 flex flex-col items-center justify-center text-center ${hobby.color}`}
              style={{
                zIndex: hobbiesDenta.length - index,
                transform: `rotate(${rotate}deg) translate(${x}px, ${y}px)`,
                transformStyle: "preserve-3d", // Enables the 3D effect for flipping
                boxShadow: "10px 10px 30px rgba(0,0,0,0.15)", // Adds a realistic depth effect
              }}
            >
              {/* IMAGE */}
              <div className="w-[95%] h-[70%] md:w-[90%] md:h-[70%] overflow-hidden rounded-lg shadow-md">
                <img src={hobby.image} alt={hobby.title} className="w-full h-full object-cover" />
              </div>

              {/* TITLE - Uses a Modern Font */}
              <h2 className="font-chrusty text-3xl md:text-6xl font-extrabold font-sans text-gray-900 dark:text-white mt-2">{hobby.title}</h2>

              {/* TAGS */}
              <div className="flex gap-2 mt-2">
                {hobby.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-900 dark:bg-gray-700 text-white px-2 md:px-3 py-1 text-xs md:text-sm rounded">
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
