/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepblue: {
          50: '#f2f7fb',
          100: '#e6f0fb',
          200: '#bcdff6',
          300: '#75bff0',
          400: '#2f9be8',
          500: '#0066d6',
          600: '#0055b4',
          700: '#004083',
          800: '#002d59',
          900: '#001733'
        },
        slategrey: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1f2937',
          900: '#0b1220'
        }
      }
    }
  },
  plugins: [],
}
