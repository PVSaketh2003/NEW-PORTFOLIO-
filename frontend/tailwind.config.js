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
          interactive: 'var(--bg-interactive)',
          bgMuted: 'var(--bg-muted)',
          muted: 'var(--text-muted)',
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
          bg: '#0A0D14',
          surface: '#0E1420',
          card: '#121A28',
          interactive: '#182235',
        },
        brand: {
          cyan: '#75CFFF',
          mint: '#8FE3CC',
          blue: '#38BDF8',
          border: 'rgba(166, 187, 220, 0.13)',
          borderHover: 'rgba(166, 187, 220, 0.28)',
          text: '#F4F7FC',
          secondary: '#B0BBD0',
          muted: '#8794AA',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(117, 207, 255, 0.15)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
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
