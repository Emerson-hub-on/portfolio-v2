/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          950: '#050508',
          900: '#0a0a10',
          800: '#111118',
          700: '#1a1a24',
          600: '#24242f',
        },
        accent: {
          DEFAULT: '#7c6aff',
          light: '#a99aff',
          dim: '#3d2fa8',
        },
        cyan: {
          accent: '#00e5cc',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.section-label': {
          '@apply font-mono text-sm tracking-widest uppercase': {},
          color: '#7c6aff',
        },
        '.card-dark': {
          '@apply rounded-xl': {},
          backgroundColor: '#111118',
          border: '1px solid #1a1a24',
        },
        '.glow-line': {
          '@apply h-px w-full': {},
          background: 'linear-gradient(90deg, transparent, #7c6aff, transparent)',
        },
      })
    })
  ],
}