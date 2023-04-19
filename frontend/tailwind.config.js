/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'grey': '#161C1D',
      'black': '#0A0B0C',
      'yellow': '#EC9A29',
      'teal': '#0B485B',
      'white': '#FFFFFF',
      'indigo': '#0b1424'
    },
    extend: {
      fontFamily: {
        'philo': ['Philosopher', 'serif'],
        'canon': ['"IM Fell French Canon SC"', 'serif'],
      },
      backgroundImage: {
        'sky': "url('/sky.jpg')",
      },
  
    },
  },
  plugins: [], 
}
