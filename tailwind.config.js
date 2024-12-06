/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', 'index.html'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a0f29',
        'blue-accent': '#4c8bf5',
        glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(
        function ({ addVariant }) {
          addVariant("glow", ".glow-capture .glow-overlay &")
        }
    ),
  ],
}