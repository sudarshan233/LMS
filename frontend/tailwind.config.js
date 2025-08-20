/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "input": "#F2F2F2",
        "accent": "#477BFF",
        "hover" : "#FFFFFF"
      },
      borderColor: {
        "accent": "#477BFF"
      },
      stroke : {
        "accent": "#477BFF"
      },
      textColor: {
        "accent": "#477BFF",
      }
    },
  },
  plugins: [],
}