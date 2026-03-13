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
        cream: "#0D0D0D",
        stone: "#1A1A1A",
        ink: "#EDEBE6",
        muted: "#6B6560",
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
