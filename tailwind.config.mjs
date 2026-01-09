/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Kosovo Flag Colors
        'kosovo-blue': '#244AA5',
        'kosovo-gold': '#D0A650',
        'kosovo-white': '#FFFFFF',
        // Additional shades
        'kosovo-blue-dark': '#1a3a7a',
        'kosovo-blue-light': '#3a5fb8',
        'kosovo-gold-dark': '#b8933f',
        'kosovo-gold-light': '#e0ba6a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
};
