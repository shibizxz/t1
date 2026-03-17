import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--bg)",
        soft: "var(--bg-soft)",
        panel: "var(--panel)",
        line: "var(--line)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        signal: "var(--signal)",
        danger: "var(--danger)",
      },
      boxShadow: {
        glow: "0 18px 55px rgba(0, 195, 137, 0.18)",
      },
      backgroundImage: {
        "accent-sweep":
          "linear-gradient(135deg, rgba(145, 242, 195, 0.25), rgba(255, 157, 92, 0.08))",
      },
    },
  },
  plugins: [],
};

export default config;
