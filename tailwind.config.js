module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        primary: "Chrusty Rock, sans-serif",
        secondary: "Ubuntu",
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-mode2": "#1f1e1e",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        greenbg: "#D7FFE0",
        fortext: "#d8e6e3",
      },
    },
  },
  plugins: [],
};
