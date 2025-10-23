import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6edf5',
          100: '#ccdaeb',
          200: '#99b5d7',
          300: '#6690c3',
          400: '#336baf',
          500: '#00469b',
          600: '#003b82',
          700: '#002f68',
          800: '#00234f',
          900: '#001735',
        },
      },
    },
  },
  plugins: [],
};
export default config;
