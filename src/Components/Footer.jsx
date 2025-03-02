import React, { useState, useEffect } from "react";

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        document.body.style.paddingBottom = "15rem";
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`fixed z-20 bottom-0 left-0 w-full shadow-md transition-all duration-500 ease-in-out ${isExpanded ? "h-60 py-6" : "h-8 py-2"}`}>
      <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between items-center transition-all">
        {/* Small Footer (Always Visible) */}
        <p className={`text-xs md:text-sm text-center text-gray-700 dark:text-gray-300 w-full ${isExpanded ? "hidden" : "block"}`}>
          © {new Date().getFullYear()} | <span className="text-gradient font-medium">Mzyy</span>
        </p>

        {/* Expanded Content (Only appears when scrolled to bottom) */}
        {isExpanded && (
          <div className="rounded-lg w-full backdrop-blur-lg bg-black/20 shadow-xl drop-shadow-xl px-6 md:px-12 py-8 border-t border-gray-700 text-gray-500 dark:text-gray-400 text-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
              {/* Left: Contact Info */}
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-300 dark:text-white font-semibold">Get in touch</p>
                <p className="mt-1 hover:text-white transition-all duration-300">
                  <a href="mailto:denta.dent29@gmail.com">denta.dent29@gmail.com</a>
                </p>
                <p className="mt-1 hover:text-white transition-all duration-300">+31 123 456 789</p>
              </div>

              {/* Center: Location */}
              <div className="text-center hidden md:block">
                <p className="text-gray-300 dark:text-white font-semibold">Location</p>
                <p className="mt-1">Eindhoven, Netherlands</p>
              </div>

              {/* Right: Social Links with Icons */}
              <div className="text-center md:text-right">
                <p className="text-gray-300 dark:text-white font-semibold">Connect</p>
                <div className="flex space-x-4 mt-1 justify-center md:justify-end">
                  <a target="blank" href="https://github.com/MipanZuu/" className="hover:text-white transition-all duration-300 flex items-center space-x-1">
                    <i className="fab fa-github text-lg"></i> <span>GitHub</span>
                  </a>
                  <a target="blank" href="https://www.linkedin.com/in/denta-bramasta-hidayat-50229a204/" className="hover:text-white transition-all duration-300 flex items-center space-x-1">
                    <i className="fab fa-linkedin text-lg"></i> <span>LinkedIn</span>
                  </a>
                  <a target="blank" href="https://www.instagram.com/dentabramastaa/" className="hover:text-white transition-all duration-300 flex items-center space-x-1">
                    <i className="fab fa-instagram text-lg"></i> <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle Divider with Gradient */}
            <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-40"></div>

            {/* Bottom Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-4">
              <p className="text-xs">© {new Date().getFullYear()} Mzyy. All rights reserved.</p>

              {/* Back to Top Button */}
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center space-x-2 text-gray-500 hover:text-white transition-all duration-300 hover:scale-105">
                <span>Back to Top</span>
                <span className="w-6 h-6 flex items-center justify-center border border-gray-500 rounded-full hover:border-white transition-all duration-300 hover:shadow-lg">↑</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
