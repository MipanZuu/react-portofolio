import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const [isComponentsOpen, setIsComponentsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleGuide = () => {
        setIsGuideOpen(!isGuideOpen);
    };

    const toggleComponents = () => {
        setIsComponentsOpen(!isComponentsOpen);
    };

    return (
        <div className="flex h-screen font-Roboto">
            <aside
                id="default-sidebar"
                className={`z-40 w-64 h-screen transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0 fixed sm:relative overflow-y-auto`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-dark-mode">
                    <ul className="space-y-2 font-medium dark:text-light-content">
                        <li className="text-xl font-bold">Documentations</li>
                        <li>
                            <span
                                className="block text-gray-800 dark:text-gray-400 cursor-pointer w-full dark:bg-gray-800 p-2 rounded-lg bg-light-heading"
                                onClick={toggleGuide}
                            >
                                Guides
                            </span>
                            {isGuideOpen && (
                                <ul className="pl-4 space-y-1">
                                    <li>
                                        <NavLink to="/Template/Guides/Installments" className="dark:text-light-content">
                                            Installments
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Template/Guides/Themes" className="dark:text-light-content">
                                            Theme
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <span
                                className="block text-gray-800 dark:text-gray-400 cursor-pointer w-full dark:bg-gray-800 p-2 rounded-lg bg-light-heading"
                                onClick={toggleComponents}
                            >
                                Components
                            </span>
                            {isComponentsOpen && (
                                <ul className="pl-4 space-y-1">
                                    <li>
                                        <NavLink to="/Template/Components/Header" className="dark:text-light-content">
                                            Header
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Template/Components/Footer" className="dark:text-light-content">
                                            Footer
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Add more sidebar items as needed */}
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <div className={`flex-1 p-4 transition-transform ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                <button
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleSidebar}
                >
                    <span className="sr-only">Toggle sidebar</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>

                <div className="pb-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
