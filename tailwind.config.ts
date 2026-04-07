import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060F23",
          900: "#0B1E3F",
          800: "#11294F",
          700: "#1E3A6B",
          600: "#2C4D85",
          500: "#3B62A0",
        },
        accent: {
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
        },
      },
      fontFamily: {
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 30, 63, 0.06), 0 4px 16px rgba(11, 30, 63, 0.06)",
        "card-hover":
          "0 2px 4px rgba(11, 30, 63, 0.08), 0 12px 32px rgba(11, 30, 63, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
