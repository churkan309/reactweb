/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#322D29',
        primaryContent: '#72383D',
        primarySubcontent: '#AC9C8D',
        primaryBase: '#D1C7BD',
        primaryAccent: '#EFE9E1',
        primaryBg: '#D9D9D9',
      },
    },
  },
  plugins: [],
}

