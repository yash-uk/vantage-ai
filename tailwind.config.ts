import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      colors: {
        ink: "#2B211A",
        panel: "#FBF7EF",
        panel2: "#F3ECDD",
        line: "#E8DECD",
        dim: "#7A6F60",
        blue: "#7C2D3B",
        purple: "#C9972E",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(20px,-16px) scale(1.08)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 80%, 100%": { opacity: "0.2" },
          "40%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        blink: "blink 1.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
