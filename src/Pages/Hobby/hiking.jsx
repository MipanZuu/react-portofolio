import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sunset from "../../assets/photos/sunset.jpeg"; // Replace with actual hiking image

const hikingExperiences = [
  {
    title: "Mount Arjuno, East Java",
    year: "2019",
    description: "A breathtaking adventure above the clouds in East Java.",
    bgColor: "#B3D8A8",
  },
  {
    title: "Mount Bromo, East Java",
    year: "2020",
    description: "A mesmerizing sunrise trek through volcanic landscapes.",
    bgColor: "#D9D2C0",
  },
  {
    title: "The Kotaverse",
    year: "2021",
    description: "Exploring digital frontiers and immersive technology.",
    bgColor: "#F39FC2",
  },
  {
    title: "BROED",
    year: "2022",
    description: "A dynamic journey through art, culture, and expression.",
    bgColor: "#F0785A",
  },
];

function HikingPage() {
  const imageRef = useRef(null);
  const sectionsRef = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(0); // Always expand first card

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.set(section, {
        y: index * -60, // Stack the cards dynamically
        height: index === 0 ? "170rem" : "18rem", // First one is expanded
        zIndex: hikingExperiences.length - index,
      });
    });
  }, []);

  //   const handleClick = (index) => {
  //     if (expandedIndex === index) return; // Prevent clicking the same one again

  //     setExpandedIndex(index);

  //     let yOffset = -60; // Track the vertical position shift

  //     sectionsRef.current.forEach((section, idx) => {
  //       if (idx < index) {
  //         // Sections ABOVE the clicked one should remain at their position
  //         gsap.to(section, {
  //           y: idx * -60,
  //           height: "18rem",
  //           duration: 0.8,
  //           ease: "power2.out",
  //         });
  //       } else if (idx === index) {
  //         // EXPAND clicked section
  //         gsap.to(section, {
  //           height: "170rem",
  //           y: yOffset,
  //           duration: 0.8,
  //           ease: "power2.out",
  //           onComplete: () => {
  //             section.scrollIntoView({ behavior: "smooth", block: "start" }); // Auto-scroll to the section
  //           },
  //         });

  //         section.style.zIndex = hikingExperiences.length + 10; // Bring to top
  //       } else {
  //         // PUSH SECTIONS BELOW DOWN
  //         yOffset += -60; // Adjust spacing for better layout
  //         gsap.to(section, {
  //           y: yOffset,
  //           height: "18rem",
  //           duration: 0.8,
  //           ease: "power2.out",
  //         });
  //       }
  //     });
  //   };

  const handleClick = (index) => {
    if (expandedIndex === index) return; // Prevent clicking the same one again

    const previousIndex = expandedIndex;
    setExpandedIndex(index);

    requestAnimationFrame(() => {
      let yOffset = -20; // Initial spacing shift

      sectionsRef.current.forEach((section, idx) => {
        if (idx === index) {
          // Expand clicked section and ensure full visibility
          gsap.to(section, {
            height: "170rem", // Ensure full content is shown
            y: yOffset,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              section.scrollIntoView({ behavior: "smooth", block: "start" }); // Auto-scroll
            },
          });
        } else if (idx < index) {
          // Keep previous sections at their position
          gsap.to(section, {
            y: idx * -20,
            height: "18rem",
            duration: 0.1,
            ease: "power2.out",
          });
        } else {
          // Shift sections below down properly
          yOffset += -20; // Increase offset to prevent overlap
          gsap.to(section, {
            y: yOffset,
            height: "18rem",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });

      // Collapse previously expanded section
      if (previousIndex !== null) {
        gsap.to(sectionsRef.current[previousIndex], {
          height: "18rem",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    });
  };

  const handleHover = (index, isHovering) => {
    if (expandedIndex !== index) {
      gsap.to(sectionsRef.current[index], {
        height: isHovering ? "20rem" : "18rem", // Increase height by 5vh on hover
        boxShadow: isHovering
          ? "0px 8px 20px rgba(255, 255, 255, 0.5), 0px 0px 40px rgba(255, 255, 255, 0.8)" // Glow effect on hover
          : "0px 4px 15px rgba(0, 0, 0, 0.6)", // Normal shadow when idle
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  return (
    <>
      <div className="relative w-full h-full dark:bg-dark-mode overflow-hidden flex flex-col">
        {hikingExperiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="relative w-full h-[6vh] md:h-[10vh] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            style={{
              backgroundColor: exp.bgColor,
              zIndex: hikingExperiences.length - index,
            }}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            onClick={() => handleClick(index)}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {exp.title}
            </h2>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-2">
              {expandedIndex === index ? exp.description : "VIEW PROJECT"}
            </p>

            {/* EXPANDED CONTENT - SAME LAYOUT AS BEFORE */}
            {expandedIndex === index && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col bg-[#F7F2EC] dark:bg-dark-mode text-black px-6 md:px-12 py-12">
                {/* HEADER SECTION */}
                <header className="w-full flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    WORK — 2024
                  </h1>
                </header>

                {/* MAIN CONTENT */}
                <div className="flex flex-col items-center justify-center mt-8">
                  {/* TITLE */}
                  <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white">
                    {exp.title}
                  </h2>

                  {/* IMAGE CONTAINER */}
                  <div
                    ref={imageRef}
                    className="relative w-full w-full h-[50rem] mt-8 overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={sunset}
                      alt="Hiking & Outdoors"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-6 flex gap-2 justify-center">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 text-sm rounded">
                    ADVENTURE
                  </span>
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 text-sm rounded">
                    MOUNTAINS
                  </span>
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 text-sm rounded">
                    EAST JAVA
                  </span>
                </div>

                {/* EXPERIENCE STORY */}
                <div className="mt-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
                  <section className="mb-12">
                    <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
                      A Journey Above the Clouds
                    </h3>
                    <p>
                      In 2019, I embarked on an unforgettable adventure to
                      **Mount Arjuno**, a majestic peak towering at 3,339 meters
                      above sea level in East Java, Indonesia. The journey began
                      before sunrise, as the misty air carried the whispers of
                      the forest.
                    </p>
                  </section>
                  {/* IMAGE BREAK (Placeholder) */}
                  <div className="relative w-full max-w-4xl h-[300px] my-8 mx-auto overflow-hidden rounded-lg shadow-md">
                    <img
                      src="https://via.placeholder.com/800x500" // Replace with your actual image
                      alt="Sunrise from Mount Arjuno"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    The Ascent A Test of Strength and Spirit
                  </h3>
                  <p>
                    The climb was demanding but breathtaking—dense forests,
                    steep trails, and the crisp mountain air pushing me forward.
                    Each step revealed new landscapes, from ancient pine trees
                    to rocky terrains that echoed the stories of past explorers.
                  </p>
                  <div className="relative w-full max-w-4xl h-[300px] my-8 mx-auto overflow-hidden rounded-lg shadow-md">
                    <img
                      src="https://via.placeholder.com/800x500" // Replace with your actual image
                      alt="Hiking Trail on Arjuno"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Reaching the Summit - A View Worth Every Step
                  </h3>
                  <p>
                    After hours of trekking, the summit was finally within
                    reach. As the first rays of sunlight broke through the
                    horizon, I stood **above the clouds**, gazing at the sea of
                    mist below. The sense of accomplishment was overwhelming, a
                    reminder of nature's grandeur and our place within it.
                  </p>
                  {/* LAST IMAGE BREAK (Placeholder) */}
                  <div className="relative w-full max-w-4xl h-[300px] my-8 mx-auto overflow-hidden rounded-lg shadow-md">
                    <img
                      src="https://via.placeholder.com/800x500" // Replace with your actual image
                      alt="Summit of Mount Arjuno"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default HikingPage;
