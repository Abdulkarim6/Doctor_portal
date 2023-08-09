/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          aqua: '#AFB7CA',
          "base-100": "#FFFFFF",
        },
      },
      "garden",
      "lemonade",
      "night",
      "coffee",
      "black",
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },


  plugins: [require("daisyui")],
}

