module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   primary: "#7E00C6",
      //   violet: {
      //     100: "#A200FF",
      //     200: "#7E00C6",
      //     300: "#5A008E",
      //     400: "#360055",
      //     500: "#12001C",
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
