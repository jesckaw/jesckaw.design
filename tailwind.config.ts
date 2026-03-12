import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        cream: "#F9F6F1",
        stone: "#E8E3DB",
        ink: "#1A1814",
        muted: "#8A8478",
        accent: "#C9A96E",
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
