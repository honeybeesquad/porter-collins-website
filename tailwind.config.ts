import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Schematic dark palette — near-black with a cool blue cast
        navy: {
          950: "#020610", // deepest, hero base
          900: "#050B16", // primary background
          800: "#0A1424", // elevated surfaces
          700: "#11192C", // raised cards
          600: "#1B2942", // hairlines, dim borders
          500: "#2A3B5C", // strong borders
          400: "#3D5278", // dim labels
        },
        accent: {
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
        },
        // Cyan for the BESS dispatch line on the chart (kept narrow)
        signal: {
          400: "#38BDF8",
          500: "#0EA5E9",
        },
      },
      fontFamily: {
        // Geist for everything — variable axis covers display + body
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
        wider: "0.05em",
        widest: "0.18em",
      },
      fontSize: {
        // Display sizes for the schematic mega-type moments
        "mega-sm": ["3.5rem", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "mega": ["5rem", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "mega-lg": ["7rem", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "mega-xl": ["9rem", { lineHeight: "0.85", letterSpacing: "-0.045em" }],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scan: "scan 6s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
