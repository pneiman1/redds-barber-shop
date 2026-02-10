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
        background: {
          DEFAULT: '#0a0a0a',
          secondary: '#121212',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#a1a1aa',
        },
        primary: {
          500: '#7f1d1d',
          600: '#6b1515',
          700: '#5a1212',
        },
        accent: {
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(127, 29, 29, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(127, 29, 29, 0.8)' },
        },
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(127, 29, 29, 0.5)',
        'glow-gold': '0 0 20px rgba(234, 179, 8, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
