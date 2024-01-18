import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Installments() {
    const [copied, setCopied] = useState(false);

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
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                            npm install -D tailwindcss{"\n"}
                            npx tailwindcss init
                        </code>
                    </pre>
                </div>
                <CopyToClipboard text={"npm install -D tailwindcss\nnpx tailwindcss init"} onCopy={handleCopy}>
                    <span className="ml-2 cursor-pointer dark:text-fortext">
                        {copied ? "Copied!" : <FaCopy size={20} />}
                    </span>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default Installments;
