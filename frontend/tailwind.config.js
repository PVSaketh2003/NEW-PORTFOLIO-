/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0D12',
          section: '#11151D',
          card: '#151B26',
          hover: '#1B2332',
        },
        brand: {
          blue: '#62C6F2',
          teal: '#7CE0C3',
          border: '#273142',
          borderHover: '#38465C',
          text: '#F5F7FA',
          secondary: '#A4ADBB',
          muted: '#788396',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'site': '1280px',
      }
    },
  },
  plugins: [],
}
