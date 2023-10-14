/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans - serif"],
      },
      backgroundImage: {
        "gradient-footer":
          "var(--gradient-footer, linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%))",
        "gradient-hero":
          "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%);",
        "text-gradient":
          "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
      },
      colors: {
        gray: "#616161",
        buttonBlue: "#0076CE"
      },
    },
  },
  plugins: [],
};
