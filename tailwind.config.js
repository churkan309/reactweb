/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#540b0e',
        primaryContent: '#335c67',
        primarySubcontent: '#9e2a2b',
        primaryBase: '#99a88c',
        primaryAccent: '#e09f3e',
        primaryBg: '#fff3b0',
      },
    },
  },
  plugins: [],
}

