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
    },
    fontFamily: {
      serif: ['Philosopher', 'serif'],
     },
    extend: {
      fontFamily: {
        'philo': ['Philosopher', 'serif'],
        'canon': ['"IM Fell French Canon SC"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [], 
}
