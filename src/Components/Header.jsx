import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl, downloadPdf } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { linkedin, github } = socialMediaUrl;
  const { pdf } = downloadPdf;

  // Toggle the mobile menu
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme on initial load
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isDark]);

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      {/* Logo Section */}
      <div className="flex justify-between items-center py-2">
        <NavLink to="/">
          <img className="w-14" src={logos.logogradient} alt="logo" />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-gray-300 md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          {["Home", "About", "Technologies", "Projects", "Template", "Contact"].map(
            (page) => (
              <li key={page} className="pb-1 md:pb-0">
                <NavLink
                  to={`/${page}`}
                  onClick={toggleClass}
                  activeClassName="active"
                >
                  {page}
                </NavLink>
              </li>
            )
          )}
          <li>
            <a
              href={pdf}
              download=""
              className="mt-5 md:mt-0 btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1"
            >
              CV
            </a>
          </li>
        </ul>

        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." />
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." />
              </svg>
            </a>
          </li>
          {/* Dark/Light Mode Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
            >
              {isDark ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;