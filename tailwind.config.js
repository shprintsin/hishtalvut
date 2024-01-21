/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heebo:"Heebo",
        opensans:"Open Sans",
        secular:"Secular One",
        rubik:"Rubik",
        alef:"Alef"
      },
      colors:{prime:"#26426c",secondary:"#5b7895",third:"#5b7895"}
    }},
  plugins: [],
};
