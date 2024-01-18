import React from "react";

function TemplateStarting() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 dark:text-light-heading">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                    Welcome to the Docs!
                </span>
            </h1>
            <p className="dark:text-fortext">
                Welcome to the documentation for the Tailwind template, a powerful web application built with the combination of <a className="italic" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>  and ReactJS. This comprehensive guide is designed to assist developers, designers, and anyone involved in the project to seamlessly navigate and utilize the features and templates provided.
            </p>
        </div>
    );
}

export default TemplateStarting;
