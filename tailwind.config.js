/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "#4989f5",
         secondary:"#333",
         faded:"#666",
         green:"#34a853",
         hover:"#367ac2"
         
        },
       backgroundColor: {
         "button-primary": "#367ac2"
        }
        ,fontFamily:{
          sans:['"Dm Sans"',"sans-serif"]
      }
    },
  },
  plugins: [],
}