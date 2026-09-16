/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // All values point at CSS variables defined once in app/globals.css.
      // Edit the theme in exactly one place: the :root block in globals.css.
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        board: "var(--color-board)",
        "board-alt": "var(--color-board-alt)",
        "board-line": "var(--color-board-line)",
        marigold: "var(--color-marigold)",
        ember: "var(--color-ember)",
        chalkteal: "var(--color-chalkteal)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        panel: "1.25rem",
      },
      boxShadow: {
        panel: "0 18px 40px -18px rgba(10, 20, 16, 0.55)",
      },
      keyframes: {
        "chalk-drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.25 },
          "50%": { opacity: 0.9 },
        },
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "chalk-drift-slow": "chalk-drift 26s linear infinite",
        "chalk-drift-slower": "chalk-drift 40s linear infinite reverse",
        twinkle: "twinkle 3.4s ease-in-out infinite",
        "orbit-spin-slow": "orbit-spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
