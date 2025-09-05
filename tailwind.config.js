/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#F1F0EA',
        text: '#0E0E0E',
        muted: '#6B6B6B',
        accent: '#FF3B00',
        line: '#0E0E0E',
      },
      letterSpacing: { 
        tightest: '-0.02em',
        tighter: '-0.01em',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
