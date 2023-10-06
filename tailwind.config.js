/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#F2F5F9",
        secondary: "#FF9C1A",
        accent: "#EC1B09",
        title: "#0B0909",
        titleCc: "#1A100380",
        Socmed: "#F2F7FC",
      },
      backgroundImage: {
        'pp': "url('../public/asset/Profile Picture.jpeg')",
      },
    },
  },
  plugins: [],
};
