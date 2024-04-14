/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      primary: "#F26CA7"
     },
     keyframes: {
      scan: {
        '0%': {
          backgroundPosition: '0% 0%',
        },
        '100%': {
          backgroundPosition: '100% 0%',
        },
      },
    },
    animation: {
      scan: 'scan 3s linear infinite',
    },
    },
  },
  plugins: [],
}