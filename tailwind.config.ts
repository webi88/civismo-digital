import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#102A43",
          950: "#0A1929",
        },
        electric: {
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
        },
        signal: {
          300: "#FDC99A",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
        },
      },
      fontFamily: {
        heading: ["var(--font-space)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-ink":    "linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)",
        "hero-glow":   "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(6,182,212,0.18) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
