import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gsap from "gsap";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("Home");
  const storedTheme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState(
    storedTheme ? storedTheme === "dark" : true
  );

  const location = useLocation();

  // 🟢 Apply theme on mount
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const getIconForRoute = (route) => {
    switch (route.toLowerCase()) {
      case "home":
        return (
          <HomeOutlinedIcon className="text-green-400" fontSize="medium" />
        );
      case "about":
        return (
          <InfoOutlinedIcon className="text-green-400" fontSize="medium" />
        );
      case "technologies":
        return (
          <ComputerOutlinedIcon className="text-green-400" fontSize="medium" />
        );
      case "projects":
        return (
          <BookOutlinedIcon className="text-green-400" fontSize="medium" />
        );
      case "contact":
        return (
          <MailOutlineOutlinedIcon
            className="text-green-400"
            fontSize="medium"
          />
        );
      case "hiking":
        return (
          <TerrainOutlinedIcon className="text-green-400" fontSize="medium" />
        );
      default:
        return null; // Default behavior if no icon is found
    }
  };

  useEffect(() => {
    const route =
      location.pathname === "/" ? "Home" : location.pathname.slice(1);
    setCurrentRoute(route);

    // Collapse the Dynamic Island automatically
    setIsExpanded(false);
  }, [location]);

  // GSAP animations for smooth transitions
  useEffect(() => {
    if (isExpanded) {
      animateExpand();
    } else {
      animateCollapse();
    }
  }, [isExpanded]);

  // GSAP animations for smooth transitions
  const animateExpand = () => {
    const tl = gsap.timeline();

    // Border transition with GSAP
    tl.to(".dynamic-container", {
      borderColor: "rgba(255, 255, 255, 0.4)",
      boxShadow: "0px 0px 20px rgba(0, 255, 0, 0.3)", // subtle green shadow
      borderWidth: "3px",
      duration: 0.3,
      ease: "power3.inOut",
    });
    tl.to(".dynamic-container", {
      scale: isExpanded ? 1 : 0.95,
      opacity: isExpanded ? 1 : 0.8,
      duration: 0.3,
      ease: "power3.inOut",
    });

    // Stagger animation for menu links and social links
    tl.fromTo(
      ".dynamic-link",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, ease: "power3.out" }
    );
  };

  const animateCollapse = () => {
    gsap.to(".dynamic-container", {
      borderColor: "transparent",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      borderWidth: "1px",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      {/* Dynamic Island */}
      <div
        className={`relative bg-black text-white flex items-center justify-between shadow-lg px-4 dynamic-container transition-all duration-500 ease-in-out ${
          isExpanded
            ? "w-[200px] h-[200px] md:w-[600px] md:h-[200px] rounded-[40px] border-4 border-white"
            : "w-[180px] h-[50px] rounded-full border border-transparent"
        }`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logos.logogradient}
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
        </NavLink>

        {/* Bubble for Route */}
        {!isExpanded && (
          <div
            className={`bubble absolute right-[-80px] top-1/2 transform -translate-y-1/2 bg-black text-green-400 text-xs font-medium px-5 h-[50px] rounded-full shadow-2xl flex items-center justify-center transition-all duration-500`}
          >
            {getIconForRoute(currentRoute)}
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="absolute inset-0 bg-black text-white rounded-[40px] p-6 shadow-xl flex flex-col justify-center items-center">
            {/* Menu Links */}
            <ul className="flex flex-wrap justify-center md:justify-around w-full mb-4 gap-4 md:gap-6">
              {["Home", "About", "Technologies", "Projects", "Contact"].map(
                (page) => (
                  <li key={page} className="dynamic-link">
                    <NavLink
                      to={`/${page.toLowerCase()}`}
                      className="text-sm font-semibold hover:text-green-400 transition duration-300"
                      onClick={() => setIsExpanded(false)}
                    >
                      {page}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            {/* Divider */}
            <div className="w-full border-t border-gray-600"></div>

            {/* Social Links and Dark Mode */}
            <div className="flex flex-wrap justify-center gap-6 w-full mt-4 dynamic-link items-center">
              <a
                href={socialMediaUrl.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </a>

              {/* GitHub Icon */}
              <a
                href={socialMediaUrl.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </a>

              <button
                onClick={toggleTheme}
                className="h-8 w-8 md:h-10 md:w-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center"
              >
                {isDark ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
