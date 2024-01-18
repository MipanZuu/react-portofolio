import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {logos} from "../../Details";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Resizable } from "react-resizable";

const ResizableColumn = ({ initialWidth, minWidth, maxWidth, children }) => {
    const [width, setWidth] = useState(initialWidth);
    const [isResizing, setIsResizing] = useState(false);

    const handleMouseDown = (event) => {
        setIsResizing(true);

        const handleMouseMove = (e) => {
            setWidth(Math.min(maxWidth, Math.max(minWidth, width + e.clientX - event.clientX)));
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div style={{ position: "relative", width: `${width}px`, flex: "0 0 auto" }}>
            {children}
            <div
                style={{
                    position: "absolute",
                    userSelect: "none",
                    width: "12px",
                    height: "100%",
                    top: 0,
                    cursor: "col-resize",
                    right: "-12px",
                }}
                onMouseDown={handleMouseDown}
            >
                <svg width="6" height="14" viewBox="0 0 6 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect width="2" height="14" rx="1"></rect>
                    <rect x="4" width="2" height="14" rx="1"></rect>
                </svg>
            </div>
        </div>
    );
};

function HeaderTemp() {
    const [showCode, setShowCode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [resultHeight, setResultHeight] = useState("50vh");
    const toggleClass = () => {
        setIsOpen(!isOpen);
    };
    const handleResize = (e) => {
        setResultHeight(`calc(100vh - ${e.clientY}px)`);
    };

    const code = `export default function App() {
    return (
        <header className="container mx-auto md:flex justify-between py-2 max-width">
            <div className="flex justify-between items-center py-2 md:py-2">
                <NavLink to="/">
                    <img className="w-14" src={logos.logogradient} alt="logo" />
                </NavLink>
                <div onClick={toggleClass} className="cursor-pointer">
                    <svg className="stroke-dark-heading dark:stroke-gray-300 md:hidden" width="25" height="20" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <nav className={\` ${!isOpen ? "hidden" : null} text-center md:flex justify-between\`}>
                <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
                    <li className="pb-1 md:pb-0">
                        <NavLink to="" onClick={toggleClass} activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="pb-1 md:pb-0">
                        <NavLink to="" onClick={toggleClass} activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <a href="" download="" className="mt-5 md:mt-0 btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
                            CV
                        </a>
                    </li>
                </ul>
                <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
                    <li>
                        <a href="" target="_blank" rel="noreferrer noopener">
                            <svg className="dark:fill-light-heading fill-dark-heading" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noreferrer noopener">
                            <svg className="dark:fill-light-heading fill-dark-heading" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}`;

    const result =(
        <header className="container mx-auto md:flex justify-between py-2 max-width">
            <div className="flex justify-between items-center py-2 md:py-2">
                <NavLink to="/">
                    <img className="w-14" src={logos.logogradient} alt="logo" />
                </NavLink>
                <div onClick={toggleClass} className="cursor-pointer">
                    <svg className="stroke-dark-heading dark:stroke-gray-300 md:hidden" width="25" height="20" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
                <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
                    <li className="pb-1 md:pb-0">
                        <NavLink to="" onClick={toggleClass} activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="pb-1 md:pb-0">
                        <NavLink to="" onClick={toggleClass} activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <a href="" download="" className="mt-5 md:mt-0 btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
                            CV
                        </a>
                    </li>
                </ul>
                <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
                    <li>
                        <a href="" target="_blank" rel="noreferrer noopener">
                            <svg className="dark:fill-light-heading fill-dark-heading" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noreferrer noopener">
                            <svg className="dark:fill-light-heading fill-dark-heading" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );

    return (
        <div className="font-secondary">
            <h1 className="text-2xl font-bold mb-4 dark:text-light-heading">
        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
          Header template
        </span>
            </h1>

            <h1 className="text-xl font-bold mb-4 dark:text-light-heading">
        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
          Header v1
        </span>
            </h1>

            <div className="flex justify-center my-4">
                <button
                    className={`px-4 py-2 mx-2 ${
                        showCode ? "bg-blue-500 text-white rounded-2xl" : "bg-gray-300 text-gray-700 rounded-2xl"
                    }`}
                    onClick={() => setShowCode(true)}
                >
                    Code
                </button>
                <button
                    className={`px-4 py-2 mx-2 ${
                        !showCode ? "bg-blue-500 text-white rounded-2xl" : "bg-gray-300 text-gray-700 rounded-2xl"
                    }`}
                    onClick={() => setShowCode(false)}
                >
                    Result
                </button>
            </div>

            <div className="flex items-center my-4 overflow-x-auto flex-wrap">
                <div className="w-full sm:w-96 md:w-64 md:flex-grow">
                    {showCode && (
                        <pre
                            className={`dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg overflow-y-auto max-h-64 w-96 sm:w-auto`}
                        >
                          <code style={{ whiteSpace: "pre-wrap" }}>
                            <SyntaxHighlighter language="jsx" style={dracula}>
                              {code}
                            </SyntaxHighlighter>
                          </code>
                        </pre>
                    )}
                    <div className="container resize-x">
                        {!showCode && result}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTemp;
