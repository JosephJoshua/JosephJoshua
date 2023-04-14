const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = {
  grey: '#f7f7f7',
  darkgrey: '#2d2e32',
  lightgrey: '#767676',
};

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
        'text-reveal__text': {
          '0%': {
            color: '#fff',
          },
          '100%': {
            color: colors.darkgrey,
          },
        },
        'text-reveal__box': {
          '0%': {
            left: 0,
            width: 0,
          },
          '50%': {
            left: 0,
            width: '100%',
          },
          '100%': {
            left: '100%',
            width: 0,
          },
        },
      },
      animation: {
        'morph-infinite': 'morph 8s ease-in-out infinite',
        'text-reveal__text': 'text-reveal__text 0.0001s linear forwards',
        'text-reveal__box': 'text-reveal__box 1s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      fontFamily: {
        mulish: ['var(--font-mulish)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
      colors,
    },
  },
  plugins: [],
};
