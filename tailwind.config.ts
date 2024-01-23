import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const { blackA } = require('@radix-ui/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "lsm": "475px",
        ...defaultTheme.screens,
      },

      colors: {
        //!Light Theme
        blue: "#0069F8",
        black: "#202020",
        yellow: "#FEBD00",
        green: "#00B625",
        red: "#FE0A00",
        blueHover: "#1b66c9",
        redError: "#d93025",
        ...blackA
      },

      fontFamily: {
        poppins: ['var(--font-poppins)']
      },

      animation: {
        'loading': 'loading 1.5s infinite',
        'overlayShow': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'contentShow': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        loading: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(500px)' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      }
    },
  },
  plugins: [],
}
export default config
