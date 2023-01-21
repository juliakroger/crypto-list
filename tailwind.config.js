module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#191C1E",
        "active-blue": "#0F8EFF",
        gray: {
          1: "#C6CBD2",
          2: "#A4ADB6",
          3: "#99A2AD",
          4: "#6D7988",
          5: "#5B6571",
          6: "#49515B",
          7: "#363D44",
          8: "#363D44",
          9: "#24282D",
          10: "#262A2F",
          11: "#24282D",
          12: "#1B1E22",
          13: "#121417",
        },
      },
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "8px",
      lg: "16px",
      xl: "26px",
      full: "9999px",
    },
  },
  plugins: [],
};
