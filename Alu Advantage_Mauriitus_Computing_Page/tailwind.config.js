module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#00A2E1",
          50: "#C8EFFF",
          100: "#AEE8FF",
          200: "#7BDAFF",
          300: "#48CCFF",
          400: "#15BDFF",
          500: "#00A2E1",
          600: "#007DAE",
          700: "#00597B",
          800: "#003448",
          900: "#000F15",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor:['active'],
    },
  },
  plugins: [],
};
