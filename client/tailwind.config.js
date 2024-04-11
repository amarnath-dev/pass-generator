/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "background": "#111827",
        "one": "#f7f8fe",
      }
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

