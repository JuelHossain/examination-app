const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: colors.purple,
      },
      screen: {
        
      }
    },
  },
  plugins: [],
};
