const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{njk,md,11ty.js,html}",
    "./src/**/*.json"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B6B4D',
          light: '#5C8B6A',
          dark: '#1F3A32'
        },
        secondary: {
          DEFAULT: '#CFA980',
          light: '#E2CDA2',
          dark: '#A97F56'
        },
        neutral: {
          50: '#F4E9D8',
          100: '#EFE2CC',
          200: '#E0D2BA',
          700: '#3A332A',
          900: '#1E1812'
        }
      },
      fontFamily: {
        display: ['\"Montserrat\"', ...defaultTheme.fontFamily.sans],
        sans: ['\"Work Sans\"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
