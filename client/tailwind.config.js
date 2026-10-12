/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00381f",
          "green-hover": "#054d2c",
          "green-light": "#0a5e37",
          "green-dark": "#002414",
          gold: "#e5a832",
          "gold-hover": "#c88e22",
          cream: "#f2ede0",
          creamLight: "#fbf9f4",
          dark: "#1e2229",
          gray: "#555d66",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
