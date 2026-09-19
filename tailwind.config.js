/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uv-bg': '#F4F5F7',
        'uv-blue': '#0044A5',
        'uv-green': '#43A047',
        'uv-green-light': '#E8F5E9',
        'uv-text-main': '#1F2937',
        'uv-text-sub': '#6B7280',
        'uv-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
