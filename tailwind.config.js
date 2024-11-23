/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        headerContainer: "1320px",
      },
      fontFamily:{
        dm: ['DM Sans'],

      },

      colors: {
        menuText: '#767676',
        menuTextHover: '#262626',
        categoryColor: '#F5F5F3',
        placeHolderColor:'#C4C4C4',
        productTextColor:'#767676',
        productBg: '#D8D8D8',
        arrowBg: '#979797',
        footerBg: '#F5F5F3',
        footerTextColor: '#6D6D6D',
        dropDownbg: '#023020',
      },
      width:
      {
        logoW:'40%',
        menuW:'60%',
      },
      backgroundImage:
      {
bannerImage: "url('/src/assets/Intro.png')",
      },
    },
  },
  plugins: [],
};
