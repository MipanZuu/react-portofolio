import React, { useState, useEffect } from "react";

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-white dark:bg-dark-mode shadow-md transition-all duration-500 ease-in-out ${
        isExpanded ? "h-60 py-6" : "h-8 py-2"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center transition-all">
        {/* Small Footer (Always Visible) */}
        <p
          className={`text-xs md:text-sm text-center text-gray-700 dark:text-gray-300 w-full ${
            isExpanded ? "hidden" : "block"
          }`}
        >
          © {new Date().getFullYear()} |{" "}
          <span className="text-gradient font-medium">MZyy</span>
        </p>

        {/* Expanded Content (Only appears when scrolled to bottom) */}
        {isExpanded && (
          <div className="w-full flex flex-col items-center text-center text-gray-900 dark:text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white">
              Denta Bramasta Hidayat
            </h1>
            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300">
              Software Engineer | Frontend & Backend Developer | Tech Enthusiast
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-6 text-gray-800 dark:text-gray-200">
              <p>
                <span className="font-bold">Work Days:</span> Tuesday - Friday
              </p>
              <p>
                <span className="font-bold">Teaching:</span> Monday
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-4">
              <p className="text-md font-semibold">Have a project in mind?</p>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 dark:text-blue-400 font-bold underline"
              >
                info@dentabramasta.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm md:text-md">
              <a
                href="https://github.com/yourusername"
                className="hover:underline text-gray-800 dark:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="hover:underline text-gray-800 dark:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="hover:underline text-gray-800 dark:text-white"
              >
                Twitter
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
