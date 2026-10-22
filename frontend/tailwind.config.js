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
        theme: {
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          muted: 'var(--bg-muted)',
          text: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          textMuted: 'var(--text-muted)',
          border: 'var(--border-color)',
          borderHover: 'var(--border-hover)',
          accent: 'var(--accent-color)',
          accentHover: 'var(--accent-hover)',
          accentLight: 'var(--accent-light)',
          accentText: 'var(--accent-text)',
          accentSec: 'var(--accent-secondary)',
        },
        dark: {
          bg: '#0B0D12',
          section: '#111722',
          card: '#151D2A',
          hover: '#1B2433',
        },
        brand: {
          blue: '#64C7F2',
          teal: '#7CE0C3',
          border: '#293446',
          borderHover: '#3D4D65',
          text: '#F3F5F9',
          secondary: '#A8B2C1',
          muted: '#6B7A90',
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
