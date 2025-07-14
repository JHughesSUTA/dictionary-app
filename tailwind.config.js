/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom color palette
        gray: {
          900: "rgb(var(--color-gray-900) / <alpha-value>)", // #050505
          800: "rgb(var(--color-gray-800) / <alpha-value>)", // #1F1F1F
          700: "rgb(var(--color-gray-700) / <alpha-value>)", // #2D2D2D
          600: "rgb(var(--color-gray-600) / <alpha-value>)", // #3A3A3A
          500: "rgb(var(--color-gray-500) / <alpha-value>)", // #757575
          200: "rgb(var(--color-gray-200) / <alpha-value>)", // #E9E9E9
          100: "rgb(var(--color-gray-100) / <alpha-value>)", // #F4F4F4
        },
        white: "rgb(var(--color-white) / <alpha-value>)", // #FFFFFF
        purple: "rgb(var(--color-purple) / <alpha-value>)", // #A445ED
        red: "rgb(var(--color-red) / <alpha-value>)", // #FF5252
      },
    },
  },
  plugins: [],
};
