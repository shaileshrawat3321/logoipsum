/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "var(--gradient-footer, linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%))",
      },
    },
  },
  plugins: [],
};
