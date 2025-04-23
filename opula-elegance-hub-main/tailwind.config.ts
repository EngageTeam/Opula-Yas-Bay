import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";


export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sand: {
          50: "#F5F5F0",
          100: "#E5E5DC",
          200: "#D6D6CC",
          300: "#C7C7BC",
          400: "#B8B8AC",
          500: "#A9A99C",
          600: "#9A9A8C",
          700: "#8B8B7C",
          800: "#7C7C6C",
          900: "#6D6D5C",
        },
        primary: {
          DEFAULT: "#2A2A28",
          foreground: "#F5F5F0",
        },
        secondary: {
          DEFAULT: "#E5E5DC",
          foreground: "#2A2A28",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
