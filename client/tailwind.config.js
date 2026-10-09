/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0C',
          dark: '#08080A',
          card: '#121216',
          cardHover: '#17171D',
          surface: '#1A1A22',
          border: 'rgba(255, 255, 255, 0.08)',
          ivory: '#F7F4EB',
          ivoryText: '#201F1D',
          cream: '#ECE6D8',
          muted: '#8E8D94',
        },
        gold: {
          light: '#F5E4BE',
          DEFAULT: '#C5A059',
          metallic: '#D4AF37',
          dark: '#9E7B35',
          border: 'rgba(197, 160, 89, 0.3)',
          subtle: 'rgba(197, 160, 89, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Cinzel"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(197, 160, 89, 0.15)',
        'gold-subtle': '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 1px rgba(197, 160, 89, 0.4)',
      },
    },
  },
  plugins: [],
}
