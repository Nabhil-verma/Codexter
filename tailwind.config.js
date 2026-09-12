/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0a0e14",
          900: "#0d1117",
          850: "#11161f",
          800: "#161b27",
          700: "#1f2633",
          600: "#2a3342",
        },
        mint: {
          300: "#7ee2b8",
          400: "#4ade9d",
          500: "#22c98a",
          600: "#16a96f",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(34, 201, 138, 0.25)",
      },
    },
  },
  plugins: [],
};
