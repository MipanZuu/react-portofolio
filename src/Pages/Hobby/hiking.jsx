import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sunset from "../../assets/photos/sunset.jpeg"; // Replace with actual hiking image
import arjuno from "../../assets/mountains/Arjuno.JPG";
import ArjunoCloud from "../../assets/mountains/ArjunoCloud.jpg";
import arjunofriends from "../../assets/mountains/ArjunoFriends.jpg";
import summit from "../../assets/mountains/Summit.jpg";
import bromo from "../../assets/mountains/bromo.JPG";
import bromo1 from "../../assets/mountains/bromo1.JPG";
import bromo2 from "../../assets/mountains/bromo2.JPG";

const hikingExperiences = [
  {
    title: "Mount Arjuno, East Java",
    tags: ["3339", "MOUNTAINS", "EAST JAVA"],
    image: arjuno,
    year: "2019",
    description: "A breathtaking adventure above the clouds in East Java.",
    bgColor: "#B3D8A8",
    story: [
      {
        subtitle: "A Journey Above the Clouds",
        text: "In 2019, I embarked on an unforgettable adventure to Mount Arjuno, a majestic peak towering at 3,339 meters above sea level in East Java, Indonesia. The journey began before sunrise, as the misty air carried the whispers of the forest.",
        image: ArjunoCloud,
      },
      {
        subtitle: "The Ascent - A Test of Strength and Spirit",
        text: "The climb was demanding but breathtaking—dense forests, steep trails, and the crisp mountain air pushing me forward. Each step revealed new landscapes, from ancient pine trees to rocky terrains that echoed the stories of past explorers.",
        image: arjunofriends,
      },
      {
        subtitle: "Reaching the Summit - A View Worth Every Step",
        text: "After hours of trekking, the summit was finally within reach. As the first rays of sunlight broke through the horizon, I stood above the clouds, gazing at the sea of mist below. The sense of accomplishment was overwhelming, a reminder of nature's grandeur and our place within it.",
        image: summit,
      },
    ],
  },
  {
    title: "Mount Bromo, East Java",
    tags: ["ADVENTURE", "SUNRISE", "VOLCANIC", "MULTIPLE VISITS"],
    image: bromo,
    year: "2014, 2016, 2018, 2022", // Multiple visits
    description:
      "A mesmerizing sunrise trek through volcanic landscapes, spanning multiple unforgettable journeys.",
    bgColor: "#D9D2C0",
    story: [
      {
        subtitle: "First Encounter - Discovering the Beauty of Bromo (2014)",
        text: "In 2014, I set foot on the iconic sands of Mount Bromo for the first time. The vast sea of sand, the towering caldera, and the sight of horses carrying travelers felt surreal. Standing on the crater’s edge, I felt the power of nature, an unforgettable introduction to this mystical volcano.",
        image: bromo,
      },
      {
        subtitle: "Chasing the Perfect Sunrise - A Return to Bromo (2016)",
        text: "The call of Bromo brought me back in 2016, this time with a mission: to witness its legendary sunrise. The cold wind bit through my jacket as I stood at Penanjakan Viewpoint, waiting. Then, as the sun broke the horizon, it painted the sky in breathtaking shades of gold and pink, leaving me in awe.",
        image: bromo1,
      },
      {
        subtitle: "Beyond the Crater - Exploring the Hidden Treasures (2022)",
        text: "Returning in 2022, I wanted to go beyond just the crater. This time, I trekked deeper, reaching the lesser-known green savanna behind Bromo. The contrast between the lush greenery and the barren volcanic landscape was stunning, a reminder of the hidden beauty waiting to be discovered.",
        image: bromo2,
      },
    ],
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
        height: index === 0 ? "210rem" : "18rem", // First one is expanded
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
            height: "200rem", // Ensure full content is shown
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
            <h2 className="font-chrusty mt-10 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {exp.title}
            </h2>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-900 mt-2">
              {expandedIndex === index ? exp.description : "VIEW PROJECT"}
            </p>

            {/* EXPANDED CONTENT - SAME LAYOUT AS BEFORE */}
            {expandedIndex === index && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col bg-[#F7F2EC] dark:bg-dark-mode text-black px-6 md:px-12 py-12">
                {/* HEADER SECTION */}
                <header className="w-full flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    — {exp.year}
                  </h1>
                </header>

                {/* MAIN CONTENT */}
                <div className="flex flex-col items-center justify-center mt-8">
                  {/* TITLE */}
                  <h2 className="font-chrusty text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white">
                    {exp.title}
                  </h2>

                  {/* IMAGE CONTAINER */}
                  <div className="relative w-full h-[50rem] mt-8 flex items-center justify-center">
                    {/* Soft Glowing Effect */}
                    <div className="absolute inset-0 w-full h-full blur-3xl bg-[#6B7280] opacity-40 rounded-lg animate-pulse"></div>

                    {/* IMAGE CONTAINER */}
                    <div
                      ref={imageRef}
                      className="relative w-full h-full overflow-hidden rounded-lg shadow-[0_0_60px_rgba(107,114,128,0.4)]"
                    >
                      <img
                        src={exp.image}
                        alt="Hiking & Outdoors"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-6 flex gap-2 justify-center">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* EXPERIENCE STORY */}
                <div className="mt-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
                  {exp.story.map((section, i) => (
                    <section key={i} className="mb-12">
                      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        {section.subtitle}
                      </h3>
                      <p>{section.text}</p>
                      {/* IMAGE BREAK */}
                      {section.image && (
                        <div className="relative w-full max-w-4xl h-[400px] my-8 mx-auto overflow-hidden rounded-lg shadow-md">
                          <img
                            src={section.image}
                            alt={section.subtitle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </section>
                  ))}
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
