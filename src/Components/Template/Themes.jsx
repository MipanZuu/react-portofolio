import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

const ThemeItem = ({ label, color, onCopy }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-300">
        <div className="flex items-center">
            <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: color }}></div>
            <span className="text-content">{label}</span>
        </div>
        <div className="flex items-center">
            <span className="text-content mr-2">{color}</span>
            <CopyToClipboard text={color} onCopy={onCopy}>
                <span className="cursor-pointer">
                    <FaCopy className="text-content" size={14} />
                </span>
            </CopyToClipboard>
        </div>
    </div>
);

const ThemeDropdown = ({ label, colors, onCopy }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown mt-4">
            <h2
                className="text-xl font-bold dark:text-light-heading cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="bg-gradient-to-l from-green-400 to-blue-500 text-transparent bg-clip-text">
                    {label}
                </span>
            </h2>
            {isOpen && <MoreColors colors={colors} onCopy={onCopy} />}
        </div>
    );
};

const MoreColors = ({ colors, onCopy }) => (
    <div className="example-grid mt-4">
        {Object.keys(colors).map((colorName) => (
            <ThemeItem
                key={colorName}
                label={colorName}
                color={colors[colorName]}
                onCopy={() => onCopy(colors[colorName])}
            />
        ))}
    </div>
);


function Themes() {
    const [theme, setTheme] = useState("dark");
    const [copied, setCopied] = useState(false);

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    const darkColors = {
        Background: "#666666",
        Text: "#1f2428",
        Accent: "#191919",
        Card: "#363636",
    };

    const lightColors = {
        Background: "#CCCCCC",
        Text: "#A7A7A7",
        Accent: "#d8e6e3",
    };

    const moreColors = {
        Layer1: "#294B29",
        Layer2: "#50623A",
        Layer3: "#789461",
        Layer4: "#DBE7C9",
    };

    const pastelColors = {
        Layer1: "#F5EEE6",
        Layer2: "#FFF8E3",
        Layer3: "#F3D7CA",
        Layer4: "#E6A4B4",
    };

    const vintageColors = {
        Layer1: "#2D3250",
        Layer2: "#424769",
        Layer3: "#7077A1",
        Layer4: "#F6B17A",
    };

    const warmColors = {
        Layer1: "#FFE7C1",
        Layer2: "#F3CCF3",
        Layer3: "#E9A8F2",
        Layer4: "#DC84F3",
    };

    const neonColors = {
        Layer1: "#27005D",
        Layer2: "#9400FF",
        Layer3: "#AED2FF",
        Layer4: "#E4F1FF",
    };

    const natureColors = {
        Layer1: "#43766C",
        Layer2: "#F8FAE5",
        Layer3: "#B19470",
        Layer4: "#76453B",
    };


    const currentColors = theme === "dark" ? darkColors : lightColors;

    const copyColorToClipboard = (color) => {
        navigator.clipboard.writeText(color);
    };

    return (
        <div className="font-secondary">
            <h1 className="text-2xl font-bold mb-4 dark:text-light-heading">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                    Themes !!
                </span>
            </h1>
            <p className="text-content">
                Before you copy it, you have to know how to apply it to your website, here is how to create the theme. Inside <code>./src/tailwind.config.js </code>
                you can create like the code below and adjust it to your color theme.
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
        // adjust the font
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
};
`}
                        </code>
                    </pre>
                </div>
            </div>

            <p className="text-content">
                In this section, I will share the theme that I use to create a website appearance. Below you can see it!
            </p>
            <div className="mt-4">
                <label className="mr-2 text-content">Select Theme:</label>
                <select
                    value={theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded dark:dark:bg-gray-800 text-content"
                >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </div>

            <div className="example-grid mt-4">
                {Object.keys(currentColors).map((colorName) => (
                    <ThemeItem
                        key={colorName}
                        label={colorName}
                        color={currentColors[colorName]}
                        onCopy={() => copyColorToClipboard(currentColors[colorName])}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 dark:text-light-heading pt-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                   More Colors !!
                </span>
            </h2>
            <p className="text-content">
                I will present some of the colors that I have used to create websites.
            </p>
            <ThemeDropdown label="-- Green" colors={moreColors} onCopy={copyColorToClipboard} />
            <ThemeDropdown label="-- Pastel" colors={pastelColors} onCopy={copyColorToClipboard} />
            <ThemeDropdown label="-- Vintage" colors={vintageColors} onCopy={copyColorToClipboard} />
            <ThemeDropdown label="-- Warm" colors={warmColors} onCopy={copyColorToClipboard} />
            <ThemeDropdown label="-- Warm" colors={neonColors} onCopy={copyColorToClipboard} />
            <ThemeDropdown label="-- Nature" colors={natureColors} onCopy={copyColorToClipboard} />

            <h2 className="text-2xl font-bold mb-4 dark:text-light-heading pt-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">
                   How to use it?
                </span>
            </h2>
            <p className="text-content">
                After you configure it in your Tailwind config, what you do is just call it like using Tailwind in general. For example, I have configured green-text, here is the implementation.
            </p>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                           className="text-green-text"
                        </code>
                    </pre>
                    <h1 className="text-green-text">Here is the result for applying the style green-text on text color.</h1>
                </div>
            </div>
            <div className="flex items-center my-4 overflow-x-auto">
                <div className="w-full md:w-auto">
                    <pre className="dark:bg-gray-800 bg-gray-200 p-4 rounded text-content text-xs md:text-base lg:text-md xl:text-lg">
                        <code style={{ whiteSpace: "pre-wrap" }}>
                           className="bg-green-text"
                        </code>
                    </pre>
                    <div className="bg-green-text">Here is the result for applying the style green-text on backrgound.</div>
                </div>
            </div>

        </div>
    );
}

export default Themes;
