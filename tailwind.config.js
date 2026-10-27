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
        quantum: {
          dark: '#0B0F19',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(0, 242, 254, 0.2)',
          cyan: '#00F2FE',
          blue: '#4FACFE',
          purple: '#7F00FF',
          magenta: '#E100FF',
          emerald: '#00FF87',
          amber: '#FFB800',
          rose: '#FF3366',
        },
        smartLight: {
          bg: '#F8FAFC',
          card: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(59, 130, 246, 0.25)',
          text: '#0F172A',
          muted: '#64748B',
          accent: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'quantum-cyan': '0 0 25px rgba(0, 242, 254, 0.35)',
        'quantum-purple': '0 0 25px rgba(127, 0, 255, 0.35)',
        'quantum-emerald': '0 0 25px rgba(0, 255, 135, 0.35)',
        'quantum-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'light-glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
