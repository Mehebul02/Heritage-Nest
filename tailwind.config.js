/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#005EAE',
        designColor:'#EE6611',
        lightText:'#FFFFFF',
        darkText:'#111827',
        bgColor:'#ECF5FF' 
      },
      fontFamily:{
        bodyFont:["inter", "sans-serif"]
      }
    },
  },
  plugins: [require('daisyui')],
}

