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
          DEFAULT: '#5B21B6',
          light: '#7C3AED',
          dark: '#3C1772'
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#B45309'
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          700: '#374151',
          900: '#111827'
        }
      },
      fontFamily: {
        display: ['\"Playfair Display\"', ...defaultTheme.fontFamily.serif],
        sans: ['\"Work Sans\"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
