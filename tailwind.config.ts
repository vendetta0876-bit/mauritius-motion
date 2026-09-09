import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A1A22", // nuance 1 — bleu nuit profond
          alt: "#0F2530",     // nuance 2 — alternance de sections
        },
        coral: {
          DEFAULT: "#FF5A36",
          dim: "#B8461F",
        },
        lagoon: {
          DEFAULT: "#00C2B2",
          dim: "#00877B",
        },
        ink: {
          50: "#F4F7F8",
          200: "#B5C4C9",
          400: "#7A929A",
          600: "#4A6069",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        card: "14px",
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
