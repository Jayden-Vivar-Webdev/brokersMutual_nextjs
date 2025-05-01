/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // or "./app/**/*.{js,ts,jsx,tsx}" for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50: '#f0f4ff',
            100: '#e0e9fe',
            200: '#c7d7fe',
            300: '#a4bcfd',
            400: '#8098fa',
            500: '#6172f3',
            600: '#0665ff',
            700: '#3a43cd',
            800: '#3039a5',
            900: '#2d3483',
        },
        secondary: {
            50: '#f6f7f9',
            100: '#e8ebf0',
            200: '#d5dbe5',
            300: '#b5c0d2',
            400: '#8f9fba',
            500: '#7282a5',
            600: '#5c6a8b',
            700: '#4a5571',
            800: '#40495e',
            900: '#393f51',
        },
        accent: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
        }
    },
    fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

