const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%, to': {
            'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%',
          },
        },
      },
      animation: {
        'morph-infinite': 'morph 8s ease-in-out infinite',
      },
      fontFamily: {
        mulish: ['var(--font-mulish)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        darkgrey: '#2d2e32',
        lightgrey: '#767676',
      },
    },
  },
  plugins: [],
};
