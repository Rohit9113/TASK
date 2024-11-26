// tailwind.config.js
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant', 'serif'], // Define your custom font here
      },
    },
  },
  plugins: [],
};
