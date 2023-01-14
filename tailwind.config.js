module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#191C1E",
        "card-background": "#000000",
        "card-open-background": "#262A2F",
        "active-blue": "#0F8EFF",
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
