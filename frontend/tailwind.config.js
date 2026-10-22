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
        canvas: {
          DEFAULT: '#101216',
          section: '#151922',
          card: '#1A202B',
          hover: '#222938',
        },
        border: {
          subtle: '#2A3240',
          hover: '#3D4759',
        },
        accent: {
          DEFAULT: '#55BFE5',
          hover: '#6ED2F5',
          teal: '#2DD4BF',
        },
        slate: {
          primary: '#F3F5F7',
          secondary: '#A6AFBD',
          muted: '#6B7688',
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
