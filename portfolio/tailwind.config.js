
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          500: '#f97316',
          600: '#ea580c',
        },
        dark: {
          950: '#020617',
        }
      }
    },
  },
  plugins: [],
}