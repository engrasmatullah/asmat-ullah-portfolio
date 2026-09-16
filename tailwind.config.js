/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      maxWidth: {
        content: "1180px",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        "core-black": "var(--bg-base)",
        "core-navy": "var(--bg-surface)",
        "core-graphite": "var(--bg-surface-alt)",
        "core-line": "var(--border-color)",

        "paper-high": "var(--text-high)",
        "paper-mid": "var(--text-mid)",
        "paper-low": "var(--text-low)",

        "signal-blue": "var(--accent-blue)",
        "signal-cyan": "var(--accent-cyan)",
        "signal-violet": "var(--accent-violet)",
        "signal-amber": "var(--accent-amber)",
      },
      boxShadow: {
        glowBlue:
          "0 0 0 1px rgba(59,130,246,0.25), 0 8px 30px -4px rgba(59,130,246,0.35)",
        glowCyan:
          "0 0 0 1px rgba(34,211,238,0.25), 0 8px 30px -4px rgba(34,211,238,0.35)",
        glowAmber:
          "0 0 0 1px rgba(245,158,11,0.25), 0 8px 24px -4px rgba(245,158,11,0.30)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.25, transform: "scale(0.85)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
        pulseTrace: {
          "0%": { strokeDashoffset: 240 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        twinkle: "twinkle 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
