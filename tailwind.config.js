/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0f2e22',
          light: '#1a3a2a',
        },
        ink: '#0a0a0a',
        ivory: '#f7f5f0',
        gold: {
          DEFAULT: '#c9a961',
          light: '#ddc48a',
          dark: '#a3854f',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.15) translate(-1%, -1%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        kenburns: 'kenburns 20s ease-out forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        fadeInUp: 'fadeInUp 1.2s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}