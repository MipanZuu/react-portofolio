import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
function Installments() {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(true);

    const code = `export default function App() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 underline">Hello World!</h1>
                <p className="text-lg">
                    Welcome to your amazing landing page. Explore and enjoy!
                </p>
                <button className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-white transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}`;

    const result = (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 underline">Hello World!</h1>
                <p className="text-lg">Welcome to your amazing landing page. Explore and enjoy!</p>
                <button className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-white transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );


    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="font-secondary">
            <h1 className="text-2xl font-bold mb-4 dark:text-light-heading">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                    Getting Started !!
                </span>
            </h1>
            <p className="text-content">
                Welcome to the documentation for the Tailwind template, a powerful web application built with the combination of <a className="italic text-blue-400 underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> and ReactJS. This comprehensive guide is designed to assist developers, designers, and anyone involved in the project to seamlessly navigate and utilize the features and templates provided.
            </p>

            <h2 className="text-xl font-bold my-4 dark:text-light-heading">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                    React JS Installation
                </span>
            </h2>
            <p className="text-content">
                Before we start installing Tailwind CSS, we first need to install the frontend framework, the one I use is React JS.
                Instead of using Create-React-App (CRA) to create React JS, I will provide a tutorial using Vite with the aim of performance, and other benefits obtained by using Vite
                <a className="italic text-blue-400 underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"> read more.</a>
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                            npm create vite@latest
                        </code>
                    </pre>
                </div>
                <CopyToClipboard text={"npm create vite@latest"} onCopy={handleCopy}>
                    <span className="ml-2 cursor-pointer dark:text-fortext">
                        {copied ? "Copied!" : <FaCopy size={20} />}
                    </span>
                </CopyToClipboard>
            </div>
            <p className="text-content">
                After that, you will be asked to create a name for your project, for example, I will name it <span className="italic">"my-first-project"</span>, it looks like the following code.
            </p>

            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                            ? Project name: › my-first-project
                        </code>
                    </pre>
                </div>
            </div>
            <p className="text-content">
                Then you will be asked to choose the framework you will use, because I will use <span className="italic">React JS</span>, you select the React and JavaScript variant to continue.
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                  <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg overflow-x-auto">
                    <code style={{ whiteSpace: "pre-wrap" }}>
                            ? Select a framework: › - Use arrow-keys. Return to submit.<br />
                            Vanilla{'\n'}
                            Vue{'\n'}
                            ❯   React{'\n'}
                            Preact{'\n'}
                            Lit{'\n'}
                            Svelte{'\n'}
                            Solid{'\n'}
                            Qwik{'\n'}
                            Others
                        </code>
                    </pre>
                </div>
            </div>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                            ? Select a variant: › - Use arrow-keys. Return to submit.{'\n'}
                            TypeScript{'\n'}
                            TypeScript + SWC{'\n'}
                            ❯     JavaScript{'\n'}
                            JavaScript + SWC
                        </code>
                    </pre>
                </div>
            </div>
            <p className="text-content">
                Then you run the command below to run your first React JS website.
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                            cd my-first-project{'\n'}
                            npm install{'\n'}
                            npm run dev
                        </code>
                    </pre>
                </div>
            </div>
            <h2 className="text-xl font-bold pt-6 my-4 dark:text-light-heading">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                    Tailwind Installation
                </span>
            </h2>
            <p className="text-content">
                In your React JS repository, run the command below to install Tailwind CSS to your project, here I will give an example using PostCSS.
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                           npm install -D tailwindcss postcss autoprefixer {"\n"}
                            npx tailwindcss init -p
                        </code>
                    </pre>
                </div>
                <CopyToClipboard text={"npm install -D tailwindcss postcss autoprefixer --save-dev\n npx tailwindcss init -p"} onCopy={handleCopy}>
                    <span className="ml-2 cursor-pointer dark:text-fortext">
                        {copied ? "Copied!" : <FaCopy size={20} />}
                    </span>
                </CopyToClipboard>
            </div>
            <p className="text-content">
                Then add the code line below in the <code>./src/tailwind.config.js</code> file.
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                  <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                    <code style={{ whiteSpace: "pre-wrap" }}>
                      {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    </code>
                  </pre>
                </div>
            </div>
            <p className="text-content">
                Or you can also modify the tailwind config according to your needs, like the config I use for my portfolio website.
            </p>

            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                  <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                    <code style={{ whiteSpace: "pre-wrap" }}>
                      {`module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
        secondary: "Ubuntu",
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",
        "fortext": "#d8e6e3",
      },
    },
  },
  plugins: [],
};`}
                    </code>
                  </pre>
                </div>
            </div>
            <p className="text-content">
                Then add the code below to the main class of your CSS, if you use React JS then your main class is <code>./src/index.css</code>.
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                  <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                    <code style={{ whiteSpace: "pre-wrap" }}>
                      {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                    </code>
                  </pre>
                </div>
            </div>
            <p className="text-content">
                Then congratulations, you can use Tailwind CSS in your first project! Please try the following code on <code>./src/app.jsx</code> to ensure that Tailwind CSS runs perfectly.
            </p>

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
                <div className="w-full md:w-auto md:flex-grow">
    <pre
        className={`dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg ${
            showCode ? "overflow-x-auto" : "overflow-y-auto max-h-96"
        }`}
    >
      <code style={{ whiteSpace: "pre-wrap" }}>
        {showCode ? code : ""}
          {!showCode ? result : ""}
      </code>
    </pre>
                </div>
            </div>
            <h2 className="text-2xl font-bold pt-6 my-4 dark:text-light-heading">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                  Resources
                </span>
            </h2>

            <ul className="list-disc text-content pl-6 italic">
                <li className="mb-2">
                    <a
                        href="https://semaphoreci.com/blog/vite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Vite - Next Generation Frontend Tooling
                    </a>
                </li>
                <li className="mb-2">
                    <a
                        href="https://tailwindcss.com/docs/guides/vite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Tailwind CSS with Vite
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Installments;
