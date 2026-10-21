/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      // Colorblind-safe palette (Okabe-Ito). Blue + orange stay distinct under
      // protanopia, deuteranopia and tritanopia; status is never colour-only.
      colors: {
        primary: {
          50: '#EAF6FD', 100: '#BFE3F7', 200: '#A3D7F3', 300: '#8CCDF0', 400: '#6FC0EC',
          500: '#56B4E9', 600: '#3FA0D8', 700: '#2E8FC4', 900: '#1B5E82',
          DEFAULT: '#56B4E9',
        },
        accent: {
          400: '#F0B530', 500: '#E69F00', 700: '#C98A00',
          DEFAULT: '#E69F00',
        },
        danger: { 400: '#F08A55', 500: '#E8743B', DEFAULT: '#E8743B' },
        warn: { 400: '#F5EC7A', 500: '#F0E442', DEFAULT: '#F0E442' },
        info: { 400: '#DDA0C4', 500: '#CC79A7', DEFAULT: '#CC79A7' },
        neutral: {
          50: '#F5F7FA', 100: '#E8EDF2', 200: '#D3DAE0', 300: '#B0BAC3', 400: '#8C99A5',
          500: '#6B7883', 600: '#2D3841', 700: '#1E272E', 800: '#141B20', 900: '#0A0E11', 950: '#000000',
        },
        bg: {
          page: '#05080B',
          surface: '#0A0E11',
          elevated: '#121920',
        },
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        24: '96px',
        32: '128px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        DEFAULT: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(86, 180, 233, 0.05)',
        card: '0 4px 16px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
        modal: '0 24px 48px rgba(0, 0, 0, 0.7)',
        glow: '0 0 16px rgba(86, 180, 233, 0.25)',
      },
      keyframes: {
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40, end)',
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'scanline': 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
