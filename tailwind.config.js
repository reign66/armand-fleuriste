/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#3A3A3A',
        charcoal: '#5A5A5A',
        cream: '#FAF8F5',
        'cream-dark': '#F0EDE8',
        gold: '#C5A47E',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
}
