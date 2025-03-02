import React, { useState } from "react";

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=";

  const scramble = () => {
    let iteration = 0;
    const originalText = text.split(""); // Keep original reference
    const interval = setInterval(() => {
      setDisplayText((prevText) =>
        originalText
          .map((char, index) =>
            char === " " // Preserve spaces
              ? " "
              : index < iteration
              ? originalText[index] // Reveal original letter
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1;
    }, 50);
  };

  return (
    <span className="hover:text-white transition-all duration-500 cursor-pointer inline-block" onMouseEnter={scramble} style={{ whiteSpace: "pre-wrap", fontStyle: "italic" }}>
      {displayText}
    </span>
  );
};

export default ScrambleText;
