/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // warm off-white page surfaces
        paper: {
          DEFAULT: "#faf8f4",
          50: "#ffffff",
          100: "#f4f1ea",
          200: "#e9e4d8",
          300: "#d9d2c0",
        },
        // near-black text + dark code windows
        ink: {
          950: "#0b0b0c",
          900: "#131316",
          850: "#1b1b1f",
          800: "#242429",
          700: "#2e2e35",
          600: "#3a3a42",
        },
        // metallic gold accent
        gold: {
          300: "#ecd9a0",
          400: "#d4af37",
          500: "#b8912e",
          600: "#94721f",
          700: "#6f5514",
        },
      },
      boxShadow: {
        glow: "0 0 22px rgba(212, 175, 55, 0.18)",
        lift: "0 1px 2px rgba(28, 25, 23, 0.05), 0 8px 24px rgba(28, 25, 23, 0.06)",
      },
    },
  },
  plugins: [],
};
