import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails, workDetails, eduDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  const timelineRef = useRef([]);

  useEffect(() => {
    timelineRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative max-w-5xl mx-auto pt-20 pb-20">
      <section className="relative mx-auto pt-20 pb-20 px-6">
        <div className="relative bg-opacity-50 backdrop-blur-lg p-8 rounded-lg border border-gray-700 shadow-lg shadow-cyan-500/30 hover:shadow-blue-500/50 transition-all duration-500">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center tracking-wide">
            About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 leading-relaxed text-center">{personalDetails.about}</p>
        </div>
      </section>

      {/* Central Timeline Line (Circuit Effect) */}
      <div className="absolute left-1/2 w-1 bg-gray-400 dark:bg-gray-500 transform -translate-x-1/2 top-[57rem] md:top-[47rem] bottom-[12.5rem] z-0"></div>

      {/* Work Experience Section */}
      <div className="relative w-full flex justify-center items-center my-16">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 animate-pulse opacity-70"></div>
        <div className="relative z-10 px-6 py-3 backdrop-blur-lg bg-opacity-50 rounded-lg border border-cyan-400 shadow-xl shadow-cyan-400/50">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white tracking-wide uppercase">
            <span className="text-cyan-600 dark:text-cyan-400 font-pixel">Work Experience</span>
          </h2>
        </div>
      </div>

      {workDetails.map((job, index) => (
        <div key={index} ref={(el) => (timelineRef.current[index] = el)} className={`relative flex items-center w-full mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-lg border-4 border-gray-900 dark:border-gray-600"></div>
          <div className={`w-1/2 p-6 rounded-lg border border-gray-700 backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl ${index % 2 === 0 ? "text-left" : "text-right"}`}>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{job.Position}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {job.Company} • {job.Location}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{job.Duration}</p>
            <span className={`inline-block mt-3 px-3 py-1 text-xs font-semibold text-gray-900 dark:text-black ${job.Type === "Internship" ? "bg-green-300" : job.Type === "Freelance" ? "bg-blue-300" : "bg-gray-500"} rounded-full`}>
              {job.Type}
            </span>
          </div>
        </div>
      ))}

      {/* Education Section */}
      <div className="relative w-full flex justify-center items-center my-16">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 animate-pulse opacity-70"></div>
        <div className="relative z-10 px-6 py-3 backdrop-blur-lg bg-opacity-50 rounded-lg border border-purple-400 shadow-xl shadow-purple-400/50">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white tracking-wide uppercase">
            <span className="text-purple-600 dark:text-purple-400 font-pixel">Education</span>
          </h2>
        </div>
      </div>

      {eduDetails.map((edu, index) => (
        <div key={index} ref={(el) => (timelineRef.current[index + workDetails.length] = el)} className={`relative flex items-center w-full mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          <div className="z-10 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full shadow-lg border-4 border-gray-900 dark:border-gray-600"></div>
          <div className={`w-1/2 p-6 rounded-lg border border-gray-700 backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl drop-shadow-xl ${index % 2 === 0 ? "text-left" : "text-right"}`}>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{edu.Position}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {edu.Company} • {edu.Location}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{edu.Duration}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Timeline;
