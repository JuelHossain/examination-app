
module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          50: "rgb(var(--main-50)/<alpha-value>)",
          100: "rgb(var(--main-100)/<alpha-value>)",
          200: "rgb(var(--main-200)/<alpha-value>)",
          300: "rgb(var(--main-300)/<alpha-value>)",
          400: "rgb(var(--main-400)/<alpha-value>)",
          500: "rgb(var(--main-500)/<alpha-value>)",
          600: "rgb(var(--main-600)/<alpha-value>)",
          700: "rgb(var(--main-700)/<alpha-value>)",
          800: "rgb(var(--main-800)/<alpha-value>)",
          900: "rgb(var(--main-900)/<alpha-value>)",
        },
      },
      screen: {},
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
