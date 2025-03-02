import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.footer
      className="fixed bottom-0 left-0 w-full transition-all duration-500 ease-in-out"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center transition-all">
        {!isExpanded && (
          <p className="text-xs md:text-sm text-center text-gray-700 dark:text-gray-300 w-full">
            © {new Date().getFullYear()} | <span className="text-gradient font-medium">Mzyy</span>
          </p>
        )}

        {/* AnimatePresence to smoothly enter/exit the expanded footer */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ y: 50, opacity: 0 }} // Slide up & fade in
              animate={{ y: 0, opacity: 1 }} // Show when active
              exit={{ y: 50, opacity: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 } }} // Delay prevents cropping
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full rounded-lg backdrop-blur-lg bg-black/30 shadow-xl drop-shadow-xl px-6 md:px-12 py-6 border-t border-gray-700 text-gray-500 dark:text-gray-400 text-sm"
            >
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Contact Info */}
                <div className="text-center md:text-left">
                  <p className="text-gray-300 dark:text-white font-semibold text-lg">Get in touch</p>
                  <p className="mt-1 text-base hover:text-white transition-all duration-300">
                    <a href="mailto:denta.dent29@gmail.com">denta.dent29@gmail.com</a>
                  </p>
                  <p className="mt-1 text-base hover:text-white transition-all duration-300">+31 123 456 789</p>
                </div>

                {/* Social Links */}
                <div className="text-center">
                  <p className="text-gray-300 dark:text-white font-semibold text-lg">Connect</p>
                  <div className="flex space-x-4 mt-1 justify-center">
                    <a target="blank" href="https://github.com/MipanZuu/" className="hover:text-white transition-all duration-300 flex items-center space-x-2">
                      <i className="fab fa-github text-lg"></i> <span className="text-base">GitHub</span>
                    </a>
                    <a target="blank" href="https://www.linkedin.com/in/denta-bramasta-hidayat-50229a204/" className="hover:text-white transition-all duration-300 flex items-center space-x-2">
                      <i className="fab fa-linkedin text-lg"></i> <span className="text-base">LinkedIn</span>
                    </a>
                    <a target="blank" href="https://www.instagram.com/dentabramastaa/" className="hover:text-white transition-all duration-300 flex items-center space-x-2">
                      <i className="fab fa-instagram text-lg"></i> <span className="text-base">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-40"></div>

              {/* Bottom Section */}
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-4 text-center md:text-left">
                <p className="text-xs md:text-sm">© {new Date().getFullYear()} Mzyy. All rights reserved.</p>

                {/*  Back to Top Button with animation */}
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-0 flex items-center justify-center space-x-2 text-gray-500 hover:text-white transition-all duration-300 text-sm md:text-base px-4 py-2 rounded-lg border border-gray-500 hover:border-white hover:shadow-lg"
                >
                  <span>Back to Top</span>
                  <span className="w-6 h-6 flex items-center justify-center border border-gray-500 rounded-full hover:border-white transition-all duration-300">↑</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.footer>
  );
}

export default Footer;