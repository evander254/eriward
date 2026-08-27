/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        eriward: {
          blue: '#0758ad',
          sky: '#0b8fe8',
          cyan: '#38c7ff',
          ink: '#082d55',
          muted: '#5b7188',
          pale: '#eef9ff',
          line: '#d9edf8',
        },
      },
      boxShadow: {
        eriward: '0 24px 70px rgba(3,68,126,.16)',
      },
      borderRadius: {
        eriward: '28px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
