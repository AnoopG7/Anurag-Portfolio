/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        secondary: '#4a4a4a',
        accent: '#fbbf24',
        'accent-light': '#fcd34d',
        'bg-dark': '#1a1a1a',
        'bg-light': '#2d2d2d',
        'text-primary': '#ffffff',
        'text-secondary': '#e5e5e5',
        'border': '#4a4a4a',
        'gray-950': '#0a0a0a',
        'gray-900': '#1a1a1a',
        'gray-800': '#2d2d2d',
        'gray-700': '#3f3f3f',
        'gray-600': '#555555',
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(251, 191, 36, 0.3)',
        'glow-lg': '0 0 40px rgba(251, 191, 36, 0.4)',
      },
    },
  },
  plugins: [],
}

