import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#FAF6F0",
        cream: "#F3EBDD",
        espresso: "#3E2B22",
        cocoa: "#6B4F3A",
        terracotta: "#C08A5B",
        terracottaDark: "#A9713F",
        blush: "#E8C4B8",
        ink: "#2B2B2B",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(62, 43, 34, 0.25)",
        card: "0 8px 30px -10px rgba(62, 43, 34, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
