/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5f5',
        foreground: '#fff',
        primary: '#3490dc',
        muted: '#e0e0e0',
        border: '#dcdcdc',
      },
    },
  },
  plugins: [],
}