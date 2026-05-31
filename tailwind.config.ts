import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0F",
        "bg-card": "#111118",
        "bg-navbar": "#0D0D14",
        cyan: "#00D4FF",
        purple: "#6B5CE7",
        "text-muted": "#9999AA",
        border: "#1E1E2E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 40px rgba(107,92,231,0.5)" },
          "50%": { boxShadow: "0 0 80px rgba(0,212,255,0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;


